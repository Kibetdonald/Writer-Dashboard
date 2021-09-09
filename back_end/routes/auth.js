const { signup } = require('../controller/auth');

const { signin } = require('../controller/auth');

const router = require('express').Router();
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');


const express = require('express');
const { requireSignin } = require('../common-middleware');
const { signout } = require('../controller/auth');


//set up the routes

router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin',validateSigninRequest, isRequestValidated, signin);
router.post('/signout',requireSignin, signout)

module.exports = router;