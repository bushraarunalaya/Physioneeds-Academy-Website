import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  const col = (t: string, items: [string, string][]) => (
    <div className="fcol"><b>{t}</b>{items.map(([l, h]) => <a key={l} href={h}>{l}</a>)}</div>
  );
  return (
    <footer className="dk foot">
      <div className="w">
        <div className="foot-row">
          <div className="foot-brand">
            <span className="logo-chip"><Image src="/brand/logo.png" alt="PhysioNeeds Academy" width={102} height={80} /></span>
            <p className="m">Clinical education for physiotherapists since 2015. Founded by Dr. Chakshu Bansal and Prof. Krishna N. Sharma.</p>
          </div>
          {col("Programmes", [["Certification courses", "#catalogue"], ["Technique courses", "#catalogue"], ["Fellowships", "#catalogue"], ["PG diplomas", "#catalogue"], ["Clinical internship", "#catalogue"]])}
          {col("Academy", [["Membership", "https://www.e-physioneeds.com/memberships"], ["Free library", "#free"], ["Books & tools", "#books"], ["Faculty", "#founders"]])}
          {col("Contact", [[`WhatsApp ${SITE.phone}`, SITE.whatsapp], [SITE.email, `mailto:${SITE.email}`], ["Thursday masterclass", "#masterclass"], ["FAQs", "#faq"]])}
        </div>
        <p className="m fine">PhysioNeeds Academy programmes are professional development and continuing education courses intended to build clinical skill. They are not a statutory qualification, a licence to practise, or an equivalent to degrees governed by regulatory councils. © 2026 PhysioNeeds Academy.</p>
        <p className="m fine"><a href="https://www.e-physioneeds.com/termsofuse">Terms of use</a> · <a href="https://www.e-physioneeds.com/privacypolicy">Privacy policy</a> · <a href="https://www.e-physioneeds.com/refundpolicy">Refund policy</a> · <a href="https://www.e-physioneeds.com/aboutus">About us</a> · <a href="https://www.e-physioneeds.com/contactus">Contact us</a></p>
      </div>
    </footer>
  );
}
