import Image from "next/image";
import Link from "next/link";
import Error from "../public/svg/Error.svg";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center scroll-smooth h-screen">
      <h2 className=" text-[#0093ed] text-2xl mt-4 text-center">
        Error 404! Page Not Found!
      </h2>
      <Image
        src={Error}
        width={0}
        height={0}
        className=" mx-4 my-0 w-72 max-w-[70%]"
        alt="404 Not Found Image"
      />
      <Link
        className="text-gray-900 mt-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}
