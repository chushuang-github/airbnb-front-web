// 自定义主题颜色方式二：通过 styled-components 方式
const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222222"
  },
  // 样式混入，给 styled-components 定义的样式组件使用的
  // ${props => props.theme.mixin.boxShadow}，直接写在样式组件里面就ok了
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `
  }
}

export default theme