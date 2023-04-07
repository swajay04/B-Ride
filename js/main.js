$(document).ready(function(){
    
//Scroll to  top
    $(window).scroll(function(){
        if($(this).scrollTop()>250){
            $('#scrollToUp').fadeIn();
        } else {
            $('#scrollToUp').fadeOut();
        }
    });

    $('#scrollToUp').click(function(){
        $("html, body").animate({
            scrollTop:0}, 2000);
    });


$("#sticker").sticky({topSpacing:0});




});

// const connectContract = async () => {
//     const ABI = [
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_rideId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "acceptRide",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_rideId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "cancelRide",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "_driverAddr",
//                     "type": "address"
//                 }
//             ],
//             "name": "DriverRegister",
//             "type": "event"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_rideId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "payDriver",
//             "outputs": [],
//             "stateMutability": "payable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_contact",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_email",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_carNumber",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_seats",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "registerDriver",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_contact",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_email",
//                     "type": "string"
//                 }
//             ],
//             "name": "registerRider",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "newRideId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "RequestDriverEvent",
//             "type": "event"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "string",
//                     "name": "_pickup",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_dropoff",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "requestRide",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "_riderAddr",
//                     "type": "address"
//                 }
//             ],
//             "name": "RiderRegister",
//             "type": "event"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_rideId",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_rating",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "updateDriverRating",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "name": "drivers",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "contact",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "email",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "carNumber",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "seats",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "rating",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "numberOfRides",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "enum CarRide.DriverStatus",
//                     "name": "status",
//                     "type": "uint8"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getAllRides",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "uint256",
//                             "name": "id",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "address payable",
//                             "name": "riderAddr",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "address payable",
//                             "name": "driverAddr",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "pickup",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "dropoff",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "amount",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "bool",
//                             "name": "complete",
//                             "type": "bool"
//                         },
//                         {
//                             "internalType": "bool",
//                             "name": "confirmedByDriver",
//                             "type": "bool"
//                         }
//                     ],
//                     "internalType": "struct CarRide.Ride[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "_driverAddr",
//                     "type": "address"
//                 }
//             ],
//             "name": "getDriverInfo",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "enum CarRide.DriverStatus",
//                     "name": "",
//                     "type": "uint8"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_rideId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "getRideInfo",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 },
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "_riderAddr",
//                     "type": "address"
//                 }
//             ],
//             "name": "getRiderInfo",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "rideIdCounter",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "name": "riders",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "name",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "contact",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "email",
//                     "type": "string"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "rides",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "id",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "address payable",
//                     "name": "riderAddr",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "address payable",
//                     "name": "driverAddr",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "pickup",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "dropoff",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "bool",
//                     "name": "complete",
//                     "type": "bool"
//                 },
//                 {
//                     "internalType": "bool",
//                     "name": "confirmedByDriver",
//                     "type": "bool"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "_rideId",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "viewRideStatus",
//             "outputs": [
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 },
//                 {
//                     "internalType": "bool",
//                     "name": "",
//                     "type": "bool"
//                 },
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ]
//         {
//     const Address = "0x1DCabB8360c16728f0ce5e41BF58ec5eA1a5bA45";
//     window.web3 = await new Web3(window.ethereum);
//     window.contract = await new window.web3.eth.Contract( ABI, Address); 
//     document.getElementById("contractArea").innerHTML = "connected to smart contract";
// }

// //3-read data from smart contract
// const readContract = async () => {
//     const data = await window.contract.methods.myCity().call();
//     document.getElementById("dataArea").innerHTML = data;
// }