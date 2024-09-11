import "@/styles/globals.css";
import BlogNav from "@/components/BlogNav";
import { BlogFooter } from "@/components/BlogFooter";
import { ThemeProvider } from "@/context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BlogNav />
      <Component {...pageProps} />
      <BlogFooter />
    </ThemeProvider>
  );
}
