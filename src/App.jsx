import "./app.css";
import Nav from "./components/Navbar/Nav";
import { TaskProvider } from "./components/Context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <Nav />
    </TaskProvider>
  );
};

export default App;
