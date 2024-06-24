import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  PuzzlePieceIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

function NavItem({ icon, label, sectionId }) {
  const { scroll } = useLocomotiveScroll();

  const handleClick = (e) => {
    e.preventDefault();
    scroll.scrollTo(`#${sectionId}`, { offset: '-100', duration: '1500', easing: [0.25, 0.0, 0.35, 1.0]});
  };
  return (
    <a href={`#${sectionId}`} onClick={handleClick}>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-1.5 p-1 font-normal"
      >
        {icon}
        {label}
      </Typography>
    </a>
  );
}

function NavList({ scroll }) {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem
        icon={<Square3Stack3DIcon className="h-5 w-5" />}
        label="Pages"
        sectionId="home"
      />
      <NavItem
        icon={<UserCircleIcon className="h-5 w-5" />}
        label="Account"
        sectionId="about"
      />
      <NavItem
        icon={<PuzzlePieceIcon className="h-5 w-5" />}
        label="Blocks"
        sectionId="competences"
      />
      <NavItem
        icon={<CodeBracketSquareIcon className="h-5 w-5" />}
        label="Docs"
        sectionId="contact"
      />
    </ul>
  );
}

export function NavbarBlurred({ scroll }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);  

  return (
      <div className="fixed p-4 z-50 w-full top-0">
          <Navbar className="mx-auto bg-gray-100/50 backdrop-blur-md">
              <div className="container mx-auto flex items-center justify-between text-gray-900">
                  <Typography as="a" href="#home" variant="h6" color="gray-900" className="mr-4 cursor-pointer">
                      Thomas Calmettes
                  </Typography>
                  <div className="hidden lg:block">
                      <NavList />
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
                  <NavList />
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
