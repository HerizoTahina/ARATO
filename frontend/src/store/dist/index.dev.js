"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allStore = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _auth = require("./auth.reducer");

var _profile = require("./profile.reducer");

var _publication = require("./publication.reducer");

var allStore = (0, _toolkit.configureStore)({
  reducer: {
    users: _auth.authReducer.reducer,
    profile: _profile.profileReducer.reducer,
    publication: _publication.publicationReducer.reducer
  }
});
exports.allStore = allStore;