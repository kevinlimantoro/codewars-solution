function whoIsNext(names, r){
    var turns = 0;
    var totalPeoplePerTurn = names.length;
    while(r > totalPeoplePerTurn){
        r -= totalPeoplePerTurn;
        turns++;
        totalPeoplePerTurn = (totalPeoplePerTurn * 2);
    }
    return names[Math.ceil(r / Math.pow(2,turns)) - 1];
  }

  const testName = ["proto"];
  console.log(whoIsNext(testName,1));
  console.log(whoIsNext(testName,5));
  const names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
  console.log(whoIsNext(names,1));
  console.log(whoIsNext(names,7));
  console.log(whoIsNext(names,8));
  console.log(whoIsNext(names,19));
  console.log(whoIsNext(names,20));
  console.log(whoIsNext(names,52));