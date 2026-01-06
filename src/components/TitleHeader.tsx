interface TitleHeaderProps {
  title: string;
  subtitle: string;
}

const TitleHeader = ({ title, subtitle }: TitleHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
      <div className="hero-badge">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default TitleHeader;
