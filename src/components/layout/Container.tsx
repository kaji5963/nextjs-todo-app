interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </main>
  );
};

export default Container;
