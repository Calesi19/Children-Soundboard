
import './App.css';
import Carousel from './Carousel';
import Grid from './Grid';





// Each grid item takes in a list of tiles as children and renders them.

function App() {
  return (
    <div className="App">
      <Carousel>

        <Grid type="animals" />
        <Grid type="instruments" />
        <Grid type="transportation" />
        <Grid type="fun" />

        
      </Carousel>
    </div>
  );
}

export default App;
