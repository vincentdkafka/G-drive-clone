import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div  className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/logo2.png"
            alt="logo"
            width={200}
            height={200}
            className="h-auto"
          />

          <div className="space-y-5 text-white">
            <h1 className="h1" >
                Manage your Files the Best way
            </h1>
            <p>
                This is Place where you can store all  your document
            </p>
          </div>
          <Image src='/folder2.png' alt='logo2' width={342} height={342} className="transition-all  hover:scale-110"/>
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-10" >
        <div className="mb-16 lg:hidden">
          <Image
          src="/logo3.png"
          alt="logo"
          width={224}
          height={82}
          className="h-auto w-[200px] lg:w-[250px]"
          
          />

        </div>
        {children}

      </section>
      
    </div>
  );
};

export default Layout;
