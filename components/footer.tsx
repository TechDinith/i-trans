import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-10 flex justify-center rounded-t-xl bg-white/5 p-4 text-sm opacity-70">
      <p>
        Copyright © <a href="#hero">{SITE.name}</a>{" "}
        {new Date().getFullYear()}.
      </p>
    </footer>
  );
}
