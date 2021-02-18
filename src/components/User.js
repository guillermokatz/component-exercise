import userimg1 from '../assets/images/users/001.jpg';
import visawhite from '../assets/images/icons/visawhite.png';
import paypalwhite from '../assets/images/icons/paypalwhite.png';
import masterwhite from '../assets/images/icons/masterwhite.png';
import applewhite from '../assets/images/icons/applewhite.png';
import check from '../assets/images/icons/check.png';
import location from '../assets/images/icons/location.png';

function User (props) {
    return (
        <div className="box-border font-semibold text-lg w-max md:w-1/2 mx-auto my-2 shadow-lg bg-white"> 
      
        <section className="top-section md:flex md:justify-center w-min ">
          
          <article className="left-column-top m-4 text-center md:text-left">
            <div className="user-intro md:flex mx-auto pt-3 md:pt-0">
              <img className="user-image my-4 md:my-0 mx-auto w-1/3 md:w-10 rounded-full flex-grow " src={props.userimg}></img>
              <div className="">
                <p className="user-name mt-1 ml-1">{props.name}</p>
                <p className="user-interactions text-gray-400 ml-1">{props.interactions} interactions</p>
              </div>
            </div>
            <p className="email-title text-gray-400 mt-3">EMAIL</p>
            <p className="email-address md:mt-2">{props.email}</p>
            <p className="phone-title text-gray-400 mt-3">PHONE</p>
            <p className="phone-nr md:mt-2">{props.phone}</p>
            <p className="location-title text-gray-400 mt-3">LOCATION</p>
            <p className="location-info md:mt-2">{props.location}</p>
          </article>
          
          <article className="right-column-top flex flex-wrap my-4 mx-auto px-auto justify-center w-max">
              <p className='payType'
              style={{backgroundImage: `url(${paypalwhite})`}}
              >
              </p>
              <p className='payType'
              style={{backgroundImage: `url(${visawhite})`}}
              >
              </p>
              <p className='payType'
              style={{backgroundImage: `url(${masterwhite})`}}
              >
              </p>
              <p className='payType'
              style={{backgroundImage: `url(${applewhite})`}}
              >
              </p>
               
          </article>
        
        </section>
  
        <section className="bottom-section container w-min mx-auto pb-10">
          <article className="flex items-center">
            <img className="inline w-1/12 scale-100 transform hover:scale-125 duration-200" src={check}></img>
            <p className="inline border-b-2 mx-3 px-16 h-1/2"></p>
            <img className="inline w-1/12 scale-100 transform hover:scale-125 duration-200" src={location}></img>
          </article>
  
  
          <table className="w-auto mb-5">
            <tbody>
              <tr>
                <td className="w-1/2">
                  <p className="whitespace-nowrap">{props.address1line1}</p>
                  <p className="whitespace-nowrap text-gray-400">{props.address1line2}</p>
                </td>
                <td></td>
                <td className="w-1/2">
                  <p className="whitespace-nowrap">{props.address2line1}</p>
                  <p className="whitespace-nowrap text-gray-400">{props.address2line2}</p>
                </td>
              </tr>
              </tbody>
            </table>
  
            <hr className="mb-5"></hr>
  
          <table className="text-left w-auto mb-0 md:mb-5">
            <tbody>
            <tr>
              <td className="px-3 whitespace-nowrap">{props.distance} Km</td>
              <td className="px-3 whitespace-nowrap">{props.time} Min</td>
              <td className="px-3 whitespace-nowrap">${props.price}</td>
              <td className="px-3 whitespace-nowrap">{props.energy} kWh</td>
            </tr>
            <tr className="text-gray-400">
              <th className="font-medium px-3">Distance</th>
              <th className="font-medium px-3">Time</th>
              <th className="font-medium px-3">Price</th>
              <th className="font-medium px-3">Energy</th>
            </tr> 
            </tbody>   
          </table>
        </section>
  
      </div>
    )
}

export default User;