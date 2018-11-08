import { Pony } from './pony';
import { DomSanitizer } from '@angular/platform-browser';

export class Race {

    id: number;
    ponies: Array<Pony>;
    location: string;
    date:Date;
   
    constructor(location?:string, date?:Date)
    {
        this.id=0;
        this.ponies= [];
        this.location = location === undefined ? '' : location;
        this.date = date === undefined ? new Date() : date;
    }
}
