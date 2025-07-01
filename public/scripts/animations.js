console.log("📜 Animation script loaded");

// Simple fade-in animation without GSAP
function simpleFadeIn() {
  console.log("🎬 Running simple fade-in animation...");
  
  const fadeElements = document.querySelectorAll('.fade-in');
  console.log(`Found ${fadeElements.length} fade-in elements`);
  
  fadeElements.forEach((element, index) => {
    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    // Animate after delay
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      console.log(`✅ Animated element ${index + 1}`);
    }, 200 + (index * 150)); // 200ms delay + 150ms stagger
  });
}

// Run animation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 DOM loaded, starting animations...");
    simpleFadeIn();
  });
} else {
  console.log("🚀 DOM already loaded, starting animations...");
  simpleFadeIn();
}
