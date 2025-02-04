import proxyIcon from "../assets/proxy-icon.svg";
import { DataTable } from "./data-table"
import { columns, data, mobileColumns } from "./pricing-data"
import { Button } from "./ui/button";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 space-y-12 text-center sm:py-32"
    >
      <h2 className="mb-12 text-4xl font-bold lg:text-5xl md:text-center">
        Pricing
      </h2>

      <div className="flex justify-center gap-3 text-2xl font-medium">
        <img src={proxyIcon} />
        <p>Proxy included in the proce: save on CapMonster Cloud*</p>
      </div>

      <div className="hidden xl:mx-48 md:block">
        <DataTable columns={columns} data={data} />
      </div>

      <div className="block mx-0 md:hidden">
        <DataTable columns={mobileColumns} data={data} />
      </div>

      <Button className="w-full text-xl text-indigo-500 border md:text-white md:bg-indigo-500 md:border-none h-14 md:w-36 bg-indigo-50 md:hover:bg-indigo-400 hover:border-indigo-500 hover:bg-indigo-100">Try now</Button>
    </section>
  );
};
