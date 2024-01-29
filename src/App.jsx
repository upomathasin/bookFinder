import { useEffect, useState } from "react";
import Books from "./Components/Books/Books";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BookContext } from "./context/BookContext";
import { getBooks } from "../public/books";

export default function App() {
  const [books, setBooks] = useState(getBooks());

  const [searchedBook, setSearchedBook] = useState("");

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        setSearchedBook,
        searchedBook,
      }}
    >
      <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
        <Navbar></Navbar>
        <Books></Books>
        <Footer></Footer>
      </div>
    </BookContext.Provider>
  );
}
