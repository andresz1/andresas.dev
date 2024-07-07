import { Github, Slash, Twitter } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { ModeToggleButton } from "@/components/shared/mode-toggle-button";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";

export interface HeaderProps extends ComponentPropsWithoutRef<"header"> {}

export const Header = ({ className, ...others }: HeaderProps) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-20 backdrop-blur-md print:hidden",
        className
      )}
      {...others}
    >
      <Container className={cn("flex h-16 items-center justify-between")}>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" aria-label="Inicio" asChild>
            <Link href="/">
              <Icon>
                <Slash />
              </Icon>
            </Link>
          </Button>
        </div>

        <div className="flex gap-2">
          <Button size="icon" variant="outline" aria-label="GitHub" asChild>
            <a href="https://github.com/andresz1" target="_blank">
              <Icon>
                <Github />
              </Icon>
            </a>
          </Button>

          <Button size="icon" variant="outline" aria-label="Twitter" asChild>
            <a href="https://twitter.com/andresz_s" target="_blank">
              <Icon>
                <Twitter />
              </Icon>
            </a>
          </Button>

          <ModeToggleButton />
        </div>
      </Container>
    </header>
  );
};
