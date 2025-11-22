function mySqrt(x: number): number {
    if (x == 1) return 1
    let low = 0;
    let high = x / 2;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const square = mid * mid;
        if (square < x) {
            low = mid + 1
        } else if (square > x) {
            high = mid - 1
        } else {
            return mid;
        }
    }
    return low - 1
};