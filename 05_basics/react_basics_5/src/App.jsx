import "./App.css";
import {BulbProvider} from "./component/BulbProvider";
import LightBulb from "./component/LightBulb";


const App = () => {
  
  return (
    /* prop drilling occurs when we try to pass data from a higher level  component to a lower level component that is several layers deep into the component tree
    and this creates some issues- 
    - issue 1 : we sometime may have to pass props through many components that doesn't even use the prop but to send them to lower level component we have to pass props through those components.
    - issue 2: it make maintainance of the code very hard as changes in the props structure require updates in multiple components*/

    /* Now to solve the prop dealing issue we can use contextAPI that allow us to manage our state across multiple components that are nested several layers deep into component tree */

    /* what .provider does is it lets all the children access the value of the context   */
    <div>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </div>
  );
};

export default App;
