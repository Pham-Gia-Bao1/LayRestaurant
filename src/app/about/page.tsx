import React from "react";
import { FacebookOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import GoogleMapEmbed from "@/components/map/Map";

import RestaurantImage1 from "../../assets/images/RestaurantImage1.png";
import RestaurantImage2 from "../../assets/images/RestaurantImage2.png";
import RestaurantImage3 from "../../assets/images/RestaurantImage3.png";
import RestaurantImage4 from "../../assets/images/RestaurantImage4.png";
import TopImage from "../../assets/images/TopBanner.png";
import SubTopImage from "../../assets/images/Chef.png";
import Footer from "@/components/layout/Footer";


const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-black bg-gray-50">
      {/* Header Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
        <div className="flex items-center flex-col justify-center">
          <h1 className="text-4xl font-bold">Về Chúng Tôi</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Chào mừng bạn đến với nhà hàng và khách sạn của chúng tôi! Tại đây,
            chúng tôi cung cấp các dịch vụ ẩm thực độc đáo và trải nghiệm lưu
            trú tuyệt vời.
          </p>
        </div>
        <div className=" ml-5">
          <Image width={500} height={500} src={TopImage} alt="Lay main image" />
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
        <div className=" ml-5 flex justify-center items-center">
          <Image width={500} height={500} src={SubTopImage} alt="Lay main image" />
        </div>
        <div className="flex items-center flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Thông Tin Liên Hệ
          </h2>
          <p className="mt-2 flex items-center">
            <PhoneOutlined className="mr-2" /> Số điện thoại: +84 123 456 789
          </p>
          <p className="mt-2">
            Địa chỉ: 123 Đường ABC, Phường XYZ, Quận 1, TP.HCM
          </p>
          <div className="flex mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 mr-4"
            >
              <FacebookOutlined className="text-2xl" />
            </a>
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <Image
                width={24}
                height={24}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_Zalo.svg/2048px-Logo_Zalo.svg.png"
                alt="Zalo"
                className="w-6 h-6 inline"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Restaurant Introduction Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800">
          Giới Thiệu Nhà Hàng
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={RestaurantImage4}
              alt="Restaurant Image 1"
              width={500}
              height={300}
              className="w-full h-[60%]"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Best Chef</h3>
              <p>
                Our best chef is dedicated to providing the finest culinary
                experience.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={RestaurantImage3}
              alt="Restaurant Image 2"
              width={500}
              height={300}
              className="w-full h-[60%]"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Fine Dining</h3>
              <p>
                Experience the best fine dining with exquisite flavors and
                ambiance.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={RestaurantImage1}
              alt="Restaurant Image 2"
              width={500}
              height={300}
              className="w-full h-[60%]"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Fine Dining</h3>
              <p>
                Experience the best fine dining with exquisite flavors and
                ambiance.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={RestaurantImage2}
              alt="Restaurant Image 3"
              width={500}
              height={300}
              className="w-full h-[60%]"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Luxury Rooms</h3>
              <p>
                Stay in our luxury rooms and enjoy the comfort and elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Form Section */}
      <section className="mb-10 flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800">Bản Đồ</h2>
          <div className="mt-4 bg-white shadow-lg rounded-lg p-6">
            <GoogleMapEmbed />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800">
            Liên Hệ Với Chúng Tôi
          </h2>
          <form className="mt-4 bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Tên của bạn
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                placeholder="Nhập tên của bạn"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Tin nhắn
              </label>
              <textarea
                id="message"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                rows={4}
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 w-full"
            >
              Gửi
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
