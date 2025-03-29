import { ScrollController } from "@/components/scroll-controller";

export default function PostLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <ScrollController>
      <div className="mt-20">
          {children}
      </div>
      </ScrollController>
    );
  }
  