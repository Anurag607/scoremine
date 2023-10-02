import classNames from "classnames";

const Right = ({ img, children }: { img: string; children: any }) => {
  return (
    <div
      className={classNames({
        "relative w-screen h-fit md:h-[calc(100vh_-_100px)]": true,
        "flex max-md:flex-col-reverse items-center justify-center max-md:gap-4 mt-0":
          true,
        "hover:bg-white hover:bg-opacity-[0.05]": true,
        "transition-all ease-in-out": true,
      })}
    >
      <section
        className={classNames({
          "relative w-[95vw] md:w-1/2 h-full": true,
          "flex overflow-hidden": true,
          "flex-col justify-center items-center": true,
        })}
      >
        <div
          className={classNames({
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":
              !true,
            "rounded-xl w-[90%] h-[90%] z-10": true,
            "flex flex-col justify-center items-center": true,
            "bg-top bg-no-repeat bg-cover": true,
          })}
        >
          {children}
        </div>
      </section>
      <section
        className={classNames({
          "relative w-[95vw] md:w-[35rem] h-[25rem] z-[10] rounded-xl": true,
          "flex overflow-hidden": true,
          "bg-center bg-no-repeat bg-cover": true,
        })}
        style={{ backgroundImage: `url(${img})` }}
      />
    </div>
  );
};

export default Right;
