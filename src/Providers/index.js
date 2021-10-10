import { FormaturaProvider } from "./Formatura";
import { CasamentoProvider } from "./Casamento";
import { ConfraProvider } from "./Confra";
import { BeersProvider } from "./BeerList";

const Providers = ({ children }) => {
  return (
    <FormaturaProvider>
      <CasamentoProvider>
        <ConfraProvider>
          <BeersProvider>{children}</BeersProvider>
        </ConfraProvider>
      </CasamentoProvider>
    </FormaturaProvider>
  );
};
export default Providers;
