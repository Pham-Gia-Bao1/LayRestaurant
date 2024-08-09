import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Define the Review type
interface Review {
  id: number;
  content: string;
  author: string;
}

// Define the props for the ReviewsComponent
interface ReviewsComponentProps {
  reviews: Review[];
}

// Define the ReviewsComponent using React.FC with props type
const ReviewsComponent: React.FC<ReviewsComponentProps> = ({ reviews }) => {
  const [reviewInput, setReviewInput] = useState("");
  const [reviewsData, setReviewData] = useState<Review[]>(reviews);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  // Handle changes in the review input field
  const handleReviewInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReviewInput(event.target.value);
  };

  // Handle the review submission
  const handleReviewSubmit = () => {
    if (reviewInput.trim() === "") return;

    // Create a new review object
    const newReview: Review = {
      id: reviewsData.length + 1, // Generate a new ID
      content: reviewInput,
      author: currentUser?.name ?? "Anonymous", // Replace with actual author data if available
    };

    // Update the reviewsData state
    setReviewData((prevReviews) => [newReview, ...prevReviews]);

    // Clear the input field after submission
    setReviewInput("");
  };

  return (
    <div className="flex flex-col items-start gap-2 text-black w-full justify-between z-30">
      <div className="p-2 flex items-center justify-between gap-3 bg-gray-200 rounded w-full">
        <input
          type="text"
          value={reviewInput}
          onChange={handleReviewInputChange}
          className="border border-gray-100 rounded p-1 w-full"
          placeholder="Write your review..."
        />
        <button
          onClick={handleReviewSubmit}
          className=" bg-blue-500 w-[25%] text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {reviewsData.slice(0, 10).map((poster) => (
        <div key={poster.id} className="p-2 bg-gray-100   w-full">
          <p>{poster.content}</p>
          <p className="text-sm text-gray-500">{poster.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsComponent;
