import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal'

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<OrderModalComponent>) { }

  ngOnInit(): void {
  }

}

export class Order {

}