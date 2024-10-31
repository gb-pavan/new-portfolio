import './index.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardDisplay from '../CardDisplay';

const Projects = () => {
  const objectData = [  
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1730353903/swagger_zjnlgy.png', technology:"NextJS-Express-Swagger", url: 'https://ornate-fox-4aeb46.netlify.app/api',      description: 'Contact Management - Backend',    },
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1730353903/ecommerceapp_flmecp.png', technology:"React JS", url: 'https://ornate-fox-4aeb46.netlify.app/',      description: 'E-commerce Application',    },  
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1682926303/Screenshot_2023-05-01_130027_kr8zpr.png', technology:"Full Stack Application", url: 'https://gb-pavan.github.io/Banking-Client/',      description: 'Banking Application',    },
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681361805/festivals_jgvxrr.png',technology:"React JS",  url: 'https://gb-pavan.github.io/festival-Events-Status-ReactJS/',      description: 'Festival Event Status',    },    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681648560/quiz_hlwwas.png',technology:"React JS", url: 'https://gb-pavan.github.io/Quiz-using-React/',      description: 'Quiz',    },    
        
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681649069/typing_ep1zsc.png',technology:"Javascript", url: 'https://testtyping207.ccbp.tech/',      description: 'Speed Typing Test',    },    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681377255/todo_pdwo2b.png',technology:"Javascript",  url: 'https://gb-pavan.github.io/Todo-Application/',      description: 'Todos using HTML JS',    },    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1681374902/edtech_gljog7.png',technology:"Javascript",  url: 'https://gb-pavan.github.io/Edtech-Portal/',      description: 'Selective DropDown',    }  ];

  return (
    <div className="card-container">
      {objectData.map((object) => (
        <CardDisplay key={object.url} object={object} />
      ))}
    </div>
  );
};

export default Projects;