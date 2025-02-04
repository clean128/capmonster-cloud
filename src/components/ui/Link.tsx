import { ReactNode } from "react";

type IProps = {
  children: ReactNode,
  href: string,
  className?: string
}

export const Link = ({ children, href, className }: Readonly<IProps>) => {
  return <a
          rel="noreferrer noopener"
          href={href}
          className={className}
        >
          {children}
        </a>
}
