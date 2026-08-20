import margherita from "../assets/pizza/margherita.jpg";
import farmHouse from "../assets/pizza/farm-house.jpg";
import paneerPizza from "../assets/pizza/paneer-pizza.jpg";
import cheeseCorn from "../assets/pizza/cheese-corn.jpg";
import veggiePizza from "../assets/pizza/veggie-pizza.jpg";
import mexicanPizza from "../assets/pizza/mexican-pizza.jpg";
import chickenPizza from "../assets/pizza/chicken-pizza.jpg";

import classicBurger from "../assets/burger/classic-burger.jpg";
import cheeseBurger from "../assets/burger/cheese-burger.jpg";
import paneerBurger from "../assets/burger/paneer-burger.jpg";
import chickenBurger from "../assets/burger/chicken-burger.jpg";
import vegBurger from "../assets/burger/veg-burger.jpg";
import doubleBurger from "../assets/burger/double-burger.jpg";
import spicyBurger from "../assets/burger/spicy-burger.jpg";

import chickenBiryani from "../assets/biryani/chicken-biryani.jpg";
import muttonBiryani from "../assets/biryani/mutton-biryani.jpg";
import vegBiryani from "../assets/biryani/veg-biryani.jpg";
import paneerBiryani from "../assets/biryani/paneer-biryani.jpg";
import hyderabadiBiryani from "../assets/biryani/hyderabadi-biryani.jpg";
import dumBiryani from "../assets/biryani/dum-biryani.jpg";
import eggBiryani from "../assets/biryani/egg-biryani.jpg";

import cappuccino from "../assets/coffee/cappuccino.jpg";
import latte from "../assets/coffee/latte.jpg";
import espresso from "../assets/coffee/espresso.jpg";
import americano from "../assets/coffee/americano.jpg";
import mocha from "../assets/coffee/mocha.jpg";
import coldCoffee from "../assets/coffee/cold-coffee.jpg";
import frappe from "../assets/coffee/frappe.jpg";

import noodles from "../assets/chinese/noodles.jpg";
import friedRice from "../assets/chinese/fried-rice.jpg";
import manchurian from "../assets/chinese/manchurian.jpg";
import springRoll from "../assets/chinese/spring-roll.jpg";
import chilliPaneer from "../assets/chinese/chilli-paneer.jpg";
import momos from "../assets/chinese/momos.jpg";
import chilliChicken from "../assets/chinese/chilli-chicken.jpg";

import brownie from "../assets/desserts/brownie.jpg";
import chocolateCake from "../assets/desserts/chocolate-cake.jpg";
import iceCream from "../assets/desserts/ice-cream.jpg";
import gulabJamun from "../assets/desserts/gulab-jamun.jpg";
import cheesecake from "../assets/desserts/cheesecake.jpg";
import waffles from "../assets/desserts/waffles.jpg";
import donut from "../assets/desserts/donut.jpg";

import cocaCola from "../assets/drinks/coca-cola.jpg";
import pepsi from "../assets/drinks/pepsi.jpg";
import lemonade from "../assets/drinks/lemonade.jpg";
import mojito from "../assets/drinks/mojito.jpg";
import mangoShake from "../assets/drinks/mango-shake.jpg";
import strawberryShake from "../assets/drinks/strawberry-shake.jpg";
import orangeJuice from "../assets/drinks/orange-juice.jpg";

