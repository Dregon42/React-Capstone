import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import MessageBoard from "./pages/MessageBoard";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {

  return (
    <div className="flex">
      <BrowserRouter>
        <NavBar />  
        <Provider store={store}>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/message_board' element={<MessageBoard />} />
              <Route path='/about' element={<About />} />
            </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
