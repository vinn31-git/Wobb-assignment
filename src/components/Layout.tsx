import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SelectedProfiles } from "./SelectedProfiles";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white px-6 py-4 shadow-sm">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Influencer Search
        </Link>

        {title && (
          <h1 className="mt-2 text-xl font-semibold text-gray-700">
            {title}
          </h1>
        )}
      </header>

      <div className="max-w-7xl mx-auto p-6 flex gap-6">
        <main className="flex-1">
          {children}
        </main>

        <aside className="w-80 shrink-0">
          <SelectedProfiles />
        </aside>
      </div>
    </div>
  );
}