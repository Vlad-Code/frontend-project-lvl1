"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greetingUserName = () => {
  const userName = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

var _default = greetingUserName;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZ1VzZXJOYW1lIiwidXNlck5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLE1BQU07QUFDN0IsUUFBTUMsUUFBUSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBakI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLFFBQVMsR0FBL0I7QUFDRCxDQUhEOztlQUtlRCxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmNvbnN0IGdyZWV0aW5nVXNlck5hbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHt1c2VyTmFtZX0hYCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBncmVldGluZ1VzZXJOYW1lO1xuIl19