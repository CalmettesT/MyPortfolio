import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon as UserCircleIconSolid,
  CommandLineIcon as CommandLineIconSolid,
  EnvelopeIcon as EnvelopeIconSolid,
} from "@heroicons/react/24/solid";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon as UserCircleIconOutline,
  CommandLineIcon as CommandLineIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
} from "@heroicons/react/24/outline";
import { useLocomotiveScroll } from 'react-locomotive-scroll';

function NavItem({ icon, solidIcon, label, sectionId, scroll, isActive }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (scroll) {
      scroll.scrollTo(`#${sectionId}`, { offset: -100, duration: 1500, easing: [0.25, 0.0, 0.35, 1.0] });
    }
  };

  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-1.5 p-1 font-normal cursor-pointer"
      onClick={handleClick}
    >
      {isActive ? solidIcon : icon}
      {label}
    </Typography>
  );
}

function NavList({ scroll, activeSection }) {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem
        icon={<UserCircleIconOutline className="h-5 w-5" />}
        solidIcon={<UserCircleIconSolid className="h-5 w-5 text-gray-900" />}
        label="À Propos"
        sectionId="about"
        scroll={scroll}
        isActive={activeSection === 'about'}
      />
      <NavItem
        icon={<CommandLineIconOutline className="h-5 w-5" />}
        solidIcon={<CommandLineIconSolid className="h-5 w-5 text-gray-900" />}
        label="Compétences"
        sectionId="project"  // This will trigger 'project' as the section ID
        scroll={scroll}
        isActive={activeSection === 'project'}
      />
      <NavItem
        icon={<EnvelopeIconOutline className="h-5 w-5" />}
        solidIcon={<EnvelopeIconSolid className="h-5 w-5 text-gray-900" />}
        label="Contact"
        sectionId="contact"
        scroll={scroll}
        isActive={activeSection === 'contact'}
      />
    </ul>
  );
}

export function NavbarBlurred() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const handleOpen = () => setOpen(!open);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.on('call', (value, way, obj) => {
        if (way === 'enter') {
          setActiveSection(value);
        }
      });
      scroll.update();
    }
  }, [scroll]);

  return (
    <div className="fixed p-4 z-50 w-full top-0">
      <Navbar className="mx-auto bg-gray-100/50 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <Typography 
            variant="h6" 
            color="gray-900" 
            className="mr-4 cursor-pointer"
            onClick={() => scroll && scroll.scrollTo('#home', { offset: 0, duration: 1500, easing: [0.25, 0.0, 0.35, 1.0] })}
          >
            En cours de Dev
          </Typography>
          <div className="hidden lg:block">
            <NavList scroll={scroll} activeSection={activeSection} />
          </div>
          <Button
            size="sm"
            className="hidden lg:inline-block"
            onClick={() => window.location.href = "mailto:thomas.calmettes01@gmail.com"}
          >
            Contactez-moi
          </Button>
          <IconButton size="sm" variant="text" onClick={handleOpen} className="ml-auto inline-block lg:hidden">
            {open ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
          </IconButton>
        </div>
        <Collapse open={open}>
          <NavList scroll={scroll} activeSection={activeSection} />
          <Button
            size="sm"
            className="mb-2"
            fullWidth
            onClick={() => window.location.href = "mailto:thomas.calmettes01@gmail.com"}
          >
            Contactez-moi
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarBlurred;
