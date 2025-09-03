"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, MapIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const dashboardLinks = [
  {
    id: 0,
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "Invoices",
    href: "/invoices",
    icon: MapIcon,
  },
];

export function DashboardLink() {
  const pathName = usePathname();
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className={`w-full gap-3 py-3 px-3 rounded-2xl ${cn(
            pathName === link.href
              ? "text-primary bg-primary/10 hover:text-purple-800 ransition-colors ease-in-out duration-200"
              : "text-primary hover:bg-primary/10 hover:text-purple-800 transition-colors ease-in-out duration-200",
            "flex items-center gap-3 rounded px-3 py-2 transition-all"
          )}`}>
          <span className="flex items-center gap-2">
            <link.icon className="" />
            <p className="m-0 p-0">{link.name}</p>
          </span>
        </Link>
      ))}
    </>
  );
}
