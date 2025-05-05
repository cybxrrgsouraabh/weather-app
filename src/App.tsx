import { Navbar } from "./sections/navbar";
import { ThemeProvider } from "./components/theme-provider";
import HeroSection from "./sections/heroSection";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen w-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
        <Navbar />
        <HeroSection/>

      </div>
    </ThemeProvider>
  );
}

export default App;
