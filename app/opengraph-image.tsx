import { ImageResponse } from "next/og";

export const alt = "iTrans — Web Solutions for Startups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-120px",
            top: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(13, 148, 136, 0.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-120px",
            bottom: "-120px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(2, 253, 251, 0.2)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "60px",
              border: "6px solid #23765C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "56px",
                fontWeight: 800,
                color: "#02FDFB",
              }}
            >
              iT
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              iTrans
            </span>
            <span
              style={{
                fontSize: "32px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.2,
              }}
            >
              Web Solutions for Startups
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
