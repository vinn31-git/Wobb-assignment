import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SelectedProfiles } from "./selectedProfiles";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight text-gray-900"
          >
            Influencer Search
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {title && (
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h1>
        )}

        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          <main className="flex-1">
            {children}
          </main>

          <aside className="w-full lg:w-80">
            <div className="sticky top-24">
              <SelectedProfiles />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}