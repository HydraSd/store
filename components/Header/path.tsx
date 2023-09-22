import { usePathname } from "next/navigation";


function Routes() {
  const pathName = usePathname();
 const routes = [
    {
      url: "/",
      label: "Home",
      active: pathName === "/",
    },

    {
      url: "/blog",
      label: "Blog",
      active: pathName === "/blog",
    },
    {
      url: "/about-us",
      label: "About Us",
      active: pathName === "/about-us",
    },
  ];

  return (
    routes
  )
}

export default Routes


