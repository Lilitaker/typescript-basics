//Using the JS date-fns library - it supports TS types

import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // 0 = enero / 1 = febrero
const rta = subDays(date, 30); //Restar 30 días a la fecha
const string = format(rta, 'yyyy/MM/dd');
console.log(string); //1998/01/29
