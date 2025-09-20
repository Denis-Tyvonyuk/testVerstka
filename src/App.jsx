import First from "./components/First/First";
import Navbar from "./components/Navbar/Navbar";
import WhatIs from "./components/WhatIs/WhatIs";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:mt-6 sm:px-0">
      <div className=" w-full  flex flex-col">
        <Navbar />
        <First />
        <WhatIs />
      </div>
    </div>
  );
}

export default App;
