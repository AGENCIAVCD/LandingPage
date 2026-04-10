import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #231F20 0%, #2c241d 48%, #ff7700 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            padding: "48px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "24px",
              opacity: 0.88,
            }}
          >
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "999px",
                background: "#FFB500",
              }}
            />
            Você Digital Propaganda
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                fontSize: "84px",
                lineHeight: 1,
                fontWeight: 700,
                maxWidth: "900px",
              }}
            >
              Landing pages de alta conversão para vender mais.
            </div>
            <div
              style={{
                fontSize: "34px",
                lineHeight: 1.35,
                maxWidth: "820px",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Performance, SEO e experiência mobile-first para transformar
              tráfego em leads qualificados.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "24px",
            }}
          >
            {["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "14px 22px",
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
