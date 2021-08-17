import { FormikHelpers } from "formik";

export enum BookCategories {
 ALL,
 ART,
 BIOGRAPHY,
 COMPUTERS,
 HISTORY,
 MEDICAL,
 POETRY
}

export type FormikSubmitEvent<T extends Record<any, any>> = (values: T, helpers: FormikHelpers<T>) => Promise<void>;

export interface SearchOptions {
 name: string
 category: BookCategories
 sortBy: 'relevance' | 'newest'
}