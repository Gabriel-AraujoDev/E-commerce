import { useEffect, useRef, useState } from "react";
import CreateBanner from "../banner/create-banner";

function useMobile() {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 700px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");

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
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const sliderRef = useRef(null);
    const touchStartRef = useRef(null);
    const didSwipeRef = useRef(false);

    const banners = [
        {
            id: 1,
            url: "/assets/images/banners/banner-1.png",
            link: "/produtos",
            alt: "Tudo que você precisa em um só lugar. Qualidade, variedade e preços para o seu dia a dia. Compre já!",
            mobile: isMobile ? "/assets/images/banners/mobile/banner-1.png" : null
        },
        {
            id: 2,
            url: "/assets/images/banners/banner-2.png",
            link: "/promocoes",
            alt: "Ofertas imperdíveis! Não perca as melhores promoções da semana. Compre agora!",
            mobile: isMobile ? "/assets/images/banners/mobile/banner-2.png" : null
        },
        {
            id: 3,
            url: "/assets/images/banners/banner-3.png",
            link: "/novidades",
            alt: "Novidades chegaram! Confira nossos últimos produtos e descubra o que há de novo.",
            mobile: isMobile ? "/assets/images/banners/mobile/banner-3.png" : null
        }
    ]

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: 0
        });

        observer.observe(slider);

        return () => {
            observer.disconnect();
        };
    }, []);

     useEffect(() => {
        if (!isVisible || banners.length < 2) return;

        const timer = window.setTimeout(() => {
            setActiveIndex((current) => (
                (current + 1) % banners.length
            ));
        }, 10000);

        return () => {
            window.clearTimeout(timer);
        };
    }, [activeIndex, isVisible]);

    useEffect(() => {
        if (banners.length < 2) return;

        const timer = setTimeout(() => {
            setActiveIndex(current => (current + 1) % banners.length);
        }, 10000);

        return () => clearTimeout(timer);
    }, [activeIndex, banners.length]);

    function handleTouchStart(event) {
        if (!isMobile) return;

        const touch = event.changedTouches[0];

        touchStartRef.current = {
            x: touch.clientX,
            y: touch.clientY
        };
    }

    function handleTouchEnd(event) {
        if (!isMobile || !touchStartRef.current) return;

        const start = touchStartRef.current;
        const touch = event.changedTouches[0];

        touchStartRef.current = null;

        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;

        // Ignora movimentos pequenos ou predominantemente verticais

        if (
            Math.abs(deltaX) < 50 ||
            Math.abs(deltaX) <= Math.abs(deltaY)
        ) {
            return;
        }

        didSwipeRef.current = true;

        setActiveIndex((current) => {
            const direction = deltaX < 0 ? 1 : -1;

            return (
                (current + direction + banners.length) %
                banners.length
            );
        });

        // Evita que o clique gerado pelo swipe abra o link

        window.setTimeout(() => {
            didSwipeRef.current = false;
        }, 500);
    }

    function handleClickCapture(event) {
        if (!didSwipeRef.current) return;

        event.preventDefault();
        event.stopPropagation();

        didSwipeRef.current = false;
    }

    function handleIndicatorClick(index) {
        setActiveIndex(index);
    }
    
    return (
        <div className="banner">
            <div className="banner-slider" ref={sliderRef}>
                <div
                    className="banner-track"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={() => {
                        touchStartRef.current = null;
                    }}
                    onClickCapture={handleClickCapture}
                >
                    {banners.map((banner) => (
                        <CreateBanner
                            key={banner.id}
                            banner={banner}
                            isMobile={isMobile}
                        />
                    ))}
                </div>

                <div className="banner-indicators flex">
                    {banners.map((banner, index) => (
                        <button
                            key={banner.id}
                            className={`indicator ${activeIndex === index ? "active" : ""}`}
                            type="button"
                            aria-label={`Banner ${index + 1}`}
                            aria-pressed={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;