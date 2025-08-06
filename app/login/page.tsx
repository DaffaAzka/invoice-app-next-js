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

export default function login() {
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
            <form action="" className="flex flex-col gap-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input placeholder="user@example"></Input>
              </div>
              <Button>Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
