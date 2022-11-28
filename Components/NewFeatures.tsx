import React from "react";

import styles from "../styles";

type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeatures = ({ imgUrl, title, subtitle }: Props) => {
  return (
    <div className="flex flex-col flex-1 sm:max-w-[250px] min-w-[210px] ">
      <div
        className={`${styles.flexCenter} w-20 h-20 rounded-2xl bg-[#323f5d] `}
      >
        <img src={imgUrl} alt="logo" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-[26px] font-bold text-2xl leading-8 text-white">
        {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-8 ">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeatures;
