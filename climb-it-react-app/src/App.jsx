import { createRoot } from "react-dom/client";
import Login from "./Login";

const App = () => {
    return (
        <div>
            <h1 className="logo">Climb It</h1>
            <Login />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
