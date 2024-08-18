import Parrot from "../../public/parrot.svg";
import myBackground from "../../public/Vector.png";

const Header = () => {
  return (
    <>
      <div
        className="bg-[#0D182E] font-inter bg-no-repeat bg-contain bg-right"
        style={{ backgroundImage: `url(${myBackground})` }}
      >
        <div className="flex justify-center items-center gap-6 py-6">
          <div>
            <img src={Parrot} alt="" />
          </div>
          <div>
            <h1 className="text-[#32CD32] text-3xl font-bold mb-2">
              PollyGlot
            </h1>
            <p className="text-white">Perfect Translation Every Time</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
