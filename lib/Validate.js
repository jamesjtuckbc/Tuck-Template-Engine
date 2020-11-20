const valName = (name) => {
    if (/^[A-Za-z/-\s]+$/g.test(name)) {
        return true;
    } else {
        console.log(` - Please use letters and hyphens only`);
        return false;
    }
};

const valId = (id) => {
    if (/^[\d]+$/g.test(id)) {
        return true;
    } else {
        console.log(` - Please use numbers only`);
        return false;
    }
};

const valEmail = (email) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        console.log(` - Please enter a valid email address`);
        return false;
    }
};

const valOffNum = (officeNumber) => {
    if(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/.test(officeNumber)) {
        return true;
    } else {
        console.log(` - Please enter a valid phone number`);
        return false;
    }
};

module.exports = {
    valId,
    valName,
    valEmail,
    valOffNum,
    
}