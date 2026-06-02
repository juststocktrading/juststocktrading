import getCategories from "@/actions/get-categories";
import NavbarContent from "./navbar-content";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <>
      <NavbarContent categories={categories} />
      {/* Spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-[80px]" />
    </>
  );
};

export default Navbar;
