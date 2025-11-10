function differenceOfSum(nums: number[]): number {
    let digitSum = 0
    let elementSum = 0

    for (let i = 0; i < nums.length; i++) {
        elementSum += nums[i]
        let val = nums[i]
        if (val > 9) {
            while (val > 0) {
                digitSum += val % 10;
                val = Math.floor(val / 10)
            }
        } else {
            digitSum += val
        }
    }

    return elementSum - digitSum

};