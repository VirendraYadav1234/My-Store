// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
    routes: [{
        method: "GET",
        path: "/orders/customOrder",
        handler: "order.customOrderController",
    }, ],
};