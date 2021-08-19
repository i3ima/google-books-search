import { SearchOptions } from "../../types";


export const fetchBooks = (params: SearchOptions) =>
		fetch(
		`/api/volumes?q=${params.name}&startIndex=${params.page * 30}&maxResults=${30}&orderBy=${params.sortBy}`
		).catch((e) => e)
