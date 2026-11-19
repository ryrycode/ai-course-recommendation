"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Find Your Right University Course
        </h1>
        <p className="text-muted-foreground text-lg">
          Answer a few questions about your strand, grades, and interests —
          we'll help you discover the best-fit course for your future.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>1. Enter Your Profile</CardTitle>
            <CardDescription>
              Share your senior high strand and grades.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Just a few quick fields — takes less than 2 minutes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Add Your Interests</CardTitle>
            <CardDescription>
              Tell us what subjects and activities excite you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Helps us match your strengths to real course outcomes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Get Matched</CardTitle>
            <CardDescription>
              See your top recommended university courses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ranked by fit, with reasons for each suggestion.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}