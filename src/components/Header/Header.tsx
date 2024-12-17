import { ComponentStyleProps } from "@/utils/types/ComponentStyleProps";

const Header = ({ className }: ComponentStyleProps) => {
  return (
    <div className={`header ${className}`}>
      <h1>
        <span className="header__initialCapital">S</span>pellcheck
      </h1>
    </div>
  );
};

export default Header;
