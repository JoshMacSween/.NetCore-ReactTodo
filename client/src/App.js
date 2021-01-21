// // import LoginForm from "./components/LoginForm";
// import NameCard from "./components/NameCard";
// import { Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <Container className="d-flex align-items-center justify-content-center">
//       <div className="w-100 mt-4" style={{ maxWidth: "500px" }}>
//         {/* <LoginForm /> */}
//         <NameCard />
//       </div>
//     </Container>
//   );
// }

// export default App;

import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div>
      <Accordion
        title="What is your return policy?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Which languages does you support?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Can I use a custom domain?"
        content="
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
      />
    </div>
  );
}
export default App