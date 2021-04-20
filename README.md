# winregistry README

Allows other extensions to read the windows registry without using native modules

## Usage

```javascript
import { extensions } from "vscode"
import { GetStringRegKey } from "vscode-windows-registry"
const winregistryExtensionId = "murbani.winregistry"

export function getWinRegistryReader() {
  const ext =
    extensions.getExtension <
    { GetStringRegKey: typeof GetStringRegKey } >
    winregistryExtensionId
  if (!ext?.isActive) throw new Error("Failed to access registry extension")
  return ext.exports.GetStringRegKey
}

console.log(getWinRegistryReader()("HKEY_CURRENT_USER", "path", "key"))
```
