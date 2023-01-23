import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { LoginPage } from "./Components/Loginpage/LoginPage";
import { Timer } from "./Components/Timer/Timer";
import { Users } from "./Components/Users/Users";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [onDataList, setDataList] = useState(true);
  const [takePosts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useState(() => {
     const responseLocalStrage = localStorage.getItem("AUTHO");
    setisLoggedIn(!responseLocalStrage);
    getPosts();
  }, []);

  const loginHandler = () => {
    setisLoggedIn((prevState) => !prevState);
    localStorage.setItem("AUTHO", JSON.stringify(true));
  };
 
  return (
    <div className="App">
      <div>
        <Header isLoggedIn={isLoggedIn}  loginHandler={loginHandler}  setDataList={setDataList}/>
        {isLoggedIn ? (<LoginPage loginHandler={loginHandler} />) : onDataList ?    <Users takePosts={takePosts} />: ( <Timer />) }
      </div>
    </div>
  )
}

export default App;
