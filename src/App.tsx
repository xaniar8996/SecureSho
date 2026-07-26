import { Container } from "./components/base/container";
import "./App.css";

import RootLayout from "./layouts/RootLayout";
import Index from "./pages/MainIndex";

function App() {

  return (
    <RootLayout>
      <Container>
       <Index/>
      </Container>
    </RootLayout>
  )
}

export default App
