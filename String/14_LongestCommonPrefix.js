function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }

    let index = 0;
    let isSame = true;
    const firstString = strs[0];

    for (index = 0; index < firstString.length; index++) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i].length <= index || strs[i][index] !== firstString[index]) {
                isSame = false;
                break;
            }
        }
        if (!isSame) {
            break;
        }
    }

    return firstString.substring(0, index);
}

