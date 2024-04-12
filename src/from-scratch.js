/** FEEDBACK: Overall, great job with this assignment! You are killing it!!!! */
const loop0UpTo10 = () => {
  for (let i = 0; i < 10; i++){
    console.log(i)
  }
};
// loop0UpTo10()

const loop5to10 = () => {
  for (let i = 5; i <= 10 ; i++){ 
    console.log(i)
  }
};
// loop5to10()
// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10 ; i += 2)
  console.log(i)
};
// loopEvenNumbersUpTo10()

const countdown5to0 = () => {
for (let i = 5; i >= 0; i--)
console.log(i)
};
// countdown5to0()

const loopUpToNum = (num) => {
for (let i = 0; i < num ; i++)
console.log(i)
};
// loopUpToNum(18)
/** FEEDBACK: Typically when writing conditional statements you would write them like this: 
 * if(){
 * 
 * } else if(){
 * 
 * } else if(){
 * 
 * } else {
 * 
 * }
 * 
 * In this example, I want you to really notice the spacing! Writing code like shown above will make it easier to read for yourself and other developers!
 */
const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log ('fizzbuzz')
    }else if (i % 3 === 0)
    {console.log('fizz')
  }else if (i % 5 === 0)
  {console.log('buzz')
    }else {
  console.log(i)

    }
  } 
};
fizzbuzz()

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
