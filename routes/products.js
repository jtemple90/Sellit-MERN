const router = require("express").Router();
const ctrl = require("../controllers/products");

// routes
router.get("/", ctrl.products.index);
router.get("/:id", ctrl.products.show);
router.post("/", ctrl.products.create);
router.put("/:id", ctrl.products.update);
router.delete("/:id", ctrl.products.destroy);

module.exports = router;
