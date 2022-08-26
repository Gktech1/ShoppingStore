
import { CssBaseline, Container, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App()  {
const [darkMode, setDarkMode] = useState(false);
const PaletteType = darkMode ? "dark" : "light";
 const theme = createTheme({ 
  palette: { 
  mode: PaletteType
} 
}) 

function handleThemeChange() {
  setDarkMode(!darkMode);
}
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode = {darkMode} handleThemeChange={handleThemeChange}/>
      <Container >
          {/* <Catalog products={products} addProduct={addProduct}/> */}
          <Catalog/>
      </Container>
     
    </ThemeProvider>
  );
}

export default App;  // when exporting default uses this export function 




