import { Button, MenuItem, MenuList } from "@material-ui/core";
import "./styles.js";
import { useHistory } from "react-router-dom";
import { MenuBox } from "./styles.js";
function Menu() {
  const history = useHistory("");

  return (
    <>
      <MenuBox>
        <MenuList id="composition-menu" aria-labelledby="composition-button">
          <MenuItem onClick={() => history.push("/")}>Home</MenuItem>
          <MenuItem onClick={() => history.push("/confra")}>Confra</MenuItem>
          <MenuItem onClick={() => history.push("/casamento")}>
            Casamento
          </MenuItem>
          <MenuItem onClick={() => history.push("/formatura")}>
            Formatura
          </MenuItem>
        </MenuList>
      </MenuBox>
    </>
  );
}
export default Menu;
