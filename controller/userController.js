const users = require('../model/userModel')
const jwt = require( 'jsonwebtoken' )

//register
exports.registerController = async(req, res) => {
  const {username,email,password} = req.body

  try {
    const existingUser = await users.findOne({email})
    console.log(existingUser);
    if(existingUser){
      res.status(401).json("user aready exists...Please Login!")
    }else{
      const newUser = new users({
        username, email, password
      })
      await newUser.save()
      res.status(200).json(newUser)
    }
  } catch (err) {
    res.status(401).json(err)
  }
}


//login

exports.loginController = async (req,res) => {
  const{email,password} = req.body
  try {
    const existingUser = await users.findOne({email,password})
    if(existingUser){
      const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET_KEY)
      res.status(200).json({token,existingUser})
    }else{
      res.status(404).json("invalid credentials")
    }
  } catch (err) {
    res.status(401).json(err)
  }
}