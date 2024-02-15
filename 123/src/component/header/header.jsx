import styles from "./header.module.css";

const LINKS = [
  { name: "О нас", href: "/" },
  { name: "Каталог", href: "/catalog" },
  { name: "Партнеры", href: "/partners" },
  { name: "GitHub", href: "https://github.com/kidaysi/react_2.git" },
];

export default function Header() {
  return (
    <header className={styles.header}>
    <div className="container">
        <div className={styles.header_content}>
          <h1 className={styles.logo}>AnimalPlanet</h1>
            <div className={styles.header_nav}>
            {LINKS.map((item) => (
              <a href={item.href} className={styles.nav_item}>
              {item.name}
            </a>
            ))}
            </div>
            <div className="header_btn">
                <a href="#"  className={styles.btn}>Авторизация</a>
            </div>
        </div>
        </div>
        </header>
  );
}
