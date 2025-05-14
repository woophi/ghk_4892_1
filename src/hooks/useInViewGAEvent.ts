import { IntersectionArgs, useInView } from '@react-spring/web';
import { useEffect, useRef } from 'react';

export const useInViewGAEvent = (
  eventName: string,
  opts: IntersectionArgs = {
    amount: [0.9, 0.9, 0.9, 0.9],
  },
) => {
  const [ref, inView] = useInView(opts);
  const sentEvent = useRef(false);

  useEffect(() => {
    if (inView && !sentEvent.current) {
      console.debug('inView', eventName);
      sentEvent.current = true;
      window.gtag('event', eventName);
    }
  }, [inView, sentEvent]);

  return {
    itemRef: ref,
    inView,
  };
};
