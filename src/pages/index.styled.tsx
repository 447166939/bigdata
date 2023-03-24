import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
export const CustomContainer = styled("div")`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
export const GlassEffect = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(200px);
`;
export const Header = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 100;
  margin-left: 67px;
  margin-top: 37px;
  margin-right: 41px;
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
  width: 153px;
  height: 44px;
  color: #fff;
`;
export const MyButton = styled(Button)`
  border-color: #d0d3d9 !important;
  color: #5d6679;
  width: 153px;
`;
export const AskButton = styled(Button)`
  background-image: linear-gradient(#00c6ff, #0078ff);
  width: 153px;
`;
const Test = styled("div")``;
export default Test;
