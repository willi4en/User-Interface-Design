class QuickCalendar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="calendar">
            <div class="calendar-day">S</div>
            <div class="calendar-day">M</div>
            <div class="calendar-day">T</div>
            <div class="calendar-day">W</div>
            <div class="calendar-day">T</div>
            <div class="calendar-day">F</div>
            <div class="calendar-day">S</div>
            <div class="calendar-number calendar-prev">25</div>
            <div class="calendar-number calendar-prev">26</div>
            <div class="calendar-number calendar-prev">27</div>
            <div class="calendar-number calendar-prev">28</div>
            <div class="calendar-number calendar-prev">29</div>
            <div class="calendar-number calendar-prev">30</div>
            <div class="calendar-number">1</div>
            <div class="calendar-number">2</div>
            <div class="calendar-number">3</div>
            <div class="calendar-number">4</div>
            <div class="calendar-number">5</div>
            <div class="calendar-number">6</div>
            <div class="calendar-number">7</div>
            <div class="calendar-number">8</div>
            <div class="calendar-number">9</div>
            <div class="calendar-number">10</div>
            <div class="calendar-number">11</div>
            <div class="calendar-number">12</div>
            <div class="calendar-number current-day">13</div>
            <div class="calendar-number">14</div>
            <div class="calendar-number">15</div>
            <div class="calendar-number">16</div>
            <div class="calendar-number">17</div>
            <div class="calendar-number">18</div>
            <div class="calendar-number">19</div>
            <div class="calendar-number">20</div>
            <div class="calendar-number">21</div>
            <div class="calendar-number">22</div>
            <div class="calendar-number">23</div>
            <div class="calendar-number">24</div>
            <div class="calendar-number">25</div>
            <div class="calendar-number">26</div>
            <div class="calendar-number">27</div>
            <div class="calendar-number">28</div>
            <div class="calendar-number">29</div>
            <div class="calendar-number">30</div>
            <div class="calendar-number">31</div>
            <div class="calendar-number calendar-next">1</div>
            <div class="calendar-number calendar-next">2</div>
            <div class="calendar-number calendar-next">3</div>
            <div class="calendar-number calendar-next">4</div>
            <div class="calendar-number calendar-next">5</div>
        </div>
      `;
  }
}

customElements.define("quick-calendar", QuickCalendar);
