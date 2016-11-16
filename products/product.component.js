(function(){
    "use strict";

var module=angular.module("productsLists");

function productController()
{
var model=this;
model.product=model.item;
model.hoverEdit=false;
model.$onInit=function()
{
    model.product=model.item;
    model.productType=model.type;
};


model.$onChanges = function(changesObj) {         
             if (changesObj.data) {  
                model.lists=model.items;
                model.productType=model.type;               
             }
};

 model.hoverIn = function(id){      
     if(id==model.product.id)              
         model.hoverEdit = true;
 };

 model.hoverOut = function(id){           
            if(id==model.product.id)              
         model.hoverEdit = false;
 };

}
module.component("product",{
    templateUrl:"/products/product.component.html",
    bindings:{
        item:"<",
        type:"<",
        setBinding:"&"
    },
    controller:productController,
    controllerAs:"model"

})
}());