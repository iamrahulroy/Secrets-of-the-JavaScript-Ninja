// Define a top-level variable in a module
const ninja = 'Yoshi';

// Defines a variable & a function and export them from module using export keyword
export const message = 'Hello';

export function sayHiToNinja() {
  // Accesses an inner module variable from the module's public API
  return message + " " + ninja;
}
