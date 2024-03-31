import Nav from './components/Nav'

function App() {

  return (
    <>
      <div className="bg-[#170a1a] px-20">
        <Nav/>

        <main className='text-white'>
          <div className="h-[calc(100vh-120px)] flex flex-col items-start justify-center pb-[120px]">
            <h2 className='text-gray-600 font-bold text-5xl'>
              I'm a
            </h2>

            <h1 className='font-bold text-7xl tracking-wider after:content-["."]'>
              Full Stack <br />
              Website <br />
              Developer 
            </h1>

            <button className='bg-red-300'>Previous Projects</button>
          </div>

          <div className="h-fullvh">
            Abortar
          </div>
        </main>
      </div>
    </>
  )
}

export default App
