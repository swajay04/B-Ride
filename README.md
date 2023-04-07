# B-Ride
This is a full scale project of Peer to Peer Carpooling using blockchain.
It contains the samrt contract (ayo.sol) and a basic Static website to go with it.
Work on the website is still in progress and will be updated.

# Running the Smart contract using Remix and Ganache 
Now here i have used online solidity compiler Remix you can have your preference.
# Steps
Compile the code on Remix IDE 
Open Ganache and select quickstart.
Check for the RPC Server it will look something like this "HTTP://127.0.0.1:7545"
After successful compilation of the smart contract go to the deploy and run transactions window by clicking the icon right below compilations.
In the environment tab in the Remix IDE select the option which says ganache something like Dev - Ganache Provider.
It will ask for Ganache JSON-RPC Endpoint: and more often than not it has "HTTP://127.0.0.1:8545" this value by default , you need to replace it with your RPC server value in my case it was 7545.
Click ok and your smart contract is now connected to ganache.
Deploy the transaction and check in the transactions tab in ganache you should see the details of your successful contract creation 
