/**
 * Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:
 * All employees who didn't use their badge while exiting the room - they recorded an enter without a matching exit.
 * (All employees are required to leave the room before the log ends.)
 * All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter.
 * (The room is empty when the log begins.)
 * Each collection should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.
 * */

const findMisMatchEntries = (records) => {
  let enteredNotExited = new Set();
  let exitedNotEntered = new Set();

  const entered = new Set();
  const exited = new Set();

  for (let [name, action] of records) {
    // if some one exits then check if the entry is present
    // in the entered set
    if (action == 'exit') {
      if (entered.has(name)) {
        entered.delete(name);
      } else {
        exited.add(name);
      }
    }

    if (action == 'enter') {
      if (exited.has(name)) {
        exited.delete(name);
      } else {
        entered.add(name);
      }
    }
  }

  enteredNotExited = entered;
  exitedNotEntered = exitedNotEntered;
  return [Array.from(enteredNotExited), Array.from(exitedNotEntered)];
};

records1 = [
  ['Martha', 'exit'],
  ['Paul', 'enter'],
  ['Martha', 'enter'],
  ['Steve', 'enter'],
  ['Martha', 'exit'],
  ['Jennifer', 'enter'],
  ['Paul', 'enter'],
  ['Curtis', 'exit'],
  ['Curtis', 'enter'],
  ['Paul', 'exit'],
  ['Martha', 'enter'],
  ['Martha', 'exit'],
  ['Jennifer', 'exit'],
  ['Paul', 'enter'],
  ['Paul', 'enter'],
  ['Martha', 'exit'],
  ['Paul', 'enter'],
  ['Paul', 'enter'],
  ['Paul', 'exit'],
  ['Paul', 'exit'],
];
const [notExited, notEntered] = findMisMatchEntries(records1);
console.log(notExited);
console.log(notEntered);
