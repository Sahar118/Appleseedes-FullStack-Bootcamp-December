
import './App.css';
import Card from './Card';
import img1 from './Components/img/Zugpsitze_mountain.jpg'
// import { Link } from 'react-router-dom';

function App() {
  const differentCard = [
    {
      image: img1,
      title: 'mountain',
      description: 'What an amazing view!!!',
      link1: {
        url: 'https://www.youtube.com',
        p: 'hello'
      },
      link2: {
        url: 'https://www.google.com',
        p: 'hey'
      }


    },
    {
      image: img1,
      title: 'mountain',
      description: 'What an amazing view!!!',
      link1: {
        url: 'https://www.facebook.com',
        p: 'holla'
      },
      link2: {
        url: 'https://www.youtube.com',
        p: 'amigos'
      }

    },
    {
      image: img1,
      title: 'mountain',
      description: 'What an amazing view!!!',
      link1: {
        url: 'https://www.youtube.com',
        p: 'shalom'
      },
      link2: {
        url: 'https://www.google.com',
        p: 'shalom'
      }
    }
  ]

  return (
    <div className="App">
      <Card
        image={differentCard[0].image}
        title={differentCard[0].title}
        description={differentCard[0].description}
        link1={differentCard[0].link1}
        link2={differentCard[0].link2}
      />

      <Card
        image={differentCard[1].image}
        title={differentCard[1].title}
        description={differentCard[1].description}
        link1={differentCard[1].link1}
        link2={differentCard[1].link2}
      />

      <Card
        image={differentCard[2].image}
        title={differentCard[2].title}
        description={differentCard[2].description}
        link1={differentCard[2].link1}
        link2={differentCard[2].link2}
      />

    </div>

  );
}

export default App;
