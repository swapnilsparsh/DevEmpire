import { GithubIcon, ProductHuntIcon, TwitterIcon } from "./icons/footericons";

export default function Footer() {
  return (
    <footer className=" bg-[#0093ed]">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between flex-wrap gap-2">
        <span className="text-md text-white sm:text-center">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://swapnilsparsh.github.io"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Swapnil Srivastava on Github"
              className="text-[#00253a]"
            >
              {" "}
              Swapnil
            </a>{" "}
            &
            <a
              href="https://jatinyadav.netlify.app  "
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Jatin Yadav on Github"
              className="text-[#00253a]"
            >
              {" "}
              Jatin
            </a>
          </p>
        </span>
        <ul className="flex flex-wrap items-center text-md justify-center text-white">
          <a
            className="hover:underline me-4 md:me-6"
            href="https://github.com/swapnilsparsh/DevEmpire"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            className="hover:underline me-4 md:me-6"
            href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            className="hover:underline me-4 md:me-6"
            href="https://www.producthunt.com/products/developer-empire"
            target="_blank"
          >
            <ProductHuntIcon />
          </a>
        </ul>
      </div>
    </footer>
  );
}
