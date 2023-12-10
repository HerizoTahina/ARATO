"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.register = exports.getAdmin = exports.suppre = exports.listeAdmin = exports.authReducer = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _AuthUser = _interopRequireDefault(require("../client/api/AuthUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authReducer = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState: {},
  reducers: {
    listeAdmin: function listeAdmin(state, action) {
      return action.payload;
    },
    addAdmin: function addAdmin(state, action) {
      state.push(action.payload);
    },
    suppre: function suppre(state, action) {
      state.admin = state.admin.filter(function (e) {
        return e.id !== action.payload;
      });
    }
  }
});
exports.authReducer = authReducer;
var _authReducer$actions = authReducer.actions,
    listeAdmin = _authReducer$actions.listeAdmin,
    suppre = _authReducer$actions.suppre;
exports.suppre = suppre;
exports.listeAdmin = listeAdmin;

var getAdmin = function getAdmin() {
  return function (dispatch) {
    _axios["default"].get('http://127.0.0.1:8000/api/admin').then(function (res) {
      return dispatch(listeAdmin(res.data));
    });
  };
};

exports.getAdmin = getAdmin;

var register = function register(value) {
  return function (dispatch) {
    _axios["default"].post("http://127.0.0.1:8000/api/register", value).then(function () {
      dispatch(getAdmin());
      console.log(value);
    });
  };
};

exports.register = register;

var deleteUser = function deleteUser(id) {
  return function (dispatch) {
    _axios["default"]["delete"]("http://127.0.0.1:8000/api/admin/".concat(id)).then(function () {
      return dispatch(suppre(id));
    });
  };
};

exports.deleteUser = deleteUser;