import React, { useState, useEffect } from "react";

const Preloader = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingPercentage((prevPercentage) => {
                const newPercentage = prevPercentage + 1;
                if (newPercentage >= 100) {
                    clearInterval(interval);
                }
                return newPercentage;
            });
        }, 20); // You can adjust the interval duration to control the loading speed

        return () => {
            clearInterval(interval);
        };
    }, []);

    const loaderStyle = {
        display: "block",
        position: "relative",
        height: "32px",
        width: "200px",
        background: "var(--extra3)",
        border: "2px solid #fff",
        overflow: "hidden",
        marginTop: "16px", borderRadius: "16px",
  

    };

    const loaderBeforeStyle = {
        content: '""',
        background: "#0093ed",
        position: "absolute",
        left: "0",
        top: "0",
        width: `${loadingPercentage}%`,
        height: "100%",
        animation: "loading 10s linear infinite",
        borderRadius: "inherit",
    
    };

    const loaderAfterStyle = {
        content: '""',
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: "24px",
        lineHeight: "32px",
        color:"var(--accent-20)",
        mixBlendMode: "difference",
        animation: "percentage 10s linear infinitex "
    };

    return (
        <div className="preload">
            <img id="logo" src="../assets/icon/favicon.webp" alt="" />
            <span style={loaderStyle}>
                <span style={loaderBeforeStyle}></span>
                <span style={loaderAfterStyle}>{loadingPercentage}%</span>
            </span>

        </div>
    );
};

export default Preloader;
