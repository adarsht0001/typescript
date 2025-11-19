function findFinalValue(nums: number[], original: number): number {
    let numSet = new Set(nums);
    while (numSet.has(original)) {
        original = 2 * original
    }

    return original;
};