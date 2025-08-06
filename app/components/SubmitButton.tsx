"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

interface SubmitButtonProps {
  className?: string;
  children?: ReactNode;
}

export function SubmitButton({
  className,
  children = "Submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className={className}>
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please Wait...
        </Button>
      ) : (
        <Button className={className} type="submit">
          {children}
        </Button>
      )}
    </>
  );
}
