const hqDestination = 42;

function distanceFromHqInBlocks(startingDestination) {
    let distanceInBlocks = Math.abs(startingDestination - hqDestination);
    return distanceInBlocks
}

function distanceFromHqInFeet(startingDestination) {
    let distanceInFeet = Math.abs(distanceFromHqInBlocks(startingDestination) * 264);
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination) {
    let distanceInFeet = Math.abs((destination-start) * 264)
    return distanceInFeet
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    switch (start, destination) {
        case feet <= 400:
        return (0);
        break;
        case feet <= 2000:
        return (128 * .02);
        break;
        case feet <= 2500:
        return (25);
        break;
        case feet > 2500:
        return ('cannot travel that far')
    }
}
