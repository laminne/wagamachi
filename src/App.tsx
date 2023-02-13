import {HeaderResponsive} from "./components/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TopPage} from "./pages/Top";
import {Spots} from "./pages/Spots";
import {About} from "./pages/About";
import {FooterSocial} from "./components/footer";
import {Omake} from "./pages/omake";

export default function App() {
  const a = [
    {
      link: "/about",
      label: "広島県について"
    },
    {
      link: "/spots",
      label: "観光スポット"
    },
    {
      link: "/omake",
      label: "おまけページ"
    }
  ]
  return (
      <>
        <BrowserRouter>
          <HeaderResponsive links={a} />
          <Routes>
            <Route path="/" element={<TopPage/>}/>
            <Route path="/spots" element={<Spots/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/omake" element={<Omake/>} />
          </Routes>
          <FooterSocial />
        </BrowserRouter>
      </>
  );
}
