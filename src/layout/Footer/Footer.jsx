import footerImg from "../../assets/img/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#cfcfcf] to-[#868686] font-roboto">
      <footer className="footer p-10 text-base-content max-w-6xl mx-auto">
        <aside>
          <div className="flex items-center mb-4">
            <img className="w-20" src={footerImg} alt="" />
            <h2 className="text-3xl font-semibold">
              Hotel <span className="text-red-500">X</span>
            </h2>
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
