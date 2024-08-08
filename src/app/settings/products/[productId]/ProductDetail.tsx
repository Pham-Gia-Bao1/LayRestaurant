"use client";
import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import { API_URL, formatMoney, LOGO } from "@/utils";
import { useTheme } from "next-themes";
import { useCart } from "@/components/context/CartContext";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { message, Rate } from "antd";
import { CartItem, Product, PropductParameters } from "@/types";
import { useCartPay } from "@/components/context/CartPayContext";
import { isString } from "lodash";
import { useRouter } from "next/navigation";

import axios from "axios";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Image from "next/image";
import Loading from "@/components/loading/Loading";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductDetail: React.FC<PropductParameters> = ({ params }) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const token = useSelector((state: RootState) => state.auth.token);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(4.5); // Default rating
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, refreshCart } = useCart();
  const { addToCartPay } = useCartPay();
  const [price, setPrice] = useState<number>(1);
  const router = useRouter();

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const cartIconRef = useRef<HTMLDivElement | null>(null);
  const miniImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const productId = params.productId ?? 1;
    if (isNaN(productId)) {
      setError("Invalid product ID.");
      setLoading(false);
      return;
    }
    getData(productId);
  }, [params.productId]);

  async function getData(productId: number): Promise<void> {
    const apiUrl = `${API_URL}/foods/${productId}`;
    try {
      const response = await axios.get<Product>(apiUrl);
      const fetchedProduct = response.data;
      setProduct({
        ...fetchedProduct,
        price:
          typeof fetchedProduct.price === "string"
            ? parseFloat(fetchedProduct.price)
            : fetchedProduct.price,
      });
      setPrice(
        typeof fetchedProduct.price === "string"
          ? parseFloat(fetchedProduct.price)
          : fetchedProduct.price
      );
      setLoading(false);
    } catch (error) {
      setError("Product does not exist.");
      setLoading(false);
      console.error("Failed to fetch data:", error);
    }
  }

  const handleAddToCart = () => {
    if (product && token) {
      const cartItem: CartItem = {
        id: product.id,
        name: product.name,
        price: isString(product.price)
          ? parseInt(product.price)
          : product.price,
        description: product.description,
        type: product.type,
        picture: product.picture,
        quantity: quantity,
      };
      addToCart(cartItem);
      if (buttonRef.current && cartIconRef.current && miniImageRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const cartRect = cartIconRef.current.getBoundingClientRect();
        miniImageRef.current.style.opacity = "1";
        miniImageRef.current.style.left = `${buttonRect.left}px`;
        miniImageRef.current.style.top = `${buttonRect.top}px`;
        setTimeout(() => {
          miniImageRef.current!.style.transition =
            "transform 1s ease-in-out, opacity 1s ease-in-out";
          miniImageRef.current!.style.transform = `translate(${
            cartRect.left - buttonRect.left + 1290
          }px, ${cartRect.top - buttonRect.top}px)`;
          miniImageRef.current!.style.opacity = "0";
          setTimeout(() => {
            miniImageRef.current!.style.transition = "none";
            miniImageRef.current!.style.transform = "none";
          }, 1000);
        }, 0);
      }
    } else {
      message.error("You need to login first");
      router.push("/login");
    }
    refreshCart();
  };

  const handleBuy = () => {
    if (product && token && currentUser) {
      const cartItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        type: product.type,
        picture: product.picture,
        quantity: quantity,
      };
      addToCartPay(cartItem);
      addToCart(cartItem);
      router.push("/settings/products/order");
      message.success("Added to cart and redirected to order page.");
    } else {
      message.error("You need to login first");
      router.push("/login");
    }
    refreshCart();
  };

  const handleRateChange = (value: number) => {
    setRating(value);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value); // Ensure the quantity is always at least 1
  };

  return (
    <>
      <main className="flex flex-col items-center overflow-x-hidden py-6">
        <div className="w-[100%] sm:w-[90%] rounded-lg overflow-hidden">
          {loading && (
            <div className="detail flex gap-4 w-full h-[60vh] justify-center items-center rounded-lg">
              <Loading />
            </div>
          )}
          {error && <div className="text-center text-red-500">{error}</div>}
          {product && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6">
              <div className="">
                <Image
                  width={1000}
                  height={1100}
                  src={product.picture}
                  alt={product.name}
                  className="object-cover w-full rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <nav className="text-sm sm:text-base text-gray-600 mb-2 bg-gray-100">
                  Quỳnh Anh Restaurant » Village 2 Thanh Sen » Phúc Trạch » Bố
                  Trạch » Quảng Bình
                </nav>
                <h3 className="text-3xl truncate-description-2line sm:text-4xl font-bold text-blue-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center w-32 mb-4 bg-red-600">
                  <ThumbUpIcon fontSize="small" className="text-white mr-2" />
                  <p className="text-white">Favorite</p>
                </div>
                <p className="text-gray-700 truncate-description text-base sm:text-lg mb-2">
                  {product.description}
                </p>
                <div className="flex items-center mb-1">
                  <span className="text-green-600 font-semibold mr-2">
                    Open
                  </span>
                  <p className="text-lg sm:text-xl text-gray-500">
                    09:00 - 22:00
                  </p>
                </div>
                <div className="flex items-center">
                  <Rate
                    allowHalf
                    value={rating}
                    onChange={handleRateChange}
                    className="text-lg"
                  />
                  <span className="ml-2 text-yellow-500 text-sm font-semibold">
                    {rating} / 5
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-semibold text-green-600 mt-4">
                  Price: {formatMoney(price)}
                </p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 px-5 rounded-full border border-gray-300 bg-green-300 hover:bg-green-400"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border border-gray-300 text-black rounded-md"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="p-2 px-5 rounded-full border border-gray-300 bg-green-300 hover:bg-green-400"
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={handleAddToCart}
                    className="bg-orange-500 w-1/2 sm:w-auto  text-white px-4 py-4 rounded-md flex justify-center items-center gap-3 hover:bg-orange-600"
                    ref={buttonRef}
                  >
                    <ShoppingCartIcon />
                    Add to cart
                  </button>
                  <button
                    onClick={handleBuy}
                    className="bg-green-500 w-1/2 sm:w-auto  text-white px-4 py-4 rounded-md hover:bg-green-600"
                  >
                    Buy now
                  </button>
                </div>
                <div
                  className="absolute bg-red-600 p-4 rounded-full hidden w-0 h-0 justify-center items-center"
                  ref={cartIconRef}
                ></div>
                <div
                  ref={miniImageRef} // Added ref for mini image
                  className="mini-image"
                  style={{
                    position: "fixed",
                    width: "50px",
                    height: "50px",
                    opacity: 0,
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={
                      product?.picture ??
                      "https://hips.hearstapps.com/hmg-prod/images/roasted-chickpea-tomato-and-chicken-bowls-healthy-chicken-recipes-65e8b8ff3ccf6.jpg?crop=1.00xw:0.502xh;0,0.190xh&resize=1200:*"
                    }
                    alt="Mini Product"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );

};

export default ProductDetail;
