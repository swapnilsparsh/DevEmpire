import Error from "../public/assets/svg/Error.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/404.module.css";

const Error505 = () => {
  return (
    <div className={styles.error_page}>
      <h2>Error 505! Server-side error occurred!</h2>
      <Image src={Error} width={300} height={300} className="error-svg" alt="505! Serverside error Image" />
      <Link href="/">
        Go back
      </Link>
    </div>
  );
};

export default Error505;