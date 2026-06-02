import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "José Henrique | Portfólio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#05070c",
          padding: "80px",
          position: "relative",
          border: "16px solid #090d16",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29, 78, 216, 0.08) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#2563eb",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "#2563eb",
              fontWeight: 600,
              letterSpacing: "3px",
            }}
          >
            PORTFÓLIO PESSOAL
          </span>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 16px 0",
            lineHeight: 1.1,
          }}
        >
          José Henrique
        </h1>

        <p
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            margin: "0 0 48px 0",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Graduando em Engenharia de Software e Desenvolvedor Web Full Stack.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {["Node.JS", "Next.JS", "TypeScript", "TailwindCSS", "React", "Shadcn", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "15px",
                color: "#64748b",
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                padding: "8px 18px",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.03)",
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
