import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'
import imageCtrl from '../controllers/image.controller'

const router = express.Router()

router.route('/api/images/new/:userId')
  .post(authCtrl.requireSignin, imageCtrl.create)

router.route('/api/images/url/:userId/:imageId/:jwtToken')
  .get(authCtrl.hasViewAuthorization, imageCtrl.getImageURL)

router.route('/api/images/get/:userId/:imageId')
  .get(authCtrl.requireSignin, imageCtrl.getAnImage)

router.route('/api/images/by/:userId')
  .get(authCtrl.requireSignin, imageCtrl.listImagesByUser)

router.route('/api/image/by/:imageId')
  .get(authCtrl.requireSignin, imageCtrl.getImageByID)

  /*  

router.route('/api/bannerlinks/by/:userId')
  .get(bannerLinkCtrl.listBannerLinksByUserNoAuth)

router.route('/api/bannerlinks/:bannerLinkId')
  .delete(authCtrl.requireSignin, bannerLinkCtrl.isPoster, bannerLinkCtrl.remove)



*/

router.param('userId', userCtrl.userByID)
router.param('imageId', imageCtrl.imageByID)

export default router
