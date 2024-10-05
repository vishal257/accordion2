import './App.css'
import Card from './components/Card'
import inspirationImg from '../public/assets/images/ufo.jpg';
function App() {
 
  const data = [
    {
      title: "Inspiration",
      image: inspirationImg,
      content: {
        cont1:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus aperiam magni repellat! Quasi alias saepe laborum perferendis consequuntur sequi cum deserunt nulla! Cupiditate eaque soluta nihil sunt rem? reiciendis unde ullam accusantium?",
        cont2:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione sequi nihil odit alias delectus, consectetur eius, ab laboriosam illo sunt sed ducimus laudantium a voluptas, recusandae esse aut qui.",
      },
      colors: {
        active: "#FFBDC5",
        passive: "#F07485",
      },
    },
    {
      title: "Find Work",
      image: inspirationImg,
      content: {
        cont1:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus aperiam magni repellat! Quasi alias saepe laborum perferendis consequuntur sequi cum deserunt nulla! Cupiditate eaque soluta nihil sunt rem? reiciendis unde ullam accusantium?",
        cont2:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione sequi nihil odit alias delectus, consectetur eius, ab laboriosam illo sunt sed ducimus laudantium a voluptas, recusandae esse aut qui.",
      },
      colors: {
        active: "#f8d0a5",
        passive: "#FFB76B",
      },
    },
    {
      title: "Learn Design",
      image: inspirationImg,
      content: {
        cont1:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus aperiam magni repellat! Quasi alias saepe laborum perferendis consequuntur sequi cum deserunt nulla! Cupiditate eaque soluta nihil sunt rem? reiciendis unde ullam accusantium?",
        cont2:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione sequi nihil odit alias delectus, consectetur eius, ab laboriosam illo sunt sed ducimus laudantium a voluptas, recusandae esse aut qui.",
      },
      colors: {
        active: "#f89785",
        passive: "#FF674D",
      },
    },
    {
      title: "Hire Designers",
      image: inspirationImg,
      content: {
        cont1:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus aperiam magni repellat! Quasi alias saepe laborum perferendis consequuntur sequi cum deserunt nulla! Cupiditate eaque soluta nihil sunt rem? reiciendis unde ullam accusantium?",
        cont2:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione sequi nihil odit alias delectus, consectetur eius, ab laboriosam illo sunt sed ducimus laudantium a voluptas, recusandae esse aut qui.",
      },
      colors: {
        active: "#d277b2",
        passive: "#D260AA",
      },
    },
    {
      title: "Work Hard",
      image: inspirationImg,
      content: {
        cont1:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus aperiam magni repellat! Quasi alias saepe laborum perferendis consequuntur sequi cum deserunt nulla! Cupiditate eaque soluta nihil sunt rem? reiciendis unde ullam accusantium?",
        cont2:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione sequi nihil odit alias delectus, consectetur eius, ab laboriosam illo sunt sed ducimus laudantium a voluptas, recusandae esse aut qui.",
      },
      colors: {
        active: "#68f768",
        passive: "#4fc24f",
      },
    },
  ];


  return (
    <>
      <h1>Accordion 2</h1>
      <section className='main-content'>
        <div className='accordion-container'>
          {
            data.map(({title,image,content,colors})=>(
              <Card title={title} image={image} content={content} colors={colors}/>
              )
            )
          }
        </div>
      </section>
    </>
  )
}

export default App
