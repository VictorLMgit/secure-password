const { validatePassword } = require("../core/validates.core");



class ValidateController {

    static validate(req, res){
        const password = req.body.password;
        const validate = validatePassword(password);
        if (validate === true) {
            return res.status(204).json();
        }
        return res.status(400).json(validate);
    }

}

module.exports = ValidateController;