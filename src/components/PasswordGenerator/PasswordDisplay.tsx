import { useState } from "react";

type passwordProps = {
  password: string
}

export default function PasswordDisplay({ password }: passwordProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }

  return (
    <div className="w-full h-auto p-1 rounded-2xl flex flex-row justify-center items-center gap-2 bg-gray-800/50 backdrop-blur-sm mb-3">
      <input
        type="text"
        value={password}
        className="p-3 w-full text-white placeholder-gray-400 bg-transparent border-none focus:outline-none rounded-xl"
        placeholder="متن خود را وارد کنید..."
      />
      <button
        onClick={() => copyToClipboard()}
        className={`w-1/3 px-1 py-2 ${copied ? "bg-none" : "bg-primary"} font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer active:scale-95 sm:py-3 sm:px-3`}
      >
        {copied ? "کپی شد!" : "کپی کن"}
      </button>
    </div>

  )
}
