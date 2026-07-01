import NavbarContent from "./navbar-content";

const Navbar = () => {
  return (
    <>
      <NavbarContent />
      {/* Spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-[80px]" />
    </>
  );
};

export default Navbar;
