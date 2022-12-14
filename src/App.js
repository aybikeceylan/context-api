import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import PrivateRouter from "./pages/PrivateRouter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
// import { LoginContext } from "./context/LoginContext";
import LoginProvider from "./context/LoginProvider";

function App() {
  // const [user, setUser] = useState("")
  return (
    <LoginProvider>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="people" element={<PrivateRouter />} >
            <Route path="" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>


          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
