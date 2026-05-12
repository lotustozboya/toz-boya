import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f8f7f4",
          color: "#1a1a1a",
          fontFamily: "sans-serif",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Header — mark + wordmark + hairline divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg
            viewBox="0 0 200 200"
            width="56"
            height="56"
            fill="#1a1a1a"
            fillRule="evenodd"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 4 14 L 4 4 L 50 4 L 50 14 L 36 14 L 36 158 L 96 158 L 76 178 L 76 192 L 4 192 L 4 178 L 18 178 L 18 14 Z" />
            <path d="M 84 4 L 130 4 Q 158 4 158 48 Q 158 78 138 90 L 138 92 Q 168 100 168 142 Q 168 192 132 192 L 104 192 L 84 172 Z M 116 24 L 124 24 Q 142 24 142 50 Q 142 80 124 80 L 116 80 Z M 116 116 L 124 116 Q 152 116 152 144 Q 152 172 124 172 L 116 172 Z" />
          </svg>
          <div
            style={{
              width: 1,
              height: 36,
              background: "#c9c5bc",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Lotus Boya
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 4.5,
                textTransform: "uppercase",
                color: "#5b5b5b",
                marginTop: 6,
                fontFamily: "monospace",
              }}
            >
              Elektrostatik Boya
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 14,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#b45309",
              fontWeight: 500,
              fontFamily: "monospace",
            }}
          >
            Çorlu OSB · Tekirdağ / EST. 2014 / RAL · Jotun
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            Endüstriyel toz boya ve fırın boya çözümleri.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#8c8c8c",
            fontSize: 13,
            fontFamily: "monospace",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          <span>11+ yıllık endüstriyel tecrübe</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
