import { CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/material";

import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </>
  );
}

export default App;
