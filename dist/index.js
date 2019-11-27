"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greetingUserName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greetingUserName = () => {
  const userName = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

exports.greetingUserName = greetingUserName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZ1VzZXJOYW1lIiwidXNlck5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNPLE1BQU1BLGdCQUFnQixHQUFHLE1BQU07QUFDdEMsUUFBTUMsUUFBUSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBakI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLFFBQVMsR0FBL0I7QUFDQyxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tIFwicmVhZGxpbmUtc3luY1wiO1xuZXhwb3J0IGNvbnN0IGdyZWV0aW5nVXNlck5hbWUgPSAoKSA9PiB7XG5jb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuY29uc29sZS5sb2coYEhlbGxvLCAke3VzZXJOYW1lfSFgKTtcbn07XG5cbiJdfQ==