/**
 * Created by Nikita on 03.12.2014.
 */

(function () {
    var app = angular.module('gemStore', []);


    var gems = [{
        name: 'Dodecahedron',
        price: 10.00,
        description: '...',
        canPurchase: true,
        soldOut: false
    },
        {
            name: 'Dodecahedron Two',
            price: 20.00,
            description: '...2',
            canPurchase: true,
            soldOut: false
        }
    ];

    app.controller('StoreController', function () {
        this.products = gems;
    });

})();
