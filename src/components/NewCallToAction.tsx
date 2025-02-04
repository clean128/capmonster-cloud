import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const solutions = [
  "reCAPTCHA",
  "GeeTest",
  "Cloudflare Turnstile Bot Challenge",
  "DataDome",
  "Tencent captcha",
  "Amazon Waf",
  "Faucet Pay",
  "Imperva (Incapsula)",
  "Text Captcha",
];

export const NewCallToAction = () => {
  const [index, setIndex] = useState(0);
  const [isFadingIn, setIsFadingIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingIn((prev) => !prev);
      if (!isFadingIn) {
        setIndex((prevIndex) => (prevIndex + 1) % solutions.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isFadingIn]);
  
  return (
    <section id="new-call-to-action">
      <hr className="w-11/12 mx-auto" />

      <div className="w-full py-24 text-center sm:py-32 bg-[url('/src/assets/call-bg.svg')]">
        <h3 className="px-10 mb-16 text-5xl font-bold text-center md:text-6xl md:px-80">
          Start your journey today and automate your{" "}
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isFadingIn ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-green-300"
          >
            {solutions[index]}
          </motion.span>
          {" "}solution
        </h3>

        <Button className="w-48 text-2xl text-indigo-500 h-14 bg-indigo-50 hover:bg-indigo-100">Start now</Button>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
