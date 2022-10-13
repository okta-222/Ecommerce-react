
import Header from "../../home/Components/Header/Header";
import Footer from "../../home/Components/Footer/Footer";
import Breadcrumbs10 from "./Breadcrumbs10/Breadcrumbs10";
import Form from "./Form/Form";
export default function Layout() {
  return (
    <div>
      <Header />
      <Breadcrumbs10 />
      <Form />
      <Footer />
    </div>
  );
}