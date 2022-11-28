import React from "react";
import styles from "../styles";

type Props = {
  number: number;
  text: string;
};

const StartSteps = ({ number, text }: Props) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-20 h-20 rounded-3xl bg-[#323f5d]`}
      >
        <p className="font-bold text-[20px] text-white">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-8 ">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
