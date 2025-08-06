import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StepBack } from "lucide-react";
import Link from "next/link";

export default function verify() {
    return (
      <>
        <div className="h-screen w-screen flex justify-center items-center">
          <Card className="min-w-sm">
            <CardHeader className="text-center">
              <CardTitle>Please check your email</CardTitle>
              <CardDescription>
                We're already sent the verification to sign in.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/">
                <Button className="w-full">
                  <StepBack />
                  Back to homepage
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </>
    );
}