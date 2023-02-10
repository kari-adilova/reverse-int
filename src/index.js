module.exports = function reverse (n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    const nStr = n.toString();
    let result = '';
    for (let i = 0; i < nStr.length; i++) {
        result  = nStr[i] + result;
    }
    return Number(result); 
}
