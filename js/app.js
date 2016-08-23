/**
 * Created by hxsd on 2016/8/4.
 */
//创建一个主模块
var myapp = angular.module("myapp", ["ionic","mycart"]);
//配置路由
myapp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tabs", {
        url: "/tabs",
        abstract: true,
        templateUrl: "views/tabs/tabs.html"
    });
    $stateProvider.state("tabs.home", {
        url: "/home",
        views: {
            "tab_home": {
                templateUrl: "views/home/home.html",
                controller: "homeCtrl"
            }
        }
    });
    $stateProvider.state("tabs.myFruit", {
        url: "/myFruit",
        views: {
            "tab_myFruit": {
                templateUrl: "views/myFruit/myFruit.html",
                controller: "myFruitCtrl"
            }
        }
    });
    $stateProvider.state("tabs.buyCar", {
        url: "/buyCar",
        views: {
            "tab_buyCar": {
                templateUrl: "views/buyCar/buyCar.html",
                controller: "buycarCtrl"
            }
        }
    });
    $stateProvider.state("tabs.sort", {
        url: "/sort",
        views: {
            "tab_sort": {
                templateUrl: "views/sort/sort.html",
                controller: "sortCtrl"
            }
        }
    });
    $stateProvider.state("giftBox", {
        url: "/giftBox",
        templateUrl: "views/giftBox/giftBox.html",
        controller: "giftBoxCtrl"
    });
    $stateProvider.state("freshFruit", {
        url: "/freshFruit",
        templateUrl: "views/freshFruit/freshFruit.html",
        controller: "freshFruitCtrl"

    });
    $stateProvider.state("login", {
        url: "/login",
        templateUrl: "views/login/login.html",

    });
    $urlRouterProvider.otherwise("/tabs/home")
});

