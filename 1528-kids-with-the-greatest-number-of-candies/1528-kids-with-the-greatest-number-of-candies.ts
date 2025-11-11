function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let largeNum = candies[0]
    const result = []
    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > largeNum) {
            largeNum = candies[i]
        }
    }
    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= largeNum) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
};