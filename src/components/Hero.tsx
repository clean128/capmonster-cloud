import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid gap-10 py-20 lg:grid-cols-2 place-items-center md:py-32">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-4xl font-bold md:text-6xl">
          <h2 className="inline">
          Highly efficient service for solving captchas using AI
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
        Boost cost-effectiveness with a stable API, high speed, and unbeatable CAPTCHA recognition accuracy
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full text-xl text-white bg-indigo-500 md:w-1/4 h-14 hover:bg-indigo-400">Start now</Button>
          <Button className="w-full text-xl text-indigo-500 border h-14 md:w-1/5 bg-indigo-50 hover:border-indigo-500 hover:bg-indigo-100">Demo</Button>
        </div>
      </div>

      <img src="https://capmonster.cloud/img/new-landing/hero.webp" />
    </section>
  );
};
