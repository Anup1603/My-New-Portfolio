export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Marks a styled placeholder entry — swap with real testimonials when available. */
  placeholder?: boolean;
}

/**
 * Replace these placeholder entries with real testimonials as they come in.
 * The section can be hidden entirely via `showTestimonials` in data/site.ts.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Testimonial coming soon — this space is reserved for a client or teammate who has shipped with Anup.",
    name: "Coming soon",
    role: "Enterprise client",
    placeholder: true,
  },
  {
    quote:
      "Testimonial coming soon — real feedback from production collaborations will live here.",
    name: "Coming soon",
    role: "Engineering teammate",
    placeholder: true,
  },
  {
    quote:
      "Testimonial coming soon — this card is waiting for a future collaborator’s words.",
    name: "Coming soon",
    role: "Startup founder",
    placeholder: true,
  },
];
