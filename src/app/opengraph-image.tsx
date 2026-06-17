import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Taukei Enterprises — Building Businesses. Creating Impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1628",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#C9A84C",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://taukeienterprises.com/logo-transparent.png"
          width={180}
          height={180}
          style={{ objectFit: "contain", marginBottom: 32 }}
          alt=""
        />

        {/* Company name */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: 16,
          }}
        >
          Taukei Enterprises
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#C9A84C",
            fontSize: 24,
            letterSpacing: "0.05em",
          }}
        >
          Building Businesses. Creating Impact. Strengthening Communities.
        </div>

        {/* Gold bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#C9A84C",
          }}
        />

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            color: "#FFFFFF50",
            fontSize: 18,
          }}
        >
          taukeienterprises.com
        </div>
      </div>
    ),
    { ...size }
  );
}
