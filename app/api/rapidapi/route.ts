import { NextResponse } from "next/server";

const config = {
  apiKey: process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
  apiHost: "jsearch.p.rapidapi.com", // Use only the host name here
};

export const POST = async (request: Request) => {
  const {
    page = 1,
    pageSize = 1,
    filter = "us",
    searchQuery = "Software Engineer",
  } = await request.json();

  try {
    // Construct the full API URL
    const apiUrl = `https://${config.apiHost}/search?query=${encodeURIComponent(
      searchQuery
    )}&location=${encodeURIComponent(filter)}&page=${page}&num_pages=${pageSize}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": config.apiKey,
        "X-RapidAPI-Host": config.apiHost,
      },
    });

    // Parse and return the result
    const responseData = await response.json();
    const result = responseData.data || responseData.result || [];

    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
