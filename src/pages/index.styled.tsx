import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
export const CustomContainer = styled("div")`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-x: hidden;
`;
export const GlassEffect = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(50px);
`;
export const Header = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 53px;
  z-index: 100;
  @media (min-width: 375px) {
  }
  @media (min-width: 414px) {
    justify-content: space-around;
  }
  @media (min-width: 768px) {
    margin-left: 67px;
    margin-top: 37px;
    margin-right: 41px;
  }
`;
export const CustomInput = styled(InputBase)`
  z-index: 100;
  flex: 1;
`;
export const EmailInput = styled(InputBase)`
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  width: 390px;
  height: 44px;
  padding-left: 14px;
`;
export const SubscribeButton = styled(Button)`
  background: linear-gradient(#00c6ff, #0078ff);
  color: #fff;
  @media (min-width: 375px) {
  }
  @media (min-width: 414px) {
    margin-left: 20px;
    font-size: 12px;
    height: 35px;
  }
  @media (min-width: 768px) {
    width: 153px;
    height: 44px;
    margin-left: 0;
    font-size: inherit;
  }
`;
export const OkButton = styled(Button)`
  color: #fff;
  @media (min-width: 375px) {
  }
  @media (min-width: 414px) {
  }
  @media (min-width: 768px) {
    width: 153px;
    height: 44px;
  }
`;
export const MyButton = styled<any>(Button)`
background-image: ${(props) => (props.isActive ? "linear-gradient(#00c6ff, #0078ff)" : "none")};
  border-color:${(props) => (props.isActive ? "#d0d3d9 !important" : "none!important")}
  color:${(props) => (props.isActive ? "#5d6679" : "")}
  width: 153px!important;
`;

export const AskButton = styled<any>(Button)`
  background-image: ${(props) => (props.isActive ? "linear-gradient(#00c6ff, #0078ff)" : "none")};
   border-color:${(props) => (props.isActive ? "#d0d3d9 !important" : "none!important")}
  color:${(props) => (props.isActive ? "#5d6679" : "")}
  width: 153px!important;
`;
const Test = styled("div")``;
export default Test;
