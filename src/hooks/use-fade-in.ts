import React, { useRef, useEffect } from 'react';

export function useFadeIn() {
    const domRef = useRef<HTMLElement>(null);

    const [isVisible, setVisible] = React.useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current as HTMLElement);
            }
        });

        observer.observe(domRef.current as HTMLElement);

        return () => {
            observer.unobserve(domRef.current as HTMLElement);
        };
    }, []);

    return {
        domRef,
        isVisible,
    };
}
