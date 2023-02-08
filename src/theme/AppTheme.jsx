import { CssBaseline, ThemeProvider } from "@mui/material";
import customTheme from "./customTheme";

const AppTheme = ({children}) => {
	return <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>;
};

export default AppTheme;
