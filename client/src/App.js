import LoginForm from "./components/LoginForm";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100 mt-4" style={{ maxWidth: "500px" }}>
        <LoginForm />
      </div>
    </Container>
  );
}

export default App;
