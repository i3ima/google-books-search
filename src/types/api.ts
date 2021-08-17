import { AnyKV } from "./index";

export type ApiRequestConfig = {
 path: string
 method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
 query?: AnyKV
 headers?: AnyKV | AnyKV[]
 body?: AnyKV | AnyKV[]
}