import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SmoothScrollService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollToAnchor(anchor: string, duration: number = 800): void {
    if (isPlatformBrowser(this.platformId)) {
      const element: HTMLElement | null = document.getElementById(anchor);

      if (element) {
        const elementPosition: number =
          element.getBoundingClientRect().top + window.pageYOffset;
        const startingY: number = window.pageYOffset;
        const targetY: number = elementPosition - 70; // Adjusted for a fixed header, if necessary
        const startTime: number = performance.now();

        const easeInOutQuad = (
          currentTime: number,
          start: number,
          change: number,
          duration: number
        ): number => {
          currentTime /= duration / 2;
          if (currentTime < 1)
            return (change / 2) * currentTime * currentTime + start;
          currentTime--;
          return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
        };

        const animateScroll = (currentTime: number): void => {
          const elapsedTime: number = currentTime - startTime;
          window.scrollTo(
            0,
            easeInOutQuad(elapsedTime, startingY, targetY - startingY, duration)
          );
          if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    }
  }
}
