"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { getStarCount } from "~/app/_actions/github";
import { PrivateReposDialog } from "./private-repos-dialog";
import { ApiKeyDialog } from "./api-key-dialog";

export function Header() {
  const [isPrivateReposDialogOpen, setIsPrivateReposDialogOpen] =
    useState(false);
  const [isApiKeyDialogOpen, setIsApiKeyDialogOpen] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    void getStarCount().then(setStarCount);
  }, []);

  const formatStarCount = (count: number | null) => {
    if (!count) return "10.0k";
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const handlePrivateReposSubmit = (pat: string) => {
    // Store the PAT in localStorage
    localStorage.setItem("github_pat", pat);
    setIsPrivateReposDialogOpen(false);
  };

  const handleApiKeySubmit = (apiKey: string) => {
    localStorage.setItem("openai_key", apiKey);
    setIsApiKeyDialogOpen(false);
  };

  return (
    <header className="border-b-[3px] border-black">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🇮🇳</span>
          <span className="text-lg font-bold sm:text-xl">
            <span className="text-black transition-colors duration-200 hover:text-gray-600">
              Intern
            </span>
            <span className="text-purple-600 transition-colors duration-200 hover:text-purple-500">
              Setu
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          {/* Language Dropdown */}
          <div className="relative hidden sm:block">
            <select className="appearance-none bg-transparent text-xs font-medium text-black border border-gray-300 rounded px-2 py-1 hover:border-purple-600 focus:outline-none focus:border-purple-600 cursor-pointer">
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="ta">தமிழ்</option>
            </select>
          </div>
          
          <Link
            href="/intern-setu/explore"
            className="text-sm font-medium text-black transition-transform hover:translate-y-[-2px] hover:text-purple-600"
          >
            <span className="sm:hidden">Students</span>
            <span className="hidden sm:inline">For Students</span>
          </Link>
          
          {/* AI Interview Buttons */}
          <div className="flex items-center gap-2">
            {/* AI Video Interview Button */}
            <Link
              href="https://remasto.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border-2 border-black bg-purple-400 px-3 py-2 text-xs font-bold text-black shadow-[3px_3px_0_0_#000000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-purple-300 hover:shadow-[4px_4px_0_0_#000000]"
            >
              <span className="text-sm">🎥</span>
              <span className="hidden lg:inline">Video Interview</span>
              <span className="hidden sm:inline lg:hidden">Video</span>
              <span className="sm:hidden">🎥</span>
            </Link>
            
            {/* AI Text Interview Button */}
            <Link
              href="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/25/04/20250925044745-H6X08OYM.json"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border-2 border-black bg-purple-500 px-3 py-2 text-xs font-bold text-white shadow-[3px_3px_0_0_#000000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-purple-400 hover:shadow-[4px_4px_0_0_#000000]"
            >
              <span className="text-sm">💬</span>
              <span className="hidden lg:inline">Text Interview</span>
              <span className="hidden sm:inline lg:hidden">Text</span>
              <span className="sm:hidden">💬</span>
            </Link>
          </div>
        </nav>

        <PrivateReposDialog
          isOpen={isPrivateReposDialogOpen}
          onClose={() => setIsPrivateReposDialogOpen(false)}
          onSubmit={handlePrivateReposSubmit}
        />
        <ApiKeyDialog
          isOpen={isApiKeyDialogOpen}
          onClose={() => setIsApiKeyDialogOpen(false)}
          onSubmit={handleApiKeySubmit}
        />
      </div>
    </header>
  );
}
