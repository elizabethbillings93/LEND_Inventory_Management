const { Product } = require("../models");

const productData = [
  //Dairy Products//
  {
    name: "Milk",
    quantity: 10,
    product_id: 3,
    image_link:
      "https://www.meijer.com/content/dam/meijer/product/0004/12/5010/20/0004125010200_2_A1C1_1200.png",
  },
  {
    name: "Cheese",
    quantity: 10,
    product_id: 3,
    image_link:
      "https://thumbs.dreamstime.com/b/swiss-cheese-holes-18911609.jpg",
  },
  {
    name: "Yogurt",
    quantity: 10,
    product_id: 3,
    image_link:
      "https://crystalcreamery.com/assets/image-cache/uploads/images/products/yogurt/yogurt-plain-1480x1452.327c2658.jpg",
  },
  {
    name: "Butter",
    quantity: 10,
    product_id: 3,
    image_link:
      "https://images.heb.com/is/image/HEBGrocery/000122114?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    name: "Ice cream",
    quantity: 10,
    product_id: 3,
    image_link:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/1/1/FNM_070112-Milky-Way-Ice-Cream-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541468590.jpeg",
  },
  {
    name: "Cream",
    quantity: 10,
    product_id: 3,
    image_link:
      "https://horizon.com/wp-content/uploads/horizon-organic-heavy-whipping-cream.jpg",
  },
  {
    name: "Cottage Cheese",
    quantity: 10,
    product_id: 3,
    image_link: "https://images.heb.com/is/image/HEBGrocery/000977112",
  },
  {
    name: "Whipped Cream",
    quantity: 10,
    product_id: 3,
    image_link: "https://images.heb.com/is/image/HEBGrocery/000977112",
  },
  {
    name: "Condensed Milk",
    quantity: 10,
    product_id: 3,
    image_link:
      "https://i5.walmartimages.com/asr/9ecac397-1823-4dc6-a144-d0c6ec072dc3.948389751765852ac28d7528a12c31c4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    name: "Eggnog",
    quantity: 10,
    product_id: 3,
    image_link:
      "https://api.time.com/wp-content/uploads/2015/07/eggnog_vert.jpg",
  },
  //Meat Products//
  {
    name: "Beef",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml",
  },
  {
    name: "Chicken",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://media.istockphoto.com/photos/raw-chicken-picture-id93456512?b=1&k=20&m=93456512&s=170667a&w=0&h=Fb_Xr-joKOeHNNG0kKZBGpihdM4vWrXfixkUbLJU4ck=",
  },

  {
    name: "Fish",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://www.foodsafetynews.com/files/2021/10/dreamstime_grass-carp-fish-Group-B-Streptococcus-GBS-hong-kong.jpg",
  },

  {
    name: "Pork",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-260nw-561686899.jpg",
  },
  {
    name: "Goat",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://t4.ftcdn.net/jpg/02/75/48/41/360_F_275484134_TvyfqctvpG2mB9yjWPEYkiVDf3TyDsYX.jpg",
  },
  {
    name: "Venison",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://static01.nyt.com/images/2014/11/19/dining/19MONTANA/19MONTANA-articleLarge.jpg",
  },
  {
    name: "Turkey",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://preparedcooks.com/wp-content/uploads/2021/06/Can-You-Eat-Raw-Turkey.jpg",
  },
  {
    name: "Duck",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://media.istockphoto.com/photos/organic-duck-cleaned-and-ready-for-cooking-picture-id176837012?k=20&m=176837012&s=612x612&w=0&h=jDPH6Qc09Skc37K5-Xz0KDd3Tl01-kBaRgEBCgseavg=",
  },
  {
    name: "Rabbit",
    quantity: 10,
    product_id: 2,
    image_link:
      "https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80",
  },
  //Pantry Products//
  {
    name: "Rice",
    quantity: 10,
    product_id: 4,
    image_link:
      "https://www.simplyrecipes.com/thmb/j_IZxLEP2tJjonCl3s7RiGnMuxo=/2000x1331/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__02__HTC-White-Rice-Lead-4-e5743ee4c63a40a0aec2f3abd9f1c097.jpg",
  },

  {
    name: "Bread",
    quantity: 10,
    product_id: 4,
    image_link:
      "https://merryboosters.com/wp-content/uploads/2020/05/blog-featured-image.png",
  },

  {
    name: "Cereal",
    quantity: 10,
    product_id: 4,
    image_link:
      "https://www.verywellhealth.com/thmb/LiEYTC9ZucAPtgIkxivHFQQpXUY=/1333x1000/smart/filters:no_upscale()/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg",
  },

  {
    name: "Coffee",
    quantity: 10,
    product_id: 4,
    image_link:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",
  },
  {
    name: "Pasta",
    quantity: 10,
    product_id: 4,
    image_link:
      "https://images.albertsons-media.com/is/image/ABS/128200572?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
  },
  {
    name: "Mixed Nuts",
    quantity: 10,
    product_id: 4,
    image_link: "https://images.heb.com/is/image/HEBGrocery/002601037",
  },
  {
    name: "Oatmeal",
    quantity: 10,
    product_id: 4,
    image_link:
      "https://target.scene7.com/is/image/Target/GUEST_54446ea9-e310-4406-bb82-bb6872c29a70?wid=488&hei=488&fmt=pjpeg",
  },
  {
    name: "Tomato sauce",
    quantity: 10,
    product_id: 4,
    image_link: "https://images.heb.com/is/image/HEBGrocery/000095047",
  },
  //Produce Products//
  {
    name: "Zucchini",

    quantity: 10,
    product_id: 1,
    image_link:
      "https://solidstarts.com/wp-content/uploads/Zucchini_Edited-scaled.jpg",
  },

  {
    name: "Lettuce",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://post.healthline.com/wp-content/uploads/2020/03/romaine-lettuce-1296x728-body.jpg",
  },

  {
    name: "Tomatos",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?b=1&k=20&m=466175630&s=170667a&w=0&h=kT346TmkFGmZolABRU1fIVKNdvq7w-EUZViKyCKI13Q=",
  },

  {
    name: "Eggplant",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/eggplant-isolated-on-white-picture-id510515443?k=20&m=510515443&s=612x612&w=0&h=VZfZR8XRcGJzOcpcB1jF4teU-flgqcXdwYsmfM7OzDI=",
  },
  {
    name: "Potatoes",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg",
  },
  {
    name: "Onions",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG",
  },
  {
    name: "Carrots",
    quantity: 10,
    product_id: 1,
    image_link: "",
  },
  {
    name: "Bell peppers",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://image.shutterstock.com/image-photo/carrot-isolated-on-white-background-260nw-795704785.jpg",
  },
  {
    name: "Broccoli",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
  },
  {
    name: "Cucumbers",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://image.shutterstock.com/image-photo/two-cucumbers-on-isolated-white-260nw-1359741629.jpg",
  },
  {
    name: "Bananas",
    quantity: 10,
    product_id: 1,
    image_link:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Apples",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
  },
  {
    name: "Strawberries",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/red-berry-strawberry-isolated-picture-id1157946861",
  },
  {
    name: "Grapes",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/grape-dark-grape-grapes-with-leaves-isolated-with-clipping-path-full-picture-id803721418?k=20&m=803721418&s=612x612&w=0&h=U2vUEoYYZD6xdYJc-2dhZpa1EvIxkXdiUaAlE-Kexn4=",
  },
  {
    name: "Oranges",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI=",
  },
  {
    name: "Watermelon",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/watermelon-slice-isolated-on-white-background-clipping-path-full-of-picture-id1125584344?k=20&m=1125584344&s=612x612&w=0&h=j5ANfvR80QQcpxOxqrxMuEuc2eo8j-5veLP_t68-Y1c=",
  },
  {
    name: "Blueberries",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZWJlcnJpZXN8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    name: "Lemons",
    quantity: 10,
    product_id: 1,
    image_link: "https://images.heb.com/is/image/HEBGrocery/000375185",
  },
  {
    name: "Peaches",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/single-whole-peach-fruit-with-leaf-and-slice-isolated-on-white-picture-id1151868959?k=20&m=1151868959&s=612x612&w=0&h=Ny9rEcilmR0Unvs27bK3mapSVfHPeEFbkriNR0sW-2E=",
  },
  {
    name: "Avocados",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://solidstarts.com/wp-content/uploads/introducing-avocado-to-babies.jpg",
  },
  {
    name: "Pineapple",
    quantity: 10,
    product_id: 1,
    image_link: "https://m.media-amazon.com/images/I/71+qAJehpkL._SL1500_.jpg",
  },
  {
    name: "Cherries",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/cherry-with-leaves-isolated-on-white-background-picture-id533381303?k=20&m=533381303&s=612x612&w=0&h=7nI_9useYknJuchPdhQKXztSyAAEPXJljlJ7lNtX_jY=",
  },
  {
    name: "Cantaloupe",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://i5.walmartimages.com/asr/fb4c18a5-9367-4770-b99f-7518c72db482.5609c32e87a3110b734aad048bf9fe35.jpeg",
  },
  {
    name: "Pears",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://image.shutterstock.com/image-photo/isolated-pears-one-half-green-260nw-1494561377.jpg",
  },
  {
    name: "Limes",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://i5.walmartimages.com/asr/12314833-2e54-4739-94a2-7db45b63109d.16ff07e3c111df9be4158853c2e505ef.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    name: "Raspberries",
    quantity: 10,
    product_id: 1,
    image_link: "https://images.heb.com/is/image/HEBGrocery/000321289",
  },
  {
    name: "Blackberries",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://solidstarts.com/wp-content/uploads/Blackberries-for-Babies-scaled.jpg",
  },
  {
    name: "Clementine",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/clementine-picture-id511595046?b=1&k=20&m=511595046&s=170667a&w=0&h=oFOmzMqZT_-P0DFltbNJhvzjUixW6UW5hfyWYON19xU=",
  },
  {
    name: "Plums",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/delicious-ripe-plums-on-white-picture-id1343635919?b=1&k=20&m=1343635919&s=170667a&w=0&h=Q-LYMLn29ukSuxYJIpa5rWPmhNmre-meoHyn8hpS0yQ=",
  },
  {
    name: "Salad Mix",
    quantity: 10,
    product_id: 1,
    image_link: "https://images.heb.com/is/image/HEBGrocery/000985093",
  },
  {
    name: "Celery",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://image.shutterstock.com/image-photo/celery-isolated-on-white-background-260nw-259956566.jpg",
  },
  {
    name: "Mushrooms",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://i5.walmartimages.com/asr/70ca0c8a-4720-4fe9-8052-f16b7150c03c.3b1e00b3fe7411a314e4783c27dfdb5a.jpeg",
  },
  {
    name: "Corn",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://image.shutterstock.com/image-photo/single-ear-corn-isolated-on-260nw-793795156.jpg",
  },
  {
    name: "Garlic",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://www.thespruceeats.com/thmb/K4hkUVOn62tkS9FGP62A_z4V5UQ=/1869x1402/smart/filters:no_upscale()/Fresh-garlic-GettyImages-136596122-58b5aeac3df78cdcd89fa3ee.jpg",
  },
  {
    name: "Spinach",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/06/GettyImages-652986635-3dffa4d.jpg",
  },
  {
    name: "Green Beans",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://post.healthline.com/wp-content/uploads/2020/06/green-beans-732x549-thumbnail.jpg",
  },
  {
    name: "Sweet Potatoes",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Sweet-potatoes-ca0d8f4.jpg?quality=90&resize=661%2C600",
  },
  {
    name: "Green Onions",
    quantity: 10,
    product_id: 1,
    image_link: "http://specialtyproduce.com/sppics/2223.png",
  },
  {
    name: "Cauliflower",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://media.istockphoto.com/photos/fresh-cauliflower-with-pieces-isolated-on-white-picture-id511868689?k=20&m=511868689&s=612x612&w=0&h=UZxuS1zMfMaYm1ag2tBFUG-JO4TJRS_jzSOB7hseX5k=",
  },
  {
    name: "Cabbage",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://image.shutterstock.com/image-photo/cabbage-isolated-on-white-background-260nw-571780078.jpg",
  },
  {
    name: "Asparagus",
    quantity: 10,
    product_id: 1,
    image_link:
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/08/03/133396.jpeg",
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
