"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { fetchFoodsData, filter, getAllType, getFoodsByType } from "@/api";
import { Form, FormProps, message } from "antd";
import ProductForm from "@/components/form/Form";
import ProductCard from "@/components/cart/ProductCard";
import axios from "axios";
import { API_URL } from "@/utils";
import { Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Loading from "@/components/loading/Loading";
import SkeletonCard from "@/components/skeleton/Skeleton";
import { SearchBar } from "@/components/search/SearchBar";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FormSoft from "@/components/form/FormSoft";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { DataType, Product } from "@/types";
const Settings: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const router = useRouter();
  const { theme } = useTheme();
  const [foods, setFoods] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [fileList, setFileList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [showNotFound, setShowNotFound] = useState<boolean>(false);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isSubmitFilter, setIsSubmitFilter] = useState<boolean>(false);
  const [allType, setAllType] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loadingGetMoreData, setLoadingGetMoreData] = useState<boolean>(false); // Separate loading state for fetching more data
  const fetchingMoreData = useRef<boolean>(false);
  const [isMaxPage, setIsMaxPage] = useState<boolean>(false);
  const [data, setData] = useState<DataType>({
    name: "",
    price: 0,
    description: "",
    type: "",
    picture: "",
  });
  useEffect(() => {
    getData();
    fetchTypes();
  }, []);
  const handleScroll = useCallback(
    debounce(() => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          (document.documentElement && document.documentElement.scrollTop) ||
        0;
      const scrollDifference = documentHeight - viewportHeight - scrollPosition;
      if (
        scrollDifference < 1000 &&
        !fetchingMoreData.current &&
        !loadingGetMoreData &&
        !isMaxPage
      ) {
        fetchingMoreData.current = true;
        getMoreData();
      }
    }, 200),
    [page, loadingGetMoreData, isMaxPage]
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading && foods.length === 0) {
        setShowNotFound(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [loading, foods]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, handleScroll]);
  const fetchTypes = async () => {
    try {
      const types = await getAllType();
      const uniqueTypes = types.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      setAllType(uniqueTypes);
    } catch (error) {
      console.error("Failed to fetch types:", error);
    }
  };
  const getData = async () => {
    setLoading(true);
    try {
      const fetchedFoods = await fetchFoodsData(1);
      setIsMaxPage(false);
      setFoods(fetchedFoods);
      fetchingMoreData.current = false;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };
  const getMoreData = async () => {
    setLoadingGetMoreData(true);
    try {
      const nextPage = page + 1;
      const fetchedFoods = await fetchFoodsData(nextPage);
      if (fetchedFoods.length === 0) {
        setIsMaxPage(true);
      } else {
        setFoods((prevFoods) => [...prevFoods, ...fetchedFoods]);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Failed to fetch more data:", error);
    } finally {
      setLoadingGetMoreData(false); // Reset loading state
      fetchingMoreData.current = false;
    }
  };
  const showFilterForm = () => {
    setIsFilter((pre) => !pre);
  };
  const onFinishFilter: FormProps["onFinish"] = async (values) => {
    setIsSubmitFilter(true);
    try {
      const filteredData = await filter(parseInt(values.price));
      setIsFilter(false);
      setIsSubmitFilter(false);
      setFoods(filteredData.data);
    } catch (error) {
      console.error("Error fetching filtered foods:", error);
    }
  };
  const showModal = async (id: number) => {
    setIsModalOpen(true);
    setCurrentId(id);
    if (id !== 0) {
      try {
        const foodDetails = await axios.get(`${API_URL}/foods/${id}`);
        form.setFieldsValue(foodDetails.data);
        setImageUrl(foodDetails.data.picture);
        setFileList([{ url: foodDetails.data.picture }]);
      } catch (error) {
        console.error("Failed to fetch food details:", error);
      }
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const onFinish: FormProps["onFinish"] = async (values) => {
    setLoadingButton(true);
    try {
      const uploadedImageUrl = await getUrlUpdateUserImg(
        fileList[0].originFileObj
      );
      const newData: DataType = {
        name: values.name,
        price: values.price,
        description: values.description,
        type: values.type,
        picture: uploadedImageUrl,
      };
      setLoadingButton(false);
      createOrUpdateFood(newData);
      setData(newData);
      fetchTypes();
    } catch (error) {
      message.error("Image upload failed. Please try again.");
      setLoading(false);
    }
    setIsModalOpen(false);
  };
  const createOrUpdateFood = async (data: DataType) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price.toString());
      formData.append("description", data.description);
      formData.append("type", data.type);
      formData.append("picture", data.picture);
      if (currentId === 0) {
        await axios.post(API_URL + "/foods", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        message.success("Food item created successfully!");
      } else {
        await axios.put(`${API_URL}/foods/${currentId}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        message.success("Food item updated successfully!");
      }
      fetchingMoreData.current = false;
      getData();
      setLoading(false);
      setPage(1);
      setIsMaxPage(false);
    } catch (error: any) {
      message.error("Failed to create or update food item.");
      console.log(error.message);
      setLoading(false);
    }
  };
  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    message.error("Failed to submit form!.");
  };
  const handleChange = (info: any) => {
    let updatedFileList = [...info.fileList];
    updatedFileList = updatedFileList.slice(-1);
    setFileList(updatedFileList);
    if (info.file.status === "done") {
      setImageUrl(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const getUrlUpdateUserImg = async (file: File) => {
    const CLOUD_NAME = "dugeyusti";
    const PRESET_NAME = "expert_upload";
    const FOLDER_NAME = "BitStorm";
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);
    formData.append("file", file);
    const options = {
      method: "POST",
      body: formData,
    };
    try {
      const res = await fetch(api, options);
      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };
  const uniqueTypes = allType.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  const handleClick = async (type: string) => {
    const updatedPath = `?type=${type}`;
    router.push(updatedPath);
    try {
      const results = await getFoodsByType(type);
      setFoods(results);
    } catch (error) {
      throw error;
    }
  };
  const handleClickAll = () => {
    const originPath = "/";
    router.push(originPath);
    getData();
  };
  return (
    <div className="flex w-full">
      <div className={`w-full rounded-lg ${theme}`}>
        {loading ? (
          <>
            <Loading />
            <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width="30%" />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between w-screen overflow-hidden pr-14 sm:pr-0 sm:w-full m-2 ml-0  flex-wrap">
              <div
                className={`${theme} flex items-center justify-between py-6 sm:py-16 flex-wrap`}
              >
                <span className="sm:text-2xl font-bold text-black ">
                  Order.uk Popular Categories
                </span>
              </div>
              <div className="flex items-center justify-end lg:w-2/4 sm:w-full md:w-full">
                <SearchBar setProducts={setFoods} />
              </div>
            </div>
            <div className="flex justify-between mb-4 flex-wrap gap-3">
              <div className="scroll-container p-2 flex sm:gap-3 gap-1.5 justify-start items-center overflow-x-auto whitespace-nowrap">
                <button
                  type="button"
                  className={`${theme} box-shadow px-3 py-2 active:bg-red-500 hover:bg-gray-800 rounded whitespace-nowrap`}
                  onClick={handleClickAll}
                >
                  All
                </button>
                {uniqueTypes.map((type, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`${theme} box-shadow px-3 min-w-fit py-2 active:bg-red-500 hover:bg-gray-800 rounded whitespace-nowrap`}
                    onClick={() => handleClick(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="flex justify-end items-center gap-2 ">
                <button
                  onClick={showFilterForm}
                  className={`${theme} box-shadow px-4 py-2 rounded`}
                >
                  <FilterAltIcon />
                </button>
                {currentUser?.role_id == 1 ? (
                  <button
                    type="button"
                    className={`${theme} box-shadow px-4 py-2 active:bg-red-500 hover:bg-gray-800 rounded`}
                    onClick={() =>
                      token
                        ? showModal(0)
                        : message.error("You need to login first!")
                    }
                  >
                    <AddIcon />
                  </button>
                ) : null}
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 flex-wrap p-2 relative">
          <FormSoft
            loading={isSubmitFilter}
            onFinish={onFinishFilter}
            handleCancel={showFilterForm}
            open={isFilter}
          />
          {loading ? (
            [...Array(10)].map((_, index) => <SkeletonCard key={index} />)
          ) : foods.length === 0 ? (
            showNotFound ? (
              <div className="absolute text-black flex items-center justify-center w-full text-center sm:text-3xl">
                <h1>Product not found</h1>
              </div>
            ) : null
          ) : (
            foods.map((food, index) => (
              <React.Fragment key={index}>
                <ProductForm
                  id={food.id}
                  open={isModalOpen}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  handleCancel={handleCancel}
                  form={form}
                  imageUrl={imageUrl}
                  fileList={fileList}
                  handleChange={handleChange}
                  loading={loadingButton}
                  types={allType}
                />
                <ProductCard
                  openModal={() => showModal(food.id)}
                  key={food.id}
                  getData={getData}
                  params={food}
                />
              </React.Fragment>
            ))
          )}
          {loadingGetMoreData &&
            !isMaxPage &&
            [...Array(6)].map((_, index) => <SkeletonCard key={index} />)}
        </div>
      </div>
    </div>
  );
};
export default Settings;
