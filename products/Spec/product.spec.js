
describe("The Prodcut component", function () {

    beforeEach(module("productsLists"));
    
    var product;
    beforeEach(inject(function ($componentController) {
        product = $componentController("product",{
           $scope: {}
        });
    }));

    it("can be created", function () {
        expect(product).toBeDefined();
        expect(product.$onInit).toBeDefined();
    });

    it('Button should be visible when hover', function () {
     product.product={};
     product.product.id=1;
     product.hoverIn(1);
     expect(product.hoverEdit).toBe(true)
    });

    it('Button should not be visible when hover', function () {
     product.product={};
     product.product.id=2;
     product.hoverIn(1);
     expect(product.hoverEdit).toBe(false)
    });
});