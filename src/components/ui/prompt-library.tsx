"use client";

import * as React from "react";
import { useState, useMemo, createContext, useContext } from "react";
import { 
  Search, 
  Sparkles, 
  BookOpen, 
  Plus, 
  X, 
  Check, 
  Copy, 
  ChevronRight, 
  Folder, 
  Tag,
  Layers,
  ShieldCheck,
  Cpu,
  Scale
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  model?: string;
  isCustom?: boolean;
}

interface PromptLibraryContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  prompts: Prompt[];
  onSelectPrompt: (prompt: Prompt) => void;
  isCreateOpen: boolean;
  setIsCreateOpen: (open: boolean) => void;
  onAddPrompt?: (prompt: Prompt) => void;
}

const PromptLibraryContext = createContext<PromptLibraryContextType | null>(null);

export function usePromptLibrary() {
  const context = useContext(PromptLibraryContext);
  if (!context) {
    throw new Error("usePromptLibrary must be used within a PromptLibrary");
  }
  return context;
}

export interface PromptLibraryProps {
  children: React.ReactNode;
  prompts: Prompt[];
  onPromptsChange?: (prompts: Prompt[]) => void;
  onSelect?: (prompt: Prompt) => void;
  className?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function PromptLibrary({
  children,
  prompts,
  onPromptsChange,
  onSelect,
  className,
  isOpen: controlledIsOpen,
  onOpenChange,
}: PromptLibraryProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  const setIsOpen = (open: boolean) => {
    if (!isControlled) setUncontrolledIsOpen(open);
    onOpenChange?.(open);
  };

  const handleSelectPrompt = (prompt: Prompt) => {
    onSelect?.(prompt);
    setIsOpen(false);
  };

  const handleAddPrompt = (newPrompt: Prompt) => {
    const updated = [newPrompt, ...prompts];
    onPromptsChange?.(updated);
    setIsCreateOpen(false);
  };

  return (
    <PromptLibraryContext.Provider
      value={{
        isOpen,
        setIsOpen,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        prompts,
        onSelectPrompt: handleSelectPrompt,
        isCreateOpen,
        setIsCreateOpen,
        onAddPrompt: handleAddPrompt,
      }}
    >
      <div className={cn("relative inline-block", className)}>{children}</div>
    </PromptLibraryContext.Provider>
  );
}

export function PromptLibraryTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { isOpen, setIsOpen } = usePromptLibrary();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
      className={cn(
        "group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 outline-none select-none",
        isOpen
          ? "bg-white text-black shadow-xs ring-1 ring-white/30 font-bold"
          : "text-neutral-400 hover:bg-neutral-800 hover:text-white",
        className
      )}
      aria-label="Open prompt template library"
    >
      {children || (
        <>
          <Sparkles className="size-3.5 text-[#FF7A1A] group-hover:scale-110 transition-transform" />
          <span>Prompt Library</span>
        </>
      )}
    </button>
  );
}

export function PromptLibraryContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isOpen, setIsOpen } = usePromptLibrary();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-xl overflow-hidden rounded-3xl border border-neutral-800 bg-[#0C1017] text-white shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800/80 bg-[#090D13]">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF7A1A]">
              <BookOpen className="size-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-snug">
                Sovereign AI Prompt Library
              </h3>
              <p className="text-[11px] text-neutral-400 font-normal">
                Pre-configured GEO benchmarks, citations, and security audit templates
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="size-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">{children}</div>
      </div>
    </div>
  );
}

