(function() {
    "use strict";

    var module = angular.module("productsLists");


    function controller($http) {

        var model = this;
        model.products = [];

        model.$onInit = function() {                
           model.products=model.data;
        };


         model.setBinding=function(product,type){
         if(type==="Results")
         {            
             var index = model.products.results.indexOf(product);
             if (index > -1) {
                model.products.results.splice(index, 1);
             }
             model.products.saved.push(product);
         }
         else
         {
             var index = model.products.saved.indexOf(product);
             if (index > -1) {
                model.products.saved.splice(index, 1);
             }
             model.products.results.push(product);
         }
         };
     

         model.$onChanges = function(changesObj) {          
           if (changesObj.data) {       
        model.products=model.data;           
           }
        }; 

       
    }

    module.component("productDetails", {
        templateUrl: "/products/product-details.component.html",
         bindings: {
            data: "<"        
          
        },
        controllerAs: "model",
        transclude: true, 
        controller: ["$http", controller]       
    });
} ());