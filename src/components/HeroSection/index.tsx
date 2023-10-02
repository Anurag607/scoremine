import classNames from "classnames";

const HeroSection = () => {
  return (
    <div
      className={classNames({
        "relative w-screen h-fit md:h-[calc(100vh_-_100px)]": true,
        "flex max-md:flex-col items-center justify-center gap-1 mt-2": true,
        "bg-transparent px-1": true,
      })}
    >
      <section
        className={classNames({
          "relative rounded-t-xl md:rounded-l-2xl w-[95vw] md:w-1/2 h-full":
            true,
          "flex overflow-hidden": true,
          "flex-col justify-center items-center": true,
          "bg-center bg-no-repeat bg-cover": true,
        })}
        style={{ backgroundImage: "url(/bg-6.jpg)" }}
      >
        <div
          className={
            "bg-black bg-opacity-40 absolute top-0 left-0 w-full h-full"
          }
        />
        <div
          className={classNames({
            "rounded-xl w-[90%] h-[90%] z-10 max-md:my-[10vh]": true,
            "flex flex-col justify-center items-center": true,
            "bg-top bg-no-repeat bg-cover": true,
          })}
        >
          <div
            className={classNames({
              "relative z-[20] w-fit md:mr-10 max-md:scale-[0.9] md:scale-[1.35] lg:scale-[2]":
                true,
              "flex flex-col justify-center items-center md:items-start": true,
              "tracking-tighter leading-[3.25rem]": true,
            })}
          >
            <h1 className="bound text-gray-100 text-[2.75rem] bg-black dark:text-black dark:bg-gray-100">
              Score
            </h1>
            <h1 className="bound text-gray-100 text-[5rem] dark:text-gray-100">
              Mine
            </h1>
          </div>
        </div>
      </section>
      <section
        className={classNames({
          "relative mx-auto rounded-b-xl md:rounded-r-2xl": true,
          "flex flex-col justify-center items-center": true,
          "w-[95vw] md:w-1/2 h-full overflow-hidden": true,
          "bg-transparent dark:bg-zinc-800 bg-opacity-30": !true,
          "bg-center bg-no-repeat bg-cover": true,
        })}
        style={{ backgroundImage: "url(/bg-5.jpg)" }}
      >
        <div
          className={
            "bg-green-500 dark:bg-indigo-700 dark:bg-opacity-40 bg-opacity-40 absolute top-0 left-0 w-full h-full"
          }
        />
        <div
          className={classNames({
            "w-[90%] h-[90%] z-10 text-center md:text-right": true,
            "flex flex-col justify-center items-center": true,
          })}
        >
          <div
            className={classNames({
              "relative z-[20] w-fit md:mr-10 max-md:my-[10vh]": true,
              "flex flex-col justify-center items-center md:items-end max-md:gap-3":
                true,
              "text-gray-100": true,
            })}
          >
            <h1 className="bound font-semibold text-[1.5rem] md:text-[1.75rem] drop-shadow-xl">
              add & analyse
            </h1>
            <h1
              className={classNames({
                "px-3 py-1": true,
                "mento font-normal text-2xl md:text-3xl": true,
                "shadow-xl bg-black ": true,
              })}
            >
              the games you play with
            </h1>
            <h1 className="bound font-bold lg:text-[3rem] md:text-[2.25rem] text-[1.75rem] drop-shadow-xl">
              your friends.
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
