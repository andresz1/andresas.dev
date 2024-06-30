import { Github, Slash, Twitter } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { ModeToggleButton } from "@/components/shared/mode-toggle-button";
import { Container } from "@/components/ui/container";
import { cn } from "@/components/ui/core";

import { Button } from "../ui/button";
import { Icon } from "../ui/icon";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

export const Header = ({ className, ...others }: HeaderProps) => {
  return (
    <header
      className={cn("sticky top-0 z-20 backdrop-blur-md", className)}
      {...others}
    >
      <Container className={cn("flex h-16 items-center justify-between")}>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" asChild>
            <Link href="/">
              <Icon>
                <Slash />
              </Icon>
            </Link>
          </Button>
        </div>

        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <Icon>
              <Github />
            </Icon>
          </Button>

          <Button size="icon" variant="outline">
            <Icon>
              <Twitter />
            </Icon>
          </Button>

          <ModeToggleButton />
        </div>
      </Container>
    </header>
  );
};
