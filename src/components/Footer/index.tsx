import classNames from "classnames";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className={classNames({
        "w-screen pb-6 mt-12": true,
        "bg-transparent": true,
      })}
    >
      <div
        className={classNames({
          "flex items-center flex-wrap justify-between w-screen": true,
          "mobile:flex-col px-8": true,
        })}
      >
        <div
          className={"flex flex-row-reverse justify-start items-center gap-2"}
        >
          <h1 className="bound text-2xl dark:text-gray-50">ScoreMine</h1>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-[3px] bg-blue-600 dark:bg-indigo-600" />
            <div className="w-2 h-[2px] bg-blue-600 dark:bg-indigo-600" />
            <div className="w-4 h-[3px] bg-blue-600 dark:bg-indigo-600" />
          </div>
        </div>
        <ul className="flex flex-wrap justify-center items-center gap-4 mb-6 max-sm:mb-0 mobile:mb-0 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link to="#">
              <span className="hover:underline hover:cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="hover:underline hover:cursor-pointer">
                Privacy Policy
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="hover:underline hover:cursor-pointer">
                Discord
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4 max-sm:w-screen mobile:w-screen" />
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        ©&nbsp;
        <a href="/" className="hover:underline">
          ScoreMine
        </a>
        &nbsp;All Rights Reserved.
      </span>
    </footer>
  );
}
