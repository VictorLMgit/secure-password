const { validatePassword } = require("../core/validates.core");



class ValidateController {

    static validate(req, res, next){
        const password = req.body.password;
        const validate = validatePassword(password);
        if (validate !== true) return res.status(400).json(validate);
        
        next();
    }

}

module.exports = ValidateController;