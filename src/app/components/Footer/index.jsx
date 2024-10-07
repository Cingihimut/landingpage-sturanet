
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footers() {
  return (
    <Footer className=" bg-color-gray bg-opacity-20">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="Company" className="text-color-neutral" />
            <FooterLinkGroup col className="text-color-neutral" >
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/ecosystem">Ecosystem</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="community" className="text-color-neutral" />
            <FooterLinkGroup col className="text-color-neutral" >
              <FooterLink href="/discord">Discord Server</FooterLink>
              <FooterLink href="/x">X</FooterLink>
              <FooterLink href="/telegram">Telegram</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="legal" className="text-color-neutral" />
            <FooterLinkGroup col className="text-color-neutral" >
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/licensing">Licensing</FooterLink>
              <FooterLink href="terms">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 bg-opacity-15 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Sturan Network™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
