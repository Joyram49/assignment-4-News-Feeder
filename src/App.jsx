import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewsHub from "./components/news/NewsHub";
import NewsProvider from "./provider/NewsProvider";

export default function App() {
  return (
    <NewsProvider>
      <Header />
      <NewsHub />
      <Footer />
    </NewsProvider>
  );
}
