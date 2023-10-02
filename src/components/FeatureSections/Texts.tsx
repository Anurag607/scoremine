import classNames from "classnames";

const Text1: React.FC = () => {
  return (
    <div
      className={classNames({
        "relative z-[20] w-fit md:mr-10 max-md:text-center": true,
        "flex flex-col justify-center md:items-end items-center": true,
      })}
    >
      <h1 className="bound font-semibold md:text-[1.75rem] text-xl uppercase text-gray-100">
        create groups
        <b className="opacity-30 !lowercase"> and</b>
      </h1>
      <div
        className={classNames({
          "px-0 py-4 md:leading-[0rem] leading-[0.6rem]": true,
        })}
      >
        <p
          className={classNames({
            "bound font-normal md:text-2xl text-lg": true,
            "flex md:justify-end justify-center items-center gap-2": true,
          })}
        >
          <b className="md:text-2xl text-2xl text-gray-100">schedule</b>
          <p className="text-gray-100 opacity-30">matches in</p>
        </p>
        <br />
        <p className="bound font-normal flex md:justify-end justify-center items-center gap-4 max-md:gap-1">
          <b className="capitalize md:text-3xl text-2xl text-gray-100">
            singles
          </b>
          <p className="text-gray-100 opacity-30">or</p>
          <b className="capitalize md:text-3xl text-2xl text-gray-100">
            doubles
          </b>
        </p>
        <br />
        <p className="bound font-normal md:text-2xl text-xl text-gray-50 opacity-30">
          with your friends.
        </p>
      </div>

      <h1
        className={classNames({
          "md:text-[3rem] text-[2rem] md:leading-[2.75rem] leading-[2rem]":
            true,
          "bound font-bold capitalize text-gray-200": true,
        })}
      >
        rate yourself on your matches.
      </h1>
    </div>
  );
};

const Text2: React.FC = () => {
  return (
    <div
      className={classNames({
        "relative z-[20] w-fit md:mr-10 max-md:text-center": true,
        "flex flex-col justify-center md:items-start items-center": true,
      })}
    >
      <h1 className="bound font-semibold md:text-[1.75rem] text-xl uppercase text-gray-100">
        keep track
        <b className="opacity-30 !lowercase"> of</b>
        <b className="md:text-2xl text-xl text-gray-100"> all</b>
        <p className="text-gray-100 opacity-30 !lowercase">the</p>
      </h1>
      <div
        className={classNames({
          "px-0 py-3 md:py-4 md:leading-[0rem] leading-[0.6rem]": true,
        })}
      >
        <p className="bound font-normal flex md:justify-start flex-wrap justify-center items-center gap-4 max-md:gap-1">
          <b className="capitalize md:text-3xl text-2xl text-gray-100">
            events
          </b>
          <p className="text-gray-100 opacity-30">and</p>
          <b className="capitalize md:text-3xl text-2xl text-gray-100">
            tournaments
          </b>
        </p>
        <br />
        <p className="bound font-normal md:text-2xl text-xl text-gray-50 opacity-30">
          happening in India.
        </p>
      </div>

      <h1
        className={classNames({
          "md:text-[3rem] text-[2rem] md:leading-[2.75rem] leading-[2rem]":
            true,
          "bound font-bold capitalize text-gray-200": true,
        })}
      >
        participate and win.
      </h1>
    </div>
  );
};

const Text3: React.FC = () => {
  return (
    <div
      className={classNames({
        "relative z-[20] w-fit md:mr-10 max-md:text-center": true,
        "flex flex-col justify-center md:items-end items-center": true,
      })}
    >
      <h1 className="bound font-semibold md:text-[1.75rem] text-xl uppercase text-gray-100">
        <b className="opacity-30 !lowercase">track your</b> progress
      </h1>
      <div
        className={classNames({
          "px-0 py-2 md:leading-[0rem] leading-[0.6rem]": true,
        })}
      >
        <p
          className={classNames({
            "bound font-normal md:text-2xl text-xl": true,
            "flex max-md:flex-col md:justify-end justify-center items-center gap-2":
              true,
          })}
        >
          <b className="text-2xl text-gray-100">keep</b>
          <p className="text-gray-100 opacity-30">track of all your matches</p>
        </p>
        <p
          className={classNames({
            "bound font-normal md:text-2xl text-xl": true,
            "flex max-md:flex-col md:justify-end justify-center items-center gap-2":
              true,
          })}
        >
          <p className="text-gray-100 opacity-30">practice hard and</p>
          <b className="text-2xl text-gray-100">improve.</b>
        </p>
      </div>

      <h1
        className={classNames({
          "md:text-[3rem] text-[2rem] md:leading-[2.75rem] leading-[2rem]":
            true,
          "bound font-bold capitalize text-gray-200": true,
        })}
      >
        rate yourself on your matches.
      </h1>
    </div>
  );
};

export { Text1, Text2, Text3 };
