import { useContext, useEffect, useState } from "react";
import Book from "../Book/Book";
import { BookContext } from "../../context/BookContext";

export default function Books() {
  const { books, setSearchedBook, searchedBook, setBooks } =
    useContext(BookContext);

  const handleFavourite = (book) => {
    const newBooks = books.map((b) => {
      if (b.id === book.id) {
        return { ...b, favourite: !b.favourite };
      } else return b;
    });

    setBooks(newBooks);
  };
  const handleAddToCart = (book) => {
    const newBooks = books.map((b) => {
      if (b.id === book.id) {
        return { ...b, cart: !b.cart };
      } else return b;
    });

    setBooks(newBooks);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let searchedValue = e.target.search.value.toLowerCase();
    setSearchedBook(searchedValue);
  };

  const handleSortChange = (e) => {
    // Ascending order of title
    if (e.target.value == "name_asc") {
      let booksTemp = [...books];
      let sortedArr = booksTemp.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });

      setBooks(sortedArr);
    } else if (e.target.value == "name_desc") {
      let booksTemp = [...books];
      let sortedArr = booksTemp.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        } else if (a.title > b.title) {
          return -1;
        } else {
          return 0;
        }
      });

      setBooks(sortedArr);
    }
    // sorting oldest
    else if (e.target.value == "year_asc") {
      let booksTemp = [...books];
      let sortedArr = booksTemp.sort((a, b) => {
        if (a.publicationYear < b.publicationYear) {
          return -1;
        } else if (a.publicationYear > b.publicationYear) {
          return 1;
        } else {
          return 0;
        }
      });

      setBooks(sortedArr);
    }
    //sorting newest
    else if (e.target.value == "year_desc") {
      let booksTemp = [...books];
      let sortedArr = booksTemp.sort((a, b) => {
        if (a.publicationYear < b.publicationYear) {
          return 1;
        } else if (a.publicationYear > b.publicationYear) {
          return -1;
        } else {
          return 0;
        }
      });

      setBooks(sortedArr);
    }
  };

  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
            <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
              Trending Books of the Year
            </h2>

            <form>
              <div className="flex">
                <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                  <input
                    type="search"
                    onChange={(e) => setSearchedBook(e.target.value)}
                    name="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                    placeholder="Search Book"
                    required
                  />
                  <div className="absolute right-0 top-0 flex h-full items-center">
                    <button
                      type="submit"
                      className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-eLg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                    >
                      <svg
                        className="h-[14px] w-[14px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex items-stretch space-x-3">
            <select
              className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
              name="sortBy"
              id="sortBy"
              onChange={handleSortChange}
            >
              <option value="">Sort</option>
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
              <option value="year_asc">Publication Year (Oldest)</option>
              <option value="year_desc">Publication Year (Newest)</option>
            </select>
          </div>
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books
          .filter((book) => book.title.toLowerCase().includes(searchedBook))
          .map((book) => (
            <Book
              book={book}
              handleAddToCart={handleAddToCart}
              handleFavourite={handleFavourite}
            />
          ))}
      </div>
    </main>
  );
}
