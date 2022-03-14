import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionTypes } from "./states/actions";

function App() {
  const account = useSelector((state) => state.account);
  //console.log(account);
  const dispatch = useDispatch();

  const { depositAmount, withdrawAmount } = bindActionCreators(
    actionTypes,
    dispatch
  );

  return (
    <div>
      <h1>{account}</h1>
      <button onClick={() => depositAmount(100)}>Deoposit</button>
      <button onClick={() => withdrawAmount(100)}>Withdraw</button>
    </div>
  );
}

export default App;
