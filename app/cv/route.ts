import { createCvResponse } from "@/lib/cv";

export function GET() { return createCvResponse("en"); }
