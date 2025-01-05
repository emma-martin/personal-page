import { Navigation } from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
      <Navigation />
      <div className="space-y-8">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-6">
            <Image
              src="/images/frontend-engineer.png"
              alt="frontend enginner"
              width={180}
              height={180}
              className="rounded-full bg-muted"
              priority
            />
            <h1>Hey! Emma here.</h1>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p>
              I&apos;m a{" "}
              <Link
                href="https://www.linkedin.com/in/emmamartinfront/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:accent-hover transition-colors underline"
              >
                Frontend engineer
              </Link>{" "}
              with 5+ years of experience building user-friendly web apps and
              data-driven solutions. Proficient in JavaScript, TypeScript, Vue,
              and Next.js. Always excited to try new things.
            </p>

            <p>
              Currently I&apos;m freelancing with the incredible team of{" "}
              <Link
                href="https://www.aleda.dev/"
                target="_blank"
                className="text-primary hover:accent-hover transition-colors underline"
              >
                AledaDev
              </Link>
              .
            </p>
            <p>
              Feel free to reach out by{" "}
              <Link
                href="mailto:emmamartinalvarez@gmail.com"
                className="text-primary hover:accent-hover transition-colors underline"
              >
                email
              </Link>
              .
            </p>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-primary">
                Let&apos;s build together{" "}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
                <div className="p-4 border border-gray-300 rounded-lg  hover:accent-bg">
                  <h3 className="text-lg font-semibold text-primary">
                    <Link
                      href="mailto:emmamartinalvarez@gmail.com?subject=Let%27s%20build%20a%20PWA!"
                      className="text-primary  underline "
                    >
                      Progressive Web Applications (PWAs)
                    </Link>
                  </h3>
                  <p className="text-primary mt-3 mb-10">
                    Delivering fast, reliable, and engaging experiences.
                  </p>
                </div>
                <div className="p-4 border border-gray-300 rounded-lg  hover:accent-bg">
                  <h3 className="text-lg font-semibold text-primary">
                    <Link
                      href="mailto:emmamartinalvarez@gmail.com?subject=Let%27s%20build%20a%20SPA!"
                      className="text-primary underline"
                    >
                      Single Page Applications (SPAs)
                    </Link>
                  </h3>
                  <p className="text-primary mt-3 mb-10">
                    Building responsive and seamless experiences.
                  </p>
                </div>
                <div className="p-4 border border-gray-300 rounded-lg  hover:accent-bg">
                  <h3 className="text-lg font-semibold text-primary">
                    <Link
                      href="mailto:emmamartinalvarez@gmail.com?subject=Integrate%20these%20designs!"
                      className="text-primary  underline "
                    >
                      UI/UX Design Integration
                    </Link>
                  </h3>
                  <p className="text-primary mt-3 mb-10">
                    Creating implementations of your designs.
                  </p>
                </div>
                <div className="p-4 border border-gray-300 rounded-lg hover:accent-bg transition-colors">
                  <h3 className="text-lg font-semibold text-primary">
                    <Link
                      href="mailto:emmamartinalvarez@gmail.com?subject=Let%27s%20build%20a%20SaaS%20platform!"
                      className="text-primary underline "
                    >
                      Your SaaS Idea
                    </Link>
                  </h3>
                  <p className="text-primary mt-3 mb-10">
                    Developing robust, secure, and scalable SaaS solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          image: "https://www.emmamartin.dev/images/icon-emma.png",
          name: "Emma Martin",
          jobTitle: "Frontend Engineer",
          url: "https://www.emmamartin.dev",
          sameAs: [
            "https://www.linkedin.com/in/emmamartinfront/",
            "https://github.com/emma-martin",
          ],
        })}
      </Script>
    </div>
  );
}
