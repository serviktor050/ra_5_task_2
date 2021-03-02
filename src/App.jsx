//import logo from './logo.svg';
import "./App.css";
import Page from "./components/Page.jsx";

function App() {
  const news = [
    {
      img: "img1",
      text: "Путин упростил получение автомобильных номеров",
      href: "http://site1.ru",
    },
    {
      img: "img2",
      text: "В команде Зеленского раскрыли план реформ на Украине",
      href: "http://site2.ru",
    },
  ];

  const data = {
    img: "img",
    name: "Работа над ошибками",
    text: "Смотрите на Яндексе и запоминайте",
    href: "http://site.ru",
  };

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

  const searchExample = {};

  const weather = {
    img: "",
    tempNow: "",
    tempMorning: "",
    tempEvening: "",
  };

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
      data={data}
      quotes={quotes}
      searchExample={searchExample}
      weather={weather}
      visited={visited}
      tvProg={tvProg}
      aether={aether}
    >
      <img src="..." alt="banner" />
      <img src="..." alt="serviceAetherIcon" />
    </Page>
  );
}

export default App;
