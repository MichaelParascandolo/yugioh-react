import { useState } from "react";

const Card = ({
  card: {
    name,
    race,
    id,
    type,
    atk,
    def,
    level,
    attribute,
    desc,
    card_prices,
    card_images,
  },
}: {
  card: {
    name: string;
    race: string;
    id: number;
    type: string;
    atk: number;
    def: number;
    level: number;
    attribute: string;
    desc: string;
    card_images: any;
    card_prices: any;
  };
}) => {
  const styles = {
    item: "py-1",
    price: "font-bold",
  };
  const img: string = card_images[0].image_url;
  const marketPrice = card_prices[0].cardmarket_price;
  const ebayPrice = card_prices[0].ebay_price;
  const amazonPrice = card_prices[0].amazon_price;
  const [showDesc, setShowDesc] = useState<boolean>(false);

  return (
    <>
      <div className="p-4 bg-gray-900/90 text-white rounded-xl shadow-xl max-w-[700px] bg-gray-900 border-1 shadow-black tracking-widest hover:scale-105 duration-300 ease-in-out transition-all">
        <h1 className="text-center text-2xl tracking-wide">{name}</h1>
        <div className="grid grid-cols-2">
          <div className="flex justify-center py-4 select-none col-span-1">
            <img
              src={img}
              alt={name}
              width={"200px"}
              className="shadow-2xl shadow-black"
            />
          </div>
          <div className="col-span-1 ml-4 mt-4 flex-col space-y-4">
            <p className={styles.item}>
              Type:{" "}
              <span className="px-4 py-1 rounded-full bg-orange-300 text-black">
                {type}
              </span>
            </p>
            {attribute ? (
              <p className={styles.item}>
                Attribute:{" "}
                <span className="px-4 py-1 rounded-full bg-gray-300 text-black">
                  {attribute}
                </span>
              </p>
            ) : null}
            <p className={styles.item}>Race: {race}</p>
            {level ? (
              <p className={styles.item}>
                Level:{" "}
                <span className="px-1 rounded-full bg-red-500 font-bold">
                  {level}
                </span>
              </p>
            ) : null}
            {atk ? <p className={styles.item}>ATK/ {atk}</p> : null}
            {def ? <p className={styles.item}>DEF/ {def}</p> : null}
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <button
            onClick={() => setShowDesc(!showDesc)}
            className="bg-slate-700 border-2 border-slate-800 shadow-md shadow-black px-[30px] py-1 text-white tracking-wider rounded-xl text-lg"
          >
            {showDesc ? "Hide Description" : "View Description"}
          </button>
        </div>
        {showDesc ? (
          <>
            <div className="my-2">
              <p className={styles.item}>{desc}</p>
            </div>
            <div className="h-0.5 bg-slate-800" />
            <div className="flex justify-around mt-2">
              <span className={styles.price}>Market ${marketPrice}</span>
              <span className={styles.price}>eBay ${ebayPrice}</span>
              <span className={styles.price}>Amazon ${amazonPrice}</span>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Card;
