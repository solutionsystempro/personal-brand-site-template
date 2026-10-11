/**
 * ============================================================
 *  SITE CONTENT
 * ============================================================
 *  This is the only file you need to edit to make the site yours.
 *
 *  - Every headline, paragraph, link, stat, offer, FAQ and SEO tag
 *    on the site lives below.
 *  - Text in [square brackets] is placeholder. Replace it.
 *  - Images live in /public. Swap the files, keep the paths
 *    (or change the paths here).
 *  - Colours live in tailwind.config.js, not here.
 *
 *  Tip: search this file for "[" to find every placeholder left.
 * ============================================================
 */

import type { LucideIcon } from "lucide-react";
import {
  Clock3,
  Compass,
  Layers,
  Linkedin,
  Mail,
  MessagesSquare,
  Youtube,
  Instagram,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------
 * Shared types (you can ignore these unless you add new fields)
 * ---------------------------------------------------------- */
export type Cta = { label: string; href: string };
export type Seo = { title: string; description: string };

/* ------------------------------------------------------------
 * 1. SITE BASICS
 * ---------------------------------------------------------- */
export const site = {
  /** Your name or brand name. Shown in the header and footer. */
  name: "Your Name",
  /** Short descriptor shown next to your name in the footer. */
  tagline: "Consultant for [who]",
  /** Your live URL once deployed. Used for canonical/OG tags. No trailing slash. */
  url: "https://www.yourdomain.com",
  /** Where people can reach you. */
  email: "hello@yourdomain.com",
  /** Booking link (Calendly, Cal.com, SavvyCal, etc). */
  bookingUrl: "https://cal.com/your-handle",
  /** Social preview image in /public. 1200x630 PNG recommended. */
  ogImage: "/og-image.svg",
};

/* ------------------------------------------------------------
 * 2. SEO: one title + description per page
 * ---------------------------------------------------------- */
export const seo: Record<"home" | "about" | "contact" | "notFound", Seo> = {
  home: {
    title: "Your Name | Helping [who] get [result]",
    description:
      "Your Name helps [who] get [result] without [pain]. Programs, coaching and free resources.",
  },
  about: {
    title: "About | Your Name",
    description: "The story behind Your Name, how I work, and what I believe about [your topic].",
  },
  contact: {
    title: "Contact | Your Name",
    description: "Get in touch with Your Name. Book a call or send a message.",
  },
  notFound: {
    title: "Page not found | Your Name",
    description: "This page does not exist.",
  },
};

/* ------------------------------------------------------------
 * 3. NAVIGATION
 *    Links starting with "/#" scroll to a section on the home page.
 * ---------------------------------------------------------- */
export const nav: { links: Cta[]; cta: Cta } = {
  links: [
    { label: "Offers", href: "/#offers" },
    { label: "Results", href: "/#proof" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book a call", href: "/contact" },
};

/* ------------------------------------------------------------
 * 4. HOME: HERO
 * ---------------------------------------------------------- */
export const hero = {
  /** Small label above the headline. Set to "" to hide. */
  eyebrow: "For [who you serve]",
  /** Headline. The part in `highlight` gets the blue underline treatment. */
  headline: "Helping [who] get [result]",
  highlight: "without [pain].",
  subhead:
    "I work with [type of client] who are stuck on [problem]. Together we build [outcome] in [timeframe], using a simple process you can keep running on your own.",
  primaryCta: { label: "Book a free call", href: "/contact" },
  secondaryCta: { label: "See the offers", href: "/#offers" },
  /** Headshot in /public. Set to "" to hide the image column. */
  image: "/headshot.svg",
  imageAlt: "Portrait of Your Name",
  /** Small proof chips that float around the headshot. Keep them short. */
  chips: [
    { value: "[120+]", label: "clients helped" },
    { value: "[8 yrs]", label: "in the field" },
  ],
  /** One-line reassurance under the buttons. */
  note: "Free 20 minute call. No pitch unless you ask for one.",
};

/* ------------------------------------------------------------
 * 5. HOME: PROBLEM (three pain points)
 * ---------------------------------------------------------- */
export const problem: {
  eyebrow: string;
  title: string;
  intro: string;
  points: { icon: LucideIcon; title: string; body: string }[];
} = {
  eyebrow: "Sound familiar?",
  title: "You are doing the work. It is just not adding up.",
  intro: "Most [who] I meet are not short on effort. They are short on a clear system.",
  points: [
    {
      icon: Clock3,
      title: "[Pain point one]",
      body: "Describe the first frustration in your client's own words. Example: you spend hours on [task] and still do not see [result].",
    },
    {
      icon: Layers,
      title: "[Pain point two]",
      body: "Describe the second frustration. Example: you have tried [common fix] and [other fix], and both left you with more to manage.",
    },
    {
      icon: Compass,
      title: "[Pain point three]",
      body: "Describe the third frustration. Example: you are not sure what to focus on next, so everything feels urgent.",
    },
  ],
};

/* ------------------------------------------------------------
 * 6. HOME: ORIGIN STORY
 * ---------------------------------------------------------- */
export const story = {
  eyebrow: "Why I do this",
  title: "I was in your shoes in [year].",
  /** Each string is one paragraph. Keep it to 2 to 4 short ones. */
  paragraphs: [
    "Write a short, honest version of how you got here. Where were you stuck? What did it cost you? Placeholder: I spent [time] trying to [goal] the hard way.",
    "Then the turning point. What did you figure out that others miss? Placeholder: everything changed when I stopped [old approach] and started [new approach].",
    "Close with why you help others now. Placeholder: today I help [who] skip the years I wasted, using the same [method] that worked for me.",
  ],
  image: "/story.svg",
  imageAlt: "Your Name at work",
  /** Optional caption under the image. Set to "" to hide. */
  caption: "[Place, year]. Swap this image in /public/story.svg.",
  cta: { label: "Read the full story", href: "/about" },
};

/* ------------------------------------------------------------
 * 7. HOME: PROOF (stats + example testimonials)
 *    IMPORTANT: replace these with real results and real,
 *    permission-given testimonials before you launch.
 * ---------------------------------------------------------- */
export const proof = {
  eyebrow: "Results",
  title: "Proof, not promises.",
  intro: "Replace every number and quote below with your own real results.",
  stats: [
    { value: "[120+]", label: "Clients served", detail: "since [year]" },
    { value: "[4.9/5]", label: "Average rating", detail: "from [number] reviews" },
    { value: "[3x]", label: "Typical [metric] lift", detail: "in the first [timeframe]" },
    { value: "[90]", label: "Day guarantee", detail: "or [your promise]" },
  ],
  /** Shown on every card so nobody mistakes these for real quotes. */
  exampleLabel: "Example testimonial",
  testimonials: [
    {
      quote:
        "Placeholder quote. Write what a client said about the result they got, in their words. Specific numbers beat adjectives.",
      name: "Client Name",
      role: "[Role], [Company type]",
      result: "[Result in 3 words]",
    },
    {
      quote:
        "Placeholder quote. Talk about what it felt like before, and what changed after working together. One or two sentences is plenty.",
      name: "Client Name",
      role: "[Role], [Industry]",
      result: "[Result in 3 words]",
    },
    {
      quote:
        "Placeholder quote. Address a common doubt here, for example: I was skeptical about [concern], but [what happened].",
      name: "Client Name",
      role: "[Role], [City]",
      result: "[Result in 3 words]",
    },
  ],
};

/* ------------------------------------------------------------
 * 8. HOME: OFFERS (three cards)
 *    `price` can be a number-ish string ("$497") or "" to show
 *    only the button. Set `featured: true` on one card.
 * ---------------------------------------------------------- */
export const offers = {
  eyebrow: "Ways to work together",
  title: "Pick the level of help that fits.",
  intro: "Start small or go all in. Every option comes with [your promise].",
  items: [
    {
      name: "[Starter offer]",
      description: "A self-paced option for people who want the method and will do the work on their own.",
      price: "$[49]",
      priceNote: "one time",
      features: ["[Feature one]", "[Feature two]", "[Feature three]"],
      cta: { label: "Get started", href: "/contact" },
      featured: false,
    },
    {
      name: "[Core program]",
      description: "Your main offer. A guided program where we build [outcome] together over [timeframe].",
      price: "$[997]",
      priceNote: "or [3] payments",
      features: ["Everything in [Starter]", "[Weekly group calls]", "[Templates and reviews]", "[Private community]"],
      cta: { label: "Apply now", href: "/contact" },
      featured: true,
    },
    {
      name: "[1:1 Advisory]",
      description: "Hands-on, private work for [who] who want it done fast and done right.",
      price: "",
      priceNote: "By application",
      features: ["[Private strategy sessions]", "[Direct message access]", "[Done-with-you build]"],
      cta: { label: "Book a call", href: "/contact" },
      featured: false,
    },
  ],
  featuredLabel: "Most popular",
};

/* ------------------------------------------------------------
 * 9. HOME: LEAD MAGNET (free guide + email capture)
 *
 *    No backend needed. The form does a normal POST to `formAction`.
 *    - Formspree:   https://formspree.io/f/your-form-id
 *    - ConvertKit:  https://app.convertkit.com/forms/your-form-id/subscriptions
 *    - Any provider that accepts a form POST works.
 *    Leave it as "" and the form shows a friendly "not connected yet" message.
 * ---------------------------------------------------------- */
export const leadMagnet = {
  eyebrow: "Free guide",
  title: "[The 5-step guide to getting result]",
  body: "A short, practical guide that shows [who] how to [quick win] this week. No fluff, no upsell inside.",
  bullets: ["[What they will learn one]", "[What they will learn two]", "[What they will learn three]"],
  formAction: "",
  /** The name of the email input. Formspree uses "email", ConvertKit uses "email_address". */
  emailFieldName: "email",
  placeholder: "you@example.com",
  button: "Send me the guide",
  privacyNote: "One email with the guide, then the occasional useful note. Unsubscribe anytime.",
  notConnectedMessage:
    "This form is not connected yet. Add your form provider URL to leadMagnet.formAction in src/content.ts.",
  /** Cover image in /public. */
  image: "/guide.svg",
  imageAlt: "Cover of the free guide",
};

/* ------------------------------------------------------------
 * 10. HOME: WHO IT IS FOR / NOT FOR
 * ---------------------------------------------------------- */
export const fit = {
  eyebrow: "Is this for you?",
  title: "Honest about who I can help.",
  forTitle: "A great fit if you",
  forItems: [
    "[Are a who at a specific stage]",
    "[Already have some traction or resource]",
    "[Want a clear plan, not more information]",
    "[Can commit a few hours a week]",
  ],
  notForTitle: "Probably not a fit if you",
  notForItems: [
    "[Want overnight results with no effort]",
    "[Are just exploring and not ready to act]",
    "[Need a done-for-you agency]",
    "[Are looking for the cheapest option]",
  ],
};

/* ------------------------------------------------------------
 * 11. HOME: COMMUNITY + SOCIAL LINKS
 *     These links are also used in the footer.
 * ---------------------------------------------------------- */
export const community: {
  eyebrow: string;
  title: string;
  body: string;
  links: { icon: LucideIcon; label: string; handle: string; href: string }[];
} = {
  eyebrow: "Community",
  title: "Learn alongside people like you.",
  body: "Free content every week and a community of [who] working on the same goals. Pick the place you already hang out.",
  links: [
    { icon: Users, label: "Community", handle: "[Join the free group]", href: "https://example.com/community" },
    { icon: Youtube, label: "YouTube", handle: "@[yourhandle]", href: "https://youtube.com/@yourhandle" },
    { icon: Linkedin, label: "LinkedIn", handle: "in/[yourname]", href: "https://linkedin.com/in/yourname" },
    { icon: Instagram, label: "Instagram", handle: "@[yourhandle]", href: "https://instagram.com/yourhandle" },
  ],
};

/* ------------------------------------------------------------
 * 12. HOME: FAQ
 * ---------------------------------------------------------- */
export const faq = {
  eyebrow: "FAQ",
  title: "Questions people ask before working with me.",
  items: [
    {
      q: "Who is this for?",
      a: "Placeholder answer. Describe your ideal client in one or two sentences, including their stage and their main goal.",
    },
    {
      q: "How long until I see results?",
      a: "Placeholder answer. Be specific and honest. Example: most clients see [first win] within [timeframe], and [bigger result] within [longer timeframe].",
    },
    {
      q: "What if it does not work for me?",
      a: "Placeholder answer. Explain your guarantee or refund policy in plain language.",
    },
    {
      q: "How much time do I need each week?",
      a: "Placeholder answer. Example: plan for [hours] hours a week, including one [call type] call.",
    },
    {
      q: "Do you offer payment plans?",
      a: "Placeholder answer. Example: yes, [program] can be paid in [number] monthly payments.",
    },
  ],
};

/* ------------------------------------------------------------
 * 13. HOME: FINAL CTA (the one gradient band on the site)
 * ---------------------------------------------------------- */
export const finalCta = {
  title: "Ready to get [result]?",
  body: "Book a free call. We will map out where you are, where you want to be, and the fastest way to close the gap.",
  primary: { label: "Book a free call", href: "/contact" },
  secondary: { label: "Get the free guide", href: "/#guide" },
};

/* ------------------------------------------------------------
 * 14. ABOUT PAGE
 * ---------------------------------------------------------- */
export const about = {
  eyebrow: "About",
  title: "Hi, I am Your Name.",
  lead: "I help [who] get [result]. Here is how I got here and how I work.",
  image: "/headshot.svg",
  imageAlt: "Portrait of Your Name",
  sections: [
    {
      heading: "The short version",
      paragraphs: [
        "Placeholder. Two or three sentences on your background. What did you do before this, and what are you known for now?",
      ],
    },
    {
      heading: "The longer story",
      paragraphs: [
        "Placeholder. Expand on the origin story from the home page. Include a specific moment, a specific number, or a specific mistake. Specifics build trust.",
        "Placeholder. What did you learn, and how did it shape the way you help people today?",
      ],
    },
    {
      heading: "How I work",
      paragraphs: [
        "Placeholder. Describe your process in plain words. Example: every engagement starts with a [diagnostic], then we [build], then we [review and refine].",
      ],
    },
  ],
  values: [
    { title: "[Value one]", body: "One sentence on what this means in practice." },
    { title: "[Value two]", body: "One sentence on what this means in practice." },
    { title: "[Value three]", body: "One sentence on what this means in practice." },
  ],
  /** Short credibility list: past roles, certifications, features. */
  credentials: ["[Former role at Company type]", "[Certification or training]", "[Featured in Publication]"],
  cta: { label: "Work with me", href: "/contact" },
};

/* ------------------------------------------------------------
 * 15. CONTACT PAGE
 *     Same idea as the lead magnet: set `formAction` to your
 *     Formspree (or similar) endpoint. Leave "" to show a notice.
 * ---------------------------------------------------------- */
export const contact = {
  eyebrow: "Contact",
  title: "Let us talk.",
  lead: "The fastest way to start is a free 20 minute call. Prefer writing? Send a message and I will reply within [2 business days].",
  options: [
    {
      icon: MessagesSquare,
      title: "Book a call",
      body: "Pick a time that works for you.",
      cta: { label: "Open calendar", href: site.bookingUrl },
    },
    {
      icon: Mail,
      title: "Email",
      body: site.email,
      cta: { label: "Send an email", href: `mailto:${site.email}` },
    },
  ],
  formTitle: "Send a message",
  formAction: "",
  submitLabel: "Send message",
  notConnectedMessage:
    "This form is not connected yet. Add your form provider URL to contact.formAction in src/content.ts.",
};

/* ------------------------------------------------------------
 * 16. FOOTER
 * ---------------------------------------------------------- */
export const footer = {
  blurb: "Helping [who] get [result] without [pain].",
  columns: [
    {
      title: "Site",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Work with me",
      links: [
        { label: "Offers", href: "/#offers" },
        { label: "Free guide", href: "/#guide" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
  ],
  /** Shown at the very bottom. The year updates automatically. */
  legal: "All rights reserved.",
};

/* ------------------------------------------------------------
 * 17. 404 PAGE
 * ---------------------------------------------------------- */
export const notFound = {
  title: "This page wandered off.",
  body: "The link may be old, or the page may have moved. Try one of these instead.",
  primary: { label: "Back to home", href: "/" },
  secondary: { label: "Contact", href: "/contact" },
};
