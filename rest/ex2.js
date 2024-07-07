let stringvariable = "swarna";
class stringreverse {
  constructor(stringreversevariable) {
    this.stringreversevariable = stringreversevariable;
  }

  reversethepassedstring() {
    const len = stringvariable.length;

    //One Way
    var splitString = stringvariable.split("");
    let rev = splitString.reverse();
    console.log(`Split Value : ${splitString}`);
    console.log(`Reversed Value : ${rev}`);

    //Secdond Way
    var finalval = stringvariable.split("").reverse();
    console.log(`Final reverse value is: ${finalval}`);
  }
}

const obj = new stringreverse();
obj.reversethepassedstring();
