export default function FormPostLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="pt-4">
          {children}
      </div>
    );
  }
  