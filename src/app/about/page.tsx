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
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata(
  "About Us",
  "Welcome to LayRestaurant, the best platform for booking food and rooms"
);

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-gray-900 bg-gray-100">
      {/* Header Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-16">
        <div className="flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl font-extrabold text-teal-700">About Us</h1>
          <p className="text-lg mt-4 max-w-2xl text-gray-700">
            Welcome to our restaurant and hotel! Here, we offer unique culinary
            services and an excellent lodging experience.
          </p>
        </div>
        <div className="ml-5 flex justify-center">
          <Image
            width={500}
            height={500}
            src={TopImage}
            alt="Lay main image"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
      {/* Contact Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-16">
        <div className="ml-5 flex justify-center items-center">
          <Image
            width={500}
            height={500}
            src={SubTopImage}
            alt="Chef image"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-3xl font-bold text-teal-700">Contact Information</h2>
          <p className="mt-2 flex items-center text-gray-700">
            <PhoneOutlined className="mr-2 text-teal-500" /> Phone Number: +84 123 456 789
          </p>
          <p className="mt-2 text-gray-700">
            Address: 123 ABC Street, XYZ Ward, District 1, HCMC
          </p>
          <div className="flex mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800 mr-4"
            >
              <FacebookOutlined className="text-3xl" />
            </a>
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800"
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
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">Restaurant Introduction</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-2xl rounded-xl overflow-hidden text-teal-700 transition-transform transform hover:scale-105">
            <Image
              src={RestaurantImage4}
              alt="Restaurant Image 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-teal-700">Our Best Chef</h3>
              <p className="text-gray-700">
                Our best chef is dedicated to providing the finest culinary experience.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src={RestaurantImage3}
              alt="Restaurant Image 2"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-teal-700">Fine Dining</h3>
              <p className="text-gray-700">
                Experience the best fine dining with exquisite flavors and ambiance.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src={RestaurantImage1}
              alt="Restaurant Image 3"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-teal-700">Exquisite Cuisine</h3>
              <p className="text-gray-700">
                Taste our exquisite cuisine crafted by world-class chefs.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <Image
              src={RestaurantImage2}
              alt="Restaurant Image 4"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-teal-700">Luxury Rooms</h3>
              <p className="text-gray-700">
                Stay in our luxury rooms and enjoy the comfort and elegance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Map and Contact Form Section */}
      <section className="mb-16 flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-16 md:mb-0">
          <h2 className="text-3xl font-bold text-teal-700 text-center md:text-left mb-4">Our Location</h2>
          <div className="mt-4 bg-white shadow-2xl rounded-xl p-6">
            <GoogleMapEmbed />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-teal-700 text-center md:text-left mb-4">Contact Us</h2>
          <form className="mt-4 bg-white shadow-2xl rounded-xl p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                rows={4}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
