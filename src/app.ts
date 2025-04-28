import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router'
import authRouter from './module/auth/auth.router'

const app = express()

// middleware
app.use(express.json())

app.use('/api/v1/user', userRouter)
app.use('/api/v1/auth', authRouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

export default app
