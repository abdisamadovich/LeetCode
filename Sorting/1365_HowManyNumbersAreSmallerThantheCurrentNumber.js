function smallerNumbersThanCurrent(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let k = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                k++;
            }
        }
        result[i] = k;
    }

    return result;
}
