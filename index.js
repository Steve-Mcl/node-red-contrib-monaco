import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const createMonacoCompletionItem = (
  label,
  insertText,
  documentation,
  range,
  kind
) => {
  if (Array.isArray(documentation)) {
    documentation = documentation.join('\n');
  }
  return {
    label: label,
    kind: kind == null ? monaco.languages.CompletionItemKind.Snippet : kind,
    documentation: { value: documentation },
    insertText: insertText,
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range
  };
};

const addNodeRedSnippets = (range) => {
  return [
    createMonacoCompletionItem(
      'jsonparse',
      'JSON.parse(${1:json});',
      'JSON.parse',
      range
    ),
    createMonacoCompletionItem(
      'jsonstringify',
      'JSON.stringify(${1:obj});',
      'JSON.stringify',
      range
    ),
    createMonacoCompletionItem(
      'setinterval',
      'setInterval(function() {\n\t${2}\n}, ${1:delay});',
      'setInterval',
      range
    ),
    createMonacoCompletionItem(
      'settimeout',
      'setTimeout(function() {\n\t${2}\n}, ${1:delay});',
      'setTimeout',
      range
    ),
    createMonacoCompletionItem(
      'node.log',
      "node.log(${1:'info'});",
      'Write an info message to the console (not sent to sidebar)',
      range
    ),
    createMonacoCompletionItem(
      'node.warn',
      "node.warn(${1:'my warning'});",
      'Write a warning to the console and debug sidebar',
      range
    ),
    createMonacoCompletionItem(
      'node.done',
      'node.done();',
      'If a node calls done(), it will trigger any ‘Complete’ nodes in the workspace that have been configured to target that node',
      range
    ),
    createMonacoCompletionItem(
      'node.error',
      "node.error(${1:'my error message'}, ${2:msg});",
      'Send an error to the console and debug sidebar. To trigger a Catch node on the same tab, the function should call `node.error` with the original message as a second argument',
      range
    ),
    createMonacoCompletionItem(
      'node.send',
      'node.send(${1:msg});',
      'async send a msg to the next node',
      range
    ),
    createMonacoCompletionItem(
      'node.send (multiple)',
      'var ${1:msg1} = {payload:${2:1}};\nvar ${3:msg2} = {payload:${4:2}};\nnode.send([[${1:msg1}, ${3:msg2}]]);',
      'send 1 or more messages out of 1 output',
      range
    ),
    createMonacoCompletionItem(
      'node.send (multiple outputs)',
      'var ${1:msg1} = {payload:${2:1}};\nvar ${3:msg2} = {payload:${4:2}};\nnode.send([${1:msg1}, ${3:msg2}]);',
      'send more than 1 message out of multiple outputs',
      range
    ),
    createMonacoCompletionItem(
      'node.status',
      'node.status({fill:"${1:red}",shape:"${2:ring}",text:"${3:error}"});',
      'Set the status icon and text underneath the function node',
      range
    ),
    createMonacoCompletionItem(
      'get (node context)',
      'context.get("${1:name}");',
      'Get a value from node context',
      range
    ),
    createMonacoCompletionItem(
      'set (node context)',
      'context.set("${1:name}", ${1:value});',
      'Set a value in node context',
      range
    ),
    createMonacoCompletionItem(
      'get (flow context)',
      'flow.get("${1:name}");',
      'Get a value from flow context',
      range
    ),
    createMonacoCompletionItem(
      'set (flow context)',
      'flow.set("${1:name}", ${1:value});',
      'Set a value in flow context',
      range
    ),
    createMonacoCompletionItem(
      'get (global context)',
      'global.get("${1:name}");',
      'Get a value from global context',
      range
    ),
    createMonacoCompletionItem(
      'set (global context)',
      'global.set("${1:name}", ${1:value});',
      'Set a value in global context',
      range
    ),
    createMonacoCompletionItem(
      'cloneMessage (RED.util)',
      'RED.util.cloneMessage(${1:msg});',
      [
        '```typescript',
        'RED.util.cloneMessage<T extends registry.NodeMessage>(msg: T): T',
        '```',
        'Safely clones a message object. This handles msg.req/msg.res objects that must not be cloned\n',
        '*@param* `msg` — the msg object\n'
      ],
      range
    ),
    createMonacoCompletionItem(
      'getObjectProperty (RED.util)',
      'RED.util.getObjectProperty(${1:msg},${2:prop});',
      [
        '```typescript',
        'RED.util.getObjectProperty(msg: object, expr: string): any;',
        '```',
        'Gets a property of an object\n',
        '*@param* `msg` — the msg object\n',
        '*@param* `prop` — the msg object'
      ],
      range
    ),
    createMonacoCompletionItem(
      'setObjectProperty (RED.util)',
      'RED.util.setObjectProperty(${1:msg},${2:prop},${3:value},${4:createMissing});',
      [
        '```typescript',
        'RED.util.setObjectProperty(msg: object, prop: string, value: any, createMissing?: boolean): boolean',
        '```',
        'Sets a property of an object\n',
        '`msg` — the object\n',
        '`prop` — the property expression\n',
        '`value` — the value to set\n',
        '`createMissing` — whether to create missing parent properties'
      ],
      range
    ),
    createMonacoCompletionItem(
      'getMessageProperty (RED.util)',
      'RED.util.getMessageProperty(${1:msg},${2:prop});',
      [
        '```typescript',
        'RED.util.getMessageProperty(msg: object, expr: string): any;',
        '```',
        'Gets a property of an object\n',
        '*@param* `msg` — the msg object\n',
        '*@param* `prop` — the msg object'
      ],
      range
    ),
    createMonacoCompletionItem(
      'setMessageProperty (RED.util)',
      'RED.util.setMessageProperty(${1:msg},${2:prop},${3:value},${4:createMissing});',
      [
        '```typescript',
        'RED.util.setMessageProperty(msg: object, prop: string, value: any, createMissing?: boolean): boolean',
        '```',
        'Sets a property of an object\n',
        '`msg` — the object\n',
        '`prop` — the property expression\n',
        '`value` — the value to set\n',
        '`createMissing` — whether to create missing parent properties'
      ],
      range
    )
  ];
};

monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
  // https://github.com/microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json
  // 2305   ->  Module has no exported member.
  // 80001  ->  File it may be converted to an ES6 module.
  // 1108   -> Return statement can only be used within a function body.
  noSemanticValidation: false,
  noSyntaxValidation: false,
  noSuggestionDiagnostics: true,
  diagnosticCodesToIgnore: [80001, 1108, 2305]
});

monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
  allowNonTsExtensions: true,
  target: monaco.languages.typescript.ScriptTarget.ES2016,
  checkJs: true,
  strictNullChecks: false,
  strictPropertyInitialization: true,
  strictFunctionTypes: true,
  strictBindCallApply: true,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.Classic,
  module: monaco.languages.typescript.ModuleKind.CommonJS,
  baseUrl: './'
});

monaco.languages.registerCompletionItemProvider('javascript', {
  provideCompletionItems: function (model, position) {
    var word = model.getWordUntilPosition(position);
    var range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn
    };
    return {
      suggestions: addNodeRedSnippets(range)
    };
  }
});

window.monaco = monaco;
