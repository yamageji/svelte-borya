# useClipboardItems

Reactive [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).

## Usage

TBA

## Parameters

| Name       | Type       |  Default |
| :--------- | :--------- | :---------- |
| options | `UseClipboardItemsOptions` | - |

## Options

```typescript
export interface UseClipboardItemsOptions<Source> extends ConfigurableNavigator {
  read?: boolean; // default false
  source?: Source;
  copiedDuring?: number; // default 1500
}
```