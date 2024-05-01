const carts = require ('../model/CartModel')




//addtocart controller
exports.addToCartController = async (req, res) => {
  const {id,title,price,description,category,image,rating} = req.body;

  const userId = req.payload

  try {

      const newCartProduct = new carts({
        id,title,price,description,category,image,rating,userId
      })
      await newCartProduct.save()
      res.status(200).json(newCartProduct);
    
    
  } catch (err) {
    res.status(401).json(err)
  }


}

//getcartlist

exports.getCartListController = async (req, res) => {
  const userId = req.payload
  try {
    const allproducts = await  carts.find({userId})
    res.status(200).json(allproducts)
  } catch (err) {
    res.status(401).json(err)
  }
}

//removefromcart

exports.removeFromCart = async (req, res) => {
  const {id} = req.params
  try {
    const removeProduct = await carts.findByIdAndDelete({_id:id})
    res.status(200).json(removeProduct)
  } catch (err) {
    res.status(401).json(err)
  }
}