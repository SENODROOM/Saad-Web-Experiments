// 1. Declare an empty inventory array
let inventory = [];

// 2. Function to find the index of a product in the inventory
function findProductIndex(productName) {
    // Convert the product name to lowercase
    const lowerName = productName.toLowerCase();
    // Find the index of the product
    return inventory.findIndex(product => product.name === lowerName);
}

// 3. Function to add a product to the inventory
function addProduct(product) {
    // Convert product name to lowercase
    const lowerName = product.name.toLowerCase();
    const index = findProductIndex(lowerName);

    if (index !== -1) {
        // If product exists, update its quantity
        inventory[index].quantity += product.quantity;
        console.log(`${lowerName} quantity updated`);
    } else {
        // If product doesn't exist, add it to inventory
        inventory.push({ name: lowerName, quantity: product.quantity });
        console.log(`${lowerName} added to inventory`);
    }
}

// 4. Function to remove a product or reduce its quantity
function removeProduct(productName, quantity) {
    const lowerName = productName.toLowerCase();
    const index = findProductIndex(lowerName);

    if (index === -1) {
        console.log(`${lowerName} not found`);
        return;
    }

    const product = inventory[index];

    if (product.quantity < quantity) {
        console.log(`Not enough ${lowerName} available, remaining pieces: ${product.quantity}`);
        return;
    }

    product.quantity -= quantity;

    if (product.quantity === 0) {
        // Remove product from inventory if quantity is 0
        inventory.splice(index, 1);
    } else {
        console.log(`Remaining ${lowerName} pieces: ${product.quantity}`);
    }
}
