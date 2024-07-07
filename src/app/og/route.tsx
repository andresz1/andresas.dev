import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const siteURL = process.env.SITE_URL;
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "/andresas";
  const font = await fetch(
    new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "black",
          gap: "16px",
          paddingLeft: "164px",
          paddingRight: "164px",
          paddingTop: "124px",
          paddingBottom: "124px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: "82px",
              fontFamily: "Inter",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <img
            style={{ borderRadius: "9999px" }}
            alt="Foto de Andrés Alvarez"
            width="150"
            height="150"
            src={`${siteURL}/images/profile.jpg`}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: "46px",
              }}
            >
              Andrés Alvarez
            </div>
            <div
              style={{
                fontSize: "28px",
              }}
            >
              Staff Front-End Engineer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Inter",
          data: font,
          style: "normal",
        },
      ],
    }
  );
}
