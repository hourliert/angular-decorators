function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export interface IClassAnnotationDecorator {
  (target: any): void;
  (t: any, key: string, index: number): void;
}

export interface IInjectAnnotation {
  (...args: any[]): IClassAnnotationDecorator;
}

export function Inject(...args: string[]): IClassAnnotationDecorator {
  return (target: any, key?: string, index?: number): void => {
    if (isNumeric(index)) {
      target.$inject = target.$inject || [];
      target.$inject[index] = args[0];
    } else {
      target.$inject = args;
    }
  };
}
