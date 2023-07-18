import MyTheme from "./MyTheme";
import React, { useState } from "react";
import MyThemeTwo from "./MyThemeTwo";

export const ColorContext = React.createContext()// created our Context, we can name it the anyhow

function App() {

const [myColor, setMyColor] = useState(true);//confirming initial color


function changeColor() {
setMyColor((myFirstColor) => !myFirstColor);// switching one color to another 

}

  return (
    <div >
 <h1>Change Color on Click</h1>
 <ColorContext.Provider value={myColor}>
 <button onClick = {changeColor}>Change color</button>
 <MyTheme/>
 <MyThemeTwo/>
 </ColorContext.Provider>
    </div>
  );
}

export default App;
