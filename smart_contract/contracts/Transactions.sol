// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {

    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        string keyword;
        string message;
        uint amount;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addBlockChain(address payable receiver, uint amount, string memory keyword, string memory message) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, keyword, message, amount, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

}
