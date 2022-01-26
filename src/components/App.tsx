import React from "react";
import Form from "./Form";

const userIsRegistered: boolean = false;

const App = () => {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
};

export default App;
