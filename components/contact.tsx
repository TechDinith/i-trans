"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(1, "Name is Required"),
  email: z.string().email("Valid email is Required"),
  info: z.string().min(1, "Project Info is Required"),
  otherContacts: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }

    setTimeout(() => {
      setStatus("idle");
      reset();
    }, 15000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-white/5 p-6 backdrop-blur-sm md:p-10"
    >
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">
        Contact <span className="ml-2 opacity-60">📞</span>
      </h2>

      {status === "success" ? (
        <p className="text-lg">
          Thank you. We&apos;ve got your information and we&apos;ll get back to
          you soon!
        </p>
      ) : status === "error" ? (
        <p className="text-lg text-red-400">
          Sorry! Something went wrong! Please contact us directly via email!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-md space-y-4"
        >
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("name")}
              placeholder="Name"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("info")}
              placeholder="Project Info"
              rows={4}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50"
            />
            {errors.info && (
              <p className="mt-1 text-sm text-red-400">
                {errors.info.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("otherContacts")}
              placeholder="Other Contacts"
              rows={4}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold transition-colors hover:bg-green-700 disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </form>
      )}

      <div className="mt-4 flex items-center gap-2 text-sm opacity-70">
        <span>✉️</span>
        <b>{SITE.email}</b>
      </div>
    </motion.section>
  );
}
