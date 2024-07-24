"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/utils";
import Image from "next/image";
import Loading from "@/components/loading/Loading";
import { useTheme } from "next-themes";
import { useCart } from "@/components/context/CartContext";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { message, Rate, Divider } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import { CartItem, Product, PropductParameters } from "@/types";
import { useCartPay } from "@/components/context/CartPayContext";
import { useRouter } from "next/navigation";
type Review = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
};
const sampleReviews: Review[] = [
  {
    id: 1,
    author: "User1",
    content: "This product is awesome!",
    createdAt: "2024-07-09T12:00:00Z",
  },
  {
    id: 2,
    author: "User2",
    content: "Highly recommend!",
    createdAt: "2024-07-08T12:00:00Z",
  },
  {
    id: 3,
    author: "User3",
    content: "Good quality and fast shipping.",
    createdAt: "2024-07-07T12:00:00Z",
  },
  {
    id: 4,
    author: "User4",
    content: "Very satisfied with this purchase.",
    createdAt: "2024-07-06T12:00:00Z",
  },
  {
    id: 5,
    author: "User5",
    content: "Exactly as described.",
    createdAt: "2024-07-05T12:00:00Z",
  },
  {
    id: 6,
    author: "User6",
    content: "Fast delivery and good packaging.",
    createdAt: "2024-07-04T12:00:00Z",
  },
  {
    id: 7,
    author: "User7",
    content: "Could be better.",
    createdAt: "2024-07-03T12:00:00Z",
  },
  {
    id: 8,
    author: "User8",
    content: "Not bad for the price.",
    createdAt: "2024-07-02T12:00:00Z",
  },
  {
    id: 9,
    author: "User9",
    content: "Excellent customer service.",
    createdAt: "2024-07-01T12:00:00Z",
  },
  {
    id: 10,
    author: "User10",
    content: "Love it!",
    createdAt: "2024-06-30T12:00:00Z",
  },
];
const ProductDetail: React.FC<PropductParameters> = ({ params }) => {
  const { theme } = useTheme();
  const token = useSelector((state: RootState) => state.auth.token);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0); // State để lưu đánh giá sản phẩm
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, refreshCart } = useCart();
  const { addToCartPay } = useCartPay(); // Sử dụng addToCartPay từ context
  const router = useRouter();
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
      setProduct(response.data);
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
        price:
          typeof product.price === "string"
            ? parseFloat(product.price)
            : product.price,
        description: product.description,
        type: product.type,
        picture: product.picture,
        quantity: quantity,
      };
      addToCart(cartItem);
    } else {
      message.error("You need to login first");
    }
    refreshCart();
  };

  const handleBuy = () => {
    if (product && token) {
      const cartItem = {
        id: product.id,
        name: product.name,
        price:
          typeof product.price === "string"
            ? parseFloat(product.price)
            : product.price,
        description: product.description,
        type: product.type,
        picture: product.picture,
        quantity: quantity,
      };

      // Thêm vào useCartPay
      addToCartPay(cartItem);

      // Thêm vào useCart
      addToCart(cartItem);

      // Chuyển hướng đến trang order (thay 'order-page' bằng đường dẫn thực tế)
      router.push("/settings/products/order");

      // Message hoặc thông báo khác
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
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <div className={`h-50 w-full rounded-lg`}>
        {loading && (
          <div className="detail flex gap-4 w-full h-full p-4 rounded-lg">
            <Loading />
          </div>
        )}
        {error && <div>{error}</div>}
        {product && (
          <div
            className={`grid sm:grid-cols-2 gap-4  h-full p-4 rounded-lg text-black`}
          >
            <Image
              width={1000}
              height={500}
              src={product.picture}
              alt={product.name}
              className="object-cover rounded-lg"
            />
            <div className="detail-content">
              <h3 className="detail-title text-2xl font-semibold mb-2">
                Name: {product.name}
              </h3>
              <p className="detail-description mb-2">
                Description: {product.description}
              </p>
              <p className="detail-price text-lg font-medium">
                Price: ${product.price}
              </p>
              <p className="detail-type text-lg">Type: {product.type}</p>
              <div className="flex items-center mb-4">
                <Rate allowHalf value={rating} onChange={handleRateChange} />
                <span className="ml-2">{rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center mb-4">
                <button
                  onClick={decrementQuantity}
                  className="px-2 py-1 bg-gray-300 text-black rounded-l"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-12 text-center"
                  min="1"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-2 py-1 bg-gray-300 text-black rounded-r"
                >
                  +
                </button>
              </div>
              <Divider />
              <div className="mt-4 flex gap-5 justify-end sm:justify-start">
                <button
                  onClick={handleAddToCart}
                  className=" px-6 py-2 w-1/2 sm:w-1/3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuy}
                  className="px-6 py-2 w-1/2 sm:w-1/3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Buy
                </button>
              </div>
              <Divider />
            </div>
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold mb-2">Reviews</h3>
          {/* Hiển thị danh sách đánh giá và bình luận */}
          {sampleReviews.length > 0 ? (
            sampleReviews.map((review) => (
              <div key={review.id} className="p-8 mb-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <CommentOutlined className="text-xl text-gray-500" />
                  <span className="ml-2 text-gray-600">{review.author}</span>
                </div>
                <p className="text-gray-800">{review.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(review.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            ))
          ) : (
            <div className="flex items-center">
              <CommentOutlined className="text-xl text-gray-500" />
              <span className="ml-2 text-gray-600">No reviews yet</span>
            </div>
          )}
          {/* Nút để người dùng viết đánh giá */}
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
