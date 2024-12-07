import Card from '../Components/Card'
import { useContextGlobalStates } from '../Components/utils/global.context';

const Home = () => {

  const { state } = useContextGlobalStates();

  return (
    <main>
      <h1>Nuestros Dentistas</h1>
      <div className='card-grid'>
        {state.data.map((dentist) => (
          <Card name={dentist.name} username={dentist.username} id={dentist.id} key={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home