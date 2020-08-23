import {interval} from 'rxjs';

const sequence$ = interval(1000);

const sub1 = sequence$.subscribe((value)=> console.log('sub1', value));

const sub2 = sequence$.subscribe((value)=> console.log('sub2', value));

setTimeout(() => {
  sub1.unsubscribe();
}, 3000);
