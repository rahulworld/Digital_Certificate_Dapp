web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x17edf38bb7ab0eb8187cfb5e21a9fc7de031cc36');
candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

// function voteForCandidate() {
//   candidateName = $("#candidate").val();
//   // contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
//   //   let div_id = candidates[candidateName];
//   //   $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
//   // });
//   // $("#votingCryptography").html(contractInstance);
//   // console.log(contractInstance);
//   var token=contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]});
//   let div_id = candidates[candidateName];
//   $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
//   $("#votingCryptography").html(token.toString());
//   console.log(token);
// }

function voteForCandidate1() {
  candidateName = 'Rama';
  var token=contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]});
  let div_id = candidates[candidateName];
  $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  $("#votingCryptography").html(token.toString());
  console.log(token);
}

// function voteForCandidate2() {
//   candidateName = 'Nick';
//   var token=contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]});
//   let div_id = candidates[candidateName];
//   $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
//   $("#votingCryptography").html(token.toString());
//   console.log(token);
// }

// function voteForCandidate3() {
//   candidateName = 'Jose';
//   var token=contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]});
//   let div_id = candidates[candidateName];
//   $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
//   $("#votingCryptography").html(token.toString());
//   console.log(token);
// }

// function voteForCandidate() {
//   candidateName = $("#candidate").val();
//   contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
//     let div_id = candidates[candidateName];
//     $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
//   });
// }

$(document).ready(function() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = contractInstance.totalVotesFor.call(name).toString()
    $("#" + candidates[name]).html(val);
  }
});
