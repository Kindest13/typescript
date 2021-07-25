import * as Interfaces from './../intefaces';
import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators'

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian /* , A */ {
    @format() name: string;
    email: string;
    department: string;

    // a: number;
    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting Faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };