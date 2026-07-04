import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="aurora-text text-7xl font-bold tracking-tight sm:text-9xl">404</p>
      <h1 className="mt-6 text-2xl font-semibold sm:text-3xl">
        This page drifted out of orbit
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-elevated"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to home
      </Link>
    </div>
  );
}
