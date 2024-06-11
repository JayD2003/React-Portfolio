import React,{useState} from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from './../../utils';


import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const bar = useRef(null);
    useEffect(()=>{
        const b = bar.current;
        gsap.fromTo(
            b,
            {
                opacity: 0,
                translateY: -150
            },
            {
                opacity: 1,
                translateY: 0,
                duration: 1,
            }
        )
    })

    return (
        <nav className={styles.navbar} ref={bar} >
            <a className={styles.title} href="/">Jay.</a>
            
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={menuOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={()=> setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=>setMenuOpen(false)}>
                  <li>
                      <a href="#about">About</a>
                  </li>
                  <li>
                      <a href="#skills">Skills</a>
                  </li>
                  <li>
                      <a href="#projects">Projects</a>
                  </li>
                  <li>
                      <a href="#contact">Contact</a>
                  </li>
                </ul>
            </div>
            <img className={styles.mode}
                    src={menuOpen
                        ? getImageUrl("nav/Dark.png")
                        : getImageUrl("nav/Light.png")
                    }
                    alt="menu-button"
                    onClick={()=> setMenuOpen(!menuOpen)}
            /> 
        </nav>
    )
}

export default Navbar