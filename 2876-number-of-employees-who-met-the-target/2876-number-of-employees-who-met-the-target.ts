function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let completed = 0
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            completed += 1
        }
    }
    return completed
};