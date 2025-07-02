function easeScroll(el: HTMLElement) {
   const top = el.getBoundingClientRect().top + window.scrollY;
   const start = window.scrollY;
   const distance = top - start;
   const duration = 2500;
   let startTime: number | null = null;

   function animateScroll(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(progress));
      if (progress < 1) {
         requestAnimationFrame(animateScroll);
      }
   }

   function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
   }

   requestAnimationFrame(animateScroll);
}

export default easeScroll;
