import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/header.component";
import { HomePage } from "./pages/HomePage";
import { RestaurantDetailsPage } from "./pages/RestaurantDetailsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<RestaurantDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
