// Task 1: Create an Inventory Array of Product Objects

let Inventory = [
    {
        name: 'Jeans',
        price: 50,
        quantity: 100000,
    }    
    {
        name: 'Jackets',
        price: 65,
        quantity: 100000,
    }
    {
        name: 'Shirts',
        price: 30,
        quantity: 100000,
    }
    {
        name: 'Socks',
        price: 15,
        quantity: 100000,
    }
]
//array of objects

// Task 2: Create an Orders Array of Order Objects

let Orders = [];            // Created orders array

// Task 3: Create a Function to Place an Order
let items = (name, quantityOrdered)

function customerOrder(customerName, items) {  // customerOrder will include customerNmae, name, and quantity
    const Order = {
        customerName: customerName,
        items: items    //Order includes CustomerName and items
    }
}

function placeOrder(customerName, orderedItems) {
    const items = inventory.find(items => items.name == items.name);
    items.quantity = (items.quantity -= items.quantityOrdered);  //Reduce quantity based on sales
    if (items.quantity >= items.quantityOrdered) {
         console.log("In Stock");
    } else if  (items.quantity == 0) {
         console.log("Error: Out of Stock");
    }
}                   

const Order = {
    customerName: customerName,
    items: orderedItems,
    status: "Pending"     //Added order to orders array with status "pending"
}

Orders.push(Order);  //Added the order to orders array

// Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(Order) {
    let total = 0;

    for(let items of order.items) {
        const items = inventory.find(items => items.name == orderedItems.name);
            if (items) {
                total += items.price * items.quantity;   // finding total by multiplying price times quantity
            }
    }
    return total;
}

// Task 5: Create a Function to Mark an Order as Completed

function completeOrder(customerName) {
    const Order = Orders.find(o => o.customerName == customerName);

    if (Order) {
        Order.status = "Completed";     //Order status changed
    } else {
        console.log('Error: No order found for $[customerName].');
    }
    
}


