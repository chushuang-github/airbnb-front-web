import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 20px;
  .title {
    font-size: 22px;
    color: #222;
    font-weight: 700;
    margin: 0px 0px 10px 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, .8);
  }
`