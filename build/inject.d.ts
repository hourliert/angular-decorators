export interface IClassAnnotationDecorator {
    (target: any): void;
    (t: any, key: string, index: number): void;
}
export interface IInjectAnnotation {
    (...args: any[]): IClassAnnotationDecorator;
}
export declare function Inject(...args: string[]): IClassAnnotationDecorator;
