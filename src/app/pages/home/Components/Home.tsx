import Trending from "./Trending/Trending";
import Blog from "./Blog/Blog";
import Brands from "./Brands/Brands";
import Counter from "./Counter/Counter";
import Feature from "./Featured/Featured";
import Footer from "./Footer/Footer";
import Genuine from "./Genuine/Genuine";
import Header from "./Header/Header";
import PopularProducts from "./PopularProducts/PopularProducts";
import Question from "./Question/Question";
import Result from "./Result/Result";
import Weekly from "./Weekly/Weekly";

export default function Home() {
  return (
    <div>
      <Header />
      <Genuine />
      <Brands />
      <Feature />
      <Counter />
      <PopularProducts />
      <Weekly />
      <Trending />
      <Question />
      <Result />
      <Blog />
      <Footer />
    </div>
  );
}
