const valName = (name) => {
    if (/^[A-Za-z/-\s]+$/g.test(name)) {
        return true;
    } else {
        console.log(` - Please use letters and hyphens only`)
        return false;
    }
};


module.exports = {
    valName,

}