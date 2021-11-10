// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
contract BatOrder {
    uint orderId;

    function setOrderId(uint x) public {
        orderId = x;
    }

    function getOrderId() public view returns (uint) {
        return orderId;
    }
}