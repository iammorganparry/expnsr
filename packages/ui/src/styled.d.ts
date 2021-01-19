// styled.d.ts
import 'styled-components';
interface IPalette {
  main: string
  contrastText?: string
  light?: string
}
type SpacingFn = (value: number) => string

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string
    spacing: SpacingFn
    palette: {
      common: {
        black: string
        white: string
      }
      greys: IPalette
      primary: IPalette
      secondary: IPalette
   }
  }
}