import React, { useState, useCallback, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SvgIcon from "@material-ui/core/SvgIcon";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";
import Switch from "@/components/Switch";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, createStyles, useMediaQuery } from "@material-ui/core";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";
import ButtonBase from "@material-ui/core/ButtonBase";
import InputBase from "@material-ui/core/InputBase";
import Link from "@material-ui/core/Link";
import anime from "animejs";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import upSvg from "@/assets/up.svg";
import chatSvg from "@/assets/chat.svg";
import logoSvg from "@/assets/logo.svg";
import userSvg from "@/assets/person.svg";
import menuSvg from "@/assets/menu.svg";
import EmailSvg from "@/assets/email.svg";
import { RootState } from "@/store/index";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import actions from "@/store/modules/global/action";
import TextareaAutosize from "@material-ui/core/TextareaAutosize/TextareaAutosize";
import Card from "@/components/Card";
import { IEmailIconProps } from "../../pages";
import PhoneSvg from "@/assets/phone.svg";
import ArrowSvg from "@/assets/arrow.svg";
import useGlobalStyles from "../../theme/globalStyles/globalStyles";
import theme from "../../theme";
import { px2vw, px2vwMo } from "@/utils/pxtovw";
import FooterM from "@/components/FooterM";
// import MenuIcon from "@material-ui/icons/Menu";

export interface ArrowIconProps {
  classes?: object;
}
const ArrowIcon: React.FC<ArrowIconProps> = (props) => {
  return <SvgIcon {...props} component={ArrowSvg} viewBox={"0 0 12 12"} />;
};
export interface IUPIconProps {}
const UPIcon: React.FC<IUPIconProps> = (props: IUPIconProps) => {
  return <SvgIcon component={upSvg} viewBox={"0 0 21 26"} />;
};
export interface IChatIconProps {}
const ChatIcon: React.FC<IChatIconProps> = (props: IChatIconProps) => {
  return <SvgIcon component={chatSvg} viewBox={"0 0 26.6 22.3"} />;
};
const {
  // MAIN MENUS APP BAR
  setAppBarServiceMenuVisible,
  setAppBarTechnologiesMenuVisible,
  setAppBarSolutionsMenuVisible,
  setAppBarBlogAndNewsMenuVisible,

  // TECHNOLOGIES SUB-MENUS APP_BAR
  setAppBarTechnologiesProgrammingLanguagesSubMenuVisible,
  setAppBarTechnologiesAdvancedTechnologiesSubMenuVisible,
  setAppBarTechnologiesCloudTechnologiesSubMenuVisible
} = actions;

