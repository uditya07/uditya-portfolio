/* =====================================================================
   SITE-DATA.JS  –  the ONLY file you need to edit to update your site.
   ---------------------------------------------------------------------
   • Anything marked (placeholder) is NOT real. Replace it with your own.
   • Videos: paste a YouTube, Vimeo or direct .mp4/.webm link into "video".
     Host big files outside GitHub (YouTube, Vimeo, Cloudflare R2, Bunny...).
   • Thumbnails: paste an image link into "thumb". YouTube links get an
     automatic thumbnail if you leave "thumb" empty.
   • To add a project: copy one { ... } block in "projects", paste it below
     the last one (keep the comma between blocks) and change the text.
   • "category" must match one of the names in "categories" exactly.
   ===================================================================== */
window.SITE = {
  name: "Uditya Pratim Das",
  role: "Video Editor",
  intro: "Professional video editor shaping raw footage into clear, gripping visual stories through precise cuts, rhythm, colour and sound. Commercials, reels, cinematic edits, talking-head videos and wedding films.",

  contact: {
    phone: { display: "+91 60024 92649", href: "+916002492649" },   // (placeholder) href: digits with country code, no spaces
    whatsapp: { display: "+91 80116 64235", number: "918011664235" },   // (placeholder) number: digits with country code, no + or spaces
    email: "udityapratimdas@gmail.com",                                      // (placeholder)
    instagram: { handle: "@b2k.editzzz", url: "https://www.instagram.com/b2k.editzzz?cnvx=MWY5MmIxamk1NXJqbA==" }, // (placeholder)
    ctaText: "Let’s Work Together",
    ctaSubject: "Project enquiry from your portfolio"
  },

  about: {
    intro: "I'm Uditya, a  video editor. I work on different types of videos, from reels and commercial content to cinematic edits. My goal is simple : add a hook, maintain a storyline with appropriate pacing.&#x20;
",
    experience: "I've been editing videos for around 4 years, working with different types of content, including reels, promotional videos, cinematic edits and more.&#x20;

Currently I am working with Uniqway and Fomora ( Social Media Marketing Agencies )",
    approach: "(placeholder) Your editing approach: how you plan the story, pacing, colour and sound.",
    software: ["Davinci Resolve and Capcut", "(placeholder) Your colour tool", "(placeholder) Your audio tool", "(placeholder) Your motion graphics tool"]
  },

  services: ["Video editing", "Colour grading", "Sound design", "Short-form reels"],  // edit to match what you offer

  showreel: {
    title: "Showreel",
    description: "(placeholder) A short cut of my best work.",
    video: "https://youtube.com/shorts/2VkQEvqQFeg?feature=share",       // paste your showreel link here
    thumb: "https://drive.google.com/file/d/1n2Gt0uj1IkyZAF4_gHQwjDZplqVy43Zv/view?usp=sharing",       // optional image link
    duration: "0:48"     // e.g. "1:00"
  },

  categories: ["Commercials", "Reels", "Cinematic Edits", "Talking Head Videos", "Wedding Films"],

  projects: [
    { title: "Commercial project title (placeholder)", category: "Commercials",
      description: "(placeholder) Describe the project in one or two sentences: the goal, the story and what you edited.",
      role: "(placeholder) e.g. Editor, Colourist", video: "", thumb: "", duration: "" },
    { title: "Reel project title (placeholder)", category: "Reels",
      description: "(placeholder) Describe the project in one or two sentences.",
      role: "(placeholder) e.g. Editor, Motion titles", video: "", thumb: "", duration: "" },
    { title: "Cinematic edit title (placeholder)", category: "Cinematic Edits",
      description: "(placeholder) Describe the project in one or two sentences.",
      role: "(placeholder) e.g. Editor, Colour grade", video: "", thumb: "", duration: "" },
    { title: "Talking head project title (placeholder)", category: "Talking Head Videos",
      description: "(placeholder) Describe the project in one or two sentences.",
      role: "(placeholder) e.g. Editor, Sound clean-up", video: "", thumb: "", duration: "" },
    { title: "Wedding film title (placeholder)", category: "Wedding Films",
      description: "(placeholder) Describe the film in one or two sentences.",
      role: "(placeholder) e.g. Editor, Storyteller", video: "", thumb: "", duration: "" }
  ],

  /* The six clips on the homepage timeline. Keep six entries, in this order. */
  timeline: [
    { label: "about", title: "About me", text: "Video editor who turns raw footage into clear, gripping stories.", chips: ["Storytelling", "Pacing", "Clean cuts"] },
    { label: "showreel", title: "Showreel", text: "Watch a quick cut of my best work.", chips: ["Best of"], action: "showreel" },
    { label: "services", title: "What I edit", text: "Commercials, reels, cinematic edits, talking-head videos and wedding films.", chips: ["Colour grading", "Sound design", "Motion titles"] },
    { label: "process", title: "How we work", text: "Brief, rough cut, feedback, then final delivery in the format you need.", chips: ["Brief", "Rough cut", "Feedback", "Delivery"] },
    { label: "tools", title: "Tools", text: "(placeholder) List the software you edit with.", chips: ["Your editing app", "Your colour tool"] },
    { label: "hello", title: "Work with me", text: "Tell me about your project and I will reply with a plan and timeline.", chips: ["Email", "Instagram", "Phone"], action: "contact" }
  ]
};
