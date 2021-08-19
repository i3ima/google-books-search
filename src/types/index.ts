import { FormikHelpers } from "formik";

export type AnyKV = { [key: string]: never };
export type FormikSubmitEvent<T extends Record<never, never>> = (
  values: T,
  helpers: FormikHelpers<T>
) => Promise<void>;

export * from "./books";
export * from "./ui";
