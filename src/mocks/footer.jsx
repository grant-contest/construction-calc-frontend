import React from 'react';
import Logo from "../components/UI/logo";

const Footer = () => {
  return (
        <footer className="footer mt-0 mt-5">
          <div className="footer__content">
            <div className="footerMenu px-10 py-12"
                 style={{backgroundColor: "#f5f7f9"}}>
              <div className="footerMenu__logoContainer"></div>
              <div className="footerMenu__linksContainer flex justify-between">
                <div className="footerMenu__linksContainer__group">
                  {/*<div className="logoSplitted--TVOSc logo" role="button" tabIndex="0"><a aria-current="page"*/}
                  {/*                                                                        className="active"*/}
                  {/*                                                                        target="_self" href="/">*/}
                  {/*  <div className="logoSplitted__imageWrapper--I4o7q">*/}
                  {/*    <img*/}
                  {/*      className="image--ssuGm logoSplitted__image--GKH_r"*/}
                  {/*      src="https://s32640.cdn.ngenix.net/external-resources/images/logo/logo-19359685-MAIN_SELO.svg"*/}
                  {/*      alt="Своё | Село - от Россельхозбанка"></img>*/}
                  {/*    </div>*/}
                  {/*</a>*/}
                  {/*  <div className="logoSplitted__secondaryLink--VvDRk"><a aria-current="page"*/}
                  {/*                                                         className="logoSplitted__secondaryLink--VvDRk active"*/}
                  {/*                                                         target="_self" href="/"><span*/}
                  {/*      className="logoSplitted__title--lziwr"><span>Своё </span><span*/}
                  {/*      className="formattedTitle__divider--rvPBE"></span><span*/}
                  {/*      className="formattedTitle__secondTitle--zox7e"> Село</span></span></a><a aria-current="page"*/}
                  {/*                                                                               className="logoSplitted__subTitle--sqxFU active"*/}
                  {/*                                                                               target="_self"*/}
                  {/*                                                                               href="/">от*/}
                  {/*    Россельхозбанка</a></div>*/}
                  {/*</div>*/}
                  <Logo/>
                  <ul className="footer__contacts mt-7 mb-11 text-sm">
                    <li className="footer__contact"><a href="tel:8 (800) 100-0-100" target="" rel="noopener">8 (800)
                      100-0-100</a></li>
                    <li className="footer__contact"><a href="tel:7787" target="" rel="noopener">7787 (МТС, Мегафон,
                      Билайн и Tele2)</a></li>
                  </ul>
                  <div className="footerMenu__linksContainer__group">
                    <div className="footerMenu__linksContainer__links">
                      <div className="footerMenu__linksContainer__links__title">По техническим вопросам
                        <button className="button--a8TAD button__inline--cuDrn footerMenu__linksContainer__links__arrow"
                                type="button">
                          {/* Для малых экранов (весь список ниже сворачивается и появлется стрелка) */}
                          {/*<img className="image--ssuGm" src="/common/images/blank.png"*/}
                          {/*                         alt="Стрелка вниз" width="25" height="25"></img>*/}
                        </button>
                      </div>
                      <ul className="footerMenu__linksContainer__links__disable mt-3 text-sm">
                        <li><a href="mailto:svoeselo_help@rshb.ru" target="" rel="noopener">svoeselo_help@rshb.ru</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footerMenu__linksContainer__group">
                  <div className="footerMenu__linksContainer__links">
                    <div className="footerMenu__linksContainer__links__title">Пользователям
                      {/*color: #969696;
                        font-size: 12px;
                        letter-spacing: 3px;
                        line-height: 1.67;
                        text-transform: uppercase;*/}
                      <button className="button--a8TAD button__inline--cuDrn footerMenu__linksContainer__links__arrow"
                              type="button">
                        {/*<img className="image--ssuGm"*/}
                        {/*                         src="https://s32640.cdn.ngenix.net/common/images/icons/arrow-down-left.svg"*/}
                        {/*                         alt="Стрелка вниз" width="25" height="25"></img>*/}
                      </button>
                    </div>
                    <ul className="footerMenu__linksContainer__links__disable mt-3 text-sm">
                      <li><a target="_self" href="/choose">Подобрать недвижимость</a></li>
                      <li><a target="_self" href="/mortgage/programs">Ипотечные программы</a></li>
                      <li><a aria-current="page" className="active" target="_self" href="/build-house">Построить дом</a>
                      </li>
                      <li><a target="_self" href="/cards">Банковские карты</a></li>
                      <li><a target="_self" href="/credits">Потребительские кредиты</a></li>
                      <li><a target="_self" href="/house-projects">Проекты</a></li>
                      <li><a target="_self" href="/services/category/insurance">Страхование</a></li>
                      <li><a target="_self" href="/services/category/appraisal-report">Оценка недвижимости</a></li>
                      <li><a target="_self" href="/architectural-projects">Архитектурные проекты</a></li>
                      <li><a href="https://t.me/svoe_selo" target="" rel="noopener">Блог о загородной жизни и
                        ипотеке</a></li>
                      <li><a target="_self" href="/mortgage/lgotnaya-ipoteka-na-chasthiy-dom">Меры поддержки</a></li>
                    </ul>
                  </div>
                </div>
                <div className="footerMenu__linksContainer__group">
                  <div className="footerMenu__linksContainer__links">
                    <div className="footerMenu__linksContainer__links__title">О нас
                      <button className="button--a8TAD button__inline--cuDrn footerMenu__linksContainer__links__arrow"
                              type="button">
                        {/*<img className="image--ssuGm"*/}
                        {/*                         src="https://s32640.cdn.ngenix.net/common/images/icons/arrow-down-left.svg"*/}
                        {/*                         alt="Стрелка вниз" width="25" height="25"></img>*/}
                      </button>
                    </div>
                    <ul className="footerMenu__linksContainer__links__disable mt-3 text-sm">
                      <li><a href="https://www.rshb.ru/about/" target="_blank" rel="noopener">Россельхозбанк</a></li>
                      <li><a href="https://svoedom.ru" target="_blank" rel="noopener">Своё Жильё</a></li>
                      <li><a target="_self" href="/about">О проекте</a></li>
                      <li><a target="_self" href="/news">Журнал</a></li>
                      <li><a target="_self" href="/faq">Частые вопросы</a></li>
                    </ul>
                  </div>
                </div>
                <div className="footerMenu__linksContainer__group">
                  <div className="footerMenu__linksContainer__links mb-11">
                    <div className="footerMenu__linksContainer__links__title">Сотрудничество
                      <button className="button--a8TAD button__inline--cuDrn footerMenu__linksContainer__links__arrow"
                              type="button">
                        {/*<img className="image--ssuGm" src="/common/images/blank.png"*/}
                        {/*     alt="Стрелка вниз" width="25" height="25"></img>*/}
                      </button>
                    </div>
                    <ul className="footerMenu__linksContainer__links__disable mt-3 text-sm">
                      <li><a href="https://partners.svoe-selo.ru" target="" rel="noopener">Стать партнёром</a></li>
                      <li><a href="/mortgage-portal/v2/public-data/file?id=42" target="" rel="noopener" download="">Инструкция
                        по взаимодействию</a></li>
                      <li><a target="_self" href="/partners">С нами сотрудничают</a></li>
                    </ul>
                  </div>
                  <div className="footerMenu__linksContainer__links">
                    <div className="footerMenu__linksContainer__links__title">Публикации на сайте
                      <button className="button--a8TAD button__inline--cuDrn footerMenu__linksContainer__links__arrow"
                              type="button">
                        {/*<img className="image--ssuGm" src="/common/images/blank.png"*/}
                        {/*                         alt="Стрелка вниз" width="25" height="25"></img>*/}
                      </button>
                    </div>
                    <ul className="footerMenu__linksContainer__links__disable mt-3 text-sm">
                      <li><a target="_self" href="/account/articles">Стать автором</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="copyright__container flex justify-between items-center my-0 py-10 mx-auto max-w-7xl">
                <div className="copyright__column flex">
                  <img className="image--ssuGm copyright__logo mr-11"
                                                        src="https://s32640.cdn.ngenix.net/common/images/icons/logo-bank.svg"
                                                        alt="Официальный сервис подачи заявок на ипотеку от Россельхозбанка"
                       width="176" height="41"></img>
                  <div style={{color: "#bdbdbd"}} className="copyright__content text-xs">
                    © 2000-2023 АО «Россельхозбанк»<div>Генеральная лицензия Банка России № 3349 от 12 августа 2015</div>
                  </div>
                </div>
                <div className="copyright__column flex">
                  <div className="socialLinks flex pr-20">
                    <a className="socialLinks__link mr-3 mb-1.5" href="https://vk.com/svoeselo"
                                                  target="_blank" rel="noopener">
                    <img className="image--ssuGm"
                         src="https://s32640.cdn.ngenix.net/common/images/icons/social-vkontakte.svg"
                         alt="https://vk.com/svoeselo"
                         width="32" height="32"></img>
                    </a>
                    <a className="socialLinks__link mr-3 mb-1.5" href="https://t.me/svoe_selo" target="_blank" rel="noopener">
                      <img className="image--ssuGm"
                      src="https://s32640.cdn.ngenix.net/common/images/icons/social-telegram.svg"
                      alt="https://t.me/svoe_selo" width="32" height="32"></img>
                    </a>
                  </div>
                  <div className="copyright__address pr-11 text-xs">
                    119034, г. Москва, Гагаринский пер., д.3.
                    <div>E-mail: <a
                      href="mailto:office@rshb.ru" target="" rel="noopener">office@rshb.ru</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="termsOfUse">
            <div className="termsOfUse__content flex items-center justify-start py-10 text-xs ml-1"
              style={{backgroundColor: "#f5f7f9"}}>
              <a className="pr-5" href="/mortgage-portal/v2/public-data/file?id=18" target="_blank"
                                                    rel="noopener" download="">Политика обработки персональных
              данных</a>
              <a className="px-5 border-l" href="/mortgage-portal/v2/public-data/file?id=25" target="_blank" rel="noopener" download="">Пользовательское
              соглашение</a>
              <a className="pl-5 border-l" href="/mortgage-portal/v2/public-data/file?id=26" target="_blank" rel="noopener"
                               download="">Памятка по цифровой безопасности</a>
            </div>
          </div>
          <div className="bottomText bg-black text-white">
            <div className="bottomText__container">
              <div className="bottomText__container__content max-w-5xl py-5 text-xs ml-1">Информация об объектах недвижимости предоставлена «Циан
                групп». АО Россельхозбанк не несет ответственности за полноту и качество указанной информации, а также
                за предоставляемые организацией услуги, в том числе консультационные услуги.
              </div>
            </div>
          </div>
        </footer>
  );
};

export default Footer;