import { commerce } from "@/lib/commerce";

export const faqs = [
  {
    question: "What comes with the CampRinse kit?",
    answer:
      "The CampRinse Dog Rinse Kit includes the rechargeable portable rinse pump, rinse hose and shower head. It is designed to work from a separate container of clean water, so you do not need an outdoor tap at the end of the walk.",
  },
  {
    question: "Do I need a tap?",
    answer:
      "No. CampRinse is designed for tap-free rinsing from a separate clean-water container, making it practical at a car park, trail head, campsite or beach.",
  },
  {
    question: "Does CampRinse heat the water?",
    answer:
      "No. CampRinse is a portable rechargeable rinse system, not a heated shower. Use water at a safe, comfortable temperature for your dog.",
  },
  {
    question: "Is it only for dogs?",
    answer:
      "Dogs are the main use. It is also handy for muddy boots, beach sand, bikes and outdoor gear when you want to clean up before loading the car.",
  },
  {
    question: "How quickly will my order arrive?",
    answer: `${commerce.deliveryPromise}. The current delivery estimate and any delivery charge are shown before you complete payment.`,
  },
  {
    question: "Can I return it if I change my mind?",
    answer:
      "For most UK online purchases, you normally have 14 days after receiving the goods to tell us you want to cancel, then a further 14 days to send them back. Our Returns page explains the process. Your statutory rights for faulty or misdescribed goods are not affected.",
  },
  {
    question: "Where can I get help with an order?",
    answer:
      "Email hello@camprinse.com with your order details and we will help with delivery, returns or product questions.",
  },
] as const;
