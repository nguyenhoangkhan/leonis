// <!-- ACTIVE MENU-TOGGLE  -->
(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const rect = menuToggle.getBoundingClientRect();
  const menuToggleX = (rect.right + rect.left) / 2;
  const menuToggleY = (rect.bottom + rect.top) / 2;
  document.querySelector(
    ".header-menu"
  ).style.clipPath = `circle(30px at ${menuToggleX}px ${menuToggleY}px)`;

  menuToggle.onclick = function () {
    document.querySelector(".header-block").classList.toggle("showed-menu");
    document.querySelector(".header-menu").classList.toggle("active");
  };
})();

// < !--HANDLE HEADER WHEN MOVE ON-- >

(function () {
  let doc = document.documentElement;
  let w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;
  let loadScroll = document.documentElement.scrollTop;

  let header = document.getElementById("header");
  let headerInner = header.querySelector(".header-inner");

  if (loadScroll > 144) {
    headerInner.classList.add("hide");
  } else {
    headerInner.classList.remove("hide");
  }

  let checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;

    if (curScroll == 0) {
      headerInner.classList.remove("not-top");
    }
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  let toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 80) {
      headerInner.classList.add("hide");
      headerInner.classList.remove("not-top");
      prevDirection = direction;
    } else if (direction === 1) {
      headerInner.classList.remove("hide");
      headerInner.classList.add("not-top");
      prevDirection = direction;
    }
  };

  window.addEventListener("scroll", checkScroll);
})();

// TOASTR
(() => {
  const linkList = document.querySelectorAll("a");
  // if (!Array.isArray(linkList) || linkList.length === 0) return;
  if (linkList) {
    linkList.forEach((link) => {
      if (link.href.includes("#!")) {
        link.addEventListener("click", () => {
          toastr.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: "toast-top-center",
            preventDuplicates: false,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
            preventDuplicates: true,
          };
          Command: toastr["warning"](
            '<lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_zljxiwze.json" background="transparent" speed="1" style="width: 80px; height: 80px;" loop autoplay></lottie-player><h4>Oh! Something Wrong</h4><p>This link is underconstruction. Please try again another time.</p><button type="button" role="button" class="toast-close-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.0731 5.12388C3.80394 5.12388 3.53564 5.02095 3.33061 4.81592L1.50811 2.99341C1.09805 2.58335 1.09805 1.91848 1.50811 1.50841C1.91817 1.09835 2.58304 1.09835 2.99311 1.50841L4.8156 3.33091C5.22567 3.74097 5.22567 4.40586 4.8156 4.81592C4.61057 5.02095 4.34141 5.12388 4.0731 5.12388Z" fill="#0D0D0D"/><path d="M21.5269 22.5777C21.2577 22.5777 20.9894 22.4747 20.7844 22.2697L6.07952 7.56482C5.66946 7.15476 5.66946 6.48989 6.07952 6.07982C6.48958 5.66976 7.15445 5.66976 7.56452 6.07982L22.2694 20.7847C22.6795 21.1948 22.6795 21.8596 22.2694 22.2697C22.0644 22.4756 21.7961 22.5777 21.5269 22.5777Z" fill="#0D0D0D"/><path d="M2.24999 22.5777C1.98084 22.5777 1.71253 22.4748 1.5075 22.2697C1.09744 21.8597 1.09744 21.1948 1.5075 20.7847L20.7847 1.50756C21.1947 1.0975 21.8596 1.0975 22.2697 1.50756C22.6797 1.91762 22.6797 2.5825 22.2697 2.99257L2.9925 22.2697C2.78831 22.4756 2.51915 22.5777 2.24999 22.5777Z" fill="#0D0D0D"/></svg></button>'
          );
        });
      }
    });
  }
})();
