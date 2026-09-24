import React from "react";

const cards = [
  { label: "Accounts linked", value: "3" },
  { label: "Monthly inflow", value: "$8,420" },
  { label: "Monthly outflow", value: "$5,130" },
  { label: "Savings rate", value: "39%" },
];

export default function App() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "48px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span
          style={{
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#3a6ea5",
            fontWeight: 600,
          }}
        >
          Findam
        </span>
        <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.2 }}>
          Personal finance overview
        </h1>
        <p style={{ margin: 0, color: "#5b6b80", fontSize: 16 }}>
          Development environment is running.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.label}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 13, color: "#5b6b80" }}>{card.label}</span>
            <strong style={{ fontSize: 24 }}>{card.value}</strong>
          </div>
        ))}
      </section>
    </main>
  );
}
