import {Observable} from 'rxjs';

const sequence$ = new Observable((subscriber:any)=>{
  let count = 1;
  const intervalId = setInterval(()=> {
    subscriber.next(count++);
  });
});
