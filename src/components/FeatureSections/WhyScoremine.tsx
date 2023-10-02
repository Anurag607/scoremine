import classNames from "classnames";

const WhyScoreMineSection = () => {
  return (
    <div
      className={classNames({
        "relative w-screen h-[50vh] z-[10] mt-8": true,
        "flex items-center justify-center overflow-hidden": true,
        "bg-center bg-no-repeat bg-cover": true,
      })}
      style={{ backgroundImage: "url(/bg-7.png)" }}
    >
      <div
        className={classNames({
          "relative z-[20] w-fit": true,
          "flex flex-col justify-center items-center": true,
          "tracking-tighter leading-[3.5rem]": true,
        })}
      >
        <h1 className="mento text-gray-100 font-extrabold sm:text-[3rem] text-[2.5rem] drop-shadow-lg">
          Why
        </h1>
        <h1
          className={classNames({
            "bound font-bold": true,
            "text-gray-100 dark:text-gray-100 drop-shadow-lg": true,
            "sm:text-[3rem] text-[2.5rem]": true,
          })}
        >
          Scoremine?
        </h1>
      </div>
    </div>
  );
};

export default WhyScoreMineSection;
