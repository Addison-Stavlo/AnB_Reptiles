//sale item pics
import bredli_sml from "../images/snakes/postings/bredliHetStripe_600.jpg";
import bredli_img from "../images/snakes/postings/bredliHetStripe.jpg";
import jungle_2020_sml from "../images/snakes/postings/Jungle2020_600.jpg";
import jungle_2020_img from "../images/snakes/postings/Jungle2020.jpg";
// parent pics
// import papuan_dam_img from "../images/snakes/postings/parents/papuan_dam1.jpg";
// import papuan_sire_img from "../images/snakes/postings/parents/papuan_sire2.jpg";
import picky_img from "../images/snakes/postings/parents/picky.jpg";
import donk_img from "../images/snakes/postings/parents/donk.jpg";
import bredli_dam_img from "../images/snakes/postings/parents/bradleyTheBredli.jpg";
import bredli_striped_sire_img from "../images/snakes/postings/parents/bredliStripeSire.jpg";

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

// Parent animals
// const papuan_dam = new Snake(
//   "Shela",
//   papuan_dam_img,
//   "Papuan Carpet Python",
//   "2014",
//   "F"
// );
// const papuan_sire = new Snake(
//   "Boris",
//   papuan_sire_img,
//   "Papuan Carpet Python",
//   "2014",
//   "M"
// );
const picky = new Snake(
  "Miss Picky",
  picky_img,
  "Jungle Carpet Python",
  "2012",
  "F"
);
const donk = new Snake("Donk", donk_img, "Jungle Carpet Python", "2010", "M");
const bradley = new Snake(
  "Bianca",
  bredli_dam_img,
  "Bredli (het Stripe)",
  "2012",
  "F"
);
const stripedSire = new Snake(
  "Bredli*",
  bredli_striped_sire_img,
  "Bredli (Stripe)",
  "2011",
  "M"
);

// Hatchlings
const jungle2020 = new SaleItem(
  "none",
  jungle_2020_img,
  jungle_2020_sml,
  "Jungle Carpet Python",
  "2020-6-2",
  "Both available",
  350,
  [picky, donk],
  "2020 Jungles"
);

const bredliHetStripe = new SaleItem(
  "none",
  bredli_img,
  bredli_sml,
  "Bredli (het Stripe)",
  "2020-8-6",
  "Both available",
  300,
  [bradley, stripedSire],
  "2020 Bredlis"
);

const saleItems = [jungle2020, bredliHetStripe];

export default saleItems;
