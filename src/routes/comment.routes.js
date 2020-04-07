const { Router } = require("express");

module.exports = function({ CommentController }) {
	const router = Router();

	router.get("/:commentId/unique", CommentController.get);
	router.get("/:userId", CommentController.getIdeaComments);
	router.get("/:userId", CommentController.createComment);
	router.patch("/:commentId", CommentController.update);
	router.delete("/:commentId", CommentController.delete);

	return router;
};
