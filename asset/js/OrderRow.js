function OrderRow() {
    var self = this;
    
    this.orders = [];
    this.timer = setInterval(function() { self.tick() }, 1000);
    
    this.addOrder = function(order) {
        self.orders.push(order);
    };
    
    this.tick = function() {
        for (var i in self.orders) {
            var order = self.orders[i];
            order.tickDown();
        }
    };
}