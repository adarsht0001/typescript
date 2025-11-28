function areaOfMaxDiagonal(dimensions: number[][]): number {
    let largest = (dimensions[0][0] * dimensions[0][0]) + (dimensions[0][1] * dimensions[0][1])
    let area = dimensions[0][0] * dimensions[0][1]

    for (let i = 1; i < dimensions.length; i++) {
        const currentValue = (dimensions[i][0] * dimensions[i][0]) + (dimensions[i][1] * dimensions[i][1]);
        const currentArea = dimensions[i][0] * dimensions[i][1]
        if (currentValue === largest) {
            area = Math.max(area, currentArea)
        }
        if (currentValue > largest) {
            largest = currentValue;
            area = currentArea
        }
    }

    return area
};
