// import CustomButton from './CustomButton'
import { Welcome } from "./Welcome";
import { Product } from "./Product";
import "./App.css";

// function Welcome() {
//   return <h2>Welcome Maseera</h2>;
// }

function App() {
  return (
    <div>
      <Product
        title="Gaming laptop"
        price={1299.99}
        InStock={true}
        categories={["Electronic", "Computer", "Gaming"]}
      />
      <h1>Code Evolution React course</h1>

//!props are passed through component
      <Welcome name="Maseera" alias="Ahmed" />
    </div>
  );
}

export default App;
