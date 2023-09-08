import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";


const App=()=>{
    return(
        <Router>
            <Header/> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/#about" element={"#about"}/>

            </Routes>
        </Router>
    )
}

export default App;