import { ExtensionContext } from "vscode"
import { GetStringRegKey } from "vscode-windows-registry"

export function activate(context: ExtensionContext) {
  return { GetStringRegKey }
}

// this method is called when your extension is deactivated
export function deactivate() {}
