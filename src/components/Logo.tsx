import logo from "/src/assets/logo.png";
import dragon from "/src/assets/dragon.png";

const Logo = () => {
  return (
    <>
      <div>
        <img src={dragon} alt="" className="w-[300px]" />
        <img src={logo} className="w-[400px] -mt-[160px]" />
      </div>
    </>
  );
};

export default Logo;
