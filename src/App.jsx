import "./App.css";
import Recipes from "./Recipes";

const App = () => {
  const h1Style = {
    backgroundColor: '#F8F0E3', // Replace with your desired color
    padding: '0px',
     // Adding bold font style
     fontWeight: 'bold',
    fontFamily: "Arial Black",
    color: 'crimson'
  };

  return (
    <div className="app">
       <h1 style={h1Style}>Recipe App</h1>
      <Recipes />
    </div>
  );
};

export default App;