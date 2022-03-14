import React from "react";
import { useSelector } from "react-redux";

function App() {
  const account = useSelector((state) => state.account);
  console.log(account);

  return <div>Hello World</div>;
}

export default App;
