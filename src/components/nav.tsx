"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BoxIcon, Hash, PanelLeftIcon, TagIcon } from "lucide-react";

import { cn, truncateString } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/app/providers";

export function NavSidebar({
  categories,
  tags,
  labels,
}: {
  categories?: string[];
  labels?: string[];
  tags?: string[];
}) {
  const searchParams = useSearchParams();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <>
      <aside className="fixed w-42 inset-y-0 left-0 z-10 hidden sm:flex flex-col bg-[#FAFAFA] dark:bg-background">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <ProductNav
            categories={categories}
            tags={tags}
            labels={labels}
            searchParams={searchParams}
          />
        </nav>

        <div className=" pl-3">
          <ModeToggle />
        </div>
      </aside>
      <div className="flex flex-col gap-4 pb-2 px-2">
        <header
          className={cn(
            "sticky top-0 z-30 flex h-14 mx-1 md:mx-0 rounded-b-lg items-center gap-4 bg-background dark:bg-[#1E1E1E] px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6",
            "shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,0_0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_-0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_1px_2px_rgba(0,0,0,0.1)]",
            "dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.06)_inset,0_0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_-0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_1px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.4)]"
          )}
        >
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:hidden bg-accent">
                <PanelLeftIcon />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <div className="ml-auto mt-1 md:hidden">
              <Logo />
            </div>
            <SheetContent
              side="left"
              className="sm:max-w-[15rem] py-4 pl-1 border-r border-primary/10"
            >
              <SheetTitle></SheetTitle>
              <nav className="flex flex-col items-start gap-4 px-2 py-5">
                <ProductNav
                  tags={tags}
                  labels={labels}
                  categories={categories}
                  handleLinkClick={handleLinkClick}
                  searchParams={searchParams}
                ></ProductNav>
              </nav>
              <div className="flex flex-col items-start pl-4">
                <nav className="mb-6 flex gap-4 ">
                  <DropdownMenu>
                    <DropdownMenuContent
                      align="end"
                      className="bg-gradient-to-t from-primary/70 to-primary/80 rounded-lg"
                    >
                      <div className="p-[1px] bg-background rounded-md">
                        <DropdownMenuItem>Support</DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <ModeToggle />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </>
  );
}

type ProductNavProps = {
  categories?: string[];
  tags?: string[];
  labels?: string[];
  handleLinkClick?: () => void;
  searchParams: URLSearchParams;
  children?: ReactNode;
};

function ProductNav({
  categories,
  tags,
  labels,
  searchParams,
  handleLinkClick,
  children,
}: ProductNavProps) {
  return (
    <div className="">
      <Logo />
      {children}
      <ScrollArea className="h-[calc(100vh-320px)] md:h-[calc(100vh-200px)] flex flex-col gap-4 pl-2">
        {categories && categories?.length > 0 && (
          <div className="flex items-center gap-2 mt-6 text-muted-foreground">
            <BoxIcon className="size-5 stroke-yellow-400" />
            <p className="text-sm md:hidden">Categories</p>
          </div>
        )}
        <ul className="mt-2 w-36 flex flex-col gap-2 items-start justify-center py-2">
          {categories?.map((category: string, index: number) => (
            <li key={`category-${index}-${category}`}>
              <Link
                href={`/products?category=${category}`}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-start space-x-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 rounded-md px-2 py-0.5",
                  "shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,0_0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_-0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_1px_2px_rgba(0,0,0,0.1)]",
                  "dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.06)_inset,0_0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_-0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_1px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.4)]",
                  "dark:hover:shadow-[0_0_0_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_-0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_1px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.5)]",
                  searchParams.get("category") === category
                    ? "bg-yellow-400 text-black dark:text-black"
                    : ""
                )}
                prefetch={false}
              >
                <span className="px-1">
                  {category && truncateString(category, 12)}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {tags && tags?.length > 0 && (
          <div className="flex items-center gap-2 mt-6 text-muted-foreground">
            <TagIcon className="size-5 stroke-pink-400" />
            <p className="text-sm md:hidden">Tags</p>
          </div>
        )}
        <ul className="mt-2 md:w-36 flex flex-col gap-2 items-start justify-center py-2">
          {tags?.map((tag: string, index: number) => (
            <li key={`tag-${index}-${tag}`}>
              <Link
                href={`/products?tag=${tag}`}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-start space-x-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 rounded-md px-2 py-0.5",
                  "shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,0_0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_-0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_1px_2px_rgba(0,0,0,0.1)]",
                  "dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.06)_inset,0_0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_-0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_1px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.4)]",
                  "dark:hover:shadow-[0_0_0_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_-0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_1px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.5)]",
                  searchParams.get("tag") === tag
                    ? "bg-pink-400 text-black dark:text-black"
                    : ""
                )}
                prefetch={false}
              >
                <span className="px-1 truncate">
                  {tag && truncateString(tag, 12)}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {labels && labels?.length > 0 && (
          <div className="flex items-center gap-2 mt-6 text-muted-foreground">
            <Hash className="size-5 stroke-cyan-400" />
            <p className="text-sm md:hidden">Labels</p>
          </div>
        )}
        <ul className="mt-2 w-36 flex flex-col gap-2 items-start justify-center py-2">
          {labels?.map((label: string, index: number) => (
            <li key={`label-${index}-${label}`}>
              <Link
                href={`/products?label=${label}`}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-start space-x-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 rounded-md px-2 py-0.5",
                  "shadow-[0_0_0_1px_rgba(0,0,0,0.1)_inset,0_0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_-0.5px_0.5px_rgba(0,0,0,0.05)_inset,0_1px_2px_rgba(0,0,0,0.1)]",
                  "dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.06)_inset,0_0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_-0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_1px_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.4)]",
                  "dark:hover:shadow-[0_0_0_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_-0.5px_0.5px_rgba(255,255,255,0.1)_inset,0_0.5px_1px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.5)]",
                  searchParams.get("label") === label
                    ? "bg-cyan-400 text-black dark:text-black"
                    : ""
                )}
                prefetch={false}
              >
                <span className="text-ellipsis overflow-hidden">
                  {label && truncateString(label, 12)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}

export function Logo() {
  return (
    <Button
      className="relative w-full size-9 rounded-full dark:bg-black"
      variant="outline"
      asChild
    >
      <h5>DE</h5>
    </Button>
  );
}
