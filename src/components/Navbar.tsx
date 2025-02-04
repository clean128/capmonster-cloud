import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ChevronDown, Menu } from "lucide-react";

import language from "../assets/20x20_language.svg";
import chrome from "../assets/24x24_chrome.svg";
import dashboard from "../assets/24x24_dashboard.svg";
import firefox from "../assets/24x24_firefox.svg";
import logonotext from "../assets/logo_no_text.svg";
import logo from "../assets/new_logo.svg";
import recaptcha from "../assets/recaptcha.svg";
import textcaptcha from "../assets/textcaptcha.svg";
import turnstile from "../assets/turnstile.svg";
import { Link } from "./ui/Link";
import { Button } from "./ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "./ui/sidebar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="top-0 z-40 w-full bg-white dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex justify-between w-screen h-20 px-16 pt-3">
          <NavigationMenuItem className="flex font-bold">
            <a
              rel="noreferrer noopener"
              href="/"
              className="flex ml-2 text-xl font-bold"
            >
              <img src={logo} className="hidden h-11 xl:block" />
              <img src={logonotext} className="block xl:hidden h-9" />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex gap-3 md:hidden">
            <Button className="w-24 h-8 text-base text-indigo-500 bg-indigo-50 hover:bg-indigo-100">Sign In</Button>
            <Button className="w-24 h-8 text-base text-white bg-indigo-500 hover:bg-indigo-400">Sign Up</Button>
            
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex w-5 h-5 md:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">
                    <a
                      rel="noreferrer noopener"
                      href="/"
                      className="flex ml-2 text-xl font-bold"
                    >
                      <img src={logo} className="h-11" />
                    </a>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-3 mt-8">
                  <Button className="w-full text-lg text-white bg-indigo-500 h-11 hover:bg-indigo-400">Sign Up</Button>
                  <Button className="w-full text-lg text-indigo-500 bg-indigo-50 h-11 hover:bg-indigo-100">Sign In</Button>
                </div>

                <nav className="flex flex-col items-center justify-center gap-2 mt-4 *:border-b *:border-indigo-100">
                  <Collapsible className="w-full group/collapsible">
                    <SidebarGroup>
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                          <span className="text-lg text-primary">Products</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarGroupContent>
                          <SidebarGroup>
                            <Link href="/#" className="flex gap-3 px-4 pt-4 pb-2 text-lg">
                              <img src={dashboard} className="size-7" />
                              <span>CapMonster Cloud API</span>
                            </Link>
                          </SidebarGroup>
                          <SidebarGroup>
                            <Link href="/#" className="flex gap-3 px-4 py-2 text-lg">
                              <img src={chrome} className="size-7" />
                              <span>Chrome Extension</span>
                            </Link>
                          </SidebarGroup>
                          <SidebarGroup>
                            <Link href="/#" className="flex gap-3 px-4 pt-2 pb-4 text-lg">
                              <img src={firefox} className="size-7" />
                              <span>Firefox Extension</span>
                            </Link>
                          </SidebarGroup>
                        </SidebarGroupContent>
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                  <Collapsible className="w-full group/collapsible">
                    <SidebarGroup>
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                          <span className="text-lg text-primary">Solutions</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarGroupContent>
                          <SidebarGroup>
                            <Link href="/#" className="flex gap-3 px-4 pt-4 pb-2 text-lg">
                              <img src={recaptcha} className="size-7" />
                              <span>reCAPTCHA</span>
                            </Link>
                          </SidebarGroup>
                          <SidebarGroup>
                            <Link href="/#" className="flex gap-3 px-4 py-2 text-lg">
                              <img src={turnstile} className="size-7" />
                              <span>Cloudflare</span>
                            </Link>
                          </SidebarGroup>
                          <SidebarGroup>
                            <Link href="/#" className="flex gap-3 px-4 pt-2 pb-4 text-lg">
                              <img src={textcaptcha} className="size-7" />
                              <span>Text Captcha</span>
                            </Link>
                          </SidebarGroup>
                        </SidebarGroupContent>
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                    <Link href="/#" className="w-full px-4 py-3 text-lg font-medium">Pricing</Link>
                    <Link href="/#" className="w-full px-4 py-3 text-lg font-medium">Blog</Link>
                    <Link href="/#" className="w-full px-4 py-3 text-lg font-medium">Documentation</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <Menubar className="hidden text-black bg-transparent border-none md:flex">
            <MenubarMenu>
              <MenubarTrigger className="flex gap-2 text-lg">
                <span>Products</span>
                <ChevronDownIcon />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/#" className="flex gap-3 px-4 pt-4 pb-2 text-lg">
                    <img src={dashboard} className="size-7" />
                    <span>CapMonster Cloud API</span>
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/#" className="flex gap-3 px-4 py-2 text-lg">
                    <img src={chrome} className="size-7" />
                    <span>Chrome Extension</span>
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/#" className="flex gap-3 px-4 pt-2 pb-4 text-lg">
                    <img src={firefox} className="size-7" />
                    <span>Firefox Extension</span>
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="flex gap-2 text-lg">
                <span>Solutions</span>
                <ChevronDownIcon />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/#" className="flex gap-3 px-4 pt-4 pb-2 text-lg">
                    <img src={recaptcha} className="size-7" />
                    <span>reCAPTCHA</span>
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/#" className="flex gap-3 px-4 py-2 text-lg">
                    <img src={turnstile} className="size-7" />
                    <span>Cloudflare</span>
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/#" className="flex gap-3 px-4 pt-2 pb-4 text-lg">
                    <img src={textcaptcha} className="size-7" />
                    <span>Text Captcha</span>
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                <Link href="/#" className="text-lg">Pricing</Link>
              </MenubarTrigger>
              <MenubarTrigger>
                <Link href="/#" className="text-lg">Blog</Link>
              </MenubarTrigger>
              <MenubarTrigger>
                <Link href="/#" className="text-lg">Documentation</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>

          <div className="hidden gap-3 md:flex">
            <Button className="text-lg text-indigo-500 bg-indigo-50 h-11 w-28 hover:bg-indigo-100">Sign In</Button>
            <Button className="text-lg text-white bg-indigo-500 h-11 w-28 hover:bg-indigo-400">Sign Up</Button>
            <Button className="text-indigo-500 bg-indigo-50 h-11 hover:bg-indigo-100">
              <img src={language} className="size-5" />
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
