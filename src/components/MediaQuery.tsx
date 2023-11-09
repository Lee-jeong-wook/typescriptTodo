import React, { ReactNode } from "react"
import { useMediaQuery } from "react-responsive"

interface MobileProps {
  children: ReactNode;
}

interface PCProps {
  children: ReactNode;
}

const Mobile: React.FC<MobileProps> = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return <>{isMobile && children}</>;
}

const PC: React.FC<PCProps> = ({ children }) => {
  const isPc = useMediaQuery({ query: "(min-width: 768px)" });
  return <>{isPc && children}</>;
}

export { Mobile, PC };
