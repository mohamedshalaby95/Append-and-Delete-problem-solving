// this is solution  Append and Delete problem solving

// start to take the string 1 and string 2 and number of operation  from user

// define regular expression to accept small letter only from the user

// define the  the initial  varaible
let firstString;
let secandString;
let numberOfOperation;

// make validation on the first string and secand string to be  character only and small letter
// make the input take number of operation  to enter number only

function validationInput() {
  let smallLetterExpression = /^[a-z]*$/g;
  do {
    firstString = prompt(
      " please enter first string must be string small letter"
    );
  } while (!smallLetterExpression.test(firstString));

  do {
    secandString = prompt(
      " please enter secand string must be string small letter"
    );
    console.log(
      "for debug secand contain small letter" +
        !smallLetterExpression.test(secandString)
    );
  } while (!smallLetterExpression.test(secandString));

  do {
    numberOfOperation = prompt(
      "please enter number of operation check number only"
    );
  } while (isNaN(numberOfOperation) || numberOfOperation === "");
}

function appendAndDelete() {
  // to validate input from user to take small or empty charcter at  first string  and last string
  //and the number of operation have number only
  validationInput();

  // to find the common character between the two string
  let commomStringIndex = 0;

  while (
    commomStringIndex < firstString.length &&
    commomStringIndex < secandString.length
  ) {
    if (
      firstString.charAt(commomStringIndex) ===
      secandString.charAt(commomStringIndex)
    ) {
      commomStringIndex++;
    } else {
      break;
    }
  }
  // to do  check we have the case

  // at the first i need to known the minimum operation i need

  let numberOfOpreationMiniNeed =
    firstString.length -
    commomStringIndex +
    (secandString.length - commomStringIndex);

  // the first case  when the number number Of Operation i get it from user  less  than the minimum number of operation needed

  if (numberOfOperation < numberOfOpreationMiniNeed) return "No";

  // when  numberOfOperation equal or greater than  the sum of length  first and secand strings
  //the number of operation is covering the steps number required even it's required  to replace the secand string with the first

  if (numberOfOperation >= firstString.length + secandString.length)
    return "Yes";

  //if we could transform the first string to the second one , and there are more steps remaining we can do some other steps
  //like adding or removing characters ,but if we added or removed odd numbers in some operation we won't be able to add or
  // remove again that's why we should depend on even numbers remaining to if i  add i can remove or i remove i can add
  //and  return to  the  real string  again

  if ((numberOfOperation - numberOfOpreationMiniNeed) % 2 === 0) return "Yes";

  return "No";
}
console.log(appendAndDelete());
// const numberOfOperation=prompt(" please enter number of operation check")
