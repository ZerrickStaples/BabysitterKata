export function startTimeRate (startTime, bedTime) {
    var startTimeHours = (bedTime - startTime)
    return startTimeHours * 12;
}