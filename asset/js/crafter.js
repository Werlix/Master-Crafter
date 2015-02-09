$(document).ready(function () {
    $('.startGame').click(startGame);
    startGame();
    
    // Draggable elements
    $('.item').draggable({
        opacity: 0.7,
        helper: "clone"
    });
});

function startGame() {
    $('#titlePage').hide();
    $('#game').show();
}