/* add = require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});*/


const caller = require('../main');


let shopList = ['0001', '0003', '0005', '0003'];
let shopList2 = ['0000', '0003', '0005', '0003'];
let itemList = [
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

let shopCount1 = [{key:'0000',count:1}, {key:'0003',count:2}, {key:'0005',count:1}];
let itemIdList1 = ["0001","0002","0003","0004","0005","0006","0007","0008","0009","0010"];



let shopCount2 = [{key:'0001',count:1}, {key:'0003',count:2}, {key:'0005',count:1}];
let itemIdList2 = ["0001","0002","0003","0004","0005","0006","0007","0008","0009","0010"];



it ('should return false when call ifItemExist given shopCount1 and itemIdList1', () => {
    expect(caller.ifItemExist(shopCount1, itemIdList1)).toBe(false);
});



it ('should return true when call ifItemExist given shopCount2 and itemIdList2', () => {
    expect(caller.ifItemExist(shopCount2, itemIdList2)).toBe(true);
});


//let shopCount = [{key:"0001",count:1},{key:"0003",count:2},{key:"0005",count:1}];
it ('should return receipt when call getReceipt given shopCount2 and itemList', () => {
    expect(caller.getReceipt(shopCount2,itemList)).toBe(
"Receipts\n" +
"----------------------------------------------------------------------------\n"+
"Coca Cola\t\t\t\t3\t1\n"+
"Pepsi-Cola\t\t\t\t5\t2\n" +
"Dr Pepper\t\t\t\t7\t1\n"+
"----------------------------------------------------------------------------\n" +
"Price: 20"
);
});

it ('should return receipt when call printReceipt given shopList and itemList', () => {
    expect(caller.printReceipt(shopList,itemList)).toBe(
`Receipts
----------------------------------------------------------------------------
Coca Cola				3	1
Pepsi-Cola				5	2
Dr Pepper				7	1
----------------------------------------------------------------------------
Price: 20`
);
});

it ('should return receipt when call printReceipt given shopList2 and itemList', () => {
    expect(caller.printReceipt(shopList2,itemList)).toBe("[ERROR]:item not exist");
});