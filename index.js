var homePointsEl = document.getElementById("homepointsel");
var guestPointsEl = document.getElementById("guestpointsel");

var homePoint = 0;
var guestPoint = 0;

homePointsEl.textContent = homePoint;
guestPointsEl.textContent = guestPoint;

function onePointHome() {
    homePoint ++
    homePointsEl.textContent = homePoint
}

function twoPointsHome() {
    homePoint += 2
    homePointsEl.textContent = homePoint
}

function threePointsHome() {
    homePoint += 3
    homePointsEl.textContent = homePoint
}

// For the Guest Points

function onePointGuest() {
    guestPoint ++
    guestPointsEl.textContent = guestPoint
}

function twoPointsGuest() {
    guestPoint += 2
    guestPointsEl.textContent = guestPoint
}

function threePointsGuest() {
    guestPoint += 3
    guestPointsEl.textContent = guestPoint
}
