import Link from 'next/link';
import { Markdown } from 'components/markdown';
// import { ContextAlert } from 'components/context-alert';

const preDynamicContentExplainer = `
Narrate AI is your personal storytelling assistant, designed to turn summaries or key points into complete stories, blogs, or journal entries. Whether it's for personal reflection or sharing with an audience, Narrate AI simplifies the writing process with smart AI generation. Let **Narrate AI** bring your ideas to life. Say goodbye to writer's block and hello to boundless creativity, all in one click.
`;

const postDynamicContentExplainer = `
Encounter an issue or have a suggestion? We'd love to hear from you! [Create an issue on GitHub](https://github.com/ifirmawan/narrate-ai/issues)

`;

export default function Page() {
  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      <section className="flex flex-col items-start gap-3 sm:gap-4">
        {/* <ContextAlert /> */}
        <h1 className="mb-0">
          Narrate AI – Transform Ideas into Engaging Stories, Effortlessly
        </h1>
        <p className="text-lg">
          From Key Points to Polished Narratives in Seconds
        </p>
        <Link
          href="/create-story"
          className="btn btn-lg btn-primary sm:btn-wide"
        >
          Create Your Story Now
        </Link>
      </section>
      <section className="flex flex-col gap-4">
        <Markdown content={preDynamicContentExplainer} />
        <Markdown content={postDynamicContentExplainer} />
      </section>
    </main>
  );
}
