"use client";

import {
  LogOut,
  UserRound,
  LogIn,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function UserProfile() {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {session ? (
          <Image
            // set the default image in the asset
            src={(session.user?.image as string) || "/default-image.png"}
            height={100}
            width={100}
            className="rounded-full w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
            alt={(session.user?.name as string) || "User profile"}
          />
        ) : (
          <Button className="focus-visible:ring-0 w-[24px] h-[24px] md:w-[48px] md:h-[48px] rounded-[8px] p-[12px]  md:bg-[#007E47] ">
            <UserRound size={100} className="text-[#007E47] md:text-white " />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-auto mr-[20px] lg:w-[211px] border-[1px] border-[#C5C5C5]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {session && (
            <DropdownMenuItem>
              <UserRound />
              <span>Profile</span>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          {session ? (
            <div className="flex items-center gap-[8px]">
              <LogOut />
              <span onClick={() => signOut()}>Log out</span>
            </div>
          ) : (
            <div className="flex items-center gap-[8px]">
              <LogIn />
              <span onClick={() => signIn()}>Log In</span>
            </div>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
