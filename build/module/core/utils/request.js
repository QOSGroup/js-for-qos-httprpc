import axios from 'axios';
import { isNotEmpty } from '../utils';
// tslint:disable-next-line: no-let
let httpRequest;
const createAxioRequest = (baseUrl) => {
    if (isNotEmpty(httpRequest)) {
        return httpRequest;
    }
    // 创建axios实例
    const request = axios.create({
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
        return axios(config);
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
export default createAxioRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL3V0aWxzL3JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUF3QixNQUFNLE9BQU8sQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXRDLG1DQUFtQztBQUNuQyxJQUFJLFdBQTJCLENBQUM7QUFFaEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQzVDLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQzNCLE9BQU8sV0FBVyxDQUFDO0tBQ3BCO0lBQ0QsWUFBWTtJQUNaLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsT0FBTyxFQUFFLE9BQU87UUFDaEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTO0tBQzFCLENBQUMsQ0FBQztJQUVILGFBQWE7SUFDYixPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQzlCLE1BQU0sQ0FBQyxFQUFFO1FBQ1AsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1FBQ04sa0NBQWtDO1FBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUNGLENBQUM7SUFFRixrQkFBa0I7SUFDbEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUMvQixTQUFTLEVBQ1QsS0FBSyxVQUFVLHFCQUFxQixDQUFDLEdBQUc7UUFDdEMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQixrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDNUIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsd0RBQXdEO1FBQ3hELCtDQUErQztRQUMvQyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBRS9DLHVEQUF1RDtRQUN2RCxJQUFJLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN2Qyx3QkFBd0I7WUFDeEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsMkJBQTJCO1FBQzNCLCtDQUErQztRQUMvQyxNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUV6QixtREFBbUQ7UUFDbkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUgsaUVBQWlFO1FBQ2pFLE1BQU0sT0FBTyxDQUFDO1FBQ2QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUNGLENBQUM7SUFFRixhQUFhO0lBQ2IsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUMvQixHQUFHLENBQUMsRUFBRTtRQUNKLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO1FBQ04sT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FDRixDQUFDO0lBRUYsV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUN0QixPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRixlQUFlLGlCQUFpQixDQUFDIn0=