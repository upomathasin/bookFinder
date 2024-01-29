import logo from "../../assets/lws-logo-en.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
export default function Navbar() {
  const { setSearchedBook, books } = useContext(BookContext);

  // const handleShowFavourite = () => {
  //   const searchBooks = books.filter((book) => book.favourite === true);
  //   setSearchedBook(searchBooks);
  // };
  // const handleShowAddToCart = () => {
  //   const searchBooks = books.filter((book) => book.cart === true);
  //   setSearchedBook(searchBooks);
  // };

  // const handleShowBooks = () => {
  //   setSearchedBook(books);
  // };
  return (
    <nav className="py-6 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={logo}
            alt="Lws"
          />
        </a>
      </div>
    </nav>
  );
}
