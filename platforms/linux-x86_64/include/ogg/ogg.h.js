/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.2
 * - git commit v2.0.1-1-g2b4030d on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "ogg.h"
 * - SHA256: aad86109c1fdb377738675a63e0b19859e06ada25ae5c59c290ca7263d1dc4ca
 *
 * Generator options:
 * - Library: null
 * - Single file: true
 * - Prefixes: []
 * - Compiler arguments: []
 */

const FFI = require("ffi-napi");
const ref = require("ref-napi");
const ArrayType = require("ref-array-di")(ref);
const Struct = require("ref-struct-di")(ref);
const Union = require("ref-union-di")(ref);

const constants = {};

// NOTE: defining individual types as "global" constants to be able to reference them without any prefix.
const types = {};

const js_void = ref.types.void;
const js_long = ref.types.long;
const js_int32 = ref.types.int32;
const js_uchar = ref.types.uchar;
const js_ucharPointer = ref.refType(js_uchar);
const oggpack_buffer = Struct({
  endbyte: js_long,
  endbit: js_int32,
  buffer: js_ucharPointer,
  ptr: js_ucharPointer,
  storage: js_long,
});
const oggpack_bufferPointer = ref.refType(oggpack_buffer);
const js_voidPointer = ref.refType(js_void);
const js_ulong = ref.types.ulong;
const js_int32Pointer = ref.refType(js_int32);
const __int64_t = js_long;
const int64_t = __int64_t;
const ogg_int64_t = int64_t;
const ogg_int64_tPointer = ref.refType(ogg_int64_t);
const js_uchar_array_282 = ArrayType(js_uchar, 282);
const ogg_stream_state = Struct({
  body_data: js_ucharPointer,
  body_storage: js_long,
  body_fill: js_long,
  body_returned: js_long,
  lacing_vals: js_int32Pointer,
  granule_vals: ogg_int64_tPointer,
  lacing_storage: js_long,
  lacing_fill: js_long,
  lacing_packet: js_long,
  lacing_returned: js_long,
  header: js_uchar_array_282,
  header_fill: js_int32,
  e_o_s: js_int32,
  b_o_s: js_int32,
  serialno: js_long,
  pageno: js_long,
  packetno: ogg_int64_t,
  granulepos: ogg_int64_t,
});
const ogg_stream_statePointer = ref.refType(ogg_stream_state);
const ogg_packet = Struct({
  packet: js_ucharPointer,
  bytes: js_long,
  b_o_s: js_long,
  e_o_s: js_long,
  granulepos: ogg_int64_t,
  packetno: ogg_int64_t,
});
const ogg_packetPointer = ref.refType(ogg_packet);
const size_t = js_ulong;
const ogg_iovec_t = Struct({
  iov_base: js_voidPointer,
  iov_len: size_t,
});
const ogg_iovec_tPointer = ref.refType(ogg_iovec_t);
const ogg_page = Struct({
  header: js_ucharPointer,
  header_len: js_long,
  body: js_ucharPointer,
  body_len: js_long,
});
const ogg_pagePointer = ref.refType(ogg_page);
const ogg_sync_state = Struct({
  data: js_ucharPointer,
  storage: js_int32,
  fill: js_int32,
  returned: js_int32,
  unsynced: js_int32,
  headerbytes: js_int32,
  bodybytes: js_int32,
});
const ogg_sync_statePointer = ref.refType(ogg_sync_state);
const js_CString = ref.types.CString;

types["__int64_t"] = __int64_t;
types["int64_t"] = int64_t;
types["js_CString"] = js_CString;
types["js_int32"] = js_int32;
types["js_int32Pointer"] = js_int32Pointer;
types["js_long"] = js_long;
types["js_uchar"] = js_uchar;
types["js_ucharPointer"] = js_ucharPointer;
types["js_uchar_array_282"] = js_uchar_array_282;
types["js_ulong"] = js_ulong;
types["js_void"] = js_void;
types["js_voidPointer"] = js_voidPointer;
types["ogg_int64_t"] = ogg_int64_t;
types["ogg_int64_tPointer"] = ogg_int64_tPointer;
types["ogg_iovec_t"] = ogg_iovec_t;
types["ogg_iovec_tPointer"] = ogg_iovec_tPointer;
types["ogg_packet"] = ogg_packet;
types["ogg_packetPointer"] = ogg_packetPointer;
types["ogg_page"] = ogg_page;
types["ogg_pagePointer"] = ogg_pagePointer;
types["ogg_stream_state"] = ogg_stream_state;
types["ogg_stream_statePointer"] = ogg_stream_statePointer;
types["ogg_sync_state"] = ogg_sync_state;
types["ogg_sync_statePointer"] = ogg_sync_statePointer;
types["oggpack_buffer"] = oggpack_buffer;
types["oggpack_bufferPointer"] = oggpack_bufferPointer;
types["size_t"] = size_t;

