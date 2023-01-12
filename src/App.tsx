import { useEffect, useState } from "react";
import Card from "./components/Card";
import Logo from "./components/Logo";
//https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker
function App() {
  const [searchTerm, setSearchTerm] = useState<string>("Decode%20Talker");
  const [cards, setCards] = useState<any>([]);
  const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${searchTerm}`;

  const searchCards = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setCards(data);
  };

  useEffect(() => {
    searchCards();
    console.log(cards);
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
      <div>
        <p>{searchTerm}</p>
      </div>
      <div>
        {cards.length > 0 ? (
          <div>
            <h2>cards</h2>
            {cards.map((item: any) => (
              <Card card={item} key={""} />
            ))}
          </div>
        ) : (
          <h3>no results found</h3>
        )}
      </div>
    </>
  );
}

export default App;
