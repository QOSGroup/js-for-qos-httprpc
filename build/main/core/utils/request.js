"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
// tslint:disable-next-line: no-let
let httpRequest;
const createAxioRequest = (baseUrl) => {
    if (utils_1.isNotEmpty(httpRequest)) {
        return httpRequest;
    }
    // 创建axios实例
    const request = axios_1.default.create({
        baseURL: baseUrl,
        timeout: 200000 // 请求超时时间
    });
    // request拦截器
    request.interceptors.request.use(config => {
        return config;
    }, error => {
        // Do something with request error
        Promise.reject(error);
    });
    // timeout handler
    request.interceptors.response.use(undefined, async function axiosRetryInterceptor(err) {
        const config = err.config;
        // If config does not exist or the retry option is not set, reject
        if (!config || !config.retry) {
            return Promise.reject(err);
        }
        // Set the variable for keeping track of the retry count
        // tslint:disable-next-line: no-object-mutation
        config.__retryCount = config.__retryCount || 0;
        // Check if we've maxed out the total number of retries
        if (config.__retryCount >= config.retry) {
            // Reject with the error
            return Promise.reject(err);
        }
        // Increase the retry count
        // tslint:disable-next-line: no-object-mutation
        config.__retryCount += 1;
        // Create new promise to handle exponential backoff
        const backoff = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, config.retryDelay || 1);
        });
        // Return the promise in which recalls axios to retry the request
        await backoff;
        return axios_1.default(config);
    });
    // respone拦截器
    request.interceptors.response.use(res => {
        return res;
    }, error => {
        return Promise.reject(error);
    });
    httpRequest = request;
    return httpRequest;
};
exports.default = createAxioRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxzL3JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNkM7QUFDN0Msb0NBQXNDO0FBRXRDLG1DQUFtQztBQUNuQyxJQUFJLFdBQTJCLENBQUM7QUFFaEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQzVDLElBQUksa0JBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUMzQixPQUFPLFdBQVcsQ0FBQztLQUNwQjtJQUNELFlBQVk7SUFDWixNQUFNLE9BQU8sR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsU0FBUztLQUMxQixDQUFDLENBQUM7SUFFSCxhQUFhO0lBQ2IsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUM5QixNQUFNLENBQUMsRUFBRTtRQUNQLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtRQUNOLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FDRixDQUFDO0lBRUYsa0JBQWtCO0lBQ2xCLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDL0IsU0FBUyxFQUNULEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxHQUFHO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzVCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUVELHdEQUF3RDtRQUN4RCwrQ0FBK0M7UUFDL0MsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUUvQyx1REFBdUQ7UUFDdkQsSUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDdkMsd0JBQXdCO1lBQ3hCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUVELDJCQUEyQjtRQUMzQiwrQ0FBK0M7UUFDL0MsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFFekIsbURBQW1EO1FBQ25ELE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3BDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILGlFQUFpRTtRQUNqRSxNQUFNLE9BQU8sQ0FBQztRQUNkLE9BQU8sZUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FDRixDQUFDO0lBRUYsYUFBYTtJQUNiLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDL0IsR0FBRyxDQUFDLEVBQUU7UUFDSixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtRQUNOLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQ0YsQ0FBQztJQUVGLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDdEIsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsaUJBQWlCLENBQUMifQ==