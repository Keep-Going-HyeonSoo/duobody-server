import express from 'express'
import check from './test/check'
import auth from './auth/authRouter'
import verifyTokenMiddleware from '../../middlewares/verifyToken'
import trainer from './trainer/trainerRouter'

const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.decoded.userid)
  res.json({
    message: 'this is home!',
    info: req.decoded,
  })
})

// /api/auth
router.use('/auth', auth)

// middleWare Test!
router.use('/test', verifyTokenMiddleware)
router.use('/test', check)

// /api/trainer
router.use('/trainer', trainer)

export default router
