import ReactGA from "react-ga";

/* Social Media Icons (HelloWorld Section and Footer) */
type SocialMediaClickType =
  | "Email"
  | "LinkedIn"
  | "Github"
  | "Medium"
  | "Instagram";

export const gaSocialMediaLinkClicked = (action: SocialMediaClickType) => {
  ReactGA.event({
    category: "SocialMediaLinks",
    action: action,
  });
};

/* Navbar events */
type NavbarClickType = "HelloWorld" | "Experience" | "Top";

export const gaNavbarClicked = (action: NavbarClickType) => {
  ReactGA.event({
    category: "NavbarLinks",
    action: action,
  });
};

type ThemeChangeType = "Light" | "Dark";

export const gaThemeChanged = (action: ThemeChangeType) => {
  ReactGA.event({
    category: "Theme",
    action: action,
  });
};

/* CV Download */
export const gaCVDownload = () => {
  ReactGA.event({
    category: "CV",
    action: "Download",
  });
};
