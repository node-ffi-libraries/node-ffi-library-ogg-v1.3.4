/*
 * This file was generated by @ffi-packager/ffi-packager v2.0.0.
 * https://github.com/node-ffi-packager
 *
 * Library: ogg
 * Conan.io recipe reference: ogg/1.3.4
 * Conan.io remote: conan-center
 * Conan.io package id: 30acef53c04f36d5f9412c84a1b3a7434a1f10fb
 */

const { loadLibrary } = require("../loader");

const input = require("./index.json");

module.exports = {
  // NOTE: named wrapper function with library name prefix to make it easier to spot in a stack trace.
  // NOTE: assumes that the library name is in a suitable format.
  load: async function oggLibraryLoader() {
    return loadLibrary(__dirname, input);
  },
};