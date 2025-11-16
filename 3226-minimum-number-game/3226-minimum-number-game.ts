function quickSort(arr: number[], low: number, high: number) {
    if (low >= high) return;

    let pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];

    quickSort(arr, low, i - 1);
    quickSort(arr, i + 1, high);
}

function numberGame(nums: number[]): number[] {
    quickSort(nums, 0, nums.length - 1);

    for (let i = 0; i < nums.length; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }

    return nums;
}
