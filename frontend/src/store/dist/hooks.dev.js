"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _AuthUser2 = _interopRequireDefault(require("../client/api/AuthUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(value) {
  return function () {
    var _AuthUser = (0, _AuthUser2["default"])(),
        http = _AuthUser.http,
        setToken = _AuthUser.setToken;

    http.post('/login', value).then(function (res) {
      setToken(res.data.user, res.data.access_token);
    });
  };
};

exports.login = login;