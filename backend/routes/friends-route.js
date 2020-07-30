const express = require('express');

const friendsControllers = require ('../controllers/friends-controllers');

const router = express.Router();


router.get('/', friendsControllers.getFriendsDUMMY);

router.get('/:id', friendsControllers.getFriends);

router.post('/', friendsControllers.postFriend);

router.patch('/', friendsControllers.updateFriends);

router.delete('/', friendsControllers.deleteFriend);



module.exports = router;