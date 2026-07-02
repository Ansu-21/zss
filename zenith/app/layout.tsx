import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import ContactDock from "@/components/ContactDock";
import RevealInit from "@/components/RevealInit";
import LoaderHide from "@/components/LoaderHide";

export const metadata: Metadata = {
  title: "Zenith Safety Solutions — Build a career that keeps the world safe",
  description:
    "IOSH, OSHA, OTHM, ISO and diploma safety training in Trichy with placement support across India and the Gulf. Globally recognised certifications and real career guidance.",
  openGraph: {
    title: "Zenith Safety Solutions — Build a career that keeps the world safe",
    description: "Globally recognised safety certifications with India & Gulf placement support. Trichy.",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Zenith Safety Solutions",
  url: "https://zss.co.in",
  telephone: "+91-9585252099",
  address: { "@type": "PostalAddress", streetAddress: "1st Floor, Canara Bank ATM Upstairs, Pudukottai Main Road, Subramaniapuram", addressLocality: "Trichy", postalCode: "620020", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  areaServed: ["India", "United Arab Emirates", "Qatar", "Saudi Arabia", "Oman", "Kuwait"],
};

const noFlash = `(function(){try{var t=localStorage.getItem('zenith-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

const loaderCss = `
#zload{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;background:var(--bg,#FBFCFE);transition:opacity .6s ease}
#zload.hide{opacity:0;pointer-events:none}
#zload.gone{display:none}
#zload .zl-glow{position:absolute;left:50%;top:50%;width:460px;height:460px;transform:translate(-50%,-50%);border-radius:9999px;filter:blur(130px);opacity:.5;background:#ECE9FE}
#zload .zl-inner{position:relative;display:flex;flex-direction:column;align-items:center}
#zload img{height:72px;width:auto;animation:zlPop .7s cubic-bezier(.2,.8,.2,1)}
#zload .zl-bar{margin-top:30px;height:3px;width:190px;border-radius:9999px;overflow:hidden;background:#E6ECF5}
#zload .zl-bar i{display:block;height:100%;width:0;border-radius:9999px;background:linear-gradient(90deg,#4F8FF0,#7C6CF0,#FF7A59);animation:zlBar 1.7s cubic-bezier(.4,0,.2,1) forwards}
#zload .zl-cap{margin-top:18px;font-size:11px;letter-spacing:.28em;color:#8A95AC;font-family:ui-monospace,monospace}
.dark #zload .zl-bar{background:#25304B}
@keyframes zlPop{0%{opacity:0;transform:scale(.92) translateY(10px)}100%{opacity:1;transform:none}}
@keyframes zlBar{0%{width:0}100%{width:100%}}
`;


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <style dangerouslySetInnerHTML={{ __html: loaderCss }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        <div id="zload">
          <span className="zl-glow" />
          <div className="zl-inner">
            <img src="https://www.zss.co.in/assets/images/logo/logo-dark.png" alt="Zenith Safety Solutions" className="dark:hidden" />
            <img src="https://www.zss.co.in/assets/images/logo/logo-white.png" alt="Zenith Safety Solutions" className="hidden dark:block" />
            <span className="zl-bar"><i /></span>
            <span className="zl-cap">KEEPING THE WORLD RUNNING &middot; SINCE 2013</span>
          </div>
        </div>
        <LoaderHide />
        <Nav />
        {children}
        <ContactDock />
        <RevealInit />
      </body>
    </html>
  );
}
