export interface ReqType {
    [x: string]: any;
}
export interface ResType {
    [x: string]: any;
}

export interface ConfigType {
    contentType?: string,
    AccessControlAllowCredentials?: boolean,
    AccessControlAllowHeaders?: string
}

export interface ParserType {
    req: ReqType,
    res: ResType,
    next: any
    config?: ConfigType
}