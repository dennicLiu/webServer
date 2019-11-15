"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("../../src");
const application_1 = require("../../src/application");
const express_1 = require("../../src/express");
const next_1 = require("../../src/next");
const request_1 = require("../../src/request");
const response_1 = require("../../src/response");
const router_1 = require("../../src/router");
let application;
describe('Exporter', () => {
    test('Default export is a instance of express', () => {
        expect(express()).toBeInstanceOf(express_1.Express);
    });
    test('Router is a instance of Router class', () => {
        expect(express.Router()).toBeInstanceOf(router_1.Router);
    });
    test('Response is a instance of Response class', () => {
        expect(express.Response).toEqual(response_1.Response);
    });
    test('Express is a instance of Express class', () => {
        expect(express.Express).toEqual(express_1.Express);
    });
    test('Request is a instance of Request class', () => {
        expect(express.Request).toEqual(request_1.Request);
    });
    test('Next is a instance of Next function', () => {
        expect(express.Next).toEqual(next_1.next);
    });
    test('resetMocked is a instance of Application resetMocked function', () => {
        application = new application_1.Application();
        expect(express.resetMocked).toEqual(application.resetMocked);
    });
});
//# sourceMappingURL=index.test.js.map