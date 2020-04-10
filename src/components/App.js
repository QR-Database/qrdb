import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import DualPage from "./Dual/DualPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import M from "materialize-css";
import "../styles/Index.scss";

function App() {
  useEffect(() => {
  M.AutoInit()
  }, [])

  return (
    <div>
      <header>  
        <Header />
      </header>
      <main>      
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dual" component={DualPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
