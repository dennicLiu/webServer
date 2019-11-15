"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chance = require("chance");
const request_1 = require("../../src/request");
const response_1 = require("../../src/response");
const router_1 = require("../../src/router");
const chance = new Chance();
let router;
describe('Express Router', () => {
    beforeEach(() => {
        router = new router_1.Router();
    });
    afterEach(() => {
        router.resetMocked();
    });
    test('all', () => {
        router.all('title');
        expect(router.all).toHaveBeenCalled();
        expect(router.all).toHaveBeenCalledWith('title');
    });
    test('get', () => {
        router.get('/', (request, response, next) => {
            expect(router.get).toHaveBeenCalled();
            expect(router.get).toHaveBeenCalledWith('/', expect.anything());
            expect(request).toBeInstanceOf(request_1.Request);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(next).toEqual(next);
        });
    });
    test('get with multiple middlewares', () => {
        const testMiddleware = (request, response, next) => {
            expect(router.get).toHaveBeenCalled();
            expect(router.get).toHaveBeenCalledWith('/', expect.anything(), expect.anything());
            expect(request).toBeInstanceOf(request_1.Request);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(next).toEqual(next);
        };
        router.get('/', testMiddleware, testMiddleware);
    });
    test('get with an array of middlewares', () => {
        const testMiddleware = (request, response, next) => {
            expect(router.get).toHaveBeenCalled();
            expect(router.get).toHaveBeenCalledWith('/', expect.anything());
            expect(request).toBeInstanceOf(request_1.Request);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(next).toEqual(next);
        };
        router.get('/', [testMiddleware, testMiddleware]);
    });
    test('get with mix of arrays and single middlewares', () => {
        const testMiddleware = (request, response, next) => {
            expect(router.get).toHaveBeenCalled();
            expect(router.get).toHaveBeenCalledWith('/', expect.anything(), expect.anything());
            expect(request).toBeInstanceOf(request_1.Request);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(next).toEqual(next);
        };
        router.get('/', [testMiddleware, testMiddleware], testMiddleware);
    });
    test('get without path', () => {
        router.get((request, response, next) => {
            expect(router.get).toHaveBeenCalled();
            expect(router.get).toHaveBeenCalledWith(expect.anything());
            expect(request).toBeInstanceOf(request_1.Request);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(response).toBeInstanceOf(response_1.Response);
            expect(next).toEqual(next);
        });
    });
    test('param', () => {
        router.param('title');
        expect(router.param).toHaveBeenCalled();
        expect(router.param).toHaveBeenCalledWith('title');
    });
    describe('Route', () => {
        let path = '/events';
        beforeAll(() => {
            path = '/events';
        });
        ['get', 'post', 'put', 'patch', 'delete'].forEach((verb) => {
            test(verb, () => {
                router.route(path)[verb]((request, response) => {
                    expect(router.route).toHaveBeenCalled();
                    expect(router.route).toHaveBeenCalledWith(path);
                    expect(router[verb]).toHaveBeenCalled();
                    expect(router[verb]).toHaveBeenCalledWith(path, expect.any(Function));
                    expect(request).toBeInstanceOf(request_1.Request);
                    expect(response).toBeInstanceOf(response_1.Response);
                });
            });
        });
    });
    test('use', () => {
        router.use('/events');
        expect(router.use).toHaveBeenCalled();
        expect(router.use).toHaveBeenCalledWith('/events');
    });
});
//# sourceMappingURL=router.test.js.map