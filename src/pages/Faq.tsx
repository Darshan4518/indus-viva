import NavigationHeroSection from "@/components/NavigationHeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "What is 'Virtual Office'? How do I update my information?",
    answer: `It is easy to update your IndusViva account and view your orders any time through 'Virtual Office'. 
'Virtual Office' allows you complete control over your transactions on IndusViva. 
You can manage/edit your personal data like shipping address and phone numbers, change your password, 
and track the status of your orders.`,
  },
  {
    question:
      "Is it mandatory to have an account to shop for products on IndusViva?",
    answer: `Yes, it is mandatory to have an account, which is completely free of cost, to shop and purchase products. 
We recommend creating an account for a personalized shopping experience.`,
  },
  {
    question: "How do I know my order has been confirmed?",
    answer: `You will receive an email with the order details. Also, you will get an SMS alert once the product is shipped with dispatch details.`,
  },
  {
    question: "How do I pay using a credit/debit card?",
    answer: `We accept payments using Visa, MasterCard, and Maestro debit cards. 
You will need to enter your card number, expiry date, and CVV, then complete 3D secure verification via your bank.`,
  },
  {
    question: "Credit Card & UPI Payments",
    answer: `We use PayU as our payment gateway partner to facilitate credit card and UPI payments. For more details visit payu.in.`,
  },
  {
    question: "How do I pay for an IndusViva product purchase?",
    answer: `You may use internet banking, Visa, MasterCard, or Maestro credit/debit cards issued in India. 
We use secure encryption technology via trusted payment gateways.`,
  },
  {
    question: "Can I use my bank's Internet Banking feature to make a payment?",
    answer: `Yes. IndusViva allows payments through net banking, providing secure transactions directly from your bank account.`,
  },
  {
    question: "Is it safe to use my credit/debit card on IndusViva?",
    answer: `Yes. All card payments are processed via secure payment gateways with 3D secure password verification for added protection.`,
  },
  {
    question: "How do I check the current status of my orders?",
    answer: `You can check order status in 'Virtual Office' under 'My Orders' or by clicking on the specific 'Order Number'.`,
  },
  {
    question: "What are the delivery charges?",
    answer: `IndusViva's standard delivery charge for every 25 PV is Rs.100 across India.`,
  },
  {
    question: "What is the estimated delivery time?",
    answer: `Products are delivered within 4 to 5 business days. Certain locations may take up to 7 business days.`,
  },
  {
    question: "Are there any hidden costs (sales tax, octroi etc.)?",
    answer: `No hidden charges. The price shown is final. If applicable, local taxes are the buyer's responsibility.`,
  },
  {
    question: "How does the delivery process work?",
    answer: `Deliveries are managed through reputed couriers. You’ll receive SMS with courier details once dispatched.`,
  },
  {
    question: "How can I track the delivery of my order?",
    answer: `You’ll get SMS alerts with tracking details. You can track your order on the courier’s website using the provided Airway Bill number.`,
  },
];

export default function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section>
      <NavigationHeroSection title="Faq" path="Faq" />
      <div className="max-w-6xl mx-auto px-4 py-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-2 h-2 rounded-full bg-teal-600"></div>
          <span className="text-teal-600 font-medium">FAQ</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
        >
          General Questions
        </motion.h2>

        <Accordion type="single" collapsible className="w-full mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-600 rounded-lg  duration-200 p-1"
            >
              <AccordionTrigger className="px-4 py-3 text-left font-medium text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-muted-foreground text-sm whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
