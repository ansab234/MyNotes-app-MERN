import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {

  const[search,setSearch] = useState('');

  return (
    <Router>
      <Header setSearch={setSearch}/>
      <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/profile" component={ProfileScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/createnote" component={CreateNote} />
        <Route exact path="/note/:id" component={SingleNote} />
        <Route path="/mynotes" component={()=> <MyNotes search={search}/>} />
      </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
