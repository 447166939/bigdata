import React, { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import Icon from "@mui/material/Icon";
import Image from "next/image";
import Collapse from "@mui/material/Collapse";
import { useClickoutside } from "@/hooks/useClickoutside";
import {
  CustomContainer,
  GlassEffect,
  Header,
  CustomInput,
  MyButton,
  AskButton,
  EmailInput,
  SubscribeButton
} from "./index.styled";
import logo from "@/assets/logo.png";
import person from "@/assets/person.png";
import leftTop from "@/assets/left_top.png";
import rightTop from "@/assets/right_top.png";
import rightBottom from "@/assets/right_bottom.png";
import smallLogo from "@/assets/small_logo.png";
import searchIcon from "@/assets/Search.png";
import fireIcon from "@/assets/fire.png";
import downIcon from "@/assets/down.png";
import footerLeftCircle from '@/assets/footer_left_circle.png'
import footerRightCircle from '@/assets/footer_right_circle.png'
import phoneIcon from '@/assets/phone.png';
import emailIcon from '@/assets/email.png';
import eyeIcon from '@/assets/eye.png';
import weixinIcon from '@/assets/weixin.png';
import douyinIcon from '@/assets/douyin.png';
import clutch from '@/assets/clutch.png';
import uiclutch from '@/assets/uiclutch.png';
import redPerson from '@/assets/red_person .png'
import maIcon from '@/assets/MA.png';
import lineChart from '@/assets/line_chart.svg';
import productPic from '@/assets/product_picture.png'
import metricPic from '@/assets/metric.png';
import monitorPic from '@/assets/monitor.png';
export interface IHomeProps {}
const index: React.FC<IHomeProps> = (props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isAsk, setIsAsk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [state, setState] = useState({ 0: false, 1: false, 2: false });
  const rootRef = React.useRef(null);
  const sideRef = useRef(null);
  const closeSide = () => {
    //setDrawerOpen(false)
  };
  useClickoutside(sideRef, closeSide);
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
  const toggle = (mode: string) => {
    if (mode == "search") {
      setIsSearch(true);
      setIsAsk(false);
    } else {
      setIsSearch(false);
      setIsAsk(true);
    }
  };
  const clickSearch = () => {
    setIsOpen(true);
    setDrawerOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
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
      <Image className={"home-left-top"} src={leftTop} alt={""} />
      <Image className={"home-right-top"} src={rightTop} alt={""} />
      <Image className={"home-right-bottom"} src={rightBottom} alt={""} />
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
        <div className="home-join">Join waitlist</div>
        <div className="home-product">Product Demo</div>
        <Image className={"home-person"} src={person} alt={""} />
      </Header>
      <Image className={"home-small-logo"} src={smallLogo} alt={""} />
      <div className="home-title">Product Analysis</div>
      <div className="home-sub-title">Empowering merchants with all platform data</div>
      <div onClick={clickSearch} className="home-search-input">
        <Image className={"home-search-icon"} src={searchIcon} alt={""} />
        <CustomInput placeholder="Search metrics, forecasts, ask AI"></CustomInput>
      </div>
      <div className="home-button-wrapper">
        <div className="home-search-button">
          <MyButton onClick={toggle.bind(null, "search")} variant="outlined">
            search
          </MyButton>
          {isSearch && (
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
          <AskButton onClick={toggle.bind(null, "ask")} variant="contained">
            Ask Metric
          </AskButton>
          {isAsk && (
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

      <div className='home-bottom-box'>
        <div className={'home-chart-container'}>
          <div className={'home-chart-top-box'}>
            <div className={'home-chart-top-icon-wrapper'}>
              <Image className={"home-chart-top-icon"} src={redPerson} alt={""} />
            </div>
            <div className={'home-chart-top-text'}>Can you give me the BSR keyword under category "computer monitor" at Amazon? I need Top5 BSR keyword for past 6 months' data, draw me a graph of "Line Charts", y-axis=Monthly Sales, x-axis=time</div>
          </div>
          <div className={'home-chart-bottom-box'}>
            <div className={'home-chart-bottom-icon-wrapper'}><Image className={"home-chart-bottom-icon"} src={maIcon} alt={""} /></div>
            <div className={'home-chart-bottom-right'}>
              <div className={'home-chart-bottom-text'}>TOP-5 BSR keyword under category "computer monitor" at Amazon is:
                1.computer monitor
                2.computer screen
                3.monitor
                4.screen
                5.computer display
                With a monthly GMV of $38.47M and $299.95 on average price. Top sellers are Samsung, Acer, ASUS, KOORUI and dell. Growth in this market is slow with about 0.5% up in GMV month to month. Trending here is bigger and thinner screen, wide-bend screen has a month GMV growth of 6.2%. I'm able to find 289 keywords and misspelling-keywords and here are the Top5 keywords with its "Monthly Sales" and time manner data in Line Charter:</div>
              <div className={'home-chart-bottom-key'}>Keyword Trending</div>
              <Image className={"home-chart-img"} src={lineChart} alt={""} />
            </div>
          </div>
        </div>
        <div className={'home-report-title'}>
          Explore our omnichannel digital commerce report features
        </div>
        <div className={'home-product-box'}>
          <div className={'home-product-left'}>
            <div className={'home-product-title'}>Product Insights</div>
            <div className={'home-product-text'}>Reveal product metrics and get deep insights across e-commerce platforms including marketplace, DTC and social media. Generate the most effective tactics and discover the future of your market.</div>
          </div>
          <Image className={"home-product-pic"} src={productPic} alt={""} />
        </div>
        <div className={'home-metric-box'}>
          <Image className={"home-metric-pic"} src={metricPic} alt={""} />
          <div className={'home-metric-right'}>
<div className={'home-metric-title'}>Ask Metric</div>
            <div className={'home-metric-text'}>
              Based on AI technology, AskMetric provides answers and assist with a wide range of tasks, including but not limited to metrics visualisation, keyword searching and recommendations to product, platform and ads strategies.
            </div>
          </div>
        </div>
        <div className={'home-monitor-box'}>
          <div className={'home-monitor-left'}>
            <div className={'home-monitor-title'}>Monitor 360</div>
            <div className={'home-monitor-text'}>Real-time track core metrics of products you followed. Reveal your competitors' strategies and changes. Enabled to move fast and perform competitive actions.</div>
          </div>
          <Image className={"home-monitor-pic"} src={monitorPic} alt={""} />

        </div>
      </div>
      <div className={'home-footer'}>
        <div className={'home-footer-glass'}></div>
        <Image className={"home-footer-left-circle"} src={footerLeftCircle} alt={""} />
        <Image className={"home-footer-right-circle"} src={footerRightCircle} alt={""} />
        <div className={'home-footer-left-box'}>
          <div className={'home-footer-top-row'}>
            {/*<Image className={"home-footer-logo"} src={footerLogo} alt={""} />*/}
            <div className={'home-footer-logo'}></div>
            <div className={'home-footer-text1'}>AskMetric</div>
            <div className={'home-footer-text2'}>About us</div>
            <div className={'home-footer-text3'}>Latest news</div>
            <div className={'home-footer-text4'}>Recruit elites</div>
            <div className={'home-footer-text5'}>Enterprise cooperation</div>
          </div>
          <div className={'home-footer-bottom-row'}>
            <div>
              <div className={'home-footer-phone-text'}>400-100-8888</div>
              <div className={'home-footer-time-text'}>working hours：8:00-18:00</div>
            </div>
            <div className={'home-footer-icons'}>
              <div className={'home-footer-icon-wrapper'}><Image className={"home-footer-phone-icon"} src={phoneIcon} alt={""} /></div>
              <div className={'home-footer-icon-wrapper'}> <Image className={"home-footer-email-icon"} src={emailIcon} alt={""} /></div>
              <div className={'home-footer-icon-wrapper'}><Image className={"home-footer-eye-icon"} src={eyeIcon} alt={""} /></div>
              <div className={'home-footer-icon-wrapper'}><Image className={"home-footer-weixin-icon"} src={weixinIcon} alt={""} /></div>
              <div className={'home-footer-icon-wrapper'}><Image className={"home-footer-douyin-icon"} src={douyinIcon} alt={""} /></div>

            </div>
          </div>
        </div>
        <div className={'home-footer-right-box'}>
          <Image className={"home-footer-clutch-icon"} src={clutch} alt={""} />
          <Image className={"home-footer-uiclutch-icon"} src={uiclutch} alt={""} />
        </div>
      </div>
      <Modal
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
          <div className={"home-modal-footer"}>
            <EmailInput placeholder={"Your email here"} />
            <SubscribeButton onClick={closeModal}>Subscribe</SubscribeButton>
          </div>
        </div>
      </Modal>
    </CustomContainer>
  );
};
export default index;
