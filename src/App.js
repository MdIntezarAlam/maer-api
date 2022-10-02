import Appbar from "./component/Appbar";
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Signup from "./component/Signup";
import Privatecompo from "./component/Privatecompo";
import Login from "./component/Login";
import './App.css'
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import UpdateProduct from "./component/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route element={<Privatecompo />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/addpro" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>This is Home logout</h1>} />
            <Route path="/profile" element={<h1>This is Home Profile</h1>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
