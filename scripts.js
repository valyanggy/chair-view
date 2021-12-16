//Global variables
// var rotate = document.getElementById('rotation');
var source = document.getElementById('current');
var place = document.getElementById('places');

// var playPause = document.getElementById('playPause');

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

var placeList = document.querySelectorAll('figcaption a');

var nextLink = placeList[1].getAttribute('href');
var nextID = placeList[1].getAttribute('id');

var prevLink = placeList[placeList.length - 1].getAttribute('href');
var prevID = placeList[placeList.length - 1].getAttribute('id');

var aVideo = document.getElementById("video1");
var bVideo = document.getElementById("video2");
var cVideo = document.getElementById("video3");
var dVideo = document.getElementById("video4");
var eVideo = document.getElementById("video5");

function arotateView() {
    if (aVideo.paused)
        aVideo.play();
    else
        aVideo.pause();
}

function brotateView() {
    if (bVideo.paused)
        bVideo.play();
    else
        bVideo.pause();
}

function crotateView() {
    if (cVideo.paused)
        cVideo.play();
    else
        cVideo.pause();
}

function drotateView() {
    if (dVideo.paused)
        dVideo.play();
    else
        dVideo.pause();
}

function erotateView() {
    if (eVideo.paused)
        eVideo.play();
    else
        eVideo.pause();
}



//Executing functions

// playPause.onclick = togglePlay;

nextButton.onclick = next;
prevButton.onclick = prev;

elevator.oninput = () => {
    document.getElementById("elevator-player").volume = ~~(elevator.value) * 0.01
}

rainfull.oninput = () => {
    document.getElementById("rainfull-player").volume = ~~(rainfull.value) * 0.01
}

baby.oninput = () => {
    document.getElementById("baby-player").volume = ~~(baby.value) * 0.01
}

bird.oninput = () => {
    document.getElementById("bird-player").volume = ~~(bird.value) * 0.01
}



for (var i = 0; i < placeList.length; i++) {
    placeList[i].onclick = select;
}

// Defining functions

function togglePlay() {
    if (rotate.paused || rotate.ended) {
        rotate.play();
        playPause.style.backgroundImage = "url('pause.png')";

    } else {
        rotate.pause();
        playPause.style.backgroundImage = "url('rotate.png')";
    }
}

function select(e) {
    e.preventDefault();
    placeTarget = this.getAttribute('href');
    placeTargetID = this.getAttribute('ID');
    source.src = placeTarget;
    place.load();
    // togglePlay();
    updateNavigation();
}

function next() {
    placeTarget = nextLink;
    placeTargetID = nextID;
    source.src = placeTarget;
    place.load();
    // togglePlay();
    updateNavigation();
}

function prev() {
    placeTarget = prevLink;
    placeTargetID = prevID;
    source.src = placeTarget;
    place.load();
    // togglePlay();
    updateNavigation();
}

function updateNavigation() {
    if (placeTargetID == placeList.length - 1) {
        nextLink = placeList[0].getAttribute('href');
        nextID = placeList[0].getAttribute('id');
    } else {
        nextLink = placeList[Number(placeTargetID) + 1].getAttribute('href');
        nextID = placeList[Number(placeTargetID) + 1].getAttribute('id');
    }
    if (placeTargetID == 0) {
        prevLink = placeList[placeList.length - 1].getAttribute('href');
        prevID = placeList[placeList.length - 1].getAttribute('id');
    } else {
        prevLink = placeList[Number(placeTargetID) - 1].getAttribute('href');
        prevID = placeList[Number(placeTargetID) - 1].getAttribute('id');
    }

    console.log('next = ' + nextLink + 'nextID = ' + nextID);
    console.log('prev = ' + prevLink + 'prevID = ' + prevID);
}