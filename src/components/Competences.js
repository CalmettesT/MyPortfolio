import { IconButton, Typography } from "@material-tailwind/react";
import NewSection from "./NewSection";
import imgMoi from "../asset/img/moiV2.jpg";

const logos = [
  {
    logo: "Twitter 2 - Official",
    position: "top-40 left-36",
  },
  {
    logo: "Vector (3)",
    position: "top-20 right-10",
  },
  {
    logo: "Figma - Official",
    position: "bottom-14 right-10",
  },
  {
    logo: "Vector",
    position: "top-10 left-36",
  },
  {
    logo: "Google - Official",
    position: "top-20 left-10",
  },
  {
    logo: "YouTube - Official",
    position: "bottom-10 left-36",
  },
  {
    logo: "Vector (4)",
    position: "bottom-14 left-10",
  },
];

export function LogoSection5() {
  return (
    <section className="py-16 px-16 lg:py-32">
      <NewSection image={imgMoi} title="Competences" />
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="text-left lg:mb-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Work with us
          </Typography>
          <Typography className="mb-10 w-full font-normal !text-gray-500 lg:max-w-lg">
            Whatever your qualification is - we got you! <br />
            <br />
            Take up one idea. Make that one idea your life - think of it, dream
            of it, live on that idea. Let the brain, muscles, nerves, every part
            of your body, be full of that idea, and just leave every other idea
            alone. This is the way to success. A single rose can be my garden...
            a single friend, my world.
          </Typography>
        </div>
        <div className="flex h-[320px] flex-wrap items-center justify-center gap-6">
          <div className="relative !h-full w-full max-w-xs">
            {logos.map(({ logo, position }, key) => (
              <IconButton
                key={key}
                color="white"
                className={`!absolute ${position}`}
              >
                <img
                  key={key}
                  src={`https://www.material-tailwind.com/logos/${logo}.png`}
                  alt="logo"
                  className={`w-6`}
                />
              </IconButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSection5;
