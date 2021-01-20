// styled.d.ts
import 'styled-components';
interface IPalette {
  main: string
  contrastText?: string
  light?: string
  medium?: string
}
type SpacingFn = (value: number) => string

declare module 'styled-components' {
  export interface DefaultTheme {
    shadows: string[]
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