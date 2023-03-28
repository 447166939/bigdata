import React, { useState, useRef } from "react";
import Script from "next/script";
import Modal from "@mui/material/Modal";
import Icon from "@mui/material/Icon";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import Router from "next/router";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import { useClickoutside } from "@/hooks/useClickoutside";
import { useTyper } from "@/hooks/useTyper";
import Link from "@/components/Link";
import {
  CustomContainer,
  GlassEffect,
  Header,
  CustomInput,
  SubscribeButton,
  OkButton
} from "./index.styled";
import logo from "@/assets/logo.png";
import person from "@/assets/person.png";
import smallLogo from "@/assets/small_logo.png";
import searchIcon from "@/assets/Search.png";
import fireIcon from "@/assets/fire.png";
import downIcon from "@/assets/down.png";
import phoneIcon from "@/assets/phone.png";
import emailIcon from "@/assets/email.png";
import clutch from "@/assets/clutch.png";
import uiclutch from "@/assets/uiclutch .png";
import redPerson from "@/assets/red_person .png";
import productPic from "@/assets/product_picture.png";
import metricPic from "@/assets/metric.png";
import monitorPic from "@/assets/monitor.png";
import okBTn from "@/assets/okbutton.png";
export interface IHomeProps {}
const index: React.FC<IHomeProps> = (props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isAsk, setIsAsk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [state, setState] = useState({ 0: true, 1: true, 2: true });
  const [dialogVisible, setDialogVisible] = useState(false);
  const [tipVisible, setTipVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [searchText, setSearchText] = useState("");
  const [success, setSuccess] = useState(false);
  const [triMode, setTriMode] = useState("start");
  const [circleMode, setCircleMode] = useState("start");
  const [rectMode, setRectMode] = useState("start");
  const [phoneTooltipOpen, setPhoneTooltipOpen] = useState(false);
  const [emailTooltipOpen, setEmailTooltipOpen] = useState(false);
  const rootRef = React.useRef(null);
  const sideRef = useRef(null);
  const tipRef = useRef(null);
  const dialogRef = useRef(null);
  const demoRef = useRef(null);
  const searchInputRef = useRef(null);
  const { state: animationState, setState: setAnimationState } = useTyper();
  useClickoutside(sideRef, closeSide, dialogRef);
  useClickoutside(tipRef, closeTip, searchInputRef);
  const { typedText1, typedText2, mode } = animationState;
  const line5Visible = mode == "line5";
  const line4Visible = mode == "line4" || line5Visible;
  const line3Visible = mode == "line3" || line4Visible;
  const line2Visible = mode == "line2" || line3Visible;
  const line1Visible = mode == "line1" || line2Visible;
  const svgVisible = mode == "svg" || line1Visible;
  const titleVisible = mode == "title" || svgVisible;
  const maVisible = mode == "ma" || mode == "text2" || titleVisible;
  const text1Visible = maVisible || mode == "text1";
  const text2Visible = svgVisible || mode == "text2";
  const personVisible =
    mode == "person" ||
    mode == "text1" ||
    mode == "ma" ||
    mode == "text2" ||
    mode == "title" ||
    mode == "svg" ||
    mode == "line1" ||
    mode == "line2" ||
    mode == "line3" ||
    mode == "line4" ||
    mode == "line5";
  const triangleVariants = {
    start: { transform: "translate(-300px,-300px)" },
    end: (i: number) => {
      return {
        transform: "translate(1920px,900px)",
        transition: {
          delay: 5,
          duration: 25
        }
      };
    },
    back: () => {
      return {
        transform: "translate(-300px,-300px)",
        transition: {
          duration: 0
        }
      };
    }
  };
  const circleVariants = {
    start: { transform: "translate(1920px,0px)" },
    end: (i: number) => {
      return {
        transform: "translate(-400px,900px)",
        transition: {
          duration: 25
        }
      };
    },
    back: () => {
      return {
        transform: "translate(1920px,0px)",
        transition: {
          duration: 0
        }
      };
    }
  };
  const rectVariants = {
    start: { transform: "translate(-300px,400px)" },
    end: (i: number) => {
      return {
        transform: "translate(1600px,2000px)",
        transition: {
          duration: 25
        }
      };
    },
    back: () => {
      return {
        transform: "translate(-300px,600px)",
        transition: {
          duration: 0
        }
      };
    }
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 0.5, bounce: 0 },
          opacity: { duration: 0.01 }
        }
      };
    }
  };
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => {
      return {
        opacity: 1,
        transition: {
          opacity: { duration: 0.01 }
        }
      };
    }
  };
  const personVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => {
      return {
        opacity: 1,
        transition: {
          opacity: { duration: 0.01 }
        }
      };
    }
  };
  const maVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => {
      return {
        opacity: 1,
        transition: {
          opacity: { duration: 0.01 }
        }
      };
    }
  };
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => {
      return {
        opacity: 1,
        transition: {
          opacity: { duration: 0.01 }
        }
      };
    }
  };
  function handleTooltipOpen() {
    setTimeout(() => {
      setPhoneTooltipOpen(true);
    }, 2000);
  }
  function handleTooltipClose() {
    setPhoneTooltipOpen(false);
  }
  function handleEmailTooltipOpen() {
    setTimeout(() => {
      setEmailTooltipOpen(true);
    }, 2000);
  }
  function handleEmailTooltipClose() {
    setEmailTooltipOpen(false);
  }
  function searchChange(e: any) {
    setSearchText(e.target.value);
  }
  function triComplete() {
    setTriMode((pre) => {
      if (pre == "start") {
        return "end";
      } else if (pre == "end") {
        return "back";
      } else {
        return "start";
      }
    });
  }
  function circleComplete() {
    setCircleMode((pre) => {
      if (pre == "start") {
        return "end";
      } else if (pre == "end") {
        return "back";
      } else {
        return "start";
      }
    });
  }
  function rectComplete() {
    setRectMode((pre) => {
      if (pre == "start") {
        return "end";
      } else if (pre == "end") {
        return "back";
      } else {
        return "start";
      }
    });
  }
  function openTip() {
    setTipVisible(true);
  }
  function closeSide() {
    setDrawerOpen(false);
  }
  function closeDialog() {
    setDialogVisible(false);
  }
  function closeTip() {
    setTipVisible(false);
  }
  function svgComplete() {
    setAnimationState((pre) => {
      if (pre.mode == "svg") {
        return { ...pre, mode: "line1" };
      } else {
        return pre;
      }
    });
  }
  function line1Complete() {
    setAnimationState((pre: any) => {
      if (pre.mode == "line1") {
        return { ...pre, mode: "line2" };
      } else {
        return pre;
      }
    });
  }
  function line2Complete() {
    setAnimationState((pre) => {
      if (pre.mode == "line2") {
        return {
          ...pre,
          mode: "line3"
        };
      } else return pre;
    });
  }
  function line3Compolete() {
    setAnimationState((pre) => {
      if (pre.mode == "line3") {
        return {
          ...pre,
          mode: "line4"
        };
      }
      return pre;
    });
  }
  function line4Compolete() {
    setAnimationState((pre) => {
      if (pre.mode == "line4") {
        return { ...pre, mode: "line5" };
      } else {
        return pre;
      }
    });
  }
  function line5Complete(definition: any) {
    setTimeout(() => {
      setAnimationState((pre) => {
        if (pre.mode == "line5") {
          return {
            ...pre,
            mode: "",
            typedText1: "",
            typedText2: ""
          };
        } else {
          return pre;
        }
      });
    }, 3000);
  }
  function personComplete() {
    setAnimationState((pre) => {
      if (pre.mode == "") {
        return {
          ...pre,
          mode: "person"
        };
      } else if (pre.mode == "person") {
        return {
          ...pre,
          mode: "text1",
          compolete: false
        };
      } else {
        return pre;
      }
    });
  }
  function emailChange(e: any) {
    setEmail(e.target.value);
  }
  async function submit() {
    try {
      const url = "https://getlaunchlist.com/s/IGBWwV";
      //const url = "https://getlaunchlist.com/s/JZIFPd";
      if (email == "") return;
      /* let formData=new FormData()
      formData.append('name','askmetric')
      formData.append('email',email)
      const transFun =(data = {}) => Object.entries(data).map(ent => ent.join("=")).join("&")
     let ret=await axios.post(url,formData,{headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},transformRequest: transFun})
      console.log('ret',ret)*/
      /*var iframe=document.createElement('iframe');
      iframe.name='myiframe'
      iframe.id="myiframe";
      var postForm=document.createElement('form')
      postForm.method='post'
      postForm.action=url
      postForm.target='myiframe'
      var emailInput=document.createElement('input')
      emailInput.setAttribute('name','email')
      emailInput.setAttribute('value',email)
      var nameInput=document.createElement('input')
      nameInput.setAttribute('name','name')
      nameInput.setAttribute('value','askmetric')
      postForm.appendChild(emailInput)
      postForm.appendChild(nameInput)
      document.body.appendChild(iframe)
      document.body.appendChild(postForm)
      postForm.submit();
      document.body.removeChild(postForm)
      document.body.removeChild(iframe)*/
      setSuccess(true);
    } catch (e) {
      setSuccess(false);
    }
  }
  const maComplete = () => {
    setAnimationState((pre) => {
      if (pre.mode == "ma") {
        return {
          ...pre,
          mode: "text2"
        };
      } else {
        return pre;
      }
    });
  };
  const titleComplete = () => {
    setAnimationState((pre) => {
      if (pre.mode == "title") {
        return {
          ...pre,
          mode: "svg"
        };
      } else {
        return pre;
      }
    });
  };
  const menu0 = [
    "Amazon.com",
    "eBay.com",
    "Esty.com",
    "craggiest.com,",
    "wayfarer.com",
    "shein.com",
    "temu.com ",
    "wish.com",
    "Walmart.com - metrics",
    "target.com",
    "Costco.com"
  ];
  const menu1 = ["TikTok", "YouTube", "Facebook", "Instagram", "Snapchat", "Pinterest"];
  const menu2 = [
    "Amazon.com",
    "eBay.com",
    "Esty.com",
    "craggiest.com,",
    "wayfarer.com",
    "shein.com",
    "temu.com ",
    "wish.com",
    "Walmart.com - metrics",
    "target.com",
    "Costco.com"
  ];
  function toDemo() {
    let el = demoRef.current as HTMLDivElement | null;
    el?.scrollIntoView({ behavior: "smooth" });
  }
  const toggle = (mode: string) => {
    setTipVisible(true);
    if (mode == "search") {
      setIsSearch(true);
      setIsAsk(false);
    } else {
      setIsSearch(false);
      setIsAsk(true);
    }
  };
  const clickSearch = () => {
    if (isSearch && searchText == "computer monitor") {
      setTimeout(() => {
        Router.push("/monitor");
      }, 1000);
    } else {
      setIsOpen(true);
      setDrawerOpen(true);
    }
  };
  function openModal() {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
    setSuccess(false);
    setEmail("");
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const toggleMenu0 = () => {
    if (state[0]) {
      setState({ ...state, 0: false });
    } else {
      setState({ ...state, 0: true });
    }
  };
  const toggleMenu1 = () => {
    if (state[1]) {
      setState({ ...state, 1: false });
    } else {
      setState({ ...state, 1: true });
    }
  };
  const toggleMenu2 = () => {
    if (state[2]) {
      setState({ ...state, 2: false });
    } else {
      setState({ ...state, 2: true });
    }
  };
  return (
    <CustomContainer>
      {/*<Image className={"home-left-top"} src={leftTop} alt={""} />
      <Image className={"home-right-top"} src={rightTop} alt={""} />
      <Image className={"home-right-bottom"} src={rightBottom} alt={""} />*/}
      <motion.svg
        onAnimationComplete={triComplete}
        variants={triangleVariants}
        animate={triMode}
        className={"home-triangle"}>
        <motion.defs>
          <motion.linearGradient
            id="paint0"
            x1="0"
            y1="0"
            x2="300"
            y2="300"
            gradientUnits="userSpaceOnUse">
            <motion.stop stopColor="#0078FF" />
            <motion.stop offset="1" stopColor="#00C6FF" />
          </motion.linearGradient>
        </motion.defs>
        <motion.polygon points="150,0 0,300 300,300" fill="url(#paint0)"></motion.polygon>
      </motion.svg>
      <motion.svg
        onAnimationComplete={circleComplete}
        variants={circleVariants}
        animate={circleMode}
        className={"home-circle"}>
        <motion.defs>
          <motion.linearGradient
            id="paint1"
            x1="0"
            y1="0"
            x2="300"
            y2="300"
            gradientUnits="userSpaceOnUse">
            <motion.stop stopColor="#5EF529" />
            <motion.stop offset="1" stopColor="#4C97EE" />
          </motion.linearGradient>
        </motion.defs>
        <motion.circle cx={150} cy={150} r={150} fill="url(#paint1)"></motion.circle>
      </motion.svg>
      <motion.svg
        variants={rectVariants}
        animate={rectMode}
        onAnimationComplete={rectComplete}
        className={"home-rect"}>
        <motion.defs>
          <motion.linearGradient
            id="paint2"
            x1="0"
            y1="0"
            x2="300"
            y2="300"
            gradientUnits="userSpaceOnUse">
            <motion.stop stopColor="#F58529" />
            <motion.stop offset="1" stopColor="#DD2A7C" />
          </motion.linearGradient>
        </motion.defs>
        <motion.rect width="300" height="300" fill={"url(#paint2)"} />
      </motion.svg>
      <GlassEffect></GlassEffect>
      <div
        ref={sideRef}
        className={drawerOpen ? "home-side-container" : "home-side-container-hide"}>
        <div onClick={toggleMenu0} className={"home-side-menu-item"}>
          <div>Ask Google Assistant</div>
          <Image className={"home-side-down-icon"} src={downIcon} alt={""} />
        </div>
        <Collapse in={state[0]}>
          {menu0.map((item, index) => (
            <div className={"home-sub-menu-item"} key={index}>
              {item}
            </div>
          ))}
        </Collapse>
        <div onClick={toggleMenu1} className={"home-side-menu-item"}>
          <div>Ask Google Assistant</div>
          <Image className={"home-side-down-icon"} src={downIcon} alt={""} />
        </div>
        <Collapse in={state[1]}>
          {menu1.map((item, index) => (
            <div className={"home-sub-menu-item"} key={index}>
              {item}
            </div>
          ))}
        </Collapse>
        <div onClick={toggleMenu2} className={"home-side-menu-item"}>
          <div>DTC Websites</div>
          <Image className={"home-side-down-icon"} src={downIcon} alt={""} />
        </div>
        <Collapse in={state[2]}>
          {menu2.map((item, index) => (
            <div className={"home-sub-menu-item"} key={index}>
              {item}
            </div>
          ))}
        </Collapse>
      </div>
      <Header>
        <Image className={"logo"} src={logo} alt={""} />
        <div onClick={openModal} className="home-join">
          Join waitlist
        </div>
        <div onClick={toDemo} className="home-product">
          Product Demo
        </div>
        <Image onClick={openModal} className={"home-person"} src={person} alt={""} />
      </Header>
      <Image className={"home-small-logo"} src={smallLogo} alt={""} />
      <div className="home-title">Product Analysis</div>
      <div className="home-sub-title">Empowering merchants with all platform data</div>
      <div ref={searchInputRef} className="home-search-input">
        <Image className={"home-search-icon"} src={searchIcon} alt={""} />
        <CustomInput
          onChange={searchChange}
          placeholder="search keyword, product, Ask AI"></CustomInput>
        <Button onClick={clickSearch} className={"home-input-search-button"}>
          Search
        </Button>
      </div>
      <div ref={tipRef} className="home-button-wrapper">
        <div className="home-search-button">
          <Button
            className={clsx({
              "home-active-button": isSearch && tipVisible,
              "home-inactive-button": !isSearch || !tipVisible
            })}
            onClick={toggle.bind(null, "search")}
            variant="outlined">
            search
          </Button>
          {isSearch && tipVisible && (
            <div className="home-search">
              <div className="home-search-left">
                <div className="home-search-title">Product Search</div>
                <div className="home-search-text-black">
                  Simple search to discover any product's data metrics across main-stream e-commerce
                  platforms
                </div>
                <div className="home-search-text">
                  1.E-commerce platforms 2.Social commerce platforms 3.DTC websites
                </div>
              </div>
              <div className="home-search-chart"></div>
            </div>
          )}
        </div>
        <div className="home-ask-button">
          <Button
            className={clsx(
              { "home-active-button": isAsk && tipVisible },
              { "home-inactive-button": !isAsk || !tipVisible }
            )}
            onClick={toggle.bind(null, "ask")}
            variant="outlined">
            Ask Metric
          </Button>
          {isAsk && tipVisible && (
            <div className="home-ask-metric">
              <div className="home-ask-metric-left">
                <div className="home-ask-metric-title">Ask Metric</div>
                <div className="home-ask-metric-text-black">
                  Chat with our AI powered assistant to get your needed data easier:
                </div>
                <div className="home-ask-metric-text">
                  1.It understand what you needed and only fetch the data you needed. 2.It will draw
                  the data metric for any specific ask, easily for export usage
                </div>
              </div>
              <div className="home-ask-metric-computer"></div>
            </div>
          )}
        </div>
      </div>

      <div className="home-bottom-box">
        <div ref={demoRef} className={"home-chart-container"}>
          <div className={"home-chart-top-box"}>
            <motion.div
              onAnimationComplete={personComplete}
              animate={personVisible ? "visible" : "hidden"}
              variants={personVariants}
              className={"home-chart-top-icon-wrapper"}>
              <Image className={"home-chart-top-icon"} src={redPerson} alt={""} />
            </motion.div>
            <div className={clsx("home-chart-top-text", { "blink-cursor": text1Visible })}>
              {typedText1}
            </div>
          </div>
          <div className={"home-chart-bottom-box"}>
            <motion.div
              onAnimationComplete={maComplete}
              animate={maVisible ? "visible" : "hidden"}
              variants={maVariants}
              className={"home-chart-bottom-icon-wrapper"}>
              <Image className={"home-chart-bottom-icon"} src={smallLogo} alt={""} />
            </motion.div>
            <div className={"home-chart-bottom-right"}>
              <div className={clsx("home-chart-bottom-text", { "blink-cursor": mode == "text2" })}>
                {typedText2}
              </div>
              <motion.div
                onAnimationComplete={titleComplete}
                variants={titleVariants}
                animate={titleVisible ? "visible" : "hidden"}
                className={"home-chart-bottom-key"}>
                Keyword Trending
              </motion.div>
              {/* <Image className={"home-chart-img"} src={lineChart} alt={""} />*/}
              <motion.svg
                onAnimationComplete={svgComplete}
                variants={svgVariants}
                animate={svgVisible ? "visible" : "hidden"}
                width="1001"
                height="257"
                viewBox="0 0 1001 257"
                fill="none"
                className={"home-chart-img"}>
                <motion.rect
                  x="0.201172"
                  y="0.883057"
                  width="969.632"
                  height="256.022"
                  rx="16"
                  fill="white"
                />
                <motion.rect
                  x="60.0723"
                  y="46.6991"
                  width="876.69"
                  height="152.955"
                  stroke="#DCDCDC"
                  strokeDasharray="1 1"
                />
                <motion.path d="M59.5723 78.3123H937.262" stroke="#DCDCDC" strokeDasharray="2 2" />
                <motion.path d="M59.5723 108.536H937.262" stroke="#DCDCDC" strokeDasharray="2 2" />
                <motion.path d="M59.5723 139.705H937.262" stroke="#DCDCDC" strokeDasharray="2 2" />
                <motion.path d="M59.5723 170.875H937.262" stroke="#DCDCDC" strokeDasharray="2 2" />
                <motion.path
                  d="M221.043 46.1991L221.043 200.154"
                  stroke="#DCDCDC"
                  strokeDasharray="2 2"
                />
                <motion.path
                  d="M774.286 46.1991L774.286 200.154"
                  stroke="#DCDCDC"
                  strokeDasharray="2 2"
                />
                <motion.path
                  d="M589.872 46.1991L589.872 200.154"
                  stroke="#DCDCDC"
                  strokeDasharray="2 2"
                />
                <motion.path
                  d="M405.457 46.1991L405.457 200.154"
                  stroke="#DCDCDC"
                  strokeDasharray="2 2"
                />
                <motion.path
                  d="M67.2528 208.716C67.2528 209.406 67.1282 210.002 66.8789 210.505C66.6296 211.008 66.2876 211.396 65.853 211.669C65.4183 211.941 64.9219 212.078 64.3636 212.078C63.8054 212.078 63.3089 211.941 62.8743 211.669C62.4396 211.396 62.0977 211.008 61.8484 210.505C61.5991 210.002 61.4744 209.406 61.4744 208.716C61.4744 208.025 61.5991 207.429 61.8484 206.926C62.0977 206.423 62.4396 206.035 62.8743 205.762C63.3089 205.49 63.8054 205.353 64.3636 205.353C64.9219 205.353 65.4183 205.49 65.853 205.762C66.2876 206.035 66.6296 206.423 66.8789 206.926C67.1282 207.429 67.2528 208.025 67.2528 208.716ZM66.4858 208.716C66.4858 208.149 66.391 207.67 66.2013 207.281C66.0138 206.891 65.7592 206.596 65.4375 206.395C65.1179 206.195 64.7599 206.095 64.3636 206.095C63.9673 206.095 63.6083 206.195 63.2866 206.395C62.967 206.596 62.7124 206.891 62.5227 207.281C62.3352 207.67 62.2415 208.149 62.2415 208.716C62.2415 209.282 62.3352 209.761 62.5227 210.151C62.7124 210.54 62.967 210.836 63.2866 211.036C63.6083 211.236 63.9673 211.336 64.3636 211.336C64.7599 211.336 65.1179 211.236 65.4375 211.036C65.7592 210.836 66.0138 210.54 66.2013 210.151C66.391 209.761 66.4858 209.282 66.4858 208.716ZM70.4776 212.091C70.0174 212.091 69.6211 211.982 69.2887 211.765C68.9563 211.547 68.7006 211.248 68.5217 210.866C68.3427 210.485 68.2532 210.049 68.2532 209.559C68.2532 209.061 68.3448 208.621 68.5281 208.239C68.7134 207.856 68.9712 207.556 69.3015 207.341C69.6339 207.124 70.0217 207.015 70.4648 207.015C70.81 207.015 71.1211 207.079 71.3981 207.207C71.6751 207.335 71.902 207.514 72.0788 207.744C72.2557 207.974 72.3654 208.243 72.408 208.549H71.6538C71.5962 208.326 71.4684 208.127 71.2702 207.955C71.0742 207.78 70.81 207.693 70.4776 207.693C70.1836 207.693 69.9258 207.77 69.7042 207.923C69.4847 208.074 69.3132 208.288 69.1896 208.565C69.0682 208.84 69.0075 209.163 69.0075 209.534C69.0075 209.913 69.0671 210.243 69.1864 210.525C69.3079 210.806 69.4783 211.024 69.6978 211.18C69.9194 211.335 70.1793 211.413 70.4776 211.413C70.6737 211.413 70.8516 211.379 71.0114 211.311C71.1712 211.243 71.3065 211.145 71.4173 211.017C71.5281 210.889 71.6069 210.735 71.6538 210.556H72.408C72.3654 210.846 72.2599 211.107 72.0916 211.339C71.9254 211.57 71.7049 211.753 71.43 211.889C71.1573 212.023 70.8398 212.091 70.4776 212.091ZM75.6456 207.079V207.718H73.1016V207.079H75.6456ZM73.843 205.903H74.5973V210.582C74.5973 210.795 74.6282 210.955 74.69 211.061C74.7539 211.166 74.8349 211.236 74.9329 211.272C75.033 211.306 75.1385 211.324 75.2493 211.324C75.3324 211.324 75.4006 211.319 75.4538 211.311C75.5071 211.3 75.5497 211.292 75.5817 211.285L75.7351 211.963C75.6839 211.982 75.6126 212.001 75.521 212.02C75.4293 212.042 75.3132 212.052 75.1726 212.052C74.9595 212.052 74.7507 212.006 74.5462 211.915C74.3438 211.823 74.1754 211.684 74.0412 211.496C73.9091 211.309 73.843 211.072 73.843 210.787V205.903ZM79.2987 211.988V211.413L81.4592 209.048C81.7127 208.771 81.9215 208.53 82.0856 208.326C82.2496 208.119 82.3711 207.925 82.4499 207.744C82.5309 207.561 82.5714 207.369 82.5714 207.169C82.5714 206.939 82.516 206.739 82.4052 206.571C82.2965 206.403 82.1474 206.273 81.9577 206.181C81.7681 206.089 81.555 206.044 81.3185 206.044C81.0671 206.044 80.8477 206.096 80.6602 206.2C80.4748 206.303 80.331 206.446 80.2287 206.632C80.1286 206.817 80.0785 207.034 80.0785 207.284H79.3242C79.3242 206.9 79.4126 206.564 79.5895 206.274C79.7663 205.984 80.0071 205.758 80.3118 205.596C80.6186 205.434 80.9627 205.353 81.3441 205.353C81.7276 205.353 82.0675 205.434 82.3636 205.596C82.6598 205.758 82.892 205.977 83.0604 206.251C83.2287 206.526 83.3129 206.832 83.3129 207.169C83.3129 207.409 83.2692 207.645 83.1818 207.875C83.0966 208.103 82.9474 208.358 82.7344 208.639C82.5234 208.918 82.2305 209.259 81.8555 209.662L80.3853 211.234V211.285H83.4279V211.988H79.2987ZM86.8828 212.078C86.4013 212.078 85.9911 211.947 85.6523 211.685C85.3136 211.42 85.0547 211.038 84.8757 210.537C84.6967 210.034 84.6072 209.427 84.6072 208.716C84.6072 208.008 84.6967 207.404 84.8757 206.903C85.0568 206.401 85.3168 206.017 85.6555 205.753C85.9964 205.487 86.4055 205.353 86.8828 205.353C87.3601 205.353 87.7681 205.487 88.1069 205.753C88.4478 206.017 88.7077 206.401 88.8867 206.903C89.0678 207.404 89.1584 208.008 89.1584 208.716C89.1584 209.427 89.0689 210.034 88.8899 210.537C88.7109 211.038 88.4521 211.42 88.1133 211.685C87.7745 211.947 87.3643 212.078 86.8828 212.078ZM86.8828 211.375C87.3601 211.375 87.7308 211.145 87.995 210.684C88.2592 210.224 88.3913 209.568 88.3913 208.716C88.3913 208.149 88.3306 207.666 88.2092 207.268C88.0898 206.869 87.9173 206.566 87.6914 206.357C87.4677 206.148 87.1982 206.044 86.8828 206.044C86.4098 206.044 86.0401 206.277 85.7738 206.744C85.5075 207.208 85.3743 207.865 85.3743 208.716C85.3743 209.282 85.4339 209.764 85.5533 210.16C85.6726 210.556 85.8441 210.858 86.0678 211.065C86.2937 211.271 86.5653 211.375 86.8828 211.375ZM90.3729 211.988V211.413L92.5334 209.048C92.7869 208.771 92.9957 208.53 93.1598 208.326C93.3239 208.119 93.4453 207.925 93.5241 207.744C93.6051 207.561 93.6456 207.369 93.6456 207.169C93.6456 206.939 93.5902 206.739 93.4794 206.571C93.3707 206.403 93.2216 206.273 93.032 206.181C92.8423 206.089 92.6293 206.044 92.3928 206.044C92.1413 206.044 91.9219 206.096 91.7344 206.2C91.549 206.303 91.4052 206.446 91.3029 206.632C91.2028 206.817 91.1527 207.034 91.1527 207.284H90.3984C90.3984 206.9 90.4869 206.564 90.6637 206.274C90.8406 205.984 91.0813 205.758 91.386 205.596C91.6928 205.434 92.0369 205.353 92.4183 205.353C92.8018 205.353 93.1417 205.434 93.4379 205.596C93.734 205.758 93.9663 205.977 94.1346 206.251C94.3029 206.526 94.3871 206.832 94.3871 207.169C94.3871 207.409 94.3434 207.645 94.256 207.875C94.1708 208.103 94.0217 208.358 93.8086 208.639C93.5977 208.918 93.3047 209.259 92.9297 209.662L91.4595 211.234V211.285H94.5021V211.988H90.3729ZM95.8221 211.988V211.413L97.9826 209.048C98.2362 208.771 98.445 208.53 98.609 208.326C98.7731 208.119 98.8945 207.925 98.9734 207.744C99.0543 207.561 99.0948 207.369 99.0948 207.169C99.0948 206.939 99.0394 206.739 98.9286 206.571C98.82 206.403 98.6708 206.273 98.4812 206.181C98.2915 206.089 98.0785 206.044 97.842 206.044C97.5906 206.044 97.3711 206.096 97.1836 206.2C96.9982 206.303 96.8544 206.446 96.7521 206.632C96.652 206.817 96.6019 207.034 96.6019 207.284H95.8477C95.8477 206.9 95.9361 206.564 96.1129 206.274C96.2898 205.984 96.5305 205.758 96.8352 205.596C97.142 205.434 97.4862 205.353 97.8675 205.353C98.2511 205.353 98.5909 205.434 98.8871 205.596C99.1832 205.758 99.4155 205.977 99.5838 206.251C99.7521 206.526 99.8363 206.832 99.8363 207.169C99.8363 207.409 99.7926 207.645 99.7053 207.875C99.62 208.103 99.4709 208.358 99.2578 208.639C99.0469 208.918 98.7539 209.259 98.3789 209.662L96.9087 211.234V211.285H99.9513V211.988H95.8221Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M32.6167 202.905V194.723H33.1409V202.905H32.6167ZM34.3809 197.177C34.3426 196.854 34.1871 196.602 33.9143 196.423C33.6416 196.244 33.3071 196.155 32.9108 196.155C32.621 196.155 32.3675 196.202 32.1501 196.295C31.9349 196.389 31.7666 196.518 31.6452 196.682C31.5258 196.846 31.4662 197.033 31.4662 197.241C31.4662 197.416 31.5077 197.566 31.5908 197.692C31.676 197.816 31.7847 197.919 31.9168 198.002C32.0489 198.083 32.1874 198.15 32.3323 198.203C32.4772 198.255 32.6104 198.296 32.7318 198.328L33.3966 198.507C33.567 198.552 33.7567 198.614 33.9655 198.692C34.1764 198.771 34.3778 198.879 34.5695 199.015C34.7634 199.149 34.9232 199.322 35.0489 199.533C35.1746 199.744 35.2375 200.003 35.2375 200.31C35.2375 200.663 35.1448 200.983 34.9594 201.268C34.7762 201.554 34.5077 201.781 34.154 201.949C33.8025 202.117 33.3753 202.202 32.8724 202.202C32.4037 202.202 31.9978 202.126 31.6547 201.975C31.3138 201.823 31.0454 201.612 30.8493 201.342C30.6555 201.071 30.5457 200.757 30.5202 200.399H31.3383C31.3596 200.646 31.4427 200.851 31.5876 201.013C31.7346 201.172 31.92 201.292 32.1437 201.371C32.3696 201.447 32.6125 201.486 32.8724 201.486C33.175 201.486 33.4466 201.437 33.6874 201.339C33.9282 201.239 34.1189 201.1 34.2595 200.923C34.4001 200.744 34.4704 200.535 34.4704 200.297C34.4704 200.079 34.4097 199.903 34.2883 199.766C34.1668 199.63 34.007 199.519 33.8089 199.434C33.6107 199.349 33.3966 199.274 33.1665 199.21L32.3611 198.98C31.8497 198.833 31.4449 198.623 31.1466 198.35C30.8483 198.078 30.6991 197.721 30.6991 197.28C30.6991 196.913 30.7982 196.594 30.9964 196.321C31.1966 196.046 31.4651 195.833 31.8018 195.682C32.1405 195.528 32.5187 195.452 32.9363 195.452C33.3582 195.452 33.7332 195.527 34.0613 195.679C34.3895 195.828 34.6494 196.032 34.8412 196.292C35.0351 196.552 35.1373 196.847 35.148 197.177H34.3809ZM38.5605 202.176C38.079 202.176 37.6689 202.045 37.3301 201.783C36.9913 201.519 36.7324 201.136 36.5534 200.636C36.3745 200.133 36.285 199.525 36.285 198.814C36.285 198.106 36.3745 197.502 36.5534 197.002C36.7346 196.499 36.9945 196.115 37.3333 195.851C37.6742 195.585 38.0833 195.452 38.5605 195.452C39.0378 195.452 39.4458 195.585 39.7846 195.851C40.1255 196.115 40.3855 196.499 40.5645 197.002C40.7456 197.502 40.8361 198.106 40.8361 198.814C40.8361 199.525 40.7466 200.133 40.5676 200.636C40.3887 201.136 40.1298 201.519 39.791 201.783C39.4522 202.045 39.0421 202.176 38.5605 202.176ZM38.5605 201.473C39.0378 201.473 39.4086 201.243 39.6728 200.783C39.937 200.322 40.0691 199.666 40.0691 198.814C40.0691 198.247 40.0083 197.764 39.8869 197.366C39.7676 196.968 39.595 196.664 39.3691 196.455C39.1454 196.246 38.8759 196.142 38.5605 196.142C38.0875 196.142 37.7179 196.375 37.4515 196.842C37.1852 197.306 37.052 197.964 37.052 198.814C37.052 199.381 37.1117 199.862 37.231 200.258C37.3503 200.655 37.5218 200.956 37.7456 201.163C37.9714 201.37 38.2431 201.473 38.5605 201.473ZM42.1657 195.541H43.1117L45.3361 200.974H45.4128L47.6373 195.541H48.5833V202.087H47.8418V197.114H47.7779L45.7324 202.087H45.0165L42.9711 197.114H42.9071V202.087H42.1657V195.541Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M32.6187 171.247V163.065H33.1428V171.247H32.6187ZM34.3829 165.52C34.3445 165.196 34.189 164.944 33.9163 164.765C33.6436 164.586 33.309 164.497 32.9127 164.497C32.623 164.497 32.3694 164.544 32.1521 164.637C31.9369 164.731 31.7686 164.86 31.6471 165.024C31.5278 165.188 31.4681 165.375 31.4681 165.583C31.4681 165.758 31.5097 165.908 31.5928 166.034C31.678 166.158 31.7867 166.261 31.9188 166.344C32.0509 166.425 32.1894 166.492 32.3343 166.545C32.4791 166.597 32.6123 166.638 32.7338 166.67L33.3985 166.849C33.569 166.894 33.7586 166.956 33.9674 167.034C34.1784 167.113 34.3797 167.221 34.5715 167.357C34.7654 167.492 34.9252 167.664 35.0509 167.875C35.1766 168.086 35.2394 168.345 35.2394 168.652C35.2394 169.005 35.1468 169.325 34.9614 169.61C34.7781 169.896 34.5097 170.123 34.156 170.291C33.8044 170.46 33.3772 170.544 32.8744 170.544C32.4056 170.544 31.9997 170.468 31.6567 170.317C31.3158 170.166 31.0473 169.955 30.8513 169.684C30.6574 169.413 30.5477 169.099 30.5221 168.741H31.3403C31.3616 168.988 31.4447 169.193 31.5896 169.355C31.7366 169.515 31.922 169.634 32.1457 169.713C32.3715 169.789 32.6144 169.828 32.8744 169.828C33.1769 169.828 33.4486 169.779 33.6894 169.681C33.9301 169.581 34.1208 169.442 34.2615 169.265C34.4021 169.086 34.4724 168.878 34.4724 168.639C34.4724 168.422 34.4117 168.245 34.2902 168.108C34.1688 167.972 34.009 167.861 33.8108 167.776C33.6127 167.691 33.3985 167.616 33.1684 167.552L32.363 167.322C31.8517 167.175 31.4468 166.965 31.1485 166.692C30.8502 166.42 30.7011 166.063 30.7011 165.622C30.7011 165.255 30.8002 164.936 30.9983 164.663C31.1986 164.388 31.4671 164.175 31.8037 164.024C32.1425 163.87 32.5207 163.794 32.9383 163.794C33.3602 163.794 33.7352 163.869 34.0633 164.021C34.3914 164.17 34.6514 164.374 34.8431 164.634C35.037 164.894 35.1393 165.189 35.1499 165.52H34.3829ZM38.473 170.518C38.098 170.518 37.7603 170.444 37.4599 170.294C37.1594 170.145 36.9187 169.941 36.7376 169.681C36.5565 169.421 36.4574 169.125 36.4403 168.792H37.2074C37.2372 169.088 37.3714 169.333 37.6101 169.527C37.8509 169.719 38.1385 169.815 38.473 169.815C38.7415 169.815 38.9801 169.752 39.1889 169.626C39.3999 169.501 39.565 169.328 39.6843 169.109C39.8058 168.887 39.8665 168.637 39.8665 168.358C39.8665 168.072 39.8036 167.817 39.6779 167.594C39.5543 167.368 39.3839 167.19 39.1665 167.06C38.9492 166.93 38.701 166.864 38.4219 166.862C38.2216 166.86 38.016 166.891 37.805 166.955C37.5941 167.016 37.4205 167.096 37.2841 167.194L36.5426 167.105L36.9389 163.883H40.3395V164.586H37.6037L37.3736 166.517H37.4119C37.5462 166.41 37.7145 166.322 37.9169 166.251C38.1193 166.181 38.3303 166.146 38.5497 166.146C38.9503 166.146 39.3072 166.242 39.6204 166.434C39.9357 166.623 40.1829 166.883 40.3619 167.213C40.543 167.544 40.6335 167.921 40.6335 168.345C40.6335 168.762 40.5398 169.135 40.3523 169.463C40.1669 169.789 39.9112 170.047 39.5852 170.237C39.2592 170.424 38.8885 170.518 38.473 170.518ZM42.0182 163.883H42.9642L45.1887 169.316H45.2654L47.4898 163.883H48.4358V170.429H47.6943V165.456H47.6304L45.585 170.429H44.8691L42.8236 165.456H42.7597V170.429H42.0182V163.883Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M25.7759 109.854V101.672H26.3001V109.854H25.7759ZM27.5401 104.127C27.5018 103.803 27.3462 103.551 27.0735 103.372C26.8008 103.193 26.4663 103.104 26.07 103.104C25.7802 103.104 25.5266 103.151 25.3093 103.244C25.0941 103.338 24.9258 103.467 24.8043 103.631C24.685 103.795 24.6254 103.982 24.6254 104.19C24.6254 104.365 24.6669 104.515 24.75 104.641C24.8352 104.765 24.9439 104.868 25.076 104.951C25.2081 105.032 25.3466 105.099 25.4915 105.152C25.6364 105.204 25.7695 105.245 25.891 105.277L26.5558 105.456C26.7262 105.501 26.9158 105.563 27.1246 105.641C27.3356 105.72 27.5369 105.828 27.7287 105.964C27.9226 106.098 28.0824 106.271 28.2081 106.482C28.3338 106.693 28.3967 106.952 28.3967 107.259C28.3967 107.612 28.304 107.932 28.1186 108.217C27.9354 108.503 27.6669 108.73 27.3132 108.898C26.9616 109.067 26.5344 109.151 26.0316 109.151C25.5629 109.151 25.157 109.075 24.8139 108.924C24.473 108.773 24.2045 108.562 24.0085 108.291C23.8146 108.02 23.7049 107.706 23.6793 107.348H24.4975C24.5188 107.595 24.6019 107.8 24.7468 107.962C24.8938 108.122 25.0792 108.241 25.3029 108.32C25.5288 108.396 25.7717 108.435 26.0316 108.435C26.3342 108.435 26.6058 108.386 26.8466 108.288C27.0874 108.188 27.2781 108.049 27.4187 107.872C27.5593 107.693 27.6296 107.485 27.6296 107.246C27.6296 107.029 27.5689 106.852 27.4474 106.715C27.326 106.579 27.1662 106.468 26.968 106.383C26.7699 106.298 26.5558 106.223 26.3256 106.159L25.5202 105.929C25.0089 105.782 24.604 105.572 24.3058 105.299C24.0075 105.027 23.8583 104.67 23.8583 104.229C23.8583 103.862 23.9574 103.543 24.1555 103.27C24.3558 102.995 24.6243 102.782 24.9609 102.631C25.2997 102.477 25.6779 102.401 26.0955 102.401C26.5174 102.401 26.8924 102.476 27.2205 102.628C27.5487 102.777 27.8086 102.981 28.0004 103.241C28.1942 103.501 28.2965 103.796 28.3072 104.127H27.5401ZM31.8859 102.49V109.036H31.0933V103.321H31.055L29.4569 104.382V103.577L31.0933 102.49H31.8859ZM35.8138 109.125C35.4388 109.125 35.1011 109.051 34.8007 108.901C34.5003 108.752 34.2595 108.548 34.0784 108.288C33.8973 108.028 33.7982 107.732 33.7812 107.399H34.5482C34.578 107.695 34.7123 107.94 34.9509 108.134C35.1917 108.326 35.4793 108.422 35.8138 108.422C36.0823 108.422 36.3209 108.359 36.5297 108.233C36.7407 108.108 36.9058 107.935 37.0251 107.716C37.1466 107.494 37.2073 107.244 37.2073 106.965C37.2073 106.679 37.1444 106.424 37.0187 106.201C36.8952 105.975 36.7247 105.797 36.5074 105.667C36.29 105.537 36.0418 105.471 35.7627 105.469C35.5624 105.467 35.3568 105.498 35.1459 105.562C34.9349 105.623 34.7613 105.703 34.6249 105.801L33.8834 105.712L34.2797 102.49H37.6803V103.193H34.9445L34.7144 105.124H34.7528C34.887 105.017 35.0553 104.929 35.2577 104.858C35.4601 104.788 35.6711 104.753 35.8905 104.753C36.2911 104.753 36.648 104.849 36.9612 105.041C37.2765 105.23 37.5237 105.49 37.7027 105.82C37.8838 106.151 37.9743 106.528 37.9743 106.952C37.9743 107.369 37.8806 107.742 37.6931 108.07C37.5077 108.396 37.252 108.654 36.926 108.844C36.6001 109.031 36.2293 109.125 35.8138 109.125ZM39.359 102.49H40.305L42.5295 107.923H42.6062L44.8306 102.49H45.7766V109.036H45.0352V104.063H44.9712L42.9258 109.036H42.2099L40.1644 104.063H40.1005V109.036H39.359V102.49Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M25.8218 78.6857V70.5039H26.346V78.6857H25.8218ZM27.586 72.9585C27.5477 72.6346 27.3921 72.3832 27.1194 72.2042C26.8467 72.0252 26.5122 71.9357 26.1159 71.9357C25.8261 71.9357 25.5725 71.9826 25.3552 72.0764C25.14 72.1701 24.9717 72.299 24.8502 72.4631C24.7309 72.6271 24.6713 72.8136 24.6713 73.0224C24.6713 73.1971 24.7128 73.3473 24.7959 73.473C24.8811 73.5966 24.9898 73.6999 25.1219 73.783C25.254 73.864 25.3925 73.9311 25.5374 73.9844C25.6823 74.0355 25.8154 74.0771 25.9369 74.109L26.6017 74.288C26.7721 74.3328 26.9617 74.3945 27.1705 74.4734C27.3815 74.5522 27.5828 74.6598 27.7746 74.7962C27.9685 74.9304 28.1283 75.103 28.254 75.3139C28.3797 75.5249 28.4426 75.7837 28.4426 76.0906C28.4426 76.4443 28.3499 76.7639 28.1645 77.0494C27.9813 77.3349 27.7128 77.5618 27.3591 77.7301C27.0075 77.8984 26.5803 77.9826 26.0775 77.9826C25.6088 77.9826 25.2029 77.907 24.8598 77.7557C24.5189 77.6044 24.2504 77.3935 24.0544 77.1229C23.8605 76.8523 23.7508 76.538 23.7252 76.1801H24.5434C24.5647 76.4272 24.6478 76.6318 24.7927 76.7937C24.9397 76.9535 25.1251 77.0728 25.3488 77.1516C25.5747 77.2283 25.8176 77.2667 26.0775 77.2667C26.3801 77.2667 26.6517 77.2177 26.8925 77.1197C27.1333 77.0195 27.324 76.881 27.4646 76.7042C27.6052 76.5252 27.6755 76.3164 27.6755 76.0778C27.6755 75.8605 27.6148 75.6836 27.4933 75.5472C27.3719 75.4109 27.2121 75.3001 27.0139 75.2149C26.8158 75.1296 26.6017 75.0551 26.3715 74.9911L25.5661 74.761C25.0548 74.614 24.6499 74.4041 24.3517 74.1314C24.0534 73.8587 23.9042 73.5018 23.9042 73.0607C23.9042 72.6943 24.0033 72.3747 24.2014 72.1019C24.4017 71.8271 24.6702 71.614 25.0068 71.4627C25.3456 71.3093 25.7238 71.2326 26.1414 71.2326C26.5633 71.2326 26.9383 71.3082 27.2664 71.4595C27.5945 71.6087 27.8545 71.8132 28.0463 72.0732C28.2401 72.3331 28.3424 72.6282 28.3531 72.9585H27.586ZM29.6307 77.8676V77.2923L31.7912 74.9272C32.0447 74.6502 32.2536 74.4095 32.4176 74.2049C32.5817 73.9982 32.7031 73.8043 32.782 73.6232C32.8629 73.44 32.9034 73.2482 32.9034 73.048C32.9034 72.8178 32.848 72.6186 32.7372 72.4503C32.6286 72.282 32.4794 72.152 32.2898 72.0604C32.1001 71.9688 31.8871 71.923 31.6506 71.923C31.3991 71.923 31.1797 71.9752 30.9922 72.0796C30.8068 72.1818 30.663 72.3256 30.5607 72.511C30.4606 72.6964 30.4105 72.9137 30.4105 73.163H29.6562C29.6562 72.7795 29.7447 72.4428 29.9215 72.1531C30.0984 71.8633 30.3391 71.6374 30.6438 71.4755C30.9506 71.3136 31.2947 71.2326 31.6761 71.2326C32.0597 71.2326 32.3995 71.3136 32.6957 71.4755C32.9918 71.6374 33.2241 71.8558 33.3924 72.1307C33.5607 72.4056 33.6449 72.7113 33.6449 73.048C33.6449 73.2887 33.6012 73.5242 33.5138 73.7543C33.4286 73.9823 33.2795 74.2369 33.0664 74.5181C32.8555 74.7972 32.5625 75.1382 32.1875 75.5408L30.7173 77.1133V77.1644H33.7599V77.8676H29.6307ZM37.2148 77.957C36.7333 77.957 36.3232 77.826 35.9844 77.5639C35.6456 77.2997 35.3867 76.9173 35.2077 76.4166C35.0288 75.9137 34.9393 75.3065 34.9393 74.5948C34.9393 73.8874 35.0288 73.2834 35.2077 72.7827C35.3888 72.2798 35.6488 71.8963 35.9876 71.6321C36.3285 71.3658 36.7376 71.2326 37.2148 71.2326C37.6921 71.2326 38.1001 71.3658 38.4389 71.6321C38.7798 71.8963 39.0398 72.2798 39.2188 72.7827C39.3999 73.2834 39.4904 73.8874 39.4904 74.5948C39.4904 75.3065 39.4009 75.9137 39.2219 76.4166C39.043 76.9173 38.7841 77.2997 38.4453 77.5639C38.1065 77.826 37.6964 77.957 37.2148 77.957ZM37.2148 77.2539C37.6921 77.2539 38.0629 77.0238 38.3271 76.5636C38.5913 76.1033 38.7234 75.4471 38.7234 74.5948C38.7234 74.0281 38.6626 73.5455 38.5412 73.147C38.4219 72.7486 38.2493 72.445 38.0234 72.2362C37.7997 72.0274 37.5302 71.923 37.2148 71.923C36.7418 71.923 36.3722 72.1563 36.1058 72.6229C35.8395 73.0874 35.7063 73.7447 35.7063 74.5948C35.7063 75.1616 35.766 75.6431 35.8853 76.0394C36.0046 76.4357 36.1761 76.7372 36.3999 76.9439C36.6257 77.1506 36.8974 77.2539 37.2148 77.2539ZM40.82 71.3221H41.766L43.9904 76.7553H44.0671L46.2915 71.3221H47.2376V77.8676H46.4961V72.8945H46.4322L44.3867 77.8676H43.6708L41.6254 72.8945H41.5614V77.8676H40.82V71.3221Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M26.3667 47.5168V39.335H26.8909V47.5168H26.3667ZM28.1309 41.7895C28.0926 41.4657 27.9371 41.2142 27.6643 41.0353C27.3916 40.8563 27.0571 40.7668 26.6608 40.7668C26.371 40.7668 26.1175 40.8137 25.9001 40.9074C25.6849 41.0012 25.5166 41.1301 25.3952 41.2941C25.2758 41.4582 25.2162 41.6446 25.2162 41.8534C25.2162 42.0282 25.2577 42.1784 25.3408 42.3041C25.426 42.4277 25.5347 42.531 25.6668 42.6141C25.7989 42.6951 25.9374 42.7622 26.0823 42.8154C26.2272 42.8666 26.3604 42.9081 26.4818 42.9401L27.1466 43.1191C27.317 43.1638 27.5067 43.2256 27.7155 43.3044C27.9264 43.3833 28.1278 43.4909 28.3195 43.6272C28.5134 43.7615 28.6732 43.934 28.7989 44.145C28.9246 44.3559 28.9875 44.6148 28.9875 44.9216C28.9875 45.2753 28.8948 45.5949 28.7094 45.8804C28.5262 46.1659 28.2577 46.3929 27.904 46.5612C27.5525 46.7295 27.1253 46.8137 26.6224 46.8137C26.1537 46.8137 25.7478 46.738 25.4047 46.5867C25.0638 46.4355 24.7954 46.2245 24.5993 45.9539C24.4055 45.6833 24.2957 45.3691 24.2702 45.0111H25.0883C25.1096 45.2583 25.1927 45.4628 25.3376 45.6247C25.4846 45.7845 25.67 45.9039 25.8937 45.9827C26.1196 46.0594 26.3625 46.0978 26.6224 46.0978C26.925 46.0978 27.1966 46.0488 27.4374 45.9507C27.6782 45.8506 27.8689 45.7121 28.0095 45.5353C28.1501 45.3563 28.2204 45.1475 28.2204 44.9088C28.2204 44.6915 28.1597 44.5147 28.0383 44.3783C27.9168 44.2419 27.757 44.1311 27.5589 44.0459C27.3607 43.9607 27.1466 43.8861 26.9165 43.8222L26.1111 43.5921C25.5997 43.4451 25.1949 43.2352 24.8966 42.9625C24.5983 42.6897 24.4491 42.3328 24.4491 41.8918C24.4491 41.5253 24.5482 41.2057 24.7464 40.933C24.9466 40.6581 25.2151 40.4451 25.5518 40.2938C25.8905 40.1404 26.2687 40.0637 26.6863 40.0637C27.1082 40.0637 27.4832 40.1393 27.8113 40.2906C28.1395 40.4397 28.3994 40.6443 28.5912 40.9042C28.7851 41.1642 28.8873 41.4593 28.898 41.7895H28.1309ZM30.1756 46.6986V46.1233L32.3361 43.7583C32.5897 43.4813 32.7985 43.2405 32.9625 43.036C33.1266 42.8293 33.248 42.6354 33.3269 42.4543C33.4078 42.2711 33.4483 42.0793 33.4483 41.879C33.4483 41.6489 33.3929 41.4497 33.2821 41.2813C33.1735 41.113 33.0243 40.9831 32.8347 40.8914C32.6451 40.7998 32.432 40.754 32.1955 40.754C31.9441 40.754 31.7246 40.8062 31.5371 40.9106C31.3517 41.0129 31.2079 41.1567 31.1056 41.3421C31.0055 41.5274 30.9554 41.7448 30.9554 41.9941H30.2012C30.2012 41.6105 30.2896 41.2739 30.4664 40.9841C30.6433 40.6943 30.8841 40.4685 31.1887 40.3066C31.4956 40.1446 31.8397 40.0637 32.2211 40.0637C32.6046 40.0637 32.9444 40.1446 33.2406 40.3066C33.5368 40.4685 33.769 40.6869 33.9373 40.9617C34.1056 41.2366 34.1898 41.5424 34.1898 41.879C34.1898 42.1198 34.1461 42.3552 34.0588 42.5853C33.9735 42.8133 33.8244 43.0679 33.6113 43.3492C33.4004 43.6283 33.1074 43.9692 32.7324 44.3719L31.2623 45.9443V45.9955H34.3049V46.6986H30.1756ZM37.6703 46.7881C37.2953 46.7881 36.9576 46.7135 36.6571 46.5644C36.3567 46.4152 36.1159 46.2107 35.9348 45.9507C35.7537 45.6908 35.6547 45.3946 35.6376 45.0622H36.4047C36.4345 45.3584 36.5687 45.6034 36.8074 45.7973C37.0481 45.9891 37.3358 46.085 37.6703 46.085C37.9387 46.085 38.1774 46.0221 38.3862 45.8964C38.5971 45.7707 38.7623 45.5981 38.8816 45.3787C39.003 45.1571 39.0637 44.9067 39.0637 44.6276C39.0637 44.3421 39.0009 44.0875 38.8752 43.8637C38.7516 43.6379 38.5811 43.46 38.3638 43.33C38.1465 43.2 37.8983 43.134 37.6191 43.1318C37.4189 43.1297 37.2132 43.1606 37.0023 43.2245C36.7914 43.2863 36.6177 43.3662 36.4814 43.4642L35.7399 43.3747L36.1362 40.1532H39.5368V40.8563H36.801L36.5708 42.7867H36.6092C36.7434 42.6801 36.9118 42.5917 37.1142 42.5214C37.3166 42.4511 37.5275 42.4159 37.747 42.4159C38.1475 42.4159 38.5044 42.5118 38.8176 42.7036C39.133 42.8932 39.3801 43.1532 39.5591 43.4834C39.7402 43.8137 39.8308 44.1908 39.8308 44.6148C39.8308 45.0324 39.737 45.4053 39.5495 45.7334C39.3642 46.0594 39.1085 46.3172 38.7825 46.5068C38.4565 46.6943 38.0858 46.7881 37.6703 46.7881ZM41.2155 40.1532H42.1615L44.3859 45.5864H44.4626L46.6871 40.1532H47.6331V46.6986H46.8916V41.7256H46.8277L44.7822 46.6986H44.0663L42.0209 41.7256H41.9569V46.6986H41.2155V40.1532Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M26.2242 140.079V131.897H26.7483V140.079H26.2242ZM27.9884 134.351C27.95 134.028 27.7945 133.776 27.5218 133.597C27.249 133.418 26.9145 133.329 26.5182 133.329C26.2284 133.329 25.9749 133.376 25.7575 133.469C25.5423 133.563 25.374 133.692 25.2526 133.856C25.1333 134.02 25.0736 134.207 25.0736 134.415C25.0736 134.59 25.1151 134.74 25.1982 134.866C25.2835 134.99 25.3921 135.093 25.5242 135.176C25.6563 135.257 25.7948 135.324 25.9397 135.377C26.0846 135.429 26.2178 135.47 26.3392 135.502L27.004 135.681C27.1744 135.726 27.3641 135.788 27.5729 135.866C27.7838 135.945 27.9852 136.053 28.1769 136.189C28.3708 136.323 28.5306 136.496 28.6563 136.707C28.782 136.918 28.8449 137.177 28.8449 137.484C28.8449 137.837 28.7522 138.157 28.5669 138.442C28.3836 138.728 28.1151 138.955 27.7615 139.123C27.4099 139.291 26.9827 139.376 26.4798 139.376C26.0111 139.376 25.6052 139.3 25.2622 139.149C24.9213 138.997 24.6528 138.786 24.4568 138.516C24.2629 138.245 24.1531 137.931 24.1276 137.573H24.9458C24.9671 137.82 25.0502 138.025 25.195 138.187C25.3421 138.346 25.5274 138.466 25.7512 138.545C25.977 138.621 26.2199 138.66 26.4798 138.66C26.7824 138.66 27.0541 138.611 27.2948 138.513C27.5356 138.413 27.7263 138.274 27.8669 138.097C28.0075 137.918 28.0779 137.709 28.0779 137.471C28.0779 137.253 28.0171 137.077 27.8957 136.94C27.7742 136.804 27.6144 136.693 27.4163 136.608C27.2181 136.523 27.004 136.448 26.7739 136.384L25.9685 136.154C25.4571 136.007 25.0523 135.797 24.754 135.524C24.4557 135.252 24.3066 134.895 24.3066 134.454C24.3066 134.087 24.4056 133.768 24.6038 133.495C24.8041 133.22 25.0725 133.007 25.4092 132.856C25.748 132.702 26.1262 132.626 26.5438 132.626C26.9656 132.626 27.3406 132.701 27.6688 132.853C27.9969 133.002 28.2568 133.206 28.4486 133.466C28.6425 133.726 28.7448 134.021 28.7554 134.351H27.9884ZM32.3342 132.715V139.261H31.5415V133.546H31.5032L29.9052 134.607V133.802L31.5415 132.715H32.3342ZM36.3516 139.35C35.87 139.35 35.4599 139.219 35.1211 138.957C34.7823 138.693 34.5234 138.31 34.3445 137.81C34.1655 137.307 34.076 136.699 34.076 135.988C34.076 135.28 34.1655 134.676 34.3445 134.176C34.5256 133.673 34.7855 133.289 35.1243 133.025C35.4652 132.759 35.8743 132.626 36.3516 132.626C36.8288 132.626 37.2369 132.759 37.5756 133.025C37.9165 133.289 38.1765 133.673 38.3555 134.176C38.5366 134.676 38.6271 135.28 38.6271 135.988C38.6271 136.699 38.5376 137.307 38.3587 137.81C38.1797 138.31 37.9208 138.693 37.582 138.957C37.2433 139.219 36.8331 139.35 36.3516 139.35ZM36.3516 138.647C36.8288 138.647 37.1996 138.417 37.4638 137.957C37.728 137.496 37.8601 136.84 37.8601 135.988C37.8601 135.421 37.7994 134.938 37.6779 134.54C37.5586 134.142 37.386 133.838 37.1602 133.629C36.9364 133.42 36.6669 133.316 36.3516 133.316C35.8786 133.316 35.5089 133.549 35.2425 134.016C34.9762 134.48 34.843 135.138 34.843 135.988C34.843 136.555 34.9027 137.036 35.022 137.432C35.1413 137.829 35.3129 138.13 35.5366 138.337C35.7624 138.544 36.0341 138.647 36.3516 138.647ZM39.9567 132.715H40.9027L43.1271 138.148H43.2038L45.4283 132.715H46.3743V139.261H45.6328V134.288H45.5689L43.5234 139.261H42.8075L40.7621 134.288H40.6982V139.261H39.9567V132.715Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M227.026 205.443V211.988H226.259L222.692 206.849H222.628V211.988H221.836V205.443H222.603L226.182 210.595H226.246V205.443H227.026ZM230.504 212.091C230.061 212.091 229.672 211.985 229.337 211.774C229.005 211.563 228.745 211.268 228.558 210.889C228.372 210.51 228.28 210.066 228.28 209.559C228.28 209.048 228.372 208.602 228.558 208.22C228.745 207.839 229.005 207.543 229.337 207.332C229.672 207.121 230.061 207.015 230.504 207.015C230.947 207.015 231.335 207.121 231.667 207.332C232.002 207.543 232.262 207.839 232.447 208.22C232.635 208.602 232.728 209.048 232.728 209.559C232.728 210.066 232.635 210.51 232.447 210.889C232.262 211.268 232.002 211.563 231.667 211.774C231.335 211.985 230.947 212.091 230.504 212.091ZM230.504 211.413C230.841 211.413 231.118 211.327 231.335 211.154C231.552 210.982 231.713 210.755 231.818 210.473C231.922 210.192 231.974 209.887 231.974 209.559C231.974 209.231 231.922 208.925 231.818 208.642C231.713 208.359 231.552 208.13 231.335 207.955C231.118 207.78 230.841 207.693 230.504 207.693C230.167 207.693 229.89 207.78 229.673 207.955C229.456 208.13 229.295 208.359 229.19 208.642C229.086 208.925 229.034 209.231 229.034 209.559C229.034 209.887 229.086 210.192 229.19 210.473C229.295 210.755 229.456 210.982 229.673 211.154C229.89 211.327 230.167 211.413 230.504 211.413ZM237.718 207.079L235.903 211.988H235.136L233.32 207.079H234.139L235.494 210.991H235.545L236.9 207.079H237.718ZM238.701 211.988V211.413L240.862 209.048C241.115 208.771 241.324 208.53 241.488 208.326C241.652 208.119 241.773 207.925 241.852 207.744C241.933 207.561 241.974 207.369 241.974 207.169C241.974 206.939 241.918 206.739 241.808 206.571C241.699 206.403 241.55 206.273 241.36 206.181C241.17 206.089 240.957 206.044 240.721 206.044C240.469 206.044 240.25 206.096 240.062 206.2C239.877 206.303 239.733 206.446 239.631 206.632C239.531 206.817 239.481 207.034 239.481 207.284H238.727C238.727 206.9 238.815 206.564 238.992 206.274C239.169 205.984 239.409 205.758 239.714 205.596C240.021 205.434 240.365 205.353 240.746 205.353C241.13 205.353 241.47 205.434 241.766 205.596C242.062 205.758 242.294 205.977 242.463 206.251C242.631 206.526 242.715 206.832 242.715 207.169C242.715 207.409 242.672 207.645 242.584 207.875C242.499 208.103 242.35 208.358 242.137 208.639C241.926 208.918 241.633 209.259 241.258 209.662L239.788 211.234V211.285H242.83V211.988H238.701ZM246.285 212.078C245.804 212.078 245.393 211.947 245.055 211.685C244.716 211.42 244.457 211.038 244.278 210.537C244.099 210.034 244.01 209.427 244.01 208.716C244.01 208.008 244.099 207.404 244.278 206.903C244.459 206.401 244.719 206.017 245.058 205.753C245.399 205.487 245.808 205.353 246.285 205.353C246.762 205.353 247.17 205.487 247.509 205.753C247.85 206.017 248.11 206.401 248.289 206.903C248.47 207.404 248.561 208.008 248.561 208.716C248.561 209.427 248.471 210.034 248.292 210.537C248.113 211.038 247.854 211.42 247.516 211.685C247.177 211.947 246.767 212.078 246.285 212.078ZM246.285 211.375C246.762 211.375 247.133 211.145 247.397 210.684C247.662 210.224 247.794 209.568 247.794 208.716C247.794 208.149 247.733 207.666 247.612 207.268C247.492 206.869 247.32 206.566 247.094 206.357C246.87 206.148 246.6 206.044 246.285 206.044C245.812 206.044 245.442 206.277 245.176 206.744C244.91 207.208 244.777 207.865 244.777 208.716C244.777 209.282 244.836 209.764 244.956 210.16C245.075 210.556 245.246 210.858 245.47 211.065C245.696 211.271 245.968 211.375 246.285 211.375ZM249.775 211.988V211.413L251.936 209.048C252.189 208.771 252.398 208.53 252.562 208.326C252.726 208.119 252.848 207.925 252.926 207.744C253.007 207.561 253.048 207.369 253.048 207.169C253.048 206.939 252.993 206.739 252.882 206.571C252.773 206.403 252.624 206.273 252.434 206.181C252.245 206.089 252.032 206.044 251.795 206.044C251.544 206.044 251.324 206.096 251.137 206.2C250.951 206.303 250.808 206.446 250.705 206.632C250.605 206.817 250.555 207.034 250.555 207.284H249.801C249.801 206.9 249.889 206.564 250.066 206.274C250.243 205.984 250.484 205.758 250.788 205.596C251.095 205.434 251.439 205.353 251.821 205.353C252.204 205.353 252.544 205.434 252.84 205.596C253.136 205.758 253.369 205.977 253.537 206.251C253.705 206.526 253.789 206.832 253.789 207.169C253.789 207.409 253.746 207.645 253.658 207.875C253.573 208.103 253.424 208.358 253.211 208.639C253 208.918 252.707 209.259 252.332 209.662L250.862 211.234V211.285H253.904V211.988H249.775ZM255.224 211.988V211.413L257.385 209.048C257.638 208.771 257.847 208.53 258.011 208.326C258.175 208.119 258.297 207.925 258.376 207.744C258.457 207.561 258.497 207.369 258.497 207.169C258.497 206.939 258.442 206.739 258.331 206.571C258.222 206.403 258.073 206.273 257.884 206.181C257.694 206.089 257.481 206.044 257.244 206.044C256.993 206.044 256.773 206.096 256.586 206.2C256.401 206.303 256.257 206.446 256.154 206.632C256.054 206.817 256.004 207.034 256.004 207.284H255.25C255.25 206.9 255.338 206.564 255.515 206.274C255.692 205.984 255.933 205.758 256.238 205.596C256.544 205.434 256.888 205.353 257.27 205.353C257.653 205.353 257.993 205.434 258.289 205.596C258.586 205.758 258.818 205.977 258.986 206.251C259.154 206.526 259.239 206.832 259.239 207.169C259.239 207.409 259.195 207.645 259.108 207.875C259.022 208.103 258.873 208.358 258.66 208.639C258.449 208.918 258.156 209.259 257.781 209.662L256.311 211.234V211.285H259.354V211.988H255.224Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M386.065 211.988H384.046V205.443H386.155C386.79 205.443 387.333 205.574 387.785 205.836C388.237 206.096 388.583 206.47 388.824 206.958C389.064 207.444 389.185 208.025 389.185 208.703C389.185 209.385 389.063 209.972 388.82 210.464C388.578 210.954 388.224 211.331 387.759 211.595C387.295 211.857 386.73 211.988 386.065 211.988ZM384.838 211.285H386.014C386.555 211.285 387.004 211.181 387.36 210.972C387.716 210.763 387.981 210.466 388.156 210.08C388.33 209.695 388.418 209.235 388.418 208.703C388.418 208.174 388.331 207.719 388.159 207.338C387.986 206.955 387.728 206.661 387.385 206.456C387.042 206.249 386.615 206.146 386.104 206.146H384.838V211.285ZM392.47 212.091C391.997 212.091 391.589 211.986 391.246 211.777C390.905 211.566 390.642 211.272 390.457 210.895C390.274 210.516 390.182 210.075 390.182 209.572C390.182 209.069 390.274 208.626 390.457 208.243C390.642 207.857 390.9 207.556 391.23 207.341C391.563 207.124 391.95 207.015 392.394 207.015C392.649 207.015 392.902 207.058 393.151 207.143C393.4 207.228 393.627 207.367 393.832 207.559C394.036 207.748 394.199 208 394.321 208.313C394.442 208.626 394.503 209.012 394.503 209.47V209.789H390.719V209.137H393.736C393.736 208.86 393.68 208.613 393.57 208.396C393.461 208.179 393.305 208.007 393.103 207.881C392.903 207.756 392.666 207.693 392.394 207.693C392.093 207.693 391.833 207.767 391.614 207.917C391.396 208.064 391.229 208.255 391.112 208.492C390.995 208.728 390.936 208.982 390.936 209.252V209.687C390.936 210.058 391 210.372 391.128 210.63C391.258 210.886 391.438 211.081 391.668 211.215C391.898 211.347 392.166 211.413 392.47 211.413C392.668 211.413 392.847 211.385 393.007 211.33C393.169 211.272 393.309 211.187 393.426 211.074C393.543 210.959 393.634 210.816 393.698 210.646L394.426 210.85C394.35 211.098 394.221 211.315 394.04 211.502C393.858 211.688 393.635 211.833 393.368 211.937C393.102 212.039 392.803 212.091 392.47 212.091ZM397.645 212.091C397.184 212.091 396.788 211.982 396.456 211.765C396.123 211.547 395.868 211.248 395.689 210.866C395.51 210.485 395.42 210.049 395.42 209.559C395.42 209.061 395.512 208.621 395.695 208.239C395.88 207.856 396.138 207.556 396.468 207.341C396.801 207.124 397.189 207.015 397.632 207.015C397.977 207.015 398.288 207.079 398.565 207.207C398.842 207.335 399.069 207.514 399.246 207.744C399.423 207.974 399.532 208.243 399.575 208.549H398.821C398.763 208.326 398.635 208.127 398.437 207.955C398.241 207.78 397.977 207.693 397.645 207.693C397.351 207.693 397.093 207.77 396.871 207.923C396.652 208.074 396.48 208.288 396.357 208.565C396.235 208.84 396.174 209.163 396.174 209.534C396.174 209.913 396.234 210.243 396.353 210.525C396.475 210.806 396.645 211.024 396.865 211.18C397.086 211.335 397.346 211.413 397.645 211.413C397.841 211.413 398.019 211.379 398.178 211.311C398.338 211.243 398.473 211.145 398.584 211.017C398.695 210.889 398.774 210.735 398.821 210.556H399.575C399.532 210.846 399.427 211.107 399.259 211.339C399.092 211.57 398.872 211.753 398.597 211.889C398.324 212.023 398.007 212.091 397.645 212.091ZM400.665 211.988V211.413L402.825 209.048C403.079 208.771 403.288 208.53 403.452 208.326C403.616 208.119 403.737 207.925 403.816 207.744C403.897 207.561 403.938 207.369 403.938 207.169C403.938 206.939 403.882 206.739 403.771 206.571C403.663 206.403 403.514 206.273 403.324 206.181C403.134 206.089 402.921 206.044 402.685 206.044C402.433 206.044 402.214 206.096 402.026 206.2C401.841 206.303 401.697 206.446 401.595 206.632C401.495 206.817 401.445 207.034 401.445 207.284H400.69C400.69 206.9 400.779 206.564 400.956 206.274C401.133 205.984 401.373 205.758 401.678 205.596C401.985 205.434 402.329 205.353 402.71 205.353C403.094 205.353 403.434 205.434 403.73 205.596C404.026 205.758 404.258 205.977 404.427 206.251C404.595 206.526 404.679 206.832 404.679 207.169C404.679 207.409 404.635 207.645 404.548 207.875C404.463 208.103 404.314 208.358 404.101 208.639C403.89 208.918 403.597 209.259 403.222 209.662L401.752 211.234V211.285H404.794V211.988H400.665ZM408.249 212.078C407.767 212.078 407.357 211.947 407.019 211.685C406.68 211.42 406.421 211.038 406.242 210.537C406.063 210.034 405.973 209.427 405.973 208.716C405.973 208.008 406.063 207.404 406.242 206.903C406.423 206.401 406.683 206.017 407.022 205.753C407.363 205.487 407.772 205.353 408.249 205.353C408.726 205.353 409.134 205.487 409.473 205.753C409.814 206.017 410.074 206.401 410.253 206.903C410.434 207.404 410.525 208.008 410.525 208.716C410.525 209.427 410.435 210.034 410.256 210.537C410.077 211.038 409.818 211.42 409.479 211.685C409.141 211.947 408.731 212.078 408.249 212.078ZM408.249 211.375C408.726 211.375 409.097 211.145 409.361 210.684C409.625 210.224 409.758 209.568 409.758 208.716C409.758 208.149 409.697 207.666 409.575 207.268C409.456 206.869 409.283 206.566 409.058 206.357C408.834 206.148 408.564 206.044 408.249 206.044C407.776 206.044 407.406 206.277 407.14 206.744C406.874 207.208 406.741 207.865 406.741 208.716C406.741 209.282 406.8 209.764 406.919 210.16C407.039 210.556 407.21 210.858 407.434 211.065C407.66 211.271 407.932 211.375 408.249 211.375ZM411.739 211.988V211.413L413.9 209.048C414.153 208.771 414.362 208.53 414.526 208.326C414.69 208.119 414.812 207.925 414.89 207.744C414.971 207.561 415.012 207.369 415.012 207.169C415.012 206.939 414.956 206.739 414.846 206.571C414.737 206.403 414.588 206.273 414.398 206.181C414.209 206.089 413.995 206.044 413.759 206.044C413.508 206.044 413.288 206.096 413.101 206.2C412.915 206.303 412.771 206.446 412.669 206.632C412.569 206.817 412.519 207.034 412.519 207.284H411.765C411.765 206.9 411.853 206.564 412.03 206.274C412.207 205.984 412.448 205.758 412.752 205.596C413.059 205.434 413.403 205.353 413.785 205.353C414.168 205.353 414.508 205.434 414.804 205.596C415.1 205.758 415.332 205.977 415.501 206.251C415.669 206.526 415.753 206.832 415.753 207.169C415.753 207.409 415.71 207.645 415.622 207.875C415.537 208.103 415.388 208.358 415.175 208.639C414.964 208.918 414.671 209.259 414.296 209.662L412.826 211.234V211.285H415.868V211.988H411.739ZM417.188 211.988V211.413L419.349 209.048C419.602 208.771 419.811 208.53 419.975 208.326C420.139 208.119 420.261 207.925 420.34 207.744C420.421 207.561 420.461 207.369 420.461 207.169C420.461 206.939 420.406 206.739 420.295 206.571C420.186 206.403 420.037 206.273 419.847 206.181C419.658 206.089 419.445 206.044 419.208 206.044C418.957 206.044 418.737 206.096 418.55 206.2C418.364 206.303 418.221 206.446 418.118 206.632C418.018 206.817 417.968 207.034 417.968 207.284H417.214C417.214 206.9 417.302 206.564 417.479 206.274C417.656 205.984 417.897 205.758 418.201 205.596C418.508 205.434 418.852 205.353 419.234 205.353C419.617 205.353 419.957 205.434 420.253 205.596C420.549 205.758 420.782 205.977 420.95 206.251C421.118 206.526 421.203 206.832 421.203 207.169C421.203 207.409 421.159 207.645 421.071 207.875C420.986 208.103 420.837 208.358 420.624 208.639C420.413 208.918 420.12 209.259 419.745 209.662L418.275 211.234V211.285H421.318V211.988H417.188Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M575.612 207.079H576.366V212.346C576.366 212.649 576.314 212.911 576.21 213.132C576.108 213.354 575.952 213.526 575.743 213.647C575.537 213.768 575.276 213.829 574.96 213.829C574.935 213.829 574.909 213.829 574.884 213.829C574.858 213.829 574.832 213.829 574.807 213.829V213.126C574.832 213.126 574.856 213.126 574.877 213.126C574.898 213.126 574.922 213.126 574.947 213.126C575.178 213.126 575.346 213.058 575.452 212.922C575.559 212.787 575.612 212.596 575.612 212.346V207.079ZM575.983 206.261C575.836 206.261 575.709 206.211 575.603 206.111C575.498 206.011 575.446 205.89 575.446 205.75C575.446 205.609 575.498 205.489 575.603 205.388C575.709 205.288 575.836 205.238 575.983 205.238C576.13 205.238 576.256 205.288 576.36 205.388C576.467 205.489 576.52 205.609 576.52 205.75C576.52 205.89 576.467 206.011 576.36 206.111C576.256 206.211 576.13 206.261 575.983 206.261ZM579.193 212.103C578.881 212.103 578.599 212.045 578.346 211.928C578.092 211.808 577.891 211.637 577.742 211.413C577.592 211.187 577.518 210.914 577.518 210.595C577.518 210.314 577.573 210.086 577.684 209.911C577.795 209.734 577.943 209.596 578.128 209.495C578.314 209.395 578.518 209.321 578.742 209.272C578.968 209.221 579.195 209.18 579.423 209.15C579.721 209.112 579.963 209.083 580.148 209.064C580.336 209.043 580.472 209.007 580.557 208.958C580.645 208.909 580.688 208.824 580.688 208.703V208.677C580.688 208.362 580.602 208.117 580.429 207.942C580.259 207.767 580 207.68 579.653 207.68C579.293 207.68 579.01 207.759 578.806 207.917C578.601 208.074 578.457 208.243 578.374 208.422L577.658 208.166C577.786 207.868 577.957 207.635 578.17 207.469C578.385 207.301 578.619 207.184 578.873 207.118C579.129 207.049 579.38 207.015 579.627 207.015C579.785 207.015 579.966 207.034 580.171 207.073C580.377 207.109 580.576 207.185 580.768 207.3C580.962 207.415 581.123 207.588 581.251 207.821C581.379 208.053 581.443 208.364 581.443 208.754V211.988H580.688V211.324H580.65C580.599 211.43 580.514 211.544 580.394 211.665C580.275 211.787 580.116 211.89 579.918 211.975C579.72 212.061 579.478 212.103 579.193 212.103ZM579.308 211.426C579.606 211.426 579.857 211.367 580.062 211.25C580.269 211.133 580.424 210.982 580.528 210.796C580.635 210.611 580.688 210.416 580.688 210.211V209.521C580.656 209.559 580.586 209.594 580.477 209.626C580.371 209.656 580.247 209.683 580.107 209.706C579.968 209.728 579.833 209.747 579.701 209.764C579.571 209.779 579.465 209.792 579.384 209.802C579.188 209.828 579.005 209.869 578.835 209.927C578.666 209.982 578.53 210.066 578.426 210.179C578.323 210.29 578.272 210.441 578.272 210.633C578.272 210.895 578.369 211.093 578.563 211.228C578.759 211.36 579.007 211.426 579.308 211.426ZM583.574 209.035V211.988H582.819V207.079H583.548V207.846H583.612C583.727 207.597 583.902 207.397 584.136 207.245C584.37 207.092 584.673 207.015 585.044 207.015C585.376 207.015 585.667 207.083 585.916 207.22C586.165 207.354 586.359 207.559 586.498 207.833C586.636 208.106 586.706 208.451 586.706 208.869V211.988H585.951V208.92C585.951 208.534 585.851 208.234 585.651 208.019C585.451 207.801 585.176 207.693 584.826 207.693C584.586 207.693 584.37 207.745 584.181 207.849C583.993 207.954 583.845 208.106 583.737 208.306C583.628 208.507 583.574 208.75 583.574 209.035ZM588.071 211.988V211.413L590.232 209.048C590.485 208.771 590.694 208.53 590.858 208.326C591.022 208.119 591.144 207.925 591.222 207.744C591.303 207.561 591.344 207.369 591.344 207.169C591.344 206.939 591.288 206.739 591.178 206.571C591.069 206.403 590.92 206.273 590.73 206.181C590.541 206.089 590.328 206.044 590.091 206.044C589.84 206.044 589.62 206.096 589.433 206.2C589.247 206.303 589.103 206.446 589.001 206.632C588.901 206.817 588.851 207.034 588.851 207.284H588.097C588.097 206.9 588.185 206.564 588.362 206.274C588.539 205.984 588.78 205.758 589.084 205.596C589.391 205.434 589.735 205.353 590.117 205.353C590.5 205.353 590.84 205.434 591.136 205.596C591.432 205.758 591.665 205.977 591.833 206.251C592.001 206.526 592.085 206.832 592.085 207.169C592.085 207.409 592.042 207.645 591.954 207.875C591.869 208.103 591.72 208.358 591.507 208.639C591.296 208.918 591.003 209.259 590.628 209.662L589.158 211.234V211.285H592.2V211.988H588.071ZM595.655 212.078C595.174 212.078 594.764 211.947 594.425 211.685C594.086 211.42 593.827 211.038 593.648 210.537C593.469 210.034 593.38 209.427 593.38 208.716C593.38 208.008 593.469 207.404 593.648 206.903C593.829 206.401 594.089 206.017 594.428 205.753C594.769 205.487 595.178 205.353 595.655 205.353C596.133 205.353 596.541 205.487 596.879 205.753C597.22 206.017 597.48 206.401 597.659 206.903C597.84 207.404 597.931 208.008 597.931 208.716C597.931 209.427 597.841 210.034 597.662 210.537C597.483 211.038 597.225 211.42 596.886 211.685C596.547 211.947 596.137 212.078 595.655 212.078ZM595.655 211.375C596.133 211.375 596.503 211.145 596.767 210.684C597.032 210.224 597.164 209.568 597.164 208.716C597.164 208.149 597.103 207.666 596.982 207.268C596.862 206.869 596.69 206.566 596.464 206.357C596.24 206.148 595.971 206.044 595.655 206.044C595.182 206.044 594.813 206.277 594.546 206.744C594.28 207.208 594.147 207.865 594.147 208.716C594.147 209.282 594.206 209.764 594.326 210.16C594.445 210.556 594.617 210.858 594.84 211.065C595.066 211.271 595.338 211.375 595.655 211.375ZM599.145 211.988V211.413L601.306 209.048C601.559 208.771 601.768 208.53 601.932 208.326C602.096 208.119 602.218 207.925 602.297 207.744C602.378 207.561 602.418 207.369 602.418 207.169C602.418 206.939 602.363 206.739 602.252 206.571C602.143 206.403 601.994 206.273 601.804 206.181C601.615 206.089 601.402 206.044 601.165 206.044C600.914 206.044 600.694 206.096 600.507 206.2C600.321 206.303 600.178 206.446 600.075 206.632C599.975 206.817 599.925 207.034 599.925 207.284H599.171C599.171 206.9 599.259 206.564 599.436 206.274C599.613 205.984 599.854 205.758 600.158 205.596C600.465 205.434 600.809 205.353 601.191 205.353C601.574 205.353 601.914 205.434 602.21 205.596C602.506 205.758 602.739 205.977 602.907 206.251C603.075 206.526 603.16 206.832 603.16 207.169C603.16 207.409 603.116 207.645 603.028 207.875C602.943 208.103 602.794 208.358 602.581 208.639C602.37 208.918 602.077 209.259 601.702 209.662L600.232 211.234V211.285H603.275V211.988H599.145ZM606.806 212.078C606.384 212.078 606.008 212.005 605.678 211.86C605.35 211.716 605.089 211.514 604.895 211.256C604.703 210.996 604.599 210.695 604.582 210.352H605.387C605.404 210.563 605.477 210.745 605.604 210.898C605.732 211.05 605.9 211.167 606.106 211.25C606.313 211.333 606.542 211.375 606.793 211.375C607.075 211.375 607.324 211.326 607.541 211.228C607.759 211.13 607.929 210.993 608.053 210.819C608.176 210.644 608.238 210.441 608.238 210.211C608.238 209.971 608.178 209.759 608.059 209.575C607.94 209.39 607.765 209.245 607.535 209.141C607.305 209.036 607.024 208.984 606.691 208.984H606.167V208.281H606.691C606.951 208.281 607.179 208.234 607.375 208.14C607.573 208.047 607.728 207.914 607.839 207.744C607.951 207.574 608.008 207.373 608.008 207.143C608.008 206.922 607.959 206.729 607.861 206.565C607.763 206.401 607.624 206.273 607.445 206.181C607.269 206.089 607.06 206.044 606.819 206.044C606.593 206.044 606.38 206.085 606.18 206.168C605.982 206.249 605.82 206.368 605.694 206.523C605.568 206.676 605.5 206.862 605.489 207.079H604.722C604.735 206.736 604.839 206.436 605.032 206.178C605.226 205.918 605.48 205.716 605.793 205.571C606.108 205.426 606.455 205.353 606.832 205.353C607.237 205.353 607.584 205.435 607.874 205.599C608.163 205.761 608.386 205.975 608.542 206.242C608.697 206.508 608.775 206.796 608.775 207.105C608.775 207.473 608.678 207.788 608.484 208.048C608.292 208.308 608.031 208.488 607.701 208.588V208.639C608.114 208.707 608.437 208.883 608.669 209.166C608.902 209.447 609.018 209.796 609.018 210.211C609.018 210.567 608.921 210.887 608.727 211.17C608.535 211.451 608.273 211.673 607.941 211.835C607.608 211.997 607.23 212.078 606.806 212.078Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M746.341 211.988V205.443H750.266V206.146H747.134V208.358H749.972V209.061H747.134V211.988H746.341ZM753.219 212.091C752.746 212.091 752.338 211.986 751.995 211.777C751.654 211.566 751.391 211.272 751.206 210.895C751.023 210.516 750.931 210.075 750.931 209.572C750.931 209.069 751.023 208.626 751.206 208.243C751.391 207.857 751.649 207.556 751.979 207.341C752.312 207.124 752.699 207.015 753.143 207.015C753.398 207.015 753.651 207.058 753.9 207.143C754.149 207.228 754.376 207.367 754.581 207.559C754.785 207.748 754.948 208 755.07 208.313C755.191 208.626 755.252 209.012 755.252 209.47V209.789H751.468V209.137H754.485C754.485 208.86 754.43 208.613 754.319 208.396C754.21 208.179 754.055 208.007 753.852 207.881C753.652 207.756 753.415 207.693 753.143 207.693C752.842 207.693 752.582 207.767 752.363 207.917C752.145 208.064 751.978 208.255 751.861 208.492C751.744 208.728 751.685 208.982 751.685 209.252V209.687C751.685 210.058 751.749 210.372 751.877 210.63C752.007 210.886 752.187 211.081 752.417 211.215C752.647 211.347 752.915 211.413 753.219 211.413C753.417 211.413 753.596 211.385 753.756 211.33C753.918 211.272 754.058 211.187 754.175 211.074C754.292 210.959 754.383 210.816 754.447 210.646L755.175 210.85C755.099 211.098 754.97 211.315 754.789 211.502C754.607 211.688 754.384 211.833 754.117 211.937C753.851 212.039 753.552 212.091 753.219 212.091ZM756.502 211.988V205.443H757.256V207.859H757.32C757.375 207.774 757.452 207.665 757.55 207.533C757.65 207.399 757.793 207.279 757.978 207.175C758.166 207.069 758.419 207.015 758.739 207.015C759.152 207.015 759.517 207.119 759.832 207.325C760.147 207.532 760.393 207.825 760.57 208.204C760.747 208.583 760.835 209.031 760.835 209.547C760.835 210.066 760.747 210.517 760.57 210.898C760.393 211.278 760.148 211.572 759.835 211.781C759.522 211.987 759.161 212.091 758.752 212.091C758.436 212.091 758.184 212.038 757.994 211.934C757.805 211.827 757.659 211.707 757.556 211.573C757.454 211.436 757.375 211.324 757.32 211.234H757.23V211.988H756.502ZM757.243 209.534C757.243 209.904 757.297 210.232 757.406 210.515C757.515 210.796 757.673 211.017 757.882 211.176C758.091 211.334 758.347 211.413 758.649 211.413C758.965 211.413 759.228 211.33 759.439 211.164C759.652 210.995 759.812 210.77 759.918 210.486C760.027 210.201 760.081 209.883 760.081 209.534C760.081 209.189 760.028 208.877 759.921 208.6C759.817 208.321 759.658 208.101 759.445 207.939C759.234 207.775 758.969 207.693 758.649 207.693C758.343 207.693 758.085 207.771 757.876 207.926C757.667 208.08 757.509 208.295 757.403 208.572C757.296 208.847 757.243 209.167 757.243 209.534ZM761.976 211.988V211.413L764.137 209.048C764.39 208.771 764.599 208.53 764.763 208.326C764.927 208.119 765.049 207.925 765.128 207.744C765.209 207.561 765.249 207.369 765.249 207.169C765.249 206.939 765.194 206.739 765.083 206.571C764.974 206.403 764.825 206.273 764.635 206.181C764.446 206.089 764.233 206.044 763.996 206.044C763.745 206.044 763.525 206.096 763.338 206.2C763.153 206.303 763.009 206.446 762.906 206.632C762.806 206.817 762.756 207.034 762.756 207.284H762.002C762.002 206.9 762.09 206.564 762.267 206.274C762.444 205.984 762.685 205.758 762.99 205.596C763.296 205.434 763.64 205.353 764.022 205.353C764.405 205.353 764.745 205.434 765.041 205.596C765.338 205.758 765.57 205.977 765.738 206.251C765.906 206.526 765.991 206.832 765.991 207.169C765.991 207.409 765.947 207.645 765.86 207.875C765.774 208.103 765.625 208.358 765.412 208.639C765.201 208.918 764.908 209.259 764.533 209.662L763.063 211.234V211.285H766.106V211.988H761.976ZM769.561 212.078C769.079 212.078 768.669 211.947 768.33 211.685C767.991 211.42 767.732 211.038 767.553 210.537C767.374 210.034 767.285 209.427 767.285 208.716C767.285 208.008 767.374 207.404 767.553 206.903C767.735 206.401 767.994 206.017 768.333 205.753C768.674 205.487 769.083 205.353 769.561 205.353C770.038 205.353 770.446 205.487 770.785 205.753C771.126 206.017 771.385 206.401 771.564 206.903C771.746 207.404 771.836 208.008 771.836 208.716C771.836 209.427 771.747 210.034 771.568 210.537C771.389 211.038 771.13 211.42 770.791 211.685C770.452 211.947 770.042 212.078 769.561 212.078ZM769.561 211.375C770.038 211.375 770.409 211.145 770.673 210.684C770.937 210.224 771.069 209.568 771.069 208.716C771.069 208.149 771.008 207.666 770.887 207.268C770.768 206.869 770.595 206.566 770.369 206.357C770.145 206.148 769.876 206.044 769.561 206.044C769.088 206.044 768.718 206.277 768.452 206.744C768.185 207.208 768.052 207.865 768.052 208.716C768.052 209.282 768.112 209.764 768.231 210.16C768.35 210.556 768.522 210.858 768.746 211.065C768.971 211.271 769.243 211.375 769.561 211.375ZM773.051 211.988V211.413L775.211 209.048C775.465 208.771 775.673 208.53 775.838 208.326C776.002 208.119 776.123 207.925 776.202 207.744C776.283 207.561 776.323 207.369 776.323 207.169C776.323 206.939 776.268 206.739 776.157 206.571C776.048 206.403 775.899 206.273 775.71 206.181C775.52 206.089 775.307 206.044 775.07 206.044C774.819 206.044 774.6 206.096 774.412 206.2C774.227 206.303 774.083 206.446 773.981 206.632C773.881 206.817 773.83 207.034 773.83 207.284H773.076C773.076 206.9 773.165 206.564 773.341 206.274C773.518 205.984 773.759 205.758 774.064 205.596C774.371 205.434 774.715 205.353 775.096 205.353C775.48 205.353 775.819 205.434 776.116 205.596C776.412 205.758 776.644 205.977 776.812 206.251C776.981 206.526 777.065 206.832 777.065 207.169C777.065 207.409 777.021 207.645 776.934 207.875C776.849 208.103 776.699 208.358 776.486 208.639C776.275 208.918 775.982 209.259 775.607 209.662L774.137 211.234V211.285H777.18V211.988H773.051ZM780.711 212.078C780.29 212.078 779.914 212.005 779.583 211.86C779.255 211.716 778.994 211.514 778.8 211.256C778.608 210.996 778.504 210.695 778.487 210.352H779.292C779.309 210.563 779.382 210.745 779.51 210.898C779.638 211.05 779.805 211.167 780.012 211.25C780.218 211.333 780.447 211.375 780.699 211.375C780.98 211.375 781.229 211.326 781.447 211.228C781.664 211.13 781.834 210.993 781.958 210.819C782.081 210.644 782.143 210.441 782.143 210.211C782.143 209.971 782.084 209.759 781.964 209.575C781.845 209.39 781.67 209.245 781.44 209.141C781.21 209.036 780.929 208.984 780.596 208.984H780.072V208.281H780.596C780.856 208.281 781.084 208.234 781.28 208.14C781.479 208.047 781.633 207.914 781.744 207.744C781.857 207.574 781.913 207.373 781.913 207.143C781.913 206.922 781.864 206.729 781.766 206.565C781.668 206.401 781.53 206.273 781.351 206.181C781.174 206.089 780.965 206.044 780.724 206.044C780.498 206.044 780.285 206.085 780.085 206.168C779.887 206.249 779.725 206.368 779.599 206.523C779.474 206.676 779.405 206.862 779.395 207.079H778.628C778.64 206.736 778.744 206.436 778.938 206.178C779.132 205.918 779.385 205.716 779.698 205.571C780.014 205.426 780.36 205.353 780.737 205.353C781.142 205.353 781.489 205.435 781.779 205.599C782.069 205.761 782.291 205.975 782.447 206.242C782.602 206.508 782.68 206.796 782.68 207.105C782.68 207.473 782.583 207.788 782.389 208.048C782.198 208.308 781.937 208.488 781.606 208.588V208.639C782.02 208.707 782.343 208.883 782.575 209.166C782.807 209.447 782.923 209.796 782.923 210.211C782.923 210.567 782.826 210.887 782.632 211.17C782.441 211.451 782.178 211.673 781.846 211.835C781.514 211.997 781.135 212.078 780.711 212.078Z"
                  fill="#4F4F4F"
                />
                <motion.path
                  d="M916.968 205.443H917.914L920.139 210.876H920.216L922.44 205.443H923.386V211.988H922.645V207.015H922.581L920.535 211.988H919.819L917.774 207.015H917.71V211.988H916.968V205.443ZM926.318 212.103C926.006 212.103 925.724 212.045 925.471 211.928C925.217 211.808 925.016 211.637 924.867 211.413C924.717 211.187 924.643 210.914 924.643 210.595C924.643 210.314 924.698 210.086 924.809 209.911C924.92 209.734 925.068 209.596 925.253 209.495C925.439 209.395 925.643 209.321 925.867 209.272C926.093 209.221 926.32 209.18 926.548 209.15C926.846 209.112 927.088 209.083 927.273 209.064C927.461 209.043 927.597 209.007 927.682 208.958C927.77 208.909 927.813 208.824 927.813 208.703V208.677C927.813 208.362 927.727 208.117 927.554 207.942C927.384 207.767 927.125 207.68 926.778 207.68C926.418 207.68 926.135 207.759 925.931 207.917C925.726 208.074 925.582 208.243 925.499 208.422L924.783 208.166C924.911 207.868 925.082 207.635 925.295 207.469C925.51 207.301 925.744 207.184 925.998 207.118C926.254 207.049 926.505 207.015 926.752 207.015C926.91 207.015 927.091 207.034 927.296 207.073C927.502 207.109 927.701 207.185 927.893 207.3C928.087 207.415 928.248 207.588 928.376 207.821C928.504 208.053 928.568 208.364 928.568 208.754V211.988H927.813V211.324H927.775C927.724 211.43 927.639 211.544 927.519 211.665C927.4 211.787 927.241 211.89 927.043 211.975C926.845 212.061 926.603 212.103 926.318 212.103ZM926.433 211.426C926.731 211.426 926.982 211.367 927.187 211.25C927.394 211.133 927.549 210.982 927.653 210.796C927.76 210.611 927.813 210.416 927.813 210.211V209.521C927.781 209.559 927.711 209.594 927.602 209.626C927.496 209.656 927.372 209.683 927.232 209.706C927.093 209.728 926.958 209.747 926.826 209.764C926.696 209.779 926.59 209.792 926.509 209.802C926.313 209.828 926.13 209.869 925.96 209.927C925.791 209.982 925.655 210.066 925.551 210.179C925.448 210.29 925.397 210.441 925.397 210.633C925.397 210.895 925.494 211.093 925.688 211.228C925.884 211.36 926.132 211.426 926.433 211.426ZM929.944 211.988V207.079H930.673V207.821H930.724C930.814 207.578 930.975 207.381 931.21 207.229C931.444 207.078 931.708 207.002 932.002 207.002C932.058 207.002 932.127 207.004 932.21 207.006C932.293 207.008 932.356 207.011 932.399 207.015V207.782C932.373 207.776 932.315 207.766 932.223 207.754C932.134 207.739 932.039 207.731 931.939 207.731C931.7 207.731 931.487 207.781 931.299 207.881C931.114 207.979 930.967 208.116 930.858 208.29C930.752 208.463 930.699 208.66 930.699 208.882V211.988H929.944ZM933.28 211.988V211.413L935.441 209.048C935.694 208.771 935.903 208.53 936.067 208.326C936.231 208.119 936.353 207.925 936.431 207.744C936.512 207.561 936.553 207.369 936.553 207.169C936.553 206.939 936.497 206.739 936.387 206.571C936.278 206.403 936.129 206.273 935.939 206.181C935.75 206.089 935.536 206.044 935.3 206.044C935.049 206.044 934.829 206.096 934.642 206.2C934.456 206.303 934.312 206.446 934.21 206.632C934.11 206.817 934.06 207.034 934.06 207.284H933.306C933.306 206.9 933.394 206.564 933.571 206.274C933.748 205.984 933.989 205.758 934.293 205.596C934.6 205.434 934.944 205.353 935.326 205.353C935.709 205.353 936.049 205.434 936.345 205.596C936.641 205.758 936.873 205.977 937.042 206.251C937.21 206.526 937.294 206.832 937.294 207.169C937.294 207.409 937.251 207.645 937.163 207.875C937.078 208.103 936.929 208.358 936.716 208.639C936.505 208.918 936.212 209.259 935.837 209.662L934.367 211.234V211.285H937.409V211.988H933.28ZM940.864 212.078C940.383 212.078 939.973 211.947 939.634 211.685C939.295 211.42 939.036 211.038 938.857 210.537C938.678 210.034 938.589 209.427 938.589 208.716C938.589 208.008 938.678 207.404 938.857 206.903C939.038 206.401 939.298 206.017 939.637 205.753C939.978 205.487 940.387 205.353 940.864 205.353C941.342 205.353 941.75 205.487 942.088 205.753C942.429 206.017 942.689 206.401 942.868 206.903C943.049 207.404 943.14 208.008 943.14 208.716C943.14 209.427 943.05 210.034 942.871 210.537C942.692 211.038 942.434 211.42 942.095 211.685C941.756 211.947 941.346 212.078 940.864 212.078ZM940.864 211.375C941.342 211.375 941.712 211.145 941.976 210.684C942.241 210.224 942.373 209.568 942.373 208.716C942.373 208.149 942.312 207.666 942.191 207.268C942.071 206.869 941.899 206.566 941.673 206.357C941.449 206.148 941.18 206.044 940.864 206.044C940.391 206.044 940.022 206.277 939.755 206.744C939.489 207.208 939.356 207.865 939.356 208.716C939.356 209.282 939.415 209.764 939.535 210.16C939.654 210.556 939.826 210.858 940.049 211.065C940.275 211.271 940.547 211.375 940.864 211.375ZM944.354 211.988V211.413L946.515 209.048C946.768 208.771 946.977 208.53 947.141 208.326C947.305 208.119 947.427 207.925 947.506 207.744C947.587 207.561 947.627 207.369 947.627 207.169C947.627 206.939 947.572 206.739 947.461 206.571C947.352 206.403 947.203 206.273 947.013 206.181C946.824 206.089 946.611 206.044 946.374 206.044C946.123 206.044 945.903 206.096 945.716 206.2C945.53 206.303 945.387 206.446 945.284 206.632C945.184 206.817 945.134 207.034 945.134 207.284H944.38C944.38 206.9 944.468 206.564 944.645 206.274C944.822 205.984 945.063 205.758 945.367 205.596C945.674 205.434 946.018 205.353 946.4 205.353C946.783 205.353 947.123 205.434 947.419 205.596C947.715 205.758 947.948 205.977 948.116 206.251C948.284 206.526 948.369 206.832 948.369 207.169C948.369 207.409 948.325 207.645 948.237 207.875C948.152 208.103 948.003 208.358 947.79 208.639C947.579 208.918 947.286 209.259 946.911 209.662L945.441 211.234V211.285H948.484V211.988H944.354ZM952.015 212.078C951.593 212.078 951.217 212.005 950.887 211.86C950.559 211.716 950.298 211.514 950.104 211.256C949.912 210.996 949.808 210.695 949.791 210.352H950.596C950.613 210.563 950.686 210.745 950.813 210.898C950.941 211.05 951.109 211.167 951.315 211.25C951.522 211.333 951.751 211.375 952.002 211.375C952.284 211.375 952.533 211.326 952.75 211.228C952.968 211.13 953.138 210.993 953.262 210.819C953.385 210.644 953.447 210.441 953.447 210.211C953.447 209.971 953.387 209.759 953.268 209.575C953.149 209.39 952.974 209.245 952.744 209.141C952.514 209.036 952.233 208.984 951.9 208.984H951.376V208.281H951.9C952.16 208.281 952.388 208.234 952.584 208.14C952.782 208.047 952.937 207.914 953.047 207.744C953.16 207.574 953.217 207.373 953.217 207.143C953.217 206.922 953.168 206.729 953.07 206.565C952.972 206.401 952.833 206.273 952.654 206.181C952.478 206.089 952.269 206.044 952.028 206.044C951.802 206.044 951.589 206.085 951.389 206.168C951.191 206.249 951.029 206.368 950.903 206.523C950.777 206.676 950.709 206.862 950.698 207.079H949.931C949.944 206.736 950.047 206.436 950.241 206.178C950.435 205.918 950.689 205.716 951.002 205.571C951.317 205.426 951.664 205.353 952.041 205.353C952.446 205.353 952.793 205.435 953.083 205.599C953.372 205.761 953.595 205.975 953.751 206.242C953.906 206.508 953.984 206.796 953.984 207.105C953.984 207.473 953.887 207.788 953.693 208.048C953.501 208.308 953.24 208.488 952.91 208.588V208.639C953.323 208.707 953.646 208.883 953.878 209.166C954.111 209.447 954.227 209.796 954.227 210.211C954.227 210.567 954.13 210.887 953.936 211.17C953.744 211.451 953.482 211.673 953.15 211.835C952.817 211.997 952.439 212.078 952.015 212.078Z"
                  fill="#4F4F4F"
                />

                <motion.path
                  key={1}
                  animate={line1Visible ? "visible" : "hidden"}
                  variants={draw}
                  onAnimationComplete={line1Complete}
                  d="M60.5723 96.4894L219.117 109.945L403.989 96.4894L588.86 77.1832L774.316 91.2241L937.259 67.8226"
                  stroke="#F16392"
                  strokeWidth="3"
                />
                <motion.path
                  key={2}
                  animate={line2Visible ? "visible" : "hidden"}
                  variants={draw}
                  onAnimationComplete={line2Complete}
                  d="M60.5771 136.5L219.388 149.955L405.157 131.234L589.753 145.632L774.935 126.326L936.539 145.348"
                  stroke="#2D9BF0"
                  strokeWidth="3"
                />
                <motion.path
                  key={3}
                  animate={line3Visible ? "visible" : "hidden"}
                  variants={draw}
                  onAnimationComplete={line3Compolete}
                  d="M60.5771 158.502L219.388 171.958L405.157 153.236L592.683 158.502L774.935 153.236L937.102 153.236"
                  stroke="#8FD14F"
                  strokeWidth="3"
                />
                <motion.path
                  key={4}
                  animate={line4Visible ? "visible" : "hidden"}
                  variants={draw}
                  onAnimationComplete={line4Compolete}
                  d="M58.2324 177.535H217.629L405.155 163.137L585.513 181.767L773.763 170.789L937.262 167.864"
                  stroke="#FAC710"
                  strokeWidth="3"
                />
                <motion.path
                  key={5}
                  animate={line5Visible ? "visible" : "hidden"}
                  variants={draw}
                  onAnimationComplete={line5Complete}
                  d="M57.6475 187.17L222.319 191.264L403.398 182.131L589.753 172.544L773.763 191.264H937.666"
                  stroke="#12CDD4"
                  strokeWidth="3"
                />

                <motion.path
                  d="M61.7846 247.237C61.171 247.237 60.6426 247.092 60.1994 246.802C59.7562 246.512 59.4153 246.113 59.1767 245.605C58.938 245.096 58.8187 244.515 58.8187 243.862C58.8187 243.197 58.9409 242.61 59.1852 242.102C59.4324 241.591 59.7761 241.191 60.2164 240.904C60.6596 240.615 61.1767 240.47 61.7676 240.47C62.2278 240.47 62.6426 240.555 63.0119 240.725C63.3812 240.896 63.6838 241.135 63.9196 241.441C64.1554 241.748 64.3017 242.106 64.3585 242.515H63.3528C63.2761 242.217 63.1056 241.953 62.8414 241.723C62.5801 241.49 62.2278 241.373 61.7846 241.373C61.3926 241.373 61.0488 241.475 60.7534 241.68C60.4608 241.882 60.2321 242.167 60.0673 242.537C59.9054 242.903 59.8244 243.333 59.8244 243.828C59.8244 244.333 59.9039 244.774 60.063 245.149C60.225 245.524 60.4522 245.815 60.7449 246.022C61.0403 246.23 61.3869 246.333 61.7846 246.333C62.046 246.333 62.2832 246.288 62.4963 246.197C62.7093 246.106 62.8897 245.975 63.0375 245.805C63.1852 245.635 63.2903 245.43 63.3528 245.191H64.3585C64.3017 245.578 64.161 245.926 63.9366 246.235C63.715 246.542 63.421 246.787 63.0545 246.968C62.6909 247.147 62.2676 247.237 61.7846 247.237ZM68.4877 247.237C67.8968 247.237 67.3784 247.096 66.9324 246.815C66.4892 246.534 66.1426 246.14 65.8926 245.635C65.6454 245.129 65.5218 244.538 65.5218 243.862C65.5218 243.18 65.6454 242.585 65.8926 242.076C66.1426 241.568 66.4892 241.173 66.9324 240.892C67.3784 240.61 67.8968 240.47 68.4877 240.47C69.0787 240.47 69.5957 240.61 70.0389 240.892C70.4849 241.173 70.8315 241.568 71.0787 242.076C71.3287 242.585 71.4537 243.18 71.4537 243.862C71.4537 244.538 71.3287 245.129 71.0787 245.635C70.8315 246.14 70.4849 246.534 70.0389 246.815C69.5957 247.096 69.0787 247.237 68.4877 247.237ZM68.4877 246.333C68.9366 246.333 69.3059 246.218 69.5957 245.988C69.8855 245.758 70.1 245.456 70.2392 245.081C70.3784 244.706 70.448 244.299 70.448 243.862C70.448 243.424 70.3784 243.017 70.2392 242.639C70.1 242.261 69.8855 241.956 69.5957 241.723C69.3059 241.49 68.9366 241.373 68.4877 241.373C68.0389 241.373 67.6696 241.49 67.3798 241.723C67.09 241.956 66.8755 242.261 66.7363 242.639C66.5971 243.017 66.5275 243.424 66.5275 243.862C66.5275 244.299 66.5971 244.706 66.7363 245.081C66.8755 245.456 67.09 245.758 67.3798 245.988C67.6696 246.218 68.0389 246.333 68.4877 246.333ZM72.9888 247.1V240.555H73.9604V241.578H74.0456C74.182 241.228 74.4022 240.957 74.7061 240.764C75.0101 240.568 75.3752 240.47 75.8013 240.47C76.2331 240.47 76.5925 240.568 76.8794 240.764C77.1692 240.957 77.3951 241.228 77.557 241.578H77.6252C77.7928 241.24 78.0442 240.971 78.3794 240.772C78.7147 240.571 79.1167 240.47 79.5854 240.47C80.1706 240.47 80.6493 240.653 81.0215 241.019C81.3936 241.383 81.5797 241.95 81.5797 242.72V247.1H80.574V242.72C80.574 242.237 80.4419 241.892 80.1777 241.684C79.9135 241.477 79.6025 241.373 79.2445 241.373C78.7843 241.373 78.4277 241.512 78.1749 241.791C77.9221 242.066 77.7956 242.416 77.7956 242.839V247.1H76.7729V242.618C76.7729 242.245 76.6522 241.946 76.4107 241.718C76.1692 241.488 75.8581 241.373 75.4775 241.373C75.2161 241.373 74.9718 241.443 74.7445 241.582C74.5201 241.721 74.3382 241.914 74.199 242.162C74.0627 242.406 73.9945 242.689 73.9945 243.01V247.1H72.9888ZM83.4185 249.555V240.555H84.3901V241.595H84.5094C84.5833 241.481 84.6855 241.336 84.8162 241.16C84.9498 240.981 85.1401 240.822 85.3873 240.683C85.6373 240.541 85.9753 240.47 86.4015 240.47C86.9526 240.47 87.4384 240.608 87.8588 240.883C88.2793 241.159 88.6074 241.549 88.8432 242.055C89.079 242.561 89.1969 243.157 89.1969 243.845C89.1969 244.538 89.079 245.139 88.8432 245.647C88.6074 246.153 88.2807 246.545 87.8631 246.823C87.4455 247.099 86.964 247.237 86.4185 247.237C85.998 247.237 85.6614 247.167 85.4086 247.028C85.1557 246.886 84.9611 246.725 84.8248 246.546C84.6884 246.365 84.5833 246.214 84.5094 246.095H84.4242V249.555H83.4185ZM84.4071 243.828C84.4071 244.322 84.4796 244.758 84.6245 245.136C84.7694 245.511 84.981 245.805 85.2594 246.018C85.5378 246.228 85.8787 246.333 86.2821 246.333C86.7026 246.333 87.0534 246.223 87.3347 246.001C87.6188 245.777 87.8319 245.475 87.9739 245.098C88.1188 244.717 88.1912 244.294 88.1912 243.828C88.1912 243.368 88.1202 242.953 87.9782 242.583C87.839 242.211 87.6273 241.917 87.3432 241.701C87.062 241.483 86.7083 241.373 86.2821 241.373C85.873 241.373 85.5293 241.477 85.2509 241.684C84.9725 241.889 84.7623 242.176 84.6202 242.545C84.4782 242.912 84.4071 243.339 84.4071 243.828ZM94.856 244.424V240.555H95.8617V247.1H94.856V245.993H94.7878C94.6344 246.325 94.3958 246.608 94.0719 246.841C93.748 247.071 93.339 247.186 92.8446 247.186C92.4355 247.186 92.0719 247.096 91.7537 246.917C91.4355 246.735 91.1855 246.463 91.0037 246.099C90.8219 245.733 90.731 245.271 90.731 244.714V240.555H91.7367V244.646C91.7367 245.123 91.8702 245.504 92.1373 245.788C92.4071 246.072 92.7509 246.214 93.1685 246.214C93.4185 246.214 93.6728 246.15 93.9313 246.022C94.1926 245.894 94.4114 245.698 94.5875 245.434C94.7665 245.17 94.856 244.833 94.856 244.424ZM100.55 240.555V241.407H97.1582V240.555H100.55ZM98.1468 238.987H99.1525V245.225C99.1525 245.51 99.1937 245.723 99.2761 245.865C99.3613 246.004 99.4693 246.098 99.6 246.146C99.7335 246.191 99.8741 246.214 100.022 246.214C100.133 246.214 100.224 246.208 100.295 246.197C100.366 246.183 100.422 246.171 100.465 246.163L100.67 247.066C100.601 247.092 100.506 247.118 100.384 247.143C100.262 247.171 100.107 247.186 99.9196 247.186C99.6355 247.186 99.3571 247.125 99.0843 247.002C98.8145 246.88 98.59 246.694 98.411 246.444C98.2349 246.194 98.1468 245.879 98.1468 245.498V238.987ZM104.737 247.237C104.106 247.237 103.562 247.098 103.105 246.819C102.65 246.538 102.3 246.146 102.052 245.643C101.808 245.137 101.686 244.549 101.686 243.879C101.686 243.208 101.808 242.618 102.052 242.106C102.3 241.592 102.643 241.191 103.084 240.904C103.527 240.615 104.044 240.47 104.635 240.47C104.976 240.47 105.312 240.527 105.645 240.64C105.977 240.754 106.28 240.939 106.552 241.194C106.825 241.447 107.042 241.782 107.204 242.2C107.366 242.618 107.447 243.132 107.447 243.743V244.169H102.402V243.299H106.425C106.425 242.93 106.351 242.6 106.203 242.311C106.058 242.021 105.851 241.792 105.581 241.625C105.314 241.457 104.998 241.373 104.635 241.373C104.234 241.373 103.888 241.473 103.595 241.671C103.305 241.868 103.082 242.123 102.926 242.439C102.77 242.754 102.692 243.092 102.692 243.453V244.032C102.692 244.527 102.777 244.946 102.947 245.289C103.121 245.63 103.361 245.89 103.667 246.069C103.974 246.245 104.331 246.333 104.737 246.333C105.001 246.333 105.24 246.296 105.453 246.223C105.669 246.146 105.855 246.032 106.011 245.882C106.167 245.728 106.288 245.538 106.373 245.311L107.345 245.583C107.243 245.913 107.071 246.203 106.829 246.453C106.588 246.7 106.29 246.893 105.934 247.032C105.579 247.169 105.18 247.237 104.737 247.237ZM108.977 247.1V240.555H109.949V241.544H110.017C110.136 241.22 110.352 240.957 110.665 240.755C110.977 240.554 111.329 240.453 111.721 240.453C111.795 240.453 111.888 240.454 111.998 240.457C112.109 240.46 112.193 240.464 112.25 240.47V241.493C112.216 241.484 112.138 241.471 112.015 241.454C111.896 241.434 111.77 241.424 111.636 241.424C111.318 241.424 111.034 241.491 110.784 241.625C110.537 241.755 110.341 241.937 110.196 242.17C110.054 242.4 109.983 242.663 109.983 242.958V247.1H108.977ZM116.817 247.1V240.555H117.789V241.578H117.874C118.01 241.228 118.23 240.957 118.534 240.764C118.838 240.568 119.203 240.47 119.629 240.47C120.061 240.47 120.421 240.568 120.708 240.764C120.997 240.957 121.223 241.228 121.385 241.578H121.453C121.621 241.24 121.872 240.971 122.208 240.772C122.543 240.571 122.945 240.47 123.414 240.47C123.999 240.47 124.477 240.653 124.85 241.019C125.222 241.383 125.408 241.95 125.408 242.72V247.1H124.402V242.72C124.402 242.237 124.27 241.892 124.006 241.684C123.742 241.477 123.431 241.373 123.073 241.373C122.612 241.373 122.256 241.512 122.003 241.791C121.75 242.066 121.624 242.416 121.624 242.839V247.1H120.601V242.618C120.601 242.245 120.48 241.946 120.239 241.718C119.997 241.488 119.686 241.373 119.306 241.373C119.044 241.373 118.8 241.443 118.573 241.582C118.348 241.721 118.166 241.914 118.027 242.162C117.891 242.406 117.823 242.689 117.823 243.01V247.1H116.817ZM129.906 247.237C129.315 247.237 128.796 247.096 128.35 246.815C127.907 246.534 127.561 246.14 127.311 245.635C127.063 245.129 126.94 244.538 126.94 243.862C126.94 243.18 127.063 242.585 127.311 242.076C127.561 241.568 127.907 241.173 128.35 240.892C128.796 240.61 129.315 240.47 129.906 240.47C130.497 240.47 131.014 240.61 131.457 240.892C131.903 241.173 132.249 241.568 132.497 242.076C132.747 242.585 132.872 243.18 132.872 243.862C132.872 244.538 132.747 245.129 132.497 245.635C132.249 246.14 131.903 246.534 131.457 246.815C131.014 247.096 130.497 247.237 129.906 247.237ZM129.906 246.333C130.355 246.333 130.724 246.218 131.014 245.988C131.303 245.758 131.518 245.456 131.657 245.081C131.796 244.706 131.866 244.299 131.866 243.862C131.866 243.424 131.796 243.017 131.657 242.639C131.518 242.261 131.303 241.956 131.014 241.723C130.724 241.49 130.355 241.373 129.906 241.373C129.457 241.373 129.088 241.49 128.798 241.723C128.508 241.956 128.294 242.261 128.154 242.639C128.015 243.017 127.945 243.424 127.945 243.862C127.945 244.299 128.015 244.706 128.154 245.081C128.294 245.456 128.508 245.758 128.798 245.988C129.088 246.218 129.457 246.333 129.906 246.333ZM135.412 243.163V247.1H134.407V240.555H135.378V241.578H135.464C135.617 241.245 135.85 240.978 136.162 240.777C136.475 240.572 136.878 240.47 137.373 240.47C137.816 240.47 138.204 240.561 138.536 240.743C138.868 240.921 139.127 241.194 139.312 241.561C139.496 241.924 139.589 242.385 139.589 242.941V247.1H138.583V243.01C138.583 242.495 138.449 242.095 138.182 241.808C137.915 241.518 137.549 241.373 137.083 241.373C136.762 241.373 136.475 241.443 136.222 241.582C135.972 241.721 135.775 241.924 135.63 242.191C135.485 242.458 135.412 242.782 135.412 243.163ZM141.426 247.1V240.555H142.432V247.1H141.426ZM141.938 239.464C141.742 239.464 141.573 239.397 141.431 239.264C141.291 239.13 141.222 238.97 141.222 238.782C141.222 238.595 141.291 238.434 141.431 238.301C141.573 238.167 141.742 238.1 141.938 238.1C142.134 238.1 142.301 238.167 142.441 238.301C142.583 238.434 142.654 238.595 142.654 238.782C142.654 238.97 142.583 239.13 142.441 239.264C142.301 239.397 142.134 239.464 141.938 239.464ZM147.121 240.555V241.407H143.729V240.555H147.121ZM144.717 238.987H145.723V245.225C145.723 245.51 145.764 245.723 145.846 245.865C145.932 246.004 146.04 246.098 146.17 246.146C146.304 246.191 146.444 246.214 146.592 246.214C146.703 246.214 146.794 246.208 146.865 246.197C146.936 246.183 146.993 246.171 147.035 246.163L147.24 247.066C147.172 247.092 147.077 247.118 146.954 247.143C146.832 247.171 146.677 247.186 146.49 247.186C146.206 247.186 145.927 247.125 145.655 247.002C145.385 246.88 145.16 246.694 144.981 246.444C144.805 246.194 144.717 245.879 144.717 245.498V238.987ZM151.222 247.237C150.631 247.237 150.113 247.096 149.667 246.815C149.224 246.534 148.877 246.14 148.627 245.635C148.38 245.129 148.256 244.538 148.256 243.862C148.256 243.18 148.38 242.585 148.627 242.076C148.877 241.568 149.224 241.173 149.667 240.892C150.113 240.61 150.631 240.47 151.222 240.47C151.813 240.47 152.33 240.61 152.773 240.892C153.219 241.173 153.566 241.568 153.813 242.076C154.063 242.585 154.188 243.18 154.188 243.862C154.188 244.538 154.063 245.129 153.813 245.635C153.566 246.14 153.219 246.534 152.773 246.815C152.33 247.096 151.813 247.237 151.222 247.237ZM151.222 246.333C151.671 246.333 152.04 246.218 152.33 245.988C152.62 245.758 152.834 245.456 152.974 245.081C153.113 244.706 153.182 244.299 153.182 243.862C153.182 243.424 153.113 243.017 152.974 242.639C152.834 242.261 152.62 241.956 152.33 241.723C152.04 241.49 151.671 241.373 151.222 241.373C150.773 241.373 150.404 241.49 150.114 241.723C149.824 241.956 149.61 242.261 149.471 242.639C149.331 243.017 149.262 243.424 149.262 243.862C149.262 244.299 149.331 244.706 149.471 245.081C149.61 245.456 149.824 245.758 150.114 245.988C150.404 246.218 150.773 246.333 151.222 246.333ZM155.723 247.1V240.555H156.695V241.544H156.763C156.882 241.22 157.098 240.957 157.411 240.755C157.723 240.554 158.075 240.453 158.468 240.453C158.541 240.453 158.634 240.454 158.744 240.457C158.855 240.46 158.939 240.464 158.996 240.47V241.493C158.962 241.484 158.884 241.471 158.762 241.454C158.642 241.434 158.516 241.424 158.382 241.424C158.064 241.424 157.78 241.491 157.53 241.625C157.283 241.755 157.087 241.937 156.942 242.17C156.8 242.4 156.729 242.663 156.729 242.958V247.1H155.723Z"
                  fill="black"
                />
                <motion.ellipse cx="39.452" cy="243.148" rx="4.4901" ry="4.26034" fill="#F16392" />
                <motion.path
                  d="M203.581 247.202C202.968 247.202 202.439 247.057 201.996 246.768C201.553 246.478 201.212 246.079 200.974 245.57C200.735 245.062 200.616 244.481 200.616 243.827C200.616 243.162 200.738 242.576 200.982 242.067C201.229 241.556 201.573 241.157 202.013 240.87C202.456 240.58 202.974 240.435 203.564 240.435C204.025 240.435 204.439 240.52 204.809 240.691C205.178 240.861 205.481 241.1 205.716 241.407C205.952 241.714 206.099 242.072 206.155 242.481H205.15C205.073 242.182 204.903 241.918 204.638 241.688C204.377 241.455 204.025 241.339 203.581 241.339C203.189 241.339 202.846 241.441 202.55 241.645C202.258 241.847 202.029 242.133 201.864 242.502C201.702 242.868 201.621 243.299 201.621 243.793C201.621 244.299 201.701 244.739 201.86 245.114C202.022 245.489 202.249 245.78 202.542 245.988C202.837 246.195 203.184 246.299 203.581 246.299C203.843 246.299 204.08 246.253 204.293 246.162C204.506 246.072 204.687 245.941 204.834 245.77C204.982 245.6 205.087 245.395 205.15 245.157H206.155C206.099 245.543 205.958 245.891 205.733 246.201C205.512 246.508 205.218 246.752 204.851 246.934C204.488 247.113 204.064 247.202 203.581 247.202ZM210.285 247.202C209.694 247.202 209.175 247.062 208.729 246.78C208.286 246.499 207.939 246.106 207.689 245.6C207.442 245.094 207.319 244.503 207.319 243.827C207.319 243.145 207.442 242.55 207.689 242.042C207.939 241.533 208.286 241.138 208.729 240.857C209.175 240.576 209.694 240.435 210.285 240.435C210.876 240.435 211.393 240.576 211.836 240.857C212.282 241.138 212.628 241.533 212.876 242.042C213.126 242.55 213.251 243.145 213.251 243.827C213.251 244.503 213.126 245.094 212.876 245.6C212.628 246.106 212.282 246.499 211.836 246.78C211.393 247.062 210.876 247.202 210.285 247.202ZM210.285 246.299C210.733 246.299 211.103 246.184 211.393 245.954C211.682 245.724 211.897 245.421 212.036 245.046C212.175 244.671 212.245 244.265 212.245 243.827C212.245 243.39 212.175 242.982 212.036 242.604C211.897 242.226 211.682 241.921 211.393 241.688C211.103 241.455 210.733 241.339 210.285 241.339C209.836 241.339 209.466 241.455 209.177 241.688C208.887 241.921 208.672 242.226 208.533 242.604C208.394 242.982 208.324 243.39 208.324 243.827C208.324 244.265 208.394 244.671 208.533 245.046C208.672 245.421 208.887 245.724 209.177 245.954C209.466 246.184 209.836 246.299 210.285 246.299ZM214.786 247.066V240.52H215.757V241.543H215.843C215.979 241.194 216.199 240.922 216.503 240.729C216.807 240.533 217.172 240.435 217.598 240.435C218.03 240.435 218.389 240.533 218.676 240.729C218.966 240.922 219.192 241.194 219.354 241.543H219.422C219.59 241.205 219.841 240.937 220.176 240.738C220.512 240.536 220.914 240.435 221.382 240.435C221.968 240.435 222.446 240.618 222.818 240.985C223.191 241.349 223.377 241.915 223.377 242.685V247.066H222.371V242.685C222.371 242.202 222.239 241.857 221.975 241.65C221.71 241.442 221.399 241.339 221.041 241.339C220.581 241.339 220.225 241.478 219.972 241.756C219.719 242.032 219.593 242.381 219.593 242.804V247.066H218.57V242.583C218.57 242.211 218.449 241.911 218.208 241.684C217.966 241.454 217.655 241.339 217.274 241.339C217.013 241.339 216.769 241.408 216.541 241.547C216.317 241.687 216.135 241.88 215.996 242.127C215.86 242.371 215.791 242.654 215.791 242.975V247.066H214.786ZM225.215 249.52V240.52H226.187V241.56H226.306C226.38 241.447 226.482 241.302 226.613 241.126C226.747 240.947 226.937 240.787 227.184 240.648C227.434 240.506 227.772 240.435 228.198 240.435C228.749 240.435 229.235 240.573 229.656 240.849C230.076 241.124 230.404 241.515 230.64 242.02C230.876 242.526 230.994 243.123 230.994 243.81C230.994 244.503 230.876 245.104 230.64 245.613C230.404 246.118 230.078 246.51 229.66 246.789C229.242 247.064 228.761 247.202 228.215 247.202C227.795 247.202 227.458 247.133 227.205 246.993C226.953 246.851 226.758 246.691 226.622 246.512C226.485 246.33 226.38 246.179 226.306 246.06H226.221V249.52H225.215ZM226.204 243.793C226.204 244.287 226.276 244.724 226.421 245.101C226.566 245.476 226.778 245.77 227.056 245.983C227.335 246.194 227.676 246.299 228.079 246.299C228.499 246.299 228.85 246.188 229.132 245.966C229.416 245.742 229.629 245.441 229.771 245.063C229.916 244.682 229.988 244.259 229.988 243.793C229.988 243.333 229.917 242.918 229.775 242.549C229.636 242.177 229.424 241.883 229.14 241.667C228.859 241.448 228.505 241.339 228.079 241.339C227.67 241.339 227.326 241.442 227.048 241.65C226.769 241.854 226.559 242.141 226.417 242.51C226.275 242.877 226.204 243.304 226.204 243.793ZM236.653 244.39V240.52H237.659V247.066H236.653V245.958H236.585C236.431 246.29 236.193 246.573 235.869 246.806C235.545 247.036 235.136 247.151 234.642 247.151C234.232 247.151 233.869 247.062 233.551 246.883C233.232 246.701 232.982 246.428 232.801 246.064C232.619 245.698 232.528 245.236 232.528 244.679V240.52H233.534V244.611C233.534 245.089 233.667 245.469 233.934 245.753C234.204 246.037 234.548 246.179 234.965 246.179C235.215 246.179 235.47 246.116 235.728 245.988C235.99 245.86 236.208 245.664 236.384 245.4C236.563 245.135 236.653 244.799 236.653 244.39ZM242.347 240.52V241.373H238.955V240.52H242.347ZM239.944 238.952H240.949V245.191C240.949 245.475 240.991 245.688 241.073 245.83C241.158 245.969 241.266 246.063 241.397 246.111C241.53 246.157 241.671 246.179 241.819 246.179C241.93 246.179 242.02 246.174 242.091 246.162C242.162 246.148 242.219 246.137 242.262 246.128L242.466 247.032C242.398 247.057 242.303 247.083 242.181 247.108C242.059 247.137 241.904 247.151 241.716 247.151C241.432 247.151 241.154 247.09 240.881 246.968C240.611 246.846 240.387 246.66 240.208 246.41C240.032 246.16 239.944 245.844 239.944 245.464V238.952ZM246.534 247.202C245.903 247.202 245.359 247.063 244.902 246.785C244.447 246.503 244.096 246.111 243.849 245.608C243.605 245.103 243.483 244.515 243.483 243.844C243.483 243.174 243.605 242.583 243.849 242.072C244.096 241.557 244.44 241.157 244.881 240.87C245.324 240.58 245.841 240.435 246.432 240.435C246.773 240.435 247.109 240.492 247.442 240.606C247.774 240.719 248.077 240.904 248.349 241.16C248.622 241.412 248.839 241.748 249.001 242.165C249.163 242.583 249.244 243.097 249.244 243.708V244.134H244.199V243.265H248.221C248.221 242.895 248.148 242.566 248 242.276C247.855 241.986 247.648 241.758 247.378 241.59C247.111 241.422 246.795 241.339 246.432 241.339C246.031 241.339 245.684 241.438 245.392 241.637C245.102 241.833 244.879 242.089 244.723 242.404C244.567 242.719 244.488 243.057 244.488 243.418V243.998C244.488 244.492 244.574 244.911 244.744 245.255C244.917 245.596 245.157 245.856 245.464 246.035C245.771 246.211 246.128 246.299 246.534 246.299C246.798 246.299 247.037 246.262 247.25 246.188C247.466 246.111 247.652 245.998 247.808 245.847C247.964 245.694 248.085 245.503 248.17 245.276L249.142 245.549C249.04 245.878 248.868 246.168 248.626 246.418C248.385 246.665 248.086 246.858 247.731 246.998C247.376 247.134 246.977 247.202 246.534 247.202ZM250.774 247.066V240.52H251.746V241.509H251.814C251.933 241.185 252.149 240.922 252.461 240.721C252.774 240.519 253.126 240.418 253.518 240.418C253.592 240.418 253.684 240.42 253.795 240.422C253.906 240.425 253.99 240.429 254.047 240.435V241.458C254.013 241.449 253.934 241.437 253.812 241.42C253.693 241.4 253.567 241.39 253.433 241.39C253.115 241.39 252.831 241.456 252.581 241.59C252.334 241.721 252.138 241.903 251.993 242.135C251.851 242.366 251.78 242.628 251.78 242.924V247.066H250.774ZM263.25 241.986L262.347 242.242C262.29 242.091 262.206 241.945 262.095 241.803C261.987 241.658 261.84 241.539 261.652 241.445C261.465 241.351 261.225 241.304 260.932 241.304C260.531 241.304 260.198 241.397 259.931 241.581C259.666 241.763 259.534 241.995 259.534 242.276C259.534 242.526 259.625 242.724 259.807 242.868C259.989 243.013 260.273 243.134 260.659 243.231L261.631 243.469C262.216 243.611 262.652 243.829 262.939 244.121C263.226 244.411 263.369 244.785 263.369 245.242C263.369 245.617 263.262 245.952 263.046 246.248C262.833 246.543 262.534 246.776 262.151 246.947C261.767 247.117 261.321 247.202 260.813 247.202C260.145 247.202 259.593 247.057 259.155 246.768C258.718 246.478 258.441 246.054 258.324 245.498L259.279 245.259C259.369 245.611 259.541 245.876 259.794 246.052C260.05 246.228 260.384 246.316 260.796 246.316C261.264 246.316 261.637 246.216 261.912 246.018C262.191 245.816 262.33 245.574 262.33 245.293C262.33 245.066 262.25 244.876 262.091 244.722C261.932 244.566 261.688 244.449 261.358 244.373L260.267 244.117C259.668 243.975 259.227 243.755 258.946 243.456C258.668 243.155 258.529 242.779 258.529 242.327C258.529 241.958 258.632 241.631 258.84 241.347C259.05 241.063 259.335 240.84 259.696 240.678C260.06 240.516 260.472 240.435 260.932 240.435C261.58 240.435 262.088 240.577 262.458 240.861C262.83 241.145 263.094 241.52 263.25 241.986ZM267.542 247.202C266.929 247.202 266.4 247.057 265.957 246.768C265.514 246.478 265.173 246.079 264.934 245.57C264.696 245.062 264.577 244.481 264.577 243.827C264.577 243.162 264.699 242.576 264.943 242.067C265.19 241.556 265.534 241.157 265.974 240.87C266.417 240.58 266.934 240.435 267.525 240.435C267.986 240.435 268.4 240.52 268.77 240.691C269.139 240.861 269.442 241.1 269.677 241.407C269.913 241.714 270.059 242.072 270.116 242.481H269.111C269.034 242.182 268.863 241.918 268.599 241.688C268.338 241.455 267.986 241.339 267.542 241.339C267.15 241.339 266.807 241.441 266.511 241.645C266.219 241.847 265.99 242.133 265.825 242.502C265.663 242.868 265.582 243.299 265.582 243.793C265.582 244.299 265.662 244.739 265.821 245.114C265.983 245.489 266.21 245.78 266.503 245.988C266.798 246.195 267.145 246.299 267.542 246.299C267.804 246.299 268.041 246.253 268.254 246.162C268.467 246.072 268.648 245.941 268.795 245.77C268.943 245.6 269.048 245.395 269.111 245.157H270.116C270.059 245.543 269.919 245.891 269.694 246.201C269.473 246.508 269.179 246.752 268.812 246.934C268.449 247.113 268.025 247.202 267.542 247.202ZM271.586 247.066V240.52H272.558V241.509H272.626C272.746 241.185 272.961 240.922 273.274 240.721C273.586 240.519 273.939 240.418 274.331 240.418C274.405 240.418 274.497 240.42 274.608 240.422C274.719 240.425 274.802 240.429 274.859 240.435V241.458C274.825 241.449 274.747 241.437 274.625 241.42C274.506 241.4 274.379 241.39 274.246 241.39C273.927 241.39 273.643 241.456 273.393 241.59C273.146 241.721 272.95 241.903 272.805 242.135C272.663 242.366 272.592 242.628 272.592 242.924V247.066H271.586ZM278.596 247.202C277.966 247.202 277.422 247.063 276.964 246.785C276.51 246.503 276.159 246.111 275.912 245.608C275.667 245.103 275.545 244.515 275.545 243.844C275.545 243.174 275.667 242.583 275.912 242.072C276.159 241.557 276.503 241.157 276.943 240.87C277.386 240.58 277.903 240.435 278.494 240.435C278.835 240.435 279.172 240.492 279.504 240.606C279.836 240.719 280.139 240.904 280.412 241.16C280.684 241.412 280.902 241.748 281.064 242.165C281.226 242.583 281.307 243.097 281.307 243.708V244.134H276.261V243.265H280.284C280.284 242.895 280.21 242.566 280.062 242.276C279.917 241.986 279.71 241.758 279.44 241.59C279.173 241.422 278.858 241.339 278.494 241.339C278.094 241.339 277.747 241.438 277.454 241.637C277.165 241.833 276.942 242.089 276.785 242.404C276.629 242.719 276.551 243.057 276.551 243.418V243.998C276.551 244.492 276.636 244.911 276.807 245.255C276.98 245.596 277.22 245.856 277.527 246.035C277.834 246.211 278.19 246.299 278.596 246.299C278.861 246.299 279.099 246.262 279.312 246.188C279.528 246.111 279.714 245.998 279.871 245.847C280.027 245.694 280.148 245.503 280.233 245.276L281.204 245.549C281.102 245.878 280.93 246.168 280.689 246.418C280.447 246.665 280.149 246.858 279.794 246.998C279.439 247.134 279.04 247.202 278.596 247.202ZM285.581 247.202C284.95 247.202 284.406 247.063 283.949 246.785C283.494 246.503 283.143 246.111 282.896 245.608C282.652 245.103 282.53 244.515 282.53 243.844C282.53 243.174 282.652 242.583 282.896 242.072C283.143 241.557 283.487 241.157 283.927 240.87C284.371 240.58 284.888 240.435 285.479 240.435C285.819 240.435 286.156 240.492 286.488 240.606C286.821 240.719 287.123 240.904 287.396 241.16C287.669 241.412 287.886 241.748 288.048 242.165C288.21 242.583 288.291 243.097 288.291 243.708V244.134H283.246V243.265H287.268C287.268 242.895 287.194 242.566 287.047 242.276C286.902 241.986 286.694 241.758 286.425 241.59C286.157 241.422 285.842 241.339 285.479 241.339C285.078 241.339 284.731 241.438 284.439 241.637C284.149 241.833 283.926 242.089 283.77 242.404C283.613 242.719 283.535 243.057 283.535 243.418V243.998C283.535 244.492 283.621 244.911 283.791 245.255C283.964 245.596 284.204 245.856 284.511 246.035C284.818 246.211 285.175 246.299 285.581 246.299C285.845 246.299 286.084 246.262 286.297 246.188C286.513 246.111 286.699 245.998 286.855 245.847C287.011 245.694 287.132 245.503 287.217 245.276L288.189 245.549C288.086 245.878 287.915 246.168 287.673 246.418C287.432 246.665 287.133 246.858 286.778 246.998C286.423 247.134 286.024 247.202 285.581 247.202ZM290.827 243.128V247.066H289.821V240.52H290.792V241.543H290.878C291.031 241.211 291.264 240.944 291.577 240.742C291.889 240.537 292.292 240.435 292.787 240.435C293.23 240.435 293.618 240.526 293.95 240.708C294.282 240.887 294.541 241.16 294.726 241.526C294.91 241.89 295.003 242.35 295.003 242.907V247.066H293.997V242.975C293.997 242.461 293.863 242.06 293.596 241.773C293.329 241.483 292.963 241.339 292.497 241.339C292.176 241.339 291.889 241.408 291.636 241.547C291.386 241.687 291.189 241.89 291.044 242.157C290.899 242.424 290.827 242.748 290.827 243.128Z"
                  fill="black"
                />
                <motion.ellipse cx="185.415" cy="243.114" rx="4.4901" ry="4.26034" fill="#2D9BF0" />
                <motion.path
                  d="M347.626 247.213C347.013 247.213 346.484 247.069 346.041 246.779C345.598 246.489 345.257 246.09 345.018 245.581C344.78 245.073 344.661 244.492 344.661 243.838C344.661 243.174 344.783 242.587 345.027 242.078C345.274 241.567 345.618 241.168 346.058 240.881C346.501 240.591 347.018 240.446 347.609 240.446C348.07 240.446 348.484 240.532 348.854 240.702C349.223 240.872 349.526 241.111 349.761 241.418C349.997 241.725 350.143 242.083 350.2 242.492H349.195C349.118 242.194 348.947 241.929 348.683 241.699C348.422 241.466 348.07 241.35 347.626 241.35C347.234 241.35 346.891 241.452 346.595 241.657C346.303 241.858 346.074 242.144 345.909 242.513C345.747 242.88 345.666 243.31 345.666 243.804C345.666 244.31 345.746 244.75 345.905 245.125C346.067 245.5 346.294 245.792 346.587 245.999C346.882 246.206 347.229 246.31 347.626 246.31C347.888 246.31 348.125 246.265 348.338 246.174C348.551 246.083 348.732 245.952 348.879 245.782C349.027 245.611 349.132 245.407 349.195 245.168H350.2C350.143 245.554 350.003 245.902 349.778 246.212C349.557 246.519 349.263 246.763 348.896 246.945C348.533 247.124 348.109 247.213 347.626 247.213ZM354.33 247.213C353.739 247.213 353.22 247.073 352.774 246.792C352.331 246.51 351.984 246.117 351.734 245.611C351.487 245.105 351.364 244.515 351.364 243.838C351.364 243.157 351.487 242.561 351.734 242.053C351.984 241.544 352.331 241.149 352.774 240.868C353.22 240.587 353.739 240.446 354.33 240.446C354.92 240.446 355.438 240.587 355.881 240.868C356.327 241.149 356.673 241.544 356.92 242.053C357.17 242.561 357.295 243.157 357.295 243.838C357.295 244.515 357.17 245.105 356.92 245.611C356.673 246.117 356.327 246.51 355.881 246.792C355.438 247.073 354.92 247.213 354.33 247.213ZM354.33 246.31C354.778 246.31 355.148 246.195 355.438 245.965C355.727 245.735 355.942 245.432 356.081 245.057C356.22 244.682 356.29 244.276 356.29 243.838C356.29 243.401 356.22 242.993 356.081 242.615C355.942 242.238 355.727 241.932 355.438 241.699C355.148 241.466 354.778 241.35 354.33 241.35C353.881 241.35 353.511 241.466 353.222 241.699C352.932 241.932 352.717 242.238 352.578 242.615C352.439 242.993 352.369 243.401 352.369 243.838C352.369 244.276 352.439 244.682 352.578 245.057C352.717 245.432 352.932 245.735 353.222 245.965C353.511 246.195 353.881 246.31 354.33 246.31ZM358.831 247.077V240.532H359.802V241.554H359.887C360.024 241.205 360.244 240.934 360.548 240.74C360.852 240.544 361.217 240.446 361.643 240.446C362.075 240.446 362.434 240.544 362.721 240.74C363.011 240.934 363.237 241.205 363.399 241.554H363.467C363.635 241.216 363.886 240.948 364.221 240.749C364.556 240.547 364.958 240.446 365.427 240.446C366.012 240.446 366.491 240.63 366.863 240.996C367.235 241.36 367.422 241.926 367.422 242.696V247.077H366.416V242.696C366.416 242.213 366.284 241.868 366.02 241.661C365.755 241.453 365.444 241.35 365.086 241.35C364.626 241.35 364.27 241.489 364.017 241.767C363.764 242.043 363.637 242.392 363.637 242.816V247.077H362.615V242.594C362.615 242.222 362.494 241.922 362.252 241.695C362.011 241.465 361.7 241.35 361.319 241.35C361.058 241.35 360.814 241.419 360.586 241.559C360.362 241.698 360.18 241.891 360.041 242.138C359.904 242.382 359.836 242.665 359.836 242.986V247.077H358.831ZM369.26 249.532V240.532H370.232V241.571H370.351C370.425 241.458 370.527 241.313 370.658 241.137C370.792 240.958 370.982 240.799 371.229 240.659C371.479 240.517 371.817 240.446 372.243 240.446C372.794 240.446 373.28 240.584 373.701 240.86C374.121 241.135 374.449 241.526 374.685 242.032C374.921 242.537 375.039 243.134 375.039 243.821C375.039 244.515 374.921 245.115 374.685 245.624C374.449 246.13 374.123 246.522 373.705 246.8C373.287 247.076 372.806 247.213 372.26 247.213C371.84 247.213 371.503 247.144 371.25 247.005C370.998 246.863 370.803 246.702 370.667 246.523C370.53 246.341 370.425 246.191 370.351 246.071H370.266V249.532H369.26ZM370.249 243.804C370.249 244.299 370.321 244.735 370.466 245.113C370.611 245.488 370.823 245.782 371.101 245.995C371.38 246.205 371.721 246.31 372.124 246.31C372.544 246.31 372.895 246.199 373.176 245.978C373.461 245.753 373.674 245.452 373.816 245.074C373.961 244.694 374.033 244.27 374.033 243.804C374.033 243.344 373.962 242.929 373.82 242.56C373.681 242.188 373.469 241.894 373.185 241.678C372.904 241.459 372.55 241.35 372.124 241.35C371.715 241.35 371.371 241.453 371.093 241.661C370.814 241.865 370.604 242.152 370.462 242.522C370.32 242.888 370.249 243.316 370.249 243.804ZM380.698 244.401V240.532H381.703V247.077H380.698V245.969H380.63C380.476 246.301 380.238 246.584 379.914 246.817C379.59 247.047 379.181 247.162 378.686 247.162C378.277 247.162 377.914 247.073 377.596 246.894C377.277 246.712 377.027 246.439 376.846 246.076C376.664 245.709 376.573 245.247 376.573 244.691V240.532H377.578V244.622C377.578 245.1 377.712 245.48 377.979 245.765C378.249 246.049 378.593 246.191 379.01 246.191C379.26 246.191 379.515 246.127 379.773 245.999C380.034 245.871 380.253 245.675 380.429 245.411C380.608 245.147 380.698 244.81 380.698 244.401ZM386.392 240.532V241.384H383V240.532H386.392ZM383.989 238.963H384.994V245.202C384.994 245.486 385.036 245.699 385.118 245.841C385.203 245.98 385.311 246.074 385.442 246.122C385.575 246.168 385.716 246.191 385.864 246.191C385.974 246.191 386.065 246.185 386.136 246.174C386.207 246.159 386.264 246.148 386.307 246.14L386.511 247.043C386.443 247.069 386.348 247.094 386.226 247.12C386.104 247.148 385.949 247.162 385.761 247.162C385.477 247.162 385.199 247.101 384.926 246.979C384.656 246.857 384.432 246.671 384.253 246.421C384.077 246.171 383.989 245.855 383.989 245.475V238.963ZM390.579 247.213C389.948 247.213 389.404 247.074 388.947 246.796C388.492 246.515 388.141 246.122 387.894 245.62C387.65 245.114 387.528 244.526 387.528 243.855C387.528 243.185 387.65 242.594 387.894 242.083C388.141 241.569 388.485 241.168 388.925 240.881C389.369 240.591 389.886 240.446 390.477 240.446C390.817 240.446 391.154 240.503 391.487 240.617C391.819 240.73 392.121 240.915 392.394 241.171C392.667 241.424 392.884 241.759 393.046 242.176C393.208 242.594 393.289 243.108 393.289 243.719V244.145H388.244V243.276H392.266C392.266 242.907 392.192 242.577 392.045 242.287C391.9 241.997 391.692 241.769 391.423 241.601C391.156 241.434 390.84 241.35 390.477 241.35C390.076 241.35 389.729 241.449 389.437 241.648C389.147 241.844 388.924 242.1 388.768 242.415C388.612 242.73 388.533 243.069 388.533 243.429V244.009C388.533 244.503 388.619 244.922 388.789 245.266C388.962 245.607 389.202 245.867 389.509 246.046C389.816 246.222 390.173 246.31 390.579 246.31C390.843 246.31 391.082 246.273 391.295 246.199C391.511 246.122 391.697 246.009 391.853 245.858C392.009 245.705 392.13 245.515 392.215 245.287L393.187 245.56C393.085 245.89 392.913 246.179 392.671 246.429C392.43 246.676 392.131 246.87 391.776 247.009C391.421 247.145 391.022 247.213 390.579 247.213ZM394.819 247.077V240.532H395.79V241.52H395.859C395.978 241.196 396.194 240.934 396.506 240.732C396.819 240.53 397.171 240.429 397.563 240.429C397.637 240.429 397.729 240.431 397.84 240.434C397.951 240.436 398.035 240.441 398.092 240.446V241.469C398.058 241.461 397.979 241.448 397.857 241.431C397.738 241.411 397.612 241.401 397.478 241.401C397.16 241.401 396.876 241.468 396.626 241.601C396.379 241.732 396.183 241.914 396.038 242.147C395.896 242.377 395.825 242.64 395.825 242.935V247.077H394.819ZM405.13 247.213C404.585 247.213 404.103 247.076 403.686 246.8C403.268 246.522 402.941 246.13 402.706 245.624C402.47 245.115 402.352 244.515 402.352 243.821C402.352 243.134 402.47 242.537 402.706 242.032C402.941 241.526 403.27 241.135 403.69 240.86C404.11 240.584 404.596 240.446 405.147 240.446C405.574 240.446 405.91 240.517 406.157 240.659C406.407 240.799 406.598 240.958 406.728 241.137C406.862 241.313 406.966 241.458 407.039 241.571H407.125V238.35H408.13V247.077H407.159V246.071H407.039C406.966 246.191 406.86 246.341 406.724 246.523C406.588 246.702 406.393 246.863 406.14 247.005C405.887 247.144 405.551 247.213 405.13 247.213ZM405.267 246.31C405.67 246.31 406.011 246.205 406.289 245.995C406.568 245.782 406.779 245.488 406.924 245.113C407.069 244.735 407.142 244.299 407.142 243.804C407.142 243.316 407.071 242.888 406.929 242.522C406.787 242.152 406.576 241.865 406.298 241.661C406.02 241.453 405.676 241.35 405.267 241.35C404.841 241.35 404.485 241.459 404.201 241.678C403.92 241.894 403.708 242.188 403.566 242.56C403.427 242.929 403.358 243.344 403.358 243.804C403.358 244.27 403.429 244.694 403.571 245.074C403.716 245.452 403.929 245.753 404.21 245.978C404.494 246.199 404.846 246.31 405.267 246.31ZM410.112 247.077V240.532H411.118V247.077H410.112ZM410.623 239.441C410.427 239.441 410.258 239.374 410.116 239.24C409.977 239.107 409.907 238.946 409.907 238.759C409.907 238.571 409.977 238.411 410.116 238.277C410.258 238.144 410.427 238.077 410.623 238.077C410.819 238.077 410.987 238.144 411.126 238.277C411.268 238.411 411.339 238.571 411.339 238.759C411.339 238.946 411.268 239.107 411.126 239.24C410.987 239.374 410.819 239.441 410.623 239.441ZM417.596 241.997L416.692 242.253C416.636 242.103 416.552 241.956 416.441 241.814C416.333 241.669 416.185 241.55 415.998 241.456C415.81 241.363 415.57 241.316 415.278 241.316C414.877 241.316 414.543 241.408 414.276 241.593C414.012 241.774 413.88 242.006 413.88 242.287C413.88 242.537 413.971 242.735 414.153 242.88C414.335 243.024 414.619 243.145 415.005 243.242L415.977 243.48C416.562 243.622 416.998 243.84 417.285 244.132C417.572 244.422 417.715 244.796 417.715 245.253C417.715 245.628 417.607 245.963 417.391 246.259C417.178 246.554 416.88 246.787 416.496 246.958C416.113 247.128 415.667 247.213 415.158 247.213C414.491 247.213 413.938 247.069 413.501 246.779C413.063 246.489 412.786 246.066 412.67 245.509L413.624 245.27C413.715 245.622 413.887 245.887 414.14 246.063C414.396 246.239 414.729 246.327 415.141 246.327C415.61 246.327 415.982 246.228 416.258 246.029C416.536 245.827 416.675 245.586 416.675 245.304C416.675 245.077 416.596 244.887 416.437 244.733C416.278 244.577 416.033 244.461 415.704 244.384L414.613 244.128C414.013 243.986 413.573 243.766 413.292 243.468C413.013 243.167 412.874 242.79 412.874 242.338C412.874 241.969 412.978 241.642 413.185 241.358C413.396 241.074 413.681 240.851 414.042 240.689C414.406 240.527 414.817 240.446 415.278 240.446C415.925 240.446 416.434 240.588 416.803 240.872C417.175 241.157 417.44 241.532 417.596 241.997ZM419.229 249.532V240.532H420.201V241.571H420.32C420.394 241.458 420.496 241.313 420.627 241.137C420.76 240.958 420.951 240.799 421.198 240.659C421.448 240.517 421.786 240.446 422.212 240.446C422.763 240.446 423.249 240.584 423.669 240.86C424.09 241.135 424.418 241.526 424.654 242.032C424.89 242.537 425.007 243.134 425.007 243.821C425.007 244.515 424.89 245.115 424.654 245.624C424.418 246.13 424.091 246.522 423.674 246.8C423.256 247.076 422.775 247.213 422.229 247.213C421.809 247.213 421.472 247.144 421.219 247.005C420.966 246.863 420.772 246.702 420.635 246.523C420.499 246.341 420.394 246.191 420.32 246.071H420.235V249.532H419.229ZM420.218 243.804C420.218 244.299 420.29 244.735 420.435 245.113C420.58 245.488 420.792 245.782 421.07 245.995C421.348 246.205 421.689 246.31 422.093 246.31C422.513 246.31 422.864 246.199 423.145 245.978C423.429 245.753 423.642 245.452 423.784 245.074C423.929 244.694 424.002 244.27 424.002 243.804C424.002 243.344 423.931 242.929 423.789 242.56C423.65 242.188 423.438 241.894 423.154 241.678C422.873 241.459 422.519 241.35 422.093 241.35C421.684 241.35 421.34 241.453 421.061 241.661C420.783 241.865 420.573 242.152 420.431 242.522C420.289 242.888 420.218 243.316 420.218 243.804ZM427.547 238.35V247.077H426.542V238.35H427.547ZM431.315 247.23C430.901 247.23 430.524 247.152 430.186 246.996C429.848 246.837 429.58 246.608 429.381 246.31C429.182 246.009 429.082 245.645 429.082 245.219C429.082 244.844 429.156 244.54 429.304 244.307C429.452 244.071 429.649 243.887 429.896 243.753C430.143 243.62 430.416 243.52 430.714 243.455C431.016 243.387 431.318 243.333 431.622 243.293C432.02 243.242 432.342 243.203 432.589 243.178C432.839 243.149 433.021 243.103 433.135 243.037C433.251 242.972 433.31 242.858 433.31 242.696V242.662C433.31 242.242 433.195 241.915 432.964 241.682C432.737 241.449 432.392 241.333 431.929 241.333C431.449 241.333 431.072 241.438 430.8 241.648C430.527 241.858 430.335 242.083 430.224 242.321L429.27 241.98C429.44 241.583 429.668 241.273 429.952 241.051C430.239 240.827 430.551 240.671 430.889 240.583C431.23 240.492 431.565 240.446 431.895 240.446C432.105 240.446 432.347 240.472 432.619 240.523C432.895 240.571 433.161 240.672 433.416 240.826C433.675 240.979 433.889 241.211 434.06 241.52C434.23 241.83 434.315 242.245 434.315 242.765V247.077H433.31V246.191H433.259C433.19 246.333 433.077 246.485 432.918 246.647C432.759 246.809 432.547 246.946 432.283 247.06C432.018 247.174 431.696 247.23 431.315 247.23ZM431.469 246.327C431.866 246.327 432.202 246.249 432.474 246.093C432.75 245.936 432.957 245.735 433.097 245.488C433.239 245.24 433.31 244.98 433.31 244.708V243.787C433.267 243.838 433.173 243.885 433.028 243.928C432.886 243.968 432.722 244.003 432.534 244.034C432.349 244.063 432.169 244.088 431.993 244.111C431.82 244.131 431.679 244.148 431.571 244.162C431.31 244.196 431.065 244.252 430.838 244.328C430.614 244.402 430.432 244.515 430.293 244.665C430.156 244.813 430.088 245.015 430.088 245.27C430.088 245.62 430.217 245.884 430.476 246.063C430.737 246.239 431.068 246.327 431.469 246.327ZM436.564 249.532C436.394 249.532 436.242 249.517 436.108 249.489C435.975 249.463 435.882 249.438 435.831 249.412L436.087 248.526C436.331 248.588 436.547 248.611 436.735 248.594C436.922 248.577 437.088 248.493 437.233 248.343C437.381 248.195 437.516 247.955 437.638 247.622L437.826 247.111L435.405 240.532H436.496L438.303 245.747H438.371L440.178 240.532H441.269L438.49 248.032C438.365 248.37 438.211 248.649 438.026 248.871C437.841 249.095 437.627 249.262 437.382 249.37C437.141 249.478 436.868 249.532 436.564 249.532Z"
                  fill="black"
                />
                <motion.ellipse cx="334.45" cy="243.124" rx="4.4901" ry="4.26034" fill="#8FD14F" />
                <motion.path
                  d="M496.76 247.089V240.544H497.732V241.567H497.817C497.953 241.217 498.174 240.946 498.478 240.753C498.782 240.557 499.147 240.459 499.573 240.459C500.005 240.459 500.364 240.557 500.651 240.753C500.941 240.946 501.167 241.217 501.328 241.567H501.397C501.564 241.228 501.816 240.96 502.151 240.761C502.486 240.559 502.888 240.459 503.357 240.459C503.942 240.459 504.421 240.642 504.793 241.008C505.165 241.372 505.351 241.939 505.351 242.709V247.089H504.346V242.709C504.346 242.226 504.213 241.88 503.949 241.673C503.685 241.466 503.374 241.362 503.016 241.362C502.556 241.362 502.199 241.501 501.946 241.78C501.694 242.055 501.567 242.405 501.567 242.828V247.089H500.544V242.606C500.544 242.234 500.424 241.934 500.182 241.707C499.941 241.477 499.63 241.362 499.249 241.362C498.988 241.362 498.743 241.432 498.516 241.571C498.292 241.71 498.11 241.903 497.971 242.15C497.834 242.395 497.766 242.677 497.766 242.998V247.089H496.76ZM509.849 247.226C509.258 247.226 508.74 247.085 508.294 246.804C507.85 246.522 507.504 246.129 507.254 245.623C507.007 245.118 506.883 244.527 506.883 243.851C506.883 243.169 507.007 242.574 507.254 242.065C507.504 241.557 507.85 241.162 508.294 240.88C508.74 240.599 509.258 240.459 509.849 240.459C510.44 240.459 510.957 240.599 511.4 240.88C511.846 241.162 512.193 241.557 512.44 242.065C512.69 242.574 512.815 243.169 512.815 243.851C512.815 244.527 512.69 245.118 512.44 245.623C512.193 246.129 511.846 246.522 511.4 246.804C510.957 247.085 510.44 247.226 509.849 247.226ZM509.849 246.322C510.298 246.322 510.667 246.207 510.957 245.977C511.247 245.747 511.461 245.444 511.6 245.069C511.74 244.694 511.809 244.288 511.809 243.851C511.809 243.413 511.74 243.005 511.6 242.628C511.461 242.25 511.247 241.944 510.957 241.711C510.667 241.478 510.298 241.362 509.849 241.362C509.4 241.362 509.031 241.478 508.741 241.711C508.451 241.944 508.237 242.25 508.098 242.628C507.958 243.005 507.889 243.413 507.889 243.851C507.889 244.288 507.958 244.694 508.098 245.069C508.237 245.444 508.451 245.747 508.741 245.977C509.031 246.207 509.4 246.322 509.849 246.322ZM515.356 243.152V247.089H514.35V240.544H515.322V241.567H515.407C515.56 241.234 515.793 240.967 516.106 240.765C516.418 240.561 516.822 240.459 517.316 240.459C517.759 240.459 518.147 240.549 518.479 240.731C518.812 240.91 519.07 241.183 519.255 241.549C519.44 241.913 519.532 242.373 519.532 242.93V247.089H518.526V242.998C518.526 242.484 518.393 242.084 518.126 241.797C517.859 241.507 517.492 241.362 517.026 241.362C516.705 241.362 516.418 241.432 516.165 241.571C515.915 241.71 515.718 241.913 515.573 242.18C515.428 242.447 515.356 242.771 515.356 243.152ZM521.37 247.089V240.544H522.375V247.089H521.37ZM521.881 239.453C521.685 239.453 521.516 239.386 521.374 239.253C521.235 239.119 521.165 238.959 521.165 238.771C521.165 238.584 521.235 238.423 521.374 238.29C521.516 238.156 521.685 238.089 521.881 238.089C522.077 238.089 522.245 238.156 522.384 238.29C522.526 238.423 522.597 238.584 522.597 238.771C522.597 238.959 522.526 239.119 522.384 239.253C522.245 239.386 522.077 239.453 521.881 239.453ZM527.064 240.544V241.396H523.672V240.544H527.064ZM524.661 238.976H525.666V245.214C525.666 245.498 525.707 245.711 525.79 245.853C525.875 245.993 525.983 246.086 526.114 246.135C526.247 246.18 526.388 246.203 526.536 246.203C526.646 246.203 526.737 246.197 526.808 246.186C526.879 246.172 526.936 246.16 526.979 246.152L527.183 247.055C527.115 247.081 527.02 247.106 526.898 247.132C526.776 247.16 526.621 247.174 526.433 247.174C526.149 247.174 525.871 247.113 525.598 246.991C525.328 246.869 525.104 246.683 524.925 246.433C524.749 246.183 524.661 245.868 524.661 245.487V238.976ZM531.165 247.226C530.575 247.226 530.056 247.085 529.61 246.804C529.167 246.522 528.82 246.129 528.57 245.623C528.323 245.118 528.2 244.527 528.2 243.851C528.2 243.169 528.323 242.574 528.57 242.065C528.82 241.557 529.167 241.162 529.61 240.88C530.056 240.599 530.575 240.459 531.165 240.459C531.756 240.459 532.273 240.599 532.717 240.88C533.163 241.162 533.509 241.557 533.756 242.065C534.006 242.574 534.131 243.169 534.131 243.851C534.131 244.527 534.006 245.118 533.756 245.623C533.509 246.129 533.163 246.522 532.717 246.804C532.273 247.085 531.756 247.226 531.165 247.226ZM531.165 246.322C531.614 246.322 531.984 246.207 532.273 245.977C532.563 245.747 532.778 245.444 532.917 245.069C533.056 244.694 533.126 244.288 533.126 243.851C533.126 243.413 533.056 243.005 532.917 242.628C532.778 242.25 532.563 241.944 532.273 241.711C531.984 241.478 531.614 241.362 531.165 241.362C530.717 241.362 530.347 241.478 530.058 241.711C529.768 241.944 529.553 242.25 529.414 242.628C529.275 243.005 529.205 243.413 529.205 243.851C529.205 244.288 529.275 244.694 529.414 245.069C529.553 245.444 529.768 245.747 530.058 245.977C530.347 246.207 530.717 246.322 531.165 246.322ZM535.667 247.089V240.544H536.638V241.532H536.706C536.826 241.209 537.042 240.946 537.354 240.744C537.667 240.542 538.019 240.442 538.411 240.442C538.485 240.442 538.577 240.443 538.688 240.446C538.799 240.449 538.882 240.453 538.939 240.459V241.481C538.905 241.473 538.827 241.46 538.705 241.443C538.586 241.423 538.459 241.413 538.326 241.413C538.007 241.413 537.723 241.48 537.473 241.613C537.226 241.744 537.03 241.926 536.885 242.159C536.743 242.389 536.672 242.652 536.672 242.947V247.089H535.667Z"
                  fill="black"
                />
                <motion.path
                  d="M596.938 242.01L596.034 242.265C595.977 242.115 595.894 241.968 595.783 241.826C595.675 241.682 595.527 241.562 595.34 241.468C595.152 241.375 594.912 241.328 594.619 241.328C594.219 241.328 593.885 241.42 593.618 241.605C593.354 241.787 593.222 242.018 593.222 242.299C593.222 242.549 593.313 242.747 593.494 242.892C593.676 243.037 593.96 243.157 594.347 243.254L595.318 243.493C595.904 243.635 596.34 243.852 596.627 244.145C596.914 244.434 597.057 244.808 597.057 245.265C597.057 245.64 596.949 245.976 596.733 246.271C596.52 246.567 596.222 246.799 595.838 246.97C595.455 247.14 595.009 247.226 594.5 247.226C593.833 247.226 593.28 247.081 592.843 246.791C592.405 246.501 592.128 246.078 592.012 245.521L592.966 245.282C593.057 245.635 593.229 245.899 593.482 246.075C593.737 246.251 594.071 246.339 594.483 246.339C594.952 246.339 595.324 246.24 595.6 246.041C595.878 245.839 596.017 245.598 596.017 245.317C596.017 245.089 595.938 244.899 595.779 244.745C595.619 244.589 595.375 244.473 595.046 244.396L593.955 244.14C593.355 243.998 592.915 243.778 592.634 243.48C592.355 243.179 592.216 242.802 592.216 242.351C592.216 241.981 592.32 241.655 592.527 241.37C592.737 241.086 593.023 240.863 593.384 240.701C593.747 240.54 594.159 240.459 594.619 240.459C595.267 240.459 595.776 240.601 596.145 240.885C596.517 241.169 596.781 241.544 596.938 242.01ZM601.23 247.226C600.616 247.226 600.088 247.081 599.645 246.791C599.202 246.501 598.861 246.102 598.622 245.593C598.383 245.085 598.264 244.504 598.264 243.851C598.264 243.186 598.386 242.599 598.631 242.091C598.878 241.579 599.221 241.18 599.662 240.893C600.105 240.603 600.622 240.459 601.213 240.459C601.673 240.459 602.088 240.544 602.457 240.714C602.827 240.885 603.129 241.123 603.365 241.43C603.601 241.737 603.747 242.095 603.804 242.504H602.798C602.721 242.206 602.551 241.942 602.287 241.711C602.025 241.478 601.673 241.362 601.23 241.362C600.838 241.362 600.494 241.464 600.199 241.669C599.906 241.87 599.677 242.156 599.513 242.525C599.351 242.892 599.27 243.322 599.27 243.817C599.27 244.322 599.349 244.763 599.508 245.138C599.67 245.513 599.898 245.804 600.19 246.011C600.486 246.218 600.832 246.322 601.23 246.322C601.491 246.322 601.729 246.277 601.942 246.186C602.155 246.095 602.335 245.964 602.483 245.794C602.631 245.623 602.736 245.419 602.798 245.18H603.804C603.747 245.567 603.606 245.915 603.382 246.224C603.16 246.531 602.866 246.775 602.5 246.957C602.136 247.136 601.713 247.226 601.23 247.226ZM605.274 247.089V240.544H606.246V241.532H606.314C606.433 241.209 606.649 240.946 606.961 240.744C607.274 240.542 607.626 240.442 608.018 240.442C608.092 240.442 608.184 240.443 608.295 240.446C608.406 240.449 608.49 240.453 608.547 240.459V241.481C608.513 241.473 608.434 241.46 608.312 241.443C608.193 241.423 608.067 241.413 607.933 241.413C607.615 241.413 607.331 241.48 607.081 241.613C606.834 241.744 606.638 241.926 606.493 242.159C606.351 242.389 606.28 242.652 606.28 242.947V247.089H605.274ZM612.284 247.226C611.653 247.226 611.109 247.086 610.652 246.808C610.197 246.527 609.846 246.135 609.599 245.632C609.355 245.126 609.233 244.538 609.233 243.868C609.233 243.197 609.355 242.606 609.599 242.095C609.846 241.581 610.19 241.18 610.631 240.893C611.074 240.603 611.591 240.459 612.182 240.459C612.523 240.459 612.859 240.515 613.192 240.629C613.524 240.743 613.827 240.927 614.099 241.183C614.372 241.436 614.589 241.771 614.751 242.189C614.913 242.606 614.994 243.12 614.994 243.731V244.157H609.949V243.288H613.971C613.971 242.919 613.898 242.589 613.75 242.299C613.605 242.01 613.398 241.781 613.128 241.613C612.861 241.446 612.545 241.362 612.182 241.362C611.781 241.362 611.434 241.461 611.142 241.66C610.852 241.856 610.629 242.112 610.473 242.427C610.317 242.743 610.238 243.081 610.238 243.442V244.021C610.238 244.515 610.324 244.934 610.494 245.278C610.667 245.619 610.907 245.879 611.214 246.058C611.521 246.234 611.878 246.322 612.284 246.322C612.548 246.322 612.787 246.285 613 246.211C613.216 246.135 613.402 246.021 613.558 245.87C613.714 245.717 613.835 245.527 613.92 245.299L614.892 245.572C614.79 245.902 614.618 246.192 614.376 246.442C614.135 246.689 613.836 246.882 613.481 247.021C613.126 247.157 612.727 247.226 612.284 247.226ZM619.268 247.226C618.638 247.226 618.094 247.086 617.636 246.808C617.182 246.527 616.831 246.135 616.584 245.632C616.339 245.126 616.217 244.538 616.217 243.868C616.217 243.197 616.339 242.606 616.584 242.095C616.831 241.581 617.175 241.18 617.615 240.893C618.058 240.603 618.575 240.459 619.166 240.459C619.507 240.459 619.844 240.515 620.176 240.629C620.508 240.743 620.811 240.927 621.084 241.183C621.356 241.436 621.574 241.771 621.736 242.189C621.898 242.606 621.979 243.12 621.979 243.731V244.157H616.933V243.288H620.956C620.956 242.919 620.882 242.589 620.734 242.299C620.589 242.01 620.382 241.781 620.112 241.613C619.845 241.446 619.53 241.362 619.166 241.362C618.765 241.362 618.419 241.461 618.126 241.66C617.836 241.856 617.613 242.112 617.457 242.427C617.301 242.743 617.223 243.081 617.223 243.442V244.021C617.223 244.515 617.308 244.934 617.479 245.278C617.652 245.619 617.892 245.879 618.199 246.058C618.506 246.234 618.862 246.322 619.268 246.322C619.532 246.322 619.771 246.285 619.984 246.211C620.2 246.135 620.386 246.021 620.542 245.87C620.699 245.717 620.819 245.527 620.905 245.299L621.876 245.572C621.774 245.902 621.602 246.192 621.361 246.442C621.119 246.689 620.821 246.882 620.466 247.021C620.111 247.157 619.711 247.226 619.268 247.226ZM624.514 243.152V247.089H623.508V240.544H624.48V241.567H624.565C624.719 241.234 624.952 240.967 625.264 240.765C625.577 240.561 625.98 240.459 626.474 240.459C626.917 240.459 627.305 240.549 627.638 240.731C627.97 240.91 628.229 241.183 628.413 241.549C628.598 241.913 628.69 242.373 628.69 242.93V247.089H627.684V242.998C627.684 242.484 627.551 242.084 627.284 241.797C627.017 241.507 626.65 241.362 626.184 241.362C625.863 241.362 625.577 241.432 625.324 241.571C625.074 241.71 624.876 241.913 624.731 242.18C624.586 242.447 624.514 242.771 624.514 243.152Z"
                  fill="black"
                />
                <motion.ellipse cx="483.483" cy="243.135" rx="4.4901" ry="4.26034" fill="#F9D34A" />
                <motion.ellipse cx="579.412" cy="243.135" rx="4.4901" ry="4.26034" fill="#2ED2D8" />
              </motion.svg>
            </div>
          </div>
        </div>
        <div className={"home-commerce-box"}>
          <div className={"home-report-title"}>
            Explore our omnichannel digital commerce report features
          </div>
          <div className={"home-metric-box"}>
            <Image className={"home-metric-pic"} src={metricPic} alt={""} />
            <div className={"home-metric-right"}>
              <div className={"home-metric-title"}>Ask Metric</div>
              <div className={"home-metric-text"}>
                Based on AI technology, AskMetric provides answers and assist with a wide range of
                tasks, including but not limited to metrics visualisation, keyword searching and
                recommendations to product, platform and ads strategies.
              </div>
            </div>
          </div>
          <div className={"home-product-box"}>
            <div className={"home-product-left"}>
              <div className={"home-product-title"}>Product Insights</div>
              <div className={"home-product-text"}>
                Reveal product metrics and get deep insights across e-commerce platforms including
                marketplace, DTC and social media. Generate the most effective tactics and discover
                the future of your market.
              </div>
            </div>
            <Image className={"home-product-pic"} src={productPic} alt={""} />
          </div>
          <div className={"home-monitor-box"}>
            <Image className={"home-monitor-pic"} src={monitorPic} alt={""} />
            <div className={"home-monitor-left"}>
              <div className={"home-monitor-title"}>Monitor 360</div>
              <div className={"home-monitor-text"}>
                Real-time track core metrics of products you followed. Reveal your competitors'
                strategies and changes. Enabled to move fast and perform competitive actions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"home-footer"}>
        <div className={"home-footer-glass"}></div>
        {/* <Image className={"home-footer-left-circle"} src={footerLeftCircle} alt={""} />
        <Image className={"home-footer-right-circle"} src={footerRightCircle} alt={""} />*/}
        <div className={"home-footer-left-box"}>
          <div className={"home-footer-top-row"}>
            {/*<Image className={"home-footer-logo"} src={footerLogo} alt={""} />*/}
            <div className={"home-footer-logo"}></div>
            <div className={"home-footer-text1"}>AskMetric</div>
            <div className={"home-footer-text2"}>About us</div>
            <div className={"home-footer-text3"}>Latest news</div>
            <div className={"home-footer-text4"}>Recruit elites</div>
            <div className={"home-footer-text5"}>Enterprise cooperation</div>
          </div>
          <div className={"home-footer-bottom-row"}>
            <div>
              <div className={"home-footer-phone-text"}> 917-822-1792</div>
              <div className={"home-footer-time-text"}>working hours：8:00-18:00</div>
            </div>
            <div className={"home-footer-icons"}>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                  <Tooltip
                    placement={"top"}
                    PopperProps={{
                      disablePortal: true
                    }}
                    onClose={handleTooltipClose}
                    open={phoneTooltipOpen}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={<div className="home-phone-tooltip">917-822-1792</div>}>
                    <div
                      onMouseLeave={handleTooltipClose}
                      onMouseEnter={handleTooltipOpen}
                      className={"home-footer-icon-wrapper"}>
                      <Image className={"home-footer-phone-icon"} src={phoneIcon} alt={""} />
                    </div>
                  </Tooltip>
                </div>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleEmailTooltipClose}>
                <div>
                  <Tooltip
                    placement={"top"}
                    PopperProps={{
                      disablePortal: true
                    }}
                    onClose={handleEmailTooltipClose}
                    open={emailTooltipOpen}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                      <div className="home-email-tooltip">
                        <div>info@askmetric.com</div>
                        <div>zion.flatsphere@gmail.com</div>
                      </div>
                    }>
                    <div
                      onMouseLeave={handleEmailTooltipClose}
                      onMouseEnter={handleEmailTooltipOpen}
                      className={"home-footer-icon-wrapper"}>
                      <Image className={"home-footer-email-icon"} src={emailIcon} alt={""} />
                    </div>
                  </Tooltip>
                </div>
              </ClickAwayListener>
              {/*<div className={"home-footer-icon-wrapper"}>
                <Image className={"home-footer-eye-icon"} src={eyeIcon} alt={""} />
              </div>
              <div className={"home-footer-icon-wrapper"}>
                <Image className={"home-footer-weixin-icon"} src={weixinIcon} alt={""} />
              </div>
              <div className={"home-footer-icon-wrapper"}>
                <Image className={"home-footer-douyin-icon"} src={douyinIcon} alt={""} />
              </div>*/}
            </div>
          </div>
        </div>
        <div className={"home-footer-right-box"}>
          <Image className={"home-footer-clutch-icon"} src={clutch} alt={""} />
          <Link href={"https://www.linkedin.com/company/askmetric"}>
            <Image className={"home-footer-uiclutch-icon"} src={uiclutch} alt={""} />
          </Link>
        </div>
      </div>
      <Modal
        ref={dialogRef}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={isOpen}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: "flex",
          p: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
        container={() => rootRef.current}>
        <div className="home-modal-container">
          <Icon
            onClick={closeModal}
            sx={{ position: "absolute", top: "15px", right: "15px", cursor: "pointer" }}>
            close
          </Icon>
          <div className="home-modal-header">
            <Image className={"home-modal-header-icon"} src={fireIcon} alt={""} />
            <div className={"home-modal-header-title"}>Stay Tuned!</div>
          </div>
          <div
            className={
              "home-modal-content"
            }>{`We are not officially launched yet,\nplease join our waitlist`}</div>
          <iframe className={"launch-iframe"} id={"form"} name={"form"}></iframe>
          <form
            onSubmit={submit}
            action="https://getlaunchlist.com/s/IGBWwV"
            method="POST"
            target={"form"}
            className={"launchlist-form"}>
            <input className={"launch-name"} value={"askmetric"} name="name" type="text" />
            <input
              type={"email"}
              className={"home-form-input"}
              name={"email"}
              onChange={emailChange}
              placeholder={"Your email here"}
            />
            {success ? (
              <OkButton onClick={closeModal}>
                <Image className={"home-ok-button"} src={okBTn} alt={""} />
              </OkButton>
            ) : (
              <SubscribeButton type={"submit"}>Subscribe</SubscribeButton>
            )}
          </form>
        </div>
      </Modal>
    </CustomContainer>
  );
};
export default index;
