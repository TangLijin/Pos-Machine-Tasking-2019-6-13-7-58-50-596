/* add = require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});*/


const caller = require('../main');


var shopList1 = ['0000', '0003', '0005', '0003'];
var itemList1 = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

it ('should return false when call ifItemExist given shopList1 and itemList1', () => {
    expect(caller.ifItemExist(shopList1, itemList1)).toBe(false);
});


var shopList2 = ['0001', '0003', '0005', '0003'];
var itemList2 = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

it ('should return true when call ifItemExist given shopList2 and itemList2', () => {
    expect(caller.ifItemExist(shopList2, itemList2)).toBe(true);
});

var shopCount = [{key:"0001",count:1},{key:"0003",count:2},{key:"0005",count:1}];
it ('should return receipt when call getReceipt given shopCount and itemList2', () => {
    expect(caller.getReceipt(shopCount,itemList2)).toBe("Receipts \
    ---------------------------------------------------------------------------- \
    Coca Cola				3	1 \
    Pepsi-Cola				5	2 \
    Dr Pepper				7	1 \
    ---------------------------------------------------------------------------- \
    Price: 20");
});

it ('should return receipt when call printReceipt given shopList2 and itemList2', () => {
    expect(caller.printReceipt(shopList2,itemList2)).toBe("Receipts \
    ---------------------------------------------------------------------------- \
    Coca Cola				3	1 \
    Pepsi-Cola				5	2 \
    Dr Pepper				7	1 \
    ---------------------------------------------------------------------------- \
    Price: 20");
});

it ('should return receipt when call printReceipt given shopList2 and itemList2', () => {
    expect(caller.printReceipt(shopList1,itemList1)).toBe("[ERROR]:item not exist");
});