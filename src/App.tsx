import { useEffect, useState } from "react";
import Card from "./components/Card";
import Logo from "./components/Logo";
//https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker
//https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=Magician
function App() {
  const [searchTerm, setSearchTerm] = useState<string>("Magician");
  const [cards, setCards] = useState<any>([]);
  const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${searchTerm}`;

  const searchCards = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    //limits to 5 items
    setCards(data.data.slice(0, 6));
  };

  useEffect(() => {
    searchCards();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-10 ">
        <Logo />
      </div>
      <div className="flex justify-center">
        <input
          placeholder="Search Cards . . ."
          className="bg-gray-500 px-10 py-3 text-white text-lg rounded-xl w-[80%]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* <div>
        <p>{searchTerm}</p>
      </div> */}
      <div>
        {cards.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 p-4">
            {/* <h2>Search Results</h2> */}
            {cards.map((card: any) => (
              <Card card={card} key={card.id} />
            ))}
            {/* console.log(card.id) */}
          </div>
        ) : (
          <h3>no results found</h3>
        )}
      </div>
    </>
  );
}

export default App;
