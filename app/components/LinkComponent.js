import Link from "next/link";
import React from "react";


const BeautifulBox = () => {
    return (
        <div className="outer-box">
            <h2 className="box-title">Welcome Box ✨</h2>

            <div className="inner-boxes">
                <div className="inner-box">
                    <Link href="/meals" className="beautiful-button">
                        MEALS 🍽️
                    </Link>
                </div>
                <div className="inner-box">
                    <Link href="/community" className="beautiful-button">
                        COMMUNITY 👥
                    </Link>
                </div>
                <div className="inner-box">
                    <Link href="meals/share" className="beautiful-button">
                        SHARE YOUR MEAL 🍽️
                    </Link>
                </div>
            </div>

            <Link href="/about" className="beautiful-button">
                Go to About Page 🚀
            </Link>
        </div>
    );
};

export default BeautifulBox;
