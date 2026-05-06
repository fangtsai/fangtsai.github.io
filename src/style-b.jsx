// Style B — Terminal / Developer aesthetic
// Mono everywhere, dark background, bright green accent, ASCII flair.

import React from "react";

const StyleBStyles = {
  shell: {
    width: 1280,
    height: 820,
    background: "#0c0d0e",
    color: "#e7e5e4",
    fontFamily: "var(--pf-mono, 'JetBrains Mono', ui-monospace, monospace)",
    fontSize: 13,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column"
  },
  windowChrome: {
    display: "flex",
    alignItems: "center",
    background: "#161718",
    borderBottom: "1px solid #27272a",
    padding: "10px 16px",
    gap: 14,
    flexShrink: 0
  },
  dot: { width: 10, height: 10, borderRadius: "50%" },
  tabs: {
    display: "flex",
    background: "#0c0d0e",
    borderBottom: "1px solid #27272a",
    flexShrink: 0
  },
  tab: {
    padding: "10px 18px",
    fontSize: 12,
    color: "#78716c",
    cursor: "pointer",
    borderRight: "1px solid #27272a"
  },
  tabActive: {
    color: "var(--accent-b)",
    background: "#161718",
    borderTop: "1px solid var(--accent-b)"
  },
  body: { flex: 1, overflow: "hidden", position: "relative" }
};

function StyleB_Chrome({ lang, setLang }) {
  return (
    <div style={StyleBStyles.windowChrome}>
      <div style={{ display: "flex", gap: 6 }}>
        <span style={{ ...StyleBStyles.dot, background: "#ef4444" }} />
        <span style={{ ...StyleBStyles.dot, background: "#eab308" }} />
        <span style={{ ...StyleBStyles.dot, background: "#22c55e" }} />
      </div>
      <div style={{ flex: 1, textAlign: "center", color: "#78716c", fontSize: 12 }}>
        fang@portfolio: ~/work
      </div>
      <div style={{ display: "flex", gap: 4, fontSize: 11 }}>
        <span
          style={{
            padding: "3px 8px",
            cursor: "pointer",
            color: lang === "zh" ? "var(--accent-b)" : "#78716c",
            border: "1px solid " + (lang === "zh" ? "var(--accent-b)" : "#27272a")
          }}
          onClick={() => setLang("zh")}>
          
          zh
        </span>
        <span
          style={{
            padding: "3px 8px",
            cursor: "pointer",
            color: lang === "en" ? "var(--accent-b)" : "#78716c",
            border: "1px solid " + (lang === "en" ? "var(--accent-b)" : "#27272a")
          }}
          onClick={() => setLang("en")}>
          
          en
        </span>
      </div>
    </div>);

}

function StyleB_Tabs({ screen, setScreen, lang }) {
  const items = [
  { id: "home", label: "~/index" },
  { id: "works", label: "~/works" },
  { id: "about", label: "~/about" }];

  const cur = screen.startsWith("work:") ? "works" : screen;
  return (
    <div style={StyleBStyles.tabs}>
      {items.map((it) =>
      <div
        key={it.id}
        onClick={() => setScreen(it.id)}
        style={{ ...StyleBStyles.tab, ...(cur === it.id ? StyleBStyles.tabActive : {}) }}>
        
          {it.label}
        </div>
      )}
      <div style={{ flex: 1, borderBottom: "1px solid #27272a" }} />
    </div>);

}

const ASCII_LOGO = `
 ███████╗ █████╗ ███╗   ██╗ ██████╗
 ██╔════╝██╔══██╗████╗  ██║██╔════╝
 █████╗  ███████║██╔██╗ ██║██║  ███╗
 ██╔══╝  ██╔══██║██║╚██╗██║██║   ██║
 ██║     ██║  ██║██║ ╚████║╚██████╔╝
 ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝`;

