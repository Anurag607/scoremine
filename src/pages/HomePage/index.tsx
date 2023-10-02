import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Left from "../../components/FeatureSections/Left";
import Right from "../../components/FeatureSections/Right";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Text1, Text2, Text3 } from "../../components/FeatureSections/Texts";
import WhyScoreMineSection from "../../components/FeatureSections/WhyScoremine";

const Divider = () => {
  return (
    <div className="my-8 mx-auto w-32 h-1 bg-blue-500 dark:bg-indigo-600 rounded-2xl" />
  );
};

const DownloadSection = () => {
  return (
    <div
      className={classNames({
        "relative w-screen h-[50vh] z-[10] mt-8": true,
        "flex items-center justify-center overflow-hidden": true,
        "bg-center bg-no-repeat bg-cover": true,
      })}
      style={{ backgroundImage: "url(/android.png)" }}
    >
      <div
        className={classNames({
          "relative z-[20] w-fit": true,
          "flex flex-col justify-center items-center": true,
          "tracking-tighter sm:leading-[3.5rem] leading-[3rem] text-center":
            true,
        })}
      >
        <h1 className="mento text-gray-100 sm:text-[3rem] text-[2.5rem] font-extrabold drop-shadow-lg">
          Download
        </h1>
        <h1 className="bound font-bold text-gray-100 sm:text-[3rem] text-[2rem] dark:text-gray-100 drop-shadow-lg">
          Scoremine Now
        </h1>
        <div
          className={classNames({
            "relative w-fit h-fit mt-3": true,
            "flex items-center justify-center overflow-hidden": true,
          })}
        >
          <Link
            target={"_blank"}
            to={
              "https://play.google.com/store/apps/details?id=fit.han.myoracle&pli=1"
            }
          >
            <button
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
            >
              Android
              <img src={"/android.svg"} className="w-5 h-5 ml-2 -mr-1" />
            </button>
          </Link>
          <Link
            target={"_blank"}
            to={"https://apps.apple.com/in/app/id6444081915"}
          >
            <button
              type="button"
              className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
            >
              Apple
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col justify-start items-center">
      <Navbar />

      {/* HeroSection... */}
      <div className={"w-screen h-[75px]"} />
      <HeroSection />

      {/* About... */}
      <div
        className={classNames({
          "w-[90vw] text-center bound font-bold mt-6": true,
          "text-gray-100 dark:text-gray-100 drop-shadow-lg": true,
          "text-[1.5rem] sm:text-[2rem]": true,
        })}
      >
        About
      </div>
      <div className="mx-auto w-32 h-1 bg-blue-500 dark:bg-indigo-600 rounded-2xl my-4" />
      <div
        className={classNames({
          "w-[90vw] text-center mento font-nomral": true,
          "text-gray-100 dark:text-gray-100 drop-shadow-lg": true,
          "text-[1.5rem] sm:text-[2rem]": true,
        })}
      >
        ScoreMine helps to keep track of all the badminton games you play with
        your group or in any badminton tournaments. You can also rate yourself.
      </div>

      {/* Why Scoremine? ... */}
      <WhyScoreMineSection />
      <Divider />
      <Left img={"/bg-4.jpg"}>
        <Text1 />
      </Left>
      <Divider />
      <Right img={"/bg-9.jpg"}>
        <Text2 />
      </Right>
      <Divider />
      <Left img={"/bg-6.jpg"}>
        <Text3 />
      </Left>
      <Divider />

      {/* Download... */}
      <DownloadSection />

      {/* Footer... */}
      <Footer />
    </main>
  );
};

export default HomePage;
