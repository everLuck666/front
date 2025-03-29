/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: authserve.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace authserve {
    export class Request extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            ping?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("ping" in data && data.ping != undefined) {
                    this.ping = data.ping;
                }
            }
        }
        get ping() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set ping(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            ping?: string;
        }): Request {
            const message = new Request({});
            if (data.ping != null) {
                message.ping = data.ping;
            }
            return message;
        }
        toObject() {
            const data: {
                ping?: string;
            } = {};
            if (this.ping != null) {
                data.ping = this.ping;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.ping.length)
                writer.writeString(1, this.ping);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Request {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Request();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.ping = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Request {
            return Request.deserialize(bytes);
        }
    }
    export class Response extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            pong?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pong" in data && data.pong != undefined) {
                    this.pong = data.pong;
                }
            }
        }
        get pong() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set pong(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            pong?: string;
        }): Response {
            const message = new Response({});
            if (data.pong != null) {
                message.pong = data.pong;
            }
            return message;
        }
        toObject() {
            const data: {
                pong?: string;
            } = {};
            if (this.pong != null) {
                data.pong = this.pong;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.pong.length)
                writer.writeString(1, this.pong);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Response {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Response();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.pong = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Response {
            return Response.deserialize(bytes);
        }
    }
    export class LoginReq extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            username?: string;
            password?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("username" in data && data.username != undefined) {
                    this.username = data.username;
                }
                if ("password" in data && data.password != undefined) {
                    this.password = data.password;
                }
            }
        }
        get username() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set username(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get password() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set password(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            username?: string;
            password?: string;
        }): LoginReq {
            const message = new LoginReq({});
            if (data.username != null) {
                message.username = data.username;
            }
            if (data.password != null) {
                message.password = data.password;
            }
            return message;
        }
        toObject() {
            const data: {
                username?: string;
                password?: string;
            } = {};
            if (this.username != null) {
                data.username = this.username;
            }
            if (this.password != null) {
                data.password = this.password;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.username.length)
                writer.writeString(1, this.username);
            if (this.password.length)
                writer.writeString(2, this.password);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LoginReq {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LoginReq();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.username = reader.readString();
                        break;
                    case 2:
                        message.password = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LoginReq {
            return LoginReq.deserialize(bytes);
        }
    }
    export class TokenResp extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token?: string;
            expire?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
                if ("expire" in data && data.expire != undefined) {
                    this.expire = data.expire;
                }
            }
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get expire() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set expire(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            token?: string;
            expire?: number;
        }): TokenResp {
            const message = new TokenResp({});
            if (data.token != null) {
                message.token = data.token;
            }
            if (data.expire != null) {
                message.expire = data.expire;
            }
            return message;
        }
        toObject() {
            const data: {
                token?: string;
                expire?: number;
            } = {};
            if (this.token != null) {
                data.token = this.token;
            }
            if (this.expire != null) {
                data.expire = this.expire;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token.length)
                writer.writeString(1, this.token);
            if (this.expire != 0)
                writer.writeInt64(2, this.expire);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TokenResp {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TokenResp();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.token = reader.readString();
                        break;
                    case 2:
                        message.expire = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TokenResp {
            return TokenResp.deserialize(bytes);
        }
    }
    export class VerifyTokenReq extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            token?: string;
        }): VerifyTokenReq {
            const message = new VerifyTokenReq({});
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                token?: string;
            } = {};
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token.length)
                writer.writeString(1, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VerifyTokenReq {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VerifyTokenReq();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): VerifyTokenReq {
            return VerifyTokenReq.deserialize(bytes);
        }
    }
    export class VerifyTokenRsp extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            flag?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("flag" in data && data.flag != undefined) {
                    this.flag = data.flag;
                }
            }
        }
        get flag() {
            return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
        }
        set flag(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            flag?: boolean;
        }): VerifyTokenRsp {
            const message = new VerifyTokenRsp({});
            if (data.flag != null) {
                message.flag = data.flag;
            }
            return message;
        }
        toObject() {
            const data: {
                flag?: boolean;
            } = {};
            if (this.flag != null) {
                data.flag = this.flag;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.flag != false)
                writer.writeBool(1, this.flag);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VerifyTokenRsp {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VerifyTokenRsp();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.flag = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): VerifyTokenRsp {
            return VerifyTokenRsp.deserialize(bytes);
        }
    }
    export class ParseTokenReq extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            token?: string;
        }): ParseTokenReq {
            const message = new ParseTokenReq({});
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                token?: string;
            } = {};
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token.length)
                writer.writeString(1, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ParseTokenReq {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ParseTokenReq();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ParseTokenReq {
            return ParseTokenReq.deserialize(bytes);
        }
    }
    export class ParseTokenRsp extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            data?: JwtData;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get data() {
            return pb_1.Message.getWrapperField(this, JwtData, 1) as JwtData;
        }
        set data(value: JwtData) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_data() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            data?: ReturnType<typeof JwtData.prototype.toObject>;
        }): ParseTokenRsp {
            const message = new ParseTokenRsp({});
            if (data.data != null) {
                message.data = JwtData.fromObject(data.data);
            }
            return message;
        }
        toObject() {
            const data: {
                data?: ReturnType<typeof JwtData.prototype.toObject>;
            } = {};
            if (this.data != null) {
                data.data = this.data.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_data)
                writer.writeMessage(1, this.data, () => this.data.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ParseTokenRsp {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ParseTokenRsp();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.data, () => message.data = JwtData.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ParseTokenRsp {
            return ParseTokenRsp.deserialize(bytes);
        }
    }
    export class JwtData extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            userId?: string;
            username?: string;
            exp?: number;
            claims?: Map<string, string>;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userId" in data && data.userId != undefined) {
                    this.userId = data.userId;
                }
                if ("username" in data && data.username != undefined) {
                    this.username = data.username;
                }
                if ("exp" in data && data.exp != undefined) {
                    this.exp = data.exp;
                }
                if ("claims" in data && data.claims != undefined) {
                    this.claims = data.claims;
                }
            }
            if (!this.claims)
                this.claims = new Map();
        }
        get userId() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set userId(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get username() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set username(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get exp() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set exp(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get claims() {
            return pb_1.Message.getField(this, 4) as any as Map<string, string>;
        }
        set claims(value: Map<string, string>) {
            pb_1.Message.setField(this, 4, value as any);
        }
        static fromObject(data: {
            userId?: string;
            username?: string;
            exp?: number;
            claims?: {
                [key: string]: string;
            };
        }): JwtData {
            const message = new JwtData({});
            if (data.userId != null) {
                message.userId = data.userId;
            }
            if (data.username != null) {
                message.username = data.username;
            }
            if (data.exp != null) {
                message.exp = data.exp;
            }
            if (typeof data.claims == "object") {
                message.claims = new Map(Object.entries(data.claims));
            }
            return message;
        }
        toObject() {
            const data: {
                userId?: string;
                username?: string;
                exp?: number;
                claims?: {
                    [key: string]: string;
                };
            } = {};
            if (this.userId != null) {
                data.userId = this.userId;
            }
            if (this.username != null) {
                data.username = this.username;
            }
            if (this.exp != null) {
                data.exp = this.exp;
            }
            if (this.claims != null) {
                data.claims = (Object.fromEntries)(this.claims);
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.userId.length)
                writer.writeString(1, this.userId);
            if (this.username.length)
                writer.writeString(2, this.username);
            if (this.exp != 0)
                writer.writeInt64(3, this.exp);
            for (const [key, value] of this.claims) {
                writer.writeMessage(4, this.claims, () => {
                    writer.writeString(1, key);
                    writer.writeString(2, value);
                });
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): JwtData {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new JwtData();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.userId = reader.readString();
                        break;
                    case 2:
                        message.username = reader.readString();
                        break;
                    case 3:
                        message.exp = reader.readInt64();
                        break;
                    case 4:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.claims as any, reader, reader.readString, reader.readString));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): JwtData {
            return JwtData.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedAuthserveService {
        static definition = {
            Ping: {
                path: "/authserve.Authserve/Ping",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: Request) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => Request.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: Response) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => Response.deserialize(new Uint8Array(bytes))
            },
            GenerateToken: {
                path: "/authserve.Authserve/GenerateToken",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: LoginReq) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => LoginReq.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: TokenResp) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => TokenResp.deserialize(new Uint8Array(bytes))
            },
            VerifyToken: {
                path: "/authserve.Authserve/VerifyToken",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: VerifyTokenReq) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => VerifyTokenReq.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: VerifyTokenRsp) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => VerifyTokenRsp.deserialize(new Uint8Array(bytes))
            },
            ParseToken: {
                path: "/authserve.Authserve/ParseToken",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: ParseTokenReq) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => ParseTokenReq.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: ParseTokenRsp) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => ParseTokenRsp.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Ping(call: grpc_1.ServerUnaryCall<Request, Response>, callback: grpc_1.sendUnaryData<Response>): void;
        abstract GenerateToken(call: grpc_1.ServerUnaryCall<LoginReq, TokenResp>, callback: grpc_1.sendUnaryData<TokenResp>): void;
        abstract VerifyToken(call: grpc_1.ServerUnaryCall<VerifyTokenReq, VerifyTokenRsp>, callback: grpc_1.sendUnaryData<VerifyTokenRsp>): void;
        abstract ParseToken(call: grpc_1.ServerUnaryCall<ParseTokenReq, ParseTokenRsp>, callback: grpc_1.sendUnaryData<ParseTokenRsp>): void;
    }
    export class AuthserveClient extends grpc_1.makeGenericClientConstructor(UnimplementedAuthserveService.definition, "Authserve", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Ping: GrpcUnaryServiceInterface<Request, Response> = (message: Request, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<Response>, options?: grpc_1.CallOptions | grpc_1.requestCallback<Response>, callback?: grpc_1.requestCallback<Response>): grpc_1.ClientUnaryCall => {
            return super.Ping(message, metadata, options, callback);
        };
        GenerateToken: GrpcUnaryServiceInterface<LoginReq, TokenResp> = (message: LoginReq, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<TokenResp>, options?: grpc_1.CallOptions | grpc_1.requestCallback<TokenResp>, callback?: grpc_1.requestCallback<TokenResp>): grpc_1.ClientUnaryCall => {
            return super.GenerateToken(message, metadata, options, callback);
        };
        VerifyToken: GrpcUnaryServiceInterface<VerifyTokenReq, VerifyTokenRsp> = (message: VerifyTokenReq, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<VerifyTokenRsp>, options?: grpc_1.CallOptions | grpc_1.requestCallback<VerifyTokenRsp>, callback?: grpc_1.requestCallback<VerifyTokenRsp>): grpc_1.ClientUnaryCall => {
            return super.VerifyToken(message, metadata, options, callback);
        };
        ParseToken: GrpcUnaryServiceInterface<ParseTokenReq, ParseTokenRsp> = (message: ParseTokenReq, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<ParseTokenRsp>, options?: grpc_1.CallOptions | grpc_1.requestCallback<ParseTokenRsp>, callback?: grpc_1.requestCallback<ParseTokenRsp>): grpc_1.ClientUnaryCall => {
            return super.ParseToken(message, metadata, options, callback);
        };
    }
}
