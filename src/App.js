import './index.css'
import {useState} from "react";
import Light from "./components/Light";
import colors from "./TraficLightColour";

function App() {

  const [redLight,setRedLight]=useState(colors.red);
  const [yellowLight,setYellowLight]=useState(colors.backgroundColor);
  const [greenLight,setGreenLight]=useState(colors.backgroundColor);

  const currentLight =(light)=>{
    switch (light) {
      case "red":
        setRedLight(colors.red);
        setGreenLight(colors.backgroundColor);
        setYellowLight(colors.backgroundColor);
        break;
      case "yellow":
        setRedLight(colors.backgroundColor);
        setGreenLight(colors.backgroundColor);
        setYellowLight(colors.yellow);
        break;
      case "green":
        setRedLight(colors.backgroundColor);
        setGreenLight(colors.green);
        setYellowLight(colors.backgroundColor);
        break;
    }

  }
  return (

      <div className="parent">
        <div className="light center">
          <Light color={redLight} light="red" activateLight={currentLight} />
          <Light color={yellowLight} light="yellow" activateLight={currentLight}/>
          <Light color={greenLight} light="green" activateLight={currentLight}/>
        </div>
      </div>

  );
}

export default App;
