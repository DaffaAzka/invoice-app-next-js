import { Button } from "@/components/ui/button";
import { requiredUser } from "../../../utils/hooks";
import { signOut } from "../../../utils/auth";
import { SubmitButton } from "../../../components/SubmitButton";

export default async function DashboardRoute() {
  const session = await requiredUser();

  return (
    <>
      <h1>Hello from the dashboard</h1>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <SubmitButton>Sign Out</SubmitButton>
      </form>
    </>
  );
}
