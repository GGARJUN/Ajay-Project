import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react"
 

import Link from "next/link";

export function DashboardNav() {
  return (
    <nav className=" z-[99999]   fixed  top-0 mt-2 left-[20%] hidden  md:flex items-center  w-[50%] justify-evenly">

      <Link href="/dashboard">
        <h1 className=" text-base font-semibold py-2 px-7 rounded-md hover:bg-green-600">
          Home
        </h1>
      </Link>
      <Link href="/about">
        <h1 className="text-base font-semibold py-2 px-7 rounded-md hover:bg-green-600">
          About
        </h1>
      </Link>
      <Link href="/blogs">
        <h1 className="text-base font-semibold py-2 px-7 rounded-md hover:bg-green-600">
          Blog
        </h1>
      </Link>
      <Link href="/contect">
        <h1 className="text-base font-semibold py-2 px-7 rounded-md hover:bg-green-600">
         Support
        </h1>
      </Link>
      {/* <Link href="/pages">Pages</Link> */}

      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button  className=" text-md w-20">Pages</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="  w-36">
            <DropdownMenuGroup>
              <DropdownMenuItem><Link href="/pages">Blog</Link></DropdownMenuItem>
              <DropdownMenuItem>Blog Details</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Keyboard </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

      
    </nav>
  );
}
