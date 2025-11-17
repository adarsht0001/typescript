function kLengthApart(nums: number[], k: number): boolean {
    let lastFindIndex = null
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            if (lastFindIndex != null) {
                if ((i - lastFindIndex - 1) < k) {
                    return false
                }
            }
            lastFindIndex = i
        }

    }
    return true
};