// Given a [r][c] grid, write an algorithm that checks to see if the robot can move from the top left to bottom right part of the grid. 
// Robot can only move up and down 1 spot at a time.
// O(rc) time

var maze = [
  [1, 1, 1, 1], 
  [1, 0, 1, 1], 
  [1, 1, 1, 1]
];

function robotPath(maze) {
  const numRows = maze.length;
  const numCols = maze[0] ? maze[0].length : null;
  
  if (!numRows || !numCols) throw new Error('Invalid maze');
  if (numRows === 1 && numCols === 1) return true;
  
  const path = [];
  const cache = {};
  
  return robotHasPath(maze, numRows-1, numCols-1, path, cache);
}

function robotHasPath(maze, r, c, path, cache){
  let currentPosition = `(${r}, ${c})`

  if (r < 0 || c < 0 || !maze[r][c]) {
    return false;
  }
  
  if (cache.hasOwnProperty(currentPosition)) {
    return cache[currentPosition];
  }
  
  let isOrigin = (r === 0) && (c === 0);
  let success = false;

  if (isOrigin || robotHasPath(maze, r-1, c, path, cache) || robotHasPath(maze, r, c-1, path, cache)) {
    path.unshift(currentPosition);
    success = true;
  }
  
  cache[currentPosition] = success;
  return success;
}

robotPath(maze); // true
