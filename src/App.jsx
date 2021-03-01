//import logo from './logo.svg';
import "./App.css";
import Page from "./components/Page.jsx";

function App() {
  const news = [
    {
      img: "img1",
      text: "Путин упростил получение автомобильных номеров",
    },
    {
      img: "img2",
      text: "В команде Зеленского раскрыли план реформ на Украине",
    },
  ];

  const quotes = [
    {
      name: "USD MOEX",
      value: 63.52,
      difference: "",
    },
    {
      name: "EUR MOEX",
      value: 70.86,
      difference: "",
    },
    {
      name: "НЕФТЬ",
      value: 64.9,
      difference: "",
    },
  ];

  const visited = [
    {
      name: "Недвижимость",
      link: "http://site.ru",
      description: "",
    },
  ];

  const tvProg = [
    {
      time: "",
      name: "",
      canal: "",
    },
  ];

  const aether = [
    {
      name: "",
      canal: "",
    },
  ];

  return (
    <Page
      news={news}
      quotes={quotes}
      visited={visited}
      tvProg={tvProg}
      aether={aether}
    />
  );
}

export default App;
