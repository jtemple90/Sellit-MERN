const db = require('../models');

// Show All Products
const index = (req, res) => {
  db.Product.find({})
    .then((foundProducts) => {
      res.json({ products: foundProducts });
    })
    .catch((err) => {
      console.log("Error in gProduct Index:", err);
      res.json({ Error: "Unable to get your data" });
    });
}

//  Show product page by id
const show = (req, res) => {
  db.Product.findById(req.params.id)
    .then((foundProduct) => {
      res.json({ product: foundProduct });
    })
    .catch((err) => {
      console.log("Error in Product Show:", err);
      res.json({ Error: "Unable to get data" });
    });
};

// Create New Product
const create = (req, res) => {
  db.Product.create(req.body)
    .then((savedProduct) => {
      res.status(201).json({ product: savedProduct });
    })
    .catch((err) => {
      console.log('Error in Product Create:', err);
      res.json({ Error: 'Unable to get data' });
    });
};

// UPDATE BY ID
const update = (req, res) => {
  db.Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProduct) => {
      if (err) console.log("Error in Product Update:", err);

      res.json({ product: updatedProduct });
    }
  );
};

// REMOVE A GAME BY ITS ID
const destroy = (req, res) => {
  db.Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    if (err) console.log("Error in Product Destroy:", err);

    res.json({ product: deletedProduct });
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};