import { useState } from "react";

const sections = [
  {
    id: "overview",
    title: "The Problem",
    icon: "⚡",
    content: `Current AI memory systems are broken in one of two ways — they store too much and retrieve by brute force, or they store too little and lose context entirely.

Vector databases index everything and hope similarity search surfaces the right chunk. Summarization pipelines compress and discard. Neither approach mirrors how memory actually works in intelligent systems.

The result: AI assistants that either drown in noise or forget things they should know. Neither is acceptable for long-horizon, relationship-aware intelligence.

What's needed is a memory architecture that knows what to keep, how to organize it, and how to reconstruct context from compressed signals — without hallucinating the gaps.`
  },
  {
    id: "architecture",
    title: "Core Architecture",
    icon: "🌿",
    content: `The Yggdrasil Memory Model takes its name from the World Tree of Norse mythology — a structure that connects all realms, grows over time, and has no single point of failure.

The model has three layers:

HINTS — Dense, compressed semantic anchors distributed across branches. Not a single root, but many fruits hanging from the tree. Each hint is a lossy but information-rich seed that can reconstruct a branch of memory when activated.

BRANCHES — The structural connective tissue. Each branch represents a topic, theme, or subject domain. Branches connect to other branches. They are weighted by frequency of activation and reinforced by use.

THE TREE — The whole living structure. It is never static. Every new conversation either grows new branches, reinforces existing ones, or allows unused branches to decay. The tree is the memory.`
  },
  {
    id: "recollection",
    title: "How Recollection Works",
    icon: "💧",
    content: `Recollection is a water-through-a-maze event.

When a user starts a conversation, keywords and semantic signals are poured into the top of the tree. They flow downward through branches, following paths of least resistance — branches with higher activation weights channel more signal.

This means:
— Exact keyword matches aren't required. Enough semantic pressure from multiple weak matches can activate a branch just as effectively as a single strong match.
— Multiple fruits can activate simultaneously if the query is rich enough.
— Different entry points into the same subject naturally lead to the most relevant hint for that angle of approach.

The recollection doesn't retrieve — it reconstructs. The hint is a seed. The surrounding branch context is the soil. The model grows the memory back from those inputs rather than fetching a stored snapshot.`
  },
  {
    id: "fruits",
    title: "The Fruit Model",
    icon: "🍎",
    content: `Early versions of this architecture imagined a single core hint — one root holding everything. That breaks under real-world complexity.

The fruit model distributes hints across branches. Key properties:

MULTIPLE ANCHORS — A deep conversation about Oracle might have a fruit on the technical branch (database internals), one on the relational branch (how Oracle connects to other topics), and one on the personal branch (what this user specifically cares about within Oracle). Each is a different seed.

WEIGHTED SIGNIFICANCE — Fruits are not equal. A branch that many conversations have reinforced carries heavier fruit — denser, more reliable hints. A branch visited once carries lighter fruit that may decay if never revisited.

LIVING NUTRIENTS — When a new conversation activates a branch and reaches a hint, it doesn't just read the hint. It updates it. The hint absorbs new context, compresses it in, and becomes richer. Memory improves with use.`
  },
  {
    id: "selforganizing",
    title: "Self-Organization",
    icon: "🧠",
    content: `The tree knows what to save because the model observing the conversation has full context about what was significant, surprising, or load-bearing in that exchange. It doesn't need explicit instructions. Significance is inferred from conversational dynamics.

The tree knows what it belongs to because the branch activation threshold handles boundaries automatically. A memory that doesn't activate any existing branch above threshold either seeds a new branch or decays — the tree decides by whether the signal was strong enough to warrant growth.

This means:
— No manual tagging required
— No predefined category structure
— The architecture of memory mirrors the architecture of the knowledge itself`
  },
  {
    id: "holes",
    title: "Known Limitations",
    icon: "⚫",
    content: `Honest accounting of what isn't solved yet:

RECONSTRUCTION VS HALLUCINATION — Hints are lossy by design. When recollection expands from a hint, the model fills gaps. That is indistinguishable from hallucination if the hint is too compressed or the branch context is too sparse. The boundary between reconstruction and confabulation is not yet well-defined.

COLD START — The tree needs time to grow before it becomes useful. Early user experience is worse than a flat vector store because the graph hasn't developed enough structure to route signals well. Mitigation strategies exist but aren't fully designed.

SCALE COST — Spreading activation across a massive graph with thousands of cross-linked trees is computationally expensive. The math hasn't been done to confirm this is viable at production scale without approximation shortcuts that undermine the model's strengths.`
  },
  {
    id: "significance",
    title: "Why This Matters",
    icon: "✦",
    content: `The AI memory field defaulted to vector embeddings because they are mathematically clean and easy to implement. But flat vector stores have no inherent structure — they don't know that two memories are related, that one context leads to another, or that some memories are more foundational than others.

The Yggdrasil Memory Model has structure, growth, and directionality. That is a fundamentally different thing. It is not a retrieval system with a graph wrapper. The graph is the memory.

The closest existing concept is spreading activation from cognitive science — the theory of how human memory retrieval works through associative networks. YMM is a computational implementation of that principle, adapted for language model context.

If feasible at scale, this represents a memory architecture that doesn't just store what an AI knows — it stores how that knowledge is connected, weighted by experience, and shaped by the specific relationships it has formed with individual users.`
  },
  {
    id: "next",
    title: "Next Steps",
    icon: "🚀",
    content: `1. Name is locked: Yggdrasil Memory Model (YMM)

2. Publish — thread first for speed, technical writeup for permanence. Timestamp = proof of origin. The idea only exists publicly once it's published.

3. Prototype path:
— Graph database for tree structure (Neo4j or similar)
— Embedding layer for semantic branch matching
— LLM compression layer for fruit generation
— Activation threshold tuning for boundary detection
— Nutrient update pipeline for hint reinforcement

4. The thesis question to answer in the writeup:
"Can a distributed, graph-structured, self-organizing memory architecture outperform flat vector retrieval on long-horizon, relationship-aware AI assistant tasks?"`
  }
];

