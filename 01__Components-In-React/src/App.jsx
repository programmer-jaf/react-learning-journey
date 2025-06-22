import Component from "./components/Component";
import { Footer } from "./solutions/Footer";
import Greeting from "./solutions/Greeting";
import { Header } from "./solutions/Header";
import { MainContent } from "./solutions/MainContent";

const App = () => {
  return (
    <div>
      {/* call the component */}
      {/* <Component/> */}

      {/* Challenge-01 */}
      {/* <Greeting/> */}
      {/* Challenge-02 */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
