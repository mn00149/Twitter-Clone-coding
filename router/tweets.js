import express from 'express'
import 'express-async-errors'//node 5버전이 아닌경우 추가

const tweets = [{
    id: 1,  // 트윗 아이디
    text: 'sdfssd',  // 트윗 텍스트
    createdAt: Date.now().toString, // 트윗 생성 날짜
    name: '인웅',  // 사용자 이름
    username: 'inwoong',  // 사용자 닉네임 (아이디)
    url:' string (optional)' // 사용자 프로파일 사진 URL
  }]
const router = express.Router()

router.get('/', (req, res, next) => {
    const username = req.query.username
    const data = username
        ? tweets.filter((t) => t.username === username)
        : tweets;
    res.status(200).json(data)
})

export default router 

