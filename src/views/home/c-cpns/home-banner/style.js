import styled from "styled-components";
// react使用图片资源：都要求使用下面的两种方式 (webpack里面的知识)
// 1) css里面的背景图片
// 2) img标签的src属性
// 方式一：使用import导入图片资源
import coverImg from "@/assets/img/cover_01.jpeg"

export const BannerWrapper = styled.div`
  height: 529px;
  /* 斜杆前面表示 background-position 属性；斜杠后边表示 background-size 属性 */
  background: url(${coverImg}) center/cover;

  /* 方式二：直接使用require引入图片资源 */
  /* background: url(${require("@/assets/img/cover_01.jpeg")}); */
`