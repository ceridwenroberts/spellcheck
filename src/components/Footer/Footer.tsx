import { ComponentStyleProps } from "@/utils/types/ComponentStyleProps";

const Footer = ({ className }: ComponentStyleProps) => {
  return (
    <>
      <div className={`footer ${className}`}>
        <p>© Ceridwen Roberts 2024</p>
        <p>
          <span className="footer_symbolText">{`>`}</span>{" "}
          <a href="https://github.com/MossPiglets/WizardWorldAPI">
            WizardWorldAPI
          </a>
          <span className="footer_symbolText">{` <`}</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
