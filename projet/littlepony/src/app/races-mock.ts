import { Pony } from './pony';
import { Race } from './race';
import {PONIES} from './ponies-mock';
//let ponies: Array<Pony>;
export const RACES: Array<Race> = [
    {id:1,ponies:[
        {id:0,name:'rainbow', weight:10, color:'black', age:10},
        {id:1,name:'bond', weight:10, color:'brown', age:10},
        {id:2,name:'edge', weight:11, color:'black', age:12},
        {id:3,name:'calipso', weight:11, color:'grey', age:12}
    ],location:'china',date: new Date() },
    {id:2,ponies:[
        {id:0,name:'rainbow', weight:10, color:'black', age:10},
        {id:1,name:'bond', weight:10, color:'brown', age:10},
        {id:2,name:'edge', weight:11, color:'black', age:12},
        {id:3,name:'calipso', weight:11, color:'grey', age:12}
    ],location:'france', date: new Date() }
];
