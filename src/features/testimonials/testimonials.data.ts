export type TestimonialItem = {
  id: string;
  initials: string;
  name: string;
  location: string;
  text: string;
};

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    initials: "VM",
    name: "Shri Vimal Kr Mishra",
    location: "Chhapra, Bihar",
    text: "Very authentic and peaceful experience. Pandit ji explained every step of the havan with patience.",
  },
  {
    id: "2",
    initials: "RS",
    name: "Rohit Sharma",
    location: "Delhi NCR",
    text: "We booked services from abroad and everything was coordinated smoothly. Highly recommended.",
  },
  {
    id: "3",
    initials: "AP",
    name: "Anjali Pandey",
    location: "Varanasi",
    text: "True Karmakandi vidhi. Our family has been taking guidance for years at Naya Mahadev.",
  },
];
