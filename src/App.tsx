import { useState } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Page } from "./types";

function App() {
  const [page, setPage] = useState<Page>("about");

  const pageProps = { onNavigate: setPage };

  return (
    <div>
      {page === "home" && <Home {...pageProps} />}
      {page === "shop" && <Shop {...pageProps} />}
      {page === "about" && <About {...pageProps} />}
      {page === "contact" && <Contact {...pageProps} />}
    </div>
  );
}

export default App;
