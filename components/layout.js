import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export const siteTitle = "Site";

export default function Layout({ children, home }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="max-w-screen-xl xs:w-full sm:m-auto sm:m-0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={process.env.APP_DESCRIPTION} />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="bg-primary text-white">
        <div className="w-full px-12">
          <div className="flex justify-between border-b-2 py-4 border-white">
            <div>Ligue 35230413</div>
            <div>Instagram</div>
          </div>
        </div>
        <div className="md:flex justify-between items-center px-12 py-6">
          <div>
            <img src="/images/avatar.jpg" className="w-32 h-32 mx-auto" />
          </div>
          <div className="text-center my-5">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="text"
              placeholder="search"
            />
          </div>
          <div className="text-center">
            <span className="mr-3">carrinho</span>
            <span className="">login</span>
          </div>
        </div>

        <nav className="flex items-center justify-between flex-wrap bg-secondary p-6 pl-12">
          <div className="block md:hidden flex justify-between w-full">
            <div className="">Menu</div>
            <button
              className="flex items-center px-3 py-2 border rounded text-white border-primary hover:text-white hover:border-white"
              onClick={handleOpen}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
              open ? "" : "hidden"
            }`}
          >
            <div className="text-sm">
              <Link href="/">
                <a
                  href="#responsive-header"
                  className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4"
                >
                  Home
                </a>
              </Link>
              <Link href="/categories">
                <a
                  href="#responsive-header"
                  className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4"
                >
                  Categorias
                </a>
              </Link>
              <Link href="/products">
                <a
                  href="#responsive-header"
                  className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4"
                >
                  Produtos
                </a>
              </Link>
              <Link href="/about">
                <a
                  href="#responsive-header"
                  className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4"
                >
                  Sobre nós
                </a>
              </Link>
              <Link href="/contact-us">
                <a
                  href="#responsive-header"
                  className="block mt-4 md:inline-block md:mt-0 text-white hover:text-white"
                >
                  Contato
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="bg-white px-12 py-8">{children}</main>
      <footer className="w-full md:flex p-12 bg-secondary text-white justify-between md:text-left text-center">
        <div className="mb-8 sm:m-0">
          <img src="/images/avatar.jpg" className="w-32 h-32 mx-auto" />
          <br />
          <ul>
            <li>Rua Governador Jorge Lacerda</li>
            <li>Número 609 - Complemento Sala 2</li>
            <li>Telefone: 48 9 8476-8499</li>
          </ul>
        </div>
        <div className="mb-8 sm:m-0">
          <h4>Links</h4>
          <ul>
            <li>
              <a>Sobre nós</a>
            </li>
            <li>
              <a>Contato</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Horário de funcionamento</h4>
          <ul>
            <li>Segunda-Sexta: 8:00h às 18:00h</li>
            <li>Sábado: 8:00h às 12:00h</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
