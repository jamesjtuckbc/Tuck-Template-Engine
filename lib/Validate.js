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

module.exports = {
    valId,
    valName,
    valEmail,
    
}