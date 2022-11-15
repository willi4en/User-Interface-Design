class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <a class="red-background" href="/html/dashboard.html"
          ><img src="/images/navlogo.png"
        /></a>
        <a class="nav-button" href="/html/dashboard.html">
          <img class="nav-icon" src="/images/speedometer.png" />
          <div class="nav-title">Dashboard</div>
        </a>
        <a class="nav-button" onclick="toggleNav()">
          <img class="nav-icon" src="/images/courses.png" />
          <div class="nav-title">Courses</div>
        </a>
        <a class="nav-button" href="/html/calendar.html">
          <img class="nav-icon" src="/images/calendar.png" />
          <div class="nav-title">Calendar</div>
        </a>
      </nav>

      <!--This is the slide out menu for the classes-->
      <div id="classesNav" class="classes-nav">
        <div class="classes-nav-header">
          <h2 class="classes-nav-title">Courses</h2>
          <a href="javascript:void(0)" class="close-btn" onclick="closeNav()"
            >&times;</a
          >
        </div>
        <div class="classes-nav-links">
          <a class="classes-nav-link" href="/html/user-interface/class-home.html"
            >(22FS-Full) USER INTERFACE</a
          >
          <a class="classes-nav-link" href="/html/senior-design/class-home.html"
            >(22FS-Full) SENIOR DESIGN</a
          >
          <a class="classes-nav-link" href="/html/computer-graphics/class-home.html"
            >(22FS-Full) COMPUTER GRAPHICS</a
          >
        </div>
      </div>
    `;
  }
}

var isNavBarClosed = true;

function toggleNav() {
  if (isNavBarClosed) {
    isNavBarClosed = false;
    document.getElementById("classesNav").style.width = "364px";
  } else {
    isNavBarClosed = true;
    document.getElementById("classesNav").style.width = "0";
  }
}

function closeNav() {
  isNavBarClosed = true;
  document.getElementById("classesNav").style.width = "0";
}

customElements.define("nav-bar", NavBar);
