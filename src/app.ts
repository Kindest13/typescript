import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import { Book, Librarian, Logger, Person, Magazine } from './intefaces';
import { BookRequiredFields, PersonBook } from './types';
import {
    getAllBooks,
    getBookByCategory,
    getBookByCategoryPromise,
    getProperty,
    logCategorySearch, logSearchResults,
    printRefBook,
    purge
} from './functions';
import type { Library } from './classes/library';
import { UniversityLibrarian } from './classes/university-librarian'
import Encyclopedia from './classes/encyclopedia'


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ==================================================




// interface A {
//     a: number;
// }


// ===================================================
// Task 02.01
// logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

// const result = getBookAuthorByIndex(1);
// console.log(result);

// console.log(calcTotalPages());

// Task 03.01
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name1: string, id: number) => `${id}-${name1}`;
// idGenerator = createCustomerID;
// myID = idGenerator('Boris', 2);
// console.log(myID);



// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');
// createCustomer('Anna', undefined, 'Kyiv');
// createCustomer('Anna', null, 'Kyiv');
// createCustomer('Anna', 0, 'Kyiv');

// const titles = getBookTitlesByCategory(Category.CSS);
// console.log(titles);
// logFirstAvailable();
// console.log(getBookByID(1));

// const myBooks = сheckoutBooks('Anna', ...[1, 2, 4]);
// console.log(myBooks);

// Task 03.03
// console.log(getTitles(4, true));

// Task 03.04
// console.log(bookTitleTransform('JavaScript'));
// console.log(bookTitleTransform(123));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 300,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task04.02
// const logDamage: Logger /* DamageLogger */ = (reason: number | string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 3
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Research',
//     assistCustomer: (name: string) => console.log(name)
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'Unknown', 2021);
// ref.printItem();
// console.log(ref);
// ref.publisher = 'Anna';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 05.03, 06.03
// const refBook = new Encyclopedia(1, 'TypeScript', 2021, 1);
// const refBook = new RefBook(1, 'TypeScript', 2021, 1);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// printRefBook(refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);


// Task 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//     author: 'Anna',
//     available: false,
//     category: Category.TypeScript,
//     email: 'anna@example.com',
//     id: 1,
//     name: 'Anna',
//     title: 'Learn TypeScript',
//     markDamaged: null,
//     pages: 500
// };
// console.log(personBook);

// Task 06.05
// const flag = true;
// if (flag) {
//     // const module = await import('./classes');
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[1]);
//             console.log(reader);
//         });
// }

// Task 06.06
// let lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: 'Kyiv,...'
// } as Library;
// console.log(lib);

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result = purge<Book>(inventory);
// console.log(result);
// const result2 = purge([1, 2, 3, 4]);
// console.log(result2);

// Task 07.02
const bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(item => bookShelf.add(item));
console.log(bookShelf.getFirst());

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf = new Shelf<Magazine>();
magazines.forEach(item => magazineShelf.add(item));
console.log(magazineShelf.getFirst());

// Task 07.03

// magazineShelf.printTitles()
console.log()

// console.log(getProperty(getAllBooks()[0], 'category'))
// console.log(getProperty(getAllBooks()[0], 'title'))
// console.log(getProperty(getAllBooks()[0], 'title2')) // error

// Task 07.04

// const brf: BookRequiredFields = {
//     id: 1,
//     author: 'a',
//     available: false,
//     category: Category.Software,
//     markDamaged: null,
//     pages: 200,
//     title: 'Nina'
// }


// Task 08.01

// const ul = new UL.UniversityLibrarian()
// // UL.UniversityLibrarian['a'] = 1
// console.log(ul)

// Task 08.02

// ul.name = 'Anna'
// ul['printLibrarian']()
// ul.assistCustomer('Boris')

// Task 08.03

// ul.assistFaculty = null
// ul.teachCommunity = null

// Task 08.05, 08.06
//
// const ul = new UL.UniversityLibrarian()
// ul.name = 'Anna'
// ul.assistCustomer('Boris')
// console.log(ul)


// Task 08.07

// const en = new RefBook(1, 'Big Enc', 2021, 2)
// en.copies = 10
//
// console.log(en)

// Task 09.01

// console.log('Begin')
// getBookByCategory(Category.JavaScript, logCategorySearch)
// console.log('End')


// Task 09.02
// console.log('Begin')
// getBookByCategoryPromise(Category.JavaScript)
//     .then(data => {
//         console.log(data)
//         return data.length
//     })
//     .then(num => console.log(num))
//     .catch(error => console.log(error))
// getBookByCategoryPromise(Category.Software)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// console.log('End')

// Task 09.03
console.log('Begin')
logSearchResults(Category.Software)
    .then(length => {
        console.log(length)
    })
    .catch(error => console.log(error))
console.log('End')
