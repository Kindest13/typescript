import { Author, Book, Person } from './interfaces';
import { getBookByCategoryPromise } from './functions'
import { Category } from './enums'

export type BookProperties = keyof Book
export type PersonBook = Person & Book
export type BookOrUndefined = Book | undefined

export type BookRequiredFields = Required<Book>
export type UpdatedBook = Partial<Book>
export type AuthorWithoutEmail = Omit<Author, 'email'>

export type fn = (p1: string, p2: number, p3: boolean) => symbol
export type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never
export type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never
export type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never
export type P1 = Param1<fn> // string
export type P2 = Param2<fn> // number
export type P3 = Param3<fn> // boolean

export type Unpromisify<T> = T extends Promise<infer R> ? R : never
// type fnType = (category: Category) => Promise<string[]>
// type fnType2 = ReturnType<fnType>
type fnType = ReturnType<typeof getBookByCategoryPromise>
type PromiseValueType = Unpromisify<fnType>
