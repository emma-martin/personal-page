import { GoBackButton } from "@/components/go-back-button";

export default function Skills() {
  return (
    <div className="space-y-6  mx-auto">
      <GoBackButton />
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="space-y-4 md:space-x-6 md:space-y-0 flex flex-col md:flex-row">
        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Development</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Vue</li>
            <li>Next.js</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind</li>
            <li>Vuetify</li>
            <li>Responsive Web Design</li>
            <li>Unit Testing Libraries</li>
          </ul>
        </section>

        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Tools & Tech</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Git, GitHub, Gitlab</li>
            <li>Feature flags</li>
            <li>Whimsical, Excalidraw</li>
            <li>Hotjar, Mixpanel, Datadog</li>
            <li>SQL, BigQuery, LookerStudio</li>
            <li>Agile Methodologies</li>
            <li>XP approach</li>
          </ul>
        </section>

        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Soft Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Problem-solving</li>
            <li>Team Collaboration</li>
            <li>Communication</li>
            <li>Adaptability</li>
            <li>Continuous Learning</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
