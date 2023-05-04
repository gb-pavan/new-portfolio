import './index.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Technology from '../Technology';

const Projects = () => {
  const objectData = [    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1682504547/html_avelsq.webp',      url: 'https://gb-pavan.github.io/festival-Events-Status-ReactJS/',      description: 'Festival Event Status',    },    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1682504644/css_hwwvky.webp',      url: 'https://gb-pavan.github.io/Quiz-using-React/',      description: 'Quiz',    },    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1682505231/Javascript_ntfwak.png',      url: 'https://aufn.ccbp.tech/',      description: 'E-cart Authentication',    },    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1682504876/react_js_il3h1j.png',      url: 'https://testtyping207.ccbp.tech/',      description: 'Speed Typing Test',    },    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1682505345/node_kmrfko.png',      url: 'https://gb-pavan.github.io/Todo-Application/',      description: 'Todos using HTML JS',    },    
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1682504955/python_sxo7mb.avif',      url: 'https://gb-pavan.github.io/Edtech-Portal/',      description: 'Selective DropDown',    },
    {      image: 'https://res.cloudinary.com/db9tsiti3/image/upload/v1683174069/sql2_iudbbl.png',      url: 'https://gb-pavan.github.io/Edtech-Portal/',      description: 'Selective DropDown',    }  ];

  return (
    <div className="skill-container">
      {objectData.map((object) => (
        <Technology key={object.url} object={object} />
      ))}
    </div>
  );
};

export default Projects;