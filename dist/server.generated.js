module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3007,\n  jwtSecret: process.env.JWT_SECRET || \"SUPER_secret_key_1000!\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/photocoloringbooks',\n  smtpUrl: process.env.SMTP_URL || \"mail.tophamonline.com\",\n  smtpUser: process.env.SMTP_USER || \"reed@tophamonline.com\",\n  smtpPassword: process.env.SMTP_PASSWORD || \"auggieU!00\",\n  appUrlBase: process.env.APP_URL_BASE || \"http://67.161.250.23:3002/\",\n  appProjectName: process.env.APP_PROJECT_NAME || \"Photo Coloring Books\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controllers/admin.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/admin.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar sendContactMessage = function sendContactMessage(req, res) {\n  console.log(req.body);\n  var message = {\n    from: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpUser,\n    replyTo: req.body.email,\n    to: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpUser,\n    subject: req.body.subject,\n    text: \"Mern Skeleton 3.0 contact form message from: \".concat(req.body.name, \", \").concat(req.body.email, \" re: \").concat(req.body.subject, \". \\n \\n \").concat(req.body.message),\n    html: \"Mern Sekelton 3.0 contact form message from: \".concat(req.body.name, \", \").concat(req.body.email, \" re: \").concat(req.body.subject, \". <br/><br/> \").concat(req.body.message)\n  };\n  var transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1___default.a.createTransport({\n    //    service: 'exchange',\n    host: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpUrl,\n    port: 465,\n    secure: true,\n    auth: {\n      user: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpUser,\n      pass: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpPassword\n    }\n  });\n  transporter.verify(function (error, success) {\n    if (error) {\n      console.log(error);\n    } else {\n      //      console.log(success) \n      //      console.log(\"Server is ready to take our messages\");\n      transporter.sendMail(message);\n    }\n  });\n  return res.status('200').json({\n    message: \"Sent email\",\n    email: req.body.email\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  sendContactMessage: sendContactMessage\n});\n\n//# sourceURL=webpack:///./server/controllers/admin.controller.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n/* harmony import */ var _helpers_nodemailerMessageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../helpers/nodemailerMessageHandler */ \"./server/helpers/nodemailerMessageHandler.js\");\n\n\n\n\n\n\nvar signin = function signin(req, res) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    \"email\": req.body.email\n  }, function (err, user) {\n    if (err || !user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token: token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  });\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nvar requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: 'auth'\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n  console.log(req.profile);\n  console.log(req.auth);\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nvar hasAuthorizationToViewImage = function hasAuthorizationToViewImage(req, res, next) {\n  //  console.log(req.profile)\n  //  console.log(req.auth)\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n}; ///Password Request\n\n\nvar passwordResetRequest = function passwordResetRequest(req, res) {\n  var email = req.body.email;\n  var message;\n  var resetToken;\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    \"email\": email\n  }, function (err, user) {\n    if (err || !user) message = Object(_helpers_nodemailerMessageHandler__WEBPACK_IMPORTED_MODULE_4__[\"getAccountAccessAttemptedMessage\"])(email);else {\n      resetToken = Object(_helpers_nodemailerMessageHandler__WEBPACK_IMPORTED_MODULE_4__[\"getResetToken\"])(40);\n      message = Object(_helpers_nodemailerMessageHandler__WEBPACK_IMPORTED_MODULE_4__[\"getPasswordResetMessage\"])(email, resetToken);\n    }\n    Object(_helpers_nodemailerMessageHandler__WEBPACK_IMPORTED_MODULE_4__[\"sendMessage\"])(message);\n\n    if (resetToken) {\n      user.password_reset.token = resetToken;\n      user.password_reset.time_stamp = new Date().getTime();\n      _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n        _id: user._id\n      }, {\n        $set: {\n          password_reset: user.password_reset\n        }\n      }, function (err) {\n        if (err) {\n          return res.status(400).json({\n            error: errorHandler.getErrorMessage(err)\n          });\n        }\n      });\n    } //end if resetToken \n\n\n    return res.status('200').json({\n      message: \"Sent email\",\n      email: email,\n      user: user\n    });\n  });\n};\n\nvar validateToken = function validateToken(req, res) {\n  var token = req.body.token;\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    \"password_reset.token\": token\n  }, function (err, user) {\n    if (err || !user) return res.status('401').json({\n      error: \"Invalid password-reset token. Please submit a new request.\"\n    });else {\n      return res.status('200').json({\n        message: \"Found Valid Token\",\n        userId: user._id,\n        email: user.email,\n        tokenTimeStamp: user.password_reset.time_stamp\n      });\n    }\n  });\n};\n\nvar changePassword = function changePassword(req, res) {\n  var token = req.body.token;\n  var password = req.body.password;\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    \"password_reset.token\": token\n  }, function (err, user) {\n    if (err || !user) return res.status('401').json({\n      error: \"Invalid password-reset token. Please submit a new request.\"\n    });else {\n      user.password_reset.token = null;\n      user.password_reset.time_stamp = null;\n      user.password = password;\n      user.save();\n      return res.status('200').json({\n        message: \"Successfully changed Password\"\n      });\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  signin: signin,\n  signout: signout,\n  requireSignin: requireSignin,\n  hasAuthorization: hasAuthorization,\n  hasAuthorizationToViewImage: hasAuthorizationToViewImage,\n  passwordResetRequest: passwordResetRequest,\n  validateToken: validateToken,\n  changePassword: changePassword\n});\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/image.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/image.controller.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_image_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/image.model */ \"./server/models/image.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar create = function create(req, res, next) {\n  var form = new formidable__WEBPACK_IMPORTED_MODULE_4___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, function (err, fields, files) {\n    if (err) {\n      return res.status(400).json({\n        error: \"Image could not be uploaded\"\n      });\n    }\n\n    var image = new _models_image_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fields);\n    image.postedBy = req.profile;\n    var imgUrl = ''; //    console.log('getting here')\n\n    var saveImage = function saveImage() {\n      var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';\n\n      for (var i = 0; i < 6; i += 1) {\n        imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));\n      }\n\n      _models_image_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n        filename: imgUrl\n      }, function (err, images) {\n        if (images.length > 0) {\n          saveImage();\n        } else {\n          var tempPath = files.photo.path;\n          var ext = path__WEBPACK_IMPORTED_MODULE_2___default.a.extname(files.photo.name).toLowerCase(); //    let imgUrl=path.basename(files.photo.name.toLowerCase(),ext)\n          //use following for production\n\n          var targetPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(\"client/uploads/images/\".concat(imgUrl).concat(ext)); //use following for production--docker valume\n          //const targetPath = path.resolve(`public/images/${imgUrl}${ext}`);\n\n          image.filename = imgUrl + ext; //    fs.rename(tempPath,targetPath, (err) =>{\n          //      if (err) throw err\n          //    })\n\n          fs__WEBPACK_IMPORTED_MODULE_5___default.a.copyFile(tempPath, targetPath, function (err) {\n            if (err) throw err;\n          });\n          image.save(function (err, result) {\n            if (err) {\n              return res.status(400).json({\n                error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n              });\n            }\n\n            res.json(result);\n          });\n        } //end of generateName\n\n      });\n    };\n\n    saveImage();\n  });\n};\n\nvar imageByID = function imageByID(req, res, next, id) {\n  _models_image_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('postedBy', '_id name').exec(function (err, image) {\n    if (err || !image) return res.status('400').json({\n      error: \"Image not found\"\n    });\n    req.image = image;\n    next();\n  });\n};\n\nvar listImagesByUser = function listImagesByUser(req, res) {\n  _models_image_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n    postedBy: req.profile._id\n  }).populate('postedBy', '_id name') //  .sort('-created')\n  .exec(function (err, images) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.json(images);\n  });\n};\n\nvar getImageByID = function getImageByID(req, res) {\n  console.log(\"called\");\n  _models_image_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.imageId).populate('postedBy', '_id name').exec(function (err, image) {\n    if (err || !image) return res.status('400').json({\n      error: \"Image not found\"\n    });\n    res.json(image);\n  });\n};\n\nvar listBannerLinksByUserNoAuth = function listBannerLinksByUserNoAuth(req, res) {\n  BannerLink.find({\n    postedBy: req.profile._id\n  }).populate('postedBy', '_id name') //  .sort('-created')\n  .exec(function (err, bannerLinks) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.json(bannerLinks);\n  });\n};\n\nvar remove = function remove(req, res) {\n  var bannerLink = req.bannerLink;\n  bannerLink.remove(function (err, deletedBanner) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n      });\n    } else {\n      fs__WEBPACK_IMPORTED_MODULE_5___default.a.unlink(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(\"client/public/banners/\".concat(bannerLink.filename)), function (err) {\n        if (err) throw err;\n      });\n      res.json(deletedBanner);\n    }\n  });\n};\n\nvar isPoster = function isPoster(req, res, next) {\n  var isPoster = req.bannerLink && req.auth && req.bannerLink.postedBy._id == req.auth._id;\n\n  if (!isPoster) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nvar getAnImage = function getAnImage(req, res, next) {\n  if (req.image) return res.sendFile(process.cwd() + \"/client/uploads/images/\".concat(req.image.filename));\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  listImagesByUser: listImagesByUser,\n  getImageByID: getImageByID,\n  //  listBannerLinksByUserNoAuth,\n  create: create,\n  imageByID: imageByID,\n  remove: remove,\n  //  isPoster,\n  getAnImage: getAnImage\n});\n\n//# sourceURL=webpack:///./server/controllers/image.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar create = function create(req, res, next) {\n  var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  user.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n/**\n * Load user and append to req.\n */\n\n\nvar userByID = function userByID(req, res, next, id) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).exec(function (err, user) {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nvar read = function read(req, res) {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nvar list = function list(req, res) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(function (err, users) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.json(users);\n  }).select('name email updated created photo');\n};\n\nvar update = function update(req, res, next) {\n  var form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, function (err, fields, files) {\n    if (err) {\n      res.status(400).json({\n        message: \"Photo could not be uploaded\"\n      });\n    }\n\n    var user = req.profile;\n    user = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(user, fields);\n    user.updated = Date.now();\n\n    if (files.photo) {\n      user.photo.data = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n\n    user.save(function (err) {\n      if (err) {\n        return res.status(400).send({\n          error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n        });\n      }\n\n      user.hashed_password = undefined;\n      user.salt = undefined;\n      res.json(user);\n    });\n  });\n};\n\nvar remove = function remove(req, res, next) {\n  var user = req.profile;\n  user.remove(function (err, deletedUser) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\nvar photo = function photo(req, res, next) {\n  if (!req.profile.photo.data) return res.sendFile(process.cwd() + \"/client/assets/images/profile-pic.png\");\n\n  if (req.profile.photo.data) {\n    res.set(\"Content-Type\", req.profile.photo.contentType);\n    res.set(\"Content-Type\", 'image/jpeg');\n    return res.send(req.profile.photo.data);\n  }\n\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create: create,\n  userByID: userByID,\n  read: read,\n  list: list,\n  remove: remove,\n  update: update,\n  photo: photo\n});\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_admin_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/admin.routes */ \"./server/routes/admin.routes.js\");\n/* harmony import */ var _routes_image_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/image.routes */ \"./server/routes/image.routes.js\");\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // parse body params and attach them to req.body\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.text());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()()); // secure apps by setting various HTTP headers\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()()); // enable CORS - Cross Origin Resource Sharing\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()()); // mount routes\n\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use('/', _routes_admin_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/', _routes_image_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]); // Catch unauthorised errors\n\napp.use(function (err, req, res, next) {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/**\r\n * Get unique error field name\r\n */\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n  var output;\n\n  try {\n    var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n/**\r\n * Get the error message from error object\r\n */\n\n\nvar getErrorMessage = function getErrorMessage(err) {\n  var message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = \"An account already exists for that email address.\"; //getUniqueErrorMessage(err)\n\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (var errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getErrorMessage: getErrorMessage\n});\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/helpers/nodemailerMessageHandler.js":
/*!****************************************************!*\
  !*** ./server/helpers/nodemailerMessageHandler.js ***!
  \****************************************************/
