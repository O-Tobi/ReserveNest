"use client";

import { useState } from "react";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { Button } from "../button";
import { Eye, EyeOff } from "lucide-react";
import { Separator } from "../separator";
import { Google } from "../assets/assets";
import Image from "next/image";
import { AuthTooltip } from "./AuthTooltip";
import { Drawer, DrawerTitle, DrawerHeader, DrawerContent } from "../drawer";
import { signIn } from "next-auth/react";

type SignupFormProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const signupSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .refine((val) => /[A-Z]/.test(val), {
        message: "Must contain at least one uppercase letter",
      })
      .refine((val) => /[a-z]/.test(val), {
        message: "Must contain at least one lowercase letter",
      })
      .refine((val) => /[0-9]/.test(val), {
        message: "Must contain at least one number",
      })
      .refine((val) => /[^A-Za-z0-9]/.test(val), {
        message: "Must contain at least one special character",
      }),

    // compare password and confirm password
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

type SwitchProps = {
  triggerOpen?: boolean;
  setTriggerOpen?: (open: boolean) => void;
  openSignIn: () => void;
};

export default function Signupform({
  triggerOpen,
  setTriggerOpen,
  openSignIn,
}: SwitchProps) {
  const isDesktop = window.innerWidth >= 760;
  const [eyeOpen, setEyeOpen] = useState(false);

  const toggleEye = () => {
    setEyeOpen((prev) => !prev);
  };

  const form = useForm<SignupFormProps>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupFormProps) => {
    console.log(data);
    form.reset();
  };

  if (isDesktop) {
    return (
      <Form {...form}>
        <Dialog open={triggerOpen} onOpenChange={setTriggerOpen}>
          <DialogContent className=" bg-white border-none px-[40px] pt-[40px] gap-[12px] w-4/6">
            <DialogHeader className="flex items-center justify-center">
              <DialogTitle>Welcome! Let’s get started.</DialogTitle>
            </DialogHeader>

            <div className="flex justify-center w-full ">
              <Button onClick={() => signIn("google")} className=" w-4/6 rounded-[8px] border-[0.5px] border-[darkGreen] focus:ring-[darkGreen] hover:bg-[darkGreen]/10">
                <Image src={Google} alt="signup with Google" /> Sign up with
                Google
              </Button>
            </div>

            <div className="flex items-center justify-center gap-[8px] w-full">
              <div className="w-1/3">
                <Separator className="border-[0.5px] border-[#C5C5C5]/50 w-10/12" />
              </div>
              <p>or</p>
              <div className="w-1/3">
                <Separator className="border-[0.5px] border-[#C5C5C5]/50 w-10/12" />
              </div>
            </div>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-[12px] space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-[12px]">
                    <FormLabel>Enter your email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        type="email"
                        {...field}
                        className="bg-black/5 border-none rounded-[8px] focus:ring-[darkGreen] "
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative flex items-center bg-black/5 rounded-[8px]">
                        <AuthTooltip>
                          <Input
                            placeholder="Password"
                            type={eyeOpen ? "text" : "password"}
                            {...field}
                            className="border-none focus:ring-[darkGreen] "
                            autoComplete="current-password"
                          />
                        </AuthTooltip>

                        <Button
                          onClick={toggleEye}
                          className="absolute right-2 focus:ring-[darkGreen] "
                        >
                          {eyeOpen ? <EyeOff /> : <Eye />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <div className="relative flex items-center bg-black/5 rounded-[8px]">
                        <Input
                          placeholder="Password"
                          type={eyeOpen ? "text" : "password"}
                          {...field}
                          className="border-none focus:ring-[darkGreen] "
                          autoComplete="current-password"
                        />
                        <Button
                          onClick={toggleEye}
                          className="absolute right-2 focus:ring-[darkGreen] "
                        >
                          {eyeOpen ? <EyeOff /> : <Eye />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <Button
                variant="outline"
                type="submit"
                className="p-[12px] h-[56px] w-full bg-[darkGreen] text-white rounded-[8px]"
              >
                Sign up
              </Button>
            </form>

            <p className="text-center w-full my-[20px]">
              Already have an account?{" "}
              <span
                onClick={() => {
                  openSignIn();
                }}
                className="text-blue-600"
              >
                Sign in
              </span>
            </p>
          </DialogContent>
        </Dialog>
      </Form>
    );
  }

  return (
    <Form {...form}>
      <Drawer open={triggerOpen} onOpenChange={setTriggerOpen}>
        <DrawerContent className=" bg-white border-none px-[20px] gap-[12px]">
          <DrawerHeader className="flex items-center justify-center">
            <DrawerTitle>Welcome! Let’s get started.</DrawerTitle>
          </DrawerHeader>

          <div className="flex justify-center w-full ">
            <Button className=" w-4/6 rounded-[8px] border-[0.5px] border-[darkGreen] focus:ring-[darkGreen] hover:bg-[darkGreen]/10">
              <Image src={Google} alt="signup with Google" /> Sign up with
              Google
            </Button>
          </div>

          <div className="flex items-center justify-center gap-[8px] w-full">
            <div className="w-1/3">
              <Separator className="border-[0.5px] border-[#C5C5C5]/50 w-10/12" />
            </div>
            <p>or</p>
            <div className="w-1/3">
              <Separator className="border-[0.5px] border-[#C5C5C5]/50 w-10/12" />
            </div>
          </div>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[12px] space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-[12px]">
                  <FormLabel>Enter your email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="bg-black/5 border-none rounded-[8px] focus:ring-[darkGreen] "
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center bg-black/5 rounded-[8px]">
                      <AuthTooltip>
                        <Input
                          placeholder="Password"
                          type={eyeOpen ? "text" : "password"}
                          {...field}
                          className="border-none focus:ring-[darkGreen] "
                          autoComplete="current-password"
                        />
                      </AuthTooltip>

                      <Button
                        onClick={toggleEye}
                        className="absolute right-2 focus:ring-[darkGreen] "
                      >
                        {eyeOpen ? <EyeOff /> : <Eye />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center bg-black/5 rounded-[8px]">
                      <Input
                        placeholder="Password"
                        type={eyeOpen ? "text" : "password"}
                        {...field}
                        className="border-none focus:ring-[darkGreen] "
                        autoComplete="current-password"
                      />
                      <Button
                        onClick={toggleEye}
                        className="absolute right-2 focus:ring-[darkGreen] "
                      >
                        {eyeOpen ? <EyeOff /> : <Eye />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button
              variant="outline"
              type="submit"
              className="p-[12px] h-[56px] w-full bg-[darkGreen] text-white rounded-[8px]"
            >
              Sign up
            </Button>
          </form>

          <p className="text-center w-full my-[20px]">
            Already have an account?{" "}
            <span
              onClick={() => {
                openSignIn();
              }}
              className="text-blue-600"
            >
              Sign in
            </span>
          </p>
        </DrawerContent>
      </Drawer>
    </Form>
  );
}
