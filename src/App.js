import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

import { Card1 } from "./components/card1";
import { Card2 } from "./components/card2";
import { Card3 } from "./components/card3";

function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {/* FREE  */}
            <div className="col-lg-4">
              <Card1 />
            </div>

            {/* PLUS */}
            <div className="col-lg-4">
              <Card2 />
            </div>

            {/* PRO */}
            <div className="col-lg-4">
              <Card3 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
