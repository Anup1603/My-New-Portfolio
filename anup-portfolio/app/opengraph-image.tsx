import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Full-Stack Developer, Cloud Engineer & AI Application Builder`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0A0F",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(99,102,241,0.25), transparent 50%), radial-gradient(circle at 80% 100%, rgba(34,211,238,0.18), transparent 50%)",
          color: "#FAFAFA",
          fontSize: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#A1A1AA",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            fontSize: 34,
            color: "#A1A1AA",
          }}
        >
          Full-Stack Developer · Cloud Engineer · AI Application Builder
        </div>
        <div
          style={{
            marginTop: 48,
            width: 220,
            height: 8,
            borderRadius: 8,
            backgroundImage:
              "linear-gradient(90deg, #6366F1, #A78BFA, #22D3EE)",
          }}
        />
      </div>
    ),
    size
  );
}
