function Order(requirements, time, id) {
    /* requirements example : {wood: 2, iron: 1} */
    var maxTime = 300;
    var maxLeftVW = 80;
    
    this.time = time;
    this.requirements = requirements;
    this.id = id;
    
    this.tickDown = function() {
        this.time--;
        if (this.time <= 0) {
            this.expire();
        } else {
            this.redraw();
        }
    };
    
    this.redraw = function() {
        $('#' + this.id).css('left', this.getLeft() + 'vw');
    };
    
    this.expire = function() {
        $('#' + this.id).remove();
    };
    
    this.getLeft = function() {
        return (this.time / maxTime) * maxLeftVW;
    };
    
    this.draw = function() {
        var el = $('<div></div>').attr('id', id).addClass('order').css('left', this.getLeft() + 'vw');
        
        $('#orders').append(el);
    };
    
    this.draw();
}