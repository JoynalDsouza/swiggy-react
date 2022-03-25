import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/header.component";
import { HomePage } from "./pages/HomePage";
import { RestaurantDetailsPage } from "./pages/RestaurantDetailsPage";

function App() {
  const menu = [
    {
      name: "bracoli",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/bracoli.jpeg",
      price: 300,
      details: "cup of bracoli",
      Type: "Veg",
    },
    {
      name: "Noodles",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/noodles.jpeg",
      price: 300,
      details: "Bowl of Noodles",
      Type: "Chinese",
    },
    {
      name: "Kadai Panneer",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/kadaiPaneer.jpeg",
      price: 300,
      details: "Bowl of Kadai Panneer",
      Type: "Veg",
    },
    {
      name: "Samosa",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/somosa.jpeg",
      price: 300,
      details: "Two Veg samosa",
      Type: "Snacks",
    },
    {
      name: "Fried rice",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/friedrice.jpeg",
      price: 300,
      details: "Bowl full of fried Rice",
      Type: "Chinese",
    },
    {
      name: "Sandwitch",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/sandwitch.jpeg",
      price: 300,
      details: "Two sandwitch pieces",
      Type: "Breads",
    },
    {
      name: "Dosa",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/dosa.jpeg",
      price: 300,
      details: "Dosa",
      Type: "South Indian",
    },
    {
      name: "Idly",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/idly.jpeg",
      price: 300,
      details: "Two idly",
      Type: "South Indian",
    },
    {
      name: "Ice cream",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/icecream.jpeg",
      details: "Scoop of Ice cream",
      Type: "Desserts",
    },
    {
      name: "Pav",
      image:
        "https://panorbit.s3.ap-south-1.amazonaws.com/restaurants/paav.jpeg",
      price: 300,
      details: "Mumbai wala Paav",
      Type: "Chat",
    },
  ];

  const varieties = [
    "Chat",
    "Snacks",
    "South Indian",
    "Breads",
    "Desserts",
    "Chinese",
    "Veg",
  ];

  const coll = {};
  varieties.map((variety) => {
    coll[variety] = menu.filter((item) => item.Type === variety);
  });
  console.log(menu);
  console.log(coll)

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
