declare var node: RED.Node;
declare var msg: RED.NodeMessage;
declare var context: RED.ContextData;
declare var flow: RED.ContextData;
declare var global: RED.ContextData;
declare var Buffer: Buffer;
declare function clearImmediate(immediateId: any): void;
declare function clearInterval(intervalId: NodeJS.Timer): void;
declare function clearTimeout(timeoutId: NodeJS.Timer): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
declare function setInterval(
  callback: (...args: any[]) => void,
  ms: number,
  ...args: any[]
): NodeJS.Timer;
declare function setTimeout(
  callback: (...args: any[]) => void,
  ms: number,
  ...args: any[]
): NodeJS.Timer;
declare function gc(): void;
declare var v8debug: any;
