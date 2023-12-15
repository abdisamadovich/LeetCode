function balancedStringSplit(s) {
    let result = 0;
    let l = 0;
    let r = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            r++;
        } else {
            l++;
        }
        if (l === r) {
            result++;
        }
    }
    return result;
}
