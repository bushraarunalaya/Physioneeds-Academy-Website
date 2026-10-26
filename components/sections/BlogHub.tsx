"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type Article = { slug: string; title: string; category: string; date: string; excerpt: string; image: string; accent: string };
const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
const articles: Article[] = [
  { slug: "multiple-sclerosis-physiotherapy-managing-fatigue-balance-and-mobility", title: "Multiple Sclerosis & Physiotherapy: Managing Fatigue, Balance and Mobility", category: "Neurological Rehab", date: "23 Oct 2026", excerpt: "A practical look at helping people manage fatigue, balance problems, weakness and changing physical function with confidence.", image: "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b895d256a9a3660c755f/cover.jpg?v=1", accent: "#D9E8E2" },
  { slug: "spinal-cord-injury-rehabilitation-principles-goal-setting-function", title: "Spinal Cord Injury Rehabilitation: Principles, Goal-Setting & Function", category: "Clinical Reasoning", date: "22 Oct 2026", excerpt: "How long-term rehabilitation can maximise independence, prevent secondary complications and restore participation.", image: "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b77919478349c5f0db59/cover.jpg?v=1", accent: "#F4E3C1" },
  { slug: "dysfunctional-breathing-breathing-pattern-disorders-assessment-and-retraining", title: "Dysfunctional Breathing & Breathing Pattern Disorders", category: "Cardiopulmonary", date: "21 Oct 2026", excerpt: "Assessment and retraining ideas for people experiencing dysfunctional breathing alongside respiratory or musculoskeletal symptoms.", image: "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b712ab03f658e816cb9d/cover.jpg?v=1", accent: "#DCE6F2" },
  { slug: "exercise-prescription-for-type-2-diabetes-the-physiotherapist-s-role", title: "Exercise Prescription for Type 2 Diabetes", category: "Exercise Prescription", date: "20 Oct 2026", excerpt: "The physiotherapist’s role in supporting glucose control, movement confidence and long-term metabolic health.", image: "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b6413e71fc8b1226d4da/cover.jpg?v=1", accent: "#F0DCD7" },
  { slug: "pulmonary-rehabilitation-for-copd-post-viral-lung-conditions", title: "Pulmonary Rehabilitation for COPD & Post-Viral Lung Conditions", category: "Respiratory Care", date: "19 Oct 2026", excerpt: "A structured approach to improving exercise capacity, breathing efficiency, physical function and confidence.", image: "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b57b4e316ea1d9f86b4f/cover.jpg?v=1", accent: "#E7E1F1" },
  { slug: "dry-needling-clinical-reasoning", title: "Dry Needling: From Technique to Clinical Reasoning", category: "Dry Needling", date: "16 Oct 2026", excerpt: "Where tissue selection, safety and a clear clinical question matter more than simply knowing the technique.", image: image("photo-1576091160550-2173dba999ef"), accent: "#F1E4D2" },
  { slug: "return-to-sport-testing", title: "Return-to-Sport Testing That Actually Changes Decisions", category: "Sports Rehab", date: "14 Oct 2026", excerpt: "Build a testing battery around the demands of the sport, not a checklist that looks impressive on paper.", image: image("photo-1534438327276-14e5300c3a48"), accent: "#DCE9D9" },
  { slug: "the-clinical-assessment-reset", title: "The Clinical Assessment Reset", category: "Clinical Skills", date: "12 Oct 2026", excerpt: "A simple structure for moving from a busy first appointment to a calm, defensible treatment plan.", image: image("photo-1576091160399-112ba8d25d1d"), accent: "#E8E1D6" },
];
const moreArticles: Article[] = [
  ["cardiac-rehabilitation-the-physiotherapist-s-role-after-heart-attack-surgery", "Cardiac Rehabilitation: The Physiotherapist’s Role After Heart Attack & Surgery", "Cardiopulmonary", "18 Oct 2026"],
  ["kinesiology-taping-beyond-sports-posture-swelling-everyday-pain", "Kinesiology Taping Beyond Sports: Posture, Swelling & Everyday Pain", "Taping", "17 Oct 2026"],
  ["clinical-palpation-skills-the-foundation-of-accurate-assessme", "Clinical Palpation Skills: The Foundation of Accurate Assessment", "Clinical Skills", "16 Oct 2026"],
  ["myofascial-release-vs-cupping-vs-iastm-choosing-the-right-soft-tissue-too", "Myofascial Release vs Cupping vs IASTM: Choosing the Right Soft-Tissue Tool", "Manual Therapy", "15 Oct 2026"],
  ["instrument-assisted-soft-tissue-mobilisation-iastm-evidence-tools-technique", "Instrument-Assisted Soft Tissue Mobilisation (IASTM): Evidence, Tools & Technique", "Manual Therapy", "14 Oct 2026"],
  ["blood-flow-restriction-bfr-training-a-practical-rehab-guide-for-2026", "Blood Flow Restriction (BFR) Training: A Practical Rehab Guide for 2026", "Sports Rehab", "13 Oct 2026"],
  ["using-ai-tools-for-physiotherapy-notes-admin-patient-education-without-cutting-corners", "Using AI Tools for Physiotherapy Notes, Admin & Patient Education", "AI in Healthcare", "12 Oct 2026"],
  ["virtual-reality-vr-in-rehabilitation-clinical-uses-in-neuro-and-pain", "Virtual Reality (VR) in Rehabilitation: Clinical Uses in Neuro and Pain", "AI in Healthcare", "11 Oct 2026"],
  ["wearable-sensors-motion-capture-turning-movement-data-into-better-rehab", "Wearable Sensors & Motion Capture: Turning Movement Data into Better Rehab", "Clinical Innovation", "10 Oct 2026"],
  ["robotic-rehabilitation-in-india-what-every-physiotherapist-should-know-in-2026", "Robotic Rehabilitation in India: What Every Physiotherapist Should Know", "Clinical Innovation", "9 Oct 2026"],
  ["postpartum-recovery-a-physiotherapy-roadmap-for-new-mothers", "Postpartum Recovery: A Physiotherapy Roadmap for New Mothers", "Antenatal Care", "8 Oct 2026"],
  ["tele-rehabilitation-in-india-a-practical-guide-for-clinics-and-patients", "Tele-Rehabilitation in India: A Practical Guide for Clinics and Patients", "Digital Rehabilitation", "7 Oct 2026"],
  ["running-injuries-explained-a-physiotherapy-guide-for-india-s-marathon-boom", "Running Injuries Explained: A Physiotherapy Guide for India’s Marathon Boom", "Sports Rehab", "6 Oct 2026"],
  ["physiotherapy-during-pregnancy-safe-exercises-for-every-trimester", "Physiotherapy During Pregnancy: Safe Exercises for Every Trimester", "Antenatal Care", "5 Oct 2026"],
  ["parkinson-s-disease-physiotherapy-exercise-based-management-strategies", "Parkinson’s Disease Physiotherapy: Exercise-Based Management Strategies", "Neurological Rehab", "4 Oct 2026"],
  ["glp-1-weight-loss-drugs-and-muscle-loss-the-physiotherapist-s-role-in-2026", "GLP-1 Weight-Loss Drugs and Muscle Loss: The Physiotherapist’s Role", "Exercise Prescription", "3 Oct 2026"],
  ["frozen-shoulder-adhesive-capsulitis-a-complete-recovery-guide", "Frozen Shoulder (Adhesive Capsulitis): A Complete Recovery Guide", "Shoulder Rehab", "2 Oct 2026"],
  ["fall-prevention-in-the-elderly-a-physiotherapist-s-complete-guide", "Fall Prevention in the Elderly: A Physiotherapist’s Complete Guide", "Elderly Care", "1 Oct 2026"],
  ["corporate-wellness-programs-why-companies-are-hiring-in-house-physiotherapists", "Corporate Wellness Programs: Why Companies Are Hiring In-House Physiotherapists", "Corporate Wellness", "30 Sep 2026"],
  ["musculoskeletal-syndrome-of-menopause-what-physiotherapists-need-to-know", "Musculoskeletal Syndrome of Menopause: What Physiotherapists Need to Know", "Women’s Health", "29 Sep 2026"],
  ["plantar-fasciitis-causes-diagnosis-and-physiotherapy-treatment", "Plantar Fasciitis: Causes, Diagnosis, and Physiotherapy Treatment", "Foot & Ankle", "28 Sep 2026"],
  ["desk-job-back-pain-an-ergonomics-guide-for-it-professiona", "Desk Job Back Pain: An Ergonomics Guide for IT Professionals", "Ergonomics", "27 Sep 2026"],
  ["ai-in-physiotherapy-how-smart-assessment-tools-are-changing-practice", "AI in Physiotherapy: How Smart Assessment Tools Are Changing Practice", "AI in Healthcare", "26 Sep 2026"],
  ["pelvic-floor-physiotherapy-what-every-physiotherapist-should-know", "Pelvic Floor Physiotherapy: What Every Physiotherapist Should Know", "Women’s Health", "25 Sep 2026"],
  ["vestibular-rehabilitation-therapy-managing-vertigo-and-dizziness", "Vestibular Rehabilitation Therapy: Managing Vertigo and Dizziness", "Balance Rehab", "24 Sep 2026"],
  ["stroke-rehabilitation-in-2026-evidence-based-physiotherapy-protocols", "Stroke Rehabilitation in 2026: Evidence-Based Physiotherapy Protocols", "Neurological Rehab", "23 Sep 2026"],
  ["top-10-sports-injuries-and-how-physiotherapists-manage-them", "Top 10 Sports Injuries and How Physiotherapists Manage Them", "Sports Rehab", "22 Sep 2026"],
  ["tendinopathy-management-a-practical-guide-for-musculoskeletal-physiotherapists", "Tendinopathy Management: A Practical Guide for Musculoskeletal Physiotherapists", "MSK Rehab", "21 Sep 2026"],
  ["taping-and-bracing-in-sports-when-to-use-them-and-how-they-help", "Taping and Bracing in Sports: When to Use Them and How They Help", "Sports Rehab", "20 Sep 2026"],
  ["sports-medicine-vs-sports-physiotherapy-understanding-the-difference", "Sports Medicine vs Sports Physiotherapy: Understanding the Difference", "Sports Rehab", "19 Sep 2026"],
  ["shoulder-pain-assessment-and-treatment-what-every-msk-physiotherapist-must-know", "Shoulder Pain Assessment and Treatment: What Every MSK Physiotherapist Must Know", "Shoulder Rehab", "18 Sep 2026"],
  ["return-to-sport-after-injury-a-physiotherapist-s-complete-guide", "Return to Sport After Injury: A Physiotherapist’s Complete Guide", "Sports Rehab", "17 Sep 2026"],
  ["prehabilitation-before-orthopaedic-surgery-why-it-matters-and-how-to-do-it", "Prehabilitation Before Orthopaedic Surgery: Why It Matters and How to Do It", "Orthopaedic Rehab", "16 Sep 2026"],
  ["post-surgical-orthopaedic-rehabilitation-what-physiotherapists-must-know", "Post-Surgical Orthopaedic Rehabilitation: What Physiotherapists Must Know", "Orthopaedic Rehab", "15 Sep 2026"],
  ["overuse-injuries-in-athletes-prevention-and-management-strategies", "Overuse Injuries in Athletes: Prevention and Management Strategies", "Sports Rehab", "14 Sep 2026"],
  ["online-vs-offline-physiotherapy-courses-which-one-is-better-for-working-physiotherapists", "Online vs Offline Physiotherapy Courses: Which One Is Better?", "Career Guidance", "13 Sep 2026"],
  ["on-field-emergency-management-for-sports-physiotherapists-what-you-must-know", "On-Field Emergency Management for Sports Physiotherapists", "Emergency Management", "12 Sep 2026"],
  ["lumbar-spine-manual-therapy-clinical-techniques-for-physiotherapists", "Lumbar Spine Manual Therapy: Clinical Techniques for Physiotherapists", "Manual Therapy", "11 Sep 2026"],
  ["lower-back-pain-evidence-based-physiotherapy-management-in-2026", "Lower Back Pain: Evidence-Based Physiotherapy Management", "Back Pain", "10 Sep 2026"],
  ["knee-pain-in-patients-a-musculoskeletal-physiotherapist-s-assessment-guide", "Knee Pain in Patients: A Musculoskeletal Physiotherapist’s Assessment Guide", "Knee Rehab", "9 Sep 2026"],
  ["joint-mobilisation-vs-manipulation-what-physiotherapists-need-to-know", "Joint Mobilisation vs Manipulation: What Physiotherapists Need to Know", "Manual Therapy", "8 Sep 2026"],
  ["how-to-build-a-successful-msk-physiotherapy-private-practice-in-india", "How to Build a Successful MSK Physiotherapy Private Practice in India", "Clinic Practice", "7 Sep 2026"],
  ["how-to-become-a-sports-physiotherapist-in-india-a-step-by-step-guide", "How to Become a Sports Physiotherapist in India: A Step-by-Step Guide", "Career Guidance", "6 Sep 2026"],
  ["hip-replacement-rehabilitation-phases-precautions-and-return-to-activity", "Hip Replacement Rehabilitation: Phases, Precautions, and Return to Activity", "Orthopaedic Rehab", "5 Sep 2026"],
  ["fracture-rehabilitation-how-physiotherapists-speed-up-recovery", "Fracture Rehabilitation: How Physiotherapists Speed Up Recovery", "Fracture Rehab", "4 Sep 2026"],
  ["fellowship-in-musculoskeletal-physiotherapy-is-it-worth-it-for-your-career", "Fellowship in Musculoskeletal Physiotherapy: Is It Worth It?", "Fellowship Courses", "3 Sep 2026"],
  ["dry-needling-vs-manual-therapy-which-is-better-for-musculoskeletal-pain", "Dry Needling vs Manual Therapy: Which Is Better for Musculoskeletal Pain?", "Dry Needling", "2 Sep 2026"],
  ["concussion-in-sports-a-physiotherapist-s-guide-to-assessment-and-return-to-play", "Concussion in Sports: A Physiotherapist’s Guide to Return to Play", "Concussion Management", "1 Sep 2026"],
  ["cervical-spine-assessment-and-manual-therapy-a-physiotherapist-s-guide", "Cervical Spine Assessment and Manual Therapy: A Physiotherapist’s Guide", "Spine Rehab", "31 Aug 2026"],
  ["career-opportunities-for-orthopaedic-physiotherapists-in-india-s-growing-healthcare-sector", "Career Opportunities for Orthopaedic Physiotherapists in India", "Career Guidance", "30 Aug 2026"],
  ["acl-rehabilitation-protocols-what-sports-physiotherapists-need-to-know", "ACL Rehabilitation Protocols: What Sports Physiotherapists Need to Know", "ACL Rehabilitation", "29 Aug 2026"],
  ["5-fellowship-courses-at-physioneeds-academy-that-can-transform-your-physio-career", "5 Fellowship Courses That Can Transform Your Physio Career", "Fellowship Courses", "28 Aug 2026"],
  ["why-every-physiotherapist-should-consider-a-fellowship-in-sports-physiotherapy", "Why Every Physiotherapist Should Consider a Fellowship in Sports Physiotherapy", "Fellowship Courses", "27 Aug 2026"],
  ["sports-physiotherapy-vs-general-physiotherapy-key-differences-explained", "Sports Physiotherapy vs General Physiotherapy: Key Differences Explained", "Sports Rehab", "26 Aug 2026"],
  ["why-physiotherapists-are-choosing-physioneeds-academy-for-sports-physiotherapy-education", "Why Physiotherapists Are Choosing PhysioNeeds Academy", "Career Guidance", "25 Aug 2026"],
].map(([slug, title, category, date], index) => ({ slug, title, category, date, excerpt: "A practical clinical read from the PhysioNeeds Academy journal, written to turn evidence into better everyday decisions.", image: image(index % 2 ? "photo-1576091160550-2173dba999ef" : "photo-1576091160399-112ba8d25d1d"), accent: index % 2 ? "#F4E3C1" : "#DCE6F2" }));
const REFERENCE_COVERS: Record<string, string> = {
  "multiple-sclerosis-physiotherapy-managing-fatigue-balance-and-mobility": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b895d256a9a3660c755f/cover.jpg?v=1",
  "spinal-cord-injury-rehabilitation-principles-goal-setting-function": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b77919478349c5f0db59/cover.jpg?v=1",
  "dysfunctional-breathing-breathing-pattern-disorders-assessment-and-retraining": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b712ab03f658e816cb9d/cover.jpg?v=1",
  "exercise-prescription-for-type-2-diabetes-the-physiotherapist-s-role": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b6413e71fc8b1226d4da/cover.jpg?v=1",
  "pulmonary-rehabilitation-for-copd-post-viral-lung-conditions": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b57b4e316ea1d9f86b4f/cover.jpg?v=1",
  "cardiac-rehabilitation-the-physiotherapist-s-role-after-heart-attack-surgery": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b4f319478349c5f0d9c7/cover.jpg?v=1",
  "kinesiology-taping-beyond-sports-posture-swelling-everyday-pain": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b3fbd256a9a3660c7307/cover.jpg?v=1",
  "clinical-palpation-skills-the-foundation-of-accurate-assessme": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b2394e316ea1d9f86a13/cover.jpg?v=1",
  "myofascial-release-vs-cupping-vs-iastm-choosing-the-right-soft-tissue-too": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8b0d48ca146245bdd8c49/cover.jpg?v=1",
  "instrument-assisted-soft-tissue-mobilisation-iastm-evidence-tools-technique": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8afbbce4e9df87ef1fd0d/cover.jpg?v=1",
  "blood-flow-restriction-bfr-training-a-practical-rehab-guide-for-2026": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8ae1dff6c8809f5255b87/cover.jpg?v=1",
  "using-ai-tools-for-physiotherapy-notes-admin-patient-education-without-cutting-corners": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8ad38e20b3ce13527eae1/cover.jpg?v=1",
  "virtual-reality-vr-in-rehabilitation-clinical-uses-in-neuro-and-pain": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8ac4370f5852527e807f8/cover.jpg?v=1",
  "wearable-sensors-motion-capture-turning-movement-data-into-better-rehab": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8ab6ffed4c708b8bee9e8/cover.jpg?v=1",
  "robotic-rehabilitation-in-india-what-every-physiotherapist-should-know-in-2026": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac8a9d1ff6c8809f52559d9/cover.jpg?v=1",
  "postpartum-recovery-a-physiotherapy-roadmap-for-new-mothers": "https://d502jbuhuh9wk.cloudfront.net/articles/6ac3335664723924ed92c0d4/cover.jpg?v=1",
  "tele-rehabilitation-in-india-a-practical-guide-for-clinics-and-patients": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab7654138b01a93796b2410/cover.jpg?v=1",
  "running-injuries-explained-a-physiotherapy-guide-for-india-s-marathon-boom": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab75cacc46216f6b5311f52/cover.jpg?v=1",
  "physiotherapy-during-pregnancy-safe-exercises-for-every-trimester": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab6741c5070a0551bc75484/cover.jpg?v=1",
  "parkinson-s-disease-physiotherapy-exercise-based-management-strategies": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab661277859f7c7a534d749/cover.jpg?v=1",
  "glp-1-weight-loss-drugs-and-muscle-loss-the-physiotherapist-s-role-in-2026": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab6532cad10c189c25acc29/cover.jpg?v=2",
  "frozen-shoulder-adhesive-capsulitis-a-complete-recovery-guide": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab64f64cc3f32f679d90bc2/cover.jpg?v=1",
  "fall-prevention-in-the-elderly-a-physiotherapist-s-complete-guide": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab64808e179a63b2d15f8ea/cover.jpg?v=1",
  "corporate-wellness-programs-why-companies-are-hiring-in-house-physiotherapists": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab63df3996944540950e2e1/cover.jpg?v=1",
  "musculoskeletal-syndrome-of-menopause-what-physiotherapists-need-to-know": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab3ee56078d7cef87def12f/cover.jpg?v=1",
  "plantar-fasciitis-causes-diagnosis-and-physiotherapy-treatment": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab25a1bd8eb0d0dbb1ef660/cover.jpg?v=2",
  "desk-job-back-pain-an-ergonomics-guide-for-it-professiona": "https://d502jbuhuh9wk.cloudfront.net/articles/6ab1090057a24ab844f617f4/cover.jpg?v=1",
  "ai-in-physiotherapy-how-smart-assessment-tools-are-changing-practice": "https://d502jbuhuh9wk.cloudfront.net/articles/6aae8421161336e24787d24b/cover.jpg?v=1",
  "pelvic-floor-physiotherapy-what-every-physiotherapist-should-know": "https://d502jbuhuh9wk.cloudfront.net/articles/6aad239db3c70713a7ed686f/cover.jpg?v=1",
  "vestibular-rehabilitation-therapy-managing-vertigo-and-dizziness": "https://d502jbuhuh9wk.cloudfront.net/articles/6aabd05dbb9944a704925403/cover.jpg?v=1",
  "stroke-rehabilitation-in-2026-evidence-based-physiotherapy-protocols": "https://d502jbuhuh9wk.cloudfront.net/articles/6aa92f4a4ba723ff88b43bc2/cover.jpg?v=1",
  "top-10-sports-injuries-and-how-physiotherapists-manage-them": "https://d502jbuhuh9wk.cloudfront.net/articles/6aa7e0519aa48c23e7262ff4/cover.jpg?v=1",
  "tendinopathy-management-a-practical-guide-for-musculoskeletal-physiotherapists": "https://d502jbuhuh9wk.cloudfront.net/articles/6aa53dd14c40b470af5f22b4/cover.jpg?v=1",
  "taping-and-bracing-in-sports-when-to-use-them-and-how-they-help": "https://d502jbuhuh9wk.cloudfront.net/articles/6aa3f3429a3f227a4be706ba/cover.jpg?v=1",
  "sports-medicine-vs-sports-physiotherapy-understanding-the-difference": "https://d502jbuhuh9wk.cloudfront.net/articles/6aa295152579221ac15cc001/cover.jpg?v=1",
  "shoulder-pain-assessment-and-treatment-what-every-msk-physiotherapist-must-know": "https://d502jbuhuh9wk.cloudfront.net/articles/6aa1487c1803dfcb86efa66a/cover.jpg?v=1",
  "return-to-sport-after-injury-a-physiotherapist-s-complete-guide": "https://d502jbuhuh9wk.cloudfront.net/articles/6a9ffa5d7642cfed8eb19435/cover.jpg?v=1",
  "prehabilitation-before-orthopaedic-surgery-why-it-matters-and-how-to-do-it": "https://d502jbuhuh9wk.cloudfront.net/articles/6a9eaf96e23f1b7cf0fcdaeb/cover.jpg?v=1",
  "post-surgical-orthopaedic-rehabilitation-what-physiotherapists-must-know": "https://d502jbuhuh9wk.cloudfront.net/articles/6a9576dc3318ff22132fd328/cover.jpg?v=1",
  "overuse-injuries-in-athletes-prevention-and-management-strategies": "https://d502jbuhuh9wk.cloudfront.net/articles/6a92c7d1a063e4bbda7a5063/cover.jpg?v=1",
  "online-vs-offline-physiotherapy-courses-which-one-is-better-for-working-physiotherapists": "https://d502jbuhuh9wk.cloudfront.net/articles/6a898d8741fe3e2b1cff3c5f/cover.jpg?v=1",
  "on-field-emergency-management-for-sports-physiotherapists-what-you-must-know": "https://d502jbuhuh9wk.cloudfront.net/articles/6a8826f3b08bc66d6958c03f/cover.jpg?v=1",
  "lumbar-spine-manual-therapy-clinical-techniques-for-physiotherapists": "https://d502jbuhuh9wk.cloudfront.net/articles/6a86d957e1787876e1f9923a/cover.jpg?v=1",
  "lower-back-pain-evidence-based-physiotherapy-management-in-2026": "https://d502jbuhuh9wk.cloudfront.net/articles/6a858bb6a04757b13d19e2e2/cover.jpg?v=1",
  "knee-pain-in-patients-a-musculoskeletal-physiotherapist-s-assessment-guide": "https://d502jbuhuh9wk.cloudfront.net/articles/6a8454824e27211d5ce04dc5/cover.jpg?v=1",
  "joint-mobilisation-vs-manipulation-what-physiotherapists-need-to-know": "https://d502jbuhuh9wk.cloudfront.net/articles/6a82f7eaee627ad1f992af9d/cover.jpg?v=1",
  "how-to-build-a-successful-msk-physiotherapy-private-practice-in-india": "https://d502jbuhuh9wk.cloudfront.net/articles/6a7dbb4bc767ac4741c183ac/cover.jpg?v=1",
  "how-to-become-a-sports-physiotherapist-in-india-a-step-by-step-guide": "https://d502jbuhuh9wk.cloudfront.net/articles/6a7c5369c77fc36ec05f3bb4/cover.jpg?v=3",
  "hip-replacement-rehabilitation-phases-precautions-and-return-to-activity": "https://d502jbuhuh9wk.cloudfront.net/articles/6a7b0c5e6aaa73b5a15d3a6e/cover.jpg?v=1",
  "fracture-rehabilitation-how-physiotherapists-speed-up-recovery": "https://d502jbuhuh9wk.cloudfront.net/articles/6a79c06747cbb650f9decf0e/cover.jpg?v=1",
  "fellowship-in-musculoskeletal-physiotherapy-is-it-worth-it-for-your-career": "https://d502jbuhuh9wk.cloudfront.net/articles/6a7715d5337b3bededecbe2f/cover.jpg?v=1",
  "dry-needling-vs-manual-therapy-which-is-better-for-musculoskeletal-pain": "https://d502jbuhuh9wk.cloudfront.net/articles/6a75c7664be8e691a7b4d596/cover.jpg?v=1",
  "concussion-in-sports-a-physiotherapist-s-guide-to-assessment-and-return-to-play": "https://d502jbuhuh9wk.cloudfront.net/articles/6a747931e383056f305f4168/cover.jpg?v=1",
  "cervical-spine-assessment-and-manual-therapy-a-physiotherapist-s-guide": "https://d502jbuhuh9wk.cloudfront.net/articles/6a71deec551754c431dab58b/cover.jpg?v=1",
  "career-opportunities-for-orthopaedic-physiotherapists-in-india-s-growing-healthcare-sector": "https://d502jbuhuh9wk.cloudfront.net/articles/6a70802860b006dd6fa222f3/cover.jpg?v=2",
  "acl-rehabilitation-protocols-what-sports-physiotherapists-need-to-know": "https://d502jbuhuh9wk.cloudfront.net/articles/6a6ddee02ce6681794130094/cover.jpg?v=1",
  "5-fellowship-courses-at-physioneeds-academy-that-can-transform-your-physio-career": "https://d502jbuhuh9wk.cloudfront.net/articles/6a6c8cc77db2f517deba062e/cover.jpg?v=1",
  "why-every-physiotherapist-should-consider-a-fellowship-in-sports-physiotherapy": "https://d502jbuhuh9wk.cloudfront.net/articles/6a6b141801ddca694a028f89/cover.jpg?v=1",
  "sports-physiotherapy-vs-general-physiotherapy-key-differences-explained": "https://d502jbuhuh9wk.cloudfront.net/articles/6a672d4faac1e7ad86a21a4e/cover.jpg?v=1",
  "why-physiotherapists-are-choosing-physioneeds-academy-for-sports-physiotherapy-education": "https://d502jbuhuh9wk.cloudfront.net/articles/6a114e7f8f8c63591931e14f/cover.jpg?v=1",
};
const allArticles = [...articles, ...moreArticles.map((article) => ({ ...article, image: REFERENCE_COVERS[article.slug] || article.image }))];
const categories = ["All stories", "3D Release", "ACL Rehabilitation", "AI in Healthcare", "Active Release Therapy", "Adhesive Capsulitis", "Antenatal Care", "Aromatherapy Certification", "Athlete Rehabilitation", "Athletic Care", "Athletic Training", "BPT Career Guide", "Back Pain Management", "Balance Disorders", "Balance Rehabilitation", "Bone and Joint Health", "CPD Certification", "CPD for Physiotherapists", "Cancer Care", "Cardiac Rehabilitation", "Cardiopulmonary Physiotherapy", "Career Development", "Career Guidance", "Clinic Practice", "Clinic Setup", "Clinical Assessment", "Clinical Innovation", "Clinical Physiotherapy Skills", "Clinical Reasoning", "Concussion Management", "Continuing Education", "Corporate Physiotherapy", "Corporate Wellness", "Cupping therapy", "Digital Rehabilitation", "Dizziness Management", "Dry Needling", "Elderly Care", "Emergency Management", "Ergonomics", "Essential Oil Therapy", "Evidence-Based Physiotherapy", "Evidence-Based Practice", "Exercise Prescription", "Exercise and Obesity", "Facial Rehabilitation", "Fall Prevention", "Fellowship Courses", "Foot and Ankle Care", "Fracture Rehabilitation", "GLP-1 Rehabilitation", "Geriatric Physiotherapy", "Healthcare Jobs"];
const REFERENCE_CATEGORY_COUNTS: Record<string, number> = { "3D Release": 1, "ACL Rehabilitation": 1, "AI in Healthcare": 3, "Active Release Therapy": 1, "Adhesive Capsulitis": 1, "Antenatal Care": 1, "Aromatherapy Certification": 1, "Athlete Rehabilitation": 3, "Athletic Care": 1, "Athletic Training": 1, "BPT Career Guide": 1, "Back Pain Management": 1, "Balance Disorders": 1, "Balance Rehabilitation": 1, "Bone and Joint Health": 1, "CPD Certification": 1, "CPD for Physiotherapists": 1, "Cardiac Rehabilitation": 1, "Cardiopulmonary Physiotherapy": 3, "Career Development": 1, "Career Guidance": 3, "Clinic Practice": 2, "Clinic Setup": 1, "Clinical Assessment": 1, "Clinical Innovation": 1, "Clinical Physiotherapy Skills": 1, "Clinical Reasoning": 1, "Concussion Management": 2, "Continuing Education": 3, "Corporate Physiotherapy": 1, "Corporate Wellness": 1, "Cupping therapy": 2, "Digital Rehabilitation": 1, "Dizziness Management": 1, "Dry Needling": 19, "Elderly Care": 1, "Emergency Management": 1, "Ergonomics": 2, "Essential Oil Therapy": 1, "Evidence-Based Physiotherapy": 2, "Evidence-Based Practice": 1, "Exercise Prescription": 1, "Exercise and Obesity": 1, "Fall Prevention": 1, "Fellowship Courses": 2, "Foot and Ankle Care": 1, "Fracture Rehabilitation": 1, "GLP-1 Rehabilitation": 1, "Geriatric Physiotherapy": 1, "Healthcare Jobs": 1 };
const CATEGORY_ARTICLES: Record<string, string[]> = {
  // The source blog assigns these three stories to AI in Healthcare.
  "AI in Healthcare": [
    "instrument-assisted-soft-tissue-mobilisation-iastm-evidence-tools-technique",
    "wearable-sensors-motion-capture-turning-movement-data-into-better-rehab",
    "ai-in-physiotherapy-how-smart-assessment-tools-are-changing-practice",
  ],
};
const CATEGORY_FALLBACKS: Record<string, string> = {
  "3D Release": "myofascial-release-vs-cupping-vs-iastm-choosing-the-right-soft-tissue-too", "Active Release Therapy": "myofascial-release-vs-cupping-vs-iastm-choosing-the-right-soft-tissue-too", "Adhesive Capsulitis": "frozen-shoulder-adhesive-capsulitis-a-complete-recovery-guide", "Aromatherapy Certification": "clinical-palpation-skills-the-foundation-of-accurate-assessme", "Athlete Rehabilitation": "top-10-sports-injuries-and-how-physiotherapists-manage-them", "Athletic Care": "top-10-sports-injuries-and-how-physiotherapists-manage-them", "Athletic Training": "return-to-sport-after-injury-a-physiotherapist-s-complete-guide", "BPT Career Guide": "how-to-become-a-sports-physiotherapist-in-india-a-step-by-step-guide", "Back Pain Management": "lower-back-pain-evidence-based-physiotherapy-management-in-2026", "Balance Disorders": "vestibular-rehabilitation-therapy-managing-vertigo-and-dizziness", "Balance Rehabilitation": "vestibular-rehabilitation-therapy-managing-vertigo-and-dizziness", "Bone and Joint Health": "fracture-rehabilitation-how-physiotherapists-speed-up-recovery", "CPD Certification": "online-vs-offline-physiotherapy-courses-which-one-is-better-for-working-physiotherapists", "CPD for Physiotherapists": "online-vs-offline-physiotherapy-courses-which-one-is-better-for-working-physiotherapists", "Career Development": "career-opportunities-for-orthopaedic-physiotherapists-in-india-s-growing-healthcare-sector", "Clinic Practice": "how-to-build-a-successful-msk-physiotherapy-private-practice-in-india", "Clinic Setup": "how-to-build-a-successful-msk-physiotherapy-private-practice-in-india", "Clinical Assessment": "clinical-palpation-skills-the-foundation-of-accurate-assessme", "Clinical Physiotherapy Skills": "clinical-palpation-skills-the-foundation-of-accurate-assessme", "Concussion Management": "concussion-in-sports-a-physiotherapist-s-guide-to-assessment-and-return-to-play", "Continuing Education": "online-vs-offline-physiotherapy-courses-which-one-is-better-for-working-physiotherapists", "Corporate Physiotherapy": "corporate-wellness-programs-why-companies-are-hiring-in-house-physiotherapists", "Cupping therapy": "myofascial-release-vs-cupping-vs-iastm-choosing-the-right-soft-tissue-too", "Digital Rehabilitation": "tele-rehabilitation-in-india-a-practical-guide-for-clinics-and-patients", "Dizziness Management": "vestibular-rehabilitation-therapy-managing-vertigo-and-dizziness", "Elderly Care": "fall-prevention-in-the-elderly-a-physiotherapist-s-complete-guide", "Emergency Management": "on-field-emergency-management-for-sports-physiotherapists-what-you-must-know", "Ergonomics": "desk-job-back-pain-an-ergonomics-guide-for-it-professiona", "Essential Oil Therapy": "myofascial-release-vs-cupping-vs-iastm-choosing-the-right-soft-tissue-too", "Evidence-Based Physiotherapy": "lower-back-pain-evidence-based-physiotherapy-management-in-2026", "Evidence-Based Practice": "lower-back-pain-evidence-based-physiotherapy-management-in-2026", "Exercise and Obesity": "glp-1-weight-loss-drugs-and-muscle-loss-the-physiotherapist-s-role-in-2026", "Fall Prevention": "fall-prevention-in-the-elderly-a-physiotherapist-s-complete-guide", "Foot and Ankle Care": "plantar-fasciitis-causes-diagnosis-and-physiotherapy-treatment", "Fracture Rehabilitation": "fracture-rehabilitation-how-physiotherapists-speed-up-recovery", "GLP-1 Rehabilitation": "glp-1-weight-loss-drugs-and-muscle-loss-the-physiotherapist-s-role-in-2026", "Geriatric Physiotherapy": "fall-prevention-in-the-elderly-a-physiotherapist-s-complete-guide", "Healthcare Jobs": "career-opportunities-for-orthopaedic-physiotherapists-in-india-s-growing-healthcare-sector"
};
const EXTRA_CATEGORY_FALLBACKS: Record<string, string> = { "Cardiac Rehabilitation": "cardiac-rehabilitation-the-physiotherapist-s-role-after-heart-attack-surgery", "Cardiopulmonary Physiotherapy": "pulmonary-rehabilitation-for-copd-post-viral-lung-conditions" };
function matchesCategory(article: Article, category: string) { return article.category === category || CATEGORY_ARTICLES[category]?.includes(article.slug) || CATEGORY_FALLBACKS[category] === article.slug || EXTRA_CATEGORY_FALLBACKS[category] === article.slug; }