export const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "pizza",
    image: margherita,
    price: 199,
    rating: 4.6,
    restaurantId: "r2",
    type: "veg",
    description: "Classic pizza loaded with mozzarella cheese and fresh basil."
  },
  {
    id: 2,
    name: "Farm House Pizza",
    category: "pizza",
    image: farmHouse,
    price: 299,
    rating: 4.7,
    restaurantId: "r2",
    type: "veg",
    description: "Topped with capsicum, onion, tomato and mushrooms."
  },
  {
    id: 3,
    name: "Paneer Pizza",
    category: "pizza",
    image: paneerPizza,
    price: 329,
    rating: 4.5,
    restaurantId: "r2",
    type: "veg",
    description: "Soft paneer cubes with spicy Indian seasoning."
  },
  {
    id: 4,
    name: "Cheese Corn Pizza",
    category: "pizza",
    image: cheeseCorn,
    price: 249,
    rating: 4.4,
    restaurantId: "r2",
    type: "veg",
    description: "A creamy cheese and sweet corn delight."
  },
  {
    id: 5,
    name: "Veggie Pizza",
    category: "pizza",
    image: veggiePizza,
    price: 279,
    rating: 4.3,
    restaurantId: "r2",
    type: "veg",
    description: "Loaded with colourful vegetables and melted cheese."
  },
  {
    id: 6,
    name: "Mexican Pizza",
    category: "pizza",
    image: mexicanPizza,
    price: 349,
    rating: 4.6,
    restaurantId: "r2",
    type: "veg",
    description: "Spicy Mexican style pizza with jalapenos and herbs."
  },
  {
    id: 7,
    name: "Chicken Pizza",
    category: "pizza",
    image: chickenPizza,
    price: 379,
    rating: 4.8,
    restaurantId: "r2",
    type: "non-veg",
    description: "Juicy chicken chunks over cheesy pizza base."
  },

  {
    id: 8,
    name: "Classic Burger",
    category: "burger",
    image: classicBurger,
    price: 149,
    rating: 4.3,
    restaurantId: "r2",
    type: "veg",
    description: "Simple, tasty and freshly made classic burger."
  },
  {
    id: 9,
    name: "Cheese Burger",
    category: "burger",
    image: cheeseBurger,
    price: 179,
    rating: 4.5,
    restaurantId: "r2",
    type: "veg",
    description: "Crispy patty with extra cheese and special sauce."
  },
  {
    id: 10,
    name: "Paneer Burger",
    category: "burger",
    image: paneerBurger,
    price: 199,
    rating: 4.6,
    restaurantId: "r2",
    type: "veg",
    description: "Indian-style paneer patty with creamy dressing."
  },
  {
    id: 11,
    name: "Chicken Burger",
    category: "burger",
    image: chickenBurger,
    price: 229,
    rating: 4.7,
    restaurantId: "r2",
    type: "non-veg",
    description: "Juicy chicken patty with lettuce and spicy mayo."
  },
  {
    id: 12,
    name: "Veg Burger",
    category: "burger",
    image: vegBurger,
    price: 129,
    rating: 4.2,
    restaurantId: "r2",
    type: "veg",
    description: "Crunchy veg patty with fresh veggies."
  },
  {
    id: 13,
    name: "Double Burger",
    category: "burger",
    image: doubleBurger,
    price: 269,
    rating: 4.8,
    restaurantId: "r2",
    type: "non-veg",
    description: "Double layered burger for extra hunger."
  },
  {
    id: 14,
    name: "Spicy Burger",
    category: "burger",
    image: spicyBurger,
    price: 189,
    rating: 4.4,
    restaurantId: "r2",
    type: "veg",
    description: "A fiery burger with spicy sauce and crispy patty."
  },

  {
    id: 15,
    name: "Chicken Biryani",
    category: "biryani",
    image: chickenBiryani,
    price: 289,
    rating: 4.8,
    restaurantId: "r1",
    type: "non-veg",
    description: "Aromatic rice cooked with tender chicken and spices."
  },
  {
    id: 16,
    name: "Mutton Biryani",
    category: "biryani",
    image: muttonBiryani,
    price: 399,
    rating: 4.9,
    restaurantId: "r1",
    type: "non-veg",
    description: "Royal mutton biryani with rich flavour."
  },
  {
    id: 17,
    name: "Veg Biryani",
    category: "biryani",
    image: vegBiryani,
    price: 219,
    rating: 4.4,
    restaurantId: "r1",
    type: "veg",
    description: "Fresh vegetables cooked with fragrant basmati rice."
  },
  {
    id: 18,
    name: "Paneer Biryani",
    category: "biryani",
    image: paneerBiryani,
    price: 259,
    rating: 4.5,
    restaurantId: "r1",
    type: "veg",
    description: "Soft paneer cubes with royal biryani spices."
  },
  {
    id: 19,
    name: "Hyderabadi Biryani",
    category: "biryani",
    image: hyderabadiBiryani,
    price: 329,
    rating: 4.8,
    restaurantId: "r1",
    type: "non-veg",
    description: "Authentic Hyderabadi biryani with bold spices."
  },
  {
    id: 20,
    name: "Dum Biryani",
    category: "biryani",
    image: dumBiryani,
    price: 349,
    rating: 4.7,
    restaurantId: "r1",
    type: "non-veg",
    description: "Slow-cooked dum biryani packed with flavour."
  },
  {
    id: 21,
    name: "Egg Biryani",
    category: "biryani",
    image: eggBiryani,
    price: 229,
    rating: 4.3,
    restaurantId: "r1",
    type: "non-veg",
    description: "Delicious biryani served with boiled eggs."
  },

  {
    id: 22,
    name: "Cappuccino",
    category: "coffee",
    image: cappuccino,
    price: 149,
    rating: 4.6,
    restaurantId: "r3",
    type: "veg",
    description: "Rich espresso topped with silky milk foam."
  },
  {
    id: 23,
    name: "Latte",
    category: "coffee",
    image: latte,
    price: 159,
    rating: 4.5,
    restaurantId: "r3",
    type: "veg",
    description: "Smooth and creamy coffee for a relaxing mood."
  },
  {
    id: 24,
    name: "Espresso",
    category: "coffee",
    image: espresso,
    price: 119,
    rating: 4.4,
    restaurantId: "r3",
    type: "veg",
    description: "Strong and bold shot of premium coffee."
  },
  {
    id: 25,
    name: "Americano",
    category: "coffee",
    image: americano,
    price: 129,
    rating: 4.3,
    restaurantId: "r3",
    type: "veg",
    description: "Classic black coffee with clean flavour."
  },
  {
    id: 26,
    name: "Mocha",
    category: "coffee",
    image: mocha,
    price: 179,
    rating: 4.7,
    restaurantId: "r3",
    type: "veg",
    description: "Coffee with chocolatey goodness."
  },
  {
    id: 27,
    name: "Cold Coffee",
    category: "coffee",
    image: coldCoffee,
    price: 169,
    rating: 4.6,
    restaurantId: "r3",
    type: "veg",
    description: "Chilled creamy coffee, perfect for hot days."
  },
  {
    id: 28,
    name: "Frappe",
    category: "coffee",
    image: frappe,
    price: 199,
    rating: 4.7,
    restaurantId: "r3",
    type: "veg",
    description: "Icy blended coffee topped with cream."
  },

  {
    id: 29,
    name: "Noodles",
    category: "chinese",
    image: noodles,
    price: 179,
    rating: 4.5,
    restaurantId: "r4",
    type: "veg",
    description: "Wok-tossed noodles with vegetables and sauces."
  },
  {
    id: 30,
    name: "Fried Rice",
    category: "chinese",
    image: friedRice,
    price: 169,
    rating: 4.4,
    restaurantId: "r4",
    type: "veg",
    description: "Classic fried rice tossed with veggies."
  },
  {
    id: 31,
    name: "Manchurian",
    category: "chinese",
    image: manchurian,
    price: 189,
    rating: 4.6,
    restaurantId: "r4",
    type: "veg",
    description: "Crispy balls in spicy Indo-Chinese gravy."
  },
  {
    id: 32,
    name: "Spring Roll",
    category: "chinese",
    image: springRoll,
    price: 149,
    rating: 4.3,
    restaurantId: "r4",
    type: "veg",
    description: "Crispy rolls filled with spicy vegetables."
  },
  {
    id: 33,
    name: "Chilli Paneer",
    category: "chinese",
    image: chilliPaneer,
    price: 229,
    rating: 4.7,
    restaurantId: "r4",
    type: "veg",
    description: "Paneer cubes tossed with capsicum and chilli sauce."
  },
  {
    id: 34,
    name: "Momos",
    category: "chinese",
    image: momos,
    price: 139,
    rating: 4.5,
    restaurantId: "r4",
    type: "veg",
    description: "Steamed dumplings served with spicy chutney."
  },
  {
    id: 35,
    name: "Chilli Chicken",
    category: "chinese",
    image: chilliChicken,
    price: 259,
    rating: 4.8,
    restaurantId: "r4",
    type: "non-veg",
    description: "Chicken tossed in hot garlic chilli sauce."
  },

  {
    id: 36,
    name: "Brownie",
    category: "desserts",
    image: brownie,
    price: 129,
    rating: 4.6,
    restaurantId: "r3",
    type: "veg",
    description: "Fudgy chocolate brownie baked to perfection."
  },
  {
    id: 37,
    name: "Chocolate Cake",
    category: "desserts",
    image: chocolateCake,
    price: 199,
    rating: 4.8,
    restaurantId: "r3",
    type: "veg",
    description: "Soft chocolate cake layered with cream."
  },
  {
    id: 38,
    name: "Ice Cream",
    category: "desserts",
    image: iceCream,
    price: 99,
    rating: 4.4,
    restaurantId: "r3",
    type: "veg",
    description: "Creamy ice cream scoop in delicious flavours."
  },
  {
    id: 39,
    name: "Gulab Jamun",
    category: "desserts",
    image: gulabJamun,
    price: 119,
    rating: 4.5,
    restaurantId: "r1",
    type: "veg",
    description: "Soft Indian sweet soaked in sugar syrup."
  },
  {
    id: 40,
    name: "Cheesecake",
    category: "desserts",
    image: cheesecake,
    price: 229,
    rating: 4.7,
    restaurantId: "r3",
    type: "veg",
    description: "Creamy cheesecake with buttery crust."
  },
  {
    id: 41,
    name: "Waffles",
    category: "desserts",
    image: waffles,
    price: 189,
    rating: 4.6,
    restaurantId: "r3",
    type: "veg",
    description: "Crispy waffles with chocolate drizzle."
  },
  {
    id: 42,
    name: "Donut",
    category: "desserts",
    image: donut,
    price: 89,
    rating: 4.3,
    restaurantId: "r3",
    type: "veg",
    description: "Soft glazed donut for sweet cravings."
  },

  {
    id: 43,
    name: "Coca Cola",
    category: "drinks",
    image: cocaCola,
    price: 59,
    rating: 4.2,
    restaurantId: "r2",
    type: "veg",
    description: "Classic chilled Coca Cola."
  },
  {
    id: 44,
    name: "Pepsi",
    category: "drinks",
    image: pepsi,
    price: 59,
    rating: 4.2,
    restaurantId: "r2",
    type: "veg",
    description: "Refreshing chilled Pepsi."
  },
  {
    id: 45,
    name: "Lemonade",
    category: "drinks",
    image: lemonade,
    price: 79,
    rating: 4.3,
    restaurantId: "r3",
    type: "veg",
    description: "Fresh lemon drink with mint."
  },
  {
    id: 46,
    name: "Mojito",
    category: "drinks",
    image: mojito,
    price: 129,
    rating: 4.6,
    restaurantId: "r3",
    type: "veg",
    description: "Cool mint mojito with lime freshness."
  },
  {
    id: 47,
    name: "Mango Shake",
    category: "drinks",
    image: mangoShake,
    price: 149,
    rating: 4.7,
    restaurantId: "r3",
    type: "veg",
    description: "Thick mango shake made with fresh mango pulp."
  },
  {
    id: 48,
    name: "Strawberry Shake",
    category: "drinks",
    image: strawberryShake,
    price: 159,
    rating: 4.7,
    restaurantId: "r3",
    type: "veg",
    description: "Creamy strawberry shake with fruity flavour."
  },
  {
    id: 49,
    name: "Orange Juice",
    category: "drinks",
    image: orangeJuice,
    price: 99,
    rating: 4.5,
    restaurantId: "r3",
    type: "veg",
    description: "Freshly squeezed orange juice."
  }
];
