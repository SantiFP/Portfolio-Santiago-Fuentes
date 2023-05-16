import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import TwoPlayers from "./GameType/TwoPlayers";
import ThreePlayers from "./GameType/ThreePlayers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "twoplayers",
    element: <TwoPlayers />,
  },
  {
    path: "threeplayers",
    element: <ThreePlayers />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
