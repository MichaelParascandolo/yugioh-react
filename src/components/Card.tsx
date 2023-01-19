const Card = ({
  card: {
    name,
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

  return (
    <>
      <div className="p-4 bg-gray-900/90 text-white rounded-xl shadow-lg bg-gray-900 border-1 shadow-gray-900 tracking-widest hover:scale-105 duration-300 ease-in-out transition-all">
        <h1 className="text-center text-2xl tracking-wide">{name}</h1>
        <p className={styles.item}>
          Type:{" "}
          <span className="px-2 py-1 rounded-full bg-orange-300 text-black">
            {type}
          </span>
        </p>
        {attribute ? (
          <p className={styles.item}>
            Attribute:{" "}
            <span className="px-2 py-1 rounded-full bg-gray-300 text-black">
              {attribute}
            </span>
          </p>
        ) : null}
        {level ? (
          <p className={styles.item}>
            Level:{" "}
            <span className="px-1 rounded-full bg-red-500 font-bold">
              {level}
            </span>
          </p>
        ) : null}
        {/* <p>{desc}</p>  */}
        {atk ? <p className={styles.item}>ATK/ {atk}</p> : null}
        {def ? <p className={styles.item}>DEF/ {def}</p> : null}
        <div className="flex justify-center py-4 select-none">
          <img src={img} alt={name} />
        </div>
        {/* <hr /> */}
        {/* {card_prices.map((e: any, index: number) => (
          <span key={index}>{e}</span>
        ))} */}
        <div className="flex justify-between">
          <span className={styles.price}>Market ${marketPrice}</span>
          <span className={styles.price}>eBay ${ebayPrice}</span>
          <span className={styles.price}>Amazon ${amazonPrice}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
