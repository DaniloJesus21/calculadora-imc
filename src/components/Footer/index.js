import stylesFooter from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={stylesFooter["footer"]}>
        <div className={stylesFooter["footer-container"]}>
          <p className={stylesFooter["text-small"]}>
            &copy; Todos os direitos reservados - 2025
          </p>
          <p className={stylesFooter["text-small"]}>
            Desenvolvido por Danilo Jesús
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
