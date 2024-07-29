import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PanelComponent: React.FC = () => {
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const panels = panelsRef.current;

    // Create ScrollTrigger instances for each panel to track their positions
    const tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

    // Pin each panel
    panels.forEach(panel => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false
      });
    });

    // Setup snapping
    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          const panelStarts = tops.map(st => st.start as number); // Ensure type compatibility
          const snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5,
        delay: 0.1, // Adding a slight delay to improve the snapping effect
        ease: "power1.inOut" // Adding an easing function for a smoother snapping effect
      }
    });

    // Cleanup function to remove ScrollTriggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="panel" ref={el => { if (el) panelsRef.current[0] = el }}>Panel 1</div>
      <div className="panel black" ref={el => { if (el) panelsRef.current[1] = el }}>Panel 2</div>
      <div className="panel" ref={el => { if (el) panelsRef.current[2] = el }}>Panel 3</div>
      {/* Add more panels as needed */}
    </div>
  );
};

export default PanelComponent;
