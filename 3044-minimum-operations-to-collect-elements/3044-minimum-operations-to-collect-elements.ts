function minOperations(nums: number[], k: number): number {
    const collection = new Set();
    let operationCount = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        operationCount++
        if (nums[i] <= k) {
            collection.add(nums[i])
        }
        if (k === collection.size) {
            return operationCount
        }
    }
};