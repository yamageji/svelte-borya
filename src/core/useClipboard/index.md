# useClipboard

## Usage

TBA

## Parameters

| Name       | Type       |  Default |
| :--------- | :--------- | :---------- |
| options | `UseClipboardOptions` | - |

## Options

```typescript
export interface UseClipboardOptions<Source> extends ConfigurableNavigator {
  read?: boolean; // default false
  source?: Source;
  copiedDuring?: number; // default 1500
  legacy?: boolean; // default false
}
```