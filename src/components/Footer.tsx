import React, {useState} from 'react';
import {CiTwitter} from "react-icons/ci"
import {VscGithubAlt} from "react-icons/vsc";
import {AiOutlineLinkedin,AiOutlineInstagram} from "react-icons/ai";

const Footer = () => {

    const [size1, setSize1] = useState<number>(20)
    const [size2, setSize2] = useState<number>(20)
    const [size3, setSize3] = useState<number>(20)
    const [size4, setSize4] = useState<number>(20)

    return (
        <section className="wrapper my-14">
            <div className="grid grid-cols-4 w-[35%] mx-auto ">
                <a href="https://github.com/misato0804" target="_blank">
                    < VscGithubAlt
                        className="mx-auto cursor-pointer duration-300"
                        size={size1}
                        onMouseEnter={() => setSize1(25)}
                        onMouseLeave={() => setSize1(20)}
                    />
                </a>
                <a href="linkedin.com/in/misato-tanno-a2b475221" target="_blank">
                    < AiOutlineLinkedin
                        className="mx-auto cursor-pointer duration-300"
                        size={size2}
                        onMouseEnter={() => setSize2(25)}
                        onMouseLeave={() => setSize2(20)}
                    />
                </a>
                <a href="https://twitter.com/maisa0804" target="_blank">
                    < CiTwitter
                        className="mx-auto cursor-pointer duration-300"
                        size={size3}
                        onMouseEnter={() => setSize3(25)}
                        onMouseLeave={() => setSize3(20)}
                    />
                </a>
                <a href="https://www.instagram.com/maisa_0804/" target="_blank">
                    < AiOutlineInstagram
                        className="mx-auto cursor-pointer duration-300"
                        size={size4}
                        onMouseEnter={() => setSize4(25)}
                        onMouseLeave={() => setSize4(20)}
                    />
                </a>
            </div>
        </section>
    );
};

export default Footer;