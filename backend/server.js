import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import data from './data.js'

const app = express()

const PORT = process.env.PORT || 5000

// Use of the middlewares
app.use(morgan('dev'))
app.use(helmet())

app.get('/api/products', (req, res, next) => {
  res.send(data.products)
})

app.get('/api/products/slug/:slug', (req, res, next) => {
  // we get the params from the url and we  make a recherche for  the product with the function find.
  const product = data.products.find((item) => item.slug === req.params.slug)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product not found' })
  }
})

app.listen(PORT, () => {
  console.log(`Connection at http://localhost:${PORT}`)
})
