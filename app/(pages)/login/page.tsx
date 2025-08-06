import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../utils/auth";
import { SubmitButton } from "../../components/SubmitButton";
import { redirect } from "next/navigation";

export default async function login() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center px-4">
        <Card className="min-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Login</CardTitle>
            <CardDescription>
              Enter your email bellow to log in into your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={async (formData) => {
                "use server";
                await signIn("nodemailer", formData);
              }}
              className="flex flex-col gap-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  placeholder="user@example"
                  name="email"
                  type="email"
                  required></Input>
              </div>
              <SubmitButton className="w-full">Login</SubmitButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
