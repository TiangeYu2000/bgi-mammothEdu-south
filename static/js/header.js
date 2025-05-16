document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".navbar__menu-item-dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      const submenu = this.querySelector(".navbar__submenu");
      const submenuRect = submenu.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (submenuRect.bottom > viewportHeight) {
        submenu.style.top = "auto";
        submenu.style.bottom = "100%";
      } else {
        submenu.style.top = "100%";
        submenu.style.bottom = "auto";
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      const submenu = this.querySelector(".navbar__submenu");
      submenu.style.top = "100%";
      submenu.style.bottom = "auto";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const headerHeight = document.querySelector('header').offsetHeight; // Get the header height

  // Scroll to adjust for header height on hash change (link clicks)
  window.addEventListener('hashchange', function () {
    scrollBy(0, -headerHeight); // Scroll up by the header height
  });

  // Scroll to adjust for header height on page load (with hash in URL)
  if (window.location.hash) {
    setTimeout(function () {
      scrollBy(0, -headerHeight); // Adjust for header height after the page loads
    }, 10);
  }
});

document.querySelectorAll('.toc a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target element
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Get header height
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Smooth scroll to the adjusted position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
