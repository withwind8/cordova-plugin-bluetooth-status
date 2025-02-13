var exec = require('cordova/exec');

var BluetoothStatus = function() {};

BluetoothStatus.initPlugin = function() {
    exec(null, null, "BluetoothStatus", "initPlugin", []);
};

BluetoothStatus.enableBT = function() {
    exec(null, null, "BluetoothStatus", "enableBT", []);
};

BluetoothStatus.promptForBT = function() {
    exec(null, null, "BluetoothStatus", "promptForBT", []);
};

BluetoothStatus.hasBT = false;
BluetoothStatus.hasBTLE = false;
BluetoothStatus.BTenabled = false;
BluetoothStatus.iosAuthorized = true;

module.exports = BluetoothStatus;
