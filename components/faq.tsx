import Section from "@/components/ui/section";
import GradientLink from "@/components/ui/gradient-link";
import { FAQS, SITE } from "@/lib/constants";

export default function Faq() {
  return (
    <Section id="faq">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-white/60">
        The questions we get asked most. If yours is not here, email us and you
        will get a straight answer within 24 hours.
      </p>

      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-white/[0.06] bg-white/[0.03] transition-colors hover:border-teal-500/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold marker:hidden">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-xl font-light text-teal-400 transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-5 leading-relaxed text-white/60">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="mb-5 text-sm text-white/40">
          Still have a question?{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-teal-400 underline underline-offset-2 hover:text-teal-300"
          >
            {SITE.email}
          </a>
        </p>
        <GradientLink href="#connect">Start a project</GradientLink>
      </div>
    </Section>
  );
}
