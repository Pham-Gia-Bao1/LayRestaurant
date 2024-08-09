"use client";
import React from "react";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We encountered an unexpected error. Please try again later or contact support.
      </p>
      <button
        className="px-6 py-3 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
        onClick={() => (window.location.href = "/")}
      >
        Go Back Home
      </button>
    </div>
  );
}
