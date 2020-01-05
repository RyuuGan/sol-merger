pragma solidity ^0.5.0;

contract A {
    uint private a;

    function setA(uint _a) public {
        a = _a;
    }

    function getA() public view returns (uint) {
        return a;
    }
}

contract ConflictingInheritance {
    function thisContractWillNotBeCorrectlyMerged() public pure {
        require(false, "Because it will have they keyword contract in this string");
    }

}

// This contract will not be detected
contract B {
    uint private b;

    function setB(uint _b) public {
        b = _b;
    }

    function getB() public view returns (uint) {
        return b;
    }
}

contract Example is A, B, ConflictingInheritance {}