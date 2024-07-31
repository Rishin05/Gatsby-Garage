import React from "react";
import { BlockRendererProvider} from "@webdeveducation/wp-block-tools";
import { blockRendererComponent } from "../config/blockRendererComponent";
import {Link } from "gatsby";
import {Layout} from "../components"

const Page = (props) => {
    console.log("page Props", props)
    return (
    <Layout>
        <BlockRendererProvider allBlocks={props.pageContext.blocks} renderComponent={blockRendererComponent}
    siteDomain={process.env.GATSBY_WP_URL}
    customInternalLinkComponent={({children, internalHref, className}, index ) => {
        return (<Link to = {internalHref} className={className} key={index}>{children}</Link>);
    }}/>
    </Layout>
    );
    
};

export default Page;