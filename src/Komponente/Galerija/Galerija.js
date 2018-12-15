import React from 'react';
import './Galerija.css';
import slike from "../MojeSlike/MojeSlike";
import classNames from "classnames";
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

export default class Galerija extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      indexTrenutneSlike: 0,
    }
  }

  promeniSliku() {
    let prosliindex= this.state.indexTrenutneSlike;
    console.log("index"+ prosliindex);
    console.log("duzina" + slike.length);
    if(prosliindex +1 ===slike.length) {
      this.setState({
        indexTrenutneSlike:0,
      })
    } else {
      this.setState({
        indexTrenutneSlike: prosliindex+1,
      })
    }
  }

  componentDidMount() {
    let intervalId= setInterval(()=> this.promeniSliku(), 4000)
  }

  render(){
    let sveslike=slike.map((item,index)=>{
      let sliderliklasa= classNames({
        "sliderslika": true,
        "slika-trenutna": index===this.state.indexTrenutneSlike,
        "slika-prosla": ((index===this.state.indexTrenutneSlike-1) || (index=== this.state.indexTrenutneSlike + slike.length -1)),
        "slika-sledeca": ((index===this.state.indexTrenutneSlike+1) || (index=== this.state.indexTrenutneSlike - slike.length +1)),
      });
      return (
        <li className={sliderliklasa} key={index}><img className="slider_slike" src={item}></img></li>
      )
    })

    let galerijaslika=slike.map((item,index)=>{

      return (
        <div className="pjedinacne_slike_div" key={index}>
          <img className="pjedinacne_slike_img" src={item}></img>
        </div>
      )
    })

    console.log(IMAGES)
    return(
      <div className="galerija_main_div">

        <div className="slider_div">
          <ul className="slider_ul">
          {sveslike}
          </ul>
        </div>

        <div className="pjedinacne_slike_main_div">

        <Gallery images={IMAGES}/>

        </div>

      </div>
    )
  }
}
