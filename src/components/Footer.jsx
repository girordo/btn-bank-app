import React from 'react'
import styles from '../styles'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row`}>
      <div className="mr-10 flex flex-1 flex-col justify-start">
        <img
          src={logo}
          alt="better than nubank bank"
          className="h-[72px] w-[266px] object-contain"
        />
        <p className={`${styles.paragraph} my-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>

        <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="ss:my-0 my-4 flex min-w-[150px] flex-col"
            >
              <h4 className="font-poppins text-[18px] font-medium leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins text-dimWhite hover:text-secondary cursor-pointer text-[16px] font-normal leading-[24px] ${
                      index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t-[#3F3R45] flex w-full flex-col items-center justify-between border-t-[1px] pt-6 md:flex-row">
      <p className="font-poppins text-center text-[18px] font-normal leading-[27px] text-white">
        2021 BTN Bank. All Rights Reserved.
      </p>
      <div className="mt-6 flex flex-row md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`h-[21px] w-[21px] cursor-pointer object-contain ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Footer
