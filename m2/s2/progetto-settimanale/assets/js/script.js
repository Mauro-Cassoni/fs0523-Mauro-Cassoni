let trendingSplide = new Splide('.trending-splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
});

trendingSplide.mount();

let watchAgainSplide = new Splide('.watch-again-splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
});

watchAgainSplide.mount();

let newReleasesSplide = new Splide('.new-releases-splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
});

newReleasesSplide.mount();

function setPerPage() {
    if (window.innerWidth < 450) {
        trendingSplide.options.perPage = 1;
        watchAgainSplide.options.perPage = 1;
        newReleasesSplide.options.perPage = 1;
    } else if (window.innerWidth < 690) {
        trendingSplide.options.perPage = 2;
        watchAgainSplide.options.perPage = 2;
        newReleasesSplide.options.perPage = 2;
    } else if (window.innerWidth < 1024) {
        trendingSplide.options.perPage = 3;
        watchAgainSplide.options.perPage = 3;
        newReleasesSplide.options.perPage = 3;
    } else if (window.innerWidth < 1360) {
        trendingSplide.options.perPage = 4;
        watchAgainSplide.options.perPage = 4;
        newReleasesSplide.options.perPage = 4;
    } else if (window.innerWidth < 1620) {
        trendingSplide.options.perPage = 5;
        watchAgainSplide.options.perPage = 5;
        newReleasesSplide.options.perPage = 5;
    } else {
        trendingSplide.options.perPage = 6;
        watchAgainSplide.options.perPage = 6;
        newReleasesSplide.options.perPage = 6;
    }

    trendingSplide.refresh();
    watchAgainSplide.refresh();
    newReleasesSplide.refresh();
}

setPerPage();

window.addEventListener("resize", setPerPage);