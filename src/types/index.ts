import { FormikHelpers } from "formik";

export type AnyKV = { [key: string]: any };
export type FormikSubmitEvent<T extends Record<any, any>> = (values: T, helpers: FormikHelpers<T>) => Promise<void>;

export * from './books'
export * from './ui'