var orderRow;

$(document).ready(function () {
    $('.startGame').click(startGame);
    startGame();
    
    // Draggable elements
    $('.item').draggable({
        opacity: 0.7,
        helper: "clone",
        zIndex: 500,
        start: function() {
            $(this).parent('div').css('z-index', '500');
        }
    });
    
    orderRow = new OrderRow();
    
    var order = new Order({wood: 2, iron: 1}, 250, 1);
    orderRow.addOrder(order);
});

function startGame() {
    $('#titlePage').hide();
    $('#game').show();
}