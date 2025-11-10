function getConcatenation(nums: number[]): number[] {
    const concatedArray = []
    for (let i = 0; i < nums.length; i++) {
        concatedArray[i] = nums[i]
        concatedArray[nums.length + i] = nums[i]
    }
    return concatedArray
};