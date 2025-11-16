function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    if(nums.length==1&&nums[0]==target){
        return 0
    }
    while (high - low > 1) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return -1;
};