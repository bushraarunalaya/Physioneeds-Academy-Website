export type Group = "Fellowships" | "Certifications" | "Techniques" | "PG Diplomas" | "Hands-on & Membership";
export type Course = { code: string; title: string; note: string; group: Group; tags: string[]; href: string };
const B = "https://www.e-physioneeds.com/courses/";
export const GROUPS: Group[] = ["Fellowships", "Certifications", "Techniques", "PG Diplomas", "Hands-on & Membership"];
export const TAGS = ["Spine", "Knee", "Shoulder", "Sports", "Musculoskeletal", "Dry needling", "Taping", "Manual therapy", "Fellowship"];
export const courses: Course[] = [
  { code: "CSPRS", title: "Sports Physiotherapy & Rehabilitation Certification", note: "Most enrolled · Online + practical", group: "Certifications", tags: ["Sports"], href: B + "Online-Sports-Fellowship-645b4141e4b08c3db6046d0a" },
  { code: "CMPRS", title: "Musculoskeletal Physiotherapy & Rehab Certification", note: "Foundation skill", group: "Certifications", tags: ["Musculoskeletal"], href: B + "Musculoskeletal-Fellowship-6599222ce4b051e9187c02a4" },
  { code: "CSRS", title: "A–Z Spine Physiotherapy & Rehab Certification", note: "A–Z series · Region-specific", group: "Certifications", tags: ["Spine"], href: B + "A-Z-Spine-6452276ce4b081d895e380e2" },
  { code: "CKRS", title: "A–Z Knee Physiotherapy & Rehab Certification", note: "A–Z series · Region-specific", group: "Certifications", tags: ["Knee"], href: B + "A-Z-Knee-Course-64521d01e4b045fa3fda1940" },
  { code: "CSHRS", title: "A–Z Shoulder Physiotherapy & Rehab Certification", note: "A–Z series · Region-specific", group: "Certifications", tags: ["Shoulder"], href: B + "A-Z-Shoulder-Course-65d248f4e4b055ebd1332ab4" },
  { code: "SPORTS", title: "Sports Injuries & Rehabilitation Certification", note: "Field-focused", group: "Certifications", tags: ["Sports"], href: B + "Sports-Injuries-and-Rehabilitation-664b176d2c0f402f0deea7d2" },
  { code: "CDNE", title: "Dry Needling Technique", note: "Fills quickly · Hands-on", group: "Techniques", tags: ["Dry needling"], href: B + "Dry-Needling-6487046ae4b0688147c78db9" },
  { code: "CTE", title: "Tapedia — Encyclopedia of Taping Technique", note: "Visual atlas", group: "Techniques", tags: ["Taping"], href: B + "Certification-in-Taping-64525a61e4b070504d0f60c3" },
  { code: "CIE", title: "Instrument Assisted Soft Tissue Mobilization", note: "Technique · Hands-on", group: "Techniques", tags: ["Taping", "Manual therapy"], href: B + "Instrument-Assisted-Soft-Tissue-Mobilization-IASTM-64525660e4b0f01f19c435d1" },
  { code: "MET", title: "Muscle Energy Technique", note: "Technique · Manual therapy", group: "Techniques", tags: ["Manual therapy"], href: B + "Muscle-Energy-Technique-645256f5e4b046d2f3ea040b" },
  { code: "MFR", title: "Musculofascial Release Technique", note: "Technique · Manual therapy", group: "Techniques", tags: ["Manual therapy"], href: B + "Musculofascial-Release-649aad0de4b010203d08739d" },
  { code: "PRT", title: "Positional Release Therapy", note: "Technique · Manual therapy", group: "Techniques", tags: ["Manual therapy"], href: B + "Certification-in-Positional-Release-Therapy-645b3829e4b05df3e2da8b19" },
  { code: "FSPR", title: "Fellowship in Sports Physiotherapy & Rehabilitation", note: "Flagship · Mentored", group: "Fellowships", tags: ["Sports", "Fellowship"], href: B + "Fellowship-in-Sports-Physiotherapy-and-Rehabilitation-696226c1bb5f4611e0b464f9" },
  { code: "FMPR", title: "Fellowship in Musculoskeletal Physiotherapy & Rehab", note: "Fellowship · Mentored", group: "Fellowships", tags: ["Musculoskeletal", "Fellowship"], href: B + "Fellowship-in-Musculoskeletal-Physiotherapy-and-Rehab-FMPR-6969d4e3ea147a42b3b53e12" },
  { code: "FOPR", title: "Fellowship in Orthopaedic Physiotherapy & Rehab", note: "Fellowship · Mentored", group: "Fellowships", tags: ["Fellowship"], href: B + "Fellowship-in-Orthopaedic-Physiotherapy-and-Rehab-FOPR-696226957e8f735388d9bb0e" },
  { code: "FOMT", title: "Fellowship in Orthopaedic Manual Therapy", note: "Fellowship · Hands-on", group: "Fellowships", tags: ["Manual therapy", "Fellowship"], href: B + "Fellowship-in-Orthopaedic-Manual-Therapy-FOMT-6962266c44d62e6119114feb" },
  { code: "FSMIM", title: "Fellowship in Sports Medicine & Injury Management", note: "Fellowship · Mentored", group: "Fellowships", tags: ["Sports", "Fellowship"], href: B + "Fellowship-course-in-Sports-Medicine-and-Injury-Management-69034a88494f6704dcde655c" },
  { code: "PGDOPR", title: "PG Diploma in Orthopaedic Physiotherapy & Rehab", note: "Twelve months · Structured study", group: "PG Diplomas", tags: [], href: B + "PG-Diploma-in-Orthopedic-Physiotherapy-and-Rehab-68512df537f59920cf4ca270" },
  { code: "PGDOMT", title: "PG Diploma in Orthopaedic Manual Therapy", note: "Twelve months · With Prof. Krishna N. Sharma", group: "PG Diplomas", tags: ["Manual therapy"], href: B + "Post-Graduate-Diploma-in-Orthopaedic-Manual-Therapy-PGDOMT-Copy-685fb33969daac5915d600c2" },
  { code: "INTERN", title: "Clinical Internship", note: "In person · Supervised", group: "Hands-on & Membership", tags: [], href: B + "Clinical-Internship-67b9a2e783101b012fdf1fad" },
  { code: "LABS", title: "City Workshops & Practical Labs", note: "Hands-on · Weekend format", group: "Hands-on & Membership", tags: [], href: "https://physioneedsacademy.com/scheduled-courses-2/" },
  { code: "MEMBER", title: "Academy Membership Programme", note: "Year-round access", group: "Hands-on & Membership", tags: [], href: "https://www.e-physioneeds.com/s/pages/become-a-member#application" },
];

