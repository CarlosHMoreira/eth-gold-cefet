pragma solidity ^0.5;

contract GoldCoin {

    address owner;

	mapping (address => uint) balances;

	event Transfer(address indexed sender, address indexed receiver, uint256 amount);

    constructor() public {
		owner = msg.sender;
	}

	function sendCoin(address receiver, uint amount) public verifyBalance(amount) returns (bool sufficient) {

		balances[msg.sender] -= amount;
		balances[receiver] += amount;

		emit Transfer(msg.sender, receiver, amount);

		return true;
	}

	function getBalance() public view returns(uint){
		return balances[msg.sender];
	}

	function depositGold(address newAccount, uint amount) public onlyOwner() {
	    balances[newAccount] = amount;
	}

	modifier onlyOwner() {
	    require(msg.sender == owner, 'You cannot do this! Who do you think you are?');
	    _;
	}

	modifier verifyBalance(uint amount) {
	    require(balances[msg.sender] >= amount, 'NOT ENOUGH CASH! Stranger');
	    _;
	}

}
