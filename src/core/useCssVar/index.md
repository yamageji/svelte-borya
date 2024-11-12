# useCssVar

Manipulate CSS variables

## Usage

TBA

## Parameters

| Name       | Type       |  Default |
| :--------- | :--------- | :---------- |
| prop | MaybeGetter<string | null | undefined> | - |
| target | HTMLElement | SVGElement | undefined | null | - |
| options | UseCssVarOptions | `{}` |

## Options

```typescript
export interface UseCssVarOptions extends ConfigurableWindow {
  initialValue?: string
   /**
   * The observe option is not implemented.
   */
  // observe?: boolean
}
```