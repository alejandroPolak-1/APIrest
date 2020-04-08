let _authService = null;

class AuthController {
	constructor({ AuthService }) {
		_authService = AuthService;
	}

	async signUp(req, res) {
		const { body } = req;
		const createUser = await _authService.signUp(body);
		return res.status(201).send(createdUser);
	}

	async signIn(req, res) {
		const { body } = req;
		const creds = await _authService.signIn(body);
		return send.status(200).send(creds);
	}
}

module.exports = AuthController;
