// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v1/permission_service.proto" (package "authzed.api.v1", syntax proto3)
// tslint:disable
import { PermissionsService } from "./permission_service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { LookupSubjectsResponse } from "./permission_service";
import type { LookupSubjectsRequest } from "./permission_service";
import type { LookupResourcesResponse } from "./permission_service";
import type { LookupResourcesRequest } from "./permission_service";
import type { ExpandPermissionTreeResponse } from "./permission_service";
import type { ExpandPermissionTreeRequest } from "./permission_service";
import type { CheckPermissionResponse } from "./permission_service";
import type { CheckPermissionRequest } from "./permission_service";
import type { DeleteRelationshipsResponse } from "./permission_service";
import type { DeleteRelationshipsRequest } from "./permission_service";
import type { WriteRelationshipsResponse } from "./permission_service";
import type { WriteRelationshipsRequest } from "./permission_service";
import type { ReadRelationshipsResponse } from "./permission_service";
import type { ReadRelationshipsRequest } from "./permission_service";
import * as grpc from "@grpc/grpc-js";
/**
 * PermissionsService implements a set of RPCs that perform operations on
 * relationships and permissions.
 *
 * @generated from protobuf service authzed.api.v1.PermissionsService
 */
export interface IPermissionsServiceClient {
    /**
     * ReadRelationships reads a set of the relationships matching one or more
     * filters.
     *
     * @generated from protobuf rpc: ReadRelationships(authzed.api.v1.ReadRelationshipsRequest) returns (stream authzed.api.v1.ReadRelationshipsResponse);
     */
    readRelationships(input: ReadRelationshipsRequest, metadata?: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<ReadRelationshipsResponse>;
    readRelationships(input: ReadRelationshipsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<ReadRelationshipsResponse>;
    /**
     * WriteRelationships atomically writes and/or deletes a set of specified
     * relationships. An optional set of preconditions can be provided that must
     * be satisfied for the operation to commit.
     *
     * @generated from protobuf rpc: WriteRelationships(authzed.api.v1.WriteRelationshipsRequest) returns (authzed.api.v1.WriteRelationshipsResponse);
     */
    writeRelationships(input: WriteRelationshipsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: WriteRelationshipsResponse) => void): grpc.ClientUnaryCall;
    writeRelationships(input: WriteRelationshipsRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: WriteRelationshipsResponse) => void): grpc.ClientUnaryCall;
    writeRelationships(input: WriteRelationshipsRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: WriteRelationshipsResponse) => void): grpc.ClientUnaryCall;
    writeRelationships(input: WriteRelationshipsRequest, callback: (err: grpc.ServiceError | null, value?: WriteRelationshipsResponse) => void): grpc.ClientUnaryCall;
    /**
     * DeleteRelationships atomically bulk deletes all relationships matching the
     * provided filter. If no relationships match, none will be deleted and the
     * operation will succeed. An optional set of preconditions can be provided that must
     * be satisfied for the operation to commit.
     *
     * @generated from protobuf rpc: DeleteRelationships(authzed.api.v1.DeleteRelationshipsRequest) returns (authzed.api.v1.DeleteRelationshipsResponse);
     */
    deleteRelationships(input: DeleteRelationshipsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: DeleteRelationshipsResponse) => void): grpc.ClientUnaryCall;
    deleteRelationships(input: DeleteRelationshipsRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: DeleteRelationshipsResponse) => void): grpc.ClientUnaryCall;
    deleteRelationships(input: DeleteRelationshipsRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: DeleteRelationshipsResponse) => void): grpc.ClientUnaryCall;
    deleteRelationships(input: DeleteRelationshipsRequest, callback: (err: grpc.ServiceError | null, value?: DeleteRelationshipsResponse) => void): grpc.ClientUnaryCall;
    /**
     * CheckPermission determines for a given resource whether a subject computes
     * to having a permission or is a direct member of a particular relation.
     *
     * @generated from protobuf rpc: CheckPermission(authzed.api.v1.CheckPermissionRequest) returns (authzed.api.v1.CheckPermissionResponse);
     */
    checkPermission(input: CheckPermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CheckPermissionResponse) => void): grpc.ClientUnaryCall;
    checkPermission(input: CheckPermissionRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: CheckPermissionResponse) => void): grpc.ClientUnaryCall;
    checkPermission(input: CheckPermissionRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CheckPermissionResponse) => void): grpc.ClientUnaryCall;
    checkPermission(input: CheckPermissionRequest, callback: (err: grpc.ServiceError | null, value?: CheckPermissionResponse) => void): grpc.ClientUnaryCall;
    /**
     * ExpandPermissionTree reveals the graph structure for a resource's
     * permission or relation. This RPC does not recurse infinitely deep and may
     * require multiple calls to fully unnest a deeply nested graph.
     *
     * @generated from protobuf rpc: ExpandPermissionTree(authzed.api.v1.ExpandPermissionTreeRequest) returns (authzed.api.v1.ExpandPermissionTreeResponse);
     */
    expandPermissionTree(input: ExpandPermissionTreeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ExpandPermissionTreeResponse) => void): grpc.ClientUnaryCall;
    expandPermissionTree(input: ExpandPermissionTreeRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: ExpandPermissionTreeResponse) => void): grpc.ClientUnaryCall;
    expandPermissionTree(input: ExpandPermissionTreeRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: ExpandPermissionTreeResponse) => void): grpc.ClientUnaryCall;
    expandPermissionTree(input: ExpandPermissionTreeRequest, callback: (err: grpc.ServiceError | null, value?: ExpandPermissionTreeResponse) => void): grpc.ClientUnaryCall;
    /**
     * LookupResources returns all the resources of a given type that a subject
     * can access whether via a computed permission or relation membership.
     *
     * @generated from protobuf rpc: LookupResources(authzed.api.v1.LookupResourcesRequest) returns (stream authzed.api.v1.LookupResourcesResponse);
     */
    lookupResources(input: LookupResourcesRequest, metadata?: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<LookupResourcesResponse>;
    lookupResources(input: LookupResourcesRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<LookupResourcesResponse>;
    /**
     * LookupSubjects returns all the subjects of a given type that
     * have access whether via a computed permission or relation membership.
     *
     * @generated from protobuf rpc: LookupSubjects(authzed.api.v1.LookupSubjectsRequest) returns (stream authzed.api.v1.LookupSubjectsResponse);
     */
    lookupSubjects(input: LookupSubjectsRequest, metadata?: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<LookupSubjectsResponse>;
    lookupSubjects(input: LookupSubjectsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<LookupSubjectsResponse>;
}
/**
 * PermissionsService implements a set of RPCs that perform operations on
 * relationships and permissions.
 *
 * @generated from protobuf service authzed.api.v1.PermissionsService
 */
export class PermissionsServiceClient extends grpc.Client implements IPermissionsServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * ReadRelationships reads a set of the relationships matching one or more
     * filters.
     *
     * @generated from protobuf rpc: ReadRelationships(authzed.api.v1.ReadRelationshipsRequest) returns (stream authzed.api.v1.ReadRelationshipsResponse);
     */
    readRelationships(input: ReadRelationshipsRequest, metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientReadableStream<ReadRelationshipsResponse> {
        const method = PermissionsService.methods[0];
        return this.makeServerStreamRequest<ReadRelationshipsRequest, ReadRelationshipsResponse>(`/${PermissionsService.typeName}/${method.name}`, (value: ReadRelationshipsRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): ReadRelationshipsResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), options);
    }
    /**
     * WriteRelationships atomically writes and/or deletes a set of specified
     * relationships. An optional set of preconditions can be provided that must
     * be satisfied for the operation to commit.
     *
     * @generated from protobuf rpc: WriteRelationships(authzed.api.v1.WriteRelationshipsRequest) returns (authzed.api.v1.WriteRelationshipsResponse);
     */
    writeRelationships(input: WriteRelationshipsRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: WriteRelationshipsResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: WriteRelationshipsResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: WriteRelationshipsResponse) => void)): grpc.ClientUnaryCall {
        const method = PermissionsService.methods[1];
        return this.makeUnaryRequest<WriteRelationshipsRequest, WriteRelationshipsResponse>(`/${PermissionsService.typeName}/${method.name}`, (value: WriteRelationshipsRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): WriteRelationshipsResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * DeleteRelationships atomically bulk deletes all relationships matching the
     * provided filter. If no relationships match, none will be deleted and the
     * operation will succeed. An optional set of preconditions can be provided that must
     * be satisfied for the operation to commit.
     *
     * @generated from protobuf rpc: DeleteRelationships(authzed.api.v1.DeleteRelationshipsRequest) returns (authzed.api.v1.DeleteRelationshipsResponse);
     */
    deleteRelationships(input: DeleteRelationshipsRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: DeleteRelationshipsResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: DeleteRelationshipsResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: DeleteRelationshipsResponse) => void)): grpc.ClientUnaryCall {
        const method = PermissionsService.methods[2];
        return this.makeUnaryRequest<DeleteRelationshipsRequest, DeleteRelationshipsResponse>(`/${PermissionsService.typeName}/${method.name}`, (value: DeleteRelationshipsRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): DeleteRelationshipsResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * CheckPermission determines for a given resource whether a subject computes
     * to having a permission or is a direct member of a particular relation.
     *
     * @generated from protobuf rpc: CheckPermission(authzed.api.v1.CheckPermissionRequest) returns (authzed.api.v1.CheckPermissionResponse);
     */
    checkPermission(input: CheckPermissionRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CheckPermissionResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CheckPermissionResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: CheckPermissionResponse) => void)): grpc.ClientUnaryCall {
        const method = PermissionsService.methods[3];
        return this.makeUnaryRequest<CheckPermissionRequest, CheckPermissionResponse>(`/${PermissionsService.typeName}/${method.name}`, (value: CheckPermissionRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): CheckPermissionResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * ExpandPermissionTree reveals the graph structure for a resource's
     * permission or relation. This RPC does not recurse infinitely deep and may
     * require multiple calls to fully unnest a deeply nested graph.
     *
     * @generated from protobuf rpc: ExpandPermissionTree(authzed.api.v1.ExpandPermissionTreeRequest) returns (authzed.api.v1.ExpandPermissionTreeResponse);
     */
    expandPermissionTree(input: ExpandPermissionTreeRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ExpandPermissionTreeResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: ExpandPermissionTreeResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: ExpandPermissionTreeResponse) => void)): grpc.ClientUnaryCall {
        const method = PermissionsService.methods[4];
        return this.makeUnaryRequest<ExpandPermissionTreeRequest, ExpandPermissionTreeResponse>(`/${PermissionsService.typeName}/${method.name}`, (value: ExpandPermissionTreeRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): ExpandPermissionTreeResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * LookupResources returns all the resources of a given type that a subject
     * can access whether via a computed permission or relation membership.
     *
     * @generated from protobuf rpc: LookupResources(authzed.api.v1.LookupResourcesRequest) returns (stream authzed.api.v1.LookupResourcesResponse);
     */
    lookupResources(input: LookupResourcesRequest, metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientReadableStream<LookupResourcesResponse> {
        const method = PermissionsService.methods[5];
        return this.makeServerStreamRequest<LookupResourcesRequest, LookupResourcesResponse>(`/${PermissionsService.typeName}/${method.name}`, (value: LookupResourcesRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): LookupResourcesResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), options);
    }
    /**
     * LookupSubjects returns all the subjects of a given type that
     * have access whether via a computed permission or relation membership.
     *
     * @generated from protobuf rpc: LookupSubjects(authzed.api.v1.LookupSubjectsRequest) returns (stream authzed.api.v1.LookupSubjectsResponse);
     */
    lookupSubjects(input: LookupSubjectsRequest, metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientReadableStream<LookupSubjectsResponse> {
        const method = PermissionsService.methods[6];
        return this.makeServerStreamRequest<LookupSubjectsRequest, LookupSubjectsResponse>(`/${PermissionsService.typeName}/${method.name}`, (value: LookupSubjectsRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): LookupSubjectsResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), options);
    }
}
