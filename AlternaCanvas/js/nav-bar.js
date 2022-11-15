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
        <a class="nav-button" onclick="openNav()">
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
          <a class="classes-nav-link" href="/html/user-interface/class1.html"
            >User Interface</a
          >
          <a class="classes-nav-link" href="/html/senior-design/class2.html"
            >Senior Design</a
          >
          <a class="classes-nav-link" href="/html/computer-graphics/class3.html"
            >Computer Graphics</a
          >
        </div>
      </div>
    `;
  }
}

// Open and close functions for the class sidenav
// Set the width of the side navigation to 250px
function openNav() {
  document.getElementById("classesNav").style.width = "250px";
}

// Set the width of the side navigation to 0
function closeNav() {
  document.getElementById("classesNav").style.width = "0";
}

customElements.define("nav-bar", NavBar);
