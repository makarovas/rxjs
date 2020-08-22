// eslint-disable-next-line require-jsdoc
export class CustomIterator {
  private cursor = 0;
  private value!: number;
  constructor(private arr: number[], private divisor: number = 1) {

  }
  private next() {
    while (this.cursor < this.arr.length) {
      this.value = this.arr[this.cursor++];
      if(this.value % this.divisor === 0 ) {
        return {done: false, value: this.value}
      } 
    }
    return { done: true, value: this.value};
  }
  [Symbol.iterator] (){
    return {
      next: this.next.bind(this)
    }
 }
}

const consumer = new CustomIterator([2,12,3,3,4,5], 3)

// console.log(consumer.next())



// console.log(consumer.next())

// console.log(consumer.next())

// for(let item of consumer) {
//   console.log(item);
// }

Array.from(consumer).forEach((v)=> console.log(v));

interface Listener { 
  next(message:string): void 

}

class Producer {
  
  private listeners: Listener[] = [];
  public subscribe(listener: Listener) {
    const index = this.listeners.push(listener);
    return { 
      unsubscribe: () => this.listeners.splice(index-1, 1);
    }
  }
  public notify(message: string) {
    this.listeners.forEach((listener) => {
      listener.next(message);
    })
  }
}

const listener1 = {
  next(message: string) {
    console.log('Listener1', message)
  }
}

const listener2 = {
  next(message: string) {
    console.log('Listener1', message)
  }
}

const notifier  = new Producer();
const sub1  = notifier.subscribe(listener1);
const sub2 = notifier.subscribe(listener2);

notifier.notify('hi all')

sub1.unsubscribe();

setInterval(() =>{
  notifier.notify('After1')
}, 5000)