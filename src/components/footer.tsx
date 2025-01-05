import { Laptop } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-sm text-center text-muted-foreground">
      <p>
        {new Date().getFullYear()}{" "}
        <Laptop className="inline-block w-5 h-5 mx-2 icon-hover hover:accent-hover" />{" "}
        Made with Next.js and TailwindCSS
      </p>
    </footer>
  );
}
