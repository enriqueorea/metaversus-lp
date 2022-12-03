"use client";
import React from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { insights } from "../constants";
import { InsightCard, TitleText, TypingText } from "../Components";

type Props = {};

const Insights = (props: Props) => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText textStyles="text-center">
          <>Insight about metaverse</>
        </TitleText>

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
