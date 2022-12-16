import { useState } from "react";
import Search from "./components/search/Search";
import { Container } from "./style/style";

function App() {
  const [count, setCount] = useState(0);

  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData);
  };
  return (
    <>
      <Container>
        <Search onSearchChange={handleOnSearchChange} />
      </Container>
    </>
  );
}

export default App;
