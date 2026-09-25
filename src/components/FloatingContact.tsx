import { Mail } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const FloatingContact = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const className =
    "fixed bottom-6 right-6 z-50 group flex items-center gap-2 px-4 py-3 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300";

  const content = (
    <>
      <Mail className="w-5 h-5" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-24 transition-all duration-300 whitespace-nowrap font-sans text-sm">
        Contact Me
      </span>
    </>
  );

  if (isHomePage) {
    return (
      <a href="mailto:prv619@gmail.com" className={className} aria-label="Contact Me">
        {content}
      </a>
    );
  }

  return (
    <Link to="/#contact" className={className} aria-label="Contact Me">
      {content}
    </Link>
  );
};

export default FloatingContact;
