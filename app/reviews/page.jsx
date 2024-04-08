"use client";
import DashboardLayout from "@/components/DashboardLayout";
import AddReviewModal from "@/components/reviews/AddReviewModal";
import { Button } from "@/components/ui/button";
import Container from "@/components/universal/Container";
import useListReviews from "@/hooks/queries/useListReviews";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Reviews() {
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const handleAddReviewModal = () => {
    setIsAddReviewModalOpen(!isAddReviewModalOpen);
  };

  const { data, isError } = useListReviews();
  const reviews = data?.data.data.reviews;
  return (
    <DashboardLayout>
      <div className="flex justify-between mx-4 md:mx-8">
        <p className="text-2xl font-semibold">Reviews</p>
        <div>
          <Button
            variant="default"
            onClick={handleAddReviewModal}
            className="hidden md:block"
          >
            Add New Review
          </Button>
          <AddReviewModal
            handleAddReviewModal={handleAddReviewModal}
            isAddReviewModalOpen={isAddReviewModalOpen}
          />
        </div>
      </div>
      <Container className={"mx-4"}>
        {reviews?.map((review) => {
          return (
            <div
              key={review?.id}
              className="border border-lightGray py-2 px-4 rounded-[8px] bg-[#f6f6f6] mb-4 w-full"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col md:flex-row justify-start md:items-center md:gap-6 py-4 w-full">
                  <Image
                    className="rounded-full w-8 h-8 md:w-16 md:h-16"
                    src={review?.store.logo}
                    width={64}
                    height={64}
                    alt=""
                  />
                  <div className="mr-2">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div key={i}>
                            {i < review.rating ? (
                              <FaStar color="#F2C94C" />
                            ) : (
                              <FaRegStar color="#D4D4D4" />
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text">
                        {review?.productName} -{" "}
                        {review?.store.name.toUpperCase()}
                      </p>
                    </div>
                    <p className="font-normal text-sm text-black">
                      {review?.message}
                    </p>
                    <p className="text-sm text-midGray flex justify-end md:justify-start mt-2">
                      {review?.customerName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </DashboardLayout>
  );
}
