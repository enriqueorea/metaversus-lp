"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "../utils/motion";

type Props = {
  title: string;
  textStyles: string;
};

export const TypingText: FC<Props> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {title.split("").map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
export const TitleText: FC<Props> = ({ title, textStyles }) => {
  return <div>TitleText</div>;
};
