import React, { memo, useCallback, useEffect, useState } from "react";
import { Link, LinkProps, animateScroll as scroll } from "react-scroll";
import styled, { DefaultTheme } from "styled-components/macro";

import { HiMenu } from "react-icons/hi";

import { ThemeContext } from "../../context";
import { Analytics } from "../../services";
import ThemeToggler from "../ThemeToggler";

const navbarHeight = 56;

/* Navbar link element */
interface NavLinkProps extends LinkProps {
  to: string;
}
const NavLink: React.FC<NavLinkProps> = memo(({ children, to }) => {
  return (
    <Link
      activeClass="active"
      className="nav-link navbar_main_navlink"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-navbarHeight}
    >
      {children}
    </Link>
  );
});

/* Navbar component */
const Navbar: React.FC<{}> = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const navbarColor = useCallback(() => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", navbarColor);
    return () => window.removeEventListener("scroll", navbarColor);
  }, [navbarColor]);

  const scrollToTop = useCallback(() => {
    Analytics.gaNavbarClicked("Top");
    scroll.scrollToTop();
  }, []);

  const { theme } = React.useContext(ThemeContext);

  return (
    <StyledNavbar
      id="main-navbar"
      theme={theme}
      isScrolled={scrolled}
      className="navbar fixed-top navbar-expand-lg"
    >
      <div className="container">
        <a className="navbar-brand" onClick={scrollToTop} href="#top">
          <img
            className="brand-icon"
            src={process.env.PUBLIC_URL + "/logo192.png"}
            alt="Brand icon - woman mage emoji"
          />{" "}
          Programystic
        </a>
        <StyledToggleMenuIcon
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleMenu"
          aria-controls="navbarToggleMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          theme={theme}
          isScrolled={scrolled}
        >
          <HiMenu />
        </StyledToggleMenuIcon>

        <div className="collapse navbar-collapse" id="navbarToggleMenu">
          <hr />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="section-helloworld"
                onClick={() => Analytics.gaNavbarClicked("HelloWorld")}
              >
                Hello World
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="section-experience"
                onClick={() => Analytics.gaNavbarClicked("Experience")}
              >
                Experience
              </NavLink>
            </li>
          </ul>
          <ThemeToggler />
        </div>
      </div>
    </StyledNavbar>
  );
});

const StyledNavbar = styled.nav<{ theme: DefaultTheme; isScrolled: boolean }>`
  transition: 0.5s;
  background-color: ${(props) =>
    props.isScrolled
      ? props.theme.colors.menuScrolledBackground
      : "transparent"};
  box-shadow: ${(props) =>
    props.isScrolled ? "5px 10px 12px rgba(0, 0, 0, 0.2)" : "none"};

  .navbar-brand {
    color: ${(props) =>
      props.isScrolled
        ? props.theme.colors.menuScrolledStandardText
        : props.theme.colors.menuStandardText};
    font-weight: ${(props) => props.theme.text.weight.regular};
    margin-right: var(--spacing_md);
    align-items: center;
    display: flex;
  }

  .navbar-brand:hover {
    color: ${(props) => props.theme.colors.menuHoverText};
  }

  .brand-icon {
    height: 25px;
    width: 25px;
    margin-right: var(--spacing_xs);
  }

  .nav-link {
    color: ${(props) =>
      props.isScrolled
        ? props.theme.colors.menuScrolledStandardText
        : props.theme.colors.menuStandardText};
    transition: 0.5s;

    &.active {
      color: ${(props) =>
        props.isScrolled
          ? props.theme.colors.menuScrolledActiveText
          : props.theme.colors.menuActiveText};
    }

    &:hover {
      color: ${(props) => props.theme.colors.menuHoverText};
    }
  }

  hr {
    display: none;
  }

  @media (max-width: 991px) {
    background-color: ${(props) => props.theme.colors.menuScrolledBackground};
    box-shadow: 5px 10px 12px rgba(0, 0, 0, 0.2);

    .navbar-brand,
    .nav-link {
      color: ${(props) => props.theme.colors.menuScrolledStandardText};
    }

    .navbar-collapse {
      margin-top: var(--spacing_xs);

      hr {
        display: flex;
        margin: 0;
        margin-bottom: var(--spacing_xs);
        color: ${(props) => props.theme.colors.accent};
      }

      button {
        padding: 0;
        margin-top: var(--spacing_xs);
      }
    }
  }
`;

interface StyledToggleMenuIconProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  theme: DefaultTheme;
  isScrolled: boolean;
}

const StyledToggleMenuIcon = styled.button<StyledToggleMenuIconProps>`
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  color: ${(props) =>
    props.isScrolled
      ? props.theme.colors.menuScrolledStandardText
      : props.theme.colors.menuStandardText};

  :focus,
  :hover,
  :active,
  :active:hover {
    box-shadow: none;
  }

  :hover {
    color: ${(props) => props.theme.colors.menuHoverText};
  }
`;

export default Navbar;
