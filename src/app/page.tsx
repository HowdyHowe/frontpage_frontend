import Card from "@/component/card";
import { BsInstagram, BsThreads, BsTwitch, BsTwitterX } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxChevronDown } from "react-icons/rx";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <header className="flex flex-row items-center justify-between w-[70%] h-[75px]">
        <p className="text-xl">UniloGo</p>

        <div className="flex flex-row gap-20">
          <div className="flex flex-row items-center gap-12">
            <p>Menu</p>
            <p>Product</p>
            <p>Article</p>
            <p>Features</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-row items-center gap-8">
            <BsInstagram/>
            <BsThreads/>
            <BsTwitterX/>
            <BsTwitch/>
          </div>
        </div>
      </header>

      <main className="relative flex flex-col items-center justify-center w-full">
        <img src="image2.jpg" alt="Background image" className="w-full h-[700px] object-cover" loading="lazy"/>
        <div className="absolute top-0 flex items-center justify-center w-full h-[700px] text-8xl font-semibold text-black">
          Shop & Enjoy
          <RxChevronDown size={30} className="absolute bottom-5 animate-bounce"/>
        </div>

        <div className="flex flex-col w-[70%] h-full">
          <div className="flex items-center justify-between text-gray-500 mt-[30px]">
            <p>Show All</p>
            <div className="flex flex-row items-center justify-center gap-12">
              <p>Web</p>
              <p>Game</p>
              <p>Branding</p>
              <p>Art</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-[30px]">
            <div className="flex flex-row items-center justify-center w-full">
              <FaMagnifyingGlass size={30} className="text-gray-400 mr-5"/>
              <div className="w-[500px] text-black px-3 bg-white rounded-lg border">
                  <input type="text" className="w-full h-[40px] bg-transparent" placeholder="Search"/>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-7 mt-[50px]">
              {
                Array.from({ length: 6 }, (_, index) => (
                  <Card key={index}/>
                ))
              }
            </div>

            <div className="flex flex-row items-center justify-center lg:w-[350px]">
                <div className="flex items-center justify-center w-[50px] h-[50px]">Previous</div>
                <div className="flex items-center justify-center w-[50px] h-[50px]">1</div>
                <div className="flex items-center justify-center w-[50px] h-[50px] border rounded-lg">2</div>
                <div className="flex items-center justify-center w-[50px] h-[50px]">3</div>
                <div className="flex items-center justify-center w-[50px] h-[50px]">Next</div>
            </div>
          </div>

          <div className="w-full h-full mt-[50px] px-5 border rounded-lg">
            <div className="flex flex-row items-center justify-between mt-[30px]">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className="min-w-[300px] h-[300px] bg-black rounded-full ml-5"/>
            </div>
            <div className="flex flex-row items-center justify-between mb-[30px]">
                <div className="min-w-[300px] h-[300px] bg-black rounded-full mr-5"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center w-full h-[500px] bg-black mt-[30px]">
        <div className="grid grid-cols-4 text-white gap-10 mb-10">
          <div className="flex flex-col items-start justify-start w-[200px] gap-4">
            <p className="text-xl font-semibold">About Us</p>
            <p className="font-light">Lorem</p>
            <p className="font-light">Ipsum</p>
            <p className="font-light">Sit Amet</p>
            <p className="font-light">Consectetur</p>
          </div>
          <div className="flex flex-col items-start justify-start w-[200px] gap-4">
            <p className="text-xl font-semibold">Our Company</p>
            <p className="font-light">Adipiscing</p>
            <p className="font-light">Elit</p>
            <p className="font-light">Sed</p>
            <p className="font-light">Do</p>
          </div>
          <div className="flex flex-col items-start justify-start w-[200px] gap-4">
            <p className="text-xl font-semibold">Helps & FAQs</p>
            <p className="font-light">Eiusmod</p>
            <p className="font-light">tempor</p>
            <p className="font-light">Incididunt</p>
            <p className="font-light">Magna Aliqua</p>
          </div>
          <div className="flex flex-col items-start justify-start w-[200px] gap-4">
            <p className="text-xl font-semibold">How To Shop</p>
            <p className="font-light">Ut</p>
            <p className="font-light">Enim Ad Minim</p>
            <p className="font-light">Veniam</p>
            <p className="font-light">Quis</p>
            <p className="font-light">Nostrud</p>
            <p className="font-light">Exercitation</p>
          </div>
        </div>

        <p className="text-gray-500">@Copyright UniLoGo company 2025. IDN. All right reserved. Terms of Service | Privacy Police</p>
        <p className="text-gray-500">UniLoGo | (+62) 123456 | TTY 12345</p>
      </footer>
    </div>
  );
}
