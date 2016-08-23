/**
 * Created by hxsd on 2016/8/5.
 */
/**
 * Created by hxsd on 2016/8/5.
 */
angular.module("myapp")
    .constant("productsUrl","data/products.json")
    .controller("freshFruitCtrl", function ($scope,shopCart,$http,productsUrl) {
        $scope.products = {};
        $http.get(productsUrl).success(function(data){
            $scope.products = data;
        });
        // 添加购物车的响应函数
        $scope.addToCart = function(product){
            shopCart.add(product);// 将商品加入购物车
        };
        //下拉刷新
        $scope.refresh = function(){
            $http.get(productsUrl).success(function(data){
                $scope.products = data;
            }).finally(function(){
                $scope.$broadcast("scroll.refreshComplete");
            })
        };
        //无限滚动
        $scope.loadMore = function(){
            $http.get("data/iconItem.json").success(function(data){
                Array.prototype.push.apply($scope.products,data);

            }).finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            })
        };
    });