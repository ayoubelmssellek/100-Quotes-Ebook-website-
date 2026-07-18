"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          background: "#ffffff",
          color: "#1a1a1a",
        }}
      >
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              Application error
            </h1>
            <p style={{ color: "#5d5b54", marginBottom: "1.5rem" }}>
              {error.message || "A critical error occurred."}
            </p>
            <button
              type="button"
              onClick={reset}
              style={{
                background: "#5645d4",
                color: "#fff",
                border: 0,
                borderRadius: 8,
                padding: "10px 18px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