export function PromptLibrarySearch({
  placeholder = "Search GEO, security, citation prompt templates...",
}: {
  placeholder?: string;
}) {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, prompts } =
    usePromptLibrary();

  const categories = useMemo(() => {
    const set = new Set<string>(["All"]);
    prompts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [prompts]);

  return (
    <div className="space-y-3">
      {/* Search Input */}
      <div className="relative flex items-center">
        <Search className="size-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all font-sans"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 text-neutral-400 hover:text-white text-xs"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all duration-150",
              selectedCategory === cat
                ? "bg-white text-black font-semibold shadow-xs"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PromptLibraryList({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function PromptLibraryEmpty() {
  const { prompts, searchQuery, selectedCategory } = usePromptLibrary();

  const filtered = prompts.filter((p) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.prompt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;

    return matchesSearch && matchesCat;
  });

  if (filtered.length > 0) return null;

  return (
    <div className="py-10 text-center space-y-2">
      <div className="size-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 mx-auto">
        <Search className="size-5" />
      </div>
      <p className="text-sm font-medium text-neutral-300">No prompt templates found</p>
      <p className="text-xs text-neutral-500">Try searching for different keywords or category.</p>
    </div>
  );
}

export function PromptLibraryGroup({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  const { selectedCategory, searchQuery, prompts } = usePromptLibrary();

  const hasItems = prompts.some((p) => {
    const matchesCat = heading === "Custom" ? p.isCustom : p.category === heading;
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (!hasItems) return null;
  if (selectedCategory !== "All" && selectedCategory !== heading) return null;

  return (
    <div className="space-y-2 text-left">
      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold px-1">
        {heading}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export function PromptLibraryItem({ prompt }: { prompt: Prompt }) {
  const { onSelectPrompt, searchQuery } = usePromptLibrary();

  const matchesSearch =
    searchQuery.trim() === "" ||
    prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase());

  if (!matchesSearch) return null;

  return (
    <button
      type="button"
      onClick={() => onSelectPrompt(prompt)}
      className="group w-full p-3.5 rounded-2xl bg-neutral-900/70 hover:bg-neutral-800/90 border border-neutral-800/90 hover:border-neutral-700 text-left transition-all duration-200 flex items-start justify-between gap-3"
    >
      <div className="space-y-1 pr-2">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
            {prompt.title}
          </span>
          {prompt.model && (
            <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-neutral-800 text-neutral-300 border border-neutral-700">
              {prompt.model}
            </span>
          )}
        </div>
        <p className="text-xs text-neutral-400 line-clamp-1 leading-snug">
          {prompt.description}
        </p>
        <p className="text-[11px] text-neutral-500 italic line-clamp-1 font-mono">
          &ldquo;{prompt.prompt}&rdquo;
        </p>
      </div>

      <div className="size-7 rounded-xl bg-neutral-800 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 text-neutral-400 flex items-center justify-center shrink-0 transition-colors mt-1">
        <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </button>
  );
}

export function PromptLibraryFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
      {children}
    </div>
  );
}

export function PromptLibraryCreateTrigger() {
  const { setIsCreateOpen } = usePromptLibrary();

  return (
    <button
      type="button"
      onClick={() => setIsCreateOpen(true)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
    >
      <Plus className="size-3.5 text-emerald-400" />
      <span>Add Custom Prompt</span>
    </button>
  );
}

export function PromptLibraryCreateDialog() {
  const { isCreateOpen, setIsCreateOpen, onAddPrompt } = usePromptLibrary();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [promptText, setPromptText] = useState("");
  const [category, setCategory] = useState("Custom");

  if (!isCreateOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !promptText.trim()) return;

    onAddPrompt?.({
      id: `custom-${Date.now()}`,
      title,
      description: description || title,
      prompt: promptText,
      category,
      isCustom: true,
    });

    setTitle("");
    setDescription("");
    setPromptText("");
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl border border-neutral-800 bg-[#0F141D] p-5 text-left text-white shadow-2xl space-y-4"
      >
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <h4 className="text-sm font-bold text-white">Create Custom Prompt Template</h4>
          <button
            type="button"
            onClick={() => setIsCreateOpen(false)}
            className="text-neutral-400 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-3">
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-neutral-400">Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Perplexity Domain Audit"
              className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-neutral-400">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Inspect citation authority on sonar deep model"
              className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-neutral-400">Prompt Text *</label>
            <textarea
              rows={3}
              required
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Type your structured prompt template..."
              className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 resize-none font-mono"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsCreateOpen(false)}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-neutral-400 hover:text-white text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold transition-colors"
            >
              Save Template
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
