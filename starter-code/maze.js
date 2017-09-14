var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  }
}

Maze.prototype.turnLeft      = function(){
  this.miner.dir =() // (this.miner...)
}

Maze.prototype.turnRight     = function(){
}

Maze.prototype.isPathForward = function(){
}

Maze.prototype.isPathLeft    = function(){
}

Maze.prototype.isPathRight   = function(){
}

Maze.prototype.moveForward   = function(){
}

Maze.prototype.notDone       = function(){
}

module.exports = Maze;

// Level1
// moveForward();
// moveForward();

// Level2
// moveForward();
// turnLeft();
// moveForward();
// turnRight();
// moveForward();

// Level3
// while (notDone()) {
//   moveForward();
// }

//Level4
// while (notDone()) {
//   moveForward();
//   turnLeft();
//   moveForward();
//   turnRight();
// }

// Level5
// moveForward();
// moveForward();
// turnLeft();
//
// while (notDone()) {
//   moveForward();
// }

// Level6
// while (notDone()) {
//   moveForward();
//   if (isPathLeft()) {
//     turnLeft();
//   }
// }

// Level7
// while (notDone()) {
//   moveForward();
//   if (isPathRight()) {
//     turnRight();
//   }
// }

// Level8
// while (notDone()) {
//   moveForward();
//   if (isPathLeft()) {
//     turnLeft();
//   }
//   if (isPathRight()) {
//     turnRight();
//   }
// }

// Level9
// while (notDone()) {
//   moveForward();
//   if (isPathForward()) {
//     moveForward();
//   } else {
//     if (isPathRight()) {
//       turnRight();
//     } else {
//       turnLeft();
//     }
//   }

// Level10
// while (notDone()) {
//   if (isPathLeft()) {
//     turnLeft();
//     moveForward();
//   } else {
//     if (isPathForward()) {
//       moveForward();
//     } else {
//       if (isPathRight()) {
//         turnRight();
//         moveForward();
//       } else {
//         turnLeft();
//       }
//     }
//   }
// }
