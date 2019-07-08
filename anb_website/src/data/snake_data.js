import papuan1_img from "../images/snakes/postings/papuan1.jpg";
import jungle1_img from "../images/snakes/postings/jungle1.JPG";
import papuan2_img from "../images/snakes/postings/papuan2.JPG";
import jungle2_img from "../images/snakes/postings/jungle2.JPG";
import papuan_dam_img from "../images/snakes/postings/parents/papuan_dam2.jpg";
import papuan_sire_img from "../images/snakes/postings/parents/papuan_sire2.jpg";
import picky_img from "../images/snakes/postings/parents/picky.jpg";
import donk_img from "../images/snakes/postings/parents/donk.jpg";

class Snake {
  constructor(name, src, type, dob, sex) {
    this.name = name;
    this.src = src;
    this.type = type;
    this.dob = dob;
    this.sex = sex;
  }
}

class SaleItem extends Snake {
  constructor(name, src, type, dob, sex, price, parents, animalID) {
    super(name, src, type, dob, sex);
    this.price = price;
    this.parents = parents;
    this.animalID = animalID;
  }
}

//create parent animals
const papuan_dam = new Snake(
  "Shela",
  papuan_dam_img,
  "Papuan Carpet Python",
  "2015",
  "F"
);
const papuan_sire = new Snake(
  "Boris",
  papuan_sire_img,
  "Papuan Carpet Python",
  "2014",
  "M"
);
const picky = new Snake(
  "Miss Picky",
  picky_img,
  "Jungle Carpet Python",
  "2014",
  "F"
);
const donk = new Snake("Donk", donk_img, "Jungle Carpet Python", "2012", "M");

//create sale animals
const papuan1 = new SaleItem(
  "none",
  papuan1_img,
  "Papuan Carpet Python",
  "2018-4-2",
  "M",
  250,
  [papuan_dam, papuan_sire],
  "P-A5"
);

const papuan2 = new SaleItem(
  "none",
  papuan2_img,
  "Papuan Carpet Python",
  "2018-4-2",
  "M",
  250,
  [papuan_dam, papuan_sire],
  "P-A3"
);

const jungle1 = new SaleItem(
  "none",
  jungle1_img,
  "Jungle Carpet Python",
  "2018-4-10",
  "M",
  200,
  [picky, donk],
  "J-C8"
);

const jungle2 = new SaleItem(
  "none",
  jungle2_img,
  "Jungle Carpet Python",
  "2018-4-10",
  "M",
  200,
  [picky, donk],
  "J-C9"
);

const saleItems = [papuan1, papuan2, jungle1, jungle2];

export default saleItems;
