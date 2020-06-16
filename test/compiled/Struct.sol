pragma solidity ^0.4.0;


struct Voter1 { // Struct
    uint weight1;
    bool voted1;
    address delegate1;
    uint vote1;
}

contract Ballot {
    struct Voter { // Struct
        uint weight;
        bool voted;
        address delegate;
        uint vote;
    }
}