/*! exports provided: getAccountAccessAttemptedMessage, getResetToken, getPasswordResetMessage, sendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAccountAccessAttemptedMessage\", function() { return getAccountAccessAttemptedMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getResetToken\", function() { return getResetToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPasswordResetMessage\", function() { return getPasswordResetMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendMessage\", function() { return sendMessage; });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nvar getAccountAccessAttemptedMessage = function getAccountAccessAttemptedMessage(email) {\n  var message = {\n    from: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpUser,\n    to: email,\n    subject: \"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" Account Access Attempted\"),\n    text: \"You (or someone else) entered this email address when trying to change the password of a \".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" account.         However, this email address is not in our database of registered users and therefore the attempted password change has failed.        If you are a registered \").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" user and your were expecting this email, please try again using the email address you gave when you signed up.        If you are not a registered user, please ignore this email.        Kind Regards        \").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" Support\"),\n    html: \"<p>You (or someone else) entered this email address when trying to change the password of a \".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" account on our site.        </p>However, this email address is not in our database of registered users and therefore the attempted password change has failed.</p>        <p>If you are a registered \").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" user and you were expecting this email, please try again using the email address you gave when you signed up.</p>        <p>If you are not a registered user, please ignore this email.</p>        <p>Kind regards</p>        <p>\").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" Support</p>\")\n  };\n  return message;\n};\n\nvar getPasswordResetMessage = function getPasswordResetMessage(email, resetToken) {\n  var message = {\n    from: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpUser,\n    to: email,\n    subject: \"Please Reset your \".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" Password\"),\n    text: \"We sent this message because you requested that your \".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" password be reset. \\n        To Get back into your \").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" account you will need to create a new password.\\n        Please follow these instructions:\\n        1. Click the link below to open a new and secure browser window\\n        2. Enter the requested information and follow the instructions to reset your password.\\n        Reset your password now: \\n        \").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appUrlBase, \"/reset-password/\").concat(resetToken),\n    html: \"<p> We sent this message because you requested that your \".concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" password be reset.</p> \\n        <p>To Get back into your \").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appProjectName, \" account you will need to create a new password.</p>\\n        <p>Please follow these instructions:</p>\\n        <p>1. Click the link below to open a new and secure browser window</p>\\n        <p>2. Enter the requested information and follow the instructions to reset your password.</p>\\n        <p>Reset your password now:</p>\\n        <p><a href=\\\"\").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appUrlBase, \"/reset-password/\").concat(resetToken, \"\\\">\").concat(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appUrlBase, \"/reset-password/\").concat(resetToken, \"</a></p>\")\n  };\n  return message;\n};\n\nvar getResetToken = function getResetToken(length) {\n  var text = \"\";\n  var possible = \"abcdefghijklmnopqrstuvwxyz0123456789_-.\";\n\n  for (var i = 0; i < length; i++) {\n    text += possible.charAt(Math.floor(Math.random() * possible.length));\n  }\n\n  return text;\n};\n\nvar sendMessage = function sendMessage(message) {\n  var transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1___default.a.createTransport({\n    host: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpUrl,\n    port: 465,\n    secure: true,\n    auth: {\n      user: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpUser,\n      pass: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smtpPassword\n    }\n  });\n  transporter.verify(function (error, success) {\n    if (error) {\n      console.log(error);\n    } else {\n      //      console.log(success)\n      //      console.log(\"Server is ready to take our messages\");\n      transporter.sendMail(message);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./server/helpers/nodemailerMessageHandler.js?");

/***/ }),

