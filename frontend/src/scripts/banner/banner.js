const bannerTrack = document.querySelector(".banner-track");
const indicators = document.querySelectorAll(".indicator");
const bannerSlider = document.querySelector(".banner-slider");

let index = 0;
let isBannerVisible = false;
let changedManually = false;
let manualTimeout;

function changeBanner(newIndex) {
    index = newIndex;

    bannerTrack.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
    });
}

function nextBanner() {
    index++;

    if (index >= indicators.length) {
        index = 0;
    }

    changeBanner(index);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function autoChangeBanner() {
    while (true) {
        if (!isBannerVisible || changedManually) {
            await sleep(1000);
            continue;
        }

        await sleep(5000);
        nextBanner();
    }
}

function setupIndicatorEvents() {
    indicators.forEach((indicator, i) => {
        indicator.addEventListener("click", () => {
            changeBanner(i);
            changedManually = true;
            clearTimeout(manualTimeout);
            manualTimeout = setTimeout(() => {
                changedManually = false;
            }, 15000);
        });
    });
}

function setupVisibilityObserver() {
    const observer = new IntersectionObserver(([entry]) => {
        isBannerVisible = entry.isIntersecting;
    }, {
        threshold: 0.5
    });

    observer.observe(bannerSlider);
}

function main() {
    setupIndicatorEvents();
    setupVisibilityObserver();
    autoChangeBanner();
}

main();