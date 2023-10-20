import 'dotenv/config' // enviroment variables
import './backend/database/connectdb.js' // Database conecction module
import express from 'express'  // Import express

import productRouter from './backend/routes/product.route.js'
import userRouter from './backend/routes/users.route.js' 
import authRouter from './backend/routes/auth.route.js'
import cartRouter from './backend/routes/cart.route.js'

const PORT = process.env.PORT || 8080
const app = express()           // object express

app.use(express.json())  // read request in json format

app.use('/techevolution/products', productRouter)
app.use('/techevolution/users', userRouter)
app.use('/techevolution/auth', authRouter)
app.use('/techevolution/cart', cartRouter)


// Listen method to server connection
app.listen(PORT, ()  => {
    console.log("✔✔✔ https://localhost: " + PORT)
})