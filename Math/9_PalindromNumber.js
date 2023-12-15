function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }

    let y = 0;
    let z = 0;
    let son = x;

    while (son !== 0) {
        z = son % 10;
        y = y * 10 + z;
        son = Math.floor(son / 10);
    }

    return x === y;
}
