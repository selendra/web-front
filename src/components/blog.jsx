import React, { Component } from "react";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Modal, Image } from "semantic-ui-react";
import { Facebook } from "react-content-loader";
import parse from "html-react-parser";

class Blog extends Component {
  state = {
    data: null,
    loading: true,
    open: false,
    title: "",
    content: "",
    thumbnail: ""
  };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  close = () => this.setState({ open: false });

  displayData = ({ ...data }) => {
    this.setState({ open: true });
    this.setState({ title: data.title });
    this.setState({ content: data.content });
    this.setState({ thumbnail: data.thumbnail });
  };

  card = () => {
    return <div>Hello World</div>;
  };

  componentDidMount() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/koompi"
      )
      .then(res => {
        this.setState({ data: res.data.items });
      });
  }

  displayLoading = () => {
    let loading = [];
    let i = 0;
    for (let index = 0; index < 10; index++) {
      i = i + 1;
      loading.push(
        <div key={i} className="column blur">
          <Facebook />
        </div>
      );
    }
    return loading;
  };
  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <React.Fragment>
        <div className="blog-background-header">
          <Navbar />
          <h1 className="blog">BLOG</h1>
        </div>
        <Helmet>
          <title>ZEETOMIC | BLOG</title>
          <meta
            name="keywords"
            content="zeetomic blogs, news and events koompi, koompi news and events, koompi, smallworld venture"
          />
          <meta name="description" content="zeetomic blog" />
        </Helmet>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          size="small"
        >
          {/* <Modal.Header></Modal.Header> */}
          <Image src={this.state.thumbnail} fluid />
          <Modal.Content>
            <h3>{this.state.title}</h3>
            <p> {parse(this.state.content)} </p>
          </Modal.Content>
        </Modal>
        <div className="ui container">
          <center>
            <h1 style={{ padding: "5vh 0" }} className="zeetomic-event-header">
              News and Events
            </h1>
          </center>
          <div className="ui stackable three column grid">
            {!this.state.data ? (
              <React.Fragment>{this.displayLoading()}</React.Fragment>
            ) : (
              this.state.data.map(post => {
                return (
                  <React.Fragment key={post.pubDate.toString()}>
                    <div
                      className="column blur"
                      onClick={e => {
                        this.displayData({ ...post });
                      }}
                    >
                      <center className="shadowEvent">
                        <div
                          style={{
                            backgroundImage: `url(${post.thumbnail})`,
                            height: "200px",
                            backgroundPosition: "center center",
                            backgroundSize: "cover"
                          }}
                        />
                        <div className="index-background">
                          <React.Fragment>
                            <div className="byDate">
                              <span>
                                {new Date(post.pubDate).toDateString()}
                              </span>
                            </div>
                            <h4>{post.title}</h4>
                            <div className="index-description">
                              {parse(post.content.substring(0, 100) + "...")}
                            </div>

                            <div className="bySomeOne">
                              By: <span>{post.author}</span>
                            </div>
                          </React.Fragment>
                        </div>
                      </center>
                    </div>
                  </React.Fragment>
                );
              })
            )}
          </div>
        </div>
        <div style={{ padding: "3rem" }}>
          <center>
            <button className="ui button btn">Load More</button>
          </center>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
export default Blog;
