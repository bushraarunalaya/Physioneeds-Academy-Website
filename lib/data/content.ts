const U = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const slides = [
  { eyebrow: "UK-accredited · practical physiotherapy upskilling", title: "You did not spend four years studying to hand out hot packs.", body: "Certification courses, fellowships, PG diplomas and clinical internships that rebuild your assessment confidence, sharpen your hands, and give you a specialist identity patients and employers recognise.", img: U("photo-1571019613454-1cb2f99b2d8b"), alt: "Physiotherapist treating a patient", ctas: [["Find my best programme", "#catalogue"], ["Get the prospectus", "#callback"]] },
  { eyebrow: "Certification · fellowship · PG diploma", title: "Two years in the same role, at the same salary, is not patience. It is a plateau.", body: "Choose sports, musculoskeletal, spine, knee, shoulder, manual therapy, dry needling or taping — and earn a professional suffix like CSPRS, CSRS or FOMT that separates your profile from every other BPT.", img: U("photo-1576091160550-2173dba999ef"), alt: "Clinical case discussion", ctas: [["Explore all programmes", "#catalogue"], ["Check my eligibility", "https://www.e-physioneeds.com/s/pages/check"]] },
  { eyebrow: "Start free · zero risk", title: "Burned by an online course before? Then judge us before you pay us.", body: "Take the free clinical e-book, sit in on a real demo class, and attend the Thursday masterclass. Decide on the teaching, not the marketing.", img: U("photo-1518611012118-696072aa579a"), alt: "Rehabilitation training session", ctas: [["Claim free access", "#free"], ["Watch student reviews", "#proof"]] },
];
export const stats = [["80,000+", "Physios trained"], ["190+", "Countries"], ["50+", "Programmes"], ["4.9★", "Avg rating"]];
export const problems = [
  ["“I know the diagnosis. I freeze on the treatment plan.”", "You can name the pathology, but the next twenty minutes feel like guesswork.", "Start with a certification", "#catalogue"],
  ["“My salary has not moved in two years.”", "Hospitals and clinics pay a premium for a specialist identity, not for years served.", "Fellowships & PG diplomas", "#catalogue"],
  ["“Patients stop coming after four sessions.”", "Retention, referrals and reputation follow from outcomes you can produce reliably.", "See patient outcomes", "#outcomes"],
  ["“I have paid for an online course before. It taught me nothing.”", "A fair objection. The demo class, certificate and patient results are all here before any payment.", "Claim free access first", "#free"],
];
export const doors = [
  ["A", "Certification Courses", "Region-wise programmes plus dry needling, taping, IASTM, MET and MFR.", "#catalogue"],
  ["B", "Fellowships & PG Diplomas", "Mentored pathways in sports, musculoskeletal, orthopaedic and manual therapy, including internship.", "#catalogue"],
  ["C", "Books, Tools & Membership", "Six clinical books, protocols and practice tools, plus year-round membership.", "#books"],
  ["D", "Free Access", "E-book, demo class, Thursday masterclass and a personal course map.", "#free"],
];
export const specialties = [
  ["Spine & Back Pain", "4 courses", "Cervical, lumbar, disc, posture", U("photo-1624716346720-6c96dfd07807", 900), "Spine"],
  ["Knee & Lower Limb", "3 courses", "ACL, meniscus, OA, post-op", U("photo-1609113160023-4e31f3765fd7", 900), "Knee"],
  ["Shoulder & Upper Limb", "3 courses", "Frozen shoulder, cuff, instability", U("photo-1645005512968-0c1fe99f0093", 900), "Shoulder"],
  ["Sports & Athletes", "5 courses", "On-field care, return to play", U("photo-1608138278545-366680accc66", 900), "Sports"],
  ["Musculoskeletal", "6 courses", "Assessment, reasoning, protocols", U("photo-1540205895360-4ad4cffb3aa8", 900), "Musculoskeletal"],
  ["Manual Therapy", "5 courses", "MET, MFR, mobilisation, PRT", U("photo-1519824145371-296894a0daa9", 900), "Manual therapy"],
  ["Dry Needling", "2 courses", "Trigger points, safety, regions", U("photo-1598555763574-dca77e10427e", 900), "Dry needling"],
  ["Taping & IASTM", "2 courses", "Kinesio, rigid, instrument work", U("photo-1643399225485-5a0e8c53cccb", 900), "Taping"],
];
export const founders = [
  { name: "Dr. Chakshu Bansal", role: "PT, Ph.D. · Founder", img: "https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/bzDj2dr.chakhsubansal.png", facts: "16+ years in practice · 80,000+ physios mentored · 250+ workshops · 6 books · 3× world record holder", quote: "A certificate should be evidence that your hands got better. Not evidence that you finished watching videos.", skills: "Manual therapy · Dry needling · Sports rehabilitation · Pain management · Deformity correction" },
  { name: "Prof. Krishna N. Sharma", role: "PT, Ph.D. · Co-Founder & Academic Director", img: "https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/hQjTxkrishnasir2.png", facts: "PGDOMT programme co-lead · oversees academic standards across fellowships and diplomas", quote: "An assessment that everyone passes is not an assessment. It is a formality — and formalities do not build clinicians.", skills: "Orthopaedic manual therapy · Curriculum design · Research literacy · Academic assessment" },
];
export const testimonials = [
  ["32 years in practice", "I enrolled expecting to skim. I stayed because the manual therapy reasoning was more current than anything in my own department.", "Dr. R. Menon, MPT (Ortho)", "Professor & Clinician, Kochi"],
  ["27 years in practice", "The dry needling programme rebuilt half my treatment approach, and my chronic pain outcomes changed within a quarter.", "Dr. S. Gill, BPT", "Clinic Owner, Ludhiana"],
  ["35 years in practice", "What convinced me was the patient demonstrations — you can see the therapist’s hands clearly, which is the only thing that ever mattered.", "Dr. A. Banerjee, MPT (Neuro)", "Senior Consultant, Kolkata"],
  ["21 years in practice", "The return-to-play testing framework alone justified the fellowship fee in the first season.", "Dr. V. Kulkarni, MPT (Sports)", "Team Physiotherapist, Pune"],
  ["29 years in practice", "It is now how we onboard anyone joining the department, because everyone ends up speaking the same clinical language.", "Dr. N. Fernandes, MPT", "Head of Rehabilitation, Goa"],
  ["24 years in practice", "Studying between shifts and attending one practical lab was the only format that could have worked for me.", "Dr. A. Farooqi, BPT", "Senior Physiotherapist, Dubai"],
];
export const offers = [
  ["Fellowships", "₹8,000 off any fellowship", "Applies to sports, musculoskeletal, orthopaedic and manual therapy fellowships for this intake only.", "FELLOW8K"],
  ["Bundles", "Buy two, get 30% off the second", "Pair any two certification or technique courses; the lower-priced one drops by 30%.", "PAIR30"],
  ["Students", "25% BPT student concession", "Verified BPT students and interns on all certification and technique courses.", "BPT25"],
];
// TODO: replace with the real intake end date (comes from the backend later)
export const OFFER_ENDS_AT = "2026-11-19T00:00:00+05:30";
export const books = [
  ["Printed clinical books", "Hard copy, delivered anywhere in India.", "Order", "https://pages.razorpay.com/stores/st_QJeRUvxKCVG24f"],
  ["Digital editions", "Instant downloads, searchable on your phone.", "Download", "https://www.e-physioneeds.com/products#nav_bar"],
  ["Protocols & assessment sheets", "Printable outcome measures and home-programme sheets.", "Browse", "https://www.e-physioneeds.com/products#nav_bar"],
  ["Tools & practice kits", "Taping rolls, IASTM instruments, needling supplies.", "Shop", "https://www.e-physioneeds.com/products#nav_bar"],
];
export const steps = [
  ["Choose by caseload", "Pick the region or technique matching the patients you already see."],
  ["Study in short modules", "Lessons of fifteen to twenty-five minutes, rewatchable forever."],
  ["Join live case rounds", "Weekly sessions where faculty work through real presentations."],
  ["Practise with your hands", "A weekend city lab or supervised clinical internship."],
  ["Certify and apply", "Clear the assessment and add the suffix to your professional name."],
];
export const faqs = [
  ["Can an online physiotherapy course really improve hands-on skill?", "On its own, only partly. Video teaches reasoning, sequencing and dosage well; weekend labs and the supervised internship correct pressure and hand placement."],
  ["Which physiotherapy course should I start with?", "Match it to the patients already in your appointment book, or take the free skills review and let it map the answer."],
  ["I have twenty years of experience. Is this pitched too junior for me?", "Roughly four in ten learners have more than a decade in practice, and the material assumes competence."],
  ["Can I study while working full time?", "Yes. Lessons are short, live sessions are in the evening and revision access does not expire."],
  ["Is the certificate genuinely recognised?", "Programmes carry UK accreditation, with a unique ID and QR verification. They are professional development credentials, not a statutory degree or practising licence."],
  ["What does it cost, and is EMI available?", "Fees vary by programme and intake, so a counsellor gives the current figure. Instalments are available on most fellowships and PG diplomas."],
  ["What does membership include that a single course does not?", "The protocol library, monthly case rounds, digital books and a standing discount on every new programme."],
  ["What if the programme turns out not to be right for me?", "Use the free resources first. If something is not working, the support team resolves it directly on WhatsApp."],
];
