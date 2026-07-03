import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-alt border-t bd pt-16">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-[1.3fr_1fr_1.2fr]">
        <div>
          <img src="https://www.zss.co.in/assets/images/logo/logo-dark.png" alt="Zenith Safety Solutions" className="block h-16 w-auto dark:hidden" />
          <img src="https://www.zss.co.in/assets/images/logo/logo-white.png" alt="Zenith Safety Solutions" className="hidden h-16 w-auto dark:block" />
          <p className="mt-5 max-w-[42ch] text-[14.5px] leading-relaxed text-2">
            Zenith Safety Solutions, Trichy — a wide range of government-approved safety diploma and
            certification courses, highly regarded by safety aspirants, HSE professionals, employers and
            organisations across the globe.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/919585252099" className="rounded-full px-5 py-2.5 text-[14px] font-semibold text-white" style={{ background: "var(--color-coral)" }}>WhatsApp us</a>
            <Link href="/login" className="rounded-full border bd bg-card px-5 py-2.5 text-[14px] font-medium text-app">Get my report</Link>
          </div>
        </div>

        <div>
          <h4 className="text-[15px] font-semibold text-app">Contact</h4>
          <ul className="mt-4 space-y-3 text-[14px] text-2">
            <li>1st Floor, Canara Bank ATM Upstairs,<br />Pudukottai Main Road, Subramaniapuram,<br />Trichy – 620020</li>
            <li>Mobile: <a href="tel:9585252099" className="text-app hover:underline">+91 958 525 2099</a></li>
            <li>Landline: <a href="tel:04312962580" className="text-app hover:underline">0431-2962580</a></li>
            <li>Email: <a href="mailto:info@zss.co.in" className="text-app hover:underline">info@zss.co.in</a></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-[13px]">
            <Link href="/about" className="text-2 hover:text-app">About</Link>
            <Link href="/courses" className="text-2 hover:text-app">Courses</Link>
            <Link href="/industrial-training" className="text-2 hover:text-app">Industrial Training</Link>
            <Link href="/gallery" className="text-2 hover:text-app">Gallery</Link>
            <Link href="/plan" className="text-2 hover:text-app">Fees &amp; EMI</Link>
            <Link href="/quiz" className="text-2 hover:text-app">Safety Quiz</Link>
            <Link href="/contact" className="text-2 hover:text-app">Contact</Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border bd">
          <iframe
            title="Zenith Safety Solutions location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3324567822824!2d78.69683111534755!3d10.785829061968103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5b8bfe3963f%3A0x4474a22e296bc653!2szenith%20safety%20solutions!5e0!3m2!1sen!2sin!4v1669883311717!5m2!1sen!2sin"
            width="100%"
            height="220"
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </div>

      <div className="mt-14 border-t bd py-6">
        <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-6 text-[13px] text-3">
          <div>© {new Date().getFullYear()} Zenith Safety Solutions · Established 2013 · Trichy, Tamil Nadu</div>
          <div>ISO certified · NSDI accredited</div>
        </div>
      </div>
    </footer>
  );
}
