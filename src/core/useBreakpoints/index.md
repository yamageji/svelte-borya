# useBreakpoints

Reactive viewport breakpoints.

## Usage

TBA

## Parameters

| Name       | Type       |  Default |
| :--------- | :--------- | :---------- |
| breakpoints | `Breakpoints<K>` | - |
| options | `UseBreakpointsOptions` | {} |

## Options

```typescript
export interface UseBreakpointsOptions extends ConfigurableWindow {
  strategy?: 'min-width' | 'max-width'; // default 'min-width'
}
```
