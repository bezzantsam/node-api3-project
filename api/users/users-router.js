const express = require('express');
const { 
validateUserId,
}= require('../middleware/middleware')
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id',validateUserId,(req, res) => {

  console.log(req.user)
});

router.post('/', (req, res) => {
 
  console.log(req.user)
});

router.put('/:id', validateUserId,(req, res) => {

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