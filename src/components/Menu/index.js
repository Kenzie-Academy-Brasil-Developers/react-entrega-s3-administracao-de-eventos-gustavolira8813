import { Button, MenuItem, MenuList } from "@material-ui/core";
import "./styles.js";
import { Link, useHistory } from "react-router-dom";
import { MenuBox } from "./styles.js";
function Menu() {
  let history = useHistory();

  const navigator = (link) => {
    history.push(`/${link}`);
  };

  return (
    <>
      <MenuBox>
        <MenuList id="composition-menu" aria-labelledby="composition-button">
          <MenuItem onClick={() => navigator("")}>Home</MenuItem>
          <MenuItem onClick={() => navigator("confra")}>Confra</MenuItem>
          <MenuItem onClick={() => navigator("casamento")}>Casamento</MenuItem>
          <MenuItem onClick={() => navigator("formatura")}>Formatura</MenuItem>
        </MenuList>
      </MenuBox>
    </>
  );
}
export default Menu;
