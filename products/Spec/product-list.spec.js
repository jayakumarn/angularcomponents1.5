describe("The Prodcut list component", function () {

    beforeEach(module("productsLists"));
    
    var productList;
    beforeEach(inject(function ($componentController) {
        productList = $componentController("productList",{
           $scope: {} 
        });
    }));

    it("can be created", function () {
        expect(productList).toBeDefined();
        expect(productList.$onInit).toBeDefined();
    });

});