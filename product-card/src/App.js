import logo from './logo.svg';
import './App.css';
import Pc from './components/pc';


function App() {
  return (
      <div>
          <Pc 
              title=" Apple Vision Pro" 
              desc="Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio." 
              price="$3499" 
              img="vr.jpg" 
          />
      </div>

      
  );
}

export default App;
