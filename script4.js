function lowToUp(str) {
    let regex = /[A-Z]/g;

    if (str.match(regex)) {
        return str.toLowerCase();
    } else {
        return str.toUpperCase();
    }
}
export { lowToUp };
