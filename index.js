// // Create a new task by adding to the arrays
// // A new task will be created as incomplete


function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(false); // Clean Cat Litter has not been completed
task1.markCompleted(true);
task1.logState(true); // Clean Cat Litter has been completed

task1.title
task1.markCompleted

