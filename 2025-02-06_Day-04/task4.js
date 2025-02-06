// Task 4: Working with map(), filter(), and **reduce()
// 1: Use map() to transform data
//    * Create an array of product objects with properties name, price, and category.
//    * Use map() to create a new array with product names in uppercase.
// 2: Use filter() to extract specific data
//    * Use filter() to create an array of products that belong to the 'Electronics' category.
// 3: Use reduce() to calculate a total
//    * Use reduce() to calculate the total price of all products in the array.
// 4: Combine map(), filter(), and reduce()
//    * Create a function that calculates the total price of products
//        from a specific category using map(), filter(), and reduce().

const productsArr = [
  { name: "JavaScript for Dummies", price: 500, category: "Books" },
  { name: "Pencil Set", price: 50, category: "Stationery" },
  { name: "USB Drive", price: 200, category: "Electronics" },
  { name: "Scientific Calculator", price: 900, category: "Electronics" },
  { name: "Notebook", price: 60, category: "Stationery" },
];

productNames = productsArr.map((product) => product.name.toUpperCase());
console.log("Upper cased names:", productNames);
// Upper cased names: [
//   'JAVASCRIPT FOR DUMMIES',
//   'PENCIL SET',
//   'USB DRIVE',
//   'SCIENTIFIC CALCULATOR',
//   'NOTEBOOK'
// ]

electronicProducts = productsArr.filter(
  (product) => product.category === "Electronics"
);
console.log("Electonic products:", electronicProducts);
// Electonic products: [
//   { name: 'USB Drive', price: 200, category: 'Electronics' },
//   {
//     name: 'Scientific Calculator',
//     price: 900,
//     category: 'Electronics'
//   }
// ]

const totalPrice = productsArr.reduce((acc, { price }) => acc + price, 0);
console.log("Total cost:", totalPrice);
// Total cost: 1710

const categorize = (arr) => {
  return arr
    .map((arr1) => {
      const record = new Object();
      record.category = arr1.category;
      record.total = arr
        .filter((product) => product["category"] === arr1.category)
        .reduce((acc, { price }) => acc + price, 0);
      return record;
    })
    .reduce((acc, { category, total }) => {
      acc[category] = total;
      return acc;
    }, {});
};

console.log("Cost per category:", categorize(productsArr));
// Cost per category: { Books: 500, Stationery: 110, Electronics: 1100 }
