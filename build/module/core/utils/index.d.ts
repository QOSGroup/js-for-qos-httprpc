/// <reference types="node" />
/**
 * 是否合法数据
 * @param value any
 */
export declare function isNotEmpty(value: any): boolean;
export declare function getHash256(input: any): any;
export declare function buf2hex(buffer: any): any;
export declare function stringToBuffer(val: string, encoding?: BufferEncoding): Buffer;
export declare function encodeBase64(val: any): string;
export declare function decodeBase64(val: any): Uint8Array;
export declare function stringToHex(str: string): string;
/**
 * 乘法
 * @param arg1
 * @param arg2
 */
export declare function accMul(arg1: number, arg2: number): number;
