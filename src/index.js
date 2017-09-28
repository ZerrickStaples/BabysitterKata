export function startTimeRate (startTime, bedTime) {

    if (startTime < 5){
        startTime = 5;
    }

    var startTimeHours = (bedTime - startTime)
    return startTimeHours * 12;
}

export function bedTimeRate () {
    return 8;
}