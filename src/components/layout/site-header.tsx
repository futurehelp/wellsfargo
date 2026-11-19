"use client";

import Image from "next/image";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <aside className="original-sidebar">
        <a className="original-wordmark" href="#top">storyful<span>.</span><small>FROM <b>DOW JONES</b></small></a>
        <div className="sidebar-search"><Search size={27} /></div>
        <nav aria-label="Storyful sections" className="sidebar-nav">
          <strong>Intelligence</strong><a href="#decoded">Risk</a><a href="#decoded">Reputation</a><a href="#decoded">Influence</a><a href="#decoded">Sectors</a><a href="#about">How we work</a>
          <strong>Verified Video</strong><a href="#episodes">Newswire</a><a href="#episodes">Commercial licensing</a><a href="#episodes">Monetize your videos</a>
          <strong>Resources</strong><a href="#episodes">Case studies</a><a href="#about">Press</a><a href="#about">About</a><a href="#newsletter">Careers</a><a href="#newsletter">Contact Us</a>
        </nav>
        <a className="sidebar-login" href="#newsletter">Newswire log in <ArrowUpRight size={18} /></a>
      </aside>
      <div className="header-inner">
        <a className="site-logo" href="#top" aria-label="Chain of Thought home">
          <Image src="/images/logo-light.svg" alt="Chain of Thought" width={150} height={23} priority />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-cta" href="#newsletter">Get the newsletter <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
            <a className="header-cta" href="#newsletter" onClick={() => setOpen(false)}>Get the newsletter <ArrowUpRight size={15} /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