const SITE = "https://d502jbuhuh9wk.cloudfront.net/orgData/62bd97c60cf2f0525dc732d0/pages/assets/images/";
const COURSE_IMAGES: Record<string, string> = {
  CSPRS: SITE + "rjsI1whatsappimage20251126at3.06.13pm1.jpg", CMPRS: SITE + "1EpJawhatsappimage20251126at3.06.13pm2.jpg", CSRS: SITE + "j3W0dwhatsappimage20251126at3.07.02pm.jpg", CKRS: SITE + "peL4Uwhatsappimage20251126at3.06.12pm1.jpg", CSHRS: SITE + "KWYJswhatsappimage20251126at3.06.12pm.jpg", SPORTS: SITE + "XmcKpwhatsappimage20251126at3.03.08pm.jpg", CDNE: SITE + "M1Swe22.jpg", CTE: SITE + "zvqEbwhatsappimage20251120at5.17.57pm.jpg", CIE: SITE + "kaiER29.jpg", MET: SITE + "tGkEK35.png", MFR: SITE + "3yOBs33.png", PRT: SITE + "RlXMx24.png", FSPR: SITE + "FYp0Pcopyofcoursesimage1200x800px36.png", FMPR: SITE + "gnmYxcopyofcoursesimage1200x800px40.png", FOPR: SITE + "jIcolcopyofcoursesimage1200x800px38.png", FOMT: SITE + "oWnaScopyofcoursesimage1200x800px39.png", FSMIM: SITE + "G618Wcopyofcoursesimage1200x800px37.png", PGDOPR: SITE + "XfQRD18.jpg", PGDOMT: SITE + "Pu17619.jpg", INTERN: SITE + "ErowQ15.png", LABS: SITE + "wGOmQ10.png", MEMBER: SITE + "buD3d16.png",
};
const FALLBACK = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=640&q=75";
/** Course thumbnails are the matching public course images used by e-physioneeds.com. */
export function courseImage(c: Course): string {
  return COURSE_IMAGES[c.code] || FALLBACK;
}
