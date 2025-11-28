function smallestIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 9) {
            let sum = 0
            while (nums[i] > 0) {
                let value = nums[i] % 10
                sum += value
                nums[i] = Math.floor(nums[i] / 10);
            }
            if (sum === i) {
                return i
            }
        } else if (nums[i] == i) {
            return i
        }
    }
    return -1
};