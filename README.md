<p align="center">
  <a href="https://github.com/node-ffi-packager"><img src="https://raw.githubusercontent.com/node-ffi-packager/resources/master/logotype/node-ffi-libraries.svg?sanitize=true" alt="node-ffi-libraries logotype, impossible cubes in orange" width="256" border="0" /></a>
</p>

# [@ffi-libraries/ogg-v1.3.4](https://github.com/node-ffi-libraries/node-ffi-library-ogg-v1.3.4)

[Automatically generated](https://github.com/node-ffi-packager) [Node.js](https://nodejs.org/en/) [Foreign Function Interface (FFI)](https://en.wikipedia.org/wiki/Foreign_function_interface) package for [`ogg`](https://github.com/xiph/ogg) v1.3.4. It is meant as a base to build feature-rich packages on top of &mdash; without the hassle of writing library bindings and building native dependencies.

> **`ogg`**: The OGG library

[Bugs? Report them!](https://github.com/node-ffi-packager)

## Platforms supported in this package

<details>

<summary>linux-x86_64</summary>

Conan package id `f2fe22dad08bad39aab2a38cb612e26da46e90c0`.

### Library dependencies

No library dependencies.

### Header files

- [`./include/ogg/config_types.h`](./platforms/linux-x86_64/include/ogg/config_types.h) ([`.js`](./platforms/linux-x86_64/include/ogg/config_types.h.js))

- [`./include/ogg/ogg.h`](./platforms/linux-x86_64/include/ogg/ogg.h) ([`.js`](./platforms/linux-x86_64/include/ogg/ogg.h.js))

- [`./include/ogg/os_types.h`](./platforms/linux-x86_64/include/ogg/os_types.h) ([`.js`](./platforms/linux-x86_64/include/ogg/os_types.h.js))

### Library files

- [`./lib/libogg.so.0.8.4`](./platforms/linux-x86_64/lib/libogg.so.0.8.4)

</details>

<details>

<summary>macos-armv8</summary>

Conan package id `30acef53c04f36d5f9412c84a1b3a7434a1f10fb`.

### Library dependencies

No library dependencies.

### Header files

- [`./include/ogg/config_types.h`](./platforms/macos-armv8/include/ogg/config_types.h) ([`.js`](./platforms/macos-armv8/include/ogg/config_types.h.js))

- [`./include/ogg/ogg.h`](./platforms/macos-armv8/include/ogg/ogg.h) ([`.js`](./platforms/macos-armv8/include/ogg/ogg.h.js))

- [`./include/ogg/os_types.h`](./platforms/macos-armv8/include/ogg/os_types.h) ([`.js`](./platforms/macos-armv8/include/ogg/os_types.h.js))

### Library files

- [`./lib/libogg.0.8.4.dylib`](./platforms/macos-armv8/lib/libogg.0.8.4.dylib)

</details>

<details>

<summary>macos-x86_64</summary>

Conan package id `ca6b19bf89270552244fca32806dded803132e76`.

### Library dependencies

No library dependencies.

### Header files

- [`./include/ogg/config_types.h`](./platforms/macos-x86_64/include/ogg/config_types.h) ([`.js`](./platforms/macos-x86_64/include/ogg/config_types.h.js))

- [`./include/ogg/ogg.h`](./platforms/macos-x86_64/include/ogg/ogg.h) ([`.js`](./platforms/macos-x86_64/include/ogg/ogg.h.js))

- [`./include/ogg/os_types.h`](./platforms/macos-x86_64/include/ogg/os_types.h) ([`.js`](./platforms/macos-x86_64/include/ogg/os_types.h.js))

### Library files

- [`./lib/libogg.0.8.4.dylib`](./platforms/macos-x86_64/lib/libogg.0.8.4.dylib)

</details>

<details>

<summary>windows-x86_64</summary>

Conan package id `995e0f0b86a651012a3bfca00d60f35ae037db5e`.

### Library dependencies

No library dependencies.

### Header files

- [`./include/ogg/config_types.h`](./platforms/windows-x86_64/include/ogg/config_types.h) ([`.js`](./platforms/windows-x86_64/include/ogg/config_types.h.js))

- [`./include/ogg/ogg.h`](./platforms/windows-x86_64/include/ogg/ogg.h) ([`.js`](./platforms/windows-x86_64/include/ogg/ogg.h.js))

- [`./include/ogg/os_types.h`](./platforms/windows-x86_64/include/ogg/os_types.h) ([`.js`](./platforms/windows-x86_64/include/ogg/os_types.h.js))

### Library files

- [`./bin/ogg.dll`](./platforms/windows-x86_64/bin/ogg.dll)

</details>

## Installation

```shell
npm install --save github:node-ffi-libraries/node-ffi-library-ogg-v1.3.4#semver:^2.0.0
```

## Example

```javascript
const { load } = require("@ffi-libraries/ogg-v1.3.4");

async function main() {
  // Lazy-loading the library and all dependencies.
  const library = await load();

  // A library might have more than one header file.
  console.dir(library);

  // Lazy-load an individual header file (random example, see output from above).
  const headerLoader = library.headers["./include/ogg/config_types.h"];
  const header = await headerLoader();

  // You can now use the functions and types exported by the header file.
  console.dir(header);

  // Properly unload when done.
  await library.unload();
}

main();
```

## Usage

- Used from [Node.js](https://nodejs.org/) (Javascript) to call the `ogg` dynamic library (C/C++).
  - No compilation required. All available binaries are included in the package and are loaded automatically.
  - Library header files are included, but most other documentation is not. See instead documentation for [`ogg`](https://github.com/xiph/ogg).
- The `header` variable in the above example contains a Javascript object generated from the C/C++ header file.
  - C/C++ constants.
  - FFI typedefs.
  - Bindings to C/C++ functions.
- See the [Node.js FFI tutorial](https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial) to get started.
  - Using [N-API](https://nodejs.org/dist/latest/docs/api/n-api.html) (`-napi`) versions of FFI libraries is required.
  - See [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi), [ref-napi](https://github.com/node-ffi-napi/ref-napi), and [related `-napi` packages](https://github.com/node-ffi-napi).

## Package information

- Repository/package automatically generated by [`@ffi-packager/ffi-packager`](https://github.com/node-ffi-packager):
  - Version: v2.0.0
  - Generator run by: [Joel Purra](https://joelpurra.com/)
- Repository published to [Github](https://github.com/):
  - Branch: [`v2.0.0`](https://github.com/node-ffi-libraries/node-ffi-library-ogg-v1.3.4/tree/v2.0.0)
  - Repository: [`node-ffi-library-ogg-v1.3.4`](https://github.com/node-ffi-libraries/node-ffi-library-ogg-v1.3.4)
  - Organization: [`node-ffi-libraries`](https://github.com/node-ffi-libraries)
- Package was _not_ published to [NPM](https://npmjs.com/).
  - Version: `2.0.0` (based on the package generator version)
  - Name: `@ffi-libraries/ogg-v1.3.4`
  - Organization/scope: `ffi-libraries`
- Library binaries made available by [Conan.io](https://conan.io/):
  - Package reference: [`ogg/1.3.4@`](https://github.com/conan-io/conan-center-index)
  - Conan remote: `conan-center`
- The library is [`ogg`](https://github.com/xiph/ogg):
  - Version: v1.3.4
  - Description: "The OGG library"
  - License: <a href="https://spdx.org/licenses/BSD-2-Clause.html">BSD-2-Clause</a>
  - Topics: ogg, codec, audio, lossless

---

[@ffi-libraries/ogg-v1.3.4](https://github.com/node-ffi-libraries/node-ffi-library-ogg-v1.3.4) Copyright &copy; 2021 [Joel Purra](https://joelpurra.com/). License: <a href="https://spdx.org/licenses/MIT.html">MIT</a>.
