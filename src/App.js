import userimg1 from './assets/images/users/001.jpg';
import visawhite from './assets/images/icons/visawhite.png';
import paypalwhite from './assets/images/icons/paypalwhite.png';
import masterwhite from './assets/images/icons/masterwhite.png';
import applewhite from './assets/images/icons/applewhite.png';

function App() {

  return (
    <div className="box-border font-semibold text-lg w-max mx-auto my-2 shadow-lg bg-white"> 
      
      <section className="top-section md:flex md:justify-center w-min ">
        
        <article className="left-column-top m-4 text-center md:text-left">
          <div className="user-intro md:flex mx-auto pt-3 md:pt-0">
            <img className="user-image my-4 md:my-0 mx-auto w-1/3 md:w-10 rounded-full flex-grow " src={userimg1}></img>
            <div className="">
              <p className="user-name mt-1 ml-1">Nora M. Buchanan</p>
              <p className="user-interactions text-gray-400 ml-1">4 interactions</p>
            </div>
          </div>
          <p className="email-title text-gray-400 mt-3">EMAIL</p>
          <p className="email-address md:mt-2">invision@invisionapp.com</p>
          <p className="phone-title text-gray-400 mt-3">PHONE</p>
          <p className="phone-nr md:mt-2">+144-3412-4422</p>
          <p className="location-title text-gray-400 mt-3">LOCATION</p>
          <p className="location-info md:mt-2">New York, NY</p>
        </article>
        
        <article className="right-column-top flex flex-wrap my-4 mx-auto px-auto justify-center w-max">
            <p className='m-2 md:mx-3 w-1/3 md:h-1/3 inline bg-blue-600 py-6 px-10 border rounded bg-no-repeat bg-contain bg-center hover:shadow-xl duration-300'
            style={{backgroundImage: `url(${paypalwhite})`}}
            >
            </p>
            <p className='m-2 md:mx-3 w-1/3 md:h-1/3 inline py-6 px-10 border rounded bg-no-repeat bg-contain bg-center hover:bg-blue-600 hover:shadow-xl duration-300'
            style={{backgroundImage: `url(${visawhite})`}}
            >
            </p>
            <p className='m-2 md:mx-3 w-1/3 md:h-1/3 inline bg-white py-6 px-10 border rounded bg-no-repeat bg-contain bg-center hover:bg-blue-600 hover:shadow-xl duration-300'
            style={{backgroundImage: `url(${masterwhite})`}}
            >
            </p>
            <p className='m-2 md:mx-3 w-1/3 md:h-1/3 inline bg-white py-6 px-10 border rounded bg-no-repeat bg-contain bg-center hover:bg-blue-600 hover:shadow-xl duration-300'
            style={{backgroundImage: `url(${applewhite})`}}
            >
            </p>
             
        </article>
      
      </section>
    </div>
  );
}

export default App;
