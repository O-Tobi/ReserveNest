"use client";

import { useState, useEffect } from "react";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
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

type SwitchProps = {
  triggerOpen: boolean;
  setTriggerOpen: (open: boolean) => void;
  openSignUp: () => void;
};

type SigninFormProps = {
  email: string;
  password: string;
};

export const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export default function Signinform({
  triggerOpen,
  setTriggerOpen,
  openSignUp,
}: SwitchProps) {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);

  const toggleEye = () => {
    setEyeOpen((prev) => !prev);
  };

  const form = useForm<SigninFormProps>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 760);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const onSubmit = (data: SigninFormProps) => {
    console.log(data);
    form.reset();
  };

  if (isDesktop) {
    return (
      <div>
        <Form {...form}>
          <Dialog open={triggerOpen} onOpenChange={setTriggerOpen}>
            <DialogContent className=" bg-white border-none px-[40px] pt-[40px] gap-[16px] w-4/6">
              <DialogHeader className="flex items-center justify-center">
                <DialogTitle>Nice to see you again!</DialogTitle>
              </DialogHeader>

              <div className="flex justify-center w-full ">
                <Button className=" w-4/6 rounded-[8px] border-[0.5px] border-[darkGreen] focus:ring-[darkGreen] hover:bg-[darkGreen]/10">
                  <Image src={Google} alt="SignIn with Google" /> Sign in with
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
                className="flex flex-col gap-[16px] space-y-4"
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
                          <Input
                            placeholder="Password"
                            type={eyeOpen ? "text" : "password"}
                            {...field}
                            className="border-none focus:ring-[darkGreen] "
                            autoComplete="current-password"
                          />
                          <Button
                            type="button"
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
                  Sign in
                </Button>
              </form>

              <p className="text-center w-full my-[20px]">
                Don&apos;t have an account?{" "}
                <span
                  className="text-blue-600"
                  onClick={() => {
                    setTriggerOpen(false);
                    openSignUp();
                  }}
                >
                  {" "}
                  Sign up now
                </span>
              </p>
            </DialogContent>
          </Dialog>
        </Form>
      </div>
    );
  }

  return (
    <Form {...form}>
      <Drawer open={triggerOpen} onOpenChange={setTriggerOpen}>
        <DrawerContent className=" bg-white border-none px-[20px] gap-[12px]">
          <DrawerHeader className="flex items-center justify-center">
            <DrawerTitle>Nice to see you again!</DrawerTitle>
          </DrawerHeader>

          <div className="flex justify-center w-full ">
            <Button className=" w-4/6 rounded-[8px] border-[0.5px] border-[darkGreen] focus:ring-[darkGreen] hover:bg-[darkGreen]/10">
              <Image src={Google} alt="SignIn with Google" /> Sign in with
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
            className="flex flex-col gap-[16px] space-y-4"
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
                      <Input
                        placeholder="Password"
                        type={eyeOpen ? "text" : "password"}
                        {...field}
                        className="border-none focus:ring-[darkGreen] "
                        autoComplete="current-password"
                      />
                      <Button
                        type="button"
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
              Sign in
            </Button>
          </form>

          <p className="text-center w-full my-[20px]">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => {
                setTriggerOpen(false);
                openSignUp();
              }}
              className="text-blue-600"
            >
              {" "}
              Sign up now
            </span>
          </p>
        </DrawerContent>
      </Drawer>
    </Form>
  );
}
