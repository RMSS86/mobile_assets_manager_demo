// // import React, { useEffect, useRef, useState } from "react";

// const ContextType = "div";

// /////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
// /////COMPONENET/////COMPONENET/////COMPONENET/////COMPONENET/////
// export default function TopNav({
//   children,
//   _navClassName,
//   _style,
//   _menuClass,
//   _onClick,
//   _linkWrap,
//   _linksClass,
//   _navLink,
//   ...rest
// }: _defaultProps) {
//   ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////
//   ///////FUNCTIONS//////////FUNCTIONS///////////FUNCTIONS///////////

//   ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
//   ////////RETURN/////RETURN/////RETURN/////RETURN/////RETURN/////
//   return (
//     <ContextType
//       {...rest}
//       className={_navClassName}
//       onClick={_onClick}
//       style={_style}
//     >
//       <ul className={_menuClass}>
//         {_menuFeatures.map((e: string) => (
//           <Links _feat={e} _liClassName={_linksClass} _navLink={_navLink} />
//         ))}
//         {/* {BookNowBtn(props, book[0])} */}
//       </ul>
//     </ContextType>
//   );
// }

// /////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
// /////TYPE/////TYPE/////TYPE/////TYPE/////TYPE/////TYPE///////
// type _defaultProps = {
//   children?: React.ReactNode;
//   _navClassName?: string;
//   _style?: React.CSSProperties;
//   _menuClass: string;
//   _linkWrap: string;
//   _linksClass: string;
//   _navLink: string;
//   _onClick?: () => void;
// };

// // const book: string[] = ["Book Now!", "Instant Memory!"];

// // const handleHover = function (e) {
// //   //console.log(e.target.className);
// //   if (e.target.classList.contains("nav__link")) {
// //     //console.log(e.target.classList.value, " Included");
// //     const link = e.target;
// //     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
// //     //console.log("siblings ", siblings);
// //     const logo = link.closest(".nav").querySelector("img");
// //     //console.log(logo);
// //     //console.log(this);
// //     siblings.forEach((el) => {
// //       if (el !== link) el.style.opacity = this;
// //     });
// //     logo.style.opacity = this;
// //   }
// // };

// //////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
// /////////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS//////IMPORTS/////////
// // import handleHover from '../'
// //@ts-ignore
// import Links from "../elements/links/Links"; //@ts-ignore
// import { _menuFeatures } from "../../../utility/data/data.ts"; //@ts-ignore
// import "./TopNavigator.scss";