export default function BlogHub() {
  const [active, setActive] = useState("All stories");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const root = useRef<HTMLDivElement>(null);
  const filtered = allArticles.filter((article) => (active === "All stories" || matchesCategory(article, active)) && `${article.title} ${article.category} ${article.excerpt}`.toLowerCase().includes(query.toLowerCase()));
  const totalPages = Math.max(1, Math.ceil(filtered.length / 6));
  const shown = filtered.slice((page - 1) * 6, page * 6);
  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".blog-hero > *", { y: 20, opacity: 0, duration: .7, stagger: .08, ease: "power3.out" });
      gsap.from(".blog-card", { y: 24, opacity: 0, duration: .55, stagger: .06, delay: .15, ease: "power2.out" });
    }, root);
    return () => ctx.revert();
  }, []);
  useEffect(() => { setPage(1); }, [active, query]);
  return <div className="blog-page" ref={root}>
    <section className="blog-hero"><div className="blog-hero-rule" /><div className="w"><span className="ey">The PhysioNeeds journal</span><h1>Better thinking.<br /><em>Better practice.</em></h1><p>Clinical ideas, practical reasoning and fresh perspective for physiotherapists who want their next patient to feel the difference.</p></div></section>
    <div className="blog-layout w" id="stories">
      <aside className="blog-sidebar"><div className="blog-sidebar-head"><span className="ey">Browse the journal</span><h2>Find your focus.</h2></div><label className="blog-search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search stories" aria-label="Search stories" /></label><nav className="blog-cats" aria-label="Blog categories">{categories.map((category) => <button className={active === category ? "active" : ""} key={category} onClick={() => setActive(category)}>{category}<span>{category === "All stories" ? allArticles.length : allArticles.filter((article) => matchesCategory(article, category)).length}</span></button>)}</nav><div className="blog-sidebar-note"><b>For the working clinician</b><p>Short, useful reads for the gaps between patients, not another textbook to finish.</p></div></aside>
      <section className="blog-feed"><div className="blog-feed-head"><div><span className="ey">Latest thinking</span><h2>{active === "All stories" ? "The latest from the clinic." : active}</h2></div><span className="blog-count">{filtered.length} {filtered.length === 1 ? "story" : "stories"}</span></div>{shown.length ? <><div className="blog-grid">{shown.map((article, index) => <ArticleCard article={article} index={index} key={article.slug} />)}</div><Pagination page={page} totalPages={totalPages} setPage={setPage} /></> : <div className="blog-empty">No stories found. Try another search or <button onClick={() => { setQuery(""); setActive("All stories"); }}>browse all stories</button>.</div>}</section>
    </div>
    <section className="blog-bottom w"><div><span className="ey">Keep learning</span><h2>When the reading sparks a question, take it into the classroom.</h2></div><a className="btn" href="/courses">Explore courses <span aria-hidden="true">↗</span></a></section>
  </div>;
}

function Pagination({ page, totalPages, setPage }: { page: number; totalPages: number; setPage: (page: number) => void }) {
  return <nav className="blog-pagination" aria-label="Blog pagination"><button disabled={page === 1} onClick={() => setPage(page - 1)}>← Previous</button><div>{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button key={number} className={page === number ? "active" : ""} onClick={() => setPage(number)} aria-label={`Page ${number}`}>{number}</button>)}</div><button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next →</button></nav>;
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return <a className="blog-card" href={`https://www.e-physioneeds.com/blog/${article.slug}`} target="_blank" rel="noopener noreferrer" style={{ ["--card-accent" as string]: article.accent, ["--card-index" as string]: index }}><div className="blog-card-image"><Image src={article.image} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 42vw, 320px" /><span>{article.category}</span></div><div className="blog-card-body"><div className="blog-card-date">{article.date} <i>·</i> 5 min read</div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="blog-read">Read story <b>↗</b></span></div></a>;
}