function StyleB_Home({ data, lang, openWork, setScreen }) {
  const T = (o) => o[lang];
  return (
    <div style={{ padding: "32px 40px", height: "100%", overflow: "auto", boxSizing: "border-box" }}>
      <pre
        style={{
          color: "var(--accent-b)",
          fontSize: 11,
          lineHeight: 1.1,
          margin: 0,
          marginBottom: 20
        }}>
        {ASCII_LOGO}</pre>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div>
          <div style={{ color: "#78716c" }}>$ whoami</div>
          <div style={{ marginBottom: 16, fontSize: 14 }}>
            <span style={{ color: "var(--accent-b)" }}>{T(data.name)}</span>
            <span style={{ color: "#78716c" }}> · {T(data.role)}</span>
          </div>

          <div style={{ color: "#78716c" }}>$ cat status.txt</div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: "var(--accent-b)" }}>●</span> {T(data.available)}
          </div>

          <div style={{ color: "#78716c" }}>$ cat tagline.md</div>
          <div style={{ marginBottom: 16, fontSize: 15, lineHeight: 1.6, color: "#e7e5e4" }}>
            {T(data.tagline)}
          </div>

          <div style={{ color: "#78716c" }}>$ ls ./contact/</div>
          <div style={{ lineHeight: 1.7 }}>
            <div>
              <span style={{ color: "#78716c" }}>email   </span>
              <span style={{ color: "var(--accent-b)" }}>{data.contact.email}</span>
            </div>
            <div>
              <span style={{ color: "#78716c" }}>github  </span>
              <span style={{ color: "var(--accent-b)" }}>{data.contact.github}</span>
            </div>
          </div>
        </div>

        <div>
          <div style={{ color: "#78716c", marginBottom: 8 }}>
            $ ls -lt ./works/
          </div>
          <div
            style={{
              border: "1px solid #27272a",
              padding: 14,
              background: "#101113"
            }}>
            
            <div
              style={{
                color: "#78716c",
                borderBottom: "1px dashed #27272a",
                paddingBottom: 6,
                marginBottom: 8,
                display: "grid",
                gridTemplateColumns: "60px 1fr 60px",
                gap: 8
              }}>
              
              <span>year</span>
              <span>name</span>
              <span style={{ textAlign: "right" }}>open</span>
            </div>
            {data.works.map((w) =>
            <div
              key={w.id}
              onClick={() => openWork(w.id)}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 60px",
                gap: 8,
                padding: "6px 0",
                cursor: "pointer",
                alignItems: "center"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-b)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#e7e5e4"}>
              
                <span style={{ color: "#78716c" }}>{w.year}</span>
                <span>{T(w.title)}</span>
                <span style={{ textAlign: "right", color: "var(--accent-b)" }}>→</span>
              </div>
            )}
          </div>

          <div
            onClick={() => setScreen("works")}
            style={{
              marginTop: 14,
              color: "var(--accent-b)",
              cursor: "pointer",
              display: "inline-block"
            }}>
            
            $ cd ./works/ <span style={{ animation: "blink 1s step-end infinite" }}>▊</span>
          </div>
        </div>
      </div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>);

}

function StyleB_Works({ data, lang, openWork }) {
  const T = (o) => o[lang];
  return (
    <div style={{ padding: "32px 40px", height: "100%", overflow: "auto", boxSizing: "border-box" }}>
      <div style={{ color: "#78716c", marginBottom: 8 }}>
        $ find ./works -type project | sort
      </div>
      <div
        style={{
          color: "var(--accent-b)",
          marginBottom: 18,
          fontSize: 12
        }}>
        
        {data.works.length} {lang === "zh" ? "個專案" : "results"}
      </div>

      <div
        style={{
          border: "1px solid #27272a",
          background: "#101113"
        }}>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "32px 60px 60px 1fr 280px",
            gap: 14,
            padding: "10px 14px",
            color: "#78716c",
            borderBottom: "1px solid #27272a",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.08em"
          }}>
          
          <span>id</span>
          <span>phase</span>
          <span>year</span>
          <span>name</span>
          <span>stack</span>
        </div>
        {data.works.map((w, i) =>
        <div
          key={w.id}
          onClick={() => openWork(w.id)}
          style={{
            display: "grid",
            gridTemplateColumns: "32px 60px 60px 1fr 280px",
            gap: 14,
            padding: "12px 14px",
            borderBottom: "1px solid #1c1d20",
            cursor: "pointer",
            alignItems: "center",
            fontSize: 13
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "#161718"}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
          
            <span style={{ color: "var(--accent-b)" }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ color: "#78716c" }}>{w.phase}</span>
            <span style={{ color: "#78716c" }}>{w.year}</span>
            <span>{T(w.title)}</span>
            <span style={{ color: "#78716c", fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {w.stack.slice(0, 4).join(" · ")}
            </span>
          </div>
        )}
      </div>
    </div>);

}

function StyleB_About({ data, lang }) {
  const T = (o) => o[lang];
  return (
    <div style={{ padding: "32px 40px", height: "100%", overflow: "auto", boxSizing: "border-box" }}>
      <div style={{ color: "#78716c" }}>$ cat about.md</div>
      <h2 style={{ color: "var(--accent-b)", fontSize: 22, margin: "8px 0 16px", fontWeight: 500 }}>
        # {lang === "zh" ? "關於我" : "About"}
      </h2>
      <div style={{ marginBottom: 24, lineHeight: 1.7, fontSize: 13.5 }}>
        {data.about[lang].map((line, i) =>
        <div key={i} style={{ marginBottom: 6 }}>
            <span style={{ color: "var(--accent-b)" }}>›</span> {line}
          </div>
        )}
      </div>

      <div style={{ color: "#78716c", marginTop: 8 }}>$ cat skills.md</div>
      <h2 style={{ color: "var(--accent-b)", fontSize: 22, margin: "8px 0 16px", fontWeight: 500 }}>
        # {lang === "zh" ? "技能" : "Skills"}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        {data.skills.map((s) =>
        <div
          key={s.heading.en}
          style={{ border: "1px solid #27272a", background: "#101113", padding: 14 }}>
          
            <div
            style={{
              color: "var(--accent-b)",
              fontSize: 12,
              marginBottom: 10,
              textTransform: "uppercase",
              letterSpacing: "0.08em"
            }}>
            
              ## {s.heading[lang]}
            </div>
            <div style={{ fontSize: 11.5, color: "#d6d3d1", lineHeight: 1.85 }}>
              {s.items.map((it, i) =>
            <div key={i}>
                  <span style={{ color: "#78716c" }}>-</span> {it}
                </div>
            )}
            </div>
          </div>
        )}
      </div>
    </div>);

}

