interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <>
      <div className={`mx-auto px-5 max-w-[1320px] ${className}`}>
        {children}
      </div>
    </>
  );
}
