import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function MainLayout({ children }) {
 
  return (
    <div className="max-w-[1920px] relative">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;