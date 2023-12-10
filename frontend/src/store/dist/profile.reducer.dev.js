"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfile = exports.adminConnected = exports.profileReducer = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _AuthUser2 = _interopRequireDefault(require("../client/api/AuthUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var profileReducer = (0, _toolkit.createSlice)({
  name: 'profile',
  initialState: {},
  reducers: {
    adminConnected: function adminConnected(state, action) {
      return action.payload;
    }
  }
});
exports.profileReducer = profileReducer;
var adminConnected = profileReducer.actions.adminConnected;
exports.adminConnected = adminConnected;

var getProfile = function getProfile() {
  return function (dispatch) {
    var _AuthUser = (0, _AuthUser2["default"])(),
        http = _AuthUser.http;

    var token = sessionStorage.getItem("token");
    http.get("/profile", {
      headers: {
        Authorization: "Bearer ".concat(token.replace(/"/g, ""))
      }
    }).then(function (res) {
      return dispatch(adminConnected(res.data));
    });
  };
};

exports.getProfile = getProfile;