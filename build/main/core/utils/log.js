"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = __importDefault(require("log4js"));
log4js_1.default.configure({
    appenders: { log: { type: 'file', filename: 'log/log.log' } },
    categories: { default: { appenders: ['log'], level: 'debug' } }
});
const logger = log4js_1.default.getLogger('log');
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbHMvbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2YsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEVBQUU7SUFDN0QsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO0NBQ2hFLENBQUMsQ0FBQztBQUNILE1BQU0sTUFBTSxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXZDLGtCQUFlLE1BQU0sQ0FBQyJ9