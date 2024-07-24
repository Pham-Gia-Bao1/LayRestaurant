"use client";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { useTheme } from "next-themes";
import BannerTopImage from "../../assets/images/TopBanner.png";
import HeartIcon from "../../assets/images/HeartIcon.png";
import FirstBgIcon from "../../assets/images/icons/Orange.png";
import SecondBgIcon from "../../assets/images/icons/Mint.png";
import GridBg from "../../assets/images/icons/BgGrid.png";
import HomePageCartRestaurant from "@/components/cart/HomePageCartRestaurant";
import FirstFoodImage from "../../assets/images/FirtFood.png";
import SecondFoodImage from "../../assets/images/SecondFood.png";
import ThirthFoodImage from "../../assets/images/ThirthFood.png";
import ForFoodImage from "../../assets/images/ForthFood.png";
import Settings from "@/components/pages/Settings";
import CartShop from "@/components/cart/CartShop";

const CardRestaurant = [
  {
    imageUrl: FirstFoodImage,
    discount: "-40%",
    title: "Chef Burgers London",
    restaurant: "Restaurant",
  },
  {
    imageUrl: SecondFoodImage,
    discount: "-20%",
    title: "Grand Ai Cafe London",
    restaurant: "Restaurant",
  },
  {
    imageUrl: ThirthFoodImage,
    discount: "-17%",
    title: "Butterbrot Cafe London",
    restaurant: "Restaurant",
  },
  {
    imageUrl: ForFoodImage,
    discount: "-17%",
    title: "Butterbrot Cafe London",
    restaurant: "Restaurant",
  },
];

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:container md:mx-auto w-full">
      <div className="flex-1 p-4 sm:p-8 w-full">
        <div className="bg-white w-full sm:h-[80vh] h-auto flex flex-row gap-3 p-5 justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="relative flex flex-col justify-center items-center sm:items-start w-full sm:w-[50%]  space-y-4 sm:pl-10 ">
            <Image
              width={100}
              height={100}
              src={FirstBgIcon}
              alt="Top Icon"
              className="absolute top-0 right-0"
            />
            <Image
              width={100}
              height={100}
              src={SecondBgIcon}
              alt="Top Icon"
              className="absolute bottom-0 left-0"
            />
            <div className="flex items-center space-x-2 ">
              <Image
                width={24}
                height={24}
                src={HeartIcon}
                alt="Top Icon"
                className="bg-pink-400 p-2 rounded-full"
              />
              <p className="text-sm text-gray-500">People Trust us</p>
            </div>

            <h1 className="text-5xl text-center sm:text-start  sm:text-7xl font-bold text-gray-800">
              We are <span className="text-red-500">Serious</span> For{" "}
              <span className="text-yellow-500">Food & Delivery.</span>
            </h1>
            <p className="text-lg text-center sm:text-start sm:text-xl text-gray-600">
              Best cooks and best delivery guys all at your service. Hot tasty
              food will reach you in 60 minutes.
            </p>
          </div>
          <div className="w-full relative flex items-center justify-center sm:w-1/2">
            <Image
              width={300}
              height={300}
              src={GridBg}
              alt="Top Icon"
              className="absolute top-0 right-0"
            />
            <Image
              width={600}
              height={500}
              src={BannerTopImage}
              alt="Top banner"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className={`${theme} flex items-center justify-between  py-16 p-4 w-full flex-wrap`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black ">
              Up to <span className="text-blue-600">-40%</span> 🎉 Order.uk
              exclusive deals
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">Vegan</button>
            <button className="text-gray-600">Sushi</button>
            <button className="text-orange-600 border border-orange-600 px-4 py-1 rounded-full">
              Pizza & Fast food
            </button>
            <button className="text-gray-600">others</button>
          </div>
        </div>
        <div
          className={`${theme} sm:gap-3 gap-5 flex items-center justify-between p-3  w-full flex-wrap`}
        >
          {CardRestaurant.map((cart, index) => (
            <HomePageCartRestaurant
              key={index}
              imageUrl={cart.imageUrl}
              discount={cart.discount}
              title={cart.title}
              restaurant={cart.restaurant}
            />
          ))}
        </div>

        <div
          className={`${theme} sm:gap-3 gap-5 flex items-center justify-between w-full flex-wrap`}
        >
          <Settings />
        </div>
        <div
          className={`${theme} flex items-center justify-between  py-12 p-4 w-full flex-wrap`}
        >
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black ">
              Popular Restaurants
            </span>
          </div>
        </div>
        <div
          className={`${theme} flex items-center justify-between w-full flex-wrap`}
        >
          <div className="flex items-center w-full">
            <CartShop />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
