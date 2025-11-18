/**
 * Production-Ready Loading Screen Component
 * Features:
 * - Full-screen black overlay
 * - Image preloading with real progress
 * - Fake smooth loader with easing (if no assets)
 * - GSAP-powered marquee animation
 * - Progress bar with mix-blend-mode text
 * - Smooth exit animations
 */

class LoadingScreen {
  constructor(options = {}) {
    this.onLoadingComplete = options.onLoadingComplete || (() => {});
    this.assetUrls = options.assetUrls || [];
    this.progress = 0;
    this.isComplete = false;
    
    // Animation properties
    this.marqueeTimeline = null;
    this.exitTimeline = null;
    
    // Fake loader properties
    this.fakeLoaderStart = null;
    this.fakeLoaderDuration = 2500; // 2.5 seconds to reach 100%
    this.fakeLoaderRAF = null;
    
    // Elements
    this.loader = null;
    this.progressFill = null;
    this.progressText = null;
    this.marqueeContainer = null;
    this.marqueeText = null;
    
    this.init();
  }
  
  /**
   * Initialize the loading screen
   */
  init() {
    this.createDOM();
    this.setupMarquee();
    
    if (this.assetUrls.length > 0) {
      this.preloadAssets();
    } else {
      this.startFakeLoader();
    }
  }
  
  /**
   * Create the DOM structure
   */
  createDOM() {
    // Main loader container
    this.loader = document.createElement('div');
    this.loader.className = 'loading-screen';
    this.loader.innerHTML = `
      <div class="loading-marquee-container">
        <div class="loading-marquee-text">
          HARSH હર્ષ · हर्ष · ஹர்ஷ் · হর্ষ · HARSH હર્ષ · हर्ष · ஹர்ஷ் · হর্ষ · HARSH હર્ષ · हर्ष · ஹர்ஷ் · হর্ষ · HARSH હર્ષ · हर्ष · ஹர்ஷ் · হর্ষ ·
        </div>
      </div>
      
      <div class="loading-progress-container">
        <div class="loading-progress-fill"></div>
        <div class="loading-progress-text">0%</div>
      </div>
    `;
    
    document.body.appendChild(this.loader);
    
    // Cache element references
    this.progressFill = this.loader.querySelector('.loading-progress-fill');
    this.progressText = this.loader.querySelector('.loading-progress-text');
    this.marqueeContainer = this.loader.querySelector('.loading-marquee-container');
    this.marqueeText = this.loader.querySelector('.loading-marquee-text');
  }
  
  /**
   * Setup GSAP marquee animation
   */
  setupMarquee() {
    // Calculate the width of the text
    const textWidth = this.marqueeText.offsetWidth;
    
    // Create infinite horizontal scroll
    this.marqueeTimeline = gsap.timeline({ repeat: -1 });
    
    // Duplicate the text for seamless loop
    const originalHTML = this.marqueeText.innerHTML;
    this.marqueeText.innerHTML = originalHTML + originalHTML;
    
    // Animate from right to left
    this.marqueeTimeline.to(this.marqueeText, {
      x: -textWidth,
      duration: 40,
      ease: 'none'
    });
  }
  
  /**
   * Preload images with real progress tracking
   */
  preloadAssets() {
    let loadedCount = 0;
    const totalAssets = this.assetUrls.length;
    
    const updateProgress = () => {
      loadedCount++;
      this.progress = (loadedCount / totalAssets) * 100;
      this.updateProgressBar();
      
      if (loadedCount === totalAssets) {
        this.completeLoading();
      }
    };
    
    this.assetUrls.forEach(url => {
      const img = new Image();
      
      img.onload = updateProgress;
      img.onerror = updateProgress; // Still count errors as progress
      
      img.src = url;
    });
  }
  
  /**
   * Start fake loader with smooth easing
   */
  startFakeLoader() {
    this.fakeLoaderStart = performance.now();
    this.animateFakeLoader();
  }
  
  /**
   * Animate fake loader using RAF with easing
   */
  animateFakeLoader() {
    const now = performance.now();
    const elapsed = now - this.fakeLoaderStart;
    const rawProgress = Math.min(elapsed / this.fakeLoaderDuration, 1);
    
    // Ease-out-cubic easing function
    const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
    
    this.progress = easedProgress * 100;
    this.updateProgressBar();
    
    if (rawProgress < 1) {
      this.fakeLoaderRAF = requestAnimationFrame(() => this.animateFakeLoader());
    } else {
      this.completeLoading();
    }
  }
  
  /**
   * Update progress bar with GSAP smooth animation
   */
  updateProgressBar() {
    // Animate the fill width
    gsap.to(this.progressFill, {
      width: `${this.progress}%`,
      duration: 0.5,
      ease: 'power2.out'
    });
    
    // Update text
    this.progressText.textContent = `${Math.round(this.progress)}%`;
  }
  
  /**
   * Complete loading and trigger exit animation
   */
  completeLoading() {
    if (this.isComplete) return;
    this.isComplete = true;
    
    // Clean up fake loader RAF if running
    if (this.fakeLoaderRAF) {
      cancelAnimationFrame(this.fakeLoaderRAF);
    }
    
    // Wait a bit then exit
    setTimeout(() => {
      this.exitAnimation();
    }, 800);
  }
  
  /**
   * Exit animation sequence
   */
  exitAnimation() {
    this.exitTimeline = gsap.timeline({
      onComplete: () => {
        this.cleanup();
        this.onLoadingComplete();
      }
    });
    
    // Create smooth exit sequence
    this.exitTimeline
      .add('start')
      .to(this.loader.querySelector('.loading-progress-container'), {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.in'
      }, 'start+=0.1')
      .to(this.marqueeContainer, {
        y: -100,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.in'
      }, 'start+=0.2')
      .to(this.loader, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      }, 'start+=0.4');
  }
  
  /**
   * Cleanup: remove DOM and kill animations
   */
  cleanup() {
    // Kill all GSAP animations
    if (this.marqueeTimeline) {
      this.marqueeTimeline.kill();
    }
    if (this.exitTimeline) {
      this.exitTimeline.kill();
    }
    
    // Remove from DOM
    if (this.loader && this.loader.parentNode) {
      this.loader.parentNode.removeChild(this.loader);
    }
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LoadingScreen;
}
