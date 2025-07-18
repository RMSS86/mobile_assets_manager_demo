const HEADER_DATA: _menuFeature[] = [
  { id: 0, menu: "Home", direct: "/" },
  { id: 1, menu: "Items", direct: "items" },
  { id: 2, menu: "Track", direct: "track" },
  { id: 3, menu: "QR", direct: "qr" },
];

const FOOTER_DATA: footerTag[] = [
  { tag: "About", link: "about" },
  { tag: "Stories", link: "#" },
  { tag: "Tutorials", link: "www.udemy.com" },
  { tag: "Careers", link: "www." },
  { tag: "Blog", link: "www.medium.com" },
  { tag: "Contact us", link: "https://www.linkedin.com/in/robert-solis-stevenson-6a458a265/" },
];

export { HEADER_DATA, FOOTER_DATA };
/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES////
/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES////
type _menuFeature = {
  id: number;
  menu: string;
  direct: string;
  action?: () => void;
};

type footerTag = {
  tag: string;
  link: string;
  _function?: () => {};
};

type _brandings = {
  logoName: string;
  logoDir: string;
  direct: string;
  alt: string;
};
