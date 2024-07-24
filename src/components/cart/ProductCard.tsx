import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import {
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { Popconfirm, PopconfirmProps, message } from "antd";
import { deleteFood } from "@/api";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Product } from "@/types";
interface ProductCardProps {
  params: Product;
  getData: () => void;
  openModal: (id: number) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  params,
  getData,
  openModal,
}) => {
  const { theme } = useTheme();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const token = useSelector((state: RootState) => state.auth.token);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    token
      ? setAnchorEl(event.currentTarget)
      : message.error("You need to login first!");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const confirm: PopconfirmProps["onConfirm"] = async (e) => {
    console.log(e);
    await deleteFood(params.id);
    getData();
    message.success("Deleted successfully!");
  };
  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div
      className={`${theme} ${
        theme === "dark" ? "bg-blue-500" : ""
      } rounded-lg overflow-hidden relative flex flex-col justify-between h-full`}
    >
      <Link href={`/settings/products/${params.id}`}>
        <p className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1 rounded-br-lg"></p>
        {params.picture ? (
          <Image
            src={params.picture}
            width={500}
            height={500}
            alt="Dish"
            className="w-full h-32 object-cover rounded"
          />
        ) : (
          <Image
            src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
            width={500}
            height={500}
            alt="Dish"
            className="w-full h-32 object-cover rounded"
          />
        )}
        <div className="p-3">
          <h2 className="mt-2 overflow-ellipsis overflow-hidden">
            {params.name}
          </h2>
          <p className="mt-2 overflow-ellipsis overflow-hidden">
            {params.description}
          </p>
          <p className="overflow-ellipsis overflow-hidden">
            ${params.price} • 30 Bowls
          </p>
        </div>
      </Link>
      <div className="absolute top-2 right-2">
        {currentUser?.role_id == 1 ? (
          <IconButton
            className="bg-white"
            aria-label="more options"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        ) : null}
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              openModal(params.id);
              handleClose();
            }}
            className="text-blue-600"
          >
            <BorderColorIcon />
          </MenuItem>
          <MenuItem>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={(e) => {
                confirm(e);
                handleClose();
              }}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
              placement="topRight"
              overlayClassName="custom-popconfirm"
            >
              <span className="flex items-center text-red-600">
                <DeleteIcon />
              </span>
            </Popconfirm>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default ProductCard;
