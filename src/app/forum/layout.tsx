export default function FormLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="mt-4">
          {children}
      </div>
    );
  }
  