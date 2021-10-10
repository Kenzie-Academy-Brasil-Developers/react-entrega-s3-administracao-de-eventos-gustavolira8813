import styled from "styled-components";

export const List = styled.li`
  display: flex;
  flex-direction: row;
  border: 1px solid;
  margin: 5px;
  padding: 5px;
  height: 250px;
  justify-content: space-between;
  width: 80vw;
  text-align: -webkit-center;

  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  p:nth-child(1) {
    font-size: 1.5em;
    font-weight: bold;
  }
  p:nth-child(3) {
    font-size: 0.5em;
  }
  p:nth-child(3):hover {
    font-size: 0.5em;
    -webkit-line-clamp: 7;
    content: normal;
  }
  img {
    width: 150px;
    height: 170px;
  }
  button {
    background-color: green;
    width: 100px;
    background-color: #00bcd4;
    color: black;
    margin: 3px 0;
    font-weight: bold;
  }
  button:hover {
    filter: brightness(1.4);
    background-color: #3131afbf;
  }
  div {
    align-self: center;
  }
  div:nth-child(3) {
  }
`;