/***/ "./server/models/image.model.js":
/*!**************************************!*\
  !*** ./server/models/image.model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ImageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  filename: {\n    type: String\n  },\n  postedBy: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.ObjectId,\n    ref: 'User'\n  }\n});\nImageSchema.virtual('uniqueId').get(function () {\n  return this.filename.replace(path.extname(this.filename), '');\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Image', ImageSchema));\n\n//# sourceURL=webpack:///./server/models/image.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  password_reset: {\n    token: {\n      type: String\n    },\n    time_stamp: {\n      type: Number\n    }\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  }\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/admin.routes.js":
/*!***************************************!*\
  !*** ./server/routes/admin.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../controllers/admin.controller */ \"./server/controllers/admin.controller.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n/*\nrouter.route('/api/log/record-action')\n  .post(adminCtrl.create)\n\nrouter.route('/api/log/list-all')\n  .get(adminCtrl.listAllLogs)\n\nrouter.route('/api/log/calculate-stats')\n  .get(adminCtrl.calculateStats)\n*/\n\nrouter.route('/api/admin/send-contact-message').post(_controllers_admin_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendContactMessage);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/admin.routes.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nrouter.route('/auth/password-reset-request').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].passwordResetRequest);\nrouter.route('/auth/validate-token').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateToken);\nrouter.route('/auth/change-password').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changePassword);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/image.routes.js":
/*!***************************************!*\
  !*** ./server/routes/image.routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* harmony import */ var _controllers_image_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/image.controller */ \"./server/controllers/image.controller.js\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/api/images/new/:userId').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_image_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create);\nrouter.route('/api/images/get/:userId/:imageId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorizationToViewImage, _controllers_image_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAnImage);\nrouter.route('/api/images/by/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_image_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listImagesByUser);\nrouter.route('/api/image/by/:imageId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_image_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getImageByID);\n/*  \nrouter.route('/api/bannerlinks/by/:userId')\n.get(bannerLinkCtrl.listBannerLinksByUserNoAuth)\nrouter.route('/api/bannerlinks/:bannerLinkId')\n.delete(authCtrl.requireSignin, bannerLinkCtrl.isPoster, bannerLinkCtrl.remove)\n\n*/\n\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nrouter.param('imageId', _controllers_image_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].imageByID);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/image.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update)[\"delete\"](_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.route('/api/users/photo/:userId').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].photo);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Connection URL\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useCreateIndex: true,\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', function () {\n  throw new Error(\"unable to connect to database: \".concat(mongoUri));\n});\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /var/www/html/nodeapps/photocoloringbooks/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });