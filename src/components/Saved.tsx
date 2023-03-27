import React, { Fragment } from "react";
import styles from "./saved.module.scss";
import saved1 from "../assets/saved1.png";
import saved2 from "../assets/saved2.png";
import Image from "next/image";
export interface SavedProps {}
const Saved: React.FC<SavedProps> = () => {
  return (
    <Fragment>
      <Image className={styles.save1} src={saved1} alt={""} />
      <Image className={styles.save2} src={saved2} alt={""} />
    </Fragment>
  );
};
export default Saved;
