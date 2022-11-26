"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

import { navVariants } from "../../utils/motion";
import styles from "../../styles";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <motion.nav
      initial="hidden"
      whileInView={"show"}
      variants={navVariants}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
          Metaverses
        </h2>

        <Image
          src={"/menu.svg"}
          alt="menu"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
