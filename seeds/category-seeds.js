const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Produce",
  },
  {
    category_name: "Meat",
  },
  {
    category_name: "Dairy",
  },
  {
    category_name: "Pantry",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
