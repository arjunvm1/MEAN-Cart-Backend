const express = require ('express')
const productController = require('../controller/productController')
const userController = require('../controller/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../controller/wishlistController')
const cartController = require('../controller/cartController')

const router = new express.Router()

//getAllProduct

router.get('/allproducts',productController.getAllProductsController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//getAproduct
router.get('/view/product/:id',productController.getAproductController)

//add
router.post('/addwishlist',jwtMiddleware,wishlistController.addToWishlistController)
//get
router.get('/getwishlist',jwtMiddleware,wishlistController.getWishlistController)
//remove
router.delete('/removewishlist/:id',jwtMiddleware,wishlistController.removeWishlistController)


//addtocart
router.post('/addtocart',jwtMiddleware,cartController.addToCartController)

//getcart
router.get('/getcartlist',jwtMiddleware,cartController.getCartListController)

//removefromcart
router.delete('/removecartlist/:id',jwtMiddleware,cartController.removeFromCart)


module.exports=router; 