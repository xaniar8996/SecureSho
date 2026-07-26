import { motion } from "framer-motion";
import PasswordDisplay from "./PasswordDisplay";
import { useEffect, useState } from "react";

export default function Index() {

    const [passLegth, setPassLegth] = useState<number>(16);
    const [password, setPassword] = useState<string>("");
    const [incloudUpper, setIncloudUpper] = useState<boolean>(false);
    const [incloudLower, setIncloudLower] = useState<boolean>(false);
    const [incloudNumbers, setIncloudNumbers] = useState<boolean>(false);
    const [incloudSymbols, setIncloudSymbole] = useState<boolean>(false);

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbols = "!@#$%^&*()[]_<>?{}*";

    const generatePassword = () => {
        let chars = "";
        if (incloudUpper) chars += upperChars;
        if (incloudLower) chars += lowerChars;
        if (incloudNumbers) chars += numberChars;
        if (incloudSymbols) chars += symbols;

        if (!chars) {
            setPassword("");
            return;
        }

        let generatedPass = "";
        for (let i = 0; i < passLegth; i++) {
            generatedPass += chars[Math.floor(Math.random() * chars.length)]
        }

        setPassword(generatedPass);
    }

    useEffect(() => {
        generatePassword();
    }, [passLegth, incloudUpper, incloudLower, incloudNumbers, incloudSymbols]);

    const getPassStrength = () => {
        let score = 0;
        if (incloudUpper) score++;
        if (incloudLower) score++;
        if (incloudNumbers) score++;
        if (incloudSymbols) score++;
        if (passLegth >= 16) score++;

        if (score <= 2)
            return {
                text: "ضعیف",
                textColor: "text-red-500",
                bgColor: "bg-red-500",
                width: "33%"
            };

        if (score <= 4)
            return {
                text: "متوسط",
                textColor: "text-yellow-500",
                bgColor: "bg-yellow-500",
                width: "50%"
            };

        return {
            text: "قوی",
            textColor: "text-green-500",
            bgColor: "bg-green-500",
            width: "100%"
        };
    }

    const strengthBar = getPassStrength();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-auto bg-white/5 rounded-3xl p-3 sm:max-w-lg sm:w-lg sm:p-5"
        >
            <PasswordDisplay password={password} />

            <div className="mb-10">
                <div
                    className={`h-2 rounded-full transition-all duration-300 ease-in-out ${strengthBar.bgColor}`}
                    style={{ width: strengthBar.width }}
                />

                <span className={`text-sm font-semibold ${strengthBar.textColor}`}>
                    {strengthBar.text}
                </span>
            </div>

            {/* generate */}
            <div>
                <div className="w-full h-auto grid grid-cols-1 justify-center items-center gap-10">
                    <div className="flex flex-col justify-center items-start gap-2">
                        <input type="range"
                            className="w-full range-slider-input "
                            value={passLegth}
                            min={6}
                            max={32}
                            onChange={(e) => setPassLegth(parseInt(e.target.value))} />
                        <span>{passLegth}</span>
                    </div>

                    <div className="grid grid-cols-2 justify-center items-center gap-7">
                        <div className="flex justify-start items-center gap-2">
                            <input
                                id="uppercase"
                                checked={incloudUpper}
                                onChange={() => setIncloudUpper(!incloudUpper)}
                                type="checkbox"
                                className="w-5 h-5 accent-secondary rounded cursor-pointer"
                            />
                            <label htmlFor="uppercase" className="cursor-pointer">حروف بزرگ داشته باشه</label>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <input
                                id="lowercase"
                                checked={incloudLower}
                                onChange={() => setIncloudLower(!incloudLower)}
                                type="checkbox"
                                className="w-5 h-5 accent-secondary rounded cursor-pointer"
                            />
                            <label htmlFor="lowercase" className="cursor-pointer">حروف کوچک داشته باشه</label>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <input
                                id="numbers"
                                checked={incloudNumbers}
                                onChange={() => setIncloudNumbers(!incloudNumbers)}
                                type="checkbox"
                                className="w-5 h-5 accent-secondary rounded cursor-pointer"
                            />
                            <label htmlFor="numbers" className="cursor-pointer">اعداد هم داشته باشه</label>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <input
                                id="symbols"
                                checked={incloudSymbols}
                                onChange={() => setIncloudSymbole(!incloudSymbols)}
                                type="checkbox"
                                className="w-5 h-5 accent-secondary rounded cursor-pointer"
                            />
                            <label htmlFor="symbols" className="cursor-pointer">حروف خاص داشته باشه</label>
                        </div>
                    </div>
                    {/* <button
                        type="button"
                        className="border-2 border-primary text-primary font-semibold py-2 px-4 rounded-xl
                 hover:bg-primary hover:text-white transition duration-300 ease-in-out cursor-pointer active:scale-95 hover:-translate-y-1"
                    >
                        تولید پسوورد
                    </button> */}
                </div>
            </div>
        </motion.div>
    )
}
