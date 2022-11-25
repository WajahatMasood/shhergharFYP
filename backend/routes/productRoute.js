const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetils, createProductReview, getProductReviews, deletetReviews, getAdminProducts} = require("../controllers/productcontroller");
const { isAunthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
// yaha hum routes bnaye gein for controller export
//getAllProduct is a function jo hum ne product controller mein bnya tha

// route to view all product
router
.route("/products")
.get( getAllProducts);


router
  .route("/admin/products")
  .get(isAunthenticatedUser, authorizeRoles("admin"), getAdminProducts);


// route to add new product 
router
.route("/admin/product/new")
.post(isAunthenticatedUser, authorizeRoles("admin"),createProduct);
//router to update
router
.route("/admin/product/:id")
.put(isAunthenticatedUser, authorizeRoles("admin"),updateProduct)
.delete(isAunthenticatedUser, authorizeRoles("admin"),deleteProduct);
router
.route("/product/:id").get(getProductDetils);

router.route("/review").put(isAunthenticatedUser, createProductReview);

// product reviews <---------- route
router.route("/reviews").get(getProductReviews).delete(isAunthenticatedUser, deletetReviews); 

module.exports= router;