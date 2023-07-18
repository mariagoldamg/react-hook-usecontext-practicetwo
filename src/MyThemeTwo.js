import { useContext } from "react";
import { ColorContext } from "./App";

function MyThemeTwo(){

const myColor = useContext(ColorContext);

    const themeIdeasTwo = {
        backgroundColor: myColor ? 'green': 'yellow',// switching colors
        color: myColor ? 'yellow' : 'green', 
    
    }



    return(<div style={themeIdeasTwo}>
<p>GOOD MORNING!</p>
</div>)


}

export default MyThemeTwo;