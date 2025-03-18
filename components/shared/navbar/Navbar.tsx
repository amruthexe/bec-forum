import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import GlobalSearch from "../search/GlobalSearch";
import Mobile from "./Mobile";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/images/logov1.png"
          width={50}
          height={50}
          alt="Forum"
        />

        <p className="h2-bold  font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Bec Forum
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Link href='/jobs' className="dark:text-white  text-bold "> Report </Link>
        <Theme />

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>

        <Mobile />
      </div>
    </nav>
  );
};

export default Navbar;
