import { Footer as FooterContainer, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer container className="border border-t-8 border-teal-500">
      <div className="">
        <Link
          to={"/"}
          className="flex items-center gap-x-2 self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <Button
            gradientDuoTone={"purpleToBlue"}
            className="text-white rounded-lg inline-block pointer-events-none"
          >
            Dang&apos;s
          </Button>
          Blog
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
