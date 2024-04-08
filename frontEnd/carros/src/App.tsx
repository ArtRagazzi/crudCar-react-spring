import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCarData } from './hooks/useCarData';
import { Card } from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';

function App() { 

  const {data} = useCarData();
  const [isModalOpen, setIsModalOpen]= useState(false);
  const handleOpenModal = ()=>{
    setIsModalOpen(prev => !prev);
  }

  return (
    <div className='container'>
      <h1>Carros</h1>
      <div className='card-grid'>
        {data?.map(carData => 
          <Card
            price={carData.price} 
            title={carData.title} 
            image={carData.image}
          />
        )}
        
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
    
  )
}

export default App
