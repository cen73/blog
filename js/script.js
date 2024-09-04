document.addEventListener("DOMContentLoaded", function () {
  let isScrolling;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling);

    // 记录最后的滚动位置
    lastScrollTop = window.scrollY;

    isScrolling = setTimeout(function () {
      applyGlobalDamping(lastScrollTop);
    }, 66);
  });

  function applyGlobalDamping(scrollTop) {
    let scrollSpeed = scrollTop;
    const dampingFactor = 0.95; // 阻尼系数，越小阻尼越强

    function animate() {
      if (Math.abs(scrollSpeed) < 1) return;

      scrollSpeed *= dampingFactor;
      window.scrollTo(0, scrollTop - scrollSpeed);
      requestAnimationFrame(animate);
    }

    animate();
  }
});
