import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cookies: Cookies[] = [
    { image: 'astros', flavour: 'Astros', description: '', price: [50, 90] },
    { image: 'bday-cake', flavour: 'Birthday Cake Milkshake', description: '', price: [45, 85] },
    { image: 'candy-floss', flavour: 'Candyfloss', description: '', price: [50, 90] },
    { image: 'choc', flavour: 'Death by Chocolate', description: '', price: [45, 85] },
    { image: 'coffee', flavour: 'Cappuccino', description: '', price: [45, 85] },
    { image: 'mint', flavour: 'Choc Mint', description: '', price: [40, 80] },
    { image: 'nutella', flavour: 'Nutella', description: '', price: [55, 95] },
    { image: 'oreos', flavour: 'Oreo Milkshake', description: '', price: [50, 90] },
    { image: 'pancakes', flavour: 'Cinnamon & Sugar Pancake', description: '', price: [40, 80] },
    { image: 'straw-cream', flavour: 'Strawberries & Cream', description: '', price: [45, 85] },
    { image: 'twix', flavour: 'Twix', description: '', price: [50, 90] },
    { image: 'red-velvet', flavour: 'Red Velvet', description: '', price: [45, 85] },
    { image: 'peanut', flavour: 'Peanut Butter Surprise', description: '', price: [40, 80] },
    // { image: 'coconut', flavour: 'Pina Colada', description: '', price: [40, 80] },
    // { image: 'rooibos', flavour: 'Rooibos Tea', description: '', price: [40, 80] }
  ]
}

export type Cookies = {
  image: string,
  flavour: string,
  description: string,
  price: [number, number]
}
