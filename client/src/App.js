// import LoginForm from "./components/LoginForm";
import NameCard from "./components/NameCard";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100 mt-4" style={{ maxWidth: "500px" }}>
        {/* <LoginForm /> */}
        <NameCard />
      </div>
    </Container>
  );
}

export default App;
