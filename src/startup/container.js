const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config
const config = require("../config");
const appServer = require(".");

//services
const {
	HomeService,
	CommentService,
	IdeaService,
	UserService,
	AuthService
} = require("../services");

//controller
const {
	HomeController,
	UserController,
	IdeaController,
	CommentController,
	AuthController
} = require("../controllers");

//routes
const {
	HomeRoutes,
	UserRoutes,
	IdeaRoutes,
	CommentRoutes,
	AuthRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");

//models
const { Comment, Idea, User } = require("../models");

// repository
const {
	CommentRepository,
	IdeaRepository,
	UserRepository
} = require("../repositories");

const container = createContainer();

container
	.register({
		appServer: asClass(appServer).singleton(),
		router: asFunction(Routes).singleton(),
		config: asValue(config)
	})
	.register({
		HomeService: asClass(HomeService).singleton(),
		UserService: asClass(UserService).singleton(),
		CommentService: asClass(CommentService).singleton(),
		IdeaService: asClass(IdeaService).singleton(),
		AuthService: asClass(AuthService).singleton()
	})
	.register({
		HomeController: asClass(HomeController.bind(HomeController)).singleton(),
		UserController: asClass(UserController.bind(UserController)).singleton(),
		IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
		AuthController: asClass(AuthController.bind(AuthController)).singleton(),
		CommentController: asClass(
			CommentController.bind(CommentController)
		).singleton()
	})
	.register({
		HomeRoutes: asFunction(HomeRoutes).singleton(),
		UserRoutes: asFunction(UserRoutes).singleton(),
		IdeaRoutes: asFunction(IdeaRoutes).singleton(),
		CommentRoutes: asFunction(CommentRoutes).singleton(),
		AuthRoutes: asFunction(AuthRoutes).singleton()
	})
	.register({
		User: asValue(User),
		Idea: asValue(Idea),
		Comment: asValue(Comment)
	})
	.register({
		UserRepository: asClass(UserRepository).singleton(),
		IdeaRepository: asClass(IdeaRepository).singleton(),
		CommentRepository: asClass(CommentRepository).singleton()
	});

module.exports = container;
