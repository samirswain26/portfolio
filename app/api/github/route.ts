import { Octokit } from "octokit";
import { NextResponse, NextRequest } from "next/server";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response: any = await octokit.graphql(query, { username });
    const calendar = response.user.contributionsCollection.contributionCalendar;

    const contributions = calendar.weeks.flatMap((week: any) =>
      week.contributionDays.map((day: any) => ({
        count: day.contributionCount,
        date: day.date,
      }))
    );

    return NextResponse.json({
      user: { totalContribution: calendar.totalContributions },
      contributions,
    });
  } catch (error: any) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch github server data" },
      { status: 500 }
    );
  }
}
