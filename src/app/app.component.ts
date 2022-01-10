import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cookies: Cookies[] = [
    {
      active: true, image: 'astros', flavour: 'Astros',
      description: `A vanilla soft cookie with the most amount of astros you can imagine, topped off with velvet cream cheese frosting with a twist.`,
      price: [50, 90], class: 'card-body two'
    },
    {
      active: true, image: 'bday-cake', flavour: 'Birthday Cake Milkshake',
      description: `Your childhood dream in a cookie. It tastes just like your mom's cake batter, topped with the best tasting cream cheese frosting.`,
      price: [45, 85], class: 'card-body one'
    },
    {
      active: true, image: 'candy-floss', flavour: 'Candyfloss',
      description: `Have you ever had a carnival in your mouth? Well now you can! You think it tastes great... wait until you smell it.`,
      price: [50, 90], class: 'card-body two'
    },
    {
      active: true, image: 'coffee', flavour: 'Cappuccino',
      description: `Coffee lovers, this one is for you. Have you ever wanted to eat your coffee instead of drink it? Now's your chance.`,
      price: [45, 85], class: 'card-body two'
    },
    {
      active: true, image: 'pancakes', flavour: 'Cinnamon & Sugar Pancake',
      description: ` Ever taken a bite from heaven? Here's your chance with the perfect balance between sweet & savoury. It will always have you coming back for more.`,
      price: [40, 80], class: 'card-body two'
    },
    {
      active: true, image: 'mint', flavour: 'Choc Mint',
      description: `Love chocolate but find it too sweet? This is the perfect balance. Chocolate & Mint - name a better duo.`,
      price: [40, 80], class: 'card-body one'
    },
    {
      active: true, image: 'choc', flavour: 'Death by Chocolate',
      description: `Attention all choco-holics! Chocolate three ways, sounds like a party at your place. A bite to die for worth every moment on the hips.`,
      price: [45, 85], class: 'card-body one'
    },
    {
      active: true, image: 'nutella', flavour: 'Nutella',
      description: `Every Nutella lover's dream in one cookie, topped with the smoothest Nutella frosting & strawberries just to balance it.`,
      price: [55, 95], class: 'card-body two'
    },
    {
      active: true, image: 'oreos', flavour: 'Oreo Milkshake',
      description: `This cookie came to shake your taste buds awake. Two cookies for the price of one. A win-win kind of situation.`,
      price: [50, 90], class: 'card-body one'
    },
    { active: false, image: 'peanut', flavour: 'Peanut Butter Surprise', description: '', price: [40, 80], class: 'card-body one' },
    { active: false, image: 'red-velvet', flavour: 'Red Velvet', description: '', price: [45, 85], class: 'card-body two' },
    // { image: 'coconut', flavour: 'Pina Colada', description: '', price: [40, 80], class: 'card-body one'},
    // { image: 'rooibos', flavour: 'Rooibos Tea', description: '', price: [40, 80], class: 'card-body two'}
    {
      active: true, image: 'straw-cream', flavour: 'Strawberries & Cream',
      description: `We are taking it back to the basics with a twist on a popular dessert. You can have it all in a few simple bites.`,
      price: [45, 85], class: 'card-body one'
    },
    {
      active: true, image: 'twix', flavour: 'Twix',
      description: `Craving something caramel? We think Twix will satisfy that for you in a split second or even sooner...`,
      price: [50, 90], class: 'card-body two'
    }
  ];

  menu: Cookies[] = [];

  ngOnInit(): void {
    this.menu = this.cookies;
    this.cookies = this.cookies.filter((c: Cookies) => c.active);
  }
}

export type Cookies = {
  active: boolean,
  image: string,
  flavour: string,
  description: string,
  price: [number, number],
  class: string
}
