"use client";
import Image from "next/image";
import logo from "../assets/homeimage/logo-003.jpg";
import images from "../constant/images";
import TidioChat from "@/components/tidio";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();
  

  const handleClick = () => {
      // Navigate to another page 
      router.push("/connectwallet");
   
  };
  
  return (

    <div>
      {/* navbar section */}
      <div className="bg-black p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-l font-bold text-xl">
          <Image src={logo} alt="Image" className="h-12 w-auto" />
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          className="bg-yellow-300 text-black text-2xl font-black py-2 px-4 rounded"
        >
          BUY
        </button>
      </div>

      {/* header */}

      <div className="relative">
        {/* First div with full-width and full-height image */}
        <div className="relative h-screen">
          <Image
            className="object-cover object-center h-full w-full"
            src={images.bgDesk}
            alt="First Image"
          />
          {/* Second div - content overlay */}
          <div className="absolute inset-0 flex justify-center items-center mt-20 ">
            {/* Inner content div */}
            <div className=" p-8 rounded-lg max-w-lg w-full mx-4">
              {/* Top image */}
              <div className="mb-4">
                <Image
                  src={images.glassImg}
                  alt="Top Image"
                  className="w-full h-auto"
                />
              </div>

              {/* Column layout */}
              <div className="flex flex-col items-center ">
                {/* Div with 4 p tags */}
                <div className="mb-4 items-center ">
                  <p className="mb-2 text-white text-xl">Name: LANDWOLF</p>
                  <p className="mb-2 text-white text-xl">Symbol: LANDWOLF</p>
                  <p className="mb-2 text-white text-xl">
                    Total supply: 420,000,000,000,000,000
                  </p>
                  <p className="mb-2 text-white text-xl">
                    Address: 0xd14BcaAE5546226012bBf876baA66c90759A6D0D{" "}
                  </p>
                  <p className="mb-2 text-white text-xl">Tax: 0 </p>
                </div>
                {/* 9 link buttons in a grid */}
                <div className="grid grid-cols-3 gap-4">
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words ">
                    BUY IT
                  </button>
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words">
                    CHECK IT
                  </button>
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words">
                    CONTRACT RENOUNCED
                  </button>
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words">
                    UNISWAP
                  </button>
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words">
                    DEXTOOLS
                  </button>
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words">
                    DEXSCREENER
                  </button>
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words">
                    AVE.AI
                  </button>
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words">
                    DEXVIEW
                  </button>
                  <button onClick={handleClick} className="bg-yellow-400  border-4 border-black text-black font-bold py-2 px-8 rounded max-w-full break-words">
                    COINMARKETCAP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-7xl font-bold text-pink-400">ABOUT</div>
            <div className="mt-4">
              <p className="text-lg">🐺 Unleash the Wolf, Own the Land 🐺</p>
              <br />
              <br />
              <p className="text-lg">
                Introducing LANDWOLF ($LANDWOLF), the meme coin inspired by the
                relentless and powerful spirit of the wolf. Combining the allure
                of meme culture with the dynamic world of decentralized finance,
                $LANDWOLF is designed for the bold and adventurous, ready to
                seize opportunities and conquer the crypto landscape. Our
                community-driven approach ensures exciting opportunities, from
                exclusive NFT drops to staking rewards, all while maintaining
                transparency and innovation.
              </p>
              <br />
              <br />
              <p className="text-lg">
                Join the pack and embrace the future of meme coins with
                LANDWOLF. As we navigate the crypto wilderness together, we'll
                hunt for the best opportunities and protect our territory. The
                era of the wolf has begun – are you ready to run wild with us?
                🌕
              </p>
              <br />
              <br />
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <button onClick={handleClick} className="bg-pink-300 hover:bg-pink-200 text-white px-10 py-3 rounded-lg border-4 border-white">
                BUY NOW
              </button>
              <button className="bg-pink-300 hover:bg-pink-200 text-white px-14 py-3 rounded-lg border-4 border-white">
                CHART
              </button>
            </div>
            <div className="mt-8 flex space-x-9 justify-center px-16 mx-16">
              <Image
                src={images.twitter}
                alt="Image 1"
                className="rounded-lg"
                width={50}
                height={50}
              />
              <Image
                src={images.telegram}
                alt="Image 2"
                className="rounded-lg"
                width={50}
                height={50}
              />
              <Image
                src={images.github}
                alt="Image 3"
                className="rounded-lg"
                width={50}
                height={50}
              />
            </div>
            <div className="mt-8">
              <p className="text-lg">Final paragraph</p>
            </div>
          </div>
        </div>
      </div>

      <TidioChat />


      {/* key features */}
    </div>
  );
}
