import React, { memo, useCallback, useEffect, useState } from "react";
import { Link, LinkProps, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

import { ThemeContext } from "../../context";
import { ThemeProps } from "../../styles";
import ThemeToggler from '../ThemeToggler';

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
const Navbar = memo(() => {
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
        <a
          className="navbar-brand"
          onClick={scrollToTop}
          href="#top"
        >
          Programystic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleMenu"
          aria-controls="navbarToggleMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggleMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="section-helloworld">Hello World</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="section-experience">Experience</NavLink>
            </li>
          </ul>
        </div>

        <ThemeToggler />

      </div>
    </StyledNavbar>
  );
});

const StyledNavbar = styled.nav<{ theme: ThemeProps, isScrolled: boolean }>`
  transition: 0.5s;
  background-color: ${props => props.isScrolled ? props.theme.colors.menuScrolledBackground : "transparent"};
  box-shadow: ${props => props.isScrolled ? "5px 10px 12px rgba(0, 0, 0, 0.2)" : "none"};

  .navbar-brand {
    color: ${props => props.isScrolled ? props.theme.colors.menuScrolledStandardText : props.theme.colors.menuStandardText};
  }

  .navbar-brand:hover {
    color: ${props => props.theme.colors.menuHoverText};
  }

  .nav-link {
    color: ${props => props.isScrolled ? props.theme.colors.menuScrolledStandardText : props.theme.colors.menuStandardText};
    transition: 0.5s;

    &.active {
      color: ${props => props.isScrolled ? props.theme.colors.menuScrolledActiveText : props.theme.colors.menuActiveText};
    }

    &:hover {
      color: ${props => props.theme.colors.menuHoverText};
    }
  }
`

export default Navbar;
