import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import TwoPlayers from "./GameType/TwoPlayers";
import Sidebar from "./Sidebar/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "twoplayers",
    element: <TwoPlayers />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
