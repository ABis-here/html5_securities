export default function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
      <header style={{ padding: "24px 16px", borderBottom: "1px solid #eee" }}>
        <h1 style={{ margin: 0 }}>Augustas Baublys</h1>
        <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
          Studentas • Programavimas • Informacinės sistemos
        </p>
      </header>

      <section style={{ padding: "32px 16px", maxWidth: 900, margin: "0 auto" }}>
        <h2>Sveikas atvykęs 👋</h2>
        <p>
          Čia – mano pirmasis puslapis, talpinamas per <b>Vercel</b>. Šį tekstą redaguoju
          faile <code>src/App.tsx</code>. Kiekvieną kartą išsaugojus (Commit) –
          svetainė automatiškai atsinaujina.
        </p>

        <div style={{ display: "grid", gap: 16, marginTop: 20 }}>
          <article style={{ padding: 16, border: "1px solid #eee", borderRadius: 12 }}>
            <h3 style={{ marginTop: 0 }}>Apie mane</h3>
            <p>
              Domiuosi C++ duomenų struktūromis, OS praktikomis ir kuriu mažus projektus.
            </p>
          </article>

          <article style={{ padding: 16, border: "1px solid #eee", borderRadius: 12 }}>
            <h3 style={{ marginTop: 0 }}>Projektai</h3>
            <ul>
              <li>CTF žaidimai (kuriu 10, jau 4 baigti)</li>
              <li>OS užduotys C# / F# / PowerShell</li>
              <li>Vite + React demo (šis puslapis)</li>
            </ul>
          </article>

          <article style={{ padding: 16, border: "1px solid #eee", borderRadius: 12 }}>
            <h3 style={{ marginTop: 0 }}>Kontaktai</h3>
            <p>
              Parašyk man el. paštu arba per GitHub. (Įrašyk kontaktą čia.)
            </p>
          </article>
        </div>
      </section>

      <footer style={{ padding: 24, textAlign: "center", borderTop: "1px solid #eee" }}>
        © {new Date().getFullYear()} Augustas
      </footer>
    </main>
  );
}
