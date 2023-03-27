import React, { useState } from "react";
import styles from "./monitor.module.scss";
import Image from "next/image";
import clsx from "clsx";
import logo from "@/assets/logo.png";
import searchBar from "../../assets/search_bar.png";
import avatar from "../../assets/avatar.png";
import sidebar from "../../assets/side_bar.png";
import pageHeader from "../../assets/page_header.png";
import Platform from "@/components/Platform";
import Product from "@/components/Product";
import Saved from "@/components/Saved";
export interface MonitorProps {}
const MonitorPage: React.FC<MonitorProps> = () => {
  const [menu, setMenu] = useState("Product Metrics");
  const menus = ["Product Metrics", "Platform Metrics", "Saved Metrics"];
  function clickMenu(menu: string) {
    setMenu(menu);
  }
  function getContent() {
    if (menu == "Product Metrics") {
      return <Product />;
    } else if (menu == "Platform Metrics") {
      return <Platform />;
    } else {
      return <Saved />;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image className={styles.logo} src={logo} alt={""} />
        <div className={styles.menus}>
          {menus.map((item, index) => (
            <div
              className={clsx(styles.menu, { [styles.active]: item == menu })}
              onClick={clickMenu.bind(null, item)}
              key={index}>
              {item}
            </div>
          ))}
        </div>
        <Image className={styles.searchBar} src={searchBar} alt={""} />
        <Image className={styles.avatar} src={avatar} alt={""} />
      </div>
      <div className={styles.content}>
        <Image className={styles.sidebar} src={sidebar} alt={""} />
        <div className={styles.innerContent}>
          <Image className={styles.pageHeader} src={pageHeader} alt={""} />
          {getContent()}
        </div>
      </div>
    </div>
  );
};
export default MonitorPage;
