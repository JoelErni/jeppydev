let board = document.querySelector('.board');

// Fülle das Brett mit 21x21 Zellen, da wir die Randzellen auch mit einbeziehen
for (let i = 0; i < 441; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
}

function fillSpace(event) {
    if (event.target.classList.contains('cell')) {
        event.target.classList.add('filled');
    }
}

function resetBoard() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('filled');
    });
}