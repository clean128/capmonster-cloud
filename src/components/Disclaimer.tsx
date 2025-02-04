import { Card, CardHeader, CardTitle } from "./ui/card";
import image1 from "../assets/48x48_testing.svg";
import image2 from "../assets/48x48_recognition.svg";
import image3 from "../assets/48x48_help.svg";

interface ServiceProps {
  title: string;
  icon: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Testing your own website or a website you have permission to test.",
    icon: image1,
  },
  {
    title: "Recognition of the images specified by you using a computer vision system.",
    icon: image2,
  },
  {
    title: "Aid for visually impaired individuals or people who do not understand the language in which the text on the image is written.",
    icon: image3,
  },
];

export const Disclaimer = () => {
  return (
    <section
      id="disclaimer"
      className="items-center w-full px-6 py-24 space-y-8 md:px-12 lg:px-32 sm:py-32 bg-violet-100"
    >
      <h2 className="mb-12 text-4xl font-bold lg:text-5xl md:text-center">
        Use Cases
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {serviceList.map(({ title, icon }: ServiceProps) => (
          <Card key={title} className="bg-white border-none">
            <CardHeader>
              <CardTitle className="flex items-start gap-6">
                <img
                  src={icon}
                  alt="About feature"
                  className="mr-auto"
                />
                <span className="text-xl font-normal lg:text-2xl text-muted-foreground">{title}</span>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
