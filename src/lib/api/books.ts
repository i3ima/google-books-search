import { BookCategories, SearchOptions } from "types";

// TODO: rework this plz
export const fetchBooks = (params: SearchOptions) =>
		fetch(
				`/api/volumes?q=${params.name}` +
				`${params.category === BookCategories.ALL ? '' : `+subject:${params.category.toLowerCase()}`}` +
				`&startIndex=${params.page * 30}&maxResults=${30}&orderBy=${params.sortBy}`, {
				 headers: {
				  'Content-Security-Policy': "default-src 'none'",
					'X-Content-Security-Policy': "default-src 'none'"
				 },
				 mode: 'cors'
				}
		).catch((e) => e)
