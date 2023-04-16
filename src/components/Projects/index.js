import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CardDisplay from '../CardDisplay'

const Projects = () => {
    const objectData = [
        {
          image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681361805/festivals_jgvxrr.png',
          url: 'https://gb-pavan.github.io/festival-Events-Status-ReactJS/',
          description: 'Festival Event Status',
        },
        {
          image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681648560/quiz_hlwwas.png',
          url: 'https://gb-pavan.github.io/Quiz-using-React/',
          description: 'Quiz',
        },
        {
          image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681363019/E-commerce_jj4hhd.png',
          url: 'https://aufn.ccbp.tech/',
          description: 'E-cart Authentication',
        },
        {
          image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681649069/typing_ep1zsc.png',
          url: 'https://testtyping207.ccbp.tech/',
          description: 'Speed Typing Test',
        },
        {
          image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681377255/todo_pdwo2b.png',
          url: 'https://gb-pavan.github.io/Todo-Application/',
          description: 'Todos using HTML JS',
        },
        {
          image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681374902/edtech_gljog7.png',
          url: 'https://gb-pavan.github.io/Edtech-Portal/',
          description: 'Selective DropDown',
        },
      ];
      
    return (<div className="card-container">
        {objectData.map((object) => (
          <CardDisplay key={object.url} object={object} />
        ))}
      </div>)
}

export default Projects