import { useEffect, useState } from "react";
import Card from "./components/Card";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
//https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=blue-eyes
function App() {
  const [searchTerm, setSearchTerm] = useState<string>("blue-eyes");
  const [cards, setCards] = useState<any>([]);
  const [message, setMessage] = useState<string>();
  const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${searchTerm}`;

  const searchCards = async () => {
    if (searchTerm != "") {
      setCards([]);
      setMessage("Loading . . .");
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        //limits to 5 items
        setCards(data.data.slice(0, 11));
      } catch (error) {
        console.log(error);
        setMessage("No Results Found");
      }
    }
  };

  // useEffect(() => {
  //   searchCards();
  // }, []);

  return (
    <>
      {/* <Nav /> */}
      <div className="flex justify-center mt-0 -mb-[100px] ">
        <Logo />
      </div>
      <div className="flex justify-center px-4">
        <div className="flex w-[700px]">
          <input
            placeholder="Search Cards . . ."
            className="bg-gray-700 border-2 border-gray-900 px-10 py-3 text-white text-xl tracking-wide rounded-xl w-[80%] shadow-md shadow-black"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-2 bg-gray-700 border-2 border-gray-900 px-10 py-3 font-bold text-white text-xl tracking-wide rounded-xl shadow-md shadow-black"
            onClick={() => searchCards()}
          >
            Search
          </button>
        </div>
      </div>
      <div className="p-4">
        {cards.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
            {/* <h2>Search Results</h2> */}
            {cards.map((card: any) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        ) : (
          <div className="text-center text-lg capitalize text-white tracking-widest">
            <span className="text-[30px]">{message}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
