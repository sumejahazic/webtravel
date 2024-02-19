import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Istanbul",
    city: "Turkey",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "neko neko",
        rating: 5.0,
      },
      {
        name: "neko neko",
        rating: 5.0,
      },
    ],
    avgRating: 5.0,
    photo: tourImg01,
  },
  {
    id: "02",
    title: "Paris",
    city: "France",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "neko neko",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
  },
  {
    id: "03",
    title: "Tokyo",
    city: "Japan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "neko neko",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
  },
  {
    id: "04",
    title: "Rio de Janeiro",
    city: "Brazil",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "neko neko",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
  },
  {
    id: "05",
    title: "Rome",
    city: "Italy",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "neko neko",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
  },
  {
    id: "06",
    title: "Cape Town",
    city: "South Africa ",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "neko neko",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
  },
  {
    id: "07",
    title: "Prague",
    city: "Czech Republic",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
  },
  {
    id: "08",
    title: "Sydney",
    city: "Australia",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "neko neko",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
  },
];

export default tours;
