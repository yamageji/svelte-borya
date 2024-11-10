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
  /**
   * @default "min-width"
   */
  strategy?: 'min-width' | 'max-width';
}
```
