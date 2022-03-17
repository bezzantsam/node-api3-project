const express = require('express');
const res = require('express/lib/response');
const { 
validateUserId,
validateUser,
validatePost,
}= require('../middleware/middleware')
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required
const User = require('./users-model')
const Post = require('../posts/posts-model')
const router = express.Router();

router.get('/', (req, res, next) => {
  User.get()
  .then(users => {
    res.json(users)
  })
  .catch(next)
});

router.get('/:id',validateUserId,(req, res) => {

  console.log(req.user)
});

router.post('/', validateUser,validatePost, (req, res) => {
 
  console.log(req.user)
  console.log(req.text)
});

router.put('/:id', validateUserId, validateUser,(req, res) => {

  console.log(req.user)
});

router.delete('/:id',validateUserId,(req, res) => {
  
});

router.get('/:id/posts', validateUserId,(req, res) => {
 
  console.log(req.user)
});

router.post('/:id/posts',validateUserId,validatePost, (req, res) => {
  
  console.log(req.user)
});
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({customMessage: 'something tragic inside posts router happened',
    message: err.message,
     stack: err.stack,
})
})

// do not forget to export the router
module.exports = router;