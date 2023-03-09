import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #333;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100px;
        cursor: pointer;
      }
    }
    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }

    /* 进入动画 */
    .pic-enter {
      /* 下面两种写法都是ok的 */
      /* transform: ${props => props.isNext ? 'translateX(100%)' : 'translateX(-100%)'}; */
      transform: translateX(${props => props.isNext ? '100%' : '-100%'});
      opacity: 0;
    }
    .pic-enter-active {
      transition: all 200ms ease;
      transform: translateX(0px);
      opacity: 1;
    }
    .pic-enter-done {
      transform: translateX(0px);
      opacity: 1;
    }
    /* 离开动画 */
    .pic-exit {
      opacity: 1;
    }
    .pic-exit-active {
      translate: opacity 200ms ease;
      opacity: 0;
    }
    .pic-exit-done {
      opacity: 0;
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 15px;
      border: 10px;
      max-width: 105vh;
      color: #fff;
      .desc {
        display: flex;
        justify-content: space-between;
        .toggle {
          cursor: pointer;
        }
      }
      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        .item {
          margin-right: 15px;
          cursor: pointer;
          img {
            height: 67px;
            opacity: 0.5;
          }
          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`