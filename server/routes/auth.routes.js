import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/signin')
  .post(authCtrl.signin)

router.route('/auth/signout')
  .get(authCtrl.signout)

router.route('/auth/password-reset-request')
  .post(authCtrl.passwordResetRequest)

router.route('/auth/validate-token')
  .post(authCtrl.validateToken)

router.route('/auth/change-password')
  .post(authCtrl.changePassword)

export default router