export interface IUserIconProps {}
const UserIcon: React.FC<IUserIconProps> = (props: IUserIconProps) => {
  return <SvgIcon component={userSvg} viewBox={"0 0 14.843 14.843"} />;
};
export interface IMenuIconProps {}
const MenuIcon: React.FC<IMenuIconProps> = (props: IMenuIconProps) => {
  return <SvgIcon component={menuSvg} viewBox={"0 0 14.843 14.843"} />;
};
const EmailIcon = (props: IEmailIconProps) => (
  <SvgIcon {...props} component={EmailSvg} viewBox="0 0 19.79 19.79" />
);
export interface IPhoneIconProps {
  classes?: object;
}
const PhoneIcon = (props: IPhoneIconProps) => (
  <SvgIcon {...props} component={PhoneSvg} viewBox="0 0 19.79 19.79" />
);
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      color: theme.palette.common.black,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      paddingBottom: "1px",
      zIndex: 1000
    },
    topIndex: {
      zIndex: 999999
    },
    appBar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 40000
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingLeft: "15%",
      paddingRight: "15%",
      position: "relative"
    },
    toolbarMobile: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingLeft: "6%",
      paddingRight: "6%",
      position: "relative",
      zIndex: 1000000
    },
    toolbarGrp1: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "20%"
    },
    toolbarGrp1Mobile: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "30%"
    },
    toolbarGrp2: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "66%"
    },
    toolbarGrp2Mobile: {
      height: "60px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center",
      padding: "10px 0"
    },
    toolbarGrp3: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "20%"
    },
    toolbarGrp3Mobile: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    drawer: {
      position: "absolute"
    },
    offset: theme.mixins.toolbar,
    servBtn: {
      width: "144px",
      marginRight: "48px"
    },
    techBtn: {
      width: "144px",
      marginRight: "48px"
    },
    blogBtn: {
      width: "144px",
      marginRight: "48px"
    },
    searchBtn: {
      width: "41px",
      [theme.breakpoints.down("xl")]: {
        marginRight: theme.spacing(3)
      },
      [theme.breakpoints.down("lg")]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down("md")]: {
        marginRight: theme.spacing(1)
      }
    },
    userBtn: {
      width: "41px",
      [theme.breakpoints.down("xl")]: {
        marginRight: theme.spacing(3)
      },
      [theme.breakpoints.down("lg")]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down("md")]: {
        marginRight: theme.spacing(1)
      }
    },
    menuBtnMobile: {
      width: "41px",
      marginLeft: theme.spacing(5)
    },
    searchCloseBtn: {
      width: "41px",
      [theme.breakpoints.down("xl")]: {
        marginRight: theme.spacing(3)
      },
      [theme.breakpoints.down("lg")]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down("md")]: {
        marginRight: theme.spacing(1)
      }
    },
    tabsWrapper: {
      height: "44px",
      width: "auto",
      position: "absolute",
      display: "flex",
      alignItems: "center"
    },
    tabsWrapperMobile: {
      height: "39px",
      width: "auto",
      marginTop: "12px",
      position: "absolute",
      display: "flex",
      alignItems: "center"
    },
    searchInputWrapper: {
      opacity: 0,
      height: "44px",
      width: 12,
      position: "absolute",
      background: "inherit",
      outline: "none",
      border: "none",
      boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
      borderRadius: "22px",
      display: "flex",
      alignItems: "center",
      color: "#CBD5E5",
      fontSize: "14px",
      lineHeight: "50px",
      fontWeight: "bold",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      cursor: "text",
      "&:after": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        boxShadow:
          "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset",
        borderRadius: "22px"
      }
    },
    searchInput: {
      width: "inherit",
      color: "#CBD5E5",
      fontSize: "14px",
      lineHeight: "50px",
      fontWeight: "bold"
    },
    nameText: {
      color: "#2699FB",
      marginLeft: theme.spacing(2),
      fontSize: 25,
      // fontSize: `${px2vw(25)}`,
      fontWeight: "bold",
      marginRight: "10.5%"
    },
    nameTextMobile: {
      color: "#2699FB",
      marginLeft: theme.spacing(1),
      fontSize: 25,
      // fontSize: `${px2vwMo(25)}`,
      fontWeight: "bold",
      marginRight: "10.5%"
    },
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      paddingBottom: `${px2vw(97)}`
    },
    bg: {
      position: "fixed",
      background: theme.custom.background,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -10000
    },
    serviceContainer: {
      height: "auto",
      display: "flex",
      justifyContent: "space-between",
      padding: "107px 280px",
      backgroundColor: "#f7f8fa"
    },
    serviceContainerMobile: {
      height: "auto",
      width: "100%",
      paddingBottom: "30px",
      backgroundColor: "#f7f8fa"
    },
    toolbarMobileContainer: {
      height: "auto",
      width: "100%",
      backgroundColor: "#f7f8fa",
      padding: "12px 0 18px 0"
    },
    technologiesContainer: {
      display: "flex",
      padding: "107px 280px",
      backgroundColor: "#f7f8fa",
      height: "500px"
    },
    technologiesContainerMobile: {
      height: "auto",
      width: "100%",
      paddingBottom: "30px",
      backgroundColor: "#f7f8fa"
    },
    technologiesCol1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "430px",
      marginRight: "104px"
    },
    technologiesCol1Mobile: {
      height: "auto",
      padding: "0 21px 0 21px",
      width: "inherit"
    },
    technologiesCol2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginRight: "177px"
    },
    technologiesCol2Mobile: {
      width: "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "24px"
    },
    technologiesCol3: {
      display: "flex",
      flexDirection: "column",
      marginRight: "115px"
    },
    technologiesCol3Mobile: {
      width: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    technologiesCol4: {
      display: "flex",
      flexDirection: "column"
    },
    serviceCol1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "430px"
    },
    serviceCol1Mobile: {
      height: "auto",
      padding: "0 21px 0 21px",
      width: "inherit"
    },
    serviceCol2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    serviceCol3: {
      display: "flex",
      flexDirection: "column"
    },
    serviceCol3Mobile: {
      width: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    serviceCol4: {
      display: "flex",
      flexDirection: "column"
    },
    serviceTitle: {
      color: "#2A2D31",
      fontSize: "20px",
      lineHeight: "50px",
      fontWeight: "bold",
      position: "relative"
    },
    serviceTitleMobile: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      color: "#2A2D31",
      fontSize: "20px",
      marginTop: "18px",
      lineHeight: "50px",
      fontWeight: "bold"
    },
    serviceCol1Text: {
      fontSize: "16px",
      color: "#2A2D31",
      lineHeight: "24px"
    },
    serviceContactBtnWrapper: {},
    serviceContactBtnWrapperMobile: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: "30px 0 30px 0"
    },
    serviceContactBtn: {
      color: "#2699FB",
      position: "relative",
      background: "inherit",
      outline: "none",
      border: "none",
      boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
      borderRadius: "8px",
      cursor: "pointer",
      textTransform: "uppercase",
      height: "44px",
      padding: theme.spacing(2),
      width: "207px",
      "&:active": {
        color: "#CBD5E5",
        "&:after": {
          content: "''",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          boxShadow:
            "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset",
          borderRadius: "8px"
        }
      }
    },
    serviceCol2Btn: {
      color: "#2699FB",
      position: "relative",
      background: "inherit",
      outline: "none",
      border: "none",
      boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
      borderRadius: "8px",
      cursor: "pointer",
      textTransform: "uppercase",
      height: "44px",
      padding: theme.spacing(2),
      width: "224px"
    },
    serviceCol2BtnMobile: {
      color: "#2699FB",
      position: "relative",
      background: "inherit",
      outline: "none",
      border: "none",
      boxShadow: "-8px -4px 8px 0px #fff,8px 4px 12px 0px #DFE4EA",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "12px",
      textTransform: "uppercase",
      height: "39px",
      padding: theme.spacing(1),
      margin: "0px 10px 0px 10px",
      width: "138px"
    },
    serviceCol3Link: {
      fontSize: "16px",
      color: "#2A2D31",
      lineHeight: "50px"
    },
    serviceCol4Link: {
      fontSize: "16px",
      color: "#2A2D31",
      lineHeight: "50px"
    },
    upAnchor: {
      [theme.breakpoints.up("md")]: {
        height: 66,
        width: 66,
        bottom: "197px",
        right: "50px"
      },
      [theme.breakpoints.down("sm")]: {
        height: 51,
        width: 51,
        bottom: "136px",
        right: "36px"
      },
      position: "fixed",
      backgroundColor: "#fff",
      boxShadow:
        "rgba(136, 165, 191, 0.75) 6px 2px 16px 0px, rgba(255, 255, 255, 0.36) -6px -2px 16px 0px",
      zIndex: 60000
    },
    chatBtn: {
      [theme.breakpoints.up("md")]: {
        height: 66,
        width: 66,
        bottom: "197px",
        right: "50px"
      },
      [theme.breakpoints.down("sm")]: {
        height: 51,
        width: 51,
        bottom: "66px",
        right: "36px"
      },
      position: "fixed",
      backgroundColor: "#fff",
      boxShadow:
        "rgba(136, 165, 191, 0.75) 6px 2px 16px 0px, rgba(255, 255, 255, 0.36) -6px -2px 16px 0px",
      zIndex: 60000
    },
    ball: {
      position: "fixed",
      width: "92px",
      height: "auto",
      left: "100px",
      top: "900px",
      zIndex: 1
    },
    circle: {
      position: "fixed",
      top: "600px",
      left: "-300px",
      width: "253px",
      height: "auto",
      zIndex: -50
    },
    circleB: {
      position: "fixed",
      top: "1000px",
      left: "600px",
      width: "253px",
      height: "auto",
      zIndex: -100
    },
    circleSB: {
      position: "fixed",
      top: "900px",
      left: "400px",
      width: "100px",
      height: "auto",
      zIndex: -200
    },
    cube: {
      position: "fixed",
      width: "82px",
      height: "auto",
      left: "0px",
      top: "1000px",
      zIndex: -50
    },
    cubeB: {
      position: "fixed",
      width: "156px",
      height: "auto",
      left: -100,
      top: 900,
      zIndex: -100
    },
    egg: {
      position: "fixed",
      width: "700px",
      height: "aoto",
      left: -500,
      top: "1350px",
      zIndex: -49
    },
    rect: {
      position: "fixed",
      width: "185px",
      height: "auto",
      left: "-300px",
      top: "1200px",
      zIndex: -50
    },
    rectB: {
      position: "fixed",
      width: "185px",
      height: "auto",
      left: "100px",
      top: "1100px",
      zIndex: -100
    },
    tetrahedron: {
      position: "fixed",
      width: "156px",
      height: "auto",
      left: 100,
      top: "1000px",
      zIndex: -50
    },
    tetrahedronB: {
      position: "fixed",
      width: "156px",
      height: "auto",
      left: -300,
      top: 1100,
      zIndex: -100
    },
    triangle: {
      position: "fixed",
      width: "148px",
      height: "auto",
      left: "400px",
      top: "1000px",
      zIndex: -50
    },
    triangleB: {
      position: "fixed",
      width: "82px",
      height: "auto",
      left: "-500px",
      top: "8000px",
      zIndex: -50
    },
    active: {
      color: "#CBD5E5",
      "&:after": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        boxShadow:
          "-8px -4px 8px 0px #fff, 8px 4px 12px 0px #DFE4EA, 4px 4px 4px 0px #DFE4EA inset, -4px -4px 4px 0px #fff inset",
        borderRadius: "8px"
      }
    },
    contactSection: {
      alignSelf: "stretch",
      marginLeft: `${px2vw(252)}`,
      marginRight: `${px2vw(252)}`,
      padding: `${px2vw(60)}`,
      marginTop: `${px2vw(50)}`,
      borderRadius: `${px2vw(10)}`
    },
    contactSectionMobile: {
      alignSelf: "stretch",
      marginLeft: `${px2vwMo(20)}`,
      marginRight: `${px2vwMo(20)}`,
      padding: `${px2vwMo(40)} ${px2vwMo(33)}`,
      marginTop: `${px2vwMo(31)}`,
      borderRadius: `${px2vwMo(10)}`
    },
    contactBtnWrapper: {},
    contactTitle: {
      fontSize: `${px2vw(38)}`,
      lineHeight: `${px2vw(50)}`,
      color: "#000",
      fontWeight: "bold",
      position: "relative",
      marginBottom: theme.spacing(2),
      "&:after": {
        content: "''",
        position: "absolute",
        width: `${px2vw(60)}`,
        height: `${px2vw(4)}`,
        bottom: 0,
        left: 0,
        backgroundColor: "#2699FB"
      }
    },
    contactLeft: {
      display: "inline-block",
      width: "65%"
    },
    contactRight: {
      display: "inline-block",
      width: "35%",
      paddingLeft: `${px2vw(100)}`,
      verticalAlign: "bottom"
    },
    contactFormLabel: {
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(24)}`,
      color: "#000"
    },
    contactFormLabelMobile: {
      fontSize: `${px2vwMo(20)}`,
      lineHeight: `${px2vwMo(24)}`,
      color: "#000",
      marginBottom: `${px2vwMo(36)}`,
      marginTop: `${px2vwMo(32)}`
    },
    inputGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: `${px2vw(30)}`
    },
    contactInputWrapper: {
      width: "23%",
      boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30",
      borderRadius: `${px2vw(8)}`,
      paddingLeft: theme.spacing(2),
      backgroundColor: "#fff",
      opacity: 0.6,
      zIndex: 1
    },
    contactInputWrapperMobile: {
      width: "100%",
      boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30",
      borderRadius: `${px2vwMo(8)}`,
      paddingLeft: theme.spacing(2),
      backgroundColor: "#fff",
      opacity: 0.6,
      zIndex: 1,
      height: `${px2vwMo(53)}`,
      lineHeight: `${px2vwMo(53)}`,
      fontSize: `${px2vwMo(20)}`,
      marginBottom: `${px2vwMo(20)}`
    },
    contactInput: {
      color: "#000"
    },
    contactInputMobile: {
      fontSize: `${px2vwMo(20)}`,
      width: `100%`
    },
    contactLinkMobile: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: `${px2vwMo(71)}`
    },
    contactLeftMobile: {
      display: "flex",
      flexDirection: "column"
    },
    contactRightMobile: {
      display: "flex",
      flexDirection: "column"
    },
    contactTitleMobile: {
      fontSize: `${px2vwMo(34)}`,
      lineHeigt: `${px2vwMo(34)}`,
      color: "#000"
    },
    contactTextMobile: {
      fontSize: `${px2vwMo(20)}`,
      lineHeight: `${px2vwMo(23)}`,
      color: "#2699FB"
    },
    phoneWrapperMobile: {
      marginTop: `${px2vwMo(26)}`,
      display: "flex",
      alignItems: "center"
    },
    phoneIconMobile: {
      fontSize: `${px2vwMo(28)}`
    },
    emailIconMobile: {
      fontSize: `${px2vwMo(28)}`
    },
    emailWrapperMobile: {
      marginTop: `${px2vwMo(24)}`,
      display: "flex",
      alignItems: "center"
    },
    phoneTextMobile: {
      fontSize: `${px2vwMo(22)}`,
      lineHeight: `${px2vwMo(24)}`,
      color: "#2699FB",
      marginLeft: `${px2vwMo(10)}`
    },
    emailTextMobile: {
      fontSize: `${px2vwMo(22)}`,
      lineHeight: `${px2vwMo(24)}`,
      color: "#2699FB",
      marginLeft: `${px2vwMo(10)}`
    },
    contactArrowWrapperMobile: {
      marginTop: `${px2vwMo(23)}`
    },
    arrowIconMobile: {
      fontSize: `${px2vwMo(17)}`,
      marginLeft: `${px2vwMo(10)}`
    },
    sendBtnMobile: {
      height: `${px2vwMo(68)}`,
      width: "100%",
      borderRadius: `${px2vwMo(8)}`,
      fontSize: `${px2vwMo(24)}`,
      color: "#2699FB",
      lineHeight: `${px2vwMo(30)}`,
      fontWeight: "bold"
    },
    contactTextAreaWrapper: {
      width: "100%",
      height: `${px2vw(120)}`,
      borderRadius: `${px2vw(8)}`,
      background: "none",
      marginTop: `${px2vw(60)}`
    },
    contactTextAreaWrapperMobile: {
      width: "100%",
      height: `${px2vwMo(271)}`,
      borderRadius: `${px2vwMo(8)}`,
      background: "none",
      marginTop: `${px2vwMo(40)}`
    },
    btnWrapperMobile: {
      alignSelf: "stretch"
    },
    contactTextArea: {
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      opacity: 0.6,
      boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30",
      padding: theme.spacing(2),
      borderRadius: `${px2vw(8)}`
    },
    contactTextAreaMobile: {
      width: "100%",
      height: "100%!important",
      border: "none",
      outline: "none",
      opacity: 0.6,
      boxShadow: "inset 3px 3px 3px 3px #30cfda5d, 3px 3px 3px 3px #7b3bed30",
      padding: theme.spacing(2),
      borderRadius: `${px2vwMo(8)}`,
      fontSize: `${px2vwMo(20)}!important`,
      lineHeight: `${px2vwMo(23)}!important`
    },
    contactRightTitle: {
      fontSize: `${px2vw(20)}`,
      color: "#000",
      lineHeight: `${px2vw(24)}`,
      marginBottom: theme.spacing(1.5)
    },
    contactRightText: {
      fontSize: `${px2vw(16)}`,
      lineHeight: `${px2vw(18)}`,
      color: "#2699FB",
      marginLeft: theme.spacing(1)
    },
    contactRightBtn: {
      width: `${px2vw(189)}`,
      height: `${px2vw(52)}`,
      backgroundColor: "#fff",
      borderRadius: `${px2vw(8)}`,
      opacity: 0.5,
      marginTop: theme.spacing(1.5)
    },
    phoneWrapper: {
      marginBottom: theme.spacing(1.5),
      display: "flex",
      alignItems: "center"
    },
    emailWrapper: {
      marginBottom: theme.spacing(1.5),
      display: "flex",
      alignItems: "center"
    }
  })
);
export interface ILogoIconProps {}
const LogoIcon: React.FC<ILogoIconProps> = (props: ILogoIconProps) => (
  <SvgIcon component={logoSvg} viewBox="0 0 53 53"></SvgIcon>
);
export interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const dispatch = useDispatch();
  const [idx, setIdx] = useState();
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const {
    appBarServiceMenuVisible,
    appBarTechnologiesMenuVisible,
    appBarTechnologiesProgrammingLanguagesSubMenuVisible,
    appBarTechnologiesAdvancedTechnologiesSubMenuVisible,
    appBarTechnologiesCloudTechnologiesSubMenuVisible,
    appBarSolutionsMenuVisible,
    appBarBlogAndNewsMenuVisible
  } = useSelector((state: RootState) => state.global);
  const [menuOpen, setMenuOpen] = useState(false);
  /*useEffect(() => {
    var ballTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var circleTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      delay: 2000,
      loop: true
    });
    var circleBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var circleSBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var cubeTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var cubeBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var eggTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var rectTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var rectBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var tetrahedronTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var tetrahedronBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var triangleTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    var triangleBTl = anime.timeline({
      easing: "linear",
      duration: 3000,
      loop: true
    });
    ballTl.add({
      targets: ["#ball"],
      top: 100,
      left: "1300px",
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 40000
    });
    circleTl.add({
      targets: ["#circle"],
      top: -300,
      left: "700px",
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 0,
      duration: 40000
    });
    circleBTl.add({
      targets: ["#circleB"],
      top: 800,
      left: "2600px",
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 500,
      duration: 50000
    });
    circleSBTl.add({
      targets: ["#circleSB"],
      left: "2000px",
      top: -200,
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 50000,
      duration: 60000
    });
    cubeTl.add({
      targets: ["#cube"],
      left: "1500px",
      top: -400,
      scale: [2, 2],
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 33000,
      duration: 40000
    });
    cubeBTl.add({
      targets: ["#cubeB"],
      left: "1400px",
      top: -600,
      delay: 3000,
      scale: [0.5, 0.5],
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 50000
    });
    eggTl.add({
      targets: ["#egg"],
      left: "1100px",
      top: -400,
      delay: 40000,
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 30000
    });
    rectTl.add({
      targets: ["#rect"],
      left: "900px",
      top: -300,
      delay: 10000,
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 40000
    });
    rectBTl.add({
      targets: ["#rectB"],
      left: "1300px",
      top: "-600px",
      scale: [0.5, 0.5],
      delay: 34000,
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 50000
    });
    tetrahedronTl.add({
      targets: ["#tetrahedron"],
      left: "900px",
      top: 100,
      delay: 21000,
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 40000
    });
    tetrahedronBTl.add({
      targets: ["#tetrahedronB"],
      left: "1300px",
      top: 200,
      delay: 1600,
      scale: [0.8, 0.8],
      rotate: function () {
        return anime.random(-360, 360);
      },
      duration: 50000
    });
    triangleTl.add({
      targets: ["#triangle"],
      left: "2000px",
      top: 100,
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 9000,
      duration: 40000
    });
    triangleBTl.add({
      targets: ["#triangleB"],
      left: "1500px",
      top: 0,
      rotate: function () {
        return anime.random(-360, 360);
      },
      delay: 14000,
      duration: 50000
    });
  }, []);*/
  const handleChange = useCallback((index) => {
    setIdx(index);
  }, []);
  const handleSubClick = useCallback(
    (subMenuState: string) => {
      console.log(" handling sub-click!");
      if (subMenuState === "appBarTechnologiesProgrammingLanguagesSubMenuVisible") {
        // dispatch(setAppBarTechnologiesMenuVisible(!appBarTechnologiesMenuVisible));
        dispatch(
          setAppBarTechnologiesProgrammingLanguagesSubMenuVisible(
            !appBarTechnologiesProgrammingLanguagesSubMenuVisible
          )
        );
      } else if (subMenuState === "appBarTechnologiesAdvancedTechnologiesSubMenuVisible") {
        dispatch(
          setAppBarTechnologiesAdvancedTechnologiesSubMenuVisible(
            !appBarTechnologiesAdvancedTechnologiesSubMenuVisible
          )
        );
      } else if (subMenuState === "appBarTechnologiesCloudTechnologiesSubMenuVisible") {
        dispatch(
          setAppBarTechnologiesCloudTechnologiesSubMenuVisible(
            !appBarTechnologiesCloudTechnologiesSubMenuVisible
          )
        );
      } else {
        console.log("do nothing");
      }
    },
    [
      appBarTechnologiesProgrammingLanguagesSubMenuVisible,
      appBarTechnologiesAdvancedTechnologiesSubMenuVisible,
      appBarTechnologiesCloudTechnologiesSubMenuVisible
    ]
  );
  const toggleSearchOpen = useCallback(() => {
    let searchInputVar = anime.timeline({
      easing: "easeInOutQuad",
      duration: 400,
      loop: false
    });
    if (!searchOpen) {
      const tabsDiv = document.getElementById("tabsWrapper");
      let width = 480;
      let ww = window.innerWidth;
      if (ww >= 1024) {
        width = ww * 0.36;
      } else {
        width = ww * 0.78;
      }
      searchInputVar
        .add({
          targets: ["#tabsWrapper"],
          translateY: -50,
          opacity: 0,
          duration: 180
        })
        .add({
          targets: ["#searchInputWrapper"],
          width: width,
          opacity: 1,
          delay: 90,
          duration: 220
        });
    } else {
      searchInputVar
        .add({
          targets: ["#searchInputWrapper"],
          width: 12,
          opacity: 0,
          duration: 180
        })
        .add({
          targets: ["#tabsWrapper"],
          translateY: 0,
          opacity: 1,
          duration: 220
        });
    }
    setSearchOpen(!searchOpen);
    console.log(" searchOpen: ", searchOpen);
  }, [searchOpen]);
  const toggleUserOpen = useCallback(() => {
    console.log(" toggle UserOpen! Now UserState: " + userOpen + " and !userOpen: " + !userOpen);
    setUserOpen(!userOpen);
  }, [userOpen]);
  const cbMenu = useCallback(() => {
    console.log(" MainMenu CallBack!");
  }, []);
  const cb = useCallback(() => {
    var textWrapper = document.querySelector("#service");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: `#service .letter`,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
    textWrapper = null;
  }, []);
  const cb1 = useCallback(() => {
    var textWrapper = document.querySelector("#technologies");
    console.log("technologies");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: `#technologies .letter`,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
    textWrapper = null;
  }, []);
  const cb2 = useCallback(() => {
    var textWrapper = document.querySelector("#solutions");
    console.log("solutions");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: `#solutions .letter`,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
    textWrapper = null;
  }, []);
  const cb3 = useCallback(() => {
    var textWrapper = document.querySelector("#blogAndNews");
    console.log("blogandnews");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      ) as string;
    }
    anime.timeline({ loop: false }).add({
      targets: `#blogAndNews .letter`,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1)
    });
    textWrapper = null;
  }, []);

  const tabletOrDesktop = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(" now is TabletOrDesktop: " + tabletOrDesktop);
  useEffect(() => {
    setMenuOpen(false);
    console.log(" setMenuOpen to: " + menuOpen);
  }, [tabletOrDesktop]);
  const toggleMenuOpen = useCallback(() => {
    console.log(
      " toggle menuOpenOpen! Now menuOpenState: " + menuOpen + " and !menuOpen: " + !menuOpen
    );
    setMenuOpen(!menuOpen);
  }, [menuOpen]);
  return (
    <div className={classes.root}>
      {!tabletOrDesktop ? (
        <>
          {/*showing DeskTop of Appbar*/}
          <AppBar className={classes.appBar} position={"fixed"}>
            <Toolbar className={classes.toolbar}>
              <Link href={"/"} className={classes.toolbarGrp1}>
                <LogoIcon />
                <span className={classes.nameText}>ModuleX</span>
              </Link>
              <div className={classes.toolbarGrp2}>
                <div id={"tabsWrapper"} className={classes.tabsWrapper}>
                  <Tabs
                    onChange={handleChange}
                    menus={["services", "technologies", "solutions", "blog&news"]}></Tabs>
                </div>
                <div id={"searchInputWrapper"} className={classes.searchInputWrapper}>
                  <SearchIcon />
                  <InputBase
                    className={classes.searchInput}
                    placeholder={"Type & Search For Our Services."}
                  />
                </div>
              </div>
              <div className={classes.toolbarGrp3}>
                {searchOpen ? (
                  <Button
                    key={"close"}
                    onClick={toggleSearchOpen}
                    className={classes.searchCloseBtn}>
                    <CloseIcon />
                  </Button>
                ) : (
                  <Button key={"open"} onClick={toggleSearchOpen} className={classes.searchBtn}>
                    <SearchIcon />
                  </Button>
                )}
                <Button
                  key={"user"}
                  onClick={toggleUserOpen}
                  className={clsx(classes.userBtn, { [classes.active]: userOpen })}>
                  <UserIcon />
                </Button>
                <Switch />
              </div>
            </Toolbar>
          </AppBar>
          <div className={classes.offset}></div>
          <Drawer cb={cb} key={"serviceMenu"} visible={idx == 0 && appBarServiceMenuVisible}>
            <div className={classes.serviceContainer}>
              <div className={classes.serviceCol1}>
                <div className={clsx(classes.serviceTitle, globalClasses.cardTitleDashLineBlue)}>
                  Services
                </div>
                <span className="text-wrapper">
                  {/*<span className={globalClasses.lineBlue} />*/}
                  <span id={"service"} className="letters">
                    Our service portfolio covers an entire software development life cycle and meets
                    varied business needs.
                  </span>
                </span>
                <div className={classes.serviceContactBtnWrapper}>
                  <ButtonBase
                    className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                    disableRipple>
                    CONTACT
                  </ButtonBase>
                </div>
              </div>
              <div className={classes.serviceCol3}>
                <Link className={classes.serviceCol3Link} href={"#"}>
                  Software Development
                </Link>
                <Link className={classes.serviceCol3Link} href={"/services/WebDesignService"}>
                  UI/UX Design
                </Link>
                <Link className={classes.serviceCol3Link} href={"#"}>
                  Testing And QA
                </Link>
                <Link className={classes.serviceCol3Link} href={"#"}>
                  Infrastructure Services
                </Link>
              </div>
              <div className={classes.serviceCol4}>
                <Link className={classes.serviceCol4Link} href={"#"}>
                  Data Analytics
                </Link>
                <Link className={classes.serviceCol4Link} href={"#"}>
                  IT OutSourcing
                </Link>
                <Link className={classes.serviceCol4Link} href={"#"}>
                  IT Consulting
                </Link>
                <Link className={classes.serviceCol4Link} href={"/services/ITSupport"}>
                  IT Support
                </Link>
              </div>
            </div>
          </Drawer>
          <Drawer
            cb={cb1}
            key={"technologiesMenu"}
            visible={idx == 1 && appBarTechnologiesMenuVisible}>
            <div className={classes.technologiesContainer}>
              <div className={classes.technologiesCol1}>
                <div className={clsx(classes.serviceTitle, globalClasses.cardTitleDashLineBlue)}>
                  Technologies
                </div>
                <span className="text-wrapper">
                  <span className="line line1"></span>
                  <span id={"technologies"} className="letters">
                    Our expertise spans all major technologies and platforms, and advances to
                    innovative technology trends.
                  </span>
                </span>
                <div className={classes.serviceContactBtnWrapper}>
                  <ButtonBase
                    className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                    disableRipple>
                    CONTACT
                  </ButtonBase>
                </div>
              </div>
              <div className={classes.technologiesCol2}>
                <div>
                  <ButtonBase
                    className={clsx(classes.serviceCol2Btn, {
                      [classes.active]: appBarTechnologiesProgrammingLanguagesSubMenuVisible
                    })}
                    onClick={() =>
                      handleSubClick("appBarTechnologiesProgrammingLanguagesSubMenuVisible")
                    }
                    disableRipple>
                    Programming Languages
                  </ButtonBase>
                </div>
                <div>
                  <ButtonBase
                    className={clsx(classes.serviceCol2Btn, {
                      [classes.active]: appBarTechnologiesAdvancedTechnologiesSubMenuVisible
                    })}
                    onClick={() =>
                      handleSubClick("appBarTechnologiesAdvancedTechnologiesSubMenuVisible")
                    }
                    disableRipple>
                    Advanced Technologies
                  </ButtonBase>
                </div>
                <div>
                  <ButtonBase
                    className={clsx(classes.serviceCol2Btn, {
                      [classes.active]: appBarTechnologiesCloudTechnologiesSubMenuVisible
                    })}
                    onClick={() =>
                      handleSubClick("appBarTechnologiesCloudTechnologiesSubMenuVisible")
                    }
                    disableRipple>
                    Cloud Technologies
                  </ButtonBase>
                </div>
              </div>
              {appBarTechnologiesProgrammingLanguagesSubMenuVisible && (
                <>
                  <div className={classes.technologiesCol3}>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Java
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Python
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Golang
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      C++
                    </Link>
                  </div>
                  <div className={classes.technologiesCol4}>
                    <Link className={classes.serviceCol4Link} href={"#"}>
                      JavaScript
                    </Link>
                    <Link className={classes.serviceCol4Link} href={"#"}>
                      NodeJS
                    </Link>
                    <Link className={classes.serviceCol4Link} href={"#"}>
                      PHP
                    </Link>
                    <Link className={classes.serviceCol4Link} href={"#"}>
                      .Net
                    </Link>
                  </div>
                </>
              )}
              {appBarTechnologiesAdvancedTechnologiesSubMenuVisible && (
                <>
                  <div className={classes.technologiesCol3}>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Data Science
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Artificial Intelligence
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Virtual Reality
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Big Data
                    </Link>
                  </div>
                  <div className={classes.technologiesCol4}>
                    <Link className={classes.serviceCol4Link} href={"#"}>
                      Internet Of Things
                    </Link>
                    <Link className={classes.serviceCol4Link} href={"#"}>
                      Cloud Computing
                    </Link>
                  </div>
                </>
              )}
              {appBarTechnologiesCloudTechnologiesSubMenuVisible && (
                <>
                  <div className={classes.technologiesCol3}>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Amazon Web Service
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      MicroSoft Azure
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Saleforce
                    </Link>
                    <Link className={classes.serviceCol3Link} href={"#"}>
                      Google Cloud Platform
                    </Link>
                  </div>
                </>
              )}
            </div>
          </Drawer>
          <Drawer cb={cb2} key={"solutionsMenu"} visible={idx == 2 && appBarSolutionsMenuVisible}>
            <div className={classes.serviceContainer}>
              <div className={classes.serviceCol1}>
                <div className={clsx(classes.serviceTitle, globalClasses.cardTitleDashLineBlue)}>
                  Solutions
                </div>
                <span className="text-wrapper">
                  <span className="line line1"></span>
                  <span id={"solutions"} className="letters">
                    We build on the IT domain expertise and industry knowledge to design sustainable
                    technology solutions.
                  </span>
                </span>
                <div className={classes.serviceContactBtnWrapper}>
                  <ButtonBase
                    className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                    disableRipple>
                    CONTACT
                  </ButtonBase>
                </div>
              </div>
              <div className={classes.serviceCol3}>
                <Link className={classes.serviceCol3Link} href={"#"}>
                  CRM
                </Link>
                <Link className={classes.serviceCol3Link} href={"#"}>
                  ERP
                </Link>
                <Link className={classes.serviceCol3Link} href={"#"}>
                  Marketing & Advertising
                </Link>
                <Link className={classes.serviceCol3Link} href={"#"}>
                  Data Anylytics
                </Link>
              </div>
              <div className={classes.serviceCol4}>
                <Link className={classes.serviceCol4Link} href={"#"}>
                  E-commerce
                </Link>
                <Link className={classes.serviceCol4Link} href={"#"}>
                  Supply Chain Management
                </Link>
                <Link className={classes.serviceCol4Link} href={"#"}>
                  Human Resources
                </Link>
                <Link className={classes.serviceCol4Link} href={"#"}>
                  E-Learning
                </Link>
              </div>
            </div>
          </Drawer>
          <Drawer
            cb={cb3}
            key={"blogAndNewsMenu"}
            visible={idx == 3 && appBarBlogAndNewsMenuVisible}>
            <div className={classes.serviceContainer}>
              <div className={classes.serviceCol1}>
                <div className={clsx(classes.serviceTitle, globalClasses.cardTitleDashLineBlue)}>
                  Blogs & News
                </div>
                <span className="text-wrapper">
                  <span className="line line1"></span>
                  <span id={"blogAndNews"} className="letters">
                    Knowing everything about us and the IT industry...{" "}
                  </span>
                </span>
                <div className={classes.serviceContactBtnWrapper}>
                  <ButtonBase
                    className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                    disableRipple>
                    CONTACT
                  </ButtonBase>
                </div>
              </div>
              <div className={classes.serviceCol1}>
                <div>
                  <Link className={classes.serviceCol4Link} href={"#"}>
                    Check out our updates
                  </Link>
                </div>
              </div>
            </div>
          </Drawer>
        </>
      ) : (
        <div className={classes.topIndex}>
          {/*showing mobile of Appbar*/}
          <AppBar className={classes.appBar} position={"fixed"}>
            <Toolbar className={classes.toolbarMobile}>
              <Link href={"/"} className={classes.toolbarGrp1Mobile}>
                <LogoIcon />
                <span className={classes.nameTextMobile}>ModuleX</span>
              </Link>
              <div className={classes.toolbarGrp3Mobile}>
                <Switch />
                {menuOpen ? (
                  <Button
                    key={"menu"}
                    onClick={toggleMenuOpen}
                    className={clsx(classes.menuBtnMobile, { [classes.active]: menuOpen })}>
                    <CloseIcon />
                  </Button>
                ) : (
                  <Button
                    key={"menuClose"}
                    onClick={toggleMenuOpen}
                    className={clsx(classes.menuBtnMobile, { [classes.active]: menuOpen })}>
                    <MenuIcon />
                  </Button>
                )}
              </div>
            </Toolbar>
          </AppBar>
          <div className={classes.offset}></div>
          <Drawer cb={cbMenu} key={"mainMenu"} visible={menuOpen == true}>
            <div className={classes.toolbarMobileContainer}>
              <div className={classes.toolbarGrp2Mobile}>
                {searchOpen ? (
                  <Button
                    key={"close"}
                    onClick={toggleSearchOpen}
                    className={classes.searchCloseBtn}>
                    <CloseIcon />
                  </Button>
                ) : (
                  <Button key={"open"} onClick={toggleSearchOpen} className={classes.searchBtn}>
                    <SearchIcon />
                  </Button>
                )}
                <Button
                  key={"user"}
                  onClick={toggleUserOpen}
                  className={clsx(classes.userBtn, { [classes.active]: userOpen })}>
                  <UserIcon />
                </Button>
              </div>
              <div className={classes.toolbarGrp2Mobile}>
                <div
                  id={"tabsWrapper"}
                  className={clsx(classes.tabsWrapperMobile, {
                    [globalClasses.pointerEventsNone]: searchOpen
                  })}>
                  <Tabs
                    onChange={handleChange}
                    menus={["services", "technologies", "solutions", "blog&news"]}></Tabs>
                </div>
                <div id={"searchInputWrapper"} className={classes.searchInputWrapper}>
                  <SearchIcon />
                  <InputBase
                    className={classes.searchInput}
                    placeholder={"Type & Search For Our Services."}
                  />
                </div>
              </div>
            </div>
            <Drawer cb={cb} key={"serviceMenu"} visible={idx == 0 && appBarServiceMenuVisible}>
              <div className={classes.serviceContainerMobile}>
                <div className={classes.serviceCol3Mobile}>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    Software Development
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"/services/WebDesignService"}>
                    UI/UX Design
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    Testing And QA
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    Infrastructure Services
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    Data Analytics
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    IT OutSourcing
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    IT Consulting
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"/services/ITSupport"}>
                    IT Support
                  </Link>
                </div>
                <div className={classes.serviceCol1Mobile}>
                  <div className={classes.serviceTitleMobile}>Services</div>
                  <div className={globalClasses.cardTitleDashLineBlueMobile} />
                  <span className="text-wrapper">
                    <span id={"service"} className="letters">
                      Our service portfolio covers an entire software development life cycle and
                      meets varied business needs.
                    </span>
                  </span>
                  <div className={classes.serviceContactBtnWrapperMobile}>
                    <ButtonBase
                      className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                      disableRipple>
                      CONTACT
                    </ButtonBase>
                  </div>
                </div>
              </div>
            </Drawer>
            <Drawer
              cb={cb1}
              key={"technologiesMenu"}
              visible={idx == 1 && appBarTechnologiesMenuVisible}>
              <div className={classes.technologiesContainerMobile}>
                <div className={classes.technologiesCol2Mobile}>
                  <div>
                    <ButtonBase
                      className={clsx(classes.serviceCol2BtnMobile, {
                        [classes.active]: appBarTechnologiesProgrammingLanguagesSubMenuVisible
                      })}
                      onClick={() =>
                        handleSubClick("appBarTechnologiesProgrammingLanguagesSubMenuVisible")
                      }
                      disableRipple>
                      Programming Languages
                    </ButtonBase>
                  </div>
                  <div>
                    <ButtonBase
                      className={clsx(classes.serviceCol2BtnMobile, {
                        [classes.active]: appBarTechnologiesAdvancedTechnologiesSubMenuVisible
                      })}
                      onClick={() =>
                        handleSubClick("appBarTechnologiesAdvancedTechnologiesSubMenuVisible")
                      }
                      disableRipple>
                      Advanced Technologies
                    </ButtonBase>
                  </div>
                  <div>
                    <ButtonBase
                      className={clsx(classes.serviceCol2BtnMobile, {
                        [classes.active]: appBarTechnologiesCloudTechnologiesSubMenuVisible
                      })}
                      onClick={() =>
                        handleSubClick("appBarTechnologiesCloudTechnologiesSubMenuVisible")
                      }
                      disableRipple>
                      Cloud Technologies
                    </ButtonBase>
                  </div>
                </div>
                {appBarTechnologiesProgrammingLanguagesSubMenuVisible && (
                  <>
                    <div className={classes.technologiesCol3Mobile}>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Java
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Python
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Golang
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        C++
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        JavaScript
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        NodeJS
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        PHP
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        .Net
                      </Link>
                    </div>
                  </>
                )}
                {appBarTechnologiesAdvancedTechnologiesSubMenuVisible && (
                  <>
                    <div className={classes.technologiesCol3Mobile}>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Data Science
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Artificial Intelligence
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Virtual Reality
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Big Data
                      </Link>
                      <Link className={classes.serviceCol4Link} href={"#"}>
                        Internet Of Things
                      </Link>
                      <Link className={classes.serviceCol4Link} href={"#"}>
                        Cloud Computing
                      </Link>
                    </div>
                  </>
                )}
                {appBarTechnologiesCloudTechnologiesSubMenuVisible && (
                  <>
                    <div className={classes.technologiesCol3Mobile}>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Amazon Web Service
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        MicroSoft Azure
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Saleforce
                      </Link>
                      <Link className={classes.serviceCol3Link} href={"#"}>
                        Google Cloud Platform
                      </Link>
                    </div>
                  </>
                )}
                <div className={classes.technologiesCol1Mobile}>
                  <div className={classes.serviceTitleMobile}>Technologies</div>
                  <div className={globalClasses.cardTitleDashLineBlueMobile} />
                  <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span id={"technologies"} className="letters">
                      Our expertise spans all major technologies and platforms, and advances to
                      innovative technology trends.
                    </span>
                  </span>
                  <div className={classes.serviceContactBtnWrapperMobile}>
                    <ButtonBase
                      className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                      disableRipple>
                      CONTACT
                    </ButtonBase>
                  </div>
                </div>
              </div>
            </Drawer>
            <Drawer cb={cb2} key={"solutionsMenu"} visible={idx == 2 && appBarSolutionsMenuVisible}>
              <div className={classes.serviceContainerMobile}>
                <div className={classes.serviceCol3Mobile}>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    CRM
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    ERP
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    Marketing & Advertising
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    Data Anylytics
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    E-commerce
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    Supply Chain Management
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    Human Resources
                  </Link>
                  <Link className={classes.serviceCol3Link} href={"#"}>
                    E-Learning
                  </Link>
                </div>
                <div className={classes.serviceCol1Mobile}>
                  <div className={classes.serviceTitleMobile}>Solutions</div>
                  <div className={globalClasses.cardTitleDashLineBlueMobile} />
                  <span className="text-wrapper">
                    <span id={"solutions"} className="letters">
                      We build on the IT domain expertise and industry knowledge to design
                      sustainable technology solutions.
                    </span>
                  </span>
                  <div className={classes.serviceContactBtnWrapperMobile}>
                    <ButtonBase
                      className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                      disableRipple>
                      CONTACT
                    </ButtonBase>
                  </div>
                </div>
              </div>
            </Drawer>
            <Drawer
              cb={cb3}
              key={"blogAndNewsMenu"}
              visible={idx == 3 && appBarBlogAndNewsMenuVisible}>
              <div className={classes.serviceContainerMobile}>
                <div className={classes.serviceCol3Mobile}>
                  <div>
                    <Link className={classes.serviceCol4Link} href={"#"}>
                      Check out our updates
                    </Link>
                  </div>
                </div>
                <div className={classes.serviceCol1Mobile}>
                  <div className={classes.serviceTitleMobile}>Blogs & News</div>
                  <div className={globalClasses.cardTitleDashLineBlueMobile} />
                  <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span id={"blogAndNews"} className="letters">
                      Knowing everything about us and the IT industry...{" "}
                    </span>
                  </span>
                  <div className={classes.serviceContactBtnWrapperMobile}>
                    <ButtonBase
                      className={clsx(classes.serviceContactBtn, { [classes.active]: false })}
                      disableRipple>
                      CONTACT
                    </ButtonBase>
                  </div>
                </div>
              </div>
            </Drawer>
          </Drawer>
        </div>
      )}
      <div className={classes.content}>
        <div className={classes.bg}></div>
        <img id={"circle"} className={classes.circle} src={"/circle.png"} />
        <img id={"ball"} className={classes.ball} src={"/ball.png"} />
        <img id={"rect"} className={classes.rect} src={"/rect.png"} />
        <img id={"triangle"} className={classes.triangle} src={"/triangle.png"} />
        <img id={"cube"} className={classes.cube} src={"/cube.png"} />
        <img className={classes.egg} id={"egg"} src={"/egg.png"} />
        <img id="tetrahedron" className={classes.tetrahedron} src={"/tetrahedron.png"} />

        <img id={"circleB"} className={classes.circleB} src={"/circleB.png"} />
        <img id={"circleSB"} className={classes.circleSB} src={"/circleSB.png"} />
        <img id="cubeB" className={classes.cubeB} src={"/cubeB.png"} />
        <img id={"rectB"} className={classes.rectB} src={"/rectB.png"} />
        <img id="tetrahedronB" className={classes.tetrahedronB} src={"/tetrahedronB.png"} />
        <img id={"triangleB"} className={classes.triangleB} src={"/triangleB.png"} />

        {children}

        {tabletOrDesktop ? (
          <Card
            customStyles={clsx(classes.contactSectionMobile, globalClasses.cardGlassEffect)}
            blurActive>
            <div className={clsx(globalClasses.cardBigTitle, globalClasses.cardTitleDashLineGold)}>
              Contact Us
            </div>
            <div className={classes.contactFormLabelMobile}>
              Drop us a line! We are here to answer your questions 24/7.
            </div>
            <div
              className={clsx(
                classes.contactInputWrapperMobile,
                globalClasses.cardBlurBtnBoxShadow
              )}>
              <InputBase
                classes={{ root: clsx(classes.contactInputMobile, globalClasses.cardSmallText) }}
                placeholder="Your FirstName:"
              />
            </div>
            <div
              className={clsx(
                classes.contactInputWrapperMobile,
                globalClasses.cardBlurBtnBoxShadow
              )}>
              <InputBase
                className={clsx(classes.contactInputMobile, globalClasses.cardSmallText)}
                placeholder="Your LastName:"
              />
            </div>
            <div
              className={clsx(
                classes.contactInputWrapperMobile,
                globalClasses.cardBlurBtnBoxShadow
              )}>
              <InputBase
                className={clsx(classes.contactInputMobile, globalClasses.cardSmallText)}
                placeholder="Your Email:"
              />
            </div>
            <div
              className={clsx(
                classes.contactInputWrapperMobile,
                globalClasses.cardBlurBtnBoxShadow
              )}>
              <InputBase
                className={clsx(classes.contactInputMobile, globalClasses.cardSmallText)}
                placeholder="Your Number:"
              />
            </div>
            <div className={classes.contactTextAreaWrapperMobile}>
              <TextareaAutosize
                className={clsx(classes.contactTextAreaMobile, globalClasses.cardSmallText)}
                rowsMin={4}
                placeholder="How can we help you?"
              />
            </div>
            <div className={classes.contactLinkMobile}>
              <div className={classes.contactLeftMobile}>
                <div className={classes.contactTitleMobile}>Our contact details</div>
                <div className={classes.phoneWrapperMobile}>
                  <PhoneIcon classes={{ root: classes.phoneIconMobile }} />
                  <span className={classes.phoneTextMobile}>+ 1 626-265-5257</span>
                </div>
                <div className={classes.emailWrapperMobile}>
                  <EmailIcon classes={{ root: classes.emailIconMobile }} />
                  <span className={classes.emailTextMobile}>zion@galaxycgi.com</span>
                </div>
              </div>
              <div className={classes.contactRightMobile}>
                <div className={classes.contactTitleMobile}>Press inquires</div>
                <div className={classes.contactArrowWrapperMobile}>
                  <span className={classes.contactTextMobile}>GET IN TOUCH WITH US</span>
                  <ArrowIcon classes={{ root: classes.arrowIconMobile }} />
                </div>
              </div>
            </div>
            <div className={classes.btnWrapperMobile}>
              <ButtonBase
                className={clsx(globalClasses.cardBlurBtn, classes.sendBtnMobile)}
                disableRipple>
                SEND IT!
              </ButtonBase>
            </div>
          </Card>
        ) : (
          <Card
            customStyles={clsx(classes.contactSection, globalClasses.cardGlassEffect)}
            blurActive={true}>
            <div className={clsx(globalClasses.cardBigTitle, globalClasses.cardTitleDashLineGold)}>
              Contact Us
            </div>
            <div className={classes.contactLeft}>
              <div className={classes.contactFormLabel}>
                Drop us a line! We are here to answer your questions 24/7.
              </div>
              <div className={classes.inputGroup}>
                <div
                  className={clsx(classes.contactInputWrapper, globalClasses.cardBlurBtnBoxShadow)}>
                  <InputBase
                    className={clsx(classes.contactInput, globalClasses.cardSmallText)}
                    placeholder="Your FirstName:"
                  />
                </div>
                <div
                  className={clsx(classes.contactInputWrapper, globalClasses.cardBlurBtnBoxShadow)}>
                  {" "}
                  <InputBase
                    className={clsx(classes.contactInput, globalClasses.cardSmallText)}
                    placeholder="Your LastName:"
                  />
                </div>
                <div
                  className={clsx(classes.contactInputWrapper, globalClasses.cardBlurBtnBoxShadow)}>
                  {" "}
                  <InputBase
                    className={clsx(classes.contactInput, globalClasses.cardSmallText)}
                    placeholder="Your Email:"
                  />
                </div>
                <div
                  className={clsx(classes.contactInputWrapper, globalClasses.cardBlurBtnBoxShadow)}>
                  {" "}
                  <InputBase
                    className={clsx(classes.contactInput, globalClasses.cardSmallText)}
                    placeholder="Your Number:"
                  />
                </div>
              </div>
              <div className={classes.contactTextAreaWrapper}>
                <TextareaAutosize
                  className={clsx(classes.contactTextArea, globalClasses.cardSmallText)}
                  rowsMin={4}
                  placeholder="How can we help you?"
                />
              </div>
            </div>
            <div className={classes.contactRight}>
              <div className={classes.contactRightTitle}>Our contact details</div>
              <div className={classes.phoneWrapper}>
                <PhoneIcon />
                <span className={classes.contactRightText}>+ 1 626-265-5257</span>
              </div>
              <div className={classes.emailWrapper}>
                <EmailIcon />
                <span className={classes.contactRightText}>zion@galaxycgi.com</span>
              </div>
              <div className={classes.contactRightTitle}>GET IN TOUCH WITH US</div>
              {/*<div className={classes.contactRightText}>GET IN TOUCH WITH US</div>*/}
              <div className={classes.contactBtnWrapper}>
                <ButtonBase className={globalClasses.cardBlurBtn} disableRipple>
                  SEND IT!
                </ButtonBase>
              </div>
            </div>
          </Card>
        )}
      </div>
      <IconButton className={classes.upAnchor}>
        <UPIcon />
      </IconButton>
      <IconButton className={classes.chatBtn}>
        <ChatIcon />
      </IconButton>
        {tabletOrDesktop ? <FooterM/>:<Footer />}
    </div>
  );
};
export default Layout;
