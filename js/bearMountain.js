function calculatePurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity").value;
    var originalPrice = 40000; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.5 * nuggetQuantity; // 50% of the original price multiplied by the quantity
    document.getElementById("totalAmount").textContent = "$" + purchasePrice.toFixed(2);
}




