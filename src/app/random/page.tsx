import { GoBackButton } from "@/components/go-back-button";

export default function Random() {
  return (
    <div className="space-y-6 mx-auto">
      <GoBackButton />
      <h1 className="text-2xl font-bold">About Me</h1>
      <div className="space-y-4 leading-relaxed">
        <ul className="list-disc list-inside space-y-2">
          <li>
            I wind down with podcasts, especially ones on History, Anthropology,
            and Literary Studies.
          </li>
          <li>I share my home with two rescue cats.</li>
          <li>I&apos;m a huge fan of post-punk and synth music.</li>
        </ul>
      </div>
    </div>
  );
}
