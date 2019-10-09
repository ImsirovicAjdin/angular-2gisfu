import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit() {
  // example 1
    of(2, 4, 6)
      .pipe(
        map(item => item *2),
        tap(item => console.log(item)),
        take(2)
      ).subscribe(console.log)

  // using TAP
    of(10, 20, 30)
      .pipe(
        tap(item => alert(item)),
        map(item => item * 2),
        tap(item => alert(item))
      ).subscribe()
  }

}


/*
AppleFactory: Items pass through a set of operations 

RxJS: 
- Items are piped through a set of operators
- Fashioned after .NET LINQ operators
- Similar to array methods such as filter and map

* APPLY OPERATORS IN SEQUENCE USING THE OBSERVABLE'S PIPE METHOD (Example 1)

RxJS Operators Overview: 

In this example, the 2 is emitted and processed through each operator, then 4 is emitted and processed through each operator, then the 6.

THE VALUE OUTPUT by the LAST OPERATOR (take(2))...

...is the value admitted to the RESULT OBSERVABLE ( subcribe(console.log) ), 
                                                             
and processed by the Observer's next method, which we passed to the subscribe().

The Observer is (console.log)

EACH OPERATOR TAKES IN AN OBSERVAABLE and SUBSCRIBED TO THAT INPUT,
then creates and returns an output observable.

As an item is emitted from an input Observable, the operator processes that item as defined by the operator's arguments.

Each items passes through all of the operators before the next item is processed.

When an item is emitted, item is transformed as specified by a provided function, called a projection function.

TAP taps into a stream without modifying it:

of(2,4,6)
  .pipe(
    tap(item => console.log(item)),
    map(item => item * 2),
    tap(item => console.log(item))
  ).subscribe

*/