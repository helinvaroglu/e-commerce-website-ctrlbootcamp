// Mockup data (defined as const in order to make it immutable)
const shopItems = [
  {
    id: 1,
    name: "Huawei Nova 10",
    type: "Mobile Phone",
    color: "Silver",
    desc: "8 GB RAM, 6.67 inch screen, 128 GB Memory, 4000 mAh battery",
    price: 19499,
    img: "../images/mobile-phone/huawei-nova10.jpg"
  },

  {
    id: 2,
    name: "iPhone 11",
    type: "Mobile Phone",
    color: "White",
    desc: "4 GB RAM, 6.1 inch screen, 128 GB Memory, 3046 mAh battery",
    price: 24999,
    img: "../images/mobile-phone/iphone11.jpg"
  },

  {
    id: 3,
    name: "iPhone 14",
    type: "Mobile Phone",
    color: "Red",
    desc: "6 GB RAM, 6.1 inch screen, 512 GB Memory, 3279 mAh battery",
    price: 55999,
    img: "../images/mobile-phone/iphone14.jpg"
  },

  {
    id: 4,
    name: "iPhone 15",
    type: "Mobile Phone",
    color: "Black",
    desc: "6 GB RAM, 6.1 inch screen, 512 GB Memory, 3877 mAh battery",
    price: 61999,
    img: "../images/mobile-phone/iphone15.jpg"
  },

  {
    id: 5,
    name: "Realme 10",
    type: "Mobile Phone",
    color: "Black",
    desc: "8 GB RAM, 6.4 inch screen, 256 GB Memory, 4880 mAh battery",
    price: 10999,
    img: "../images/mobile-phone/realme-10.jpg"
  },

  {
    id: 6,
    name: "Realme C53",
    type: "Mobile Phone",
    color: "Black",
    desc: "4 GB RAM, 6.74 inch screen, 128 GB Memory, 4880 mAh battery",
    price: 6249,
    img: "../images/mobile-phone/realme-c53.jpg"
  },

  {
    id: 7,
    name: "Redmi Note 12",
    type: "Mobile Phone",
    color: "Light Blue",
    desc: "6 GB RAM, 6.67 inch screen, 128 GB Memory, 5000 mAh battery",
    price: 9499,
    img: "../images/mobile-phone/redmi-note12.jpg"
  },

  {
    id: 8,
    name: "Redmi Note 12 Pro",
    type: "Mobile Phone",
    color: "White",
    desc: "8 GB RAM, 6.67 inch screen, 256 GB Memory, 5000 mAh battery",
    price: 12999,
    img: "../images/mobile-phone/redmi-note12pro.jpg"
  },

  {
    id: 9,
    name: "Galaxy A04s",
    type: "Mobile Phone",
    color: "Pearl White",
    desc: "4 GB RAM, 6.5 inch screen, 128 GB Memory, 5000 mAh battery",
    price: 5999,
    img: "../images/mobile-phone/samsung-galaxy_a04s.jpg"
  },

  {
    id: 10,
    name: "Galaxy A14",
    type: "Mobile Phone",
    color: "Silver",
    desc: "4 GB RAM, 6.6 inch screen, 128 GB Memory, 5000 mAh battery",
    price: 6999,
    img: "../images/mobile-phone/samsung-galaxy_a14.jpg"
  },

  {
    id: 11,
    name: "Galaxy A24",
    type: "Mobile Phone",
    color: "Black",
    desc: "6 GB RAM, 6.5 inch screen, 128 GB Memory, 5000 mAh battery",
    price: 8.999,
    img: "../images/mobile-phone/samsung-galaxy_a24.jpg"
  },

  {
    id: 12,
    name: "Galaxy A34",
    type: "Mobile Phone",
    color: "Silver",
    desc: "8 GB RAM, 6.6 inch screen, 256 GB Memory, 5000 mAh battery",
    price: 11499,
    img: "../images/mobile-phone/samsung-galaxy_a34.jpg"
  },

  {
    id: 13,
    name: "Galaxy A54",
    type: "Mobile Phone",
    color: "Yellow",
    desc: "8 GB RAM, 6.4 inch screen, 256 GB Memory, 5000 mAh battery",
    price: 16999,
    img: "../images/mobile-phone/samsung-galaxy_a54.jpg"
  },

  {
    id: 14,
    name: "Galaxy S22",
    type: "Mobile Phone",
    color: "Green",
    desc: "8 GB RAM, 6.1 inch screen, 128 GB Memory, 3700 mAh battery",
    price: 22999,
    img: "../images/mobile-phone/samsung-galaxy_s22.jpg"
  },

  {
    id: 15,
    name: "Galaxy S23",
    type: "Mobile Phone",
    color: "Silver",
    desc: "8 GB RAM, 6.1 inch screen, 256 GB Memory, 3900 mAh battery",
    price: 32999,
    img: "../images/mobile-phone/samsung-galaxy_s23.jpg"
  },

  {
    id: 16,
    name: "Vivo V29",
    type: "Mobile Phone",
    color: "Blue",
    desc: "8 GB RAM, 6.78 inch screen, 256 GB Memory, 4600 mAh battery",
    price: 19999,
    img: "../images/mobile-phone/vivo-v29.jpg"
  },

  {
    id: 17,
    name: "Vivo Y22s",
    type: "Mobile Phone",
    color: "Night Blue",
    desc: "6 GB RAM, 6.55 inch screen, 128 GB Memory, 5000 mAh battery",
    price: 8499,
    img: "../images/mobile-phone/vivo-y22s.jpg"
  },

  {
    id: 18,
    name: "Vivo Y36",
    type: "Mobile Phone",
    color: "Black",
    desc: "8 GB RAM, 6.64 inch screen, 128 GB Memory, 5000 mAh battery",
    price: 9999,
    img: "../images/mobile-phone/vivo-y36.jpg"
  },

  {
    id: 19,
    name: "Acer Aspire 3",
    type: "Laptop",
    color: "Silver",
    desc: "11th gen i5, 4 cores, 8 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 16299,
    img: "../images/laptop/acer-aspire3.jpg"
  },

  {
    id: 20,
    name: "Acer Aspire 7",
    type: "Laptop",
    color: "Black",
    desc: "12th gen i5, 12 cores, 16 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 28499,
    img: "../images/laptop/acer-aspire7.jpg"
  },

  {
    id: 21,
    name: "Asus Rog Strix",
    type: "Laptop",
    color: "Gray",
    desc: "13th gen i9, 24 cores, 16 GB RAM, 16 inch screen, 1 TB Memory",
    price: 58883,
    img: "../images/laptop/asus-rog_strix.jpg"
  },

  {
    id: 22,
    name: "Asus Vivobook 15",
    type: "Laptop",
    color: "Silver",
    desc: "12th gen i5, 10 cores, 8 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 19137,
    img: "../images/laptop/asus-vivobook15.jpg"
  },

  {
    id: 23,
    name: "Asus Vivobook 16X",
    type: "Laptop",
    color: "Black",
    desc: "12th gen i5, 8 cores, 8 GB RAM, 16 inch screen, 512 GB Memory",
    price: 22999,
    img: "../images/laptop/asus-vivobook16x.jpg"
  },

  {
    id: 24,
    name: "Asus X515ea",
    type: "Laptop",
    color: "Silver",
    desc: "11th gen i3, 2 cores, 4 GB RAM, 15.6 inch screen, 256 GB Memory",
    price: 11499,
    img: "../images/laptop/asus-x515ea.jpg"
  },

  {
    id: 25,
    name: "Casper Excalibur",
    type: "Laptop",
    color: "Black",
    desc: "12th gen i7, 10 cores, 16 GB RAM, 15.6 inch screen, 1 TB Memory",
    price: 34999,
    img: "../images/laptop/casper-excalibur.jpg"
  },

  {
    id: 26,
    name: "Dell G15",
    type: "Laptop",
    color: "Dark Gray",
    desc: "12th gen i5, 12 cores, 16 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 29000,
    img: "../images/laptop/dell-g15.jpg"
  },

  {
    id: 27,
    name: "Hp Pavilion",
    type: "Laptop",
    color: "Silver",
    desc: "7th gen Ryzen 7, 8 cores, 8 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 18999,
    img: "../images/laptop/hp-pavilion.jpg"
  },

  {
    id: 28,
    name: "Hp Victus",
    type: "Laptop",
    color: "Black",
    desc: "7th gen ryzen 7, 8 cores, 8 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 18999,
    img: "../images/laptop/hp-victus.jpg"
  },

  {
    id: 29,
    name: "Huawei Matebook 14",
    type: "Laptop",
    color: "Silver",
    desc: "12th gen i5, 12 cores, 16 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 23499,
    img: "../images/laptop/huawei-matebook14.jpg"
  },

  {
    id: 30,
    name: "Lenovo Ideapad 3 ",
    type: "Laptop",
    color: "Gray",
    desc: "11th gen i5, 4 cores, 8 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 20999,
    img: "../images/laptop/lenovo-ideapad3.jpg"
  },

  {
    id: 31,
    name: "Lenovo Yoga 7",
    type: "Laptop",
    color: "Gray",
    desc: "13th gen i7, 10 cores, 16 GB RAM, 16 inch screen, 1 TB Memory",
    price: 44999,
    img: "../images/laptop/lenovo-yoga7.jpg"
  },

  {
    id: 32,
    name: "Msi Cyborg 15",
    type: "Laptop",
    color: "Dark Gray",
    desc: "12th gen i7, 10 cores, 16 GB RAM, 15.6 inch screen, 1 TB Memory",
    price: 43750,
    img: "../images/laptop/msi-cyborg15.jpg"
  },

  {
    id: 33,
    name: "Msi Thin Gf63",
    type: "Laptop",
    color: "Black",
    desc: "12th gen i5, 8 cores, 16 GB RAM, 15.6 inch screen, 512 GB Memory",
    price: 30999,
    img: "../images/laptop/msi-thin_gf63.jpg"
  }
];
