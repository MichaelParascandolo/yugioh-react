// const Card = (card: any) => {
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
  const img: string = card_images[0].image_url;
  const marketPrice = card_prices[0].cardmarket_price;
  const ebayPrice = card_prices[0].ebay_price;
  const amazonPrice = card_prices[0].amazon_price;

  return (
    <>
      <div className="py-4">
        <h1>{name}</h1>
        <p>Attribute: {attribute}</p>
        {/* <p>{desc}</p>  */}
        <p>Atk: {atk}</p>
        <p>Def: {def}</p>
        <p>Type: {type}</p>
        <p>Level: {level}</p>
        <img src={img} alt={name} />
        {/* <hr /> */}
        {/* {card_prices.map((e: any, index: number) => (
          <span key={index}>{e}</span>
        ))} */}
        <span>${marketPrice}</span>
        <span>${ebayPrice}</span>
        <span>${amazonPrice}</span>
      </div>
    </>
  );
};

export default Card;
