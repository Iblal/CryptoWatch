import { BrowserRouter, Route, Routes } 
from "react-router-dom";
import {
  makeStyles
} from "@material-ui/core";
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';


 const useStyles = makeStyles(() => ({
   App: {
     backgroundColor: "#14161a",
     color: "white",
     minHeight: "100vh",
   },
 }));


function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          
          <Route path="/" element={<Homepage/>} exact />
          <Route path="/coins/:id" element={<Coinpage/>} exact />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
