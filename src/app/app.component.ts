import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  // example 1
  ngOnInit() {
    of(2, 4, 6)
      .pipe(
        map(item => item *2),
        tap(item => console.log(item)),
        take(2)
      ).subscribe(console.log)
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

*/