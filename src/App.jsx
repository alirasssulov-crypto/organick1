import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { CartProvider } from "./shared/lib/cart";
import Header from "./widgets/header/Header";
import Footer from "./widgets/footer/Footer";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";
import ShopSingle from "./pages/shopSingle/shopSingle";
import Service from "./pages/service/service";
import ServiceSingle from "./pages/serviceSingle/serviceSingle";
import Portfolio from "./pages/portfolio/portfolio";
import PortfolioSingle from "./pages/portfolioSingle/portfolioSingle";
import Team from "./pages/team/team";
import Blog from "./pages/blog/blog";
import BlogSingle from "./pages/blogSingle/blogSingle";
import Contact from "./pages/contact/contact";
import Licenses from "./pages/licenses/licenses";
import Changelog from "./pages/changelog/changelog";
import ProtectedPage from "./pages/protectedPage/protectedPage";
import NotFound from "./pages/notfound/notfound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ 
      top: 0, behavior: "smooth",
     });
     }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopSingle />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/:id" element={<ServiceSingle />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioSingle />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogSingle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}