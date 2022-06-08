const Settings = require("./settings");

const vExpress = require("express");
const vPath = require("path");
const vBodyParser = require("body-parser");

const vSettings = new Settings();

const vApp = vExpress();

class Express {
	vReturnApp() {
		return vApp;
	}

	vStartExpress() {
		this.#vInitExpress();
	}

	#vInitExpress() {
		vApp.use(vBodyParser.json());
		vApp.use(vBodyParser.urlencoded());
		vApp.use(vBodyParser.urlencoded({ extended: true }));

		vApp.get("/", (req, res) => {
			res.sendStatus(404);
		});

		vApp.post("/port", (req, res) => {
			let oResponse = req.body;

			vSettings.vChangeServerPort(oResponse);
		});

		vApp.post("/token", (req, res) => {
			let oResponse = req.body;

			vSettings.vChangeServerToken(oResponse);
		});
	}
}

module.exports = Express;
