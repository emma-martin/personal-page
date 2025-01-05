import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

export function Navigation() {
  const links: NavLink[] = [
    { href: "/skills", label: "/Skills" },
    { href: "/random", label: "/Personal" },
  ];

  return (
    <nav className="space-y-2">
      {links.map((link) => (
        <div key={link.href}>
          <Link
            href={link.href}
            className="text-primary hover:accent-hover transition-colors block"
          >
            {link.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
