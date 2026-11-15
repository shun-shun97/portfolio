import { createCvResponse } from "@/lib/cv";

export const dynamic = "force-static";

export function GET() { return createCvResponse("ja"); }
