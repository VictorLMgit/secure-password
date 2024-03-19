
const validators = {
    checkUpperCase: (char) => {
        return char == char.toUpperCase();
    },
    checkLowerCase: (char) => {
        return char == char.toLowerCase();
    },
    checkDigit: (char) => {
        return !isNaN(char);
    },
    checkSpecialCharacter: (char) => {
        return /[^\w\s]/.test(char);
    }
}


/**
 * 
 * @param {string} password 
 */
function validatePassword(password) {
    let rules = {
        minLength: [false, "Menor que 8 caracteres"],
        uppercaseLetter: [false, "Sem letra Maiúscula"],
        lowecaseLetter: [false, "Sem letra Minúscula"],
        numericDigit: [false, "Sem digito numérico"],
        specialCharacter: [false, "Sem caractere especial"]
    };

    if (password.length >= 8) rules.minLength = true;
    for (const char of password) {
        if (validators.checkSpecialCharacter(char)) { 
            rules.specialCharacter = true 
            continue;
        };
        if (validators.checkDigit(char)) { 
            rules.numericDigit = true 
            continue;
        };
        if (validators.checkLowerCase(char)) { 
            rules.lowecaseLetter = true 
            continue;
        };
        if (validators.checkUpperCase(char)) { 
            rules.uppercaseLetter = true 
            continue;
        };
    }


    let qtdVulnerabilities = 0;
    const vulnerabilities = Object.values(rules)
    .filter(value => value !== true)
    .reduce((acc, [key, value]) => {
        qtdVulnerabilities++;
        acc["vulnerabilitie_"+qtdVulnerabilities] = value; 
        return acc;
    }, {});
    
    return qtdVulnerabilities == 0 ? true : vulnerabilities;
}


module.exports = {
    validatePassword
}