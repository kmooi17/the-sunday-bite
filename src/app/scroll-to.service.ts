import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService implements OnDestroy {

  scrollTo = new Subject<string>();

  #destroy$ = new Subject<void>();

  constructor() { }

  getScrollToId(): Observable<string> {
    return this.scrollTo.asObservable();
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete()
  }
}
