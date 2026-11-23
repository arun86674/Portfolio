import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode2, Terminal as TerminalIcon, GitBranch, CheckCircle2, Copy, Check } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface CodeSnippet {
  filename: string;
  language: string;
  lines: {
    num: number;
    tokens: { text: string; color: string }[];
  }[];
}

const snippets: Record<string, CodeSnippet> = {
  'Developer.java': {
    filename: 'Developer.java',
    language: 'Java',
    lines: [
      {
        num: 1,
        tokens: [
          { text: '@Service', color: 'text-accent-cyan' },
        ],
      },
      {
        num: 2,
        tokens: [
          { text: 'public class ', color: 'text-violet-400 font-semibold' },
          { text: 'ArunK ', color: 'text-sky-300 font-bold' },
          { text: 'implements ', color: 'text-violet-400' },
          { text: 'SoftwareEngineer ', color: 'text-amber-300' },
          { text: '{', color: 'text-slate-300' },
        ],
      },
      {
        num: 3,
        tokens: [
          { text: '    private final ', color: 'text-violet-400' },
          { text: 'Stack ', color: 'text-sky-300' },
          { text: 'techStack = ', color: 'text-slate-200' },
          { text: 'Stack.of(', color: 'text-amber-200' },
        ],
      },
      {
        num: 4,
        tokens: [
          { text: '        "Java", "Spring Boot", "React", "PostgreSQL"', color: 'text-emerald-400' },
        ],
      },
      {
        num: 5,
        tokens: [
          { text: '    );', color: 'text-slate-300' },
        ],
      },
      {
        num: 6,
        tokens: [
          { text: '    public ', color: 'text-violet-400' },
          { text: 'Solution ', color: 'text-sky-300' },
          { text: 'buildSystem', color: 'text-amber-300' },
          { text: '(Problem problem) {', color: 'text-slate-300' },
        ],
      },
      {
        num: 7,
        tokens: [
          { text: '        return ', color: 'text-violet-400' },
          { text: 'problem.analyze()', color: 'text-sky-300' },
          { text: '.optimize()', color: 'text-sky-300' },
          { text: '.ship();', color: 'text-sky-300' },
        ],
      },
      {
        num: 8,
        tokens: [
          { text: '    }', color: 'text-slate-300' },
        ],
      },
      {
        num: 9,
        tokens: [
          { text: '}', color: 'text-slate-300' },
        ],
      },
    ],
  },
  'EzyConnect.tsx': {
    filename: 'EzyConnect.tsx',
    language: 'TypeScript',
    lines: [
      {
        num: 1,
        tokens: [
          { text: 'import ', color: 'text-violet-400' },
          { text: '{ useJobMatcher } ', color: 'text-sky-300' },
          { text: 'from ', color: 'text-violet-400' },
          { text: '"@ezyconnect/core"', color: 'text-emerald-400' },
          { text: ';', color: 'text-slate-300' },
        ],
      },
      {
        num: 2,
        tokens: [
          { text: 'export const ', color: 'text-violet-400' },
          { text: 'LocalJobs = ', color: 'text-sky-300 font-bold' },
          { text: '() => {', color: 'text-slate-300' },
        ],
      },
      {
        num: 3,
        tokens: [
          { text: '  const ', color: 'text-violet-400' },
          { text: '{ matchNearby } = ', color: 'text-slate-200' },
          { text: 'useJobMatcher(', color: 'text-amber-300' },
          { text: '{ radius: 10 }', color: 'text-emerald-400' },
          { text: ');', color: 'text-slate-300' },
        ],
      },
      {
        num: 4,
        tokens: [
          { text: '  return ', color: 'text-violet-400' },
          { text: '<JobFeed ', color: 'text-accent-cyan font-semibold' },
          { text: 'stream={', color: 'text-slate-200' },
          { text: 'matchNearby', color: 'text-amber-200' },
          { text: '} />;', color: 'text-accent-cyan' },
        ],
      },
      {
        num: 5,
        tokens: [
          { text: '};', color: 'text-slate-300' },
        ],
      },
    ],
  },
};

export default function AnimatedTerminal() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'Developer.java' | 'EzyConnect.tsx'>('Developer.java');
  const [copied, setCopied] = useState(false);
  const [visibleLineCount, setVisibleLineCount] = useState(
    prefersReducedMotion ? snippets[activeTab].lines.length : 0
  );

  const currentSnippet = snippets[activeTab];

  // Progressive typing effect when active tab changes
  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLineCount(currentSnippet.lines.length);
      return;
    }

    setVisibleLineCount(0);
    let line = 0;
    const interval = setInterval(() => {
      line++;
      setVisibleLineCount(line);
      if (line >= currentSnippet.lines.length) {
        clearInterval(interval);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [activeTab, currentSnippet, prefersReducedMotion]);

  const handleCopy = () => {
    const rawText = currentSnippet.lines
      .map((l) => l.tokens.map((t) => t.text).join(''))
      .join('\n');
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg select-none"
    >
      {/* Editor Window Frame */}
      <div className="relative rounded-2xl overflow-hidden bg-midnight-950/90 border border-white/[0.12] shadow-2xl shadow-accent-indigo/15 backdrop-blur-2xl">
        
        {/* Window Title & Tabs Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.08]">
          
          {/* Mac window dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:brightness-125 transition-all" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:brightness-125 transition-all" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:brightness-125 transition-all" />
          </div>

          {/* Interactive File Tabs */}
          <div className="flex items-center gap-1">
            {Object.keys(snippets).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-white/[0.08] text-white border border-white/10 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <FileCode2 size={13} className={isActive ? 'text-accent-indigo' : 'text-slate-500'} />
                  <span>{key}</span>
                </button>
              );
            })}
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            title="Copy code"
            aria-label="Copy snippet"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Code Canvas Area */}
        <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed min-h-[280px] bg-midnight-950/70 overflow-x-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {currentSnippet.lines.slice(0, visibleLineCount).map((line) => (
                <div key={line.num} className="flex items-start gap-4 py-0.5 hover:bg-white/[0.02] rounded px-1 -mx-1">
                  {/* Line Number */}
                  <span className="text-slate-600 select-none text-right w-5 flex-shrink-0 text-[11px] pt-0.5">
                    {line.num}
                  </span>

                  {/* Line Tokens */}
                  <div className="flex-1 whitespace-pre">
                    {line.tokens.map((tok, i) => (
                      <span key={i} className={tok.color}>
                        {tok.text}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Blinking typing cursor */}
              <div className="flex items-center gap-4 py-0.5 px-1 -mx-1">
                <span className="text-slate-600 select-none text-right w-5 flex-shrink-0 text-[11px]">
                  {visibleLineCount + 1}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.75, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-2 h-4 bg-accent-cyan/80 rounded-sm"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Editor Bottom Status Bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-white/[0.02] border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-accent-indigo">
              <GitBranch size={12} />
              <span>main</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={12} />
              <span>0 errors</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>UTF-8</span>
            <span className="text-slate-300 font-medium">{currentSnippet.language}</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
