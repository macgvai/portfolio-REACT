import styled from "styled-components";
import { keyframes } from "styled-components";
import MenuItemBg from "../../../assets/MenuItemBg.png";
import MenuItemAbout from "../../../assets/MenuItemAbout.png";

export const navAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  padding-top: 83px;
  position: relative;
  width: 108px;
  background: url(${MenuItemAbout}) center 10px no-repeat;
  &:before {
    background: url(${MenuItemBg});
    content: "";
    height: 70px;
    left: 18px;
    position: absolute;
    top: 6px;
    width: 74px;
    z-index: -1;
  }
  &:hover:before {
    animation: ${navAnimation} 1s infinite linear;
  }
`;

export const MenuItemText = styled.span`
  font-size: 16px;
  font-weight: 700;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  &:after {
    background-color: #ffb84d;
    bottom: -6px;
    content: "";
    height: 3px;
    left: 50%;
    opacity: 0;
    position: absolute;
    transition: all 1s;
    width: 0;
  }
  ${MenuItemLink}:hover &:after {
    left: 0;
    opacity: 1;
    transition: all 1s;
    width: 100%;
  }
`;
