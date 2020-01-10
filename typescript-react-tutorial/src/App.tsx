import * as React from "react";
import Profile from "./components/Profile";
import Counter from './components/Counter'

const App: React.FC = () => {
  return (
    <div>
      <Profile name="shawn" job="dev" />
      <Counter />
    </div>
  );
};

export default App;
