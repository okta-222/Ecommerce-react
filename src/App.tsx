import Home from "./app/pages/home/Components/Home";
import Shop from "./app/pages/Shop/components/Shop";
import Category from "./app/pages/Category/Components/Category";
import Blog from "./app/pages/Blog/Components/Blog";
import Contact from "./app/pages/Contact/Components/Contact";
import Faq from "./app/pages/Faq/Components/Faq";
import Dashboard from "./app/pages/Dashboard/Components/Dashboard";
import OrderHistory from "./app/pages/Order-History/Components/Order";
import WashList from "./app/pages/WashList/Components/Wish";
import Address from "./app/pages/Address-Book/Components/Address";
import Settings from "./app/pages/Settings/Components/Layout";
import Login from "./app/pages/Login/Components/Layout";
import { Routes, Route } from "react-router-dom";
import "./app/scss/main.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Order-History" element={<OrderHistory />} />
      <Route path="/Wash-List" element={<WashList />} />
      <Route path="/Address" element={<Address />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
