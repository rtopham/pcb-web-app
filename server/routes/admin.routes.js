import express from 'express'
import adminCtrl from './../controllers/admin.controller'

const router = express.Router()

/*
router.route('/api/log/record-action')
  .post(adminCtrl.create)

router.route('/api/log/list-all')
  .get(adminCtrl.listAllLogs)

router.route('/api/log/calculate-stats')
  .get(adminCtrl.calculateStats)
*/

router.route('/api/admin/send-contact-message')
  .post(adminCtrl.sendContactMessage)


export default router
