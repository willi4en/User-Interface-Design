class CourseMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav id="courseMenu" class="course-menu">
          <div class="course-menu-body">
            <a href="./course-home.html">Home</a>
            <a href="./announcements.html">Announcements</a>
            <a href="./assignments.html">Assignments</a>
            <a href="./grades.html">Grades</a>
            <a href="./syllabus.html">Syllabus</a>
            <a href="./modules.html">Modules</a>
            <a href="./zoom.html">Zoom</a>
          </div>
        </nav>
    `;
  }
}

var isCourseMenuOpen = false;

function toggleCourseMenu() {
  if (isCourseMenuOpen) {
    isCourseMenuOpen = false;
    document.getElementById("mainBody").style.marginLeft = "192px";
    document.getElementById("courseMenu").style.width = "192px";
  } else {
    isCourseMenuOpen = true;
    document.getElementById("mainBody").style.marginLeft = "0";
    document.getElementById("courseMenu").style.width = "0";
  }
}

customElements.define("course-menu", CourseMenu);
