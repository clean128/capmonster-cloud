import tick from "../assets/tick_gif.gif";
import recaptcha from "../assets/recaptcha.svg"
import geetest from "../assets/geetest.svg"
import turnstile from "../assets/turnstile.svg"
import datadome from "../assets/data-dome.svg"
import tencent from "../assets/tencent.svg"
import amazonwaf from "../assets/amazonwaf.svg"
import faucet from "../assets/faucet.svg"
import imerva from "../assets/imerva.svg"
import textcaptcha from "../assets/textcaptcha.svg"

export type TableColumn = {
  accessorKey: string
  header: string
}

export type Payment = {
  id: number
  captcha: JSX.Element
  price: JSX.Element
  success: JSX.Element
}

export const columns: TableColumn[] = [
  {
    accessorKey: "captcha",
    header: "Captcha",
  },
  {
    accessorKey: "price",
    header: "Price per 1,000",
  },
  {
    accessorKey: "success",
    header: "Success",
  },
];

export const mobileColumns: TableColumn[] = [
  {
    accessorKey: "captcha",
    header: "Captcha",
  },
  {
    accessorKey: "price",
    header: "Price per 1,000",
  },
];

export const data: Payment[] = [
  {
    id: 1,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={recaptcha} className="size-8" />
              <div className="flex items-end gap-1">
                <span >reCAPTCHA{" "}</span>
                <span className="pb-px text-base">v2</span>
              </div>
            </div>,
    price: <div className="-my-2.5 float-right md:float-none">
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-medium text-indigo-600">$ 0.04 * {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k images</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-medium">$ 0.6 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>
          </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}99%</span>
            </div>,
  },
  {
    id: 2,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={recaptcha} className="size-8" />
              <div className="flex items-end gap-1">
                <span >reCAPTCHA{" "}</span>
                <span className="pb-px text-base">v3</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium">$ 0.9 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}99%</span>
            </div>,
  },
  {
    id: 3,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={recaptcha} className="size-8" />
              <div className="flex items-end gap-1">
                <span >reCAPTCHA{" "}</span>
                <span className="pb-px text-base">Enterprise</span>
              </div>
            </div>,
    price: <div className="-my-2.5 float-right md:float-none">
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-medium text-indigo-600">$ 0.04 * {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k images</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[18px] font-medium">$ 1 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>
          </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}97%</span>
            </div>,
  },
  {
    id: 4,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={geetest} className="size-8" />
              <div className="flex items-end gap-1">
                <span>GeeTest</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium">$ 1.2 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}98%</span>
            </div>,
  },
  {
    id: 5,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={turnstile} className="size-8" />
              <div className="flex items-end gap-1 text-left">
                <span>Cloudflare Turnstile / Bot Challenge</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium">$ 1.3 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}99%</span>
            </div>,
  },
  {
    id: 6,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={datadome} className="size-8" />
              <div className="flex items-end gap-1">
                <span>DataDome</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium">$ 2.2 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}99%</span>
            </div>,
  },
  {
    id: 7,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={tencent} className="size-8" />
              <div className="flex items-end gap-1">
                <span>Tencent Captcha</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium">$ 1.6 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}99%</span>
            </div>,
  },
  {
    id: 7,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={amazonwaf} className="size-8" />
              <div className="flex items-end gap-1">
                <span>Amazon Waf</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium">$ 1.4 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}99%</span>
            </div>,
  },
  {
    id: 8,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={faucet} className="size-8" />
              <div className="flex items-end gap-1">
                <span>Faucet Pay</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium">$ 1 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}98%</span>
            </div>,
  },
  {
    id: 9,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={imerva} className="size-8" />
              <div className="flex items-end gap-1 text-left">
                <span>Imperva (Incapsula)</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium">$ 2 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}99%</span>
            </div>,
  },
  {
    id: 10,
    captcha: <div className="flex items-center gap-4 text-xl">
              <img src={textcaptcha} className="size-8" />
              <div className="flex items-end gap-1">
                <span>Text Captcha</span>
              </div>
            </div>,
    price: <div className="flex items-center float-right gap-3 md:float-none">
              <span className="text-[18px] font-medium text-indigo-600">$ 0.3 {" "}</span>
              <span className="pb-0.5 text-base text-muted-foreground">1k tokens</span>
            </div>,
    success: <div className="flex items-center justify-end gap-2 px-2 text-xl font-medium">
              <img src={tick} className="size-6" />
              <span>{" "}99%</span>
            </div>,
  },
];