import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/ai_efficiency.svg";
import image2 from "../assets/high_speed.svg";
import image3 from "../assets/compatibility.svg";
import image4 from "../assets/no_risks.svg";

interface AdvantageProps {
  title: string;
  description: string;
  image: string;
}

const advantages: AdvantageProps[] = [
  {
    title: "AI Efficiency",
    description:
      "It is up to 2-3 times cheaper than using manual services. We don't pay people for recognition because the whole process is fully automated. Thanks to this, we ensure the high quality and a very affordable price.",
    image: image,
  },
  {
    title: "High Speed",
    description:
      "Recognize more than 1000 captchas per minute. The average captcha recognition time is less than 1 second, regardless of the time of day and server load.",
    image: image2,
  },
  {
    title: "Compatibility",
    description:
      "CapMonster Cloud uses the APIs of popular manual captcha recognition services. To get started, just type the key in your software.",
    image: image3,
  },
  {
    title: "Risk-Free",
    description:
      "You pay for actually recognized captchas only. The price does not depend on the server load.",
    image: image4,
  },
];

export const Advantages = () => {
  return (
    <section
      id="advantages"
      className="container py-24 space-y-8 sm:py-32"
    >
      <h2 className="mb-12 text-5xl font-bold lg:text-6xl md:text-center">
        Our Advantages
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {advantages.map(({ title, description, image }: AdvantageProps) => (
          <Card key={title} className="bg-white border-none">
            <CardHeader>
              <CardTitle className="flex flex-col gap-5">
                <img
                  src={image}
                  alt="About feature"
                  className="mr-auto"
                />
                <span className="text-2xl lg:text-3xl">{title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="text-lg text-muted-foreground">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
