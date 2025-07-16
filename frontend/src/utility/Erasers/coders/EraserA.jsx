//// mpping properly
// const BookList = (props) => {
//   //map over all of the book items to create a new card for each one in the list
//   const books = props.books.data.items.map((book) => {
//     console.log(book.id);
//     return (
//       <div className="col col-lg-4 grid-wrapper" key={book.id}>
//         <BookCard
//
//           image={book.volumeInfo.imageLinks.thumbnail}
//           title={book.volumeInfo.title}
//           author={book.volumeInfo.authors[0]}
//           description={book.volumeInfo.description}
//           previewLink={book.volumeInfo.previewLink}
//           buyLink={book.saleInfo.buyLink}
//         />
//       </div>
//     );
//   });

//   return <div>{books}</div>;
// };

const handleHover = function (e) {
  //console.log(e.target.className);
  if (e.target.classList.contains("nav__link")) {
    //console.log(e.target.classList.value, " Included");
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    //console.log("siblings ", siblings);
    const logo = link.closest(".nav").querySelector("img");
    //console.log(logo);
    //console.log(this);
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

const _links = (feat) => {
  return (
    <li className="nav__item">
      <a
        className="nav__link"
        href="#section--1"
        onMouseEnter={handleHover.bind(0.5)}
        onMouseOut={handleHover.bind(1)}
      >
        {feat}
      </a>
    </li>
  );
};

const BookNowBtn = (props, tag) => {
  return (
    <Fragment>
      <a
        className="nav__link nav__link--btn btn--show-modal"
        href="#"
        onMouseEnter={handleHover.bind(0.5)}
        onMouseOut={handleHover.bind(1)}
        //onClick={}
      >
        {tag}
      </a>
    </Fragment>
  );
};

const Navigation = (props) => {
  return (
    <div className="nav">
      <img
        src={logo}
        alt="Trax Logo"
        className="nav__logo"
        id="logo"
        data-version-number="3.0"
      ></img>

      <ul className="nav__links">
        <li>
          <ul className="nav__links">
            {features.map((e) => _links(e))}
            {BookNowBtn(props, book[0])}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
