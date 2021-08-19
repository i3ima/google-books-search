import { BookCategories, SearchOptions } from "types";

// TODO: rework this plz
const fetchBooks = (parameters: SearchOptions): Promise<Response | Error> =>
  fetch(
    `/api/volumes?q=${parameters.name}` +
      `${
        parameters.category === BookCategories.ALL
          ? ""
          : `+subject:${parameters.category.toLowerCase()}`
      }` +
      `&startIndex=${parameters.page * 30}&maxResults=${30}&orderBy=${
        parameters.sortBy
      }`,
    {
      headers: {
        "Content-Security-Policy": "default-src 'none'",
        "X-Content-Security-Policy": "default-src 'none'",
      },
      mode: "cors",
    }
  ).catch((error) => new Error(error));

export default fetchBooks;
