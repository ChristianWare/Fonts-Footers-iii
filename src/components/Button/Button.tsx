"use client";

import { FC } from "react";
import Link from "next/link";
import { ButtonProps } from "@/lib/interface";
import Arrow2 from "../../../public/icons/arrow2.svg";

import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  href = "",
  text,
  btnType,
  target = "",
  download,
  arrow,
  arrowColor = "",
  onClick,
}) => {
  return (
    <button
      className={styles.container}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
        download={download}
      >
        {text}
        {arrow && (
          <Arrow2 className={`${styles.icon2} ${styles[arrowColor]}`} />
        )}
      </Link>
    </button>
  );
};
export default Button;
