import Image from "next/image";
import Chatbox from "@/app/assets/chatapp.png";

export default function Home() {
  const title = "Create Next App";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <Image src={Chatbox} alt="chat app" width={57} height={69} />
      <h1 className="text-black font-circular text-xl">Chatbox</h1>
    </div>
  );
}
