// Unused Directive

var modules = angular.module('productsLists', []);
modules.directive('showonhoverbutton',
   function() {
      return {
         link : function(scope, element, attrs) {
            element.parent().bind('mouseenter', function() {
                element.show();
                console.log("mouse enter");
            });
            element.parent().bind('mouseleave', function() {
                console.log("mouse leave");
                 element.hide();
            });
       }
   };
});