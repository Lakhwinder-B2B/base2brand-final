import { useState, useCallback, useEffect } from 'react';
import FooterDesktop from './footer-desktop';
import FooterMobile from './footer-mobile';
import FooterMobileMenu from './moblile-footer-menu';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
const Footer = () => {
   const isBreakpoint = useMediaQuery(600)
   return (
    <div>
        { isBreakpoint ? (
            <div>
                <FooterMobile />
                <FooterMobileMenu />
            </div>
        ) : (
            <div>
                <FooterDesktop />
            </div>
        )}
    </div>
    )}

    export default Footer;