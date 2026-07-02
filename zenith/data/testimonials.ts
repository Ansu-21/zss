// Real testimonials from the current Zenith site.
// Add `photo` paths when available (e.g. "https://www.zss.co.in/assets/images/testimonial/testimonial-01.png").

export type Testimonial = {
  name: string;
  quote: string;
  course: string;
  role: string;
  location: string;
  photo?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh R",
    quote:
      "I would like to thank the trainers and staff at Zenith Safety Solutions who made us feel very welcome during our IOSH and NEBOSH course, which motivated me to reach international standards. The training has been invaluable in supporting our company and staff — they even tailored the course to suit our needs. I will have no hesitation in recommending technical and non-technical people to take a safety course at a standard centre like Zenith.",
    course: "IOSH · NEBOSH",
    role: "Safety Manager",
    location: "Oman",
    photo: "https://www.zss.co.in/assets/images/testimonial/testimonial-01.png",
  },
  {
    name: "Karthikeyan",
    quote:
      "I completed my NEBOSH IGC course at Zenith Safety Solutions. As the name suggests, the institute understood my requirement and offered me the right solution. Mr. Abdul Razak was very supportive throughout — guiding us in planning and executing the project work, which really puts your knowledge to the test. The learning has been tremendous, all thanks to the team.",
    course: "NEBOSH IGC",
    role: "Managing Director",
    location: "Avant Garde Safetech",
    photo: "https://www.zss.co.in/assets/images/testimonial/testimonial-02.png",
  },
  {
    name: "Baskar Ramanujam",
    quote:
      "The Zenith trainer was brilliant and we were given more help than we knew we needed. What I liked most was the prompt, professional approach. Our trainer understood us and helped us achieve what we set out to do. The training was given in a manner even an inexperienced student could easily understand. I wish Zenith and their team great success.",
    course: "Safety Training",
    role: "HSE Manager",
    location: "India",
    photo: "https://www.zss.co.in/assets/images/testimonial/testimonial-03.png",
  },
  {
    name: "R. Kingsley Charles",
    quote:
      "My experience during the NEBOSH learning was incredible — your teaching really helped us understand the real meaning of HSE. I cleared NEBOSH with credit. I will always remember my experience here. Great job, Zenith Safety Solutions — go ahead with continuing success!",
    course: "NEBOSH",
    role: "B.Tech., PG Dip.",
    location: "India",
    photo: "https://www.zss.co.in/assets/images/testimonial/testimonial-04.png",
  },
];
