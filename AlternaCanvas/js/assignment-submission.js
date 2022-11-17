
window.onload = function() {
    assignment = document.getElementById('assignmentDesc');    
    dueDate = document.getElementById('due-date');
    points = document.getElementById('total-points');
    assignmentName = document.getElementById('assignment-name');

    assignment.src = localStorage.getItem('desc');
    dueDate.innerHTML = localStorage.getItem('dueDate');
    assignmentName.innerHTML = localStorage.getItem('name');
    points.innerHTML = localStorage.getItem('points');
}

function assignmentClick(link, name, dueDate, points) {
    localStorage.setItem('desc', link);
    localStorage.setItem('name', name);
    localStorage.setItem('dueDate', dueDate);
    localStorage.setItem('points', points);
    
}