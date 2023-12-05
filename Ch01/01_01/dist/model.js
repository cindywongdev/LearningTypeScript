var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
function getInventoryItem(trackingNumber) {
}
function saveInventoryItem(item) {
}
// mimic getting inventory item
var inventoryItem = getInventoryItem(trackingNumber);
// mimic updating it
inventoryItem.createDate = new Date();
// mimic saving inventory item
saveInventoryItem(inventoryItem);