export default function YggdrasilNotes() {
  const [active, setActive] = useState("overview");
  const current = sections.find(s => s.id === active);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0e0a",
      fontFamily: "'Georgia', serif",
      color: "#e8e0d0",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2a3a2a",
        padding: "32px 40px 24px",
        background: "linear-gradient(180deg, #0f1a0f 0%, #0a0e0a 100%)"
      }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#4a7a4a", textTransform: "uppercase", marginBottom: 8 }}>
          Conceptual Architecture · April 2026
        </div>
        <h1 style={{
          margin: 0,
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: 400,
          letterSpacing: -1,
          color: "#c8e6c8",
          lineHeight: 1.1
        }}>
          Yggdrasil Memory Model
        </h1>
        <div style={{ marginTop: 8, fontSize: 14, color: "#6a8a6a", fontStyle: "italic" }}>
          A graph-structured, self-organizing AI memory architecture
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <div style={{
          width: 220,
          borderRight: "1px solid #1a2a1a",
          padding: "24px 0",
          flexShrink: 0,
          background: "#080c08"
        }}>
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                padding: "10px 20px",
                background: active === s.id ? "#1a2e1a" : "transparent",
                border: "none",
                borderLeft: active === s.id ? "2px solid #4a9a4a" : "2px solid transparent",
                color: active === s.id ? "#a0d4a0" : "#5a7a5a",
                cursor: "pointer",
                textAlign: "left",
                fontSize: 13,
                transition: "all 0.15s"
              }}
            >
              <span style={{ fontSize: 16 }}>{s.icon}</span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: "40px 48px", overflowY: "auto" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28
          }}>
            <span style={{ fontSize: 28 }}>{current.icon}</span>
            <h2 style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 400,
              color: "#c8e6c8",
              letterSpacing: -0.5
            }}>{current.title}</h2>
          </div>

          <div style={{
            fontSize: 15,
            lineHeight: 1.9,
            color: "#b0c8b0",
            maxWidth: 680,
            whiteSpace: "pre-line"
          }}>
            {current.content.split('\n').map((line, i) => {
              if (line.match(/^[A-Z][A-Z\s]+—/)) {
                const [label, ...rest] = line.split('—');
                return (
                  <p key={i} style={{ margin: "16px 0 8px" }}>
                    <span style={{ color: "#6abf6a", fontFamily: "monospace", fontSize: 13, letterSpacing: 1 }}>
                      {label.trim()}
                    </span>
                    <span style={{ color: "#7a9a7a" }}>—</span>
                    {rest.join('—')}
                  </p>
                );
              }
              if (line.startsWith('—')) {
                return (
                  <p key={i} style={{ margin: "6px 0", paddingLeft: 16, borderLeft: "1px solid #2a4a2a", color: "#8aaa8a" }}>
                    {line}
                  </p>
                );
              }
              if (line.trim() === '') return <br key={i} />;
              return <p key={i} style={{ margin: "8px 0" }}>{line}</p>;
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1a2a1a",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#080c08",
        fontSize: 12,
        color: "#3a5a3a"
      }}>
        <span>YMM · Simon Olawuyi Abayomi · 2026</span>
        <span style={{ fontStyle: "italic" }}>Ideas are only stolen if they stay in conversation.</span>
      </div>
    </div>
  );
}
