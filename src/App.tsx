import { useState } from "react";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import Search from "./components/search/Search";
import { Container } from "./style/style";

function App() {
  const [count, setCount] = useState(0);

  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData);
  };
  return (
    <>
      <Container className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather />
      </Container>
    </>
  );
}

export default App;
