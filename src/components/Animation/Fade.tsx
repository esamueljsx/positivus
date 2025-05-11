import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Fade = ({
  children,
  style = "fade-up",
  className,
}: {
  children: ReactNode;
  style?: string;
  className?: string;
}) => {
  return (
    <div data-aos={style} className={cn(className)}>
      {children}
    </div>
  );
};

const FadeDelay = ({
  children,
  style = "fade-up",
  delay = "150",
  className,
}: {
  children: ReactNode;
  style?: string;
  delay?: string;
  className?: string;
}) => {
  return (
    <div data-aos={style} data-aos-delay={delay} className={cn(className)}>
      {children}
    </div>
  );
};

export { Fade, FadeDelay };
