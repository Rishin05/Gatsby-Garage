import React from "react";
import { Link } from "gatsby";

export const CallToActionButton = ({label, destination}) => {
    return <Link to = {destination} className="text-black inline-block cursor-pointer bg-yellow-500 py-2 px-4 font-bold uppercase no-underline rounded-sm hover:bg-yellow-400 transition-colors"> {label}</Link>;
}