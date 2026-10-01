import React, { useEffect, useState } from "react";

function useMobile() {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 479px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 479px)");

        const handleChange = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return isMobile;
}

function Banner() {
    const isMobile = useMobile();

    useEffect(() => {
        const bannerTrack = document.querySelector(".banner-track");
        const indicators = document.querySelectorAll(".indicator");
        const bannerSlider = document.querySelector(".banner-slider");

        //evitar erro
        if (!bannerTrack || indicators.length === 0 || !bannerSlider) return;

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
                await sleep(10000);
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
                    }, 25000);
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

        setupVisibilityObserver();
        autoChangeBanner();
        
        if (!isMobile) {
            setupIndicatorEvents();
        } else {
            const slide = document.querySelector(".banner-slide");

            let startX = 0
            let currentX = 0
            if (slide) {
                slide.addEventListener("touchstart", (event) => {
                    startX = event.touches[0].clientX;
                    currentX = startX;

                    bannerTrack.style.transition = "none";
                });

                slide.addEventListener("touchmove", (event) => {
                    event.preventDefault();

                    currentX = event.touches[0].clientX;

                    const deltaX = currentX - startX;

                    bannerTrack.style.transform =
                        `translateX(calc(-${index * 100}% + ${deltaX}px))`;
                }, { passive: false });

                slide.addEventListener("touchend", () => {
                    const deltaX = currentX - startX;
                    bannerTrack.style.transition = "transform 0.4s ease";

                    if (deltaX < -80) {
                        nextBanner();
                    }

                    if (deltaX > 80) {
                        if (index < 0) {
                            index = indicators.length - 1;
                        }

                        changeBanner(index)
                    }
                });
            }
        }

    }, []); 

    return (
        <section className="banner" aria-label="Banner promocional">
            <div className="banner-slider">
                <div className="banner-track flex">
                    <div className="banner-slide">
                        <img src="/assets/images/banners/banner-1.png" fetchPriority="high" alt="" />
                        <div className="banner-overlay">
                            <div className="banner-content flex flex-column gap-5">
                                <h2 className="banner-title-black-left banner-title">Tudo que você precisa, em um só lugar.</h2>
                                <p className="banner-description-black-left banner-description">Qualidade, variedade e os melhores preços para o seu dia a dia.</p>
                                <a href="#" className="banner-button-black-left banner-button flex justify-center items-center">Compre agora</a>
                            </div>
                        </div>
                    </div>

                    <div className="banner-slide">
                        <img src="/assets/images/banners/banner-2.png" alt="" />
                        <div className="banner-overlay">
                            <div className="banner-content flex flex-column gap-5">
                                <h2 className="banner-title-white-left banner-title">Ofertas que valem a pena.</h2>
                                <p className="banner-description-white-left banner-description">Encontre seus produtos favoritos com preços especiais por tempo limitado.</p>
                                <a href="#" className="banner-button-black-left banner-button flex justify-center items-center">Aproveitar ofertas</a>
                            </div>
                        </div>
                    </div>

                    <div className="banner-slide">
                        <img src="/assets/images/banners/banner-3.png" alt="" />
                        <div className="banner-overlay">
                            <div className="banner-content-right flex flex-column gap-5">
                                <h2 className="banner-title-white-right banner-title">Receba seu pedido com facilidade.</h2>
                                <p className="banner-description-white-right banner-description">Frete grátis acima de R$199 e condições especiais para você comprar com tranquilidade.</p>
                                <a href="#" className="banner-button-black-right banner-button flex justify-center items-center">Compre agora</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-indicators flex">
                    <button className="indicator active" type="button" aria-label="Banner 1"></button>
                    <button className="indicator" type="button" aria-label="Banner 2"></button>
                    <button className="indicator" type="button" aria-label="Banner 3"></button>
                </div>
            </div>
        </section>
    );
}

export default Banner;