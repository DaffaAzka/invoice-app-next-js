"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/app/components/SubmitButton";
import { useActionState } from "react";
import { onboardUser } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onBoardingSchema } from "@/app/utils/schemas/zod";

export default function OnBoarding() {
  const [lastResult, action] = useActionState(onboardUser, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onBoardingSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-muted/40 to-background px-4">
      <Card className="w-full max-w-md shadow-lg border">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">You're almost finished!</CardTitle>
          <CardDescription>Enter your information first</CardDescription>
        </CardHeader>

        <CardContent>
          <form
            action={action}
            className="space-y-4"
            id={form.id}
            onSubmit={form.onSubmit}
            noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstname">First Name</Label>
                <div className="">
                  <Input
                    name={fields.firstname.name}
                    key={fields.firstname.key}
                    defaultValue={fields.firstname.initialValue}
                    id="firstname"
                    placeholder="John"
                  />
                  <span className="text-xs text-red-500">
                    {fields.firstname.errors}
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastname">Last Name</Label>
                <div className="">
                  <Input
                    name={fields.lastname.name}
                    key={fields.lastname.key}
                    defaultValue={fields.lastname.initialValue}
                    id="lastname"
                    placeholder="Doe"
                  />
                  <span className="text-xs text-red-500">
                    {fields.lastname.errors}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <div className="">
                <Input
                  name={fields.address.name}
                  key={fields.address.key}
                  defaultValue={fields.address.initialValue}
                  id="address"
                  placeholder="Acme Inc."
                />
                <span className="text-xs text-red-500">
                  {fields.address.errors}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <SubmitButton children="Finish onBoarding" />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
