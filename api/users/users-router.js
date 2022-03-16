const express = require('express');
const { 
validateUserId,
validateUser,
}= require('../middleware/middleware')
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id',validateUserId,(req, res) => {

  console.log(req.user)
});

router.post('/', validateUser, (req, res) => {
 
  console.log(req.name)
});

router.put('/:id', validateUserId, validateUser,(req, res) => {

  console.log(req.user)
});

router.delete('/:id',validateUserId,(req, res) => {
  
});

router.get('/:id/posts', validateUserId,(req, res) => {
 
  console.log(req.user)
});

router.post('/:id/posts',validateUserId, (req, res) => {
  
  console.log(req.user)
});

// do not forget to export the router
module.exports = router;