import { Fragment } from "react";
import Header from "./components/Header/Header";
import Usage from "./components/Usage/Usage";
import SolutionSection from "./components/SolutionSection/SolutionSection";
import Testimonials from "./components/Testimonials/Testimonials";
import Resources from "./components/Resources/Resources";
import Save from "./components/Save/Save";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <SolutionSection />
      <Usage />
      <Testimonials />
      <Resources />
      <Save />
      <Footer />
    </Fragment>
  );
}

export default App;
