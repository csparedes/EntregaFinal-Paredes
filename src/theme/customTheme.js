import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

const customTheme = createTheme({
    palette:{
        primary: {
            main: grey[900]
        },
        secondary: {
            main: '#ffffff'
        }
    }
})

export default customTheme;