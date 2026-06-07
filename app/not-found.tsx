import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 text-center">
      <h1 className="mb-16 max-w-xs text-4xl font-bold">Page not found</h1>
      <p className="mb-12 text-lg">
        Sorry, we couldn&apos;t find what you were looking for.
        <br />
        <br />
        <Link href="/" className="text-white underline">
          Go home
        </Link>
      </p>
    </main>
  );
}
