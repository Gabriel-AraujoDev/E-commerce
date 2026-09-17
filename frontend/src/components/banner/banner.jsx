import React, { useEffect } from "react";

function Banner() {
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

        setupIndicatorEvents();
        setupVisibilityObserver();
        autoChangeBanner();

    }, []); 

    return (
        <section className="banner" aria-label="Banner promocional">
            <div className="banner-slider">
                <div className="banner-track flex">
                    <div className="banner-slide">
                        <img src="/assets/images/banners/banner-1.png" fetchPriority="high" alt="" />
                        <div className="banner-overlay">
                            <div className="banner-content flex flex-column gap-5">
                                <h2 className="banner-title-black-left">Tudo que você precisa, em um só lugar.</h2>
                                <p className="banner-description-black-left">Qualidade, variedade e os melhores preços para o seu dia a dia.</p>
                                <a href="#" className="banner-button-black-left flex justify-center items-center">Compre agora</a>
                            </div>
                        </div>
                    </div>

                    <div className="banner-slide">
                        <img src="/assets/images/banners/banner-2.png" alt="" />
                        <div className="banner-overlay">
                            <div className="banner-content flex flex-column gap-5">
                                <h2 className="banner-title-white-left">Ofertas que valem a pena.</h2>
                                <p className="banner-description-white-left">Encontre seus produtos favoritos com preços especiais por tempo limitado.</p>
                                <a href="#" className="banner-button-black-left flex justify-center items-center">Aproveitar ofertas</a>
                            </div>
                        </div>
                    </div>

                    <div className="banner-slide">
                        <img src="/assets/images/banners/banner-3.png" alt="" />
                        <div className="banner-overlay">
                            <div className="banner-content-right flex flex-column gap-5">
                                <h2 className="banner-title-white-right">Receba seu pedido com facilidade.</h2>
                                <p className="banner-description-white-right">Frete grátis acima de R$199 e condições especiais para você comprar com tranquilidade.</p>
                                <a href="#" className="banner-button-black-right flex justify-center items-center">Compre agora</a>
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