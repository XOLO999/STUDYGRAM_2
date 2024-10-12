function showTemplate(template) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector(`.${template}`).style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    showTemplate('template1');
});
function showTemplate(template) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector(`.${template}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showTemplate('template1');
});

function searchNotes() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const notes = document.querySelectorAll('#noteList li');
    notes.forEach(note => {
        const text = note.textContent.toLowerCase();
        if (text.includes(input)) {
            note.style.display = '';
        } else {
            note.style.display = 'none';
        }
    });
}
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function showTemplate(template) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('show');
    });
    document.querySelector(`.${template}`).classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
    showTemplate('template1');
});

function searchNotes() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const
      // Voice Command Activation
function startVoiceCommands() {
    // Initialize voice recognition...
    alert("Voice commands activated! Say 'Upload', 'Dashboard' or 'Forum'.");
}

// Real-Time Updates
setInterval(() => {
    document.getElementById('new-notes-count').textContent = Math.floor(Math.random() * 10 + 1);
    document.getElementById('users-online').textContent = Math.floor(Math.random() * 20 + 5);
}, 5000);

// 3D Model Initialization (using Three.js or similar)
function init3DModels() {
    // Set up 3D canvas and render models...
}
  // Voice Command Activation
function startVoiceCommands() {
    // Initialize voice recognition...
    alert("Voice commands activated! Say 'Upload', 'Dashboard' or 'Forum'.");
}

// Real-Time Updates
setInterval(() => {
    document.getElementById('new-notes-count').textContent = Math.floor(Math.random() * 10 + 1);
    document.getElementById('users-online').textContent = Math.floor(Math.random() * 20 + 5);
}, 5000);

// 3D Model Initialization (using Three.js or similar)
function init3DModels() {
    // Set up 3D canvas and render models...
}
  // Voice Command Activation
function startVoiceCommands() {
    alert("Voice commands activated! Say 'Upload', 'Dashboard', or 'Forum'.");
}

// Real-Time Updates Simulation
setInterval(() => {
    document.getElementById('newNotesCount').textContent = Math.floor(Math.random() * 10 + 1);
    document.getElementById('usersOnline').textContent = Math.floor(Math.random() * 20 + 5);
}, 5000);

// Toggle Themes
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Dynamic Navigation
function navigate(section) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}
  // User Authentication
document.getElementById('authForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Logging in...");
    // Add actual login logic here (e.g., API call)
});

// Display Chart.js Analytics
const ctx = document.getElementById('analyticsChart').getContext('2d');
const analyticsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Notes Uploaded',
            data: [12, 19, 15, 25],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to Show Signup
function showSignup() {
    alert("Show signup form here...");
}
