import{Route, Routes} from "react-router-dom";
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Chat } from './pages/Chat';
import { Notfound } from './pages/Notfound';
import { useAuth } from "./context/AuthContext";

function App() {
  const auth = useAuth();
  console.log(auth?.isLoggedIn);  
  return (
    <main>
       <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    </main>
  )
}

export default App;
