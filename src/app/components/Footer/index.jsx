
import { DiscordLogo } from "@phosphor-icons/react";
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footers() {
  return (
    <Footer className=" bg-color-gray bg-opacity-20">
      <div className="w-full">
        <div className="w-full bg-gray-700 bg-opacity-15 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Sturan Network™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://x.com/sturanet" icon={BsTwitter} />
            <FooterIcon href="https://github.com/Sturan-Dev/WhitePaper" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
