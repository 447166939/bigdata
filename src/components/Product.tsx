import React, { Fragment } from "react";
import best from "../assets/best_selling.png";
import Image from "next/image";
import styles from "./product.module.scss";
import best2 from "@/assets/best2.png";
export interface ProductProps {}
const Product: React.FC<ProductProps> = () => {
  return (
    <Fragment>
      <Image className={styles.best} src={best} alt={""} />
      <Image className={styles.best2} src={best2} alt={""} />
    </Fragment>
  );
};
export default Product;
