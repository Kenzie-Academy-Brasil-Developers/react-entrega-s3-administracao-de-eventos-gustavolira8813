import { Button, ButtonGroup } from "@material-ui/core";
import "./styles.js";
import { List } from "./styles.js";
function BeerCard({
  beer,
  type,
  addToCasamento,
  addToFormatura,
  addToConfra,
  removeFromCasamento,
  removeFromConfra,
  removeFromFormatura,
}) {
  return (
    <List>
      <div>
        <img src={beer.image_url} alt={`beer ${beer.name}`} />
      </div>
      <div>
        <p>{beer.name}</p>
        <p>fabricada desde {beer.first_brewed}</p>
        <p>Descrição: {beer.description}</p>
        <p>{beer.volume.value} litres</p>
      </div>
      {type === "home" && (
        <div>
          <h5>Add Beer To Event: </h5>
          <div>
            <ButtonGroup
              orientation="vertical"
              variant="contained"
              color="inherit"
            >
              <Button cor="verde" onClick={() => addToConfra(beer)}>
                Confra
              </Button>
              <Button cor onClick={() => addToCasamento(beer)}>
                Casamento
              </Button>
              <Button cor onClick={() => addToFormatura(beer)}>
                Formatura
              </Button>
            </ButtonGroup>
          </div>
        </div>
      )}
      {type !== "home" && (
        <div>
          {type === "confra" && (
            <Button variant="contained" onClick={() => removeFromConfra(beer)}>
              remove beer
            </Button>
          )}
          {type === "casamento" && (
            <Button
              variant="contained"
              onClick={() => removeFromCasamento(beer)}
            >
              remove beer
            </Button>
          )}
          {type === "formatura" && (
            <Button
              variant="contained"
              onClick={() => removeFromFormatura(beer)}
            >
              remove beer
            </Button>
          )}
        </div>
      )}
    </List>
  );
}
export default BeerCard;
