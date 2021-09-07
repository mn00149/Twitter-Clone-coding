import express from 'express'
import 'express-async-errors'//node 5버전이 아닌경우 추가
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import tweetsRoute from './router/tweets.js'

const app = express()

app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))

app.use('/tweets', tweetsRoute)

app.use((req, res, next) =>{
    res.sendStatus(404)
})
app.use((error, req, res, next) =>{
    console.log(error)
})

const port = 8080
app.listen(port, () => {
    console.log('서버실행 성공')
})