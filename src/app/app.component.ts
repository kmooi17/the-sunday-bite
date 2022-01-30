import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from './scroll-to.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  MenuItemsEnum = MenuItemsEnum;

  constructor(private scrollToService: ScrollToService, private router: Router) { }

  goTo(id: string): void {
    this.router.navigate(['/main']);

    setTimeout(() => {
      this.scrollToService.scrollTo.next(id);
    }, 0);
  }

}

export enum MenuItemsEnum {
  HOME = 'home',
  ABOUT = 'about',
  COOKIES = 'cookies',
  MENU = 'menu',
  CONTACT = 'contact'
}