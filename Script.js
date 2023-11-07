window.addEventListener('scroll', function() {
    let cards = document.querySelector('.cards');
    let cardsPosition = cards.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (cardsPosition < screenPosition) {
        cards.classList.add('show');
    }
});


window.addEventListener('scroll', function() {
    let contentsBrief = document.querySelector('.contents-brief');
    let contentImage = document.querySelector('.content-image');
    let contentsBriefPosition = contentsBrief.getBoundingClientRect().top;
    let contentImagePosition = contentImage.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (contentsBriefPosition < screenPosition) {
        contentsBrief.classList.add('show');
    }

    if (contentImagePosition < screenPosition) {
        contentImage.classList.add('show');
    }
});

window.addEventListener('scroll', function() {
    let contentBriefTwo = document.querySelector('.content-brief-two');
    let contentImageTwo = document.querySelector('.content-image-two');
    let contentBriefTwoPosition = contentBriefTwo.getBoundingClientRect().top;
    let contentImageTwoPosition = contentImageTwo.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (contentBriefTwoPosition < screenPosition) {
        contentBriefTwo.classList.add('show');
    }

    if (contentImageTwoPosition < screenPosition) {
        contentImageTwo.classList.add('show');
    }
});

window.addEventListener("scroll", function () {
    var serviceCard1 = document.querySelector(".service-card-1");
    var serviceCard2 = document.querySelector(".service-card-2");

    var card1Position = serviceCard1.getBoundingClientRect().top;
    var card2Position = serviceCard2.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (card1Position < screenHeight - 100) {
        serviceCard1.style.transform = "translateX(0)";
    }

    if (card2Position < screenHeight - 100) {
        serviceCard2.style.transform = "translateX(0)";
    }
});


window.addEventListener("scroll", function () {
    var iphoneContainer = document.querySelector(".iphone-container");
    var containerPosition = iphoneContainer.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (containerPosition < screenHeight - 100) {
        document.querySelector(".iphone-content").style.transform = "translateX(0)";
        document.querySelector(".iphone-image").style.transform = "translateX(0)";
    }
});

window.addEventListener("scroll", function () {
    var iphoneContainer = document.querySelector(".android-container");
    var containerPosition = iphoneContainer.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (containerPosition < screenHeight - 100) {
        document.querySelector(".android-content").style.transform = "translateX(0)";
        document.querySelector(".android-image").style.transform = "translateX(0)";
    }
});

window.addEventListener("scroll", function() {
    var iphoneItemsService = document.querySelector(".iphone-items-service");
    var iphoneItemsServicePosition = iphoneItemsService.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (iphoneItemsServicePosition < screenPosition) {
        iphoneItemsService.classList.add("fromBelow");
    }
});

