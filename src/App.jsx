import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import TwoPlayers from "./GameType/TwoPlayers";
import ThreePlayers from "./GameType/ThreePlayers";
import FourPlayers from "./GameType/FourPlayers";

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
  {
    path: "fourplayers",
    element: <FourPlayers />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
