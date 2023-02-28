import styled from "styled-components"

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* .logo是一张svg图片父容器 */
  /* 里面svg图片的 fill 值为 "currentcolor"，表示该svg图片的颜色由距离最近的祖先容器的字体颜色决定的 */
  .logo {
    /* 从 styled-components 的 ThemeProvider 取出自定义主题的颜色 */
    color: ${props => props.theme.color.primaryColor};
    margin-left: 24px;
    cursor: pointer;
  }
`