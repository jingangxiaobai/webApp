
angular.module("myapp").controller("buycarCtrl",function($scope,shopCart){
    $scope.cartData = shopCart.findAll();   // 拿到购物车中的购物筐数组

    // 计算购物车中所有商品的总金额
    $scope.totalMon = function(){
        var total = 0;

        for(var i=0;i<$scope.cartData.length;i++){
            total += $scope.cartData[i].product.price * $scope.cartData[i].number;
        }

        return total;
    };
    // 计算购物车中所有商品的总数量
    $scope.totalNum = function(){
        var total = 0;
        for(var i=0;i<$scope.cartData.length;i++){
            total +=  $scope.cartData[i].number;
        }
        return total;
    };

    // 从购物车中删除指定商品
    $scope.removeFromCart = function(item){
        shopCart.remove(item.product.name); // 根据商品名称从购物车中删除
    };
    $scope.numberReduce = function(item){
        shopCart.numberReduce(item.product.name); // 根据商品名称从购物车中删除
    };
    $scope.numberAdd = function(item){
        shopCart.numberAdd(item.product.name); // 根据商品名称从购物车中删除
    };
});