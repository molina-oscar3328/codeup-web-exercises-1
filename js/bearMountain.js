

// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateDiamondPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity").value;
//     var originalPrice = 50000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateDiamondPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity").value;
    var originalPrice = 50000; // Original price of each set of 10 nuggets
    var setQuantity = Math.floor(nuggetQuantity / 10); // Calculate the number of sets
    var remainingNuggets = nuggetQuantity % 10; // Calculate the remaining individual nuggets
    var purchasePrice = (setQuantity * originalPrice) + (remainingNuggets * (originalPrice / 10)); // Calculate the total purchase price
    document.getElementById("totalAmount").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateCopperPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity2").value;
//     var originalPrice = 50000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount2").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateCopperPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity2").value;
    var originalPrice = 50000; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
    document.getElementById("totalAmount2").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateTinPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity3").value;
//     var originalPrice = 50000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount3").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateTinPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity3").value;
    var originalPrice = 50000; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
    document.getElementById("totalAmount3").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateCoalPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity4").value;
//     var originalPrice = 75000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount4").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateCoalPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity4").value;
    var originalPrice = 75000; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
    document.getElementById("totalAmount4").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateIronPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity5").value;
//     var originalPrice = 100000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount5").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateIronPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity5").value;
    var originalPrice = 100000; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
    document.getElementById("totalAmount5").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateSulfurPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity6").value;
//     var originalPrice = 100000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount6").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateSulfurPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity6").value;
    var originalPrice = 100000; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
    document.getElementById("totalAmount6").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateSilverPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity7").value;
//     var originalPrice = 187500; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount7").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateSilverPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity7").value;
    var originalPrice = 187500; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
    document.getElementById("totalAmount7").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateGoldPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity8").value;
//     var originalPrice = 250000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount8").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateGoldPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity8").value;
    var originalPrice = 250000; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
    document.getElementById("totalAmount8").textContent = "$" + purchasePrice.toLocaleString('en-US');
}



// THIS FUNCTION IS BY INDIVIDUAL NUGGETS

// function calculateAlienPurchasePrice() {
//     var nuggetQuantity = document.getElementById("nuggetQuantity9").value;
//     var originalPrice = 3750000; // Original price of each diamond nugget
//     var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
//     document.getElementById("totalAmount9").textContent = "$" + purchasePrice.toLocaleString('en-US');
// }

function calculateAlienPurchasePrice() {
    var nuggetQuantity = document.getElementById("nuggetQuantity9").value;
    var originalPrice = 3750000; // Original price of each diamond nugget
    var purchasePrice = originalPrice * 0.8 * nuggetQuantity; // 80% of the original price multiplied by the quantity
    document.getElementById("totalAmount9").textContent = "$" + purchasePrice.toLocaleString('en-US');
}
