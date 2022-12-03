"use client";

import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

type Props = {
  title: string;
  subtitle: string;
  imgUrl: string;
  index: number;
};

const InsightCard = ({ imgUrl, title, subtitle, index }: Props) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <img
        className="md:w-[270px] w-full md:h-[250px] h-full rounded-[32px] object-cover"
        src={imgUrl}
        alt={title}
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h3 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h3>
          <p className="text-secondary-white mt-[16px] font-normal lg:text-[20px] text-[14px]">
            {subtitle}
          </p>
        </div>
        <div className="w-[100px] h-[100px] lg:flex hidden items-center justify-center border border-white rounded-full cursor-pointer">
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
