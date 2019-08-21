//sale item pics
import papuan1_img from "../images/snakes/postings/papuan1.jpg";
import papuan1_sml from "../images/snakes/postings/papuan1_600.jpg";
import jungle1_img from "../images/snakes/postings/jungle1.JPG";
import jungle1_sml from "../images/snakes/postings/jungle1_600.jpg";
import papuan2_img from "../images/snakes/postings/papuan2.JPG";
import papuan2_sml from "../images/snakes/postings/papuan2_600.jpg";
import jungle2_img from "../images/snakes/postings/jungle2.JPG";
import jungle2_sml from "../images/snakes/postings/jungle2_600.jpg";
import papuan3_img from "../images/snakes/postings/papuan3.jpg";
import papuan3_sml from "../images/snakes/postings/papuan3_600_450.jpg";
import jungle3_img from "../images/snakes/postings/jungle3.jpg";
import jungle3_sml from "../images/snakes/postings/jungle3_600_450.jpg";
import jungle4_img from "../images/snakes/postings/jungle_4.jpg";
import jungle4_sml from "../images/snakes/postings/jungle_4_600.jpg";
import jungle5_img from "../images/snakes/postings/jungle_5.jpg";
import jungle5_sml from "../images/snakes/postings/jungle_5_600.jpg";
import jungle6_img from "../images/snakes/postings/jungle_6.jpg";
import jungle6_sml from "../images/snakes/postings/jungle_6_600.jpg";
// parent pics
import papuan_dam_img from "../images/snakes/postings/parents/papuan_dam1.jpg";
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
  constructor(name, src, src_small, type, dob, sex, price, parents, animalID) {
    super(name, src, type, dob, sex);
    this.price = price;
    this.parents = parents;
    this.animalID = animalID;
    this.src_small = src_small;
  }
}

//create parent animals
const papuan_dam = new Snake(
  "Shela",
  papuan_dam_img,
  "Papuan Carpet Python",
  "2014",
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
  "2012",
  "F"
);
const donk = new Snake("Donk", donk_img, "Jungle Carpet Python", "2010", "M");

//create sale animals
const papuan1 = new SaleItem(
  "none",
  papuan1_img,
  papuan1_sml,
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
  papuan2_sml,
  "Papuan Carpet Python",
  "2018-4-2",
  "M",
  250,
  [papuan_dam, papuan_sire],
  "P-A3"
);

const papuan3 = new SaleItem(
  "none",
  papuan3_img,
  papuan3_sml,
  "Papuan Carpet Python",
  "2018-4-2",
  "F",
  250,
  [papuan_dam, papuan_sire],
  "P-A2"
);

const jungle1 = new SaleItem(
  "none",
  jungle1_img,
  jungle1_sml,
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
  jungle2_sml,
  "Jungle Carpet Python",
  "2018-4-10",
  "M",
  200,
  [picky, donk],
  "J-C9"
);

const jungle3 = new SaleItem(
  "none",
  jungle3_img,
  jungle3_sml,
  "Jungle Carpet Python",
  "2018-4-10",
  "M",
  200,
  [picky, donk],
  "J-C7"
);

const jungle4 = new SaleItem(
  "none",
  jungle4_img,
  jungle4_sml,
  "Jungle Carpet Python",
  "2018-4-10",
  "F",
  200,
  [picky, donk],
  "J-C4"
);

const jungle5 = new SaleItem(
  "none",
  jungle5_img,
  jungle5_sml,
  "Jungle Carpet Python",
  "2018-4-10",
  "M",
  200,
  [picky, donk],
  "J-C5"
);

const jungle6 = new SaleItem(
  "none",
  jungle6_img,
  jungle6_sml,
  "Jungle Carpet Python",
  "2018-4-10",
  "F",
  200,
  [picky, donk],
  "J-C6"
);

const saleItems = [
  papuan1,
  papuan2,
  papuan3,
  jungle1,
  jungle2,
  jungle3,
  jungle4,
  jungle5,
  jungle6
];

export default saleItems;
