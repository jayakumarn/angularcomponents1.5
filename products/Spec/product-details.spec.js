
describe("The Prodcut details component", function () {

    beforeEach(module("productsLists"));
    
    var product;
    beforeEach(inject(function ($componentController) {
        productDetails = $componentController("productDetails",{
           $scope: {}
        });
    }));

    it("can be created", function () {
        expect(productDetails).toBeDefined();
        expect(productDetails.$onInit).toBeDefined();
    });

    it('Add the result property tp saved array', function () {
     productDetails.products={};
     productDetails.products.results=[];
     productDetails.products.saved=[];
     result={};
     result.id=1;
     result.price=1;
     result.mainImage="..\temp\tempmage.png";
     productDetails.products.results.push(result);
     productDetails.setBinding(result,"Results");
     expect(productDetails.products.saved.length).toBeGreaterThan(0);
     expect(productDetails.products.results.length).toEqual(0);
    });


  it('Add the saved property to results  array', function () {
     productDetails.products={};
     productDetails.products.results=[];
     productDetails.products.saved=[];
     saved={};
     saved.id=1;
     saved.price=1;
     saved.mainImage="..\temp\tempmage2.png";
     productDetails.products.saved.push(saved);
     productDetails.setBinding(saved,"Saved");
     expect(productDetails.products.results.length).toBeGreaterThan(0);
     expect(productDetails.products.saved.length).toEqual(0);
    });

  
  
});