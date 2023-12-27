import { BsReddit } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer(){

    return <div>
        <div className="flex flex-col content-center justify-center ">
            <h3 className="self-center pb-5 text-lg font-bold "><strong>Socials</strong></h3>

            <div className="flex content-center justify-center text-xs md:lg:text-sm md:gap-4 gap-[0.7rem] lg:gap-20 md:lg:flex-row icons">
                <a href="https://www.reddit.com/user/GoreBunny1">
                <div className="flex flex-row content-center justify-center gap-2 hover:cursor-pointer hover:text-orange-600 hover:fill-white">
                    <div className=" reddit">
                        <BsReddit className="self-center w-5 h-5 text-3xl lg:md:text-4xl" />
                    </div>
                    <span className="self-center ">GoreBunny1</span>
                </div>
                </a>

                <a href="https://twitter.com/?lang=en">
                <div className="flex flex-row content-center justify-center gap-2 hover:cursor-pointer hover:text-black hover:fill-white ">
                    <div className=" twitter">
                        <BsTwitterX className="self-center w-5 h-5 text-4xl" />
                    </div>
                    <span className="self-center hover:text-white ">MaliciousBunny</span>
                </div>
                </a>

                <a href="https://github.com/Malicious-Bunny">
                <div className="flex flex-row content-center justify-center gap-2 hover:cursor-pointer hover:text-indigo-800 hover:fill-white ">
                    <div className=" github">
                        <BsGithub className="self-center w-5 h-5 text-4xl" />
                    </div>
                    <span className="self-center ">MaliciousBunny</span>
                </div>
                </a>
            </div>

        </div>
    </div>
}