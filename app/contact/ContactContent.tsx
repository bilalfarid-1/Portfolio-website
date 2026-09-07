"use client";

import { useState } from "react";
import { Slide } from "../animation/Slide";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
  BiEnvelope,
  BiCopy,
  BiCheck,
  BiPhone,
  BiMap,
} from "react-icons/bi";

export default function ContactContent() {
  const [copied, setCopied] = useState(false);
  const email = "bilaldrosh1@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mt-8 max-w-5xl">
      <Slide delay={0.1}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-16">
          {/* Quick Connect Card */}
          <div className="dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-gitlabmono dark:bg-green-950/40 bg-green-50 dark:text-green-300 text-green-700 border dark:border-green-800/60 border-green-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Available for New Projects & Full-Time Roles</span>
              </div>

              <h2 className="font-incognito text-3xl font-bold tracking-tight mb-4">
                Let&apos;s build something great together.
              </h2>
              <p className="dark:text-zinc-400 text-zinc-600 text-base leading-relaxed mb-8">
                Whether you need a high-performance backend API with FastAPI, a custom machine learning model, a robust web scraping pipeline, or a full-stack Next.js application, I&apos;m ready to help.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t dark:border-zinc-800 border-zinc-200">
              <div className="flex items-center gap-3 text-sm dark:text-zinc-300 text-zinc-700">
                <BiMap className="text-xl dark:text-primary-color text-secondary-color shrink-0" />
                <span>Drosh, Khyber Pakhtunkhwa, Pakistan (UTC+5)</span>
              </div>
              <div className="flex items-center gap-3 text-sm dark:text-zinc-300 text-zinc-700">
                <BiEnvelope className="text-xl dark:text-primary-color text-secondary-color shrink-0" />
                <span>bilaldrosh1@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm dark:text-zinc-300 text-zinc-700">
                <BiPhone className="text-xl dark:text-primary-color text-secondary-color shrink-0" />
                <span>+92 346 4619093</span>
              </div>
            </div>
          </div>

          {/* Action Channels Card */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Email Channel */}
            <div className="dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 dark:bg-zinc-800 bg-zinc-200 rounded-lg text-2xl dark:text-primary-color text-secondary-color">
                  <BiEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Direct Email</h3>
                  <p className="text-xs font-gitlabmono dark:text-zinc-400 text-zinc-500">
                    bilaldrosh1@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-2 rounded-lg text-xs font-gitlabmono flex items-center gap-1 dark:bg-zinc-800 bg-zinc-200 dark:hover:bg-zinc-700 hover:bg-zinc-300 transition"
                  title="Copy email to clipboard"
                >
                  {copied ? <BiCheck className="text-green-500 text-base" /> : <BiCopy className="text-base" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
                <a
                  href="mailto:bilaldrosh1@gmail.com"
                  className="px-3 py-2 rounded-lg text-xs font-semibold dark:bg-zinc-100 bg-zinc-900 dark:text-zinc-900 text-zinc-100 hover:opacity-90 transition"
                >
                  Write
                </a>
              </div>
            </div>

            {/* WhatsApp Channel */}
            <div className="dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 dark:bg-green-950/40 bg-green-50 rounded-lg text-2xl text-green-500">
                  <BiLogoWhatsapp />
                </div>
                <div>
                  <h3 className="font-semibold text-base">WhatsApp Direct</h3>
                  <p className="text-xs font-gitlabmono dark:text-zinc-400 text-zinc-500">
                    Instant message on mobile & web
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/923464619093"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-green-600 text-white hover:bg-green-700 transition"
              >
                Chat Now
              </a>
            </div>

            {/* GitHub Profile */}
            <div className="dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 dark:bg-zinc-800 bg-zinc-200 rounded-lg text-2xl dark:text-zinc-200 text-zinc-800">
                  <BiLogoGithub />
                </div>
                <div>
                  <h3 className="font-semibold text-base">GitHub Profile</h3>
                  <p className="text-xs font-gitlabmono dark:text-zinc-400 text-zinc-500">
                    @bilalfarid-1 • 8 Verified Repositories
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/bilalfarid-1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold dark:bg-zinc-800 bg-zinc-200 dark:hover:bg-zinc-700 hover:bg-zinc-300 transition"
              >
                Follow
              </a>
            </div>

            {/* LinkedIn Profile */}
            <div className="dark:bg-primary-bg bg-zinc-50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 dark:bg-blue-950/40 bg-blue-50 rounded-lg text-2xl text-blue-500">
                  <BiLogoLinkedinSquare />
                </div>
                <div>
                  <h3 className="font-semibold text-base">LinkedIn</h3>
                  <p className="text-xs font-gitlabmono dark:text-zinc-400 text-zinc-500">
                    Professional network & background
                  </p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/bilalfarid1/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold dark:bg-zinc-800 bg-zinc-200 dark:hover:bg-zinc-700 hover:bg-zinc-300 transition"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
