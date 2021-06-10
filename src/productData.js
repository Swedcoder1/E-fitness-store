import foamRoller from "../src/product pic/Foam-Roller.jpeg";
import kettleBell from "../src/product pic/kettle-bell.jpg";
import resistanceBand from "../src/product pic/resistance-band.jpg";
import sportsTape from "../src/product pic/sports-tape.jpg";
import dumbbells from "../src/product pic/dumbbells1.jpg";
import yogaMat from "../src/product pic/yoga-mat.jpg";
import { v4 as uuidv4 } from "uuid";

export const productData = [
  {
    id: uuidv4(),
    img: foamRoller,
    title: "Foamroller",
    price: 499,
    amount: 1,
  },
  {
    id: uuidv4(),
    img: kettleBell,
    title: "Kettle bell",
    price: 899,
    amount: 1,
  },
  {
    id: uuidv4(),
    img: resistanceBand,
    title: "Resistance band",
    price: 299,
    amount: 1,
  },
  {
    id: uuidv4(),
    img: sportsTape,
    title: "Sports tape",
    price: 199,
    amount: 1,
  },
  {
    id: uuidv4(),
    img: dumbbells,
    title: "Dumbbells",
    price: 399,
    amount: 1,
  },
  {
    id: uuidv4(),
    img: yogaMat,
    title: "Yoga mat",
    price: 99,
    amount: 1,
  },
];
