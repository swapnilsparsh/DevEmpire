// import { Link } from "react-router-dom";
import Error from "../public/assets/svg/Error.svg";
import Image from "next/image";
import Link from "next/link";

const Error404 = () => {
  return (
    <div>
      <h2>Error 404!  Page Not Found!</h2>
      <Image src={Error} width={300} height={300} className="error-svg" alt="404 Not Found Image" />
      <Link href="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
