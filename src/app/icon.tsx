import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f8f7f4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          width="26"
          height="26"
          fill="#1a1a1a"
          fillRule="evenodd"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 4 14 L 4 4 L 50 4 L 50 14 L 36 14 L 36 158 L 96 158 L 76 178 L 76 192 L 4 192 L 4 178 L 18 178 L 18 14 Z" />
          <path d="M 84 4 L 130 4 Q 158 4 158 48 Q 158 78 138 90 L 138 92 Q 168 100 168 142 Q 168 192 132 192 L 104 192 L 84 172 Z M 116 24 L 124 24 Q 142 24 142 50 Q 142 80 124 80 L 116 80 Z M 116 116 L 124 116 Q 152 116 152 144 Q 152 172 124 172 L 116 172 Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
