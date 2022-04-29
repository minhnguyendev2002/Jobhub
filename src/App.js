import './App.css';
import Banner from "./components/Banner/Banner";
import InforJob from "./components/InforJob/InforJob";
import Content from "./components/Content/Content";

function App() {
  return (
    <>
    <div className="mb-5">
      <Banner />
      <InforJob />
      <Content />
    </div>
    </>
  );
}

export default App;
