const HEADER_DATA: _menuFeature[] = [
  { id: 0, menu: "Home", direct: "" },
  { id: 1, menu: "BBB", direct: "" },
  { id: 2, menu: "CCC", direct: "" },
  { id: 3, menu: "DDD", direct: "" },
];

const FOOTER_DATA: footerTag[] = [
  { tag: "About", link: "https://linkedin.com" },
  { tag: "Bookings", link: "#" },
  { tag: "Stories", link: "#" },
  { tag: "Events", link: "#" },
  { tag: "Careers", link: "#" },
  { tag: "Blog", link: "#" },
  { tag: "Contact us", link: "#" },
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
