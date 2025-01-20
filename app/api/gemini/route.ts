import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    // Parse the request body to extract the question
    const { question }: { question: string } = await request.json();

    // Initialize the Gemini API client
    const genAI = new GoogleGenerativeAI("AIzaSyCb4Dyu5RrmFE12as9cqk62t4ITm1j8jzU");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate the content based on the user's question
    const result = await model.generateContent(`Tell me ${question}`);

    // Extract the AI-generated response
    const reply: string = result.response.text();

    // Return the reply as JSON
    return NextResponse.json({ reply });
  } catch (error: any) {
    // Handle errors and return a descriptive message
    return NextResponse.json({ error: error.message });
  }
};
