import logo from "/src/assets/logo.png";
import dragon from "/src/assets/blue-eyes.png";
// import dragon from "/src/assets/dragon.png";

const Logo = () => {
  return (
    <>
      <div className="mb-[120px]">
        <img src={dragon} alt="" className="w-[500px] -mb-[120px]" />
        <div className="bg-slate-700 rounded-md px-10 shadow-lg shadow-black">
          <h1 className="text-white text-[120px] font-logo tracking-wide">
            Deck Master
          </h1>
        </div>
        {/* <img src={logo} className="w-[400px] -mt-[160px]" /> */}
      </div>
    </>
  );
};

export default Logo;
