import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ScrollToService } from '../scroll-to.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnDestroy {

  #destroy$ = new Subject<void>();

  constructor(private scrollToService: ScrollToService) {
    this.scrollToService.scrollTo.next(undefined);
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete()
  }

}
