// Define the FAQ item interface
export interface FAQItemData {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

// Export the typed FAQ data array
export const faqData: FAQItemData[] = [
  {
    id: 1,
    question: "What are your shipping options?",
    answer:
      "We offer free standard shipping on orders over $50! Express shipping is available for $9.99, and we also offer same-day delivery in select cities.",
    icon: "🚚",
  },
  {
    id: 2,
    question: "Are your toys safe for children?",
    answer:
      "Absolutely! All our toys meet or exceed safety standards. They're tested for lead, phthalates, and other harmful substances. Each toy comes with age recommendations and safety guidelines.",
    icon: "🛡️",
  },
  {
    id: 3,
    question: "What's your return policy?",
    answer:
      "We offer a 30-day return policy for unused items in original packaging. If your child isn't completely happy with their toy, we'll make it right!",
    icon: "↩️",
  },
  {
    id: 4,
    question: "Do you offer gift wrapping?",
    answer:
      "Yes! We offer beautiful gift wrapping for just $4.99. You can also add a personalized message card to make your gift extra special.",
    icon: "🎁",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Buy Now Pay Later options. All transactions are secure and encrypted.",
    icon: "💳",
  },
];
