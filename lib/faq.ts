import { commerce } from "@/lib/commerce";
import { product } from "@/lib/product";

export const faqs = [
  {
    question: "What comes with CampRinse?",
    answer: `The ${product.name} includes a rechargeable portable rinse pump, rinse hose, shower/rinse head and the standard accessories supplied with the unit. You supply a separate container of clean water.`,
  },
  {
    question: "Do I need a tap?",
    answer:
      "No. CampRinse is designed for tap-free rinsing from a separate clean-water container — practical at a car park, trail head, campsite or beach.",
  },
  {
    question: "Does it heat the water?",
    answer:
      "No. CampRinse is a portable rechargeable rinse system, not a heated shower. Use water at a safe, comfortable temperature for your dog.",
  },
  {
    question: "How much water do I need?",
    answer:
      "A modest container of clean water is enough for a typical paw rinse after a walk. Exact water use varies with dog size and how muddy they are.",
  },
  {
    question: "Can I use it for a large dog?",
    answer:
      "Yes for everyday paw rinses after walks. CampRinse is positioned for cleaning paws and lower legs at the car — not full body bathing of large dogs.",
  },
  {
    question: "How long does delivery take?",
    answer: `${commerce.deliveryPromise}. The delivery service, estimate and any charge are confirmed before you complete payment.`,
  },
  {
    question: "Can I return it?",
    answer:
      "For most UK online purchases, you normally have 14 days after receiving the goods to tell us you want to cancel, then a further 14 days to send them back. See our Returns page. Statutory rights for faulty or misdescribed goods are not affected.",
  },
  {
    question: "What if there is a problem with my order?",
    answer: `Email ${commerce.supportEmail} with your order details. We will help with delivery, returns or product issues.`,
  },
] as const;
