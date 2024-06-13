// components/HorizontalScroll.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from "./VerticalSlideshow.module.css";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.section');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${containerRef.current?.offsetWidth}`,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <section className={`${styles.section} ${styles.red}`}>Red</section>
      <section className={`${styles.section} ${styles.gray}`}>Gray</section>
      <section className={`${styles.section} ${styles.purple}`}>Purple</section>
      <section className={`${styles.section} ${styles.green}`}>Green</section>
    </div>
  );
};

export default HorizontalScroll;
