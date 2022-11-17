
window.onload = function() {
    assignment = document.getElementById('assignmentDesc');    
    dueDate = document.getElementById('due-date');
    points = document.getElementById('total-points');
    assignmentName = document.getElementById('assignment-name');

    assignment.src = localStorage.getItem('desc');
    dueDate.innerText = localStorage.getItem('dueDate');
    assignmentName.innerText = localStorage.getItem('name');
    points.innerText = localStorage.getItem('points');
}

function assignmentClick(link, name, dueDate, points) {
    localStorage.setItem('desc', link);
    localStorage.setItem('name', name);
    localStorage.setItem('dueDate', dueDate);
    localStorage.setItem('points', points);
    
}

function submitClick() {
    
}

function exitSubmission() {
    modal = document.getElementById('submissionDiv');
    modal.display = 'none';
}

function doneClick() {
    modal = document.getElementById('submissionDiv');
    modal.display = 'none';

    
}