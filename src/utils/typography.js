import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

fairyGateTheme.overrideThemeStyles = () => ({
    'a': {
      color: '#FF6C45',
      backgroundImage: 'none',
    }
  })

const typography = new Typography(fairyGateTheme)
export const { scale, rhythm, options } = typography
export default typography