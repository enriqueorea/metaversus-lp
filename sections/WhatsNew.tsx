"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import styles from "../styles";
import { newFeatures } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../Components";
type Props = {};

const WhatsNew = (props: Props) => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's New?" textStyles="text-start" />
          <TitleText textStyles="text-start">
            <>What&apos;s new about Metaversus!?</>
          </TitleText>
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature, index) => (
              <NewFeatures key={index} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/whats-new.png"
            alt="getStarted"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
