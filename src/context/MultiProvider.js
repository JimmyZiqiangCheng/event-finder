import ThemeProvider from "./themeContext";
import AuthProvider from "./authContext";
import LangProvider from "./langContext";

function MultiProvider({ children }) {
  return (
    <LangProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </LangProvider>
  );
}

export default MultiProvider;
