const { Router } = require("express");

module.exports = function({ IdeaController }) {
	const router = Router();

	router.get("", IdeaController.getAll);
	router.get("/:ideaId", IdeaController.get);
	router.get("/:ideaId/all", IdeaController.getUserIdea);
	router.post("", IdeaController.create);
	router.post("/:ideaId/upvote", IdeaController.upvoteIdea);
	router.post("/:ideaId/downvote", IdeaController.downvoteIdea);
	router.patch("/:ideaId", IdeaController.update);
	router.delete("/:ideaId", IdeaController.delete);

	return router;
};