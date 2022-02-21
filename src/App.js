// import logo from './logo.svg';
import "./App.css";
import image from "./img/money.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={image} alt="" />
        <div className="content">
          <h1>Hello Pasha!</h1>
          <h2>🏗️ Разработка твоего сайта приостановлена 🏗️</h2>
          <h2>Чтобы продолжить, жду от тебя 40К на карту</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
