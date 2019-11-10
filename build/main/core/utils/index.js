"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Int64BE } from 'int64-buffer';
const tweetnacl_util_1 = require("tweetnacl-util");
/**
 * 是否合法数据
 * @param value any
 */
function isNotEmpty(value) {
    if (value !== undefined && value !== '' && value != null) {
        return true;
    }
    return false;
}
exports.isNotEmpty = isNotEmpty;
function getHash256(input) {
    const sha256 = require('js-sha256');
    const hash2 = sha256.update(input);
    return hash2.array();
}
exports.getHash256 = getHash256;
// export function Int64ToBuffer(val: number) {
//   return new Int64BE(val).toBuffer();
// }
function buf2hex(buffer) {
    return Array.prototype.map
        .call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2))
        .join('');
}
exports.buf2hex = buf2hex;
function stringToBuffer(val, encoding = 'ascii') {
    return Buffer.from(val, encoding);
}
exports.stringToBuffer = stringToBuffer;
function encodeBase64(val) {
    return tweetnacl_util_1.encodeBase64(val);
}
exports.encodeBase64 = encodeBase64;
function decodeBase64(val) {
    return tweetnacl_util_1.decodeBase64(val);
}
exports.decodeBase64 = decodeBase64;
function stringToHex(str) {
    let val = '';
    // tslint:disable-next-line: no-let
    for (let i = 0; i < str.length; i++) {
        val += str.charCodeAt(i).toString(16);
    }
    return val;
}
exports.stringToHex = stringToHex;
/**
 * 乘法
 * @param arg1
 * @param arg2
 */
function accMul(arg1, arg2) {
    let m = 0;
    const s1 = arg1.toString();
    const s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
        // tslint:disable-next-line: no-empty
    }
    catch (e) { }
    try {
        m += s2.split('.')[1].length;
        // tslint:disable-next-line: no-empty
    }
    catch (e) { }
    return ((Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
        Math.pow(10, m));
}
exports.accMul = accMul;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUEwQztBQUMxQyxtREFHd0I7QUFFeEI7OztHQUdHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLEtBQVU7SUFDbkMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUN4RCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBTEQsZ0NBS0M7QUFFRCxTQUFnQixVQUFVLENBQUMsS0FBSztJQUM5QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBSkQsZ0NBSUM7QUFFRCwrQ0FBK0M7QUFDL0Msd0NBQXdDO0FBQ3hDLElBQUk7QUFFSixTQUFnQixPQUFPLENBQUMsTUFBTTtJQUM1QixPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRztTQUN2QixJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2QsQ0FBQztBQUpELDBCQUlDO0FBRUQsU0FBZ0IsY0FBYyxDQUM1QixHQUFXLEVBQ1gsV0FBMkIsT0FBTztJQUVsQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFMRCx3Q0FLQztBQUVELFNBQWdCLFlBQVksQ0FBQyxHQUFRO0lBQ25DLE9BQU8sNkJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixZQUFZLENBQUMsR0FBUTtJQUNuQyxPQUFPLDZCQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEdBQVc7SUFDckMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsbUNBQW1DO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN2QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQVBELGtDQU9DO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxJQUFZLEVBQUUsSUFBWTtJQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLElBQUk7UUFDRixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDN0IscUNBQXFDO0tBQ3RDO0lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUNkLElBQUk7UUFDRixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDN0IscUNBQXFDO0tBQ3RDO0lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUNkLE9BQU8sQ0FDTCxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUNoQixDQUFDO0FBQ0osQ0FBQztBQWhCRCx3QkFnQkMifQ==