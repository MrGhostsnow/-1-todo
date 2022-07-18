import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img id="logo" src="../assets/icons/logo.png" alt="" />
      <p id="footer" target="_blanke">
        &copy;Mr.Ghostsnow
      </p>
      <br />
      <div className="container_socialbtns" id="contato">
        <div align="center" className="socialbtns">
          <ul>
            <li>
              <a
                href="https://github.com/MrGhostsnow"
                className="fa fa-lg fa-github"
                target="_blanke"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/victor-silva-teixeira-b9a4391a3/"
                className="fa fa-lg fa-linkedin"
                target="_blanke"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
