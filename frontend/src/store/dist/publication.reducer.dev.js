"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPublication = exports.addPublication = exports.listePublication = exports.publicationReducer = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var publicationReducer = (0, _toolkit.createSlice)({
  name: 'publication',
  initialState: {},
  reducers: {
    listePublication: function listePublication(state, action) {
      return action.payload;
    },
    addPublication: function addPublication(state, action) {
      state.publication.push(action.payload);
    }
  }
});
exports.publicationReducer = publicationReducer;
var _publicationReducer$a = publicationReducer.actions,
    listePublication = _publicationReducer$a.listePublication,
    addPublication = _publicationReducer$a.addPublication;
exports.addPublication = addPublication;
exports.listePublication = listePublication;

var getPublication = function getPublication() {
  return function (dispatch) {
    _axios["default"].get('http://127.0.0.1:8000/api/publications').then(function (res) {
      return dispatch(listePublication(res.data));
    });
  };
};

exports.getPublication = getPublication;