import guitar from "./Assets/pic/guitar.png"
import clothing from "./Assets/pic/clothing.png"
import resort from "./Assets/pic/resort.png"
import edge from "./Assets/pic/edgeLedger.png"
import hotel from "./Assets/pic/HBT.png";
import news from "./Assets/pic/news.png";
import Hair from "./Assets/pic/hairStyle.com.png";
import meem from "./Assets/pic/meem.png";
import fun from "./Assets/pic/fun.png";
import ham from "./Assets/pic/hamburger.png";
import incomp from "./Assets/pic/incomplete.png";
import know from "./Assets/pic/knowledge.png";
import drum from "./Assets/pic/drums.png";


const PROJECT_DATA = [
  {
    id: 1,
    title: 'React',
    routeName: 'react',
    items: [
      {
        id: 2,
        name: 'Guitar Store',
        imageUrl: guitar,
        link: "https://axe-heros.netlify.com/"
      },
      {
        id: 3,
        name: 'Clothing Store',
        imageUrl: clothing,
        link: "https://crwn-collections.herokuapp.com/"
      },
      {
        id: 4,
        name: 'Resort',
        imageUrl: resort,
        price: 25,
        link: "https://hills-resort-project.netlify.com/"
      },
      {
        id: 5,
        name: 'Meem Generator',
        imageUrl: meem,
        link: "https://meem-generator.netlify.com/"
      }
    ]
  },
  {
    id: 2,
    title: 'CSS3',
    routeName: 'sneakers',
    items: [
      {
        id: 11,
        name: "Investment Company",
        imageUrl: edge,
        link: "https://edge-ledger-finance.netlify.com/"
      },
      {
        id: 12,
        name: 'Hotel Website',
        imageUrl: hotel,
        link: "https://static-hotel.netlify.com/"
      },
      {
        id: 13,
        name: 'News Website',
        imageUrl: news,
        link: "https://abhi-news.netlify.com/"
      },
      {
        id: 14,
        name: 'Hamburger Menu',
        imageUrl: ham,
        link: "https://hamburger-menu.netlify.com/"
      }
    ]
  },
  {
    id: 3,
    title: 'Fun',
    routeName: 'react',
    items: [
      {
        id: 2,
        name: 'Hair Style',
        imageUrl: Hair,
        link: "https://hair-style-com.netlify.com/"
      },
      {
        id: 3,
        name: "Drum Set",
        imageUrl: drum,
        link: "https://drum-set.netlify.com/"
      },
      {
        id: 4,
        name: 'Knowledge',
        imageUrl: know,
        link: "https://knowledge-resume.netlify.com/"
      },
      {
        id: 5,
        name: "Incomplete",
        imageUrl: incomp,
        link: "https://ttech-bblog.netlify.com"
      }
    ]
  }
];

export const PROJECT_PREVIEW =[
 {
  id: 1,
    title: 'React Projects',
    routeName: 'react',
    items: [
      {
        id: 1,
        name: "React Logo",
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fdevinterface-web%2Fproduction%2Ftechnologies%2F43%2Fmedium%2Freact-logo.png%3F1450793506&f=1&nofb=1 alt style="height: 305px"',
        price: 25
      }
    ]
 },
 {
  id: 2,
    title: 'CSS3 Projects',
    routeName: 'css',
    items: [
      {
        id: 2,
        name: "React Logo",
        imageUrl: 'http://2.bp.blogspot.com/-SA2WI88oDrU/TZswrHsbQdI/AAAAAAAAAQ0/EiVS4jOHXp4/s1600/CSS3.png alt style="height: 305px"',
        price: 25
      }
    ]
 },
 {
  id: 3,
    title: "Fun Projects",
    routeName: 'grave',
    items: [
      {
        id: 3,
        name: "React Logo",
        imageUrl: fun,
        price: 25
      }
    ]
 }
]


export default PROJECT_DATA;
