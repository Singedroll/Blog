import "@/styles/globals.css";
import "@/components/BlogNav";
import "@/components/BlogFooter";
import BlogNav from "@/components/BlogNav";
import { BlogFooter } from "@/components/BlogFooter";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <BlogNav />
      <Component {...pageProps} />
      <BlogFooter />
    </div>
  );
}
