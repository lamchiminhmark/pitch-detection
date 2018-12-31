var Module = function(Module) {
  Module = Module || {};

var a;a||(a=typeof Module !== 'undefined' ? Module : {});var d={},h;for(h in a)a.hasOwnProperty(h)&&(d[h]=a[h]);a.arguments=[];a.thisProgram="./this.program";a.quit=function(b,c){throw c;};a.preRun=[];a.postRun=[];var k=!1,l=!1,p=!1,aa=!1;k="object"===typeof window;l="function"===typeof importScripts;p="object"===typeof process&&"function"===typeof require&&!k&&!l;aa=!k&&!p&&!l;
if(a.ENVIRONMENT)throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
if(p){var q,u;a.read=function(b,c){q||(q=require("fs"));u||(u=require("path"));b=u.normalize(b);b=q.readFileSync(b);return c?b:b.toString()};a.readBinary=function(b){b=a.read(b,!0);b.buffer||(b=new Uint8Array(b));assert(b.buffer);return b};1<process.argv.length&&(a.thisProgram=process.argv[1].replace(/\\/g,"/"));a.arguments=process.argv.slice(2);process.on("uncaughtException",function(b){throw b;});process.on("unhandledRejection",function(){v("node.js exiting due to unhandled promise rejection");
process.exit(1)});a.quit=function(b){process.exit(b)};a.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(a.read=function(b){return read(b)}),a.readBinary=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");assert("object"===typeof b);return b},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(b){quit(b)});
else if(k||l)a.read=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},l&&(a.readBinary=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),a.readAsync=function(b,c,e){var g=new XMLHttpRequest;g.open("GET",b,!0);g.responseType="arraybuffer";g.onload=function(){200==g.status||0==g.status&&g.response?c(g.response):e()};g.onerror=e;g.send(null)},a.setWindowTitle=function(b){document.title=
b};else throw Error("environment detection error");var w=a.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=a.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||w);for(h in d)d.hasOwnProperty(h)&&(a[h]=d[h]);d=void 0;ba=function(){x("cannot use the stack before compiled code is ready to run, and has provided stack access")};function ca(b){var c;c||(c=16);return Math.ceil(b/c)*c}
var y,da={"f64-rem":function(b,c){return b%c},"debugger":function(){debugger}},z=0;function assert(b,c){b||x("Assertion failed: "+c)}var ea="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function fa(b){return b.replace(/__Z[\w\d_]+/g,function(b){y||(y={});y["warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"]||(y["warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"]=1,v("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"));return b===b?b:b+" ["+b+"]"})}
function ha(){a:{var b=Error();if(!b.stack){try{throw Error(0);}catch(c){b=c}if(!b.stack){b="(no stack trace available)";break a}}b=b.stack.toString()}a.extraStackTrace&&(b+="\n"+a.extraStackTrace());return fa(b)}var buffer,A,ia,B,C;
function ja(){a.HEAP8=new Int8Array(buffer);a.HEAP16=ia=new Int16Array(buffer);a.HEAP32=B=new Int32Array(buffer);a.HEAPU8=A=new Uint8Array(buffer);a.HEAPU16=new Uint16Array(buffer);a.HEAPU32=C=new Uint32Array(buffer);a.HEAPF32=new Float32Array(buffer);a.HEAPF64=new Float64Array(buffer)}var E,F,G,H,ka,I,J,K;E=F=H=ka=I=J=K=0;G=!1;
function L(){34821223==C[(I>>2)-1]&&2310721022==C[(I>>2)-2]||x("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x"+C[(I>>2)-2].toString(16)+" "+C[(I>>2)-1].toString(16));if(1668509029!==B[0])throw"Runtime error: The application has corrupted its heap memory area (address zero)!";}
function la(){x("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+M+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var ma=a.TOTAL_STACK||5242880,M=a.TOTAL_MEMORY||16777216;M<ma&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+M+"! (TOTAL_STACK="+ma+")");
assert("undefined"!==typeof Int32Array&&"undefined"!==typeof Float64Array&&void 0!==Int32Array.prototype.subarray&&void 0!==Int32Array.prototype.set,"JS engine does not provide full typed array support");
a.buffer?(buffer=a.buffer,assert(buffer.byteLength===M,"provided buffer should be "+M+" bytes, but it is "+buffer.byteLength)):("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(assert(0===M%65536),a.wasmMemory=new WebAssembly.Memory({initial:M/65536,maximum:M/65536}),buffer=a.wasmMemory.buffer):buffer=new ArrayBuffer(M),assert(buffer.byteLength===M),a.buffer=buffer);ja();B[0]=1668509029;ia[1]=25459;
if(115!==A[2]||99!==A[3])throw"Runtime error: expected the system to be little-endian!";function N(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c();else{var e=c.l;"number"===typeof e?void 0===c.b?a.dynCall_v(e):a.dynCall_vi(e,c.b):e(void 0===c.b?null:c.b)}}}var na=[],oa=[],qa=[],ra=[],O=!1;function sa(){var b=a.preRun.shift();na.unshift(b)}assert(Math.imul&&Math.fround&&Math.clz32&&Math.trunc,"this is a legacy browser, build with LEGACY_VM_SUPPORT");var P=0,Q=null,S=null,T={};
function ta(){P++;a.monitorRunDependencies&&a.monitorRunDependencies(P);assert(!T["wasm-instantiate"]);T["wasm-instantiate"]=1;null===Q&&"undefined"!==typeof setInterval&&(Q=setInterval(function(){if(z)clearInterval(Q),Q=null;else{var b=!1,c;for(c in T)b||(b=!0,v("still waiting on run dependencies:")),v("dependency: "+c);b&&v("(end of list)")}},1E4))}a.preloadedImages={};a.preloadedAudios={};
function ua(){x("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1")}var FS={};a.FS_createDataFile=function(){ua()};a.FS_createPreloadedFile=function(){ua()};
function U(b){return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}
(function(){function b(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(m);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(R){x(R)}}function c(){return a.wasmBinary||!k&&!l||"function"!==typeof fetch?new Promise(function(c){c(b())}):fetch(m,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+m+
"'";return b.arrayBuffer()}).catch(function(){return b()})}function e(b){function pa(b){r=b.exports;if(r.memory){b=r.memory;var c=a.buffer;b.byteLength<c.byteLength&&v("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");c=new Int8Array(c);(new Int8Array(b)).set(c);a.buffer=buffer=b;ja()}a.asm=r;a.usingWasm=!0;P--;a.monitorRunDependencies&&a.monitorRunDependencies(P);assert(T["wasm-instantiate"]);delete T["wasm-instantiate"];0==P&&(null!==Q&&
(clearInterval(Q),Q=null),S&&(b=S,S=null,b()))}function f(b){assert(a===e,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");e=null;pa(b.instance)}function R(b){c().then(function(b){return WebAssembly.instantiate(b,n)}).then(b).catch(function(b){v("failed to asynchronously prepare wasm: "+b);x(b)})}if("object"!==typeof WebAssembly)return x("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead."),v("no native wasm support detected"),
!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return v("no native wasm Memory in use"),!1;b.memory=a.wasmMemory;n.global={NaN:NaN,Infinity:Infinity};n["global.Math"]=Math;n.env=b;ta();if(a.instantiateWasm)try{return a.instantiateWasm(n,pa)}catch(ya){return v("Module.instantiateWasm callback failed with error: "+ya),!1}var e=a;a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||U(m)||"function"!==typeof fetch?R(f):WebAssembly.instantiateStreaming(fetch(m,{credentials:"same-origin"}),
n).then(f).catch(function(b){v("wasm streaming compile failed: "+b);v("falling back to ArrayBuffer instantiation");R(f)});return{}}var g="wasm_interface.wast",m="wasm_interface.wasm",t="wasm_interface.temp.asm.js";"function"===typeof a.locateFile&&(U(g)||(g=a.locateFile(g)),U(m)||(m=a.locateFile(m)),U(t)||(t=a.locateFile(t)));var n={global:null,env:null,asm2wasm:da,parent:a},r=null;a.asmPreload=a.asm;var D=a.reallocBuffer;a.reallocBuffer=function(b){if("asmjs"===Aa)var c=D(b);else a:{var f=a.usingWasm?
65536:16777216;0<b%f&&(b+=f-b%f);f=a.buffer.byteLength;if(a.usingWasm)try{c=-1!==a.wasmMemory.grow((b-f)/65536)?a.buffer=a.wasmMemory.buffer:null;break a}catch(za){console.error("Module.reallocBuffer: Attempted to grow from "+f+" bytes to "+b+" bytes, but got error: "+za);c=null;break a}c=void 0}return c};var Aa="";a.asm=function(b,c){if(!c.table){b=a.wasmTableSize;void 0===b&&(b=1024);var f=a.wasmMaxTableSize;c.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==f?
new WebAssembly.Table({initial:b,maximum:f,element:"anyfunc"}):new WebAssembly.Table({initial:b,element:"anyfunc"}):Array(b);a.wasmTable=c.table}c.memoryBase||(c.memoryBase=a.STATIC_BASE);c.tableBase||(c.tableBase=0);c=e(c);assert(c,"no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return c}})();E=1024;F=E+3152;oa.push();a.STATIC_BASE=E;a.STATIC_BUMP=3152;var va=F;F+=16;
assert(0==va%8);function V(){return!!V.a}var W=0;function X(){W+=4;return B[W-4>>2]}var wa={};
function Y(b,c){W=c;try{var e=X(),g=X(),m=X();b=0;Y.a||(Y.a=[null,[],[]],Y.h=function(b,c){var e=Y.a[b];assert(e);if(0===c||10===c){b=1===b?w:v;a:{for(var g=c=0;e[g];)++g;if(16<g-c&&e.subarray&&ea)c=ea.decode(e.subarray(c,g));else for(g="";;){var f=e[c++];if(!f){c=g;break a}if(f&128){var m=e[c++]&63;if(192==(f&224))g+=String.fromCharCode((f&31)<<6|m);else{var n=e[c++]&63;if(224==(f&240))f=(f&15)<<12|m<<6|n;else{var r=e[c++]&63;if(240==(f&248))f=(f&7)<<18|m<<12|n<<6|r;else{var t=e[c++]&63;if(248==
(f&252))f=(f&3)<<24|m<<18|n<<12|r<<6|t;else{var D=e[c++]&63;f=(f&1)<<30|m<<24|n<<18|r<<12|t<<6|D}}}65536>f?g+=String.fromCharCode(f):(f-=65536,g+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else g+=String.fromCharCode(f)}}b(c);e.length=0}else e.push(c)});for(c=0;c<m;c++){for(var t=B[g+8*c>>2],n=B[g+(8*c+4)>>2],r=0;r<n;r++)Y.h(e,A[t+r]);b+=n}return b}catch(D){return x(D),-D.c}}assert(!G);var xa=F;F=F+4+15&-16;assert(F<M,"not enough memory for static allocation - increase TOTAL_MEMORY");K=xa;
H=ka=ca(F);I=H+ma;J=ca(I);B[K>>2]=J;G=!0;assert(J<M,"TOTAL_MEMORY not big enough for stack");a.wasmTableSize=41;a.wasmMaxTableSize=41;a.f={};
a.g={enlargeMemory:function(){la()},getTotalMemory:function(){return M},abortOnCannotGrowMemory:la,abortStackOverflow:function(b){x("Stack overflow! Attempted to allocate "+b+" bytes on the stack, but stack has only "+(I-ba()+b)+" bytes available!")},nullFunc_ii:function(b){v("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");v("Build with ASSERTIONS=2 for more info.");
x(b)},nullFunc_iiii:function(b){v("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");v("Build with ASSERTIONS=2 for more info.");x(b)},nullFunc_v:function(b){v("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
v("Build with ASSERTIONS=2 for more info.");x(b)},nullFunc_vi:function(b){v("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");v("Build with ASSERTIONS=2 for more info.");x(b)},nullFunc_viiii:function(b){v("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
v("Build with ASSERTIONS=2 for more info.");x(b)},nullFunc_viiiii:function(b){v("Invalid function pointer called with signature 'viiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");v("Build with ASSERTIONS=2 for more info.");x(b)},nullFunc_viiiiii:function(b){v("Invalid function pointer called with signature 'viiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
v("Build with ASSERTIONS=2 for more info.");x(b)},___cxa_allocate_exception:function(b){return Ba(b)},___cxa_throw:function(b){"uncaught_exception"in V?V.a++:V.a=1;throw b+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";},___lock:function(){},___setErrNo:function(b){a.___errno_location?B[a.___errno_location()>>2]=b:v("failed to set errno from JS");return b},___syscall140:function(b,c){W=c;
try{var e=wa.i();X();var g=X(),m=X(),t=X();FS.m(e,g,t);B[m>>2]=e.position;e.j&&0===g&&0===t&&(e.j=null);return 0}catch(n){return x(n),-n.c}},___syscall146:Y,___syscall54:function(b,c){W=c;return 0},___syscall6:function(b,c){W=c;try{var e=wa.i();FS.close(e);return 0}catch(g){return x(g),-g.c}},___unlock:function(){},_abort:function(){a.abort()},_emscripten_memcpy_big:function(b,c,e){A.set(A.subarray(c,c+e),b);return b},DYNAMICTOP_PTR:K,STACKTOP:ka,STACK_MAX:I};var Z=a.asm(a.f,a.g,buffer),Ca=Z.___errno_location;
Z.___errno_location=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ca.apply(null,arguments)};var Da=Z._fflush;Z._fflush=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Da.apply(null,arguments)};
var Ea=Z._free;Z._free=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ea.apply(null,arguments)};var Fa=Z._get_pitch_mpm_c;
Z._get_pitch_mpm_c=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Fa.apply(null,arguments)};var Ga=Z._malloc;Z._malloc=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ga.apply(null,arguments)};
var Ha=Z._sbrk;Z._sbrk=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ha.apply(null,arguments)};var Ia=Z.establishStackSpace;
Z.establishStackSpace=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ia.apply(null,arguments)};var Ja=Z.getTempRet0;
Z.getTempRet0=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ja.apply(null,arguments)};var Ka=Z.setTempRet0;Z.setTempRet0=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ka.apply(null,arguments)};
var La=Z.setThrew;Z.setThrew=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return La.apply(null,arguments)};var Ma=Z.stackAlloc;
Z.stackAlloc=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Ma.apply(null,arguments)};var Na=Z.stackRestore;Z.stackRestore=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Na.apply(null,arguments)};
var Oa=Z.stackSave;Z.stackSave=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return Oa.apply(null,arguments)};a.asm=Z;
a.___errno_location=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.___errno_location.apply(null,arguments)};
a._fflush=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm._fflush.apply(null,arguments)};a._free=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm._free.apply(null,arguments)};
a._get_pitch_mpm_c=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm._get_pitch_mpm_c.apply(null,arguments)};
var Ba=a._malloc=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm._malloc.apply(null,arguments)};a._sbrk=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm._sbrk.apply(null,arguments)};
a.establishStackSpace=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.establishStackSpace.apply(null,arguments)};
a.getTempRet0=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.getTempRet0.apply(null,arguments)};
a.setTempRet0=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.setTempRet0.apply(null,arguments)};
a.setThrew=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.setThrew.apply(null,arguments)};a.stackAlloc=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.stackAlloc.apply(null,arguments)};
a.stackRestore=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.stackRestore.apply(null,arguments)};
var ba=a.stackSave=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.stackSave.apply(null,arguments)};
a.dynCall_v=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.dynCall_v.apply(null,arguments)};
a.dynCall_vi=function(){assert(O,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");assert(!0,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");return a.asm.dynCall_vi.apply(null,arguments)};a.asm=Z;a.intArrayFromString||(a.intArrayFromString=function(){x("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.intArrayToString||(a.intArrayToString=function(){x("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.ccall||(a.ccall=function(){x("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.cwrap||(a.cwrap=function(){x("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.setValue||(a.setValue=function(){x("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.getValue||(a.getValue=function(){x("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.allocate||(a.allocate=function(){x("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.getMemory||(a.getMemory=function(){x("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});a.Pointer_stringify||(a.Pointer_stringify=function(){x("'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.AsciiToString||(a.AsciiToString=function(){x("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.stringToAscii||(a.stringToAscii=function(){x("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.UTF8ArrayToString||(a.UTF8ArrayToString=function(){x("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.UTF8ToString||(a.UTF8ToString=function(){x("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.stringToUTF8Array||(a.stringToUTF8Array=function(){x("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.stringToUTF8||(a.stringToUTF8=function(){x("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.lengthBytesUTF8||(a.lengthBytesUTF8=function(){x("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.UTF16ToString||(a.UTF16ToString=function(){x("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.stringToUTF16||(a.stringToUTF16=function(){x("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.lengthBytesUTF16||(a.lengthBytesUTF16=function(){x("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.UTF32ToString||(a.UTF32ToString=function(){x("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.stringToUTF32||(a.stringToUTF32=function(){x("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.lengthBytesUTF32||(a.lengthBytesUTF32=function(){x("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.allocateUTF8||(a.allocateUTF8=function(){x("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.stackTrace||(a.stackTrace=function(){x("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.addOnPreRun||(a.addOnPreRun=function(){x("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.addOnInit||(a.addOnInit=function(){x("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.addOnPreMain||(a.addOnPreMain=function(){x("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.addOnExit||(a.addOnExit=function(){x("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.addOnPostRun||(a.addOnPostRun=function(){x("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.writeStringToMemory||(a.writeStringToMemory=function(){x("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.writeArrayToMemory||(a.writeArrayToMemory=function(){x("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.writeAsciiToMemory||(a.writeAsciiToMemory=function(){x("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.addRunDependency||(a.addRunDependency=function(){x("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});a.removeRunDependency||(a.removeRunDependency=function(){x("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});
a.FS||(a.FS=function(){x("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.FS_createFolder||(a.FS_createFolder=function(){x("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});a.FS_createPath||(a.FS_createPath=function(){x("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});
a.FS_createDataFile||(a.FS_createDataFile=function(){x("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});a.FS_createPreloadedFile||(a.FS_createPreloadedFile=function(){x("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});
a.FS_createLazyFile||(a.FS_createLazyFile=function(){x("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});a.FS_createLink||(a.FS_createLink=function(){x("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});
a.FS_createDevice||(a.FS_createDevice=function(){x("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});a.FS_unlink||(a.FS_unlink=function(){x("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")});a.GL||(a.GL=function(){x("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.staticAlloc||(a.staticAlloc=function(){x("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.dynamicAlloc||(a.dynamicAlloc=function(){x("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.warnOnce||(a.warnOnce=function(){x("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.loadDynamicLibrary||(a.loadDynamicLibrary=function(){x("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.loadWebAssemblyModule||(a.loadWebAssemblyModule=function(){x("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.getLEB||(a.getLEB=function(){x("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.getFunctionTables||(a.getFunctionTables=function(){x("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.alignFunctionTables||(a.alignFunctionTables=function(){x("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.registerFunctions||(a.registerFunctions=function(){x("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.addFunction||(a.addFunction=function(){x("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.removeFunction||(a.removeFunction=function(){x("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.getFuncWrapper||(a.getFuncWrapper=function(){x("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.prettyPrint||(a.prettyPrint=function(){x("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.makeBigInt||(a.makeBigInt=function(){x("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.dynCall||(a.dynCall=function(){x("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.getCompilerSetting||(a.getCompilerSetting=function(){x("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.stackSave||(a.stackSave=function(){x("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.stackRestore||(a.stackRestore=function(){x("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.stackAlloc||(a.stackAlloc=function(){x("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.establishStackSpace||(a.establishStackSpace=function(){x("'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});
a.print||(a.print=function(){x("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.printErr||(a.printErr=function(){x("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")});a.ALLOC_NORMAL||Object.defineProperty(a,"ALLOC_NORMAL",{get:function(){x("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});a.ALLOC_STACK||Object.defineProperty(a,"ALLOC_STACK",{get:function(){x("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});
a.ALLOC_STATIC||Object.defineProperty(a,"ALLOC_STATIC",{get:function(){x("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});a.ALLOC_DYNAMIC||Object.defineProperty(a,"ALLOC_DYNAMIC",{get:function(){x("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});a.ALLOC_NONE||Object.defineProperty(a,"ALLOC_NONE",{get:function(){x("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});
a.then=function(b){if(a.calledRun)b(a);else{var c=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){c&&c();b(a)}}return a};S=function Pa(){a.calledRun||Qa();a.calledRun||(S=Pa)};
function Qa(){function b(){if(!a.calledRun&&(a.calledRun=!0,!z)){L();O||(O=!0,N(oa));L();N(qa);if(a.onRuntimeInitialized)a.onRuntimeInitialized();assert(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');L();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var b=a.postRun.shift();ra.unshift(b)}N(ra)}}if(!(0<P)){assert(0==(I&3));C[(I>>2)-1]=34821223;C[(I>>2)-2]=2310721022;if(a.preRun)for("function"==
typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)sa();N(na);0<P||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b(),L())}}a.run=Qa;var Ra=[];function x(b){if(a.onAbort)a.onAbort(b);void 0!==b?(w(b),v(b),b=JSON.stringify(b)):b="";z=!0;var c="abort("+b+") at "+ha()+"";Ra&&Ra.forEach(function(e){c=e(c,b)});throw c;}a.abort=x;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();
a.noExitRuntime=!0;Qa();


  return Module;
};
if (typeof exports === 'object' && typeof module === 'object')
    module.exports = Module;
  else if (typeof define === 'function' && define['amd'])
    define([], function() { return Module; });
  else if (typeof exports === 'object')
    exports["Module"] = Module;
  