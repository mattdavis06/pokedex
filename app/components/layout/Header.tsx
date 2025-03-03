import HeaderImage from "@/public/pokedex-image.svg";
import HeaderLogo from "@/public/pokedex-logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto max-w-screen-md px-4 py-6 md:pb-8 md:pt-16">
      <Link href={"/"} className="flex items-center justify-center md:gap-8">
        <Image
          src={HeaderLogo}
          width={300}
          height={300}
          alt="pokedex-logo"
          className="aspect-auto max-w-[75%] flex-1 object-cover"
          priority
        />
        <Image
          src={HeaderImage}
          width={80}
          height={80}
          alt="pokedex-image"
          className=" max-w-1/4 aspect-auto max-w-[25%] flex-1 object-cover"
          priority
        />
      </Link>
    </header>
  );
};

export default Header;