const functions = new FFI.Library(null, {
  ogg_packet_clear: [js_void, [ogg_packetPointer]],
  ogg_page_bos: [js_int32, [ogg_pagePointer]],
  ogg_page_checksum_set: [js_void, [ogg_pagePointer]],
  ogg_page_continued: [js_int32, [ogg_pagePointer]],
  ogg_page_eos: [js_int32, [ogg_pagePointer]],
  ogg_page_granulepos: [ogg_int64_t, [ogg_pagePointer]],
  ogg_page_packets: [js_int32, [ogg_pagePointer]],
  ogg_page_pageno: [js_long, [ogg_pagePointer]],
  ogg_page_serialno: [js_int32, [ogg_pagePointer]],
  ogg_page_version: [js_int32, [ogg_pagePointer]],
  ogg_stream_check: [js_int32, [ogg_stream_statePointer]],
  ogg_stream_clear: [js_int32, [ogg_stream_statePointer]],
  ogg_stream_destroy: [js_int32, [ogg_stream_statePointer]],
  ogg_stream_eos: [js_int32, [ogg_stream_statePointer]],
  ogg_stream_flush: [js_int32, [ogg_stream_statePointer, ogg_pagePointer]],
  ogg_stream_flush_fill: [
    js_int32,
    [ogg_stream_statePointer, ogg_pagePointer, js_int32],
  ],
  ogg_stream_init: [js_int32, [ogg_stream_statePointer, js_int32]],
  ogg_stream_iovecin: [
    js_int32,
    [
      ogg_stream_statePointer,
      ogg_iovec_tPointer,
      js_int32,
      js_long,
      ogg_int64_t,
    ],
  ],
  ogg_stream_packetin: [js_int32, [ogg_stream_statePointer, ogg_packetPointer]],
  ogg_stream_packetout: [
    js_int32,
    [ogg_stream_statePointer, ogg_packetPointer],
  ],
  ogg_stream_packetpeek: [
    js_int32,
    [ogg_stream_statePointer, ogg_packetPointer],
  ],
  ogg_stream_pagein: [js_int32, [ogg_stream_statePointer, ogg_pagePointer]],
  ogg_stream_pageout: [js_int32, [ogg_stream_statePointer, ogg_pagePointer]],
  ogg_stream_pageout_fill: [
    js_int32,
    [ogg_stream_statePointer, ogg_pagePointer, js_int32],
  ],
  ogg_stream_reset: [js_int32, [ogg_stream_statePointer]],
  ogg_stream_reset_serialno: [js_int32, [ogg_stream_statePointer, js_int32]],
  ogg_sync_buffer: [js_CString, [ogg_sync_statePointer, js_long]],
  ogg_sync_check: [js_int32, [ogg_sync_statePointer]],
  ogg_sync_clear: [js_int32, [ogg_sync_statePointer]],
  ogg_sync_destroy: [js_int32, [ogg_sync_statePointer]],
  ogg_sync_init: [js_int32, [ogg_sync_statePointer]],
  ogg_sync_pageout: [js_int32, [ogg_sync_statePointer, ogg_pagePointer]],
  ogg_sync_pageseek: [js_long, [ogg_sync_statePointer, ogg_pagePointer]],
  ogg_sync_reset: [js_int32, [ogg_sync_statePointer]],
  ogg_sync_wrote: [js_int32, [ogg_sync_statePointer, js_long]],
  oggpackB_adv: [js_void, [oggpack_bufferPointer, js_int32]],
  oggpackB_adv1: [js_void, [oggpack_bufferPointer]],
  oggpackB_bits: [js_long, [oggpack_bufferPointer]],
  oggpackB_bytes: [js_long, [oggpack_bufferPointer]],
  oggpackB_get_buffer: [js_ucharPointer, [oggpack_bufferPointer]],
  oggpackB_look: [js_long, [oggpack_bufferPointer, js_int32]],
  oggpackB_look1: [js_long, [oggpack_bufferPointer]],
  oggpackB_read: [js_long, [oggpack_bufferPointer, js_int32]],
  oggpackB_read1: [js_long, [oggpack_bufferPointer]],
  oggpackB_readinit: [
    js_void,
    [oggpack_bufferPointer, js_ucharPointer, js_int32],
  ],
  oggpackB_reset: [js_void, [oggpack_bufferPointer]],
  oggpackB_write: [js_void, [oggpack_bufferPointer, js_ulong, js_int32]],
  oggpackB_writealign: [js_void, [oggpack_bufferPointer]],
  oggpackB_writecheck: [js_int32, [oggpack_bufferPointer]],
  oggpackB_writeclear: [js_void, [oggpack_bufferPointer]],
  oggpackB_writecopy: [
    js_void,
    [oggpack_bufferPointer, js_voidPointer, js_long],
  ],
  oggpackB_writeinit: [js_void, [oggpack_bufferPointer]],
  oggpackB_writetrunc: [js_void, [oggpack_bufferPointer, js_long]],
  oggpack_adv: [js_void, [oggpack_bufferPointer, js_int32]],
  oggpack_adv1: [js_void, [oggpack_bufferPointer]],
  oggpack_bits: [js_long, [oggpack_bufferPointer]],
  oggpack_bytes: [js_long, [oggpack_bufferPointer]],
  oggpack_get_buffer: [js_ucharPointer, [oggpack_bufferPointer]],
  oggpack_look: [js_long, [oggpack_bufferPointer, js_int32]],
  oggpack_look1: [js_long, [oggpack_bufferPointer]],
  oggpack_read: [js_long, [oggpack_bufferPointer, js_int32]],
  oggpack_read1: [js_long, [oggpack_bufferPointer]],
  oggpack_readinit: [
    js_void,
    [oggpack_bufferPointer, js_ucharPointer, js_int32],
  ],
  oggpack_reset: [js_void, [oggpack_bufferPointer]],
  oggpack_write: [js_void, [oggpack_bufferPointer, js_ulong, js_int32]],
  oggpack_writealign: [js_void, [oggpack_bufferPointer]],
  oggpack_writecheck: [js_int32, [oggpack_bufferPointer]],
  oggpack_writeclear: [js_void, [oggpack_bufferPointer]],
  oggpack_writecopy: [
    js_void,
    [oggpack_bufferPointer, js_voidPointer, js_long],
  ],
  oggpack_writeinit: [js_void, [oggpack_bufferPointer]],
  oggpack_writetrunc: [js_void, [oggpack_bufferPointer, js_long]],
});

module.exports = {
  constants,
  types,
  functions,
};
