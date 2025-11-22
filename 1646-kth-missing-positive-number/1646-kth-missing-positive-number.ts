function findKthPositive(arr: number[], k: number): number {
    if (arr[0] > k) return k

    const firstElm = arr[0]
    const lastElm = arr[arr.length - 1]
   
    let missingCount = 0
    for (let i = 1; i < lastElm; i++) {
        if (!arr.includes(i)) {
            missingCount += 1
            if (missingCount === k) {
                return i
            }
        }
    }
    return lastElm + (k - missingCount)

};