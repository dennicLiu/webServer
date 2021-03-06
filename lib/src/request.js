"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const express_1 = require("./express");
class Request {
    constructor(url, options) {
        this.baseUrl = '';
        this.body = '';
        this.cookies = {};
        this.fresh = false;
        this.headers = {};
        this.hostname = '';
        this.ip = '::1';
        this.ips = [];
        this.method = 'GET';
        this.originalUrl = '';
        this.params = {};
        this.path = '';
        this.protocol = 'http';
        this.query = {};
        this.route = {};
        this.secure = false;
        this.signedCookies = {};
        this.stale = false;
        this.subdomains = [];
        this.xhr = false;
        this.accepts = jest.fn();
        this.acceptsCharsets = jest.fn();
        this.acceptsEncodings = jest.fn();
        this.acceptsLanguages = jest.fn();
        this.get = jest
            .fn()
            .mockImplementation((header) => this.headers[header]);
        this.is = jest.fn();
        this.range = jest.fn();
        this.app = options && options.app ? options.app : new express_1.Express();
        if (typeof url === 'string') {
            this.defaultUrl = url;
            this.defaultOptions = options;
            this.setUrl(this.defaultUrl, this.defaultOptions);
        }
        return this;
    }
    setUrl(url, options) {
        const parsedUrl = url_1.parse(url, true);
        this.path = parsedUrl.pathname || '/';
        this.hostname = parsedUrl.hostname || '';
        this.originalUrl = this.path + (parsedUrl.search || '');
        this.query = parsedUrl.query;
        this.protocol = parsedUrl.protocol
            ? parsedUrl.protocol.slice(0, parsedUrl.protocol.length - 1)
            : 'http';
        this.secure = parsedUrl.protocol === 'https:';
        const hostnameParts = this.hostname.split('.');
        if (hostnameParts.length > 2) {
            this.subdomains = hostnameParts.slice(0, hostnameParts.length - 2);
        }
        if (options) {
            if (options.headers) {
                const headers = {};
                for (const k of Object.keys(options.headers)) {
                    const key = k.toLowerCase();
                    headers[key] = options.headers[k];
                }
                this.headers = Object.assign({}, headers);
            }
            if (options.method) {
                this.method = options.method;
            }
        }
    }
    resetMocked() {
        this.baseUrl = '';
        this.body = '';
        this.cookies = {};
        this.fresh = false;
        this.headers = {};
        this.hostname = '';
        this.ip = '::1';
        this.ips = [];
        this.method = 'GET';
        this.originalUrl = '';
        this.params = {};
        this.path = '';
        this.protocol = 'http';
        this.query = {};
        this.route = {};
        this.secure = false;
        this.signedCookies = {};
        this.stale = false;
        this.subdomains = [];
        this.xhr = false;
        if (typeof this.defaultUrl === 'string') {
            this.setUrl(this.defaultUrl, this.defaultOptions);
        }
        this.accepts.mockReset();
        this.acceptsCharsets.mockReset();
        this.acceptsEncodings.mockReset();
        this.acceptsLanguages.mockReset();
        this.get.mockReset();
        this.is.mockReset();
        this.range.mockReset();
    }
    setBaseUrl(value) {
        this.baseUrl = value;
    }
    setBody(value) {
        this.body = value;
    }
    setCookies(key, value) {
        if (typeof key === 'string') {
            this.cookies[key] = value;
        }
        else {
            for (const k of Object.keys(key)) {
                this.cookies[k] = key[k];
            }
        }
    }
    setFresh(value) {
        this.fresh = value;
    }
    setHeaders(key, value) {
        if (typeof key === 'string') {
            this.headers[key.toLowerCase()] = value;
        }
        else {
            for (const k of Object.keys(key)) {
                this.headers[k.toLowerCase()] = key[k];
            }
        }
    }
    setHostname(value) {
        this.hostname = value;
    }
    setIp(value) {
        this.ip = value;
    }
    setIps(value) {
        this.ips.push(value);
    }
    setMethod(value) {
        this.method = value;
    }
    setOriginalUrl(value) {
        this.originalUrl = value;
    }
    setParams(key, value) {
        if (typeof key === 'string') {
            this.params[key] = value;
        }
        else {
            for (const k of Object.keys(key)) {
                this.params[k] = key[k];
            }
        }
    }
    setPath(value) {
        this.path = value;
    }
    setProtocol(value) {
        this.protocol = value;
    }
    setQuery(key, value) {
        if (typeof key === 'string') {
            this.query[key] = value;
        }
        else {
            for (const k of Object.keys(key)) {
                this.query[k] = key[k];
            }
        }
    }
    setRoute(key, value) {
        if (typeof key === 'string') {
            this.route[key] = value;
        }
        else {
            for (const k of Object.keys(key)) {
                this.route[k] = key[k];
            }
        }
    }
    setSecure(value) {
        this.secure = value;
    }
    setSignedCookies(key, value) {
        if (typeof key === 'string') {
            this.signedCookies[key] = value;
        }
        else {
            for (const k of Object.keys(key)) {
                this.signedCookies[k] = key[k];
            }
        }
    }
    setStale(value) {
        this.stale = value;
    }
    setSubdomains(value) {
        this.subdomains.push(value);
    }
    setXhr(value) {
        this.xhr = value;
    }
}
exports.Request = Request;
//# sourceMappingURL=request.js.map