import React, { useEffect, useState } from "react";

function ConsoleTest() {
    const [state, setState] = useState(0);
    console.log("state:", state);
  
    useEffect(() => {
      setState(1);
    }, [state]);
  
    return <div className="App"></div>;
}

export default ConsoleTest;