function StyleB_WorkDetail({ data, lang, workId, setScreen }) {
  const T = (o) => o[lang];
  const w = data.works.find((x) => x.id === workId) || data.works[0];
  const idx = data.works.findIndex((x) => x.id === w.id);
  const next = data.works[(idx + 1) % data.works.length];
  return (
    <div style={{ padding: "28px 40px", height: "100%", overflow: "auto", boxSizing: "border-box" }}>
      <div
        onClick={() => setScreen("works")}
        style={{ color: "#78716c", cursor: "pointer", marginBottom: 14 }}>
        
        $ cd ../
      </div>

      <div style={{ color: "#78716c" }}>
        $ cat ./{w.id}/README.md
      </div>
      <h1
        style={{
          color: "var(--accent-b)",
          fontSize: 28,
          fontWeight: 500,
          margin: "10px 0 4px"
        }}>
        
        # {T(w.title)}
      </h1>
      <div style={{ color: "#78716c", marginBottom: 18, fontSize: 12 }}>
        phase {w.phase} · {w.year} · {T(w.kicker)}
      </div>

      {(() => {
        const imgs = w.images || (w.image ? [w.image] : []);
        const single = imgs.length === 1;
        return (
          <div
            style={{
              height: 220,
              background: "#101113",
              border: "1px solid #27272a",
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: imgs.length > 1 ? 12 : 0,
              color: "#52525b",
              fontSize: 12,
              letterSpacing: "0.2em",
              overflow: "hidden",
              ...(imgs.length === 0 && {
                backgroundImage:
                  "linear-gradient(#161718 1px, transparent 1px), linear-gradient(90deg, #161718 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              })
            }}>
            {imgs.length === 0 ?
            <span>[ {w.placeholder} ]</span> :

            imgs.map((src, i) =>
            <img
              key={i}
              src={src}
              alt={T(w.title)}
              style={{
                height: "100%",
                width: single ? "100%" : "auto",
                maxWidth: "100%",
                objectFit: "contain",
                display: "block"
              }} />
            )
            }
          </div>);

      })()}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 32 }}>
        <div>
          <div style={{ color: "#78716c", marginBottom: 6 }}>## {lang === "zh" ? "概要" : "Summary"}</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: "#e7e5e4" }}>
            {T(w.summary)}
          </div>
        </div>
        <div>
          <div style={{ color: "#78716c", marginBottom: 6 }}>## stack</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {w.stack.map((s) =>
            <span
              key={s}
              style={{
                fontSize: 11,
                padding: "3px 8px",
                border: "1px solid #27272a",
                color: "var(--accent-b)"
              }}>
              
                {s}
              </span>
            )}
          </div>

          <div style={{ color: "#78716c", margin: "16px 0 6px" }}>## role</div>
          <div style={{ fontSize: 13 }}>{T(w.role)}</div>
        </div>
      </div>

      <div
        onClick={() => setScreen("work:" + next.id)}
        style={{
          marginTop: 32,
          paddingTop: 14,
          borderTop: "1px solid #27272a",
          cursor: "pointer",
          color: "#78716c"
        }}>
        
        $ open ./{next.id}/ <span style={{ color: "var(--accent-b)" }}>→ {T(next.title)}</span>
      </div>
    </div>);

}

function StyleB({ data }) {
  const [lang, setLang] = React.useState("zh");
  const [screen, setScreen] = React.useState("home");
  const openWork = (id) => setScreen("work:" + id);
  let body;
  if (screen === "home") body = <StyleB_Home data={data} lang={lang} openWork={openWork} setScreen={setScreen} />;else
  if (screen === "works") body = <StyleB_Works data={data} lang={lang} openWork={openWork} />;else
  if (screen === "about") body = <StyleB_About data={data} lang={lang} />;else
  if (screen.startsWith("work:"))
  body = <StyleB_WorkDetail data={data} lang={lang} workId={screen.slice(5)} setScreen={setScreen} />;

  return (
    <div style={StyleBStyles.shell}>
      <StyleB_Chrome lang={lang} setLang={setLang} />
      <StyleB_Tabs screen={screen} setScreen={setScreen} lang={lang} />
      <div style={StyleBStyles.body}>{body}</div>
    </div>);

}

export { StyleB };