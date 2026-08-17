import { DealsContainerItem } from "../components/organisms/index";
import {
  DealsContainerImg1,
  DealsContainerImg2,
  DealsContainerImg3,
  DealsContainerImg4,
} from "../assets/images/index";

const future = new Date();
future.setDate(future.getDate() + 426);
future.setHours(future.getHours() + 8);
future.setMinutes(future.getMinutes() + 2);
future.setSeconds(future.getSeconds() + 58);

export const productList: DealsContainerItem[] = [
  {
    id: 1,
    imageSrc: DealsContainerImg1,
    targetDate: future,
    name: "Seeds of Change Organic Quinoa, Brown",
    link: "",
    rating: 4.0,
    provider: " NestFood",
    price: "29.99",
    oldPrice: "49.99",
  },
  {
    id: 2,
    imageSrc: DealsContainerImg2,
    targetDate: future,
    name: "Perdue Simply Smart Organics Gluten",
    link: "",
    rating: 1.4,
    provider: " Old El Paso",
    price: "14.99",
    oldPrice: "34.99",
  },
  {
    id: 3,
    imageSrc: DealsContainerImg3,
    targetDate: future,
    name: "Signature Wood-Fired Mushroom",
    link: "",
    rating: 2.6,
    provider: " Progresso",
    price: "69.99",
    oldPrice: "79.99",
  },
  {
    id: 4,
    imageSrc: DealsContainerImg4,
    targetDate: future,
    name: "Simply Lemonade with Raspberry Juice",
    link: "",
    rating: 3.5,
    provider: " Yoplait",
    price: "14.99",
    oldPrice: "22.99",
  },
];
