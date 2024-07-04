import React from "react";
import {
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

function ContactCard({ icon, title, contact, link }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <IconButton
          className="mx-auto place-items-center"
          size="lg"
          onClick={() => window.location.href = link}
        >
          {icon}
        </IconButton>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mt-4 mb-2 font-semibold"
        >
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-650">
          {contact}
        </Typography>
      </CardBody>
    </Card>
  );
}

const options = [
  {
    icon: <EnvelopeIcon className="h-5 w-5" />,
    title: "Email",
    contact: "thomas.calmettes01@gmail.com",
    link: "mailto:thomas.calmettes01@gmail.com",
  },
  {
    icon: <PhoneIcon className="h-5 w-5" />,
    title: "Téléphone",
    contact: "+33 6 35 18 06 75",
    link: "tel:+33635180675",
  },
  {
    icon: <UserIcon className="h-5 w-5" />,
    title: "LinkedIn",
    contact: "Thomas Calmettes",
    link: "https://www.linkedin.com/in/thomas-calmettes-169b00214",
  },
];

export function ContactSection3() {
  return (
    <section>
      <div id="contact" className="relative h-96 w-full mt-[30vh]" data-scroll data-scroll-call="contact" data-scroll-repeat>
        <img
          className="absolute h-full w-full object-cover object-center"
          src="https://www.material-tailwind.com/image/image-5.jpeg"
          alt="nature image"
        />
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="relative pt-28 text-center">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-4xl lg:text-5xl"
          >
            Vous avez un projet ?
          </Typography>
          <Typography variant="lead" color="white" className="mx-auto">
            Je serai ravi d’en discuter avec vous.
          </Typography>
        </div>
      </div>
      <div className="-mt-16 mb-8 px-8">
        <div className="container mx-auto flex w-full rounded-xl border border-white bg-white/75 shadow-md shadow-black/5 saturate-200 backdrop-blur-2xl">
          <div className="grid w-full grid-cols-1 gap-x-8 md:grid-cols-3">
            {options.map(({ icon, title, contact, link }) => (
              <ContactCard
                key={title}
                icon={icon}
                title={title}
                contact={contact}
                link={link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </section>
  );
}

export default ContactSection3;
