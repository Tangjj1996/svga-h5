(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var svga_min = createCommonjsModule(function (module, exports) {
	!function(e,t){module.exports=t();}("undefined"!=typeof self?self:commonjsGlobal,function(){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i});},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=64)}([function(e,t,r){var i,n,o=e.exports=r(1),s=r(20);o.codegen=r(47),o.fetch=r(48),o.path=r(49),o.fs=o.inquire("fs"),o.toArray=function(e){if(e){for(var t=Object.keys(e),r=new Array(t.length),i=0;i<t.length;)r[i]=e[t[i++]];return r}return []},o.toObject=function(e){for(var t={},r=0;r<e.length;){var i=e[r++],n=e[r++];void 0!==n&&(t[i]=n);}return t};var a=/\\/g,f=/"/g;o.isReserved=function(e){return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)},o.safeProp=function(e){return !/^[$\w_]+$/.test(e)||o.isReserved(e)?'["'+e.replace(a,"\\\\").replace(f,'\\"')+'"]':"."+e},o.ucFirst=function(e){return e.charAt(0).toUpperCase()+e.substring(1)};var l=/_([a-z])/g;o.camelCase=function(e){return e.substring(0,1)+e.substring(1).replace(l,function(e,t){return t.toUpperCase()})},o.compareFieldsById=function(e,t){return e.id-t.id},o.decorateType=function(e,t){if(e.$type)return t&&e.$type.name!==t&&(o.decorateRoot.remove(e.$type),e.$type.name=t,o.decorateRoot.add(e.$type)),e.$type;i||(i=r(22));var n=new i(t||e.name);return o.decorateRoot.add(n),n.ctor=e,Object.defineProperty(e,"$type",{value:n,enumerable:!1}),Object.defineProperty(e.prototype,"$type",{value:n,enumerable:!1}),n};var u=0;o.decorateEnum=function(e){if(e.$type)return e.$type;n||(n=r(2));var t=new n("Enum"+u++,e);return o.decorateRoot.add(t),Object.defineProperty(e,"$type",{value:t,enumerable:!1}),t},Object.defineProperty(o,"decorateRoot",{get:function(){return s.decorated||(s.decorated=new(r(30)))}});},function(e,t,r){(function(e){function i(e,t,r){for(var i=Object.keys(t),n=0;n<i.length;++n)void 0!==e[i[n]]&&r||(e[i[n]]=t[i[n]]);return e}function n(e){function t(e,r){if(!(this instanceof t))return new t(e,r);Object.defineProperty(this,"message",{get:function(){return e}}),Error.captureStackTrace?Error.captureStackTrace(this,t):Object.defineProperty(this,"stack",{value:(new Error).stack||""}),r&&i(this,r);}return (t.prototype=Object.create(Error.prototype)).constructor=t,Object.defineProperty(t.prototype,"name",{get:function(){return e}}),t.prototype.toString=function(){return this.name+": "+this.message},t}var o=t;o.asPromise=r(17),o.base64=r(38),o.EventEmitter=r(39),o.float=r(40),o.inquire=r(18),o.utf8=r(41),o.pool=r(42),o.LongBits=r(43),o.global="undefined"!=typeof window&&window||void 0!==e&&e||"undefined"!=typeof self&&self||this,o.emptyArray=Object.freeze?Object.freeze([]):[],o.emptyObject=Object.freeze?Object.freeze({}):{},o.isNode=Boolean(o.global.process&&o.global.process.versions&&o.global.process.versions.node),o.isInteger=Number.isInteger||function(e){return "number"==typeof e&&isFinite(e)&&Math.floor(e)===e},o.isString=function(e){return "string"==typeof e||e instanceof String},o.isObject=function(e){return e&&"object"==typeof e},o.isset=o.isSet=function(e,t){var r=e[t];return !(null==r||!e.hasOwnProperty(t))&&("object"!=typeof r||(Array.isArray(r)?r.length:Object.keys(r).length)>0)},o.Buffer=function(){try{var e=o.inquire("buffer").Buffer;return e.prototype.utf8Write?e:null}catch(e){return null}}(),o._Buffer_from=null,o._Buffer_allocUnsafe=null,o.newBuffer=function(e){return "number"==typeof e?o.Buffer?o._Buffer_allocUnsafe(e):new o.Array(e):o.Buffer?o._Buffer_from(e):"undefined"==typeof Uint8Array?e:new Uint8Array(e)},o.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,o.Long=o.global.dcodeIO&&o.global.dcodeIO.Long||o.global.Long||o.inquire("long"),o.key2Re=/^true|false|0|1$/,o.key32Re=/^-?(?:0|[1-9][0-9]*)$/,o.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,o.longToHash=function(e){return e?o.LongBits.from(e).toHash():o.LongBits.zeroHash},o.longFromHash=function(e,t){var r=o.LongBits.fromHash(e);return o.Long?o.Long.fromBits(r.lo,r.hi,t):r.toNumber(Boolean(t))},o.merge=i,o.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)},o.newError=n,o.ProtocolError=n("ProtocolError"),o.oneOfGetter=function(e){for(var t={},r=0;r<e.length;++r)t[e[r]]=1;return function(){for(var e=Object.keys(this),r=e.length-1;r>-1;--r)if(1===t[e[r]]&&void 0!==this[e[r]]&&null!==this[e[r]])return e[r]}},o.oneOfSetter=function(e){return function(t){for(var r=0;r<e.length;++r)e[r]!==t&&delete this[e[r]];}},o.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},o._configure=function(){var e=o.Buffer;if(!e)return void(o._Buffer_from=o._Buffer_allocUnsafe=null);o._Buffer_from=e.from!==Uint8Array.from&&e.from||function(t,r){return new e(t,r)},o._Buffer_allocUnsafe=e.allocUnsafe||function(t){return new e(t)};};}).call(t,r(37));},function(e,t,r){function i(e,t,r,i,o){if(n.call(this,e,r),t&&"object"!=typeof t)throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=i,this.comments=o||{},this.reserved=void 0,t)for(var s=Object.keys(t),a=0;a<s.length;++a)"number"==typeof t[s[a]]&&(this.valuesById[this.values[s[a]]=t[s[a]]]=s[a]);}e.exports=i;var n=r(3);((i.prototype=Object.create(n.prototype)).constructor=i).className="Enum";var o=r(6),s=r(0);i.fromJSON=function(e,t){var r=new i(e,t.values,t.options,t.comment,t.comments);return r.reserved=t.reserved,r},i.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return s.toObject(["options",this.options,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"comment",t?this.comment:void 0,"comments",t?this.comments:void 0])},i.prototype.add=function(e,t,r){if(!s.isString(e))throw TypeError("name must be a string");if(!s.isInteger(t))throw TypeError("id must be an integer");if(void 0!==this.values[e])throw Error("duplicate name '"+e+"' in "+this);if(this.isReservedId(t))throw Error("id "+t+" is reserved in "+this);if(this.isReservedName(e))throw Error("name '"+e+"' is reserved in "+this);if(void 0!==this.valuesById[t]){if(!this.options||!this.options.allow_alias)throw Error("duplicate id "+t+" in "+this);this.values[e]=t;}else this.valuesById[this.values[e]=t]=e;return this.comments[e]=r||null,this},i.prototype.remove=function(e){if(!s.isString(e))throw TypeError("name must be a string");var t=this.values[e];if(null==t)throw Error("name '"+e+"' does not exist in "+this);return delete this.valuesById[t],delete this.values[e],delete this.comments[e],this},i.prototype.isReservedId=function(e){return o.isReservedId(this.reserved,e)},i.prototype.isReservedName=function(e){return o.isReservedName(this.reserved,e)};},function(e,t,r){function i(e,t){if(!o.isString(e))throw TypeError("name must be a string");if(t&&!o.isObject(t))throw TypeError("options must be an object");this.options=t,this.name=e,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null;}e.exports=i,i.className="ReflectionObject";var n,o=r(0);Object.defineProperties(i.prototype,{root:{get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}},fullName:{get:function(){for(var e=[this.name],t=this.parent;t;)e.unshift(t.name),t=t.parent;return e.join(".")}}}),i.prototype.toJSON=function(){throw Error()},i.prototype.onAdd=function(e){this.parent&&this.parent!==e&&this.parent.remove(this),this.parent=e,this.resolved=!1;var t=e.root;t instanceof n&&t._handleAdd(this);},i.prototype.onRemove=function(e){var t=e.root;t instanceof n&&t._handleRemove(this),this.parent=null,this.resolved=!1;},i.prototype.resolve=function(){return this.resolved?this:(this.root instanceof n&&(this.resolved=!0),this)},i.prototype.getOption=function(e){if(this.options)return this.options[e]},i.prototype.setOption=function(e,t,r){return r&&this.options&&void 0!==this.options[e]||((this.options||(this.options={}))[e]=t),this},i.prototype.setOptions=function(e,t){if(e)for(var r=Object.keys(e),i=0;i<r.length;++i)this.setOption(r[i],e[r[i]],t);return this},i.prototype.toString=function(){var e=this.constructor.className,t=this.fullName;return t.length?e+" "+t:e},i._configure=function(e){n=e;};},function(e,t,r){function i(e,t,r,i,o,s,u){if(f.isObject(i)?(u=o,s=i,i=o=void 0):f.isObject(o)&&(u=s,s=o,o=void 0),n.call(this,e,s),!f.isInteger(t)||t<0)throw TypeError("id must be a non-negative integer");if(!f.isString(r))throw TypeError("type must be a string");if(void 0!==i&&!l.test(i=i.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(void 0!==o&&!f.isString(o))throw TypeError("extend must be a string");this.rule=i&&"optional"!==i?i:void 0,this.type=r,this.id=t,this.extend=o||void 0,this.required="required"===i,this.optional=!this.required,this.repeated="repeated"===i,this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=!!f.Long&&void 0!==a.long[r],this.bytes="bytes"===r,this.resolvedType=null,this.extensionField=null,this.declaringField=null,this._packed=null,this.comment=u;}e.exports=i;var n=r(3);((i.prototype=Object.create(n.prototype)).constructor=i).className="Field";var o,s=r(2),a=r(7),f=r(0),l=/^required|optional|repeated$/;i.fromJSON=function(e,t){return new i(e,t.id,t.type,t.rule,t.extend,t.options,t.comment)},Object.defineProperty(i.prototype,"packed",{get:function(){return null===this._packed&&(this._packed=!1!==this.getOption("packed")),this._packed}}),i.prototype.setOption=function(e,t,r){return "packed"===e&&(this._packed=null),n.prototype.setOption.call(this,e,t,r)},i.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return f.toObject(["rule","optional"!==this.rule&&this.rule||void 0,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:void 0])},i.prototype.resolve=function(){if(this.resolved)return this;if(void 0===(this.typeDefault=a.defaults[this.type])&&(this.resolvedType=(this.declaringField?this.declaringField.parent:this.parent).lookupTypeOrEnum(this.type),this.resolvedType instanceof o?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]),this.options&&null!=this.options.default&&(this.typeDefault=this.options.default,this.resolvedType instanceof s&&"string"==typeof this.typeDefault&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(!0!==this.options.packed&&(void 0===this.options.packed||!this.resolvedType||this.resolvedType instanceof s)||delete this.options.packed,Object.keys(this.options).length||(this.options=void 0)),this.long)this.typeDefault=f.Long.fromNumber(this.typeDefault,"u"===this.type.charAt(0)),Object.freeze&&Object.freeze(this.typeDefault);else if(this.bytes&&"string"==typeof this.typeDefault){var e;f.base64.test(this.typeDefault)?f.base64.decode(this.typeDefault,e=f.newBuffer(f.base64.length(this.typeDefault)),0):f.utf8.write(this.typeDefault,e=f.newBuffer(f.utf8.length(this.typeDefault)),0),this.typeDefault=e;}return this.map?this.defaultValue=f.emptyObject:this.repeated?this.defaultValue=f.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof o&&(this.parent.ctor.prototype[this.name]=this.defaultValue),n.prototype.resolve.call(this)},i.d=function(e,t,r,n){return "function"==typeof t?t=f.decorateType(t).name:t&&"object"==typeof t&&(t=f.decorateEnum(t).name),function(o,s){f.decorateType(o.constructor).add(new i(s,e,t,r,{default:n}));}},i._configure=function(e){o=e;};},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.BezierPath=function e(t,r,n){i(this,e),this._d=t,this._transform=r,this._styles=n;};},function(e,t,r){function i(e,t){if(e&&e.length){for(var r={},i=0;i<e.length;++i)r[e[i].name]=e[i].toJSON(t);return r}}function n(e,t){s.call(this,e,t),this.nested=void 0,this._nestedArray=null;}function o(e){return e._nestedArray=null,e}e.exports=n;var s=r(3);((n.prototype=Object.create(s.prototype)).constructor=n).className="Namespace";var a,f,l,u=r(4),h=r(0);n.fromJSON=function(e,t){return new n(e,t.options).addJSON(t.nested)},n.arrayToJSON=i,n.isReservedId=function(e,t){if(e)for(var r=0;r<e.length;++r)if("string"!=typeof e[r]&&e[r][0]<=t&&e[r][1]>t)return !0;return !1},n.isReservedName=function(e,t){if(e)for(var r=0;r<e.length;++r)if(e[r]===t)return !0;return !1},Object.defineProperty(n.prototype,"nestedArray",{get:function(){return this._nestedArray||(this._nestedArray=h.toArray(this.nested))}}),n.prototype.toJSON=function(e){return h.toObject(["options",this.options,"nested",i(this.nestedArray,e)])},n.prototype.addJSON=function(e){var t=this;if(e)for(var r,i=Object.keys(e),o=0;o<i.length;++o)r=e[i[o]],t.add((void 0!==r.fields?a.fromJSON:void 0!==r.values?l.fromJSON:void 0!==r.methods?f.fromJSON:void 0!==r.id?u.fromJSON:n.fromJSON)(i[o],r));return this},n.prototype.get=function(e){return this.nested&&this.nested[e]||null},n.prototype.getEnum=function(e){if(this.nested&&this.nested[e]instanceof l)return this.nested[e].values;throw Error("no such enum: "+e)},n.prototype.add=function(e){if(!(e instanceof u&&void 0!==e.extend||e instanceof a||e instanceof l||e instanceof f||e instanceof n))throw TypeError("object must be a valid nested object");if(this.nested){var t=this.get(e.name);if(t){if(!(t instanceof n&&e instanceof n)||t instanceof a||t instanceof f)throw Error("duplicate name '"+e.name+"' in "+this);for(var r=t.nestedArray,i=0;i<r.length;++i)e.add(r[i]);this.remove(t),this.nested||(this.nested={}),e.setOptions(t.options,!0);}}else this.nested={};return this.nested[e.name]=e,e.onAdd(this),o(this)},n.prototype.remove=function(e){if(!(e instanceof s))throw TypeError("object must be a ReflectionObject");if(e.parent!==this)throw Error(e+" is not a member of "+this);return delete this.nested[e.name],Object.keys(this.nested).length||(this.nested=void 0),e.onRemove(this),o(this)},n.prototype.define=function(e,t){if(h.isString(e))e=e.split(".");else if(!Array.isArray(e))throw TypeError("illegal path");if(e&&e.length&&""===e[0])throw Error("path must be relative");for(var r=this;e.length>0;){var i=e.shift();if(r.nested&&r.nested[i]){if(!((r=r.nested[i])instanceof n))throw Error("path conflicts with non-namespace objects")}else r.add(r=new n(i));}return t&&r.addJSON(t),r},n.prototype.resolveAll=function(){for(var e=this.nestedArray,t=0;t<e.length;)e[t]instanceof n?e[t++].resolveAll():e[t++].resolve();return this.resolve()},n.prototype.lookup=function(e,t,r){if("boolean"==typeof t?(r=t,t=void 0):t&&!Array.isArray(t)&&(t=[t]),h.isString(e)&&e.length){if("."===e)return this.root;e=e.split(".");}else if(!e.length)return this;if(""===e[0])return this.root.lookup(e.slice(1),t);var i=this.get(e[0]);if(i){if(1===e.length){if(!t||t.indexOf(i.constructor)>-1)return i}else if(i instanceof n&&(i=i.lookup(e.slice(1),t,!0)))return i}else for(var o=0;o<this.nestedArray.length;++o)if(this._nestedArray[o]instanceof n&&(i=this._nestedArray[o].lookup(e,t,!0)))return i;return null===this.parent||r?null:this.parent.lookup(e,t)},n.prototype.lookupType=function(e){var t=this.lookup(e,[a]);if(!t)throw Error("no such type: "+e);return t},n.prototype.lookupEnum=function(e){var t=this.lookup(e,[l]);if(!t)throw Error("no such Enum '"+e+"' in "+this);return t},n.prototype.lookupTypeOrEnum=function(e){var t=this.lookup(e,[a,l]);if(!t)throw Error("no such Type or Enum '"+e+"' in "+this);return t},n.prototype.lookupService=function(e){var t=this.lookup(e,[f]);if(!t)throw Error("no such Service '"+e+"' in "+this);return t},n._configure=function(e,t,r){a=e,f=t,l=r;};},function(e,t,r){function i(e,t){var r=0,i={};for(t|=0;r<e.length;)i[s[r+t]]=e[r++];return i}var n=t,o=r(0),s=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];n.basic=i([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),n.defaults=i([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",o.emptyArray,null]),n.long=i([0,0,0,1,1],7),n.mapKey=i([0,0,0,5,5,0,0,0,1,1,0,2],2),n.packed=i([1,5,0,0,0,5,5,0,0,0,1,1,0]);},function(e,t,r){function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)i(r,n)&&(e[n]=r[n]);}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var o={arraySet:function(e,t,r,i,n){if(t.subarray&&e.subarray)return void e.set(t.subarray(r,r+i),n);for(var o=0;o<i;o++)e[n+o]=t[r+o];},flattenChunks:function(e){var t,r,i,n,o,s;for(i=0,t=0,r=e.length;t<r;t++)i+=e[t].length;for(s=new Uint8Array(i),n=0,t=0,r=e.length;t<r;t++)o=e[t],s.set(o,n),n+=o.length;return s}},s={arraySet:function(e,t,r,i,n){for(var o=0;o<i;o++)e[n+o]=t[r+o];},flattenChunks:function(e){return [].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,o)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,s));},t.setTyped(n);},function(e,t,r){function i(e,t,r){this.fn=e,this.len=t,this.next=void 0,this.val=r;}function n(){}function o(e){this.head=e.head,this.tail=e.tail,this.len=e.len,this.next=e.states;}function s(){this.len=0,this.head=new i(n,0,0),this.tail=this.head,this.states=null;}function a(e,t,r){t[r]=255&e;}function f(e,t,r){for(;e>127;)t[r++]=127&e|128,e>>>=7;t[r]=e;}function l(e,t){this.len=e,this.next=void 0,this.val=t;}function u(e,t,r){for(;e.hi;)t[r++]=127&e.lo|128,e.lo=(e.lo>>>7|e.hi<<25)>>>0,e.hi>>>=7;for(;e.lo>127;)t[r++]=127&e.lo|128,e.lo=e.lo>>>7;t[r++]=e.lo;}function h(e,t,r){t[r]=255&e,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24;}e.exports=s;var c,d=r(1),p=d.LongBits,y=d.base64,m=d.utf8,v=function(){return d.Buffer?function(){return (s.create=function(){return new c})()}:function(){return new s}};s.create=v(),s.alloc=function(e){return new d.Array(e)},d.Array!==Array&&(s.alloc=d.pool(s.alloc,d.Array.prototype.subarray)),s.prototype._push=function(e,t,r){return this.tail=this.tail.next=new i(e,t,r),this.len+=t,this},l.prototype=Object.create(i.prototype),l.prototype.fn=f,s.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new l((e>>>=0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this},s.prototype.int32=function(e){return e<0?this._push(u,10,p.fromNumber(e)):this.uint32(e)},s.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)},s.prototype.uint64=function(e){var t=p.from(e);return this._push(u,t.length(),t)},s.prototype.int64=s.prototype.uint64,s.prototype.sint64=function(e){var t=p.from(e).zzEncode();return this._push(u,t.length(),t)},s.prototype.bool=function(e){return this._push(a,1,e?1:0)},s.prototype.fixed32=function(e){return this._push(h,4,e>>>0)},s.prototype.sfixed32=s.prototype.fixed32,s.prototype.fixed64=function(e){var t=p.from(e);return this._push(h,4,t.lo)._push(h,4,t.hi)},s.prototype.sfixed64=s.prototype.fixed64,s.prototype.float=function(e){return this._push(d.float.writeFloatLE,4,e)},s.prototype.double=function(e){return this._push(d.float.writeDoubleLE,8,e)};var g=d.Array.prototype.set?function(e,t,r){t.set(e,r);}:function(e,t,r){for(var i=0;i<e.length;++i)t[r+i]=e[i];};s.prototype.bytes=function(e){var t=e.length>>>0;if(!t)return this._push(a,1,0);if(d.isString(e)){var r=s.alloc(t=y.length(e));y.decode(e,r,0),e=r;}return this.uint32(t)._push(g,t,e)},s.prototype.string=function(e){var t=m.length(e);return t?this.uint32(t)._push(m.write,t,e):this._push(a,1,0)},s.prototype.fork=function(){return this.states=new o(this),this.head=this.tail=new i(n,0,0),this.len=0,this},s.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new i(n,0,0),this.len=0),this},s.prototype.ldelim=function(){var e=this.head,t=this.tail,r=this.len;return this.reset().uint32(r),r&&(this.tail.next=e.next,this.tail=t,this.len+=r),this},s.prototype.finish=function(){for(var e=this.head.next,t=this.constructor.alloc(this.len),r=0;e;)e.fn(e.val,t,r),r+=e.len,e=e.next;return t},s._configure=function(e){c=e,s.create=v(),c._configure();};},function(e,t,r){function i(e,t){return RangeError("index out of range: "+e.pos+" + "+(t||1)+" > "+e.len)}function n(e){this.buf=e,this.pos=0,this.len=e.length;}function o(){var e=new u(0,0),t=0;if(!(this.len-this.pos>4)){for(;t<3;++t){if(this.pos>=this.len)throw i(this);if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128)return e}return e.lo=(e.lo|(127&this.buf[this.pos++])<<7*t)>>>0,e}for(;t<4;++t)if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128)return e;if(e.lo=(e.lo|(127&this.buf[this.pos])<<28)>>>0,e.hi=(e.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return e;if(t=0,this.len-this.pos>4){for(;t<5;++t)if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128)return e}else for(;t<5;++t){if(this.pos>=this.len)throw i(this);if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128)return e}throw Error("invalid varint encoding")}function s(e,t){return (e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0}function a(){if(this.pos+8>this.len)throw i(this,8);return new u(s(this.buf,this.pos+=4),s(this.buf,this.pos+=4))}e.exports=n;var f,l=r(1),u=l.LongBits,h=l.utf8,c="undefined"!=typeof Uint8Array?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new n(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new n(e);throw Error("illegal buffer")},d=function(){return l.Buffer?function(e){return (n.create=function(e){return l.Buffer.isBuffer(e)?new f(e):c(e)})(e)}:c};n.create=d(),n.prototype._slice=l.Array.prototype.subarray||l.Array.prototype.slice,n.prototype.uint32=function(){var e=4294967295;return function(){if(e=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128)return e;if(e=(e|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)return e;if(e=(e|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)return e;if(e=(e|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)return e;if(e=(e|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128)return e;if((this.pos+=5)>this.len)throw this.pos=this.len,i(this,10);return e}}(),n.prototype.int32=function(){return 0|this.uint32()},n.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(1&e)|0},n.prototype.bool=function(){return 0!==this.uint32()},n.prototype.fixed32=function(){if(this.pos+4>this.len)throw i(this,4);return s(this.buf,this.pos+=4)},n.prototype.sfixed32=function(){if(this.pos+4>this.len)throw i(this,4);return 0|s(this.buf,this.pos+=4)},n.prototype.float=function(){if(this.pos+4>this.len)throw i(this,4);var e=l.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e},n.prototype.double=function(){if(this.pos+8>this.len)throw i(this,4);var e=l.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e},n.prototype.bytes=function(){var e=this.uint32(),t=this.pos,r=this.pos+e;if(r>this.len)throw i(this,e);return this.pos+=e,Array.isArray(this.buf)?this.buf.slice(t,r):t===r?new this.buf.constructor(0):this._slice.call(this.buf,t,r)},n.prototype.string=function(){var e=this.bytes();return h.read(e,0,e.length)},n.prototype.skip=function(e){if("number"==typeof e){if(this.pos+e>this.len)throw i(this,e);this.pos+=e;}else do{if(this.pos>=this.len)throw i(this)}while(128&this.buf[this.pos++]);return this},n.prototype.skipType=function(e){switch(e){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(e=7&this.uint32());)this.skipType(e);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+e+" at offset "+this.pos)}return this},n._configure=function(e){f=e,n.create=d(),f._configure();var t=l.Long?"toLong":"toNumber";l.merge(n.prototype,{int64:function(){return o.call(this)[t](!1)},uint64:function(){return o.call(this)[t](!0)},sint64:function(){return o.call(this).zzDecode()[t](!1)},fixed64:function(){return a.call(this)[t](!0)},sfixed64:function(){return a.call(this)[t](!1)}});};},function(e,t,r){function i(e,t,r,i){if(Array.isArray(t)||(r=t,t=void 0),o.call(this,e,r),void 0!==t&&!Array.isArray(t))throw TypeError("fieldNames must be an Array");this.oneof=t||[],this.fieldsArray=[],this.comment=i;}function n(e){if(e.parent)for(var t=0;t<e.fieldsArray.length;++t)e.fieldsArray[t].parent||e.parent.add(e.fieldsArray[t]);}e.exports=i;var o=r(3);((i.prototype=Object.create(o.prototype)).constructor=i).className="OneOf";var s=r(4),a=r(0);i.fromJSON=function(e,t){return new i(e,t.oneof,t.options,t.comment)},i.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return a.toObject(["options",this.options,"oneof",this.oneof,"comment",t?this.comment:void 0])},i.prototype.add=function(e){if(!(e instanceof s))throw TypeError("field must be a Field");return e.parent&&e.parent!==this.parent&&e.parent.remove(e),this.oneof.push(e.name),this.fieldsArray.push(e),e.partOf=this,n(this),this},i.prototype.remove=function(e){if(!(e instanceof s))throw TypeError("field must be a Field");var t=this.fieldsArray.indexOf(e);if(t<0)throw Error(e+" is not a member of "+this);return this.fieldsArray.splice(t,1),t=this.oneof.indexOf(e.name),t>-1&&this.oneof.splice(t,1),e.partOf=null,this},i.prototype.onAdd=function(e){o.prototype.onAdd.call(this,e);for(var t=this,r=0;r<this.oneof.length;++r){var i=e.get(this.oneof[r]);i&&!i.partOf&&(i.partOf=t,t.fieldsArray.push(i));}n(this);},i.prototype.onRemove=function(e){for(var t,r=0;r<this.fieldsArray.length;++r)(t=this.fieldsArray[r]).parent&&t.parent.remove(t);o.prototype.onRemove.call(this,e);},i.d=function(){for(var e=new Array(arguments.length),t=0;t<arguments.length;)e[t]=arguments[t++];return function(t,r){a.decorateType(t.constructor).add(new i(r,e)),Object.defineProperty(t,r,{get:a.oneOfGetter(e),set:a.oneOfSetter(e)});}};},function(e,t,r){function i(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)this[t[r]]=e[t[r]];}e.exports=i;var n=r(1);i.create=function(e){return this.$type.create(e)},i.encode=function(e,t){return this.$type.encode(e,t)},i.encodeDelimited=function(e,t){return this.$type.encodeDelimited(e,t)},i.decode=function(e){return this.$type.decode(e)},i.decodeDelimited=function(e){return this.$type.decodeDelimited(e)},i.verify=function(e){return this.$type.verify(e)},i.fromObject=function(e){return this.$type.fromObject(e)},i.toObject=function(e,t){return this.$type.toObject(e,t)},i.prototype.toJSON=function(){return this.$type.toObject(this,n.toJSONOptions)};},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Parser=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),o=r(31),s=r(50),a=function(e){return e&&e.__esModule?e:{default:e}}(s);t.Parser=function(){function e(){i(this,e);}return n(e,[{key:"load",value:function(e,t,r){this.loadViaWorker(e,t,r);}},{key:"loadViaWorker",value:function(e,t,r){(0, a.default)(e,function(e){var r=e.movie;r.version=e.ver;var i=e.images,n=new o.VideoEntity(r,i);t(n);},r);}}]),e}();},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0}),t.RectPath=void 0;var s=r(5);t.RectPath=function(e){function t(e,r,o,s,a,f,l){i(this,t);var u=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return u._x=e,u._y=r,u._width=o,u._height=s,u._cornerRadius=a,u._transform=f,u._styles=l,u}return o(t,e),t}(s.BezierPath);},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0}),t.EllipsePath=void 0;var s=r(5);t.EllipsePath=function(e){function t(e,r,o,s,a,f){i(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return l._x=e,l._y=r,l._radiusX=o,l._radiusY=s,l._transform=a,l._styles=f,l}return o(t,e),t}(s.BezierPath);},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=r(34),n=JSON.parse('{"nested":{"com":{"nested":{"opensource":{"nested":{"svga":{"options":{"objc_class_prefix":"SVGAProto","java_package":"com.opensource.svgaplayer.proto"},"nested":{"MovieParams":{"fields":{"viewBoxWidth":{"type":"float","id":1},"viewBoxHeight":{"type":"float","id":2},"fps":{"type":"int32","id":3},"frames":{"type":"int32","id":4}}},"SpriteEntity":{"fields":{"imageKey":{"type":"string","id":1},"frames":{"rule":"repeated","type":"FrameEntity","id":2},"matteKey":{"type":"string","id":3}}},"AudioEntity":{"fields":{"audioKey":{"type":"string","id":1},"startFrame":{"type":"int32","id":2},"endFrame":{"type":"int32","id":3},"startTime":{"type":"int32","id":4},"totalTime":{"type":"int32","id":5}}},"Layout":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4}}},"Transform":{"fields":{"a":{"type":"float","id":1},"b":{"type":"float","id":2},"c":{"type":"float","id":3},"d":{"type":"float","id":4},"tx":{"type":"float","id":5},"ty":{"type":"float","id":6}}},"ShapeEntity":{"oneofs":{"args":{"oneof":["shape","rect","ellipse"]}},"fields":{"type":{"type":"ShapeType","id":1},"shape":{"type":"ShapeArgs","id":2},"rect":{"type":"RectArgs","id":3},"ellipse":{"type":"EllipseArgs","id":4},"styles":{"type":"ShapeStyle","id":10},"transform":{"type":"Transform","id":11}},"nested":{"ShapeType":{"values":{"SHAPE":0,"RECT":1,"ELLIPSE":2,"KEEP":3}},"ShapeArgs":{"fields":{"d":{"type":"string","id":1}}},"RectArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4},"cornerRadius":{"type":"float","id":5}}},"EllipseArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"radiusX":{"type":"float","id":3},"radiusY":{"type":"float","id":4}}},"ShapeStyle":{"fields":{"fill":{"type":"RGBAColor","id":1},"stroke":{"type":"RGBAColor","id":2},"strokeWidth":{"type":"float","id":3},"lineCap":{"type":"LineCap","id":4},"lineJoin":{"type":"LineJoin","id":5},"miterLimit":{"type":"float","id":6},"lineDashI":{"type":"float","id":7},"lineDashII":{"type":"float","id":8},"lineDashIII":{"type":"float","id":9}},"nested":{"RGBAColor":{"fields":{"r":{"type":"float","id":1},"g":{"type":"float","id":2},"b":{"type":"float","id":3},"a":{"type":"float","id":4}}},"LineCap":{"values":{"LineCap_BUTT":0,"LineCap_ROUND":1,"LineCap_SQUARE":2}},"LineJoin":{"values":{"LineJoin_MITER":0,"LineJoin_ROUND":1,"LineJoin_BEVEL":2}}}}}},"FrameEntity":{"fields":{"alpha":{"type":"float","id":1},"layout":{"type":"Layout","id":2},"transform":{"type":"Transform","id":3},"clipPath":{"type":"string","id":4},"shapes":{"rule":"repeated","type":"ShapeEntity","id":5}}},"MovieEntity":{"fields":{"version":{"type":"string","id":1},"params":{"type":"MovieParams","id":2},"images":{"keyType":"string","type":"bytes","id":3},"sprites":{"rule":"repeated","type":"SpriteEntity","id":4},"audios":{"rule":"repeated","type":"AudioEntity","id":5}}}}}}}}}}}'),o=t.proto=i.Root.fromJSON(n);t.ProtoMovieEntity=o.lookupType("com.opensource.svga.MovieEntity");},function(e,t,r){function i(e,t){for(var r=new Array(arguments.length-1),i=0,n=2,o=!0;n<arguments.length;)r[i++]=arguments[n++];return new Promise(function(n,s){r[i]=function(e){if(o)if(o=!1,e)s(e);else {for(var t=new Array(arguments.length-1),r=0;r<t.length;)t[r++]=arguments[r];n.apply(null,t);}};try{e.apply(t||null,r);}catch(e){o&&(o=!1,s(e));}})}e.exports=i;},function(module,exports,__webpack_require__){function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}module.exports=inquire;},function(e,t,r){t.Service=r(46);},function(e,t,r){e.exports={};},function(e,t,r){function i(e,t,r,i){return t.resolvedType.group?e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)",r,i,(t.id<<3|3)>>>0,(t.id<<3|4)>>>0):e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",r,i,(t.id<<3|2)>>>0)}function n(e){for(var t,r,n=a.codegen(["m","w"],e.name+"$encode")("if(!w)")("w=Writer.create()"),f=e.fieldsArray.slice().sort(a.compareFieldsById),t=0;t<f.length;++t){var l=f[t].resolve(),u=e._fieldsArray.indexOf(l),h=l.resolvedType instanceof o?"int32":l.type,c=s.basic[h];r="m"+a.safeProp(l.name),l.map?(n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",r,l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",r)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(l.id<<3|2)>>>0,8|s.mapKey[l.keyType],l.keyType),void 0===c?n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",u,r):n(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|c,h,r),n("}")("}")):l.repeated?(n("if(%s!=null&&%s.length){",r,r),l.packed&&void 0!==s.packed[h]?n("w.uint32(%i).fork()",(l.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",r)("w.%s(%s[i])",h,r)("w.ldelim()"):(n("for(var i=0;i<%s.length;++i)",r),void 0===c?i(n,l,u,r+"[i]"):n("w.uint32(%i).%s(%s[i])",(l.id<<3|c)>>>0,h,r)),n("}")):(l.optional&&n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",r,l.name),void 0===c?i(n,l,u,r):n("w.uint32(%i).%s(%s)",(l.id<<3|c)>>>0,h,r));}return n("return w")}e.exports=n;var o=r(2),s=r(7),a=r(0);},function(e,t,r){function i(e,t){o.call(this,e,t),this.fields={},this.oneofs=void 0,this.extensions=void 0,this.reserved=void 0,this.group=void 0,this._fieldsById=null,this._fieldsArray=null,this._oneofsArray=null,this._ctor=null;}function n(e){return e._fieldsById=e._fieldsArray=e._oneofsArray=null,delete e.encode,delete e.decode,delete e.verify,e}e.exports=i;var o=r(6);((i.prototype=Object.create(o.prototype)).constructor=i).className="Type";var s=r(2),a=r(11),f=r(4),l=r(23),u=r(24),h=r(12),c=r(10),d=r(9),p=r(0),y=r(21),m=r(26),v=r(27),g=r(28),b=r(29);Object.defineProperties(i.prototype,{fieldsById:{get:function(){if(this._fieldsById)return this._fieldsById;this._fieldsById={};for(var e=Object.keys(this.fields),t=0;t<e.length;++t){var r=this.fields[e[t]],i=r.id;if(this._fieldsById[i])throw Error("duplicate id "+i+" in "+this);this._fieldsById[i]=r;}return this._fieldsById}},fieldsArray:{get:function(){return this._fieldsArray||(this._fieldsArray=p.toArray(this.fields))}},oneofsArray:{get:function(){return this._oneofsArray||(this._oneofsArray=p.toArray(this.oneofs))}},ctor:{get:function(){return this._ctor||(this.ctor=i.generateConstructor(this)())},set:function(e){var t=e.prototype;t instanceof h||((e.prototype=new h).constructor=e,p.merge(e.prototype,t)),e.$type=e.prototype.$type=this,p.merge(e,h,!0),this._ctor=e;for(var r=0;r<this.fieldsArray.length;++r)this._fieldsArray[r].resolve();var i={};for(r=0;r<this.oneofsArray.length;++r)i[this._oneofsArray[r].resolve().name]={get:p.oneOfGetter(this._oneofsArray[r].oneof),set:p.oneOfSetter(this._oneofsArray[r].oneof)};r&&Object.defineProperties(e.prototype,i);}}}),i.generateConstructor=function(e){for(var t,r=p.codegen(["p"],e.name),i=0;i<e.fieldsArray.length;++i)(t=e._fieldsArray[i]).map?r("this%s={}",p.safeProp(t.name)):t.repeated&&r("this%s=[]",p.safeProp(t.name));return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")},i.fromJSON=function(e,t){var r=new i(e,t.options);r.extensions=t.extensions,r.reserved=t.reserved;for(var n=Object.keys(t.fields),h=0;h<n.length;++h)r.add((void 0!==t.fields[n[h]].keyType?l.fromJSON:f.fromJSON)(n[h],t.fields[n[h]]));if(t.oneofs)for(n=Object.keys(t.oneofs),h=0;h<n.length;++h)r.add(a.fromJSON(n[h],t.oneofs[n[h]]));if(t.nested)for(n=Object.keys(t.nested),h=0;h<n.length;++h){var c=t.nested[n[h]];r.add((void 0!==c.id?f.fromJSON:void 0!==c.fields?i.fromJSON:void 0!==c.values?s.fromJSON:void 0!==c.methods?u.fromJSON:o.fromJSON)(n[h],c));}return t.extensions&&t.extensions.length&&(r.extensions=t.extensions),t.reserved&&t.reserved.length&&(r.reserved=t.reserved),t.group&&(r.group=!0),t.comment&&(r.comment=t.comment),r},i.prototype.toJSON=function(e){var t=o.prototype.toJSON.call(this,e),r=!!e&&Boolean(e.keepComments);return p.toObject(["options",t&&t.options||void 0,"oneofs",o.arrayToJSON(this.oneofsArray,e),"fields",o.arrayToJSON(this.fieldsArray.filter(function(e){return !e.declaringField}),e)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:void 0,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"group",this.group||void 0,"nested",t&&t.nested||void 0,"comment",r?this.comment:void 0])},i.prototype.resolveAll=function(){for(var e=this.fieldsArray,t=0;t<e.length;)e[t++].resolve();var r=this.oneofsArray;for(t=0;t<r.length;)r[t++].resolve();return o.prototype.resolveAll.call(this)},i.prototype.get=function(e){return this.fields[e]||this.oneofs&&this.oneofs[e]||this.nested&&this.nested[e]||null},i.prototype.add=function(e){if(this.get(e.name))throw Error("duplicate name '"+e.name+"' in "+this);if(e instanceof f&&void 0===e.extend){if(this._fieldsById?this._fieldsById[e.id]:this.fieldsById[e.id])throw Error("duplicate id "+e.id+" in "+this);if(this.isReservedId(e.id))throw Error("id "+e.id+" is reserved in "+this);if(this.isReservedName(e.name))throw Error("name '"+e.name+"' is reserved in "+this);return e.parent&&e.parent.remove(e),this.fields[e.name]=e,e.message=this,e.onAdd(this),n(this)}return e instanceof a?(this.oneofs||(this.oneofs={}),this.oneofs[e.name]=e,e.onAdd(this),n(this)):o.prototype.add.call(this,e)},i.prototype.remove=function(e){if(e instanceof f&&void 0===e.extend){if(!this.fields||this.fields[e.name]!==e)throw Error(e+" is not a member of "+this);return delete this.fields[e.name],e.parent=null,e.onRemove(this),n(this)}if(e instanceof a){if(!this.oneofs||this.oneofs[e.name]!==e)throw Error(e+" is not a member of "+this);return delete this.oneofs[e.name],e.parent=null,e.onRemove(this),n(this)}return o.prototype.remove.call(this,e)},i.prototype.isReservedId=function(e){return o.isReservedId(this.reserved,e)},i.prototype.isReservedName=function(e){return o.isReservedName(this.reserved,e)},i.prototype.create=function(e){return new this.ctor(e)},i.prototype.setup=function(){for(var e=this.fullName,t=[],r=0;r<this.fieldsArray.length;++r)t.push(this._fieldsArray[r].resolve().resolvedType);this.encode=y(this)({Writer:d,types:t,util:p}),this.decode=m(this)({Reader:c,types:t,util:p}),this.verify=v(this)({types:t,util:p}),this.fromObject=g.fromObject(this)({types:t,util:p}),this.toObject=g.toObject(this)({types:t,util:p});var i=b[e];if(i){var n=Object.create(this);n.fromObject=this.fromObject,this.fromObject=i.fromObject.bind(n),n.toObject=this.toObject,this.toObject=i.toObject.bind(n);}return this},i.prototype.encode=function(e,t){return this.setup().encode(e,t)},i.prototype.encodeDelimited=function(e,t){return this.encode(e,t&&t.len?t.fork():t).ldelim()},i.prototype.decode=function(e,t){return this.setup().decode(e,t)},i.prototype.decodeDelimited=function(e){return e instanceof c||(e=c.create(e)),this.decode(e,e.uint32())},i.prototype.verify=function(e){return this.setup().verify(e)},i.prototype.fromObject=function(e){return this.setup().fromObject(e)},i.prototype.toObject=function(e,t){return this.setup().toObject(e,t)},i.d=function(e){return function(t){p.decorateType(t,e);}};},function(e,t,r){function i(e,t,r,i,o,a){if(n.call(this,e,t,i,void 0,void 0,o,a),!s.isString(r))throw TypeError("keyType must be a string");this.keyType=r,this.resolvedKeyType=null,this.map=!0;}e.exports=i;var n=r(4);((i.prototype=Object.create(n.prototype)).constructor=i).className="MapField";var o=r(7),s=r(0);i.fromJSON=function(e,t){return new i(e,t.id,t.keyType,t.type,t.options,t.comment)},i.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return s.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",t?this.comment:void 0])},i.prototype.resolve=function(){if(this.resolved)return this;if(void 0===o.mapKey[this.keyType])throw Error("invalid key type: "+this.keyType);return n.prototype.resolve.call(this)},i.d=function(e,t,r){return "function"==typeof r?r=s.decorateType(r).name:r&&"object"==typeof r&&(r=s.decorateEnum(r).name),function(n,o){s.decorateType(n.constructor).add(new i(o,e,t,r));}};},function(e,t,r){function i(e,t){o.call(this,e,t),this.methods={},this._methodsArray=null;}function n(e){return e._methodsArray=null,e}e.exports=i;var o=r(6);((i.prototype=Object.create(o.prototype)).constructor=i).className="Service";var s=r(25),a=r(0),f=r(19);i.fromJSON=function(e,t){var r=new i(e,t.options);if(t.methods)for(var n=Object.keys(t.methods),o=0;o<n.length;++o)r.add(s.fromJSON(n[o],t.methods[n[o]]));return t.nested&&r.addJSON(t.nested),r.comment=t.comment,r},i.prototype.toJSON=function(e){var t=o.prototype.toJSON.call(this,e),r=!!e&&Boolean(e.keepComments);return a.toObject(["options",t&&t.options||void 0,"methods",o.arrayToJSON(this.methodsArray,e)||{},"nested",t&&t.nested||void 0,"comment",r?this.comment:void 0])},Object.defineProperty(i.prototype,"methodsArray",{get:function(){return this._methodsArray||(this._methodsArray=a.toArray(this.methods))}}),i.prototype.get=function(e){return this.methods[e]||o.prototype.get.call(this,e)},i.prototype.resolveAll=function(){for(var e=this.methodsArray,t=0;t<e.length;++t)e[t].resolve();return o.prototype.resolve.call(this)},i.prototype.add=function(e){if(this.get(e.name))throw Error("duplicate name '"+e.name+"' in "+this);return e instanceof s?(this.methods[e.name]=e,e.parent=this,n(this)):o.prototype.add.call(this,e)},i.prototype.remove=function(e){if(e instanceof s){if(this.methods[e.name]!==e)throw Error(e+" is not a member of "+this);return delete this.methods[e.name],e.parent=null,n(this)}return o.prototype.remove.call(this,e)},i.prototype.create=function(e,t,r){for(var i,n=new f.Service(e,t,r),o=0;o<this.methodsArray.length;++o){var s=a.lcFirst((i=this._methodsArray[o]).resolve().name).replace(/[^$\w_]/g,"");n[s]=a.codegen(["r","c"],a.isReserved(s)?s+"_":s)("return this.rpcCall(m,q,s,r,c)")({m:i,q:i.resolvedRequestType.ctor,s:i.resolvedResponseType.ctor});}return n};},function(e,t,r){function i(e,t,r,i,s,a,f,l){if(o.isObject(s)?(f=s,s=a=void 0):o.isObject(a)&&(f=a,a=void 0),void 0!==t&&!o.isString(t))throw TypeError("type must be a string");if(!o.isString(r))throw TypeError("requestType must be a string");if(!o.isString(i))throw TypeError("responseType must be a string");n.call(this,e,f),this.type=t||"rpc",this.requestType=r,this.requestStream=!!s||void 0,this.responseType=i,this.responseStream=!!a||void 0,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=l;}e.exports=i;var n=r(3);((i.prototype=Object.create(n.prototype)).constructor=i).className="Method";var o=r(0);i.fromJSON=function(e,t){return new i(e,t.type,t.requestType,t.responseType,t.requestStream,t.responseStream,t.options,t.comment)},i.prototype.toJSON=function(e){var t=!!e&&Boolean(e.keepComments);return o.toObject(["type","rpc"!==this.type&&this.type||void 0,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",t?this.comment:void 0])},i.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),n.prototype.resolve.call(this))};},function(e,t,r){function i(e){return "missing required '"+e.name+"'"}function n(e){var t=a.codegen(["r","l"],e.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(e.fieldsArray.filter(function(e){return e.map}).length?",k":""))("while(r.pos<c){")("var t=r.uint32()");e.group&&t("if((t&7)===4)")("break"),t("switch(t>>>3){");for(var r=0;r<e.fieldsArray.length;++r){var n=e._fieldsArray[r].resolve(),f=n.resolvedType instanceof o?"int32":n.type,l="m"+a.safeProp(n.name);t("case %i:",n.id),n.map?(t("r.skip().pos++")("if(%s===util.emptyObject)",l)("%s={}",l)("k=r.%s()",n.keyType)("r.pos++"),void 0!==s.long[n.keyType]?void 0===s.basic[f]?t('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())',l,r):t('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()',l,f):void 0===s.basic[f]?t("%s[k]=types[%i].decode(r,r.uint32())",l,r):t("%s[k]=r.%s()",l,f)):n.repeated?(t("if(!(%s&&%s.length))",l,l)("%s=[]",l),void 0!==s.packed[f]&&t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",l,f)("}else"),void 0===s.basic[f]?t(n.resolvedType.group?"%s.push(types[%i].decode(r))":"%s.push(types[%i].decode(r,r.uint32()))",l,r):t("%s.push(r.%s())",l,f)):void 0===s.basic[f]?t(n.resolvedType.group?"%s=types[%i].decode(r)":"%s=types[%i].decode(r,r.uint32())",l,r):t("%s=r.%s()",l,f),t("break");}for(t("default:")("r.skipType(t&7)")("break")("}")("}"),r=0;r<e._fieldsArray.length;++r){var u=e._fieldsArray[r];u.required&&t("if(!m.hasOwnProperty(%j))",u.name)("throw util.ProtocolError(%j,{instance:m})",i(u));}return t("return m")}e.exports=n;var o=r(2),s=r(7),a=r(0);},function(e,t,r){function i(e,t){return e.name+": "+t+(e.repeated&&"array"!==t?"[]":e.map&&"object"!==t?"{k:"+e.keyType+"}":"")+" expected"}function n(e,t,r,n){if(t.resolvedType)if(t.resolvedType instanceof a){e("switch(%s){",n)("default:")("return%j",i(t,"enum value"));for(var o=Object.keys(t.resolvedType.values),s=0;s<o.length;++s)e("case %i:",t.resolvedType.values[o[s]]);e("break")("}");}else e("{")("var e=types[%i].verify(%s);",r,n)("if(e)")("return%j+e",t.name+".")("}");else switch(t.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":e("if(!util.isInteger(%s))",n)("return%j",i(t,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",n,n,n,n)("return%j",i(t,"integer|Long"));break;case"float":case"double":e('if(typeof %s!=="number")',n)("return%j",i(t,"number"));break;case"bool":e('if(typeof %s!=="boolean")',n)("return%j",i(t,"boolean"));break;case"string":e("if(!util.isString(%s))",n)("return%j",i(t,"string"));break;case"bytes":e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',n,n,n)("return%j",i(t,"buffer"));}return e}function o(e,t,r){switch(t.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":e("if(!util.key32Re.test(%s))",r)("return%j",i(t,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":e("if(!util.key64Re.test(%s))",r)("return%j",i(t,"integer|Long key"));break;case"bool":e("if(!util.key2Re.test(%s))",r)("return%j",i(t,"boolean key"));}return e}function s(e){var t=f.codegen(["m"],e.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected"),r=e.oneofsArray,s={};r.length&&t("var p={}");for(var a=0;a<e.fieldsArray.length;++a){var l=e._fieldsArray[a].resolve(),u="m"+f.safeProp(l.name);if(l.optional&&t("if(%s!=null&&m.hasOwnProperty(%j)){",u,l.name),l.map)t("if(!util.isObject(%s))",u)("return%j",i(l,"object"))("var k=Object.keys(%s)",u)("for(var i=0;i<k.length;++i){"),o(t,l,"k[i]"),n(t,l,a,u+"[k[i]]")("}");else if(l.repeated)t("if(!Array.isArray(%s))",u)("return%j",i(l,"array"))("for(var i=0;i<%s.length;++i){",u),n(t,l,a,u+"[i]")("}");else {if(l.partOf){var h=f.safeProp(l.partOf.name);1===s[l.partOf.name]&&t("if(p%s===1)",h)("return%j",l.partOf.name+": multiple values"),s[l.partOf.name]=1,t("p%s=1",h);}n(t,l,a,u);}l.optional&&t("}");}return t("return null")}e.exports=s;var a=r(2),f=r(0);},function(e,t,r){function i(e,t,r,i){if(t.resolvedType)if(t.resolvedType instanceof s){e("switch(d%s){",i);for(var n=t.resolvedType.values,o=Object.keys(n),a=0;a<o.length;++a)t.repeated&&n[o[a]]===t.typeDefault&&e("default:"),e("case%j:",o[a])("case %i:",n[o[a]])("m%s=%j",i,n[o[a]])("break");e("}");}else e('if(typeof d%s!=="object")',i)("throw TypeError(%j)",t.fullName+": object expected")("m%s=types[%i].fromObject(d%s)",i,r,i);else {var f=!1;switch(t.type){case"double":case"float":e("m%s=Number(d%s)",i,i);break;case"uint32":case"fixed32":e("m%s=d%s>>>0",i,i);break;case"int32":case"sint32":case"sfixed32":e("m%s=d%s|0",i,i);break;case"uint64":f=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",i,i,f)('else if(typeof d%s==="string")',i)("m%s=parseInt(d%s,10)",i,i)('else if(typeof d%s==="number")',i)("m%s=d%s",i,i)('else if(typeof d%s==="object")',i)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",i,i,i,f?"true":"");break;case"bytes":e('if(typeof d%s==="string")',i)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",i,i,i)("else if(d%s.length)",i)("m%s=d%s",i,i);break;case"string":e("m%s=String(d%s)",i,i);break;case"bool":e("m%s=Boolean(d%s)",i,i);}}return e}function n(e,t,r,i){if(t.resolvedType)t.resolvedType instanceof s?e("d%s=o.enums===String?types[%i].values[m%s]:m%s",i,r,i,i):e("d%s=types[%i].toObject(m%s,o)",i,r,i);else {var n=!1;switch(t.type){case"double":case"float":e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",i,i,i,i);break;case"uint64":n=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":e('if(typeof m%s==="number")',i)("d%s=o.longs===String?String(m%s):m%s",i,i,i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",i,i,i,i,n?"true":"",i);break;case"bytes":e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",i,i,i,i,i);break;default:e("d%s=m%s",i,i);}}return e}var o=t,s=r(2),a=r(0);o.fromObject=function(e){var t=e.fieldsArray,r=a.codegen(["d"],e.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!t.length)return r("return new this.ctor");r("var m=new this.ctor");for(var n=0;n<t.length;++n){var o=t[n].resolve(),f=a.safeProp(o.name);o.map?(r("if(d%s){",f)('if(typeof d%s!=="object")',f)("throw TypeError(%j)",o.fullName+": object expected")("m%s={}",f)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",f),i(r,o,n,f+"[ks[i]]")("}")("}")):o.repeated?(r("if(d%s){",f)("if(!Array.isArray(d%s))",f)("throw TypeError(%j)",o.fullName+": array expected")("m%s=[]",f)("for(var i=0;i<d%s.length;++i){",f),i(r,o,n,f+"[i]")("}")("}")):(o.resolvedType instanceof s||r("if(d%s!=null){",f),i(r,o,n,f),o.resolvedType instanceof s||r("}"));}return r("return m")},o.toObject=function(e){var t=e.fieldsArray.slice().sort(a.compareFieldsById);if(!t.length)return a.codegen()("return {}");for(var r=a.codegen(["m","o"],e.name+"$toObject")("if(!o)")("o={}")("var d={}"),i=[],o=[],f=[],l=0;l<t.length;++l)t[l].partOf||(t[l].resolve().repeated?i:t[l].map?o:f).push(t[l]);if(i.length){for(r("if(o.arrays||o.defaults){"),l=0;l<i.length;++l)r("d%s=[]",a.safeProp(i[l].name));r("}");}if(o.length){for(r("if(o.objects||o.defaults){"),l=0;l<o.length;++l)r("d%s={}",a.safeProp(o[l].name));r("}");}if(f.length){for(r("if(o.defaults){"),l=0;l<f.length;++l){var u=f[l],h=a.safeProp(u.name);if(u.resolvedType instanceof s)r("d%s=o.enums===String?%j:%j",h,u.resolvedType.valuesById[u.typeDefault],u.typeDefault);else if(u.long)r("if(util.Long){")("var n=new util.Long(%i,%i,%j)",u.typeDefault.low,u.typeDefault.high,u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",h)("}else")("d%s=o.longs===String?%j:%i",h,u.typeDefault.toString(),u.typeDefault.toNumber());else if(u.bytes){var c="["+Array.prototype.slice.call(u.typeDefault).join(",")+"]";r("if(o.bytes===String)d%s=%j",h,String.fromCharCode.apply(String,u.typeDefault))("else{")("d%s=%s",h,c)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",h,h)("}");}else r("d%s=%j",h,u.typeDefault);}r("}");}var d=!1;for(l=0;l<t.length;++l){var u=t[l],p=e._fieldsArray.indexOf(u),h=a.safeProp(u.name);u.map?(d||(d=!0,r("var ks2")),r("if(m%s&&(ks2=Object.keys(m%s)).length){",h,h)("d%s={}",h)("for(var j=0;j<ks2.length;++j){"),n(r,u,p,h+"[ks2[j]]")("}")):u.repeated?(r("if(m%s&&m%s.length){",h,h)("d%s=[]",h)("for(var j=0;j<m%s.length;++j){",h),n(r,u,p,h+"[j]")("}")):(r("if(m%s!=null&&m.hasOwnProperty(%j)){",h,u.name),n(r,u,p,h),u.partOf&&r("if(o.oneofs)")("d%s=%j",a.safeProp(u.partOf.name),u.name)),r("}");}return r("return d")};},function(e,t,r){var i=t,n=r(12);i[".google.protobuf.Any"]={fromObject:function(e){if(e&&e["@type"]){var t=this.lookup(e["@type"]);if(t){var r="."===e["@type"].charAt(0)?e["@type"].substr(1):e["@type"];return this.create({type_url:"/"+r,value:t.encode(t.fromObject(e)).finish()})}}return this.fromObject(e)},toObject:function(e,t){if(t&&t.json&&e.type_url&&e.value){var r=e.type_url.substring(e.type_url.lastIndexOf("/")+1),i=this.lookup(r);i&&(e=i.decode(e.value));}if(!(e instanceof this.ctor)&&e instanceof n){var o=e.$type.toObject(e,t);return o["@type"]=e.$type.fullName,o}return this.toObject(e,t)}};},function(e,t,r){function i(e){s.call(this,"",e),this.deferred=[],this.files=[];}function n(){}function o(e,t){var r=t.parent.lookup(t.extend);if(r){var i=new u(t.fullName,t.id,t.type,t.rule,void 0,t.options);return i.declaringField=t,t.extensionField=i,r.add(i),!0}return !1}e.exports=i;var s=r(6);((i.prototype=Object.create(s.prototype)).constructor=i).className="Root";var a,f,l,u=r(4),h=r(2),c=r(11),d=r(0);i.fromJSON=function(e,t){return t||(t=new i),e.options&&t.setOptions(e.options),t.addJSON(e.nested)},i.prototype.resolvePath=d.path.resolve,i.prototype.load=function e(t,r,i){function o(e,t){if(i){var r=i;if(i=null,c)throw e;r(e,t);}}function s(e){var t=e.lastIndexOf("google/protobuf/");if(t>-1){var r=e.substring(t);if(r in l)return r}return null}function a(e,t){try{if(d.isString(t)&&"{"===t.charAt(0)&&(t=JSON.parse(t)),d.isString(t)){f.filename=e;var i,n=f(t,h,r),a=0;if(n.imports)for(;a<n.imports.length;++a)(i=s(n.imports[a])||h.resolvePath(e,n.imports[a]))&&u(i);if(n.weakImports)for(a=0;a<n.weakImports.length;++a)(i=s(n.weakImports[a])||h.resolvePath(e,n.weakImports[a]))&&u(i,!0);}else h.setOptions(t.options).addJSON(t.nested);}catch(e){o(e);}c||p||o(null,h);}function u(e,t){if(!(h.files.indexOf(e)>-1)){if(h.files.push(e),e in l)return void(c?a(e,l[e]):(++p,setTimeout(function(){--p,a(e,l[e]);})));if(c){var r;try{r=d.fs.readFileSync(e).toString("utf8");}catch(e){return void(t||o(e))}a(e,r);}else ++p,d.fetch(e,function(r,n){if(--p,i)return r?void(t?p||o(null,h):o(r)):void a(e,n)});}}"function"==typeof r&&(i=r,r=void 0);var h=this;if(!i)return d.asPromise(e,h,t,r);var c=i===n,p=0;d.isString(t)&&(t=[t]);for(var y,m=0;m<t.length;++m)(y=h.resolvePath("",t[m]))&&u(y);if(c)return h;p||o(null,h);},i.prototype.loadSync=function(e,t){if(!d.isNode)throw Error("not supported");return this.load(e,t,n)},i.prototype.resolveAll=function(){if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(e){return "'extend "+e.extend+"' in "+e.parent.fullName}).join(", "));return s.prototype.resolveAll.call(this)};var p=/^[A-Z]/;i.prototype._handleAdd=function(e){if(e instanceof u)void 0===e.extend||e.extensionField||o(this,e)||this.deferred.push(e);else if(e instanceof h)p.test(e.name)&&(e.parent[e.name]=e.values);else if(!(e instanceof c)){if(e instanceof a)for(var t=0;t<this.deferred.length;)o(this,this.deferred[t])?this.deferred.splice(t,1):++t;for(var r=0;r<e.nestedArray.length;++r)this._handleAdd(e._nestedArray[r]);p.test(e.name)&&(e.parent[e.name]=e);}},i.prototype._handleRemove=function(e){if(e instanceof u){if(void 0!==e.extend)if(e.extensionField)e.extensionField.parent.remove(e.extensionField),e.extensionField=null;else {var t=this.deferred.indexOf(e);t>-1&&this.deferred.splice(t,1);}}else if(e instanceof h)p.test(e.name)&&delete e.parent[e.name];else if(e instanceof s){for(var r=0;r<e.nestedArray.length;++r)this._handleRemove(e._nestedArray[r]);p.test(e.name)&&delete e.parent[e.name];}},i._configure=function(e,t,r){a=e,f=t,l=r;};},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.VideoEntity=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=r(32),a=r(16),f=a.ProtoMovieEntity;t.VideoEntity=function(){function e(t,r){i(this,e),this.version="",this.videoSize={width:0,height:0},this.FPS=20,this.frames=0,this.images={},this.sprites=[],this.audios=[],"object"===(void 0===t?"undefined":n(t))&&t.$type==f?("object"===n(t.params)&&(this.version=t.ver,this.videoSize.width=t.params.viewBoxWidth||0,this.videoSize.height=t.params.viewBoxHeight||0,this.FPS=t.params.fps||20,this.frames=t.params.frames||0),this.resetSprites(t),this.audios=t.audios):t&&(t.movie&&(t.movie.viewBox&&(this.videoSize.width=parseFloat(t.movie.viewBox.width)||0,this.videoSize.height=parseFloat(t.movie.viewBox.height)||0),this.version=t.ver,this.FPS=parseInt(t.movie.fps)||20,this.frames=parseInt(t.movie.frames)||0),this.resetSprites(t)),r&&(this.images=r);}return o(e,[{key:"resetSprites",value:function(e){e.sprites instanceof Array&&(this.sprites=e.sprites.map(function(e){return new s.SpriteEntity(e)}));}}]),e}();},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.SpriteEntity=void 0;var n=r(33);r(5),r(14),r(15),t.SpriteEntity=function e(t){i(this,e),this.matteKey=null,this.imageKey=null,this.frames=[],this.matteKey=t.matteKey,this.imageKey=t.imageKey,t.frames&&(this.frames=t.frames.map(function(e){return new n.FrameEntity(e)}));};},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.FrameEntity=void 0;var n=r(5);t.FrameEntity=function e(t){i(this,e),this.alpha=0,this.transform={a:1,b:0,c:0,d:1,tx:0,ty:0},this.layout={x:0,y:0,width:0,height:0},this.nx=0,this.ny=0,this.maskPath=null,this.shapes=[],this.alpha=parseFloat(t.alpha)||0,t.layout&&(this.layout.x=parseFloat(t.layout.x)||0,this.layout.y=parseFloat(t.layout.y)||0,this.layout.width=parseFloat(t.layout.width)||0,this.layout.height=parseFloat(t.layout.height)||0),t.transform&&(this.transform.a=parseFloat(t.transform.a)||1,this.transform.b=parseFloat(t.transform.b)||0,this.transform.c=parseFloat(t.transform.c)||0,this.transform.d=parseFloat(t.transform.d)||1,this.transform.tx=parseFloat(t.transform.tx)||0,this.transform.ty=parseFloat(t.transform.ty)||0),t.clipPath&&t.clipPath.length>0&&(this.maskPath=new n.BezierPath(t.clipPath,void 0,{fill:"#000000"})),t.shapes&&(t.shapes instanceof Array&&t.shapes.forEach(function(e){switch(e.pathArgs=e.args,e.type){case 0:e.type="shape",e.pathArgs=e.shape;break;case 1:e.type="rect",e.pathArgs=e.rect;break;case 2:e.type="ellipse",e.pathArgs=e.ellipse;break;case 3:e.type="keep";}if(e.styles){e.styles.fill&&("number"==typeof e.styles.fill.r&&(e.styles.fill[0]=e.styles.fill.r),"number"==typeof e.styles.fill.g&&(e.styles.fill[1]=e.styles.fill.g),"number"==typeof e.styles.fill.b&&(e.styles.fill[2]=e.styles.fill.b),"number"==typeof e.styles.fill.a&&(e.styles.fill[3]=e.styles.fill.a)),e.styles.stroke&&("number"==typeof e.styles.stroke.r&&(e.styles.stroke[0]=e.styles.stroke.r),"number"==typeof e.styles.stroke.g&&(e.styles.stroke[1]=e.styles.stroke.g),"number"==typeof e.styles.stroke.b&&(e.styles.stroke[2]=e.styles.stroke.b),"number"==typeof e.styles.stroke.a&&(e.styles.stroke[3]=e.styles.stroke.a));var t=e.styles.lineDash||[];switch(e.styles.lineDashI>0&&t.push(e.styles.lineDashI),e.styles.lineDashII>0&&(t.length<1&&t.push(0),t.push(e.styles.lineDashII),t.push(0)),e.styles.lineDashIII>0&&(t.length<2&&(t.push(0),t.push(0)),t[2]=e.styles.lineDashIII),e.styles.lineDash=t,e.styles.lineJoin){case 0:e.styles.lineJoin="miter";break;case 1:e.styles.lineJoin="round";break;case 2:e.styles.lineJoin="bevel";}switch(e.styles.lineCap){case 0:e.styles.lineCap="butt";break;case 1:e.styles.lineCap="round";break;case 2:e.styles.lineCap="square";}}}),t.shapes[0]&&"keep"===t.shapes[0].type?this.shapes=e.lastShapes:(this.shapes=t.shapes,e.lastShapes=t.shapes));var r=this.transform.a*this.layout.x+this.transform.c*this.layout.y+this.transform.tx,o=this.transform.a*(this.layout.x+this.layout.width)+this.transform.c*this.layout.y+this.transform.tx,s=this.transform.a*this.layout.x+this.transform.c*(this.layout.y+this.layout.height)+this.transform.tx,a=this.transform.a*(this.layout.x+this.layout.width)+this.transform.c*(this.layout.y+this.layout.height)+this.transform.tx,f=this.transform.b*this.layout.x+this.transform.d*this.layout.y+this.transform.ty,l=this.transform.b*(this.layout.x+this.layout.width)+this.transform.d*this.layout.y+this.transform.ty,u=this.transform.b*this.layout.x+this.transform.d*(this.layout.y+this.layout.height)+this.transform.ty,h=this.transform.b*(this.layout.x+this.layout.width)+this.transform.d*(this.layout.y+this.layout.height)+this.transform.ty;this.nx=Math.min(Math.min(s,a),Math.min(r,o)),this.ny=Math.min(Math.min(u,h),Math.min(f,l));};},function(e,t,r){e.exports=r(35);},function(e,t,r){function i(e,t,r){return "function"==typeof t?(r=t,t=new o.Root):t||(t=new o.Root),t.load(e,r)}function n(e,t){return t||(t=new o.Root),t.loadSync(e)}var o=e.exports=r(36);o.build="light",o.load=i,o.loadSync=n,o.encoder=r(21),o.decoder=r(26),o.verifier=r(27),o.converter=r(28),o.ReflectionObject=r(3),o.Namespace=r(6),o.Root=r(30),o.Enum=r(2),o.Type=r(22),o.Field=r(4),o.OneOf=r(11),o.MapField=r(23),o.Service=r(24),o.Method=r(25),o.Message=r(12),o.wrappers=r(29),o.types=r(7),o.util=r(0),o.ReflectionObject._configure(o.Root),o.Namespace._configure(o.Type,o.Service,o.Enum),o.Root._configure(o.Type),o.Field._configure(o.Type);},function(e,t,r){function i(){n.util._configure(),n.Writer._configure(n.BufferWriter),n.Reader._configure(n.BufferReader);}var n=t;n.build="minimal",n.Writer=r(9),n.BufferWriter=r(44),n.Reader=r(10),n.BufferReader=r(45),n.util=r(1),n.rpc=r(19),n.roots=r(20),n.configure=i,i();},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this");}catch(e){"object"==typeof window&&(r=window);}e.exports=r;},function(e,t,r){var i=t;i.length=function(e){var t=e.length;if(!t)return 0;for(var r=0;--t%4>1&&"="===e.charAt(t);)++r;return Math.ceil(3*e.length)/4-r};for(var n=new Array(64),o=new Array(123),s=0;s<64;)o[n[s]=s<26?s+65:s<52?s+71:s<62?s-4:s-59|43]=s++;i.encode=function(e,t,r){for(var i,o=null,s=[],a=0,f=0;t<r;){var l=e[t++];switch(f){case 0:s[a++]=n[l>>2],i=(3&l)<<4,f=1;break;case 1:s[a++]=n[i|l>>4],i=(15&l)<<2,f=2;break;case 2:s[a++]=n[i|l>>6],s[a++]=n[63&l],f=0;}a>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,s)),a=0);}return f&&(s[a++]=n[i],s[a++]=61,1===f&&(s[a++]=61)),o?(a&&o.push(String.fromCharCode.apply(String,s.slice(0,a))),o.join("")):String.fromCharCode.apply(String,s.slice(0,a))};i.decode=function(e,t,r){for(var i,n=r,s=0,a=0;a<e.length;){var f=e.charCodeAt(a++);if(61===f&&s>1)break;if(void 0===(f=o[f]))throw Error("invalid encoding");switch(s){case 0:i=f,s=1;break;case 1:t[r++]=i<<2|(48&f)>>4,i=f,s=2;break;case 2:t[r++]=(15&i)<<4|(60&f)>>2,i=f,s=3;break;case 3:t[r++]=(3&i)<<6|f,s=0;}}if(1===s)throw Error("invalid encoding");return r-n},i.test=function(e){return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)};},function(e,t,r){function i(){this._listeners={};}e.exports=i,i.prototype.on=function(e,t,r){return (this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:r||this}),this},i.prototype.off=function(e,t){if(void 0===e)this._listeners={};else if(void 0===t)this._listeners[e]=[];else for(var r=this._listeners[e],i=0;i<r.length;)r[i].fn===t?r.splice(i,1):++i;return this},i.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var r=[],i=1;i<arguments.length;)r.push(arguments[i++]);for(i=0;i<t.length;)t[i].fn.apply(t[i++].ctx,r);}return this};},function(e,t,r){function i(e){return "undefined"!=typeof Float32Array?function(){function t(e,t,r){o[0]=e,t[r]=s[0],t[r+1]=s[1],t[r+2]=s[2],t[r+3]=s[3];}function r(e,t,r){o[0]=e,t[r]=s[3],t[r+1]=s[2],t[r+2]=s[1],t[r+3]=s[0];}function i(e,t){return s[0]=e[t],s[1]=e[t+1],s[2]=e[t+2],s[3]=e[t+3],o[0]}function n(e,t){return s[3]=e[t],s[2]=e[t+1],s[1]=e[t+2],s[0]=e[t+3],o[0]}var o=new Float32Array([-0]),s=new Uint8Array(o.buffer),a=128===s[3];e.writeFloatLE=a?t:r,e.writeFloatBE=a?r:t,e.readFloatLE=a?i:n,e.readFloatBE=a?n:i;}():function(){function t(e,t,r,i){var n=t<0?1:0;if(n&&(t=-t),0===t)e(1/t>0?0:2147483648,r,i);else if(isNaN(t))e(2143289344,r,i);else if(t>3.4028234663852886e38)e((n<<31|2139095040)>>>0,r,i);else if(t<1.1754943508222875e-38)e((n<<31|Math.round(t/1.401298464324817e-45))>>>0,r,i);else {var o=Math.floor(Math.log(t)/Math.LN2),s=8388607&Math.round(t*Math.pow(2,-o)*8388608);e((n<<31|o+127<<23|s)>>>0,r,i);}}function r(e,t,r){var i=e(t,r),n=2*(i>>31)+1,o=i>>>23&255,s=8388607&i;return 255===o?s?NaN:n*(1/0):0===o?1.401298464324817e-45*n*s:n*Math.pow(2,o-150)*(s+8388608)}e.writeFloatLE=t.bind(null,n),e.writeFloatBE=t.bind(null,o),e.readFloatLE=r.bind(null,s),e.readFloatBE=r.bind(null,a);}(),"undefined"!=typeof Float64Array?function(){function t(e,t,r){o[0]=e,t[r]=s[0],t[r+1]=s[1],t[r+2]=s[2],t[r+3]=s[3],t[r+4]=s[4],t[r+5]=s[5],t[r+6]=s[6],t[r+7]=s[7];}function r(e,t,r){o[0]=e,t[r]=s[7],t[r+1]=s[6],t[r+2]=s[5],t[r+3]=s[4],t[r+4]=s[3],t[r+5]=s[2],t[r+6]=s[1],t[r+7]=s[0];}function i(e,t){return s[0]=e[t],s[1]=e[t+1],s[2]=e[t+2],s[3]=e[t+3],s[4]=e[t+4],s[5]=e[t+5],s[6]=e[t+6],s[7]=e[t+7],o[0]}function n(e,t){return s[7]=e[t],s[6]=e[t+1],s[5]=e[t+2],s[4]=e[t+3],s[3]=e[t+4],s[2]=e[t+5],s[1]=e[t+6],s[0]=e[t+7],o[0]}var o=new Float64Array([-0]),s=new Uint8Array(o.buffer),a=128===s[7];e.writeDoubleLE=a?t:r,e.writeDoubleBE=a?r:t,e.readDoubleLE=a?i:n,e.readDoubleBE=a?n:i;}():function(){function t(e,t,r,i,n,o){var s=i<0?1:0;if(s&&(i=-i),0===i)e(0,n,o+t),e(1/i>0?0:2147483648,n,o+r);else if(isNaN(i))e(0,n,o+t),e(2146959360,n,o+r);else if(i>1.7976931348623157e308)e(0,n,o+t),e((s<<31|2146435072)>>>0,n,o+r);else {var a;if(i<2.2250738585072014e-308)a=i/5e-324,e(a>>>0,n,o+t),e((s<<31|a/4294967296)>>>0,n,o+r);else {var f=Math.floor(Math.log(i)/Math.LN2);1024===f&&(f=1023),a=i*Math.pow(2,-f),e(4503599627370496*a>>>0,n,o+t),e((s<<31|f+1023<<20|1048576*a&1048575)>>>0,n,o+r);}}}function r(e,t,r,i,n){var o=e(i,n+t),s=e(i,n+r),a=2*(s>>31)+1,f=s>>>20&2047,l=4294967296*(1048575&s)+o;return 2047===f?l?NaN:a*(1/0):0===f?5e-324*a*l:a*Math.pow(2,f-1075)*(l+4503599627370496)}e.writeDoubleLE=t.bind(null,n,0,4),e.writeDoubleBE=t.bind(null,o,4,0),e.readDoubleLE=r.bind(null,s,0,4),e.readDoubleBE=r.bind(null,a,4,0);}(),e}function n(e,t,r){t[r]=255&e,t[r+1]=e>>>8&255,t[r+2]=e>>>16&255,t[r+3]=e>>>24;}function o(e,t,r){t[r]=e>>>24,t[r+1]=e>>>16&255,t[r+2]=e>>>8&255,t[r+3]=255&e;}function s(e,t){return (e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function a(e,t){return (e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}e.exports=i(i);},function(e,t,r){var i=t;i.length=function(e){for(var t=0,r=0,i=0;i<e.length;++i)r=e.charCodeAt(i),r<128?t+=1:r<2048?t+=2:55296==(64512&r)&&56320==(64512&e.charCodeAt(i+1))?(++i,t+=4):t+=3;return t},i.read=function(e,t,r){if(r-t<1)return "";for(var i,n=null,o=[],s=0;t<r;)i=e[t++],i<128?o[s++]=i:i>191&&i<224?o[s++]=(31&i)<<6|63&e[t++]:i>239&&i<365?(i=((7&i)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++])-65536,o[s++]=55296+(i>>10),o[s++]=56320+(1023&i)):o[s++]=(15&i)<<12|(63&e[t++])<<6|63&e[t++],s>8191&&((n||(n=[])).push(String.fromCharCode.apply(String,o)),s=0);return n?(s&&n.push(String.fromCharCode.apply(String,o.slice(0,s))),n.join("")):String.fromCharCode.apply(String,o.slice(0,s))},i.write=function(e,t,r){for(var i,n,o=r,s=0;s<e.length;++s)i=e.charCodeAt(s),i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&56320==(64512&(n=e.charCodeAt(s+1)))?(i=65536+((1023&i)<<10)+(1023&n),++s,t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128);return r-o};},function(e,t,r){function i(e,t,r){var i=r||8192,n=i>>>1,o=null,s=i;return function(r){if(r<1||r>n)return e(r);s+r>i&&(o=e(i),s=0);var a=t.call(o,s,s+=r);return 7&s&&(s=1+(7|s)),a}}e.exports=i;},function(e,t,r){function i(e,t){this.lo=e>>>0,this.hi=t>>>0;}e.exports=i;var n=r(1),o=i.zero=new i(0,0);o.toNumber=function(){return 0},o.zzEncode=o.zzDecode=function(){return this},o.length=function(){return 1};var s=i.zeroHash="\0\0\0\0\0\0\0\0";i.fromNumber=function(e){if(0===e)return o;var t=e<0;t&&(e=-e);var r=e>>>0,n=(e-r)/4294967296>>>0;return t&&(n=~n>>>0,r=~r>>>0,++r>4294967295&&(r=0,++n>4294967295&&(n=0))),new i(r,n)},i.from=function(e){if("number"==typeof e)return i.fromNumber(e);if(n.isString(e)){if(!n.Long)return i.fromNumber(parseInt(e,10));e=n.Long.fromString(e);}return e.low||e.high?new i(e.low>>>0,e.high>>>0):o},i.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=1+~this.lo>>>0,r=~this.hi>>>0;return t||(r=r+1>>>0),-(t+4294967296*r)}return this.lo+4294967296*this.hi},i.prototype.toLong=function(e){return n.Long?new n.Long(0|this.lo,0|this.hi,Boolean(e)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(e)}};var a=String.prototype.charCodeAt;i.fromHash=function(e){return e===s?o:new i((a.call(e,0)|a.call(e,1)<<8|a.call(e,2)<<16|a.call(e,3)<<24)>>>0,(a.call(e,4)|a.call(e,5)<<8|a.call(e,6)<<16|a.call(e,7)<<24)>>>0)},i.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},i.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this},i.prototype.zzDecode=function(){var e=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this},i.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,r=this.hi>>>24;return 0===r?0===t?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:r<128?9:10};},function(e,t,r){function i(){o.call(this);}function n(e,t,r){e.length<40?s.utf8.write(e,t,r):t.utf8Write?t.utf8Write(e,r):t.write(e,r);}e.exports=i;var o=r(9);(i.prototype=Object.create(o.prototype)).constructor=i;var s=r(1);i._configure=function(){i.alloc=s._Buffer_allocUnsafe,i.writeBytesBuffer=s.Buffer&&s.Buffer.prototype instanceof Uint8Array&&"set"===s.Buffer.prototype.set.name?function(e,t,r){t.set(e,r);}:function(e,t,r){if(e.copy)e.copy(t,r,0,e.length);else for(var i=0;i<e.length;)t[r++]=e[i++];};},i.prototype.bytes=function(e){s.isString(e)&&(e=s._Buffer_from(e,"base64"));var t=e.length>>>0;return this.uint32(t),t&&this._push(i.writeBytesBuffer,t,e),this},i.prototype.string=function(e){var t=s.Buffer.byteLength(e);return this.uint32(t),t&&this._push(n,t,e),this},i._configure();},function(e,t,r){function i(e){n.call(this,e);}e.exports=i;var n=r(10);(i.prototype=Object.create(n.prototype)).constructor=i;var o=r(1);i._configure=function(){o.Buffer&&(i.prototype._slice=o.Buffer.prototype.slice);},i.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+e,this.len))},i._configure();},function(e,t,r){function i(e,t,r){if("function"!=typeof e)throw TypeError("rpcImpl must be a function");n.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=Boolean(t),this.responseDelimited=Boolean(r);}e.exports=i;var n=r(1);(i.prototype=Object.create(n.EventEmitter.prototype)).constructor=i,i.prototype.rpcCall=function e(t,r,i,o,s){if(!o)throw TypeError("request must be specified");var a=this;if(!s)return n.asPromise(e,a,t,r,i,o);if(!a.rpcImpl)return void setTimeout(function(){s(Error("already ended"));},0);try{return a.rpcImpl(t,r[a.requestDelimited?"encodeDelimited":"encode"](o).finish(),function(e,r){if(e)return a.emit("error",e,t),s(e);if(null===r)return void a.end(!0);if(!(r instanceof i))try{r=i[a.responseDelimited?"decodeDelimited":"decode"](r);}catch(e){return a.emit("error",e,t),s(e)}return a.emit("data",r,t),s(null,r)})}catch(e){return a.emit("error",e,t),void setTimeout(function(){s(e);},0)}},i.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this};},function(e,t,r){function i(e,t){function r(e){if("string"!=typeof e){var t=n();if(i.verbose&&console.log("codegen: "+t),t="return "+t,e){for(var s=Object.keys(e),a=new Array(s.length+1),f=new Array(s.length),l=0;l<s.length;)a[l]=s[l],f[l]=e[s[l++]];return a[l]=t,Function.apply(null,a).apply(null,f)}return Function(t)()}for(var u=new Array(arguments.length-1),h=0;h<u.length;)u[h]=arguments[++h];if(h=0,e=e.replace(/%([%dfijs])/g,function(e,t){var r=u[h++];switch(t){case"d":case"f":return String(Number(r));case"i":return String(Math.floor(r));case"j":return JSON.stringify(r);case"s":return String(r)}return "%"}),h!==u.length)throw Error("parameter count mismatch");return o.push(e),r}function n(r){return "function "+(r||t||"")+"("+(e&&e.join(",")||"")+"){\n  "+o.join("\n  ")+"\n}"}"string"==typeof e&&(t=e,e=void 0);var o=[];return r.toString=n,r}e.exports=i,i.verbose=!1;},function(e,t,r){function i(e,t,r){return "function"==typeof t?(r=t,t={}):t||(t={}),r?!t.xhr&&s&&s.readFile?s.readFile(e,function(n,o){return n&&"undefined"!=typeof XMLHttpRequest?i.xhr(e,t,r):n?r(n):r(null,t.binary?o:o.toString("utf8"))}):i.xhr(e,t,r):n(i,this,e,t)}e.exports=i;var n=r(17),o=r(18),s=o("fs");i.xhr=function(e,t,r){var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState){if(0!==i.status&&200!==i.status)return r(Error("status "+i.status));if(t.binary){var e=i.response;if(!e){e=[];for(var n=0;n<i.responseText.length;++n)e.push(255&i.responseText.charCodeAt(n));}return r(null,"undefined"!=typeof Uint8Array?new Uint8Array(e):e)}return r(null,i.responseText)}},t.binary&&("overrideMimeType"in i&&i.overrideMimeType("text/plain; charset=x-user-defined"),i.responseType="arraybuffer"),i.open("GET",e),i.send();};},function(e,t,r){var i=t,n=i.isAbsolute=function(e){return /^(?:\/|\w+:)/.test(e)},o=i.normalize=function(e){e=e.replace(/\\/g,"/").replace(/\/{2,}/g,"/");var t=e.split("/"),r=n(e),i="";r&&(i=t.shift()+"/");for(var o=0;o<t.length;)".."===t[o]?o>0&&".."!==t[o-1]?t.splice(--o,2):r?t.splice(o,1):++o:"."===t[o]?t.splice(o,1):++o;return i+t.join("/")};i.resolve=function(e,t,r){return r||(t=o(t)),n(t)?t:(r||(e=o(e)),(e=e.replace(/(?:\/|^)[^\/]+$/,"")).length?o(e+"/"+t):t)};},function(e,t,r){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=r(16),o=n.ProtoMovieEntity,s=r(8).assign,a=r(51),f={};s(f,a);var l=function(e){for(var t=[],r=0;r<e.length;r+=32768)t.push(String.fromCharCode.apply(null,e.subarray(r,r+32768)));return t.join("")},u={loadAssets:function(e,t,r){if("object"===("undefined"==typeof JSZipUtils?"undefined":i(JSZipUtils))&&"function"==typeof JSZip)if("[object File]"==e.toString())u._readBlobAsArrayBuffer(e,function(e){var i=new Uint8Array(e,0,4);80==i[0]&&75==i[1]&&3==i[2]&&4==i[3]?JSZip.loadAsync(e).then(function(e){u._decodeAssets(e,t);}):u.load_viaProto(e,t,r);});else if(e.indexOf("data:svga/1.0;base64,")>=0){var n=u._base64ToArrayBuffer(e.substring(21));JSZip.loadAsync(n).then(function(e){u._decodeAssets(e,t);});}else if(e.indexOf("data:svga/2.0;base64,")>=0){var n=u._base64ToArrayBuffer(e.substring(21));u.load_viaProto(n,t,r);}else JSZipUtils.getBinaryContent(e,function(e,i){if(e)throw r&&r(e),console.error(e),e;var n=new Uint8Array(i,0,4);80==n[0]&&75==n[1]&&3==n[2]&&4==n[3]?JSZip.loadAsync(i).then(function(e){u._decodeAssets(e,t);}):u.load_viaProto(i,t,r);});else {var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.onloadend=function(){u.load_viaProto(o.response,t,r);},o.send();}},load_viaProto:function(e,t,r){try{var i=f.inflate(e),n=o.decode(i),s={};u._loadImages(s,void 0,n,function(){n.ver="2.0",t({movie:n,images:s});});}catch(e){throw r&&r(e),console.error(e),e}},_decodeAssets:function(e,t){var r="1.0";e.file("movie.binary")&&(r="1.5"),e.file("movie.spec").async("string").then(function(i){var n=JSON.parse(i),o={};n.ver=r,u._loadImages(o,e,n,function(){t({movie:n,images:o});});});},_loadImages:function(e,t,r,n){var s=this;if("object"===(void 0===r?"undefined":i(r))&&r.$type==o){var a=!0;if(t){e:for(var f in r.images){var h=function(i){if(r.images.hasOwnProperty(i)){var o=r.images[i],f=l(o);return e.hasOwnProperty(i)?"continue":(a=!1,t.file(f+".png").async("base64").then(function(o){e[i]=o,u._loadImages(e,t,r,n);}.bind(s)),"break")}}(f);switch(h){case"continue":continue;case"break":break e}}}else for(var c in r.images)if(r.images.hasOwnProperty(c)){var d=r.images[c],p=void 0;try{p=l(d);}catch(e){p=l(d);}e[c]=btoa(p);}a&&n.call(this);}else {var a=!0;for(var y in r.images)if(r.images.hasOwnProperty(y)){var m=r.images[y];if(e.hasOwnProperty(y))continue;a=!1,t.file(m+".png").async("base64").then(function(i){e[y]=i,u._loadImages(e,t,r,n);}.bind(this));break}a&&n.call(this);}},_base64ToArrayBuffer:function(e){for(var t=window.atob(e),r=t.length,i=new Uint8Array(r),n=0;n<r;n++)i[n]=t.charCodeAt(n);return i.buffer},_readBlobAsArrayBuffer:function(e,t){var r=new FileReader;r.onload=function(e){t(e.target.result);},r.readAsArrayBuffer(e);}};e.exports=function(e,t,r){u.loadAssets(e,t,r);};},function(e,t,r){function i(e){if(!(this instanceof i))return new i(e);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var r=s.inflateInit2(this.strm,t.windowBits);if(r!==l.Z_OK)throw new Error(u[r]);if(this.header=new c,s.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=f.string2buf(t.dictionary):"[object ArrayBuffer]"===d.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=s.inflateSetDictionary(this.strm,t.dictionary))!==l.Z_OK))throw new Error(u[r])}function n(e,t){var r=new i(t);if(r.push(e,!0),r.err)throw r.msg||u[r.err];return r.result}function o(e,t){return t=t||{},t.raw=!0,n(e,t)}var s=r(52),a=r(8),f=r(57),l=r(58),u=r(59),h=r(60),c=r(61),d=Object.prototype.toString;i.prototype.push=function(e,t){var r,i,n,o,u,h=this.strm,c=this.options.chunkSize,p=this.options.dictionary,y=!1;if(this.ended)return !1;i=t===~~t?t:!0===t?l.Z_FINISH:l.Z_NO_FLUSH,"string"==typeof e?h.input=f.binstring2buf(e):"[object ArrayBuffer]"===d.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new a.Buf8(c),h.next_out=0,h.avail_out=c),r=s.inflate(h,l.Z_NO_FLUSH),r===l.Z_NEED_DICT&&p&&(r=s.inflateSetDictionary(this.strm,p)),r===l.Z_BUF_ERROR&&!0===y&&(r=l.Z_OK,y=!1),r!==l.Z_STREAM_END&&r!==l.Z_OK)return this.onEnd(r),this.ended=!0,!1;h.next_out&&(0!==h.avail_out&&r!==l.Z_STREAM_END&&(0!==h.avail_in||i!==l.Z_FINISH&&i!==l.Z_SYNC_FLUSH)||("string"===this.options.to?(n=f.utf8border(h.output,h.next_out),o=h.next_out-n,u=f.buf2string(h.output,n),h.next_out=o,h.avail_out=c-o,o&&a.arraySet(h.output,h.output,n,o,0),this.onData(u)):this.onData(a.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(y=!0);}while((h.avail_in>0||0===h.avail_out)&&r!==l.Z_STREAM_END);return r===l.Z_STREAM_END&&(i=l.Z_FINISH),i===l.Z_FINISH?(r=s.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l.Z_OK):i!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),h.avail_out=0,!0)},i.prototype.onData=function(e){this.chunks.push(e);},i.prototype.onEnd=function(e){e===l.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg;},t.Inflate=i,t.inflate=n,t.inflateRaw=o,t.ungzip=n;},function(e,t,r){function i(e){return (e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function n(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new g.Buf16(320),this.work=new g.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0;}function o(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=D,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new g.Buf32(ye),t.distcode=t.distdyn=new g.Buf32(me),t.sane=1,t.back=-1,E):C}function s(e){var t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,o(e)):C}function a(e,t){var r,i;return e&&e.state?(i=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?C:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=r,i.wbits=t,s(e))):C}function f(e,t){var r,i;return e?(i=new n,e.state=i,i.window=null,r=a(e,t),r!==E&&(e.state=null),r):C}function l(e){return f(e,ve)}function u(e){if(ge){var t;for(m=new g.Buf32(512),v=new g.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(k(A,e.lens,0,288,m,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;k(O,e.lens,0,32,v,0,e.work,{bits:5}),ge=!1;}e.lencode=m,e.lenbits=9,e.distcode=v,e.distbits=5;}function h(e,t,r,i){var n,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new g.Buf8(o.wsize)),i>=o.wsize?(g.arraySet(o.window,t,r-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(n=o.wsize-o.wnext,n>i&&(n=i),g.arraySet(o.window,t,r-i,n,o.wnext),i-=n,i?(g.arraySet(o.window,t,r-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=n,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=n))),0}function c(e,t){var r,n,o,s,a,f,l,c,d,p,y,m,v,ye,me,ve,ge,be,_e,we,ke,xe,Ae,Oe,Se=0,je=new g.Buf8(4),Te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return C;r=e.state,r.mode===H&&(r.mode=W),a=e.next_out,o=e.output,l=e.avail_out,s=e.next_in,n=e.input,f=e.avail_in,c=r.hold,d=r.bits,p=f,y=l,xe=E;e:for(;;)switch(r.mode){case D:if(0===r.wrap){r.mode=W;break}for(;d<16;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(2&r.wrap&&35615===c){r.check=0,je[0]=255&c,je[1]=c>>>8&255,r.check=_(r.check,je,2,0),c=0,d=0,r.mode=M;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",r.mode=ce;break}if((15&c)!==R){e.msg="unknown compression method",r.mode=ce;break}if(c>>>=4,d-=4,ke=8+(15&c),0===r.wbits)r.wbits=ke;else if(ke>r.wbits){e.msg="invalid window size",r.mode=ce;break}r.dmax=1<<ke,e.adler=r.check=1,r.mode=512&c?V:H,c=0,d=0;break;case M:for(;d<16;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(r.flags=c,(255&r.flags)!==R){e.msg="unknown compression method",r.mode=ce;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=ce;break}r.head&&(r.head.text=c>>8&1),512&r.flags&&(je[0]=255&c,je[1]=c>>>8&255,r.check=_(r.check,je,2,0)),c=0,d=0,r.mode=L;case L:for(;d<32;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}r.head&&(r.head.time=c),512&r.flags&&(je[0]=255&c,je[1]=c>>>8&255,je[2]=c>>>16&255,je[3]=c>>>24&255,r.check=_(r.check,je,4,0)),c=0,d=0,r.mode=z;case z:for(;d<16;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}r.head&&(r.head.xflags=255&c,r.head.os=c>>8),512&r.flags&&(je[0]=255&c,je[1]=c>>>8&255,r.check=_(r.check,je,2,0)),c=0,d=0,r.mode=J;case J:if(1024&r.flags){for(;d<16;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}r.length=c,r.head&&(r.head.extra_len=c),512&r.flags&&(je[0]=255&c,je[1]=c>>>8&255,r.check=_(r.check,je,2,0)),c=0,d=0;}else r.head&&(r.head.extra=null);r.mode=U;case U:if(1024&r.flags&&(m=r.length,m>f&&(m=f),m&&(r.head&&(ke=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),g.arraySet(r.head.extra,n,s,m,ke)),512&r.flags&&(r.check=_(r.check,n,m,s)),f-=m,s+=m,r.length-=m),r.length))break e;r.length=0,r.mode=Z;case Z:if(2048&r.flags){if(0===f)break e;m=0;do{ke=n[s+m++],r.head&&ke&&r.length<65536&&(r.head.name+=String.fromCharCode(ke));}while(ke&&m<f);if(512&r.flags&&(r.check=_(r.check,n,m,s)),f-=m,s+=m,ke)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=K;case K:if(4096&r.flags){if(0===f)break e;m=0;do{ke=n[s+m++],r.head&&ke&&r.length<65536&&(r.head.comment+=String.fromCharCode(ke));}while(ke&&m<f);if(512&r.flags&&(r.check=_(r.check,n,m,s)),f-=m,s+=m,ke)break e}else r.head&&(r.head.comment=null);r.mode=q;case q:if(512&r.flags){for(;d<16;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(c!==(65535&r.check)){e.msg="header crc mismatch",r.mode=ce;break}c=0,d=0;}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=H;break;case V:for(;d<32;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}e.adler=r.check=i(c),c=0,d=0,r.mode=$;case $:if(0===r.havedict)return e.next_out=a,e.avail_out=l,e.next_in=s,e.avail_in=f,r.hold=c,r.bits=d,F;e.adler=r.check=1,r.mode=H;case H:if(t===j||t===T)break e;case W:if(r.last){c>>>=7&d,d-=7&d,r.mode=le;break}for(;d<3;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}switch(r.last=1&c,c>>>=1,d-=1,3&c){case 0:r.mode=G;break;case 1:if(u(r),r.mode=re,t===T){c>>>=2,d-=2;break e}break;case 2:r.mode=X;break;case 3:e.msg="invalid block type",r.mode=ce;}c>>>=2,d-=2;break;case G:for(c>>>=7&d,d-=7&d;d<32;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if((65535&c)!=(c>>>16^65535)){e.msg="invalid stored block lengths",r.mode=ce;break}if(r.length=65535&c,c=0,d=0,r.mode=Y,t===T)break e;case Y:r.mode=Q;case Q:if(m=r.length){if(m>f&&(m=f),m>l&&(m=l),0===m)break e;g.arraySet(o,n,s,m,a),f-=m,s+=m,l-=m,a+=m,r.length-=m;break}r.mode=H;break;case X:for(;d<14;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(r.nlen=257+(31&c),c>>>=5,d-=5,r.ndist=1+(31&c),c>>>=5,d-=5,r.ncode=4+(15&c),c>>>=4,d-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=ce;break}r.have=0,r.mode=ee;case ee:for(;r.have<r.ncode;){for(;d<3;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}r.lens[Te[r.have++]]=7&c,c>>>=3,d-=3;}for(;r.have<19;)r.lens[Te[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,Ae={bits:r.lenbits},xe=k(x,r.lens,0,19,r.lencode,0,r.work,Ae),r.lenbits=Ae.bits,xe){e.msg="invalid code lengths set",r.mode=ce;break}r.have=0,r.mode=te;case te:for(;r.have<r.nlen+r.ndist;){for(;Se=r.lencode[c&(1<<r.lenbits)-1],me=Se>>>24,ve=Se>>>16&255,ge=65535&Se,!(me<=d);){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(ge<16)c>>>=me,d-=me,r.lens[r.have++]=ge;else {if(16===ge){for(Oe=me+2;d<Oe;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(c>>>=me,d-=me,0===r.have){e.msg="invalid bit length repeat",r.mode=ce;break}ke=r.lens[r.have-1],m=3+(3&c),c>>>=2,d-=2;}else if(17===ge){for(Oe=me+3;d<Oe;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}c>>>=me,d-=me,ke=0,m=3+(7&c),c>>>=3,d-=3;}else {for(Oe=me+7;d<Oe;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}c>>>=me,d-=me,ke=0,m=11+(127&c),c>>>=7,d-=7;}if(r.have+m>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=ce;break}for(;m--;)r.lens[r.have++]=ke;}}if(r.mode===ce)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=ce;break}if(r.lenbits=9,Ae={bits:r.lenbits},xe=k(A,r.lens,0,r.nlen,r.lencode,0,r.work,Ae),r.lenbits=Ae.bits,xe){e.msg="invalid literal/lengths set",r.mode=ce;break}if(r.distbits=6,r.distcode=r.distdyn,Ae={bits:r.distbits},xe=k(O,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,Ae),r.distbits=Ae.bits,xe){e.msg="invalid distances set",r.mode=ce;break}if(r.mode=re,t===T)break e;case re:r.mode=ie;case ie:if(f>=6&&l>=258){e.next_out=a,e.avail_out=l,e.next_in=s,e.avail_in=f,r.hold=c,r.bits=d,w(e,y),a=e.next_out,o=e.output,l=e.avail_out,s=e.next_in,n=e.input,f=e.avail_in,c=r.hold,d=r.bits,r.mode===H&&(r.back=-1);break}for(r.back=0;Se=r.lencode[c&(1<<r.lenbits)-1],me=Se>>>24,ve=Se>>>16&255,ge=65535&Se,!(me<=d);){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(ve&&0==(240&ve)){for(be=me,_e=ve,we=ge;Se=r.lencode[we+((c&(1<<be+_e)-1)>>be)],me=Se>>>24,ve=Se>>>16&255,ge=65535&Se,!(be+me<=d);){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}c>>>=be,d-=be,r.back+=be;}if(c>>>=me,d-=me,r.back+=me,r.length=ge,0===ve){r.mode=fe;break}if(32&ve){r.back=-1,r.mode=H;break}if(64&ve){e.msg="invalid literal/length code",r.mode=ce;break}r.extra=15&ve,r.mode=ne;case ne:if(r.extra){for(Oe=r.extra;d<Oe;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}r.length+=c&(1<<r.extra)-1,c>>>=r.extra,d-=r.extra,r.back+=r.extra;}r.was=r.length,r.mode=oe;case oe:for(;Se=r.distcode[c&(1<<r.distbits)-1],me=Se>>>24,ve=Se>>>16&255,ge=65535&Se,!(me<=d);){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(0==(240&ve)){for(be=me,_e=ve,we=ge;Se=r.distcode[we+((c&(1<<be+_e)-1)>>be)],me=Se>>>24,ve=Se>>>16&255,ge=65535&Se,!(be+me<=d);){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}c>>>=be,d-=be,r.back+=be;}if(c>>>=me,d-=me,r.back+=me,64&ve){e.msg="invalid distance code",r.mode=ce;break}r.offset=ge,r.extra=15&ve,r.mode=se;case se:if(r.extra){for(Oe=r.extra;d<Oe;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}r.offset+=c&(1<<r.extra)-1,c>>>=r.extra,d-=r.extra,r.back+=r.extra;}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=ce;break}r.mode=ae;case ae:if(0===l)break e;if(m=y-l,r.offset>m){if((m=r.offset-m)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=ce;break}m>r.wnext?(m-=r.wnext,v=r.wsize-m):v=r.wnext-m,m>r.length&&(m=r.length),ye=r.window;}else ye=o,v=a-r.offset,m=r.length;m>l&&(m=l),l-=m,r.length-=m;do{o[a++]=ye[v++];}while(--m);0===r.length&&(r.mode=ie);break;case fe:if(0===l)break e;o[a++]=r.length,l--,r.mode=ie;break;case le:if(r.wrap){for(;d<32;){if(0===f)break e;f--,c|=n[s++]<<d,d+=8;}if(y-=l,e.total_out+=y,r.total+=y,y&&(e.adler=r.check=r.flags?_(r.check,o,y,a-y):b(r.check,o,y,a-y)),y=l,(r.flags?c:i(c))!==r.check){e.msg="incorrect data check",r.mode=ce;break}c=0,d=0;}r.mode=ue;case ue:if(r.wrap&&r.flags){for(;d<32;){if(0===f)break e;f--,c+=n[s++]<<d,d+=8;}if(c!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=ce;break}c=0,d=0;}r.mode=he;case he:xe=N;break e;case ce:xe=B;break e;case de:return I;case pe:default:return C}return e.next_out=a,e.avail_out=l,e.next_in=s,e.avail_in=f,r.hold=c,r.bits=d,(r.wsize||y!==e.avail_out&&r.mode<ce&&(r.mode<le||t!==S))&&h(e,e.output,e.next_out,y-e.avail_out)?(r.mode=de,I):(p-=e.avail_in,y-=e.avail_out,e.total_in+=p,e.total_out+=y,r.total+=y,r.wrap&&y&&(e.adler=r.check=r.flags?_(r.check,o,y,e.next_out-y):b(r.check,o,y,e.next_out-y)),e.data_type=r.bits+(r.last?64:0)+(r.mode===H?128:0)+(r.mode===re||r.mode===Y?256:0),(0===p&&0===y||t===S)&&xe===E&&(xe=P),xe)}function d(e){if(!e||!e.state)return C;var t=e.state;return t.window&&(t.window=null),e.state=null,E}function p(e,t){var r;return e&&e.state?(r=e.state,0==(2&r.wrap)?C:(r.head=t,t.done=!1,E)):C}function y(e,t){var r,i,n=t.length;return e&&e.state?(r=e.state,0!==r.wrap&&r.mode!==$?C:r.mode===$&&(i=1,(i=b(i,t,n,0))!==r.check)?B:h(e,t,n,n)?(r.mode=de,I):(r.havedict=1,E)):C}var m,v,g=r(8),b=r(53),_=r(54),w=r(55),k=r(56),x=0,A=1,O=2,S=4,j=5,T=6,E=0,N=1,F=2,C=-2,B=-3,I=-4,P=-5,R=8,D=1,M=2,L=3,z=4,J=5,U=6,Z=7,K=8,q=9,V=10,$=11,H=12,W=13,G=14,Y=15,Q=16,X=17,ee=18,te=19,re=20,ie=21,ne=22,oe=23,se=24,ae=25,fe=26,le=27,ue=28,he=29,ce=30,de=31,pe=32,ye=852,me=592,ve=15,ge=!0;t.inflateReset=s,t.inflateReset2=a,t.inflateResetKeep=o,t.inflateInit=l,t.inflateInit2=f,t.inflate=c,t.inflateEnd=d,t.inflateGetHeader=p,t.inflateSetDictionary=y,t.inflateInfo="pako inflate (from Nodeca project)";},function(e,t,r){function i(e,t,r,i){for(var n=65535&e|0,o=e>>>16&65535|0,s=0;0!==r;){s=r>2e3?2e3:r,r-=s;do{n=n+t[i++]|0,o=o+n|0;}while(--s);n%=65521,o%=65521;}return n|o<<16|0}e.exports=i;},function(e,t,r){function i(e,t,r,i){var o=n,s=i+r;e^=-1;for(var a=i;a<s;a++)e=e>>>8^o[255&(e^t[a])];return -1^e}var n=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e;}return t}();e.exports=i;},function(e,t,r){e.exports=function(e,t){var r,i,n,o,s,a,f,l,u,h,c,d,p,y,m,v,g,b,_,w,k,x,A,O,S;r=e.state,i=e.next_in,O=e.input,n=i+(e.avail_in-5),o=e.next_out,S=e.output,s=o-(t-e.avail_out),a=o+(e.avail_out-257),f=r.dmax,l=r.wsize,u=r.whave,h=r.wnext,c=r.window,d=r.hold,p=r.bits,y=r.lencode,m=r.distcode,v=(1<<r.lenbits)-1,g=(1<<r.distbits)-1;e:do{p<15&&(d+=O[i++]<<p,p+=8,d+=O[i++]<<p,p+=8),b=y[d&v];t:for(;;){if(_=b>>>24,d>>>=_,p-=_,0===(_=b>>>16&255))S[o++]=65535&b;else {if(!(16&_)){if(0==(64&_)){b=y[(65535&b)+(d&(1<<_)-1)];continue t}if(32&_){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&b,_&=15,_&&(p<_&&(d+=O[i++]<<p,p+=8),w+=d&(1<<_)-1,d>>>=_,p-=_),p<15&&(d+=O[i++]<<p,p+=8,d+=O[i++]<<p,p+=8),b=m[d&g];r:for(;;){if(_=b>>>24,d>>>=_,p-=_,!(16&(_=b>>>16&255))){if(0==(64&_)){b=m[(65535&b)+(d&(1<<_)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&b,_&=15,p<_&&(d+=O[i++]<<p,(p+=8)<_&&(d+=O[i++]<<p,p+=8)),(k+=d&(1<<_)-1)>f){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=_,p-=_,_=o-s,k>_){if((_=k-_)>u&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(x=0,A=c,0===h){if(x+=l-_,_<w){w-=_;do{S[o++]=c[x++];}while(--_);x=o-k,A=S;}}else if(h<_){if(x+=l+h-_,(_-=h)<w){w-=_;do{S[o++]=c[x++];}while(--_);if(x=0,h<w){_=h,w-=_;do{S[o++]=c[x++];}while(--_);x=o-k,A=S;}}}else if(x+=h-_,_<w){w-=_;do{S[o++]=c[x++];}while(--_);x=o-k,A=S;}for(;w>2;)S[o++]=A[x++],S[o++]=A[x++],S[o++]=A[x++],w-=3;w&&(S[o++]=A[x++],w>1&&(S[o++]=A[x++]));}else {x=o-k;do{S[o++]=S[x++],S[o++]=S[x++],S[o++]=S[x++],w-=3;}while(w>2);w&&(S[o++]=S[x++],w>1&&(S[o++]=S[x++]));}break}}break}}while(i<n&&o<a);w=p>>3,i-=w,p-=w<<3,d&=(1<<p)-1,e.next_in=i,e.next_out=o,e.avail_in=i<n?n-i+5:5-(i-n),e.avail_out=o<a?a-o+257:257-(o-a),r.hold=d,r.bits=p;};},function(e,t,r){var i=r(8),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],a=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(e,t,r,f,l,u,h,c){var d,p,y,m,v,g,b,_,w,k=c.bits,x=0,A=0,O=0,S=0,j=0,T=0,E=0,N=0,F=0,C=0,B=null,I=0,P=new i.Buf16(16),R=new i.Buf16(16),D=null,M=0;for(x=0;x<=15;x++)P[x]=0;for(A=0;A<f;A++)P[t[r+A]]++;for(j=k,S=15;S>=1&&0===P[S];S--);if(j>S&&(j=S),0===S)return l[u++]=20971520,l[u++]=20971520,c.bits=1,0;for(O=1;O<S&&0===P[O];O++);for(j<O&&(j=O),N=1,x=1;x<=15;x++)if(N<<=1,(N-=P[x])<0)return -1;if(N>0&&(0===e||1!==S))return -1;for(R[1]=0,x=1;x<15;x++)R[x+1]=R[x]+P[x];for(A=0;A<f;A++)0!==t[r+A]&&(h[R[t[r+A]]++]=A);if(0===e?(B=D=h,g=19):1===e?(B=n,I-=257,D=o,M-=257,g=256):(B=s,D=a,g=-1),C=0,A=0,x=O,v=u,T=j,E=0,y=-1,F=1<<j,m=F-1,1===e&&F>852||2===e&&F>592)return 1;for(;;){b=x-E,h[A]<g?(_=0,w=h[A]):h[A]>g?(_=D[M+h[A]],w=B[I+h[A]]):(_=96,w=0),d=1<<x-E,p=1<<T,O=p;do{p-=d,l[v+(C>>E)+p]=b<<24|_<<16|w|0;}while(0!==p);for(d=1<<x-1;C&d;)d>>=1;if(0!==d?(C&=d-1,C+=d):C=0,A++,0==--P[x]){if(x===S)break;x=t[r+h[A]];}if(x>j&&(C&m)!==y){for(0===E&&(E=j),v+=O,T=x-E,N=1<<T;T+E<S&&!((N-=P[T+E])<=0);)T++,N<<=1;if(F+=1<<T,1===e&&F>852||2===e&&F>592)return 1;y=C&m,l[y]=j<<24|T<<16|v-u|0;}}return 0!==C&&(l[v+C]=x-E<<24|64<<16|0),c.bits=j,0};},function(e,t,r){function i(e,t){if(t<65534&&(e.subarray&&s||!e.subarray&&o))return String.fromCharCode.apply(null,n.shrinkBuf(e,t));for(var r="",i=0;i<t;i++)r+=String.fromCharCode(e[i]);return r}var n=r(8),o=!0,s=!0;try{String.fromCharCode.apply(null,[0]);}catch(e){o=!1;}try{String.fromCharCode.apply(null,new Uint8Array(1));}catch(e){s=!1;}for(var a=new n.Buf8(256),f=0;f<256;f++)a[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;a[254]=a[254]=1,t.string2buf=function(e){var t,r,i,o,s,a=e.length,f=0;for(o=0;o<a;o++)r=e.charCodeAt(o),55296==(64512&r)&&o+1<a&&56320==(64512&(i=e.charCodeAt(o+1)))&&(r=65536+(r-55296<<10)+(i-56320),o++),f+=r<128?1:r<2048?2:r<65536?3:4;for(t=new n.Buf8(f),s=0,o=0;s<f;o++)r=e.charCodeAt(o),55296==(64512&r)&&o+1<a&&56320==(64512&(i=e.charCodeAt(o+1)))&&(r=65536+(r-55296<<10)+(i-56320),o++),r<128?t[s++]=r:r<2048?(t[s++]=192|r>>>6,t[s++]=128|63&r):r<65536?(t[s++]=224|r>>>12,t[s++]=128|r>>>6&63,t[s++]=128|63&r):(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63,t[s++]=128|r>>>6&63,t[s++]=128|63&r);return t},t.buf2binstring=function(e){return i(e,e.length)},t.binstring2buf=function(e){for(var t=new n.Buf8(e.length),r=0,i=t.length;r<i;r++)t[r]=e.charCodeAt(r);return t},t.buf2string=function(e,t){var r,n,o,s,f=t||e.length,l=new Array(2*f);for(n=0,r=0;r<f;)if((o=e[r++])<128)l[n++]=o;else if((s=a[o])>4)l[n++]=65533,r+=s-1;else {for(o&=2===s?31:3===s?15:7;s>1&&r<f;)o=o<<6|63&e[r++],s--;s>1?l[n++]=65533:o<65536?l[n++]=o:(o-=65536,l[n++]=55296|o>>10&1023,l[n++]=56320|1023&o);}return i(l,n)},t.utf8border=function(e,t){var r;for(t=t||e.length,t>e.length&&(t=e.length),r=t-1;r>=0&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+a[e[r]]>t?r:t};},function(e,t,r){e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};},function(e,t,r){e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};},function(e,t,r){function i(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0;}e.exports=i;},function(e,t,r){function i(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1;}e.exports=i;},function(e,t,r){!function(t,r){e.exports=r();}("undefined"!=typeof self&&self,function(){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i});},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=r(1);e.exports=i.ValueAnimator;},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.startValue=0,this.endValue=0,this.duration=0,this.loops=1,this.fillRule=0,this.onStart=function(){},this.onUpdate=function(){},this.onEnd=function(){},this.mRunning=!1,this.mStartTime=0,this.mCurrentFrication=0,this.mReverse=!1;}return e.prototype.start=function(e){void 0===e&&(e=void 0),this.doStart(!1,e);},e.prototype.reverse=function(e){void 0===e&&(e=void 0),this.doStart(!0,e);},e.prototype.stop=function(){this.doStop();},Object.defineProperty(e.prototype,"animatedValue",{get:function(){return (this.endValue-this.startValue)*this.mCurrentFrication+this.startValue},enumerable:!0,configurable:!0}),e.prototype.doStart=function(t,r){void 0===t&&(t=!1),void 0===r&&(r=void 0),this.mReverse=t,this.mRunning=!0,this.mStartTime=e.currentTimeMillsecond(),r&&(this.mStartTime-=t?(1-r/(this.endValue-this.startValue))*this.duration:r/(this.endValue-this.startValue)*this.duration),this.mCurrentFrication=0,this.onStart(),this.doFrame();},e.prototype.doStop=function(){this.mRunning=!1;},e.prototype.doFrame=function(){this.mRunning&&(this.doDeltaTime(e.currentTimeMillsecond()-this.mStartTime),this.mRunning&&e.requestAnimationFrame(this.doFrame.bind(this)));},e.prototype.doDeltaTime=function(e){e>=this.duration*this.loops?(this.mCurrentFrication=1===this.fillRule?0:1,this.mRunning=!1):(this.mCurrentFrication=e%this.duration/this.duration,this.mReverse&&(this.mCurrentFrication=1-this.mCurrentFrication)),this.onUpdate(this.animatedValue),!1===this.mRunning&&this.onEnd();},e.currentTimeMillsecond=function(){return "undefined"==typeof performance?(new Date).getTime():performance.now()},e.requestAnimationFrame=function(e){return "undefined"==typeof requestAnimationFrame?setTimeout(e,16):window.requestAnimationFrame(e)},e}();t.ValueAnimator=i;}])});},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=r(65),a=r(62);t.Player=function(){function e(t){i(this,e),this.loops=0,this.clearsAfterStop=!0,this.fillMode="Forward",this._asChild=!1,this._container=void 0,this._renderer=void 0,this._animator=void 0,this._drawingCanvas=void 0,this._contentMode="AspectFit",this._videoItem=void 0,this._forwardAnimating=!1,this._currentFrame=0,this._dynamicImage={},this._dynamicImageTransform={},this._dynamicText={},this._onFinished=void 0,this._onFrame=void 0,this._onPercentage=void 0,this._container="string"==typeof t?document.querySelector(t):t,this._asChild=void 0===t,this._init();}return o(e,[{key:"setVideoItem",value:function(e){this._currentFrame=0,this._videoItem=e,this._renderer.prepare(),this.clear(),this._update();}},{key:"setContentMode",value:function(e){this._contentMode=e,this._update();}},{key:"setClipsToBounds",value:function(e){this._container instanceof HTMLDivElement&&(this._container.style.overflowX=this._container.style.overflowY=e?"hidden":void 0);}},{key:"startAnimation",value:function(e){this.stopAnimation(!1),this._doStart(void 0,e,void 0);}},{key:"startAnimationWithRange",value:function(e,t){this.stopAnimation(!1),this._doStart(e,t,void 0);}},{key:"pauseAnimation",value:function(){this.stopAnimation(!1);}},{key:"stopAnimation",value:function(e){this._forwardAnimating=!1,void 0!==this._animator&&this._animator.stop(),void 0===e&&(e=this.clearsAfterStop),e&&this.clear();}},{key:"clear",value:function(){this._renderer.clear(),this._renderer.clearAudios();}},{key:"stepToFrame",value:function(e,t){e>=this._videoItem.frames||e<0||(this.pauseAnimation(),this._currentFrame=e,this._update(),t&&this._doStart(void 0,!1,this._currentFrame));}},{key:"stepToPercentage",value:function(e,t){var r=parseInt(e*this._videoItem.frames);r>=this._videoItem.frames&&r>0&&(r=this._videoItem.frames-1),this.stepToFrame(r,t);}},{key:"setImage",value:function(e,t,r){this._dynamicImage[t]=e,void 0!==r&&r instanceof Array&&6==r.length&&(this._dynamicImageTransform[t]=r);}},{key:"setText",value:function(e,t){var r="string"==typeof e?e:e.text,i=("object"===(void 0===e?"undefined":n(e))?e.size:"14px")||"14px",o=("object"===(void 0===e?"undefined":n(e))?e.family:"")||"",s=("object"===(void 0===e?"undefined":n(e))?e.color:"#000000")||"#000000",a=("object"===(void 0===e?"undefined":n(e))?e.offset:{x:0,y:0})||{x:0,y:0};this._dynamicText[t]={text:r,style:i+" "+o,color:s,offset:a};}},{key:"clearDynamicObjects",value:function(){this._dynamicImage={},this._dynamicImageTransform={},this._dynamicText={};}},{key:"onFinished",value:function(e){this._onFinished=e;}},{key:"onFrame",value:function(e){this._onFrame=e;}},{key:"onPercentage",value:function(e){this._onPercentage=e;}},{key:"drawOnContext",value:function(e,t,r,i,n){this._drawingCanvas&&this._videoItem&&e.drawImage(this._drawingCanvas,t,r,i||this._videoItem.videoSize.width,n||this._videoItem.videoSize.height);}},{key:"_init",value:function(){if(this._container instanceof HTMLDivElement||this._asChild){if(this._container)for(var e=this._container.querySelectorAll("canvas"),t=0;t<e.length;t++){var r=e[t];void 0!==r&&r.__isPlayer&&this._container.removeChild(r);}this._drawingCanvas=document.createElement("canvas"),this._drawingCanvas.__isPlayer=!0,this._drawingCanvas.style.backgroundColor="transparent",this._container&&(this._container.appendChild(this._drawingCanvas),this._container.style.textAlign="left");}this._renderer=new s.Renderer(this);}},{key:"_doStart",value:function(e,t,r){var i=this;this._animator=new a,void 0!==e?(this._animator.startValue=Math.max(0,e.location),this._animator.endValue=Math.min(this._videoItem.frames-1,e.location+e.length),this._animator.duration=(this._animator.endValue-this._animator.startValue+1)*(1/this._videoItem.FPS)*1e3):(this._animator.startValue=0,this._animator.endValue=this._videoItem.frames-1,this._animator.duration=this._videoItem.frames*(1/this._videoItem.FPS)*1e3),this._animator.loops=this.loops<=0?1/0:this.loops,this._animator.fillRule="Backward"===this.fillMode?1:0,this._animator.onUpdate=function(e){i._currentFrame!==Math.floor(e)&&(i._forwardAnimating&&i._currentFrame>Math.floor(e)&&i._renderer.clearAudios(),i._currentFrame=Math.floor(e),i._update(),"function"==typeof i._onFrame&&i._onFrame(i._currentFrame),"function"==typeof i._onPercentage&&i._onPercentage(parseFloat(i._currentFrame+1)/parseFloat(i._videoItem.frames)));},this._animator.onEnd=function(){i._forwardAnimating=!1,!0===i.clearsAfterStop&&i.clear(),"function"==typeof i._onFinished&&i._onFinished();},!0===t?(this._animator.reverse(r),this._forwardAnimating=!1):(this._animator.start(r),this._forwardAnimating=!0),this._currentFrame=this._animator.startValue,this._update();}},{key:"_resize",value:function(){var e=!1;if(this._drawingCanvas){var t=void 0;t=this._drawingCanvas.parentNode?{width:this._drawingCanvas.parentNode.clientWidth,height:this._drawingCanvas.parentNode.clientHeight}:this._videoItem.videoSize;var r=this._videoItem.videoSize;if(t.width>=r.width&&t.height>=r.height)this._drawingCanvas.width=t.width,this._drawingCanvas.height=t.height,this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="",e=!0;else {if(this._drawingCanvas.width=r.width,this._drawingCanvas.height=r.height,"Fill"===this._contentMode){var i=t.width/r.width,n=t.height/r.height,o=(r.width*i-r.width)/2,s=(r.height*n-r.height)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+i+", 0.0, 0.0, "+n+", "+o+", "+s+")";}else if("AspectFit"===this._contentMode||"AspectFill"===this._contentMode){var a=r.width/r.height,f=t.width/t.height;if(a>=f&&"AspectFit"===this._contentMode||a<=f&&"AspectFill"===this._contentMode){var l=t.width/r.width,u=(r.width*l-r.width)/2,h=(r.height*l-r.height)/2+(t.height-r.height*l)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+l+", 0.0, 0.0, "+l+", "+u+", "+h+")";}else if(a<f&&"AspectFit"===this._contentMode||a>f&&"AspectFill"===this._contentMode){var c=t.height/r.height,d=(r.width*c-r.width)/2+(t.width-r.width*c)/2,p=(r.height*c-r.height)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+c+", 0.0, 0.0, "+c+", "+d+", "+p+")";}}this._globalTransform=void 0;}}if(void 0===this._drawingCanvas||!0===e){var y=1,m=1,v=0,g=0,b={width:void 0!==this._container?this._container.clientWidth:0,height:void 0!==this._container?this._container.clientHeight:0},_=this._videoItem.videoSize;if("Fill"===this._contentMode)y=b.width/_.width,m=b.height/_.height;else if("AspectFit"===this._contentMode||"AspectFill"===this._contentMode){var w=_.width/_.height,k=b.width/b.height;w>=k&&"AspectFit"===this._contentMode||w<=k&&"AspectFill"===this._contentMode?(y=m=b.width/_.width,g=(b.height-_.height*m)/2):(w<k&&"AspectFit"===this._contentMode||w>k&&"AspectFill"===this._contentMode)&&(y=m=b.height/_.height,v=(b.width-_.width*y)/2);}this._globalTransform={a:y,b:0,c:0,d:m,tx:v,ty:g};}}},{key:"_update",value:function(){void 0!==this._videoItem&&(this._resize(),this._renderer.drawFrame(this._currentFrame),this._renderer.playAudio(this._currentFrame));}}]),e}();},function(e,t,r){var i=r(13),n=r(63),o=r(66);e.exports={Parser:i.Parser,Player:n.Player,autoload:o.AutoLoader.autoload},o.AutoLoader.autoload();},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),s=r(5),a=r(15),f=r(14),l="MLHVCSQRZmlhvcsqrz";t.Renderer=function(){function e(t){i(this,e),this._owner=void 0,this._prepared=!1,this._undrawFrame=void 0,this._bitmapCache=void 0,this._soundsQueue=[],this._owner=t;}return o(e,[{key:"dataURLtoBlob",value:function(e){for(var t=e.split(","),r=t[0].match(/:(.*?);/)[1],i=atob(t[1]),n=i.length,o=new Uint8Array(n);n--;)o[n]=i.charCodeAt(n);return new Blob([o],{type:r})}},{key:"prepare",value:function(){var e=this;if(this._prepared=!1,this._bitmapCache=void 0,void 0===this._owner._videoItem.images||0==Object.keys(this._owner._videoItem.images).length)return this._bitmapCache={},void(this._prepared=!0);if(void 0===this._bitmapCache){var t,r;!function(){e._bitmapCache={};var i=0,n=0;for(t in e._owner._videoItem.images){var o=e._owner._videoItem.images[t];if(0===o.indexOf("iVBO")||0===o.indexOf("/9j/2w")){i++;var s=document.createElement("img");s.onload=function(){++n==i&&(this._prepared=!0,"number"==typeof this._undrawFrame&&(this.drawFrame(this._undrawFrame),this._undrawFrame=void 0));}.bind(e),s.src="data:image/png;base64,"+o;var a=t.replace(".matte","");e._bitmapCache[a]=s;}else 0===o.indexOf("SUQz")&&void 0!==window.Howl&&(i++,r=new Howl({src:["Google Inc."===navigator.vendor?URL.createObjectURL(e.dataURLtoBlob("data:audio/x-mpeg;base64,"+o)):"data:audio/x-mpeg;base64,"+o],html5:"Google Inc."===navigator.vendor||void 0,preload:"Google Inc."===navigator.vendor||void 0,format:"Google Inc."===navigator.vendor?["mp3"]:void 0}),r.once("load",function(){++n==i&&(this._prepared=!0,"number"==typeof this._undrawFrame&&(this.drawFrame(this._undrawFrame),this._undrawFrame=void 0));}.bind(e)),r.on("loaderror",function(e){console.error(e);}),e._bitmapCache[t]=r);}}();}}},{key:"clear",value:function(){var e=(this._owner._drawingCanvas||this._owner._container).getContext("2d"),t={x:0,y:0,width:(this._owner._drawingCanvas||this._owner._container).width,height:(this._owner._drawingCanvas||this._owner._container).height};e.clearRect(t.x,t.y,t.width,t.height);}},{key:"clearAudios",value:function(){this._soundsQueue.forEach(function(e){e.player.stop(e.playID);}),this._soundsQueue=[];}},{key:"drawFrame",value:function(e){var t=this;if(this._prepared){var r=(this._owner._drawingCanvas||this._owner._container).getContext("2d"),i={x:0,y:0,width:(this._owner._drawingCanvas||this._owner._container).width,height:(this._owner._drawingCanvas||this._owner._container).height};r.clearRect(i.x,i.y,i.width,i.height);var n=new Map,o=!1,s=this._owner._videoItem.sprites;s.forEach(function(i,a){if(-1==s[a].imageKey.indexOf(".matte"))return void t.drawSprite(i,r,e);if(-1!=i.imageKey.indexOf(".matte"))return void n.set(i.imageKey,i);var f=s[a-1];if(o&&(null==i.matteKey||0==i.matteKey.length||i.matteKey!=f.matteKey)){o=!1;var l=n.get(i.matteKey);r.globalCompositeOperation="destination-in",t.drawSprite(l,r,e),r.globalCompositeOperation="source-over",r.restore();}if(null==i.matteKey||null!=f.matteKey&&0!=f.matteKey.length&&f.matteKey==i.matteKey||(o=!0,r.save()),t.drawSprite(i,r,e),o&&a==s.length-1){var l=n.get(i.matteKey);r.globalCompositeOperation="destination-in",t.drawSprite(l,r,e),r.globalCompositeOperation="source-over",r.restore();}});}else this._undrawFrame=e;}},{key:"drawSprite",value:function(e,t,r){var i=this,o=e.frames[this._owner._currentFrame];if(!(o.alpha<.05)){t.save(),this._owner._globalTransform&&t.transform(this._owner._globalTransform.a,this._owner._globalTransform.b,this._owner._globalTransform.c,this._owner._globalTransform.d,this._owner._globalTransform.tx,this._owner._globalTransform.ty),t.globalAlpha=o.alpha,t.transform(o.transform.a,o.transform.b,o.transform.c,o.transform.d,o.transform.tx,o.transform.ty);var l=e.imageKey.replace(".matte",""),u=this._owner._dynamicImage[l]||this._bitmapCache[l]||this._owner._videoItem.images[l];if("string"==typeof u){var h=this._bitmapCache[e.imageKey]||document.createElement("img"),c=void 0,d=void 0;if(0===u.indexOf("iVBO")||0===u.indexOf("/9j/2w")?h.src="data:image/png;base64,"+u:(h._svgaSrc!==u&&(h._svgaSrc=u,h.src=u),c=o.layout.width,d=o.layout.height),this._bitmapCache[e.imageKey]=h,void 0!==o.maskPath&&null!==o.maskPath&&(this.drawBezier(t,o.maskPath),t.clip()),void 0!==this._owner._dynamicImageTransform[e.imageKey]){t.save();var p=this._owner._dynamicImageTransform[e.imageKey];t.transform(p[0],p[1],p[2],p[3],p[4],p[5]);}c&&d?t.drawImage(h,0,0,c,d):t.drawImage(h,0,0),void 0!==this._owner._dynamicImageTransform[e.imageKey]&&t.restore();}else if("object"===(void 0===u?"undefined":n(u))){if(void 0!==o.maskPath&&null!==o.maskPath&&(o.maskPath._styles=void 0,this.drawBezier(t,o.maskPath),t.clip()),void 0!==this._owner._dynamicImageTransform[e.imageKey]){t.save();var y=this._owner._dynamicImageTransform[e.imageKey];t.transform(y[0],y[1],y[2],y[3],y[4],y[5]);}t.drawImage(u,0,0),void 0!==this._owner._dynamicImageTransform[e.imageKey]&&t.restore();}o.shapes&&o.shapes.forEach(function(e){"shape"===e.type&&e.pathArgs&&e.pathArgs.d&&i.drawBezier(t,new s.BezierPath(e.pathArgs.d,e.transform,e.styles)),"ellipse"===e.type&&e.pathArgs&&i.drawEllipse(t,new a.EllipsePath(parseFloat(e.pathArgs.x)||0,parseFloat(e.pathArgs.y)||0,parseFloat(e.pathArgs.radiusX)||0,parseFloat(e.pathArgs.radiusY)||0,e.transform,e.styles)),"rect"===e.type&&e.pathArgs&&i.drawRect(t,new f.RectPath(parseFloat(e.pathArgs.x)||0,parseFloat(e.pathArgs.y)||0,parseFloat(e.pathArgs.width)||0,parseFloat(e.pathArgs.height)||0,parseFloat(e.pathArgs.cornerRadius)||0,e.transform,e.styles));});var m=this._owner._dynamicText[e.imageKey];if(void 0!==m){t.textBaseline="middle",t.font=m.style;var v=t.measureText(m.text).width;t.fillStyle=m.color;var g=void 0!==m.offset&&void 0!==m.offset.x?isNaN(parseFloat(m.offset.x))?0:parseFloat(m.offset.x):0,b=void 0!==m.offset&&void 0!==m.offset.y?isNaN(parseFloat(m.offset.y))?0:parseFloat(m.offset.y):0;t.fillText(m.text,(o.layout.width-v)/2+g,o.layout.height/2+b);}t.restore();}}},{key:"playAudio",value:function(e){var t=this;if(this._owner._forwardAnimating&&this._owner._videoItem.audios instanceof Array){this._owner._videoItem.audios.forEach(function(r){if(r.startFrame===e&&void 0!==t._bitmapCache[r.audioKey]&&"function"==typeof t._bitmapCache[r.audioKey].play){var i={playID:t._bitmapCache[r.audioKey].play(),player:t._bitmapCache[r.audioKey],endFrame:r.endFrame};i.player.seek(r.startTime/1e3,i.playID),t._soundsQueue.push(i);}});var r=!1;this._soundsQueue.forEach(function(t){e>=t.endFrame&&(r=!0,t.player.stop(t.playID));}),r&&(this._soundsQueue=this._soundsQueue.filter(function(t){return e<t.endFrame}));}}},{key:"resetShapeStyles",value:function(e,t){var r=t._styles;void 0!==r&&(r&&r.stroke?e.strokeStyle="rgba("+parseInt(255*r.stroke[0])+", "+parseInt(255*r.stroke[1])+", "+parseInt(255*r.stroke[2])+", "+r.stroke[3]+")":e.strokeStyle="transparent",r&&(e.lineWidth=r.strokeWidth||void 0,e.lineCap=r.lineCap||void 0,e.lineJoin=r.lineJoin||void 0,e.miterLimit=r.miterLimit||void 0),r&&r.fill?e.fillStyle="rgba("+parseInt(255*r.fill[0])+", "+parseInt(255*r.fill[1])+", "+parseInt(255*r.fill[2])+", "+r.fill[3]+")":e.fillStyle="transparent",r&&r.lineDash&&e.setLineDash(r.lineDash));}},{key:"drawBezier",value:function(e,t){var r=this;e.save(),this.resetShapeStyles(e,t),void 0!==t._transform&&null!==t._transform&&e.transform(t._transform.a,t._transform.b,t._transform.c,t._transform.d,t._transform.tx,t._transform.ty);var i={x:0,y:0,x1:0,y1:0,x2:0,y2:0};e.beginPath(),t._d.replace(/([a-zA-Z])/g,"|||$1 ").replace(/,/g," ").split("|||").forEach(function(t){if(0!=t.length){var n=t.substr(0,1);if(l.indexOf(n)>=0){var o=t.substr(1).trim().split(" ");r.drawBezierElement(e,i,n,o);}}}),t._styles&&t._styles.fill&&e.fill(),t._styles&&t._styles.stroke&&e.stroke(),e.restore();}},{key:"drawBezierElement",value:function(e,t,r,i){switch(r){case"M":t.x=Number(i[0]),t.y=Number(i[1]),e.moveTo(t.x,t.y);break;case"m":t.x+=Number(i[0]),t.y+=Number(i[1]),e.moveTo(t.x,t.y);break;case"L":t.x=Number(i[0]),t.y=Number(i[1]),e.lineTo(t.x,t.y);break;case"l":t.x+=Number(i[0]),t.y+=Number(i[1]),e.lineTo(t.x,t.y);break;case"H":t.x=Number(i[0]),e.lineTo(t.x,t.y);break;case"h":t.x+=Number(i[0]),e.lineTo(t.x,t.y);break;case"V":t.y=Number(i[0]),e.lineTo(t.x,t.y);break;case"v":t.y+=Number(i[0]),e.lineTo(t.x,t.y);break;case"C":t.x1=Number(i[0]),t.y1=Number(i[1]),t.x2=Number(i[2]),t.y2=Number(i[3]),t.x=Number(i[4]),t.y=Number(i[5]),e.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y);break;case"c":t.x1=t.x+Number(i[0]),t.y1=t.y+Number(i[1]),t.x2=t.x+Number(i[2]),t.y2=t.y+Number(i[3]),t.x+=Number(i[4]),t.y+=Number(i[5]),e.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y);break;case"S":t.x1&&t.y1&&t.x2&&t.y2?(t.x1=t.x-t.x2+t.x,t.y1=t.y-t.y2+t.y,t.x2=Number(i[0]),t.y2=Number(i[1]),t.x=Number(i[2]),t.y=Number(i[3]),e.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y)):(t.x1=Number(i[0]),t.y1=Number(i[1]),t.x=Number(i[2]),t.y=Number(i[3]),e.quadraticCurveTo(t.x1,t.y1,t.x,t.y));break;case"s":t.x1&&t.y1&&t.x2&&t.y2?(t.x1=t.x-t.x2+t.x,t.y1=t.y-t.y2+t.y,t.x2=t.x+Number(i[0]),t.y2=t.y+Number(i[1]),t.x+=Number(i[2]),t.y+=Number(i[3]),e.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y)):(t.x1=t.x+Number(i[0]),t.y1=t.y+Number(i[1]),t.x+=Number(i[2]),t.y+=Number(i[3]),e.quadraticCurveTo(t.x1,t.y1,t.x,t.y));break;case"Q":t.x1=Number(i[0]),t.y1=Number(i[1]),t.x=Number(i[2]),t.y=Number(i[3]),e.quadraticCurveTo(t.x1,t.y1,t.x,t.y);break;case"q":t.x1=t.x+Number(i[0]),t.y1=t.y+Number(i[1]),t.x+=Number(i[2]),t.y+=Number(i[3]),e.quadraticCurveTo(t.x1,t.y1,t.x,t.y);break;case"A":case"a":break;case"Z":case"z":e.closePath();}}},{key:"drawEllipse",value:function(e,t){e.save(),this.resetShapeStyles(e,t),void 0!==t._transform&&null!==t._transform&&e.transform(t._transform.a,t._transform.b,t._transform.c,t._transform.d,t._transform.tx,t._transform.ty);var r=t._x-t._radiusX,i=t._y-t._radiusY,n=2*t._radiusX,o=2*t._radiusY,s=n/2*.5522848,a=o/2*.5522848,f=r+n,l=i+o,u=r+n/2,h=i+o/2;e.beginPath(),e.moveTo(r,h),e.bezierCurveTo(r,h-a,u-s,i,u,i),e.bezierCurveTo(u+s,i,f,h-a,f,h),e.bezierCurveTo(f,h+a,u+s,l,u,l),e.bezierCurveTo(u-s,l,r,h+a,r,h),t._styles&&t._styles.fill&&e.fill(),t._styles&&t._styles.stroke&&e.stroke(),e.restore();}},{key:"drawRect",value:function(e,t){e.save(),this.resetShapeStyles(e,t),void 0!==t._transform&&null!==t._transform&&e.transform(t._transform.a,t._transform.b,t._transform.c,t._transform.d,t._transform.tx,t._transform.ty);var r=t._x,i=t._y,n=t._width,o=t._height,s=t._cornerRadius;n<2*s&&(s=n/2),o<2*s&&(s=o/2),e.beginPath(),e.moveTo(r+s,i),e.arcTo(r+n,i,r+n,i+o,s),e.arcTo(r+n,i+o,r,i+o,s),e.arcTo(r,i+o,r,i,s),e.arcTo(r,i,r+n,i,s),e.closePath(),t._styles&&t._styles.fill&&e.fill(),t._styles&&t._styles.stroke&&e.stroke(),e.restore();}}]),e}();},function(e,t,r){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.AutoLoader=void 0;var n=r(13),o=r(63),s=t.AutoLoader=function e(){i(this,e);};s.sharedParser=new n.Parser,s.autoload=function(e,t){if("undefined"!=typeof window&&"undefined"!=typeof document){var r=t||s.sharedParser;if(e){if(("CANVAS"===e.tagName||"DIV"===e.tagName)&&e.attributes.src&&e.attributes.src.value.indexOf(".svga")===e.attributes.src.value.length-5){var i=e.attributes.src.value,n=new o.Player(e);r.load(i,function(t){if(e.attributes.loops){var r=parseFloat(e.attributes.loops.value)||0;n.loops=r;}if(e.attributes.clearsAfterStop){var i=!("false"===e.attributes.clearsAfterStop.value);n.clearsAfterStop=i;}n.setVideoItem(t),n.startAnimation();}),e.player=n;}}else for(var a=document.querySelectorAll('[src$=".svga"]'),f=0;f<a.length;f++){var e=a[f];s.autoload(e);}}};}])});
	});

	var SVGA = /*@__PURE__*/getDefaultExportFromCjs(svga_min);

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func
	  (function () { return this; })() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var path = {};

	var aFunction = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof NativeConstructor) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return NativeConstructor.apply(this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global_1 : STATIC ? global_1[TARGET] : (global_1[TARGET] || {}).prototype;

	  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && typeof sourceProperty == 'function') resultProperty = functionBindContext(Function.call, sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(resultProperty, 'sham', true);
	    }

	    target[key] = resultProperty;

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!has(path, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
	      // export real prototype methods
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var isPure = true;

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.7.0',
	  mode:  'pure' ,
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var useSymbolAsUid = nativeSymbol
	  // eslint-disable-next-line no-undef
	  && !Symbol.sham
	  // eslint-disable-next-line no-undef
	  && typeof Symbol.iterator == 'symbol';

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
	    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var aFunction$1 = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global_1.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	_export({ target: 'Array', proto: true, forced: FORCED }, {
	  concat: function concat(arg) { // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var entryVirtual = function (CONSTRUCTOR) {
	  return path[CONSTRUCTOR + 'Prototype'];
	};

	var concat = entryVirtual('Array').concat;

	var ArrayPrototype = Array.prototype;

	var concat_1 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
	};

	var concat$1 = concat_1;

	var concat$2 = concat$1;

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var hiddenKeys = {};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	var f$3 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$3
	};

	var nativeAssign = Object.assign;
	var defineProperty = Object.defineProperty;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	var objectAssign = !nativeAssign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (descriptors && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : nativeAssign;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
	  assign: objectAssign
	});

	var assign = path.Object.assign;

	var assign$1 = assign;

	var assign$2 = assign$1;

	var $stringify = getBuiltIn('JSON', 'stringify');
	var re = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var fix = function (match, offset, string) {
	  var prev = string.charAt(offset - 1);
	  var next = string.charAt(offset + 1);
	  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
	    return '\\u' + match.charCodeAt(0).toString(16);
	  } return match;
	};

	var FORCED$1 = fails(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});

	if ($stringify) {
	  // https://github.com/tc39/proposal-well-formed-stringify
	  _export({ target: 'JSON', stat: true, forced: FORCED$1 }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var result = $stringify.apply(null, arguments);
	      return typeof result == 'string' ? result.replace(re, fix) : result;
	    }
	  });
	}

	if (!path.JSON) path.JSON = { stringify: JSON.stringify };

	// eslint-disable-next-line no-unused-vars
	var stringify = function stringify(it, replacer, space) {
	  return path.JSON.stringify.apply(null, arguments);
	};

	var stringify$1 = stringify;

	var stringify$2 = stringify$1;

	var iterators = {};

	var functionToString = Function.toString;

	// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var WeakMap$1 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;
	  set = function (it, metadata) {
	    metadata.facade = it;
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	// `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {};

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var html = getBuiltIn('document', 'documentElement');

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	var objectToString = toStringTagSupport ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var defineProperty$1 = objectDefineProperty.f;





	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!has(target, TO_STRING_TAG$2)) {
	      defineProperty$1(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !toStringTagSupport) {
	      createNonEnumerableProperty(target, 'toString', objectToString);
	    }
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





	var returnThis = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  iterators[TO_STRING_TAG] = returnThis;
	  return IteratorConstructor;
	};

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var redefine = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty(target, key, value);
	};

	var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis$1 = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      iterators[TO_STRING_TAG] = returnThis$1;
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if (( FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
	  }
	  iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
	iterators.Arguments = iterators.Array;

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG$3) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
	  }
	  iterators[COLLECTION_NAME] = iterators.Array;
	}

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6)
	};

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var defineProperty$2 = Object.defineProperty;
	var cache = {};

	var thrower = function (it) { throw it; };

	var arrayMethodUsesToLength = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;

	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !descriptors) return true;
	    var O = { length: -1 };

	    if (ACCESSORS) defineProperty$2(O, 1, { enumerable: true, get: thrower });
	    else O[1] = 1;

	    method.call(O, argument0, argument1);
	  });
	};

	var $forEach = arrayIteration.forEach;



	var STRICT_METHOD = arrayMethodIsStrict('forEach');
	var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	var arrayForEach = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// `Array.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
	  forEach: arrayForEach
	});

	var forEach = entryVirtual('Array').forEach;

	var forEach$1 = forEach;

	var ArrayPrototype$1 = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach_1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$1 || (it instanceof Array && own === ArrayPrototype$1.forEach)
	    // eslint-disable-next-line no-prototype-builtins
	    || DOMIterables.hasOwnProperty(classof(it)) ? forEach$1 : own;
	};

	var forEach$2 = forEach_1;

	var f$4 = wellKnownSymbol;

	var wellKnownSymbolWrapped = {
		f: f$4
	};

	var defineProperty$3 = objectDefineProperty.f;

	var defineWellKnownSymbol = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has(Symbol, NAME)) defineProperty$3(Symbol, NAME, {
	    value: wellKnownSymbolWrapped.f(NAME)
	  });
	};

	// `Symbol.iterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol('iterator');

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$2 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$2(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$2(true)
	};

	var charAt = stringMultibyte.charAt;



	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$1 = internalState.set;
	var getInternalState$1 = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$1(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$1(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var iterator = wellKnownSymbolWrapped.f('iterator');

	var iterator$1 = iterator;

	var iterator$2 = iterator$1;

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$5
	};

	var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var f$6 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]'
	    ? getWindowNames(it)
	    : nativeGetOwnPropertyNames(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
		f: f$6
	};

	var $forEach$1 = arrayIteration.forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE$1 = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState$2 = internalState.set;
	var getInternalState$2 = internalState.getterFor(SYMBOL);
	var ObjectPrototype$1 = Object[PROTOTYPE$1];
	var $Symbol = global_1.Symbol;
	var $stringify$1 = getBuiltIn('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var nativeDefineProperty$1 = objectDefineProperty.f;
	var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore$1 = shared('wks');
	var QObject = global_1.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = descriptors && fails(function () {
	  return objectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
	  nativeDefineProperty$1(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
	    nativeDefineProperty$1(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty$1;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
	  setInternalState$2(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!descriptors) symbol.description = description;
	  return symbol;
	};

	var isSymbol = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPrimitive(P, true);
	  anObject(Attributes);
	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty$1(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
	  if (this === ObjectPrototype$1 && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype$1 && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype$1, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor
	if (!nativeSymbol) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
	    return getInternalState$2(this).tag;
	  });

	  redefine($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
	  objectDefineProperty.f = $defineProperty;
	  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
	  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

	  wellKnownSymbolWrapped.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };

	  if (descriptors) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$2(this).description;
	      }
	    });
	  }
	}

	_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
	  Symbol: $Symbol
	});

	$forEach$1(objectKeys(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol(name);
	});

	_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return objectGetOwnPropertySymbols.f(toObject(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify
	if ($stringify$1) {
	  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
	    var symbol = $Symbol();
	    // MS Edge converts symbol values to JSON as {}
	    return $stringify$1([symbol]) != '[null]'
	      // WebKit converts symbol values to JSON as null
	      || $stringify$1({ a: symbol }) != '{}'
	      // V8 throws on boxed symbols
	      || $stringify$1(Object(symbol)) != '{}';
	  });

	  _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var args = [it];
	      var index = 1;
	      var $replacer;
	      while (arguments.length > index) args.push(arguments[index++]);
	      $replacer = replacer;
	      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	      if (!isArray(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify$1.apply(null, args);
	    }
	  });
	}

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
	}
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol('asyncIterator');

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol('hasInstance');

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol('isConcatSpreadable');

	// `Symbol.match` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.match
	defineWellKnownSymbol('match');

	// `Symbol.matchAll` well-known symbol
	defineWellKnownSymbol('matchAll');

	// `Symbol.replace` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.replace
	defineWellKnownSymbol('replace');

	// `Symbol.search` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.search
	defineWellKnownSymbol('search');

	// `Symbol.species` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.species
	defineWellKnownSymbol('species');

	// `Symbol.split` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.split
	defineWellKnownSymbol('split');

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol('toPrimitive');

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol('toStringTag');

	// `Symbol.unscopables` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol('unscopables');

	// JSON[@@toStringTag] property
	// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
	setToStringTag(global_1.JSON, 'JSON', true);

	var symbol = path.Symbol;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol('asyncDispose');

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement
	defineWellKnownSymbol('dispose');

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol('observable');

	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol('patternMatch');

	// TODO: remove from `core-js@4`


	defineWellKnownSymbol('replaceAll');

	// TODO: Remove from `core-js@4`


	var symbol$1 = symbol;

	var symbol$2 = symbol$1;

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof symbol$2 === "function" && typeof iterator$2 === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof symbol$2 === "function" && obj.constructor === symbol$2 && obj !== symbol$2.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	var $some = arrayIteration.some;



	var STRICT_METHOD$1 = arrayMethodIsStrict('some');
	var USES_TO_LENGTH$1 = arrayMethodUsesToLength('some');

	// `Array.prototype.some` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.some
	_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || !USES_TO_LENGTH$1 }, {
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var some = entryVirtual('Array').some;

	var ArrayPrototype$2 = Array.prototype;

	var some_1 = function (it) {
	  var own = it.some;
	  return it === ArrayPrototype$2 || (it instanceof Array && own === ArrayPrototype$2.some) ? some : own;
	};

	var some$1 = some_1;

	var some$2 = some$1;

	var slice = [].slice;
	var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

	var wrap$1 = function (scheduler) {
	  return function (handler, timeout /* , ...arguments */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
	    } : handler, timeout);
	  };
	};

	// ie9- setTimeout & setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
	_export({ global: true, bind: true, forced: MSIE }, {
	  // `setTimeout` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
	  setTimeout: wrap$1(global_1.setTimeout),
	  // `setInterval` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	  setInterval: wrap$1(global_1.setInterval)
	});

	var setInterval = path.setInterval;

	var setInterval$1 = setInterval;

	// `Date.now` method
	// https://tc39.github.io/ecma262/#sec-date.now
	_export({ target: 'Date', stat: true }, {
	  now: function now() {
	    return new Date().getTime();
	  }
	});

	var now = path.Date.now;

	var now$1 = now;

	var now$2 = now$1;

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var ArrayPrototype$3 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$3[ITERATOR$2] === it);
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$3]
	    || it['@@iterator']
	    || iterators[classof(it)];
	};

	var iteratorClose = function (iterator) {
	  var returnMethod = iterator['return'];
	  if (returnMethod !== undefined) {
	    return anObject(returnMethod.call(iterator)).value;
	  }
	};

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = iterFn.call(iterable);
	  }

	  next = iterator.next;
	  while (!(step = next.call(iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator);
	      throw error;
	    }
	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  } return new Result(false);
	};

	var $AggregateError = function AggregateError(errors, message) {
	  var that = this;
	  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
	  if (objectSetPrototypeOf) {
	    that = objectSetPrototypeOf(new Error(undefined), objectGetPrototypeOf(that));
	  }
	  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
	  var errorsArray = [];
	  iterate(errors, errorsArray.push, { that: errorsArray });
	  createNonEnumerableProperty(that, 'errors', errorsArray);
	  return that;
	};

	$AggregateError.prototype = objectCreate(Error.prototype, {
	  constructor: createPropertyDescriptor(5, $AggregateError),
	  message: createPropertyDescriptor(5, ''),
	  name: createPropertyDescriptor(5, 'AggregateError')
	});

	_export({ global: true }, {
	  AggregateError: $AggregateError
	});

	var nativePromiseConstructor = global_1.Promise;

	var redefineAll = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else redefine(target, key, src[key], options);
	  } return target;
	};

	var SPECIES$2 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$2]) {
	    defineProperty(Constructor, SPECIES$2, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var anInstance = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$4] = function () {
	    return this;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$4] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var SPECIES$3 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.github.io/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction(S);
	};

	var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

	var engineIsNode = classofRaw(global_1.process) == 'process';

	var location = global_1.location;
	var set$1 = global_1.setImmediate;
	var clear = global_1.clearImmediate;
	var process$1 = global_1.process;
	var MessageChannel = global_1.MessageChannel;
	var Dispatch = global_1.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;

	var run = function (id) {
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global_1.postMessage(id + '', location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set$1 || !clear) {
	  set$1 = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (engineIsNode) {
	    defer = function (id) {
	      process$1.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !engineIsIos) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = functionBindContext(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global_1.addEventListener &&
	    typeof postMessage == 'function' &&
	    !global_1.importScripts &&
	    location && location.protocol !== 'file:' &&
	    !fails(post)
	  ) {
	    defer = post;
	    global_1.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
	    defer = function (id) {
	      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task = {
	  set: set$1,
	  clear: clear
	};

	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var macrotask = task.set;



	var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
	var document$2 = global_1.document;
	var process$2 = global_1.process;
	var Promise$1 = global_1.Promise;
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global_1, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify, toggle, node, promise, then;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (engineIsNode && (parent = process$2.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  if (!engineIsIos && !engineIsNode && MutationObserver && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$1.resolve(undefined);
	    then = promise.then;
	    notify = function () {
	      then.call(promise, flush);
	    };
	  // Node.js without promises
	  } else if (engineIsNode) {
	    notify = function () {
	      process$2.nextTick(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global_1, flush);
	    };
	  }
	}

	var microtask = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify();
	  } last = task;
	};

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};

	// 25.4.1.5 NewPromiseCapability(C)
	var f$7 = function (C) {
	  return new PromiseCapability(C);
	};

	var newPromiseCapability = {
		f: f$7
	};

	var promiseResolve = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var hostReportErrors = function (a, b) {
	  var console = global_1.console;
	  if (console && console.error) {
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var task$1 = task.set;











	var SPECIES$4 = wellKnownSymbol('species');
	var PROMISE = 'Promise';
	var getInternalState$3 = internalState.get;
	var setInternalState$3 = internalState.set;
	var getInternalPromiseState = internalState.getterFor(PROMISE);
	var PromiseConstructor = nativePromiseConstructor;
	var TypeError$1 = global_1.TypeError;
	var document$3 = global_1.document;
	var process$3 = global_1.process;
	var $fetch = getBuiltIn('fetch');
	var newPromiseCapability$1 = newPromiseCapability.f;
	var newGenericPromiseCapability = newPromiseCapability$1;
	var DISPATCH_EVENT = !!(document$3 && document$3.createEvent && global_1.dispatchEvent);
	var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper;

	var FORCED$2 = isForced_1(PROMISE, function () {
	  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
	  if (!GLOBAL_CORE_JS_PROMISE) {
	    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	    // We can't detect it synchronously, so just check versions
	    if (engineV8Version === 66) return true;
	    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    if (!engineIsNode && !NATIVE_REJECTION_EVENT) return true;
	  }
	  // We need Promise#finally in the pure version for preventing prototype pollution
	  if ( !PromiseConstructor.prototype['finally']) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false;
	  // Detect correctness of subclassing with @@species support
	  var promise = PromiseConstructor.resolve(1);
	  var FakePromise = function (exec) {
	    exec(function () { /* empty */ }, function () { /* empty */ });
	  };
	  var constructor = promise.constructor = {};
	  constructor[SPECIES$4] = FakePromise;
	  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
	});

	var INCORRECT_ITERATION = FORCED$2 || !checkCorrectnessOfIteration(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
	});

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};

	var notify$1 = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0;
	    // variable length - can't use forEach
	    while (chain.length > index) {
	      var reaction = chain[index++];
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	            state.rejection = HANDLED;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // can throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }
	    state.reactions = [];
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$3.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global_1.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  task$1.call(global_1, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform(function () {
	        if (engineIsNode) {
	          process$3.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (state) {
	  task$1.call(global_1, function () {
	    var promise = state.facade;
	    if (engineIsNode) {
	      process$3.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify$1(state, true);
	};

	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          then.call(value,
	            bind(internalResolve, wrapper, state),
	            bind(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify$1(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED$2) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromiseConstructor, PROMISE);
	    aFunction(executor);
	    Internal.call(this);
	    var state = getInternalState$3(this);
	    try {
	      executor(bind(internalResolve, state), bind(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    setInternalState$3(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = engineIsNode ? process$3.domain : undefined;
	      state.parent = true;
	      state.reactions.push(reaction);
	      if (state.state != PENDING) notify$1(state, false);
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState$3(promise);
	    this.promise = promise;
	    this.resolve = bind(internalResolve, state);
	    this.reject = bind(internalReject, state);
	  };
	  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	_export({ global: true, wrap: true, forced: FORCED$2 }, {
	  Promise: PromiseConstructor
	});

	setToStringTag(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);

	PromiseWrapper = getBuiltIn(PROMISE);

	// statics
	_export({ target: PROMISE, stat: true, forced: FORCED$2 }, {
	  // `Promise.reject` method
	  // https://tc39.github.io/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability$1(this);
	    capability.reject.call(undefined, r);
	    return capability.promise;
	  }
	});

	_export({ target: PROMISE, stat: true, forced: isPure  }, {
	  // `Promise.resolve` method
	  // https://tc39.github.io/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve( this === PromiseWrapper ? PromiseConstructor : this, x);
	  }
	});

	_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
	  // `Promise.all` method
	  // https://tc39.github.io/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        $promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.github.io/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      iterate(iterable, function (promise) {
	        $promiseResolve.call(C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// `Promise.allSettled` method
	// https://github.com/tc39/proposal-promise-allSettled
	_export({ target: 'Promise', stat: true }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapability.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aFunction(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: error };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var PROMISE_ANY_ERROR = 'No one promise resolved';

	// `Promise.any` method
	// https://github.com/tc39/proposal-promise-any
	_export({ target: 'Promise', stat: true }, {
	  any: function any(iterable) {
	    var C = this;
	    var capability = newPromiseCapability.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aFunction(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        errors.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (error) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = error;
	          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!nativePromiseConstructor && fails(function () {
	  nativePromiseConstructor.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
	});

	// `Promise.prototype.finally` method
	// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
	_export({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn('Promise'));
	    var isFunction = typeof onFinally == 'function';
	    return this.then(
	      isFunction ? function (x) {
	        return promiseResolve(C, onFinally()).then(function () { return x; });
	      } : onFinally,
	      isFunction ? function (e) {
	        return promiseResolve(C, onFinally()).then(function () { throw e; });
	      } : onFinally
	    );
	  }
	});

	var promise$1 = path.Promise;

	var promise$2 = promise$1;

	var promise$3 = promise$2;

	// `Array.isArray` method
	// https://tc39.github.io/ecma262/#sec-array.isarray
	_export({ target: 'Array', stat: true }, {
	  isArray: isArray
	});

	var isArray$1 = path.Array.isArray;

	var isArray$2 = isArray$1;

	var isArray$3 = isArray$2;

	// https://wiki.changingedu.com/pages/viewpage.action?pageId=13763349
	// const appname = ['student', 'teacher', 'assistant', 'partner', 'livestudent', 'liveparent', 'studentOnlineIpad', 'qingStudentOnline', 'qingTeacherOnline', 'studentOnlineMac']
	// const appplatform = ['web', 'win', 'ios', 'app', 'pad', 'apad', 'AndroidPhone', 'ios_enterprise_liveapp', 'ios_liveapp', 'watchOS', 'tvOS', 'macOS']
	// UA - https://wiki.changingedu.com/pages/viewpage.action?pageId=2632395
	// student/iPhone/6.5.5 Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E302
	// IOS appplatform
	// ios_enterprise_liveapp | ios_liveapp | ios | watchOS | tvOS | macOS | pad
	// IOS appname
	// student | teacher | assistant | partner | livestudent | liveparent | unknown | studentOnlineIpad
	// Android appplatform
	// appplatform：
	// 家长/老师/助教：AndroidPhone
	// 在线家长/在线学生：AndroidPhone_liveapp
	// pad：android_pad
	// appname：
	// 家长：student
	// 老师：teacher
	// 助教：assistant
	// 在线家长：liveparent
	// 在线学生：livestudent
	// pad：studentOnlineIpad
	var ua = navigator.userAgent.toLowerCase();
	var queryObject = urlQuery(); // 'isElectron',

	var names = ['appname', 'appplatform', 'appversion', 'isApp', 'isIpad', 'isMacStudent', 'isWinElectronStudent', 'isAndroidPadStudent', 'isWeixin', 'isWinStudent', 'isWinTeacher', 'detectAppName', 'detectAppVersion'];
	function isMacStudent() {
	  if (appplatform() === 'mac') {
	    return true;
	  }

	  var re = /qqingonlinestudentmac/gi;
	  return re.test(ua);
	} // export function isElectron() {
	//   return !!(window.process && process.versions && !!process.versions.electron)
	// }
	//根据ua中轻轻特有的字段来判断是否在app中

	function isApp() {
	  if (isMacStudent() || isWinElectronStudent() || isWinStudent() || isWinTeacher()) return false;
	  return /(student|teacher|assistant|partner)/gi.test(ua) || /studentOnlineIpad/gi.test(ua) || /(Macintosh)/gi.test(ua) && 'ontouchstart' in window;
	}
	function isAndroidPadStudent() {
	  if (appplatform() === 'android_pad') {
	    return true;
	  }

	  var re = /(android_pad)/gi;
	  return re.test(ua);
	}
	function isWinStudent() {
	  if (appplatform() === 'win' && appname() === 'studentOnline') {
	    return true;
	  }

	  var re = /qingStudentOnline\/Win/gi;
	  return re.test(ua);
	}
	function isWinElectronStudent() {
	  if (appplatform() === 'win' && appname() === 'studentonlineelectron') {
	    return true;
	  }

	  var re = /studentonlineelectron/gi;
	  return re.test(ua);
	}
	function isWinTeacher() {
	  if (appplatform() === 'win' && appname() === 'teacherOnline') {
	    return true;
	  }

	  var re = /qingTeacherOnline\/Win/gi;
	  return re.test(ua);
	}
	function isIpad() {
	  var curAppPlatform = queryObject.appplatform;

	  if (curAppPlatform && curAppPlatform === 'pad') {
	    return true;
	  } // 兼容ios 13的ua


	  return /studentOnlineIpad/gi.test(ua) || /(Macintosh)/gi.test(ua) && 'ontouchstart' in window;
	}
	function isWeixin() {
	  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
	    return true;
	  }

	  return false;
	}
	function detectAppVersion() {
	  if (/Electron/i.test(ua)) {
	    return window.shell ? window.shell.temp.version : '-';
	  } else {
	    return window._feature_version;
	  }
	}
	function detectAppName(ua) {
	  ua = ua || window.navigator.userAgent;
	  var matchstr = null;
	  var appname = {
	    'teacher/': 'app-teacher',
	    'livestudent/': 'app-livestudent',
	    'liveparent/': 'app-liveparent',
	    'student/': 'app-student',
	    'assistant/': 'app-assistant',
	    'partner/': 'app-partner',
	    'studentOnlineIpad/iPad': 'pad-student',
	    'qingStudentOnline/Win': 'win-student',
	    'qingTeacherOnline/Win': 'win-teacher',
	    // User-Agent: studentOnline/android_pad/4.7.5_test(Dalvik/2.1.0 (Linux; U; Android 10; KRJ-W09 Build/HUAWEIKRJ-W09))
	    'studentOnline/android_pad/': 'android_pad-studentOnline',
	    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) qqingonlinestudentmac/0.0.4 Chrome/69.0.3497.128 Electron/4.2.12 Safari/537.36
	    'studentOnlineMac/': 'mac-studentOnlineMac',
	    // 兼容以前版本
	    'qqingonlinestudentmac/': 'mac-studentOnlineMac',
	    // Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) studentonlineelectron/0.0.1 Chrome/73.0.3683.121 Electron/5.0.8 Safari/537.36
	    'studentonlineelectron/': 'electron-studentonlineelectron',
	    "default": 'web-h5'
	  }; // winclient.

	  try {
	    if (top.qing_user_info) {
	      if (qing_user_info.type === 'student') {
	        matchstr = appname['qingStudentOnline/Win'];
	      } else {
	        matchstr = appname['qingTeacherOnline/Win'];
	      }
	    }
	  } catch (e) {
	    if (window.qing_user_info) {
	      if (qing_user_info.type === 'student') {
	        matchstr = appname['qingStudentOnline/Win'];
	      } else {
	        matchstr = appname['qingTeacherOnline/Win'];
	      }
	    }
	  } // 兼容ipad ios13


	  if (isIpad()) {
	    matchstr = appname['studentOnlineIpad/iPad'];
	  }

	  for (var key in appname) {
	    if (new RegExp(key, 'i').test(ua)) {
	      matchstr = appname[key];
	      break;
	    }
	  }

	  return matchstr || appname['default'];
	}

	function urlQuery() {
	  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search || '';
	  var objURL = {};
	  url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) {
	    objURL[$1] = $3;
	  });
	  return objURL;
	}

	function appname() {
	  var curAppName = queryObject.appname;
	  if (curAppName) return curAppName;
	  return detectAppName().split('-')[1];
	}
	function appplatform() {
	  var curAppPlatform = queryObject.appplatform;
	  if (curAppPlatform) return curAppPlatform;
	  return detectAppName().split('-')[0];
	}
	function appversion() {
	  var curAppVersion = queryObject.appversion; // 过滤apad 1.2.0_test

	  if (curAppVersion) return curAppVersion.replace(/[^0-9.]/gi, '');
	  return detectAppVersion() || '1.0.0';
	}

	try {
	  if (!sessionStorage.getItem('env_check')) {
	    var check_result = [];

	    forEach$2(names).call(names, function (it) {
	      check_result.push(it + ' :: ' + eval("".concat(it, "()")));
	    });

	    console.info("\u542F\u52A8\u73AF\u5883\u68C0\u67E5:\n\r".concat(check_result.join('\n\r')));
	    sessionStorage.setItem('env_check', true);
	  }
	} catch (e) {}

	var env = {
	  isApp: isApp,
	  // isElectron,
	  isMacStudent: isMacStudent,
	  isWinElectronStudent: isWinElectronStudent,
	  isAndroidPadStudent: isAndroidPadStudent,
	  isWeixin: isWeixin,
	  appname: appname,
	  appplatform: appplatform,
	  appversion: appversion,
	  detectAppName: detectAppName,
	  isWinStudent: isWinStudent,
	  isWinTeacher: isWinTeacher
	};

	var INVALID_ENV = 'INVILID_ENV';
	var TIMEOUT = 'TIMEOUT';
	var CB_NAME = '_qingqing_Notification_callback'; //回调函数名

	var BACKUP_CB_NAME = '_qingqing_BackupNotification_callback'; //原来的回调函数名

	var timeout = 5000; //超时时间

	var isAppENV = env.isApp(); //是否在app内

	var __callbacks = {}; //存储回调函数

	var count = 0; //记数器

	var isQQJSExternalReady = false; //QQJSExtenal是否ready

	function isTypeOf(param, type) {
	  return Object.prototype.toString.call(param) === '[object ' + type + ']';
	}

	window[CB_NAME] = function (jsonString) {
	  var param = JSON.parse(jsonString);

	  try {
	    // 兼容ipad处理的部分数据格式问题.
	    // [{"name":"homework:kejian:studentGetAnswerHistory","status":"success","param":{"result":true,"studentId":"618270888","paperId":"ED2675CEAB564D2F8F091D1C12E1A8A6","question_state":[1,1],"studentAnswer":["\\frac{2\\pi}{3}","2.47"],"queId":"ff8080814cd60e83014cd7d1498304b9"}}]
	    if (jsonString && isTypeOf(param, 'String') && (/\\/g.test(jsonString) || /\n/g.test(jsonString) || /\r/g.test(jsonString))) {
	      param = JSON.parse(jsonString.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r'));
	    }

	    if (jsonString && isTypeOf(param, 'String')) {
	      var decodeJSONString = decodeURIComponent(jsonString);
	      param = JSON.parse(decodeJSONString);

	      if (decodeJSONString && isTypeOf(param, 'String') && (/\\/g.test(decodeJSONString) || /\n/g.test(decodeJSONString) || /\r/g.test(decodeJSONString))) {
	        param = JSON.parse(decodeJSONString.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r'));
	      }
	    }
	  } catch (err) {
	    console.error(err);
	  }

	  if (isArray$3(param)) {
	    param = param[0];
	  }

	  var callbackName = param.callbackName;
	  var status = param.status;
	  var methodName = param.name;
	  var response = parseData(param.param);
	  var cbfn; //如果返回了callbackName则走新版处理（根据callbackName去执行）

	  if (callbackName) {
	    if (__callbacks[callbackName]) {
	      cbfn = __callbacks[callbackName][status];

	      if (cbfn) {
	        cbfn(response);
	      }

	      if (__callbacks[callbackName].removeAfterExecute) {
	        __callbacks[callbackName] = null;
	      }
	    }
	  } else {
	    if (__callbacks[methodName]) {
	      cbfn = __callbacks[methodName][status];

	      if (cbfn) {
	        cbfn(response);
	      }

	      if (__callbacks[methodName].removeAfterExecute) {
	        __callbacks[methodName] = null;
	      }
	    } else {
	      // 7.7.5 中发现 transferAppEasyJS 与 appJSBridge 混合使用，可能导致没有回调的问题
	      window[BACKUP_CB_NAME] && window[BACKUP_CB_NAME](jsonString);
	    }
	  }
	};
	/**
	 *
	 * @param {String} str 解析app返回的数据
	 */


	function parseData(str) {
	  if (typeof str === 'string') {
	    return JSON.parse(decodeURIComponent(str));
	  }

	  return str;
	} //ios-js ready callback


	document.addEventListener('EasyJSReady', function () {
	  console.log('ready-ios');
	});
	function QQJSExternalReady() {
	  return new promise$3(function (resolve, reject) {
	    if (isAppENV) {
	      if (isQQJSExternalReady) {
	        resolve();
	        return;
	      }

	      var startTime = now$2();

	      var sid = setInterval$1(function () {
	        if (window.QQJSExternal && QQJSExternal.qqJSCallBackGetContent && QQJSExternal.qqJSAsyncGetContentcallBack && QQJSExternal.qqJSCallBackWithContentwithMethodName) {
	          resolve();
	          isQQJSExternalReady = true;
	          clearInterval(sid);
	        } else {
	          var currentTime = now$2();

	          if (currentTime - startTime > timeout) {
	            reject(TIMEOUT);
	            clearInterval(sid);
	          }
	        }
	      }, 100);
	    }
	  });
	}
	QQJSExternalReady().then(function () {
	  QQJSExternal.qqJSCallBackWithContentwithMethodName(stringify$2({
	    methodName: CB_NAME
	  }), 'notify');
	})["catch"](function (err) {
	  console.log('QQJSExternalReady executed failed: ', err);
	});
	var appJSBridge = {
	  getData: function getData(arg) {
	    return new promise$3(function (resolve, reject) {
	      var _context, _context2;

	      var timestamp = now$2();

	      window[concat$2(_context = "__cb".concat(arg, "_")).call(_context, timestamp)] = function (data) {
	        resolve(parseData(data));
	      };

	      var isValidParam = some$2(_context2 = ['tk', 'si', 'ver', 'deviceinfo', 'userinfo', 'locationinfo', 'networkstatus']).call(_context2, function (item) {
	        return arg === item;
	      });

	      if (!isValidParam) {
	        alert('appJSBridge.getData方法入参非法');
	        return;
	      }

	      if (window.appData && window.appData[arg]) {
	        resolve(window.appData[arg]);
	        return;
	      }

	      QQJSExternalReady().then(function () {
	        var data = QQJSExternal.qqJSCallBackGetContent(arg);

	        if (data) {
	          resolve(parseData(data));
	        } else {
	          var _context3;

	          QQJSExternal.qqJSAsyncGetContentcallBack(arg, concat$2(_context3 = "__cb".concat(arg, "_")).call(_context3, timestamp));
	        }
	      })["catch"](function (data) {
	        if (data === TIMEOUT) {
	          alert('QQJSExternalReady超时！');
	        }

	        if (data === INVALID_ENV) {
	          console.log('不在app中');
	        }
	      });
	    });
	  },
	  communicate: function communicate(info, methodName) {
	    var removeAfterExecute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    return new promise$3(function (resolve, reject) {
	      QQJSExternalReady().then(function () {
	        var _context4, _context5;

	        if (_typeof_1(info) !== 'object' || typeof methodName !== 'string') {
	          alert('communicate入参不合法!');
	        }

	        info.callbackName = info.callbackName || concat$2(_context4 = "".concat(methodName, "_")).call(_context4, count++);

	        forEach$2(_context5 = ['success', 'fail', 'cancel']).call(_context5, function (status) {
	          if (info[status] && typeof info[status] === 'function') {
	            //new version
	            __callbacks[info.callbackName] = __callbacks[info.callbackName] || {};
	            __callbacks[info.callbackName][status] = info[status];
	            __callbacks[info.callbackName].removeAfterExecute = removeAfterExecute; //old version

	            __callbacks[methodName] = __callbacks[methodName] || {};
	            __callbacks[methodName][status] = info[status];
	            __callbacks[methodName].removeAfterExecute = removeAfterExecute;
	          }
	        });

	        QQJSExternal.qqJSCallBackWithContentwithMethodName(stringify$2(info), methodName);
	      });
	    });
	  }
	};

	var base = {};
	var ua$1 = window.navigator.userAgent.toLowerCase(); // base 方法

	base.isWindows = function () {
	  return !!window.qing_user_info;
	};

	base.isMac = function () {
	  var re = /studentOnlineMac/gi;
	  return re.test(ua$1);
	}; // 是否是新cef版本 -- Chrome/63.0.3239.132 Safari/537.36


	base.isSupportNewCef = function () {
	  return !!(base.isWindows() && /Chrome\/63\.0/gi.test(ua$1));
	};

	base.callWindowsFunc = function (name, data, cb) {
	  // console.info('base-callWindowsFunc', name, data, cb)
	  if (base.isWindows()) {
	    var callbackName = base.registerWindowsFunc(name, cb);
	    data = data || {};

	    if (typeof window.top.qing_user_info[name] === 'function') {
	      window.top.qing_user_info[name](callbackName, stringify$2(data));
	    }
	  } else if (base.isMacStudent() || base.isAndroidPadStudent()) {
	    if (data) {
	      var obj = assign$2(data, cb);

	      base.sendCustomNotification(obj, name, window.parent);
	    } else {
	      return data && data.url && window.open(data.url, '_blank');
	    }
	  }
	};

	base.registerWindowsFunc = function (name, cb) {
	  var _context;

	  var isUid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	  if (!base.isWindows()) {
	    return;
	  }

	  if (window.top !== window.self && !isUid) {
	    return;
	  }

	  var callbackName = isUid ? concat$2(_context = "qingqing_".concat(name, "_windows_callback_")).call(_context, ~~(Math.random() * 10000000)) : name;

	  window.top.qing_user_info[callbackName] = function (resp) {
	    if (typeof cb === 'function') {
	      cb(resp);
	    }
	  };

	  return callbackName;
	}; // 打开windows蒙板


	base.maskMainPage = function (val) {
	  if (base.isWindows() && window.qing_user_info['maskMainPage']) {
	    window.qing_user_info['maskMainPage'](val);
	  }
	};

	assign$2(base, appJSBridge);

	assign$2(base, env);

	var root = document.getElementById('qqCanvasWebSvga');
	root.style.width = '353px';
	root.style.height = '156.67px';
	var player = new SVGA.Player('#qqCanvasWebSvga');
	var parser = new SVGA.Parser('#qqCanvasWebSvga');
	player.loops = 1;
	player.clearsAfterStop = false;
	parser.load('assets/test.svga', function (videoItem) {
	  player.setVideoItem(videoItem);
	  player.startAnimation();
	});
	player.onFinished(function () {
	  console.log('finished::');
	});
	player.onFrame(function (frame) {});
	player.onPercentage(function (percentage) {
	  if (percentage > 0.8) {
	    player.stepToFrame(10, true);
	  }
	});
	console.log(base);

}());
