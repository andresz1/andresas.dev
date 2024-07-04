import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

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
          padding: "210px",
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
              fontSize: 130,
            }}
          >
            {postTitle}
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <img
            style={{ borderRadius: "9999px" }}
            alt=""
            width="150"
            height="150"
            src="https://pbs.twimg.com/profile_images/1795192021801443329/3a7ehmex_400x400.jpg"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 50,
              }}
            >
              Andrés Alvarez
            </div>
            <div
              style={{
                fontSize: 35,
              }}
            >
              Software Engineer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
