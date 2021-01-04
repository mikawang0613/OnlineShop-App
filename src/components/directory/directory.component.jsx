import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
              },
              {
                title: 'womens',
                imageUrl: 'https://images.all-free-download.com/images/graphiclarge/fashionable_women_icons_colored_cartoon_design_6830012.jpg',
                size: 'large',
                id: 4
              },
              {
                title: 'mens',
                imageUrl: 'https://image.freepik.com/free-vector/modern-men-s-clothing-set_23-2147523109.jpg',
                size: 'large',
                id: 5
              }
            ]
          };
    }

    render(){
        return (
            <div className = "directory-menu">
                {this.state.sections.map(({title,imageUrl,id,size}) => (
                    <MenuItem key = {id} title={title} imageUrl = {imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}


export default Directory;


