import { useState } from "react";
import Logo from "./components/Logo";
//https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker
function App() {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <>
      <div className="flex justify-center mt-10">
        <Logo />
      </div>
      <div className="flex justify-center">
        <input
          placeholder="Search Cards . . ."
          className="bg-gray-700 px-10 py-3 text-white text-lg rounded-xl w-[80%]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <p>{searchTerm}</p>
      </div>
    </>
  );
}

export default App;
