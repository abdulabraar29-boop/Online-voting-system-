function vote(candidate){

let votes = localStorage.getItem(candidate);

if(votes == null){
votes = 0;
}

votes++;

localStorage.setItem(candidate, votes);

alert("Vote successfully recorded in blockchain!");

}