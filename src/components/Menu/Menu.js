import { graphql, useStaticQuery, Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { CallToActionButton } from "../CalltoActionButton";

export const Menu = () => {
    const data = useStaticQuery(graphql`
    query MainMenuQuery {
        wp {
          acfOptionsMainMenu {
            mainMenu {
              callToActionButton {
                destination {
                  ... on WpPage {
                    uri
                  }
                }
                label
              }
              menuItems {
                root {
                  destination {
                    ... on WpPage {
                      uri
                    }
                  }
                  label
                }
                subMenuItem {
                  destination {
                    ... on WpPage {
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
        }
      }
    `)
    console.log("Main Menu Data", data)
    const {menuItems} = data.wp.acfOptionsMainMenu.mainMenu;
    return (<div className="bg-gradient-to-tr from-emerald-600 to-emerald-900 text-white px-4 items-center font-bold sticky top-0 z-20 h-16 flex justify-between" >
        <div>
            <Link to ="/">
                <StaticImage src="../../../static/icon.png" layout="fixed" height={30} alt="logo"></StaticImage>
            </Link>
            
        </div>
        <div className="flex h-full flex-1 justify-end">
            {(menuItems || []).map((menuItem, index) => (
                <div key={index} className=" group relative flex h-full cursor-pointer hover:bg-green-700">
                    <Link to = {menuItem.root.destination.uri} className="px-4 flex h-full items-center text-white no-underline">
                    {menuItem.root.label}
                    
                    </Link>
                    {!!menuItem.subMenuItem?.length &&
                    <div className="bg-green-700 text-right absolute top-full right-0 hidden group-hover:block">
                        {menuItem.subMenuItem.map((subMenuItem , index) => (
                            <Link to = {subMenuItem.destination.uri} key={index} className=" block whitespace-nowrap text-white p-4 no-underline hover:bg-green-600">
                            {subMenuItem.label}
                            </Link>
                        ))}
                    </div>
                    }
                </div>
            ))}
        </div>
        <div className="pl-4">
            <CallToActionButton label={data.wp.acfOptionsMainMenu.mainMenu.callToActionButton.label} destination={data.wp.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri}/>
        </div>
    </div>
    );
}