import style from "../styles/Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const current = new Date();

  const formatTimeUnit = (unit) => (unit < 10 ? "0" : "") + unit;

  const month = formatTimeUnit(current.getMonth() + 1);
  const day = formatTimeUnit(current.getDate());
  const year = current.getFullYear();

  const date = `${month}/${day}/${year}`;

  const hours = formatTimeUnit(current.getHours());
  const minutes = formatTimeUnit(current.getMinutes());

  const time = `${hours}:${minutes}`;

  return (
    <div className={style.footer}>
      <div>
        <p className={style.find}>find me:</p>
        <a
          href="https://www.linkedin.com/in/eugene-jung/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FaLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/jung-eugene"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FaGithub />
          </span>
        </a>
        <a
          href="mailto:eugenejung04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <MdEmail />
          </span>
        </a>
      </div>
      <div>{time + " | " + date}</div>
    </div>
  );
};

export default Footer;
