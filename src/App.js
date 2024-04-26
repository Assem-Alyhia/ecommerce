import HomePage from "./Page/Home/HomePage";
import { BrowserRouter ,  Routes , Route} from "react-router-dom";
import NavBarLogin from './Components/Utility/NaveBarLogin';
import Footer from './Components/Utility/Footer';
import LoginPage from "./Page/Auth/LoginPage";
import Rigester from "./Page/Auth/ResisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
function App() {
  return (
    <div className="font">
      <NavBarLogin/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="register" element={<Rigester/>} />
          <Route path="allcategory" element={<AllCategoryPage/>} />
          <Route path="allbrand" element={<AllBrandPage/>} />
          <Route path="products" element={<ShopProductsPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
