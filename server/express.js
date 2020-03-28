import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import adminRoutes from './routes/admin.routes'
import imageRoutes from './routes/image.routes'

const app = express()

// parse body params and attach them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(cookieParser())
app.use(compress()) 

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', adminRoutes)
app.use('/', imageRoutes) 

// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }
  })


export default app