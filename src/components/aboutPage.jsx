import React, { Component } from 'react';
class about extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="background-header">
                    <div className="ui text container">
                        <div className="ui stackable two column grid">
                            <div className="four wide column">
                            <h1 className="h1-ABOUT">ABOUT</h1>
                            </div>
                            <div className="twelve wide column">
                            <p className = "color-about-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore id nam voluptates, repellendus harum ipsam ducimus recusandae </p>
                            <hr size="2"/>
                            <p className = "color-about-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat voluptatem aut ipsum maiores quo eaque iusto natus eius voluptatibus vero molestiae quam, repudiandae alias, illo possimus deleniti mollitia suscipit necessitatibus libero in. Ab hic reprehenderit omnis asperiores magni animi? Quaerat non a, eligendi deleniti vel earum delectus aspernatur corrupti id!</p>
                            <p className = "color-about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore numquam nulla hic? Aliquam, molestias aut. Quas repellendus quod perspiciatis perferendis nulla sapiente, sequi ullam porro unde reprehenderit voluptatem, dolor iste adipisci deleniti aut dolorem totam accusamus magnam illo, officia rerum consequuntur? Recusandae quasi nam vel, rerum praesentium sed, vitae quaerat velit nesciunt in maxime quos </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p></p>
            </React.Fragment>
         );
    }
}
 
export default about;