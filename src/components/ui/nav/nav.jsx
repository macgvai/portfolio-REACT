import React from "react";
import { Ul, Li } from "../../styled/index";
import { MenuItemLink, MenuItemText } from "./styles";

function MainNav() {
  return (
    <Ul>
      <Li>
        <MenuItemLink href="/about">
          <MenuItemText>Обо мне</MenuItemText>
        </MenuItemLink>
      </Li>
    </Ul>
  );
}

export default MainNav;
