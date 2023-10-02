import classNames from "classnames";

const Left = ({ img, children }: { img: string; children: any }) => {
  return (
    <div
      className={classNames({
        "relative w-screen h-fit md:h-[calc(100vh_-_100px)]": true,
        "flex max-md:flex-col items-center justify-around max-md:gap-4 mt-0":
          true,
        "hover:bg-white hover:bg-opacity-[0.05]": true,
        "transition-all ease-in-out": true,
      })}
    >
      <div
        className={classNames({
          "relative w-[95vw] md:w-[35rem] h-[25rem] z-[10] rounded-xl": true,
          "flex overflow-hidden": true,
          "bg-center bg-no-repeat bg-cover": true,
        })}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div
        className={classNames({
          "relative mx-0": true,
          "flex flex-0 flex-col justify-center items-center": true,
          "w-[95vw] md:w-1/2 h-full overflow-hidden": true,
        })}
      >
        <div
          className={classNames({
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":
              !true,
            "w-[90%] h-[90%] z-10 text-right": true,
            "flex flex-col justify-center items-center": true,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Left;
