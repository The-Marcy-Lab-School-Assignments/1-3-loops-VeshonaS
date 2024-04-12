const whileToFor = () => {
  for(let i = 0; i < 5; i++) {
    console.log(i);
  }
};
// whileToFor()

const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if (i === 2 || i ===3) {
      /** FEEDBACK: You are so close! You were able to properly use the guard clause here which is amazing however you simply forgot to move the console.log() to after the conditional statement! */
      console.log("Sure glad this isn't 2 or 3");
      continue; 
    }
      console.log(i);  
  }
};
continueGuardClause()

module.exports = {
  whileToFor,
  continueGuardClause,
};
