import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls infused with black truffle, served with garlic aioli.',
    price: 14,
    category: 'starter',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    name: 'Wagyu Beef Carpaccio',
    description: 'Thinly sliced raw wagyu, parmesan shavings, capers, and truffle oil.',
    price: 22,
    category: 'starter',
    image: 'https://picsum.photos/400/300?random=2',
    popular: true
  },
  {
    id: '3',
    name: 'Pan-Seared Scallops',
    description: 'Jumbo scallops with cauliflower purée and crispy pancetta.',
    price: 19,
    category: 'starter',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: '4',
    name: 'Herb-Crusted Lamb Rack',
    description: 'Served with fondant potatoes, seasonal greens, and a red wine reduction.',
    price: 38,
    category: 'main',
    image: 'https://picsum.photos/400/300?random=4',
    popular: true
  },
  {
    id: '5',
    name: 'Miso Glazed Black Cod',
    description: 'Sustainably sourced cod, marinated in sweet miso, served with bok choy.',
    price: 34,
    category: 'main',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: '6',
    name: 'Wild Mushroom Risotto',
    description: 'Arborio rice, porcini mushrooms, parmesan crisp, and truffle oil.',
    price: 26,
    category: 'main',
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: '7',
    name: 'Dark Chocolate Fondant',
    description: 'Molten center chocolate cake served with vanilla bean ice cream.',
    price: 12,
    category: 'dessert',
    image: 'https://picsum.photos/400/300?random=7',
    popular: true
  },
  {
    id: '8',
    name: 'Lemon Basil Tart',
    description: 'Zesty lemon curd in a buttery pastry shell, topped with italian meringue.',
    price: 11,
    category: 'dessert',
    image: 'https://picsum.photos/400/300?random=8'
  },
  {
    id: '9',
    name: 'Smoked Old Fashioned',
    description: 'Bourbon, maple syrup, angostura bitters, smoked with hickory wood.',
    price: 16,
    category: 'drink',
    image: 'https://picsum.photos/400/300?random=9'
  }
];

export const CATEGORIES = ['All', 'Starter', 'Main', 'Dessert', 'Drink'];