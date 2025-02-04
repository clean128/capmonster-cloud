import ytIcon from "../assets/24x24_yt.svg";
import tgIcon from "../assets/24x24_tg.svg";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container grid grid-cols-2 py-20 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="flex flex-col gap-3 text-lg">
          <h3 className="mb-2 font-bold uppercase text-muted-foreground">Resources</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              Documentation
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              Blog
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              Support
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              Partners
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-lg">
          <h3 className="mb-2 font-bold uppercase text-muted-foreground">Articles</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              reCaptcha
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              Cloudflare
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              TextCaptcha
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-lg">
          <h3 className="mb-2 font-bold uppercase text-muted-foreground">Products</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              CapMonster Cloud API
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              Chrome Extension
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-100 hover:opacity-80"
            >
              Firefox Extension
            </a>
          </div>
        </div>

        <div />
        <div />

        <div className="flex flex-col gap-3 text-lg ">
          <h3 className="mb-2 font-bold uppercase text-muted-foreground">Subscribe</h3>
          <div className="flex gap-4">
            <a
              rel="noreferrer noopener"
              href="/"
            >
              <img src={ytIcon} className="size-7" />
            </a>
            <a
              rel="noreferrer noopener"
              href="/"
            >
              <img src={tgIcon} className="size-7" />
            </a>
          </div>
        </div>
      </section>

      <hr className="w-full m-auto mb-8" />

      <section className="container flex justify-between pb-8">
        <h3>
          &copy; 2024 CapMonster Cloud. All rights reserved.
        </h3>
        <div className="flex gap-8">
          <a
            rel="noreferrer noopener"
            href="/"
          >
            User agreement
          </a>
          <a
            rel="noreferrer noopener"
            href="/"
          >
            Contacts
          </a>
        </div>
      </section>
    </footer>
  );
};
