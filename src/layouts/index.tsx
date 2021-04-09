import { LayoutProps } from "./types";
import DefaultLayout from "./default";

const LayoutWrapper = ({children}: LayoutProps) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default LayoutWrapper;
