import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <img src="https://capmonster.cloud/img/new-landing/stats5.gif" />,
    title: "5%",
    description:
      "Solved captchas for $500",
  },
  {
    icon: <img src="https://capmonster.cloud/img/new-landing/stats10.gif" />,
    title: "10%",
    description:
      "Solved captchas for $1000",
  },
  {
    icon: <img src="https://capmonster.cloud/img/new-landing/stats15.gif" />,
    title: "15%",
    description:
      "Solved captchas for $10000",
  },
];

export const NewBonusBlock = () => {
  return (
    <section
      id="new-bonus-block"
      className="container py-24 text-center sm:py-32"
    >
      <h2 className="mb-12 text-4xl font-bold md:text-5xl">
      Receive a bonus up to 15% for the volume of solved captchas to your balance
      </h2>

      <div className="grid grid-cols-1 md:mx-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid grid-flow-col text-7xl">
                {title}
                {icon}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-2xl">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
