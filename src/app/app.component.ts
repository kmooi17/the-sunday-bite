import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cookies: Cookies[] = [
    {
      active: true, image: 'astros', flavour: 'Astronomical Swirl',
      description: `A vanilla soft cookie with the most amount of astros you can imagine, topped off with velvet cream cheese frosting with a twist.`,
      price: [75, 115], class: 'card-body one'
    },
    {
      active: true, image: 'bday-cake', flavour: 'Confetti Bomb',
      description: `Your childhood dream in a cookie. It tastes just like your mom's cake batter, topped with the best tasting cream cheese frosting.`,
      price: [70, 110], class: 'card-body two'
    },
    {
      active: true, image: 'candy-floss', flavour: 'Candy Rain',
      description: `Have you ever had a carnival in your mouth? Well now you can! You think it tastes great... wait until you smell it.`,
      price: [70, 110], class: 'card-body three'
    },
    {
      active: true, image: 'coffee', flavour: 'Cappa-Cookie',
      description: `Coffee lovers, this one is for you. Have you ever wanted to eat your coffee instead of drink it? Now's your chance.`,
      price: [60, 100], class: 'card-body one'
    },
    {
      active: true, image: 'pancakes', flavour: 'Surgary-Cin',
      description: ` Ever taken a bite from heaven? Here's your chance with the perfect balance between sweet & savoury. It will always have you coming back for more.`,
      price: [60, 100], class: 'card-body two'
    },
    {
      active: true, image: 'mint', flavour: 'Mental Mint Bombs',
      description: `Love chocolate but find it too sweet? This is the perfect balance. Chocolate & Mint - name a better duo.`,
      price: [60, 100], class: 'card-body three'
    },
    {
      active: true, image: 'choc', flavour: 'Chocolate Typhoon',
      description: `Attention all choco-holics! Chocolate three ways, sounds like a party at your place. A bite to die for worth every moment on the hips.`,
      price: [60, 100], class: 'card-body one'
    },
    {
      active: true, image: 'nutella', flavour: 'Delicate Surprise',
      description: `Every Nutella lover's dream in one cookie, topped with the smoothest Nutella frosting & strawberries just to balance it.`,
      price: [90, 130], class: 'card-body two'
    },
    {
      active: true, image: 'oreos', flavour: 'Nostalgic Delight ',
      description: `This cookie came to shake your taste buds awake. Two cookies for the price of one. A win-win kind of situation.`,
      price: [75, 115], class: 'card-body three'
    },
    {
      active: true, image: 'peanutbutter', flavour: 'Pean-nutty & nice',
      description: 'What is better than peanut butter? Mmm... yep I thought so, nothing! It will make you go nuts... in a good way.',
      price: [60, 100], class: 'card-body one'
    },
    {
      active: true, image: 'redvelvet', flavour: 'Queen of Hearts',
      description: 'Red Velvet cookie, that will leave even the Queen of Hearts jealous, with the smoothest cream cheese frosting.',
      price: [60, 100], class: 'card-body two'
    },
    { active: false, image: 'coconut', flavour: 'Back to the Beach', description: '', price: [75, 115], class: 'card-body one' },
    { active: false, image: 'rooibos', flavour: 'Mad Hatters Tea Party', description: '', price: [60, 100], class: 'card-body two' },
    {
      active: true, image: 'straw-cream', flavour: 'Lovers Paradise',
      description: `We are taking it back to the basics with a twist on a popular dessert. You can have it all in a few simple bites.`,
      price: [60, 100], class: 'card-body three'
    },
    {
      active: true, image: 'twix', flavour: 'Twixed Dreams',
      description: `Craving something caramel? We think Twix will satisfy that for you in a split second or even sooner...`,
      price: [70, 110], class: 'card-body one'
    },
    {
      active: false, image: 'variety', flavour: 'Variety Box (any 12 flavours)',
      description: ``,
      price: [0, 150], class: ''
    }
  ];

  deliveryPrices: DeliveryPrices[] = [
    { where: 'Regular Customers', amount: 25 },
    { where: 'Johannesburg', amount: 50 },
    { where: 'Pretoria', amount: 75 }
  ];

  menu: Cookies[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menu = this.cookies;

    this.cookies = this.cookies.filter((c: Cookies) => c.active);
  }

  openAppLink() {
    // TODO: Point to order app
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

export type DeliveryPrices = {
  where: string,
  amount: number
}