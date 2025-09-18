import Cards from '../Cards/Cards'
import './Home.css'

function Home({ showCards }) {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Api Calling</h1>
        <p className="hero-subtitle">
          Browse through our user directory with beautiful cards showcasing user information.
        </p>
      </div>
      
      {showCards && (
        <section className="mt-20">
          <h2 className="text-center mb-20">Our Users</h2>
          <Cards />
        </section>
      )}
    </div>
  )
}

export default Home