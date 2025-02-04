import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How do I connect CapMonster Cloud to my program?",
    answer: "In your captcha software, enter the key to the API Key field",
    value: "item-1",
  },
  {
    question: "How are funds debited from the account for regular Captchas?",
    answer:
      "We charge you $0.0003 per captcha multiplied by the confidence coefficient of the neural network prediction that is always between 0 and 1. Therefore, actual captcha price is lower than $0.0003. Our statistics show that the average confidence coefficient is 87%.",
    value: "item-2",
  },
  {
    question: "Are reCaptcha v2 and v3 supported?",
    answer: "Yes, CapMonster Cloud recognizes reCAPTCHA v2, reCAPTCHA v2 Invisible and reCAPTCHA v3",
    value: "item-3",
  },
  {
    question:
      "What recognition service APIs are supported?",
    answer:
      "CapMonster Cloud supports the APIs for the following services: Anti-Captcha (v1.0, v2.0), RuCaptcha, RipCaptcha, 2Captcha, BypassCaptcha, DeathByCaptcha",
    value: "item-4",
  },
  {
    question:
      "How to check that the service can solve my captcha?",
    answer:
      "Go to the demo page and upload a captcha image. You will see a solution result on that page.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="mb-12 text-4xl font-bold lg:text-5xl md:text-center">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="mx-0 lg:mx-28 AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-xl text-left hover:no-underline">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-lg">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
