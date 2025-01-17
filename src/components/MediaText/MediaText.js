import {GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export const MediaText = ({verticalAlignment, className, style, mediaPosition, gatsbyImage, children}) => {
    const content = 
            <div className={`p-4 flex ${verticalAlignment === "center" ? "items-center" : "" }`}>
            <div>{children}</div>
            </div>;
            return (
                <div style={style} className={className}>
                    {mediaPosition === "right" && content
                    }
                    <div><GatsbyImage alt="" image={gatsbyImage}/></div>
                    {mediaPosition !== "right" && content
                    }
                    
                </div>
                );
}