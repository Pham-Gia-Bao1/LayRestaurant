"use client";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import axios from "axios";
import { API_URL, formatNumber } from "@/utils";
import Image from "next/image";
import Loading from "@/components/loading/Loading";
import { useTheme } from "next-themes";
import { useCart } from "@/components/context/CartContext";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { message, Rate } from "antd";
import { CartItem, Product, PropductParameters } from "@/types";
import { useCartPay } from "@/components/context/CartPayContext";
import { useRouter } from "next/navigation";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { isString } from "lodash";
const ProductDetail: React.FC<PropductParameters> = ({ params }) => {
  const { theme } = useTheme();
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
  // Tham chiếu đến phần tử nút và giỏ hàng
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
        price: isString(product.price) ? parseInt(product.price) : product.price,
        description: product.description,
        type: product.type,
        picture: product.picture,
        quantity: quantity,
      };
      addToCart(cartItem);
      // Di chuyển mini ảnh
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
            cartRect.left - buttonRect.left - 290
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
    }
    refreshCart();
  };
  const handleBuy = () => {
    if (product && token) {
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
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden py-6   ">
      <div className="w-[100%] sm:w-[90%] rounded-lg overflow-hidden">
        {loading && (
          <div className="detail flex gap-4 w-full h-full p-4 rounded-lg">
            <Loading />
          </div>
        )}
        {error && <div className="text-center text-red-500">{error}</div>}
        {product && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6">
            <div className="">
              <Image
                width={1000}
                height={1000}
                src={product.picture}
                alt={product.name}
                className="object-cover w-full rounded-md"
              />
            </div>
            <div className=" flex flex-col">
              <nav className="text-sm sm:text-base text-gray-600 mb-2 bg-gray-100">
                Quỳnh Anh restaurant » Thôn 2 Thanh Sen » Phúc Trạch » Bố Trạch
                » Quảng Bình
              </nav>
              <h3 className="text-3xl truncate-description-2line sm:text-4xl font-bold text-blue-900 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-center w-32 mb-4 bg-red-600">
                <ThumbUpIcon fontSize="small" className="text-white mr-2" />
                <p className="text-white">Yêu thích</p>
              </div>
              <p className="text-gray-700 truncate-description text-base sm:text-lg mb-2">
                {product.description}
              </p>
              <div className="flex items-center mb-1">
                <span className="text-green-600 font-semibold mr-2">
                  Mở cửa
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
                  999+
                </span>
                <p className="ml-2 text-xs text-gray-500">
                  đánh giá trên ShopeeFood
                </p>
              </div>
              <p className="text-lg sm:text-xl font-semibold text-green-600 mb-2 ">
                {formatNumber(price * 1000)} vnd
              </p>
              <div className="flex items-center mb-4">
                <button
                  onClick={decrementQuantity}
                  className="p-2 w-16 text-xl bg-gray-300 text-black rounded-l hover:bg-gray-400 transition"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-36 text-center p-2 border border-gray-300 text-black"
                  min={1} // Minimum quantity
                />
                <button
                  onClick={incrementQuantity}
                  className="p-2 w-16 text-xl bg-gray-300 text-black rounded-r hover:bg-gray-400 transition"
                >
                  +
                </button>
              </div>
              <div className="flex items-center mb-4">
                <button
                  onClick={handleAddToCart}
                  ref={buttonRef} // Thêm ref cho nút
                  className="px-4 py-2 w-1/2 sm:w-32 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuy}
                  className="px-4 py-2 sm:w-36 sm:-w-2 w-1/2  bg-green-500 text-white rounded ml-2 hover:bg-green-600 transition"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Vị trí của icon giỏ hàng */}
      <div
        ref={cartIconRef} // Thêm ref cho giỏ hàng
        className="cart-icon"
        style={{ position: "fixed", top: "10px", right: "10px" }}
      >
        <Image
          width={50}
          height={50}
          src="/cart-icon.png"
          alt="Cart Icon"
          className="object-cover w-full rounded-md"
        />
      </div>
      {/* Mini ảnh sẽ được thêm và di chuyển khi nhấn nút */}
      <div
        ref={miniImageRef} // Thêm ref cho mini ảnh
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
    </main>
  );
};
export default ProductDetail;
