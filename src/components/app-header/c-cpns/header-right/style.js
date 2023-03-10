import styled from "styled-components"

// const boxShadow = `
//   transition: box-shadow 0.2s ease;
//   &:hover {
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
//   }
// `
// 注意：这个boxShadow可以直接在styled-components定义的样式组件里面使用：${boxShadow}

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  color: ${props => props.theme.text.primaryColor};

  .btns {
    display: flex;
    align-items: center;
    color: ${props => props.theme.isOpacity ? "#fff" : "#000"};

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: ${props => props.theme.isOpacity ? "rgba(255, 255, 255, .2)" : "#f5f5f5"};
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    } */
    /* 过渡动画的混入，在 theme -> index.js 里面定义的过渡动画，混入到这里面来使用 */
    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      z-index: 999;
      right: 0;
      top: 54px;
      width: 240px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      color: #666;
      .top, .bottom {
        padding: 10px 0px;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0px 16px;
          &:hover {
            background: #f6f6f6;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`