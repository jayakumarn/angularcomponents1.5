(function(){
"use strict";
var module=angular.module("productsLists");

function fetchProducts($http) { 

        return $http.get("/products.json")
                    .then(function(response) {
                        return response.data;
                    });
    }
function productListController($http)
{
   
    var model=this;
    model.products = [];
    model.products.results=[];
    model.products.saved=[];
  
    
    model.fetchData=function()
    {
       
        fetchProducts($http).then(function(data) {
                model.products = data;
                   
            });

    }

   model.$onInit = function() {
          
            fetchProducts($http).then(function(data) {
                model.products = data; 
                  
            });
        };
}

module.component("productList",{    
 templateUrl:"/products/product-list.component.html",
 controller:["$http",productListController],
 controllerAs:"productVM"
});
}());