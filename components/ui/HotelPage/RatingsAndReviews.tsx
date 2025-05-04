import Image from "next/image";
import { Separator } from "../separator";
import { Star } from "lucide-react";

type RAndRProps = {
  reviewerRating: number;
  reviewerAvatar: string;
  reviewImage: string;
  reviewerName: string;
  reviewRating: number;
};

export default function RatingsAndReviews({
  reviewerRating,
  reviewerAvatar,
  reviewImage,
  reviewerName,
  reviewRating,
}: RAndRProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full md:items-start gap-[20px]   my-[20px]">
      <div className="flex flex-col w-full justify-center items-center md:items-start bg-white p-[20px] rounded-[12px]">
        <h2 className="text-[22px] text-[darkGreen] leading-[28px]">
          Ratings and Reviews
        </h2>

        <Separator className="my-[20px] border-[0.5px] text-[#C5C5C5]/50" />

        <div className="ratings flex flex-col md:flex-row w-full items-center justify-between  gap-[60px] px-[32px] pb-[50px]">
          <div className="number flex flex-col items-center">
            <p className="text-[14px]">Overall Rating & Reviews</p>
            <p className="text-[57px] text-[darkGreen] tracking-[-0.25px] ">
              {reviewerRating}
            </p>
            <p>
              <Star className="text-[darkGreen]" />
            </p>
            {/* put the rate now on condition that the user has patronized this hotel before */}
            <p className="text-[14px]">
              Based on 200 reviews{" "}
              <span className="text-[darkGreen] underline">Rate now</span>
            </p>
            <div />
          </div>
          <div className="stars  bg-yellow-500">
            to be worked on later when integrating the backend
          </div>
        </div>
      </div>

      {/* reviews here */}
      <div className="reviews flex flex-wrap w-full  gap-[20px] md:justify-between">
        <div className="singleReview w-full md:w-[calc(50%-10px)] p-[20px] bg-white rounded-[12px]">
          <div className="imgLine flex justify-between mb-[12px]">
            <div className="flex gap-[18px] items-center">
              <Image
                src={reviewerAvatar}
                alt={reviewerName}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-[14px] tracking-[0.1px] font-medium ">
                {reviewerName}
              </p>
            </div>

            <p className="text-[darkGreen] flex items-center gap-[8px]">
              {reviewRating} <Star />
            </p>
          </div>

          <p className="mb-[12px] text-[#5F5F5F] text-[12px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim
            magni nihil incidunt animi obcaecati harum dolorem voluptatum hic
            vel, ipsa laboriosam vitae quia ad aut ratione? Eius, omnis itaque.
          </p>

          {/* put conditionals for if image is available */}
          {/* map through the image if available */}
          <div className="flex w-full gap-[8px]">
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
          </div>
        </div>

        <div className="singleReview w-full md:w-[calc(50%-10px)] p-[20px] bg-white rounded-[12px]">
          <div className="imgLine flex justify-between mb-[12px]">
            <div className="flex gap-[18px] items-center">
              <Image
                src={reviewerAvatar}
                alt={reviewerName}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-[14px] tracking-[0.1px] font-medium ">
                {reviewerName}
              </p>
            </div>

            <p className="text-[darkGreen] flex items-center gap-[8px]">
              {reviewRating} <Star />
            </p>
          </div>

          <p className="mb-[12px] text-[#5F5F5F] text-[12px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim
            magni nihil incidunt animi obcaecati harum dolorem voluptatum hic
            vel, ipsa laboriosam vitae quia ad aut ratione? Eius, omnis itaque.
          </p>

          {/* put conditionals for if image is available */}
          {/* map through the image if available */}
          <div className="flex w-full gap-[8px]">
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
          </div>
        </div>

        <div className="singleReview w-full md:w-[calc(50%-10px)] p-[20px] bg-white rounded-[12px]">
          <div className="imgLine flex justify-between mb-[12px]">
            <div className="flex gap-[18px] items-center">
              <Image
                src={reviewerAvatar}
                alt={reviewerName}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-[14px] tracking-[0.1px] font-medium ">
                {reviewerName}
              </p>
            </div>

            <p className="text-[darkGreen] flex items-center gap-[8px]">
              {reviewerRating} <Star />
            </p>
          </div>

          <p className="mb-[12px] text-[#5F5F5F] text-[12px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim
            magni nihil incidunt animi obcaecati harum dolorem voluptatum hic
            vel, ipsa laboriosam vitae quia ad aut ratione? Eius, omnis itaque.
          </p>

          {/* put conditionals for if image is available */}
          {/* map through the image if available */}
          <div className="flex w-full gap-[8px]">
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
          </div>
        </div>

        <div className="singleReview w-full md:w-[calc(50%-10px)] p-[20px] bg-white rounded-[12px]">
          <div className="imgLine flex justify-between mb-[12px]">
            <div className="flex gap-[18px] items-center">
              <Image
                src={reviewerAvatar}
                alt={reviewerName}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-[14px] tracking-[0.1px] font-medium ">
                {reviewerName}
              </p>
            </div>

            <p className="text-[darkGreen] flex items-center gap-[8px]">
              {reviewRating} <Star />
            </p>
          </div>

          <p className="mb-[12px] text-[#5F5F5F] text-[12px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim
            magni nihil incidunt animi obcaecati harum dolorem voluptatum hic
            vel, ipsa laboriosam vitae quia ad aut ratione? Eius, omnis itaque.
          </p>

          {/* put conditionals for if image is available */}
          {/* map through the image if available */}
          <div className="flex w-full gap-[8px]">
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
            <Image
              src={reviewImage}
              alt="review image"
              width={61}
              height={61}
              className="rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
