export function logViewportDimensions() {

   if (typeof window !== 'undefined') {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ratio = width / height;

  console.log(`Viewport width: ${width}px`);
  console.log(`Viewport height: ${height}px`);
  console.log(`Viewport ratio: ${ratio.toFixed(2)}`);
}

// Initial log
logViewportDimensions();

// Log on window resize
window.addEventListener('resize', logViewportDimensions);

}

