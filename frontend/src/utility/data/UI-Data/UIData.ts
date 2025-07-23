const HEADER_DATA: _menuFeature[] = [
  { id: 0, menu: "Home", direct: "/" },
  { id: 1, menu: "Assets", direct: "assets" },
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

const SUB_HEADER_ITEMS: _icons[] = [
  { icon: Add_circle_icon },
  { icon: delete_icon },
  { icon: Fav_icon },
  { icon: search_icon },
  { icon: Qr_scan_icon },

]
const LOCAIION_TILE_ITEMS: _icons[] = [
  { icon: Add_circle_icon },
  { icon: Qr_scan_icon },
  { icon: delete_icon },


]
export { HEADER_DATA, FOOTER_DATA, SUB_HEADER_ITEMS, LOCAIION_TILE_ITEMS };
/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES////
/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES/////TYPES////
type _icons = {
  icon: string;
}

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

import {
    Add_circle_icon,     
    delete_icon,
    search_icon,
    Fav_icon,
    Qr_scan_icon, //@ts-ignore
  } from '../../../utility/assetsImport.js';
