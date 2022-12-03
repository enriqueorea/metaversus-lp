/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../Components";

import styles from "../styles";

type Props = {};

const World = (props: Props) => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText textStyles="text-center">
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        </TitleText>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] w-full flex h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-20 right-20 p-[6px] w-[70px] h-[70px] rounded-full bg-[#5d6680]">
            <img src="/people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-10 left-20 p-[6px] w-[70px] h-[70px] rounded-full bg-[#5d6680]">
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-1/2 left-[45%] p-[6px] w-[70px] h-[70px] rounded-full bg-[#5d6680]">
            <img src="/people-03.png" alt="people" className="w-full h-full" />
          </div>
          <div className="sm:block hidden absolute top-[200px] left-[18%] p-[6px] w-[170px] h-[130px] rounded-2xl bg-[#5d6680]">
            <img src="/map-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="sm:block hidden absolute top-[80px] right-[30%] p-[6px] w-[170px] h-[130px] rounded-2xl bg-[#5d6680]">
            <img src="/map-02.png" alt="people" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
