import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  const [nyTime, setNyTime] = useState(new Date());
  const [londonTime, setLondonTime] = useState(new Date());
  const [bangkokTime, setBangkokTime] = useState(new Date());
  const [sydneyTime, setSydneyTime] = useState(new Date());
  const twTime = new Date();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



  useEffect(() => {

    const intervalId = setInterval(() => {
      const times = {
        ny: new Date(),
        london: new Date(),
        bangkok: new Date(),
        sydney: new Date(),
      }

      const ny = times.ny.setUTCHours(times.ny.getUTCHours() - 13);
      const london = times.london.setUTCHours(times.london.getUTCHours() - 8);
      const bangkok = times.bangkok.setUTCHours(times.bangkok.getUTCHours() - 1);
      const sydney = times.sydney.setUTCHours(times.sydney.getUTCHours() + 3);

      // Date.parse(new Date());
//       const now = new Date();
// console.log(now.getHours(),now.getUTCHours());
 ; // 取得本地的小時（0~23）
; // 取得國際標準時間的小時（0~23）
      
      setNyTime(new Date(ny));
      setLondonTime(new Date(london));
      setBangkokTime(new Date(bangkok));
      setSydneyTime(new Date(sydney));


      ;

    }, 1000)
    return () => {
      clearInterval(intervalId);
    }

  }, [])







  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
      <div className='back vh-100   flex-column
      d-flex
      justify-content-center
      align-items-center
      '
      >
        <div className='title 
        d-flex
        justify-content-center
        align-items-center
        '>
          WORLD CLOCK
        </div>
        <div
          style={{
            marginTop: '32px'
          }}
        >
          <div className="clock-face bg-black text-white">
            <div className="row">
              <div className="col">
                <div className='city
                 d-flex
                 align-items-center
                '>
                  NEW YORK
                </div>
                <div className='date'>
                  {nyTime.getDate()} {months[nyTime.getMonth()]} {nyTime.getFullYear()}
                </div>

              </div>
              <div className="col 
                d-flex
                justify-content-end
                align-items-center
              ">
                <div className="time
                d-flex
                justify-content-center
                align-items-center
                ">
                  {`${nyTime.getHours().toString().length < 2 ? '0' : ''}`}
                  {nyTime.getHours()}:
                  {`${nyTime.getMinutes().toString().length < 2 ? '0' : ''}`}
                  {nyTime.getMinutes()}
                </div>
              </div>
            </div>
          </div>
          <div className="clock-face bg-white text-dark">
            <div className="row">
              <div className="col">
                <div className='city
                 d-flex
                 align-items-center
                '>
                  LONDON
                </div>
                <div className='date'>
                  {londonTime.getDate()} {months[londonTime.getMonth()]} {londonTime.getFullYear()}
                </div>

              </div>
              <div className="col 
                d-flex
                justify-content-end
                align-items-center
              ">
                <div className="time
                d-flex
                justify-content-center
                align-items-center
                ">
                  {`${londonTime.getHours().toString().length < 2 ? '0' : ''}`}
                  {londonTime.getHours()}:
                  {`${londonTime.getMinutes().toString().length < 2 ? '0' : ''}`}
                  {londonTime.getMinutes()}
                </div>
              </div>
            </div>
          </div>
          <div className="clock-face bg-white text-dark">
            <div className="row">
              <div className="col">
                <div className='city
                 d-flex
                 align-items-center
                '>
                  BANGKOK
                </div>
                <div className='date'>
                  {bangkokTime.getDate()} {months[bangkokTime.getMonth()]} {bangkokTime.getFullYear()}
                </div>

              </div>
              <div className="col 
                d-flex
                justify-content-end
                align-items-center
              ">
                <div className="time
                d-flex
                justify-content-center
                align-items-center
                ">
                  {`${bangkokTime.getHours().toString().length < 2 ? '0' : ''}`}
                  {bangkokTime.getHours()}:
                  {`${bangkokTime.getMinutes().toString().length < 2 ? '0' : ''}`}
                  {bangkokTime.getMinutes()}
                </div>
              </div>
            </div>
          </div>
          <div className="clock-face bg-white text-dark">
            <div className="row">
              <div className="col">
                <div className='city
                 d-flex
                 align-items-center
                '>
                  TAIWAN
                </div>
                <div className='date'>
                  {twTime.getDate()} {months[twTime.getMonth()]} {twTime.getFullYear()}
                </div>

              </div>
              <div className="col 
                d-flex
                justify-content-end
                align-items-center
              ">
                <div className="time
                d-flex
                justify-content-center
                align-items-center
                ">
                  {`${twTime.getHours().toString().length < 2 ? '0' : ''}`}
                  {twTime.getHours()}:
                  {`${twTime.getMinutes().toString().length < 2 ? '0' : ''}`}
                  {twTime.getMinutes()}
                </div>
              </div>
            </div>
          </div>
          <div className="clock-face bg-black text-white">
            <div className="row">
              <div className="col">
                <div className='city
                 d-flex
                 align-items-center
                '>
                  SYDNEY
                </div>
                <div className='date'>
                  {sydneyTime.getDate()} {months[sydneyTime.getMonth()]} {sydneyTime.getFullYear()}
                </div>

              </div>
              <div className="col 
                d-flex
                justify-content-end
                align-items-center
              ">
                <div className="time
                d-flex
                justify-content-center
                align-items-center
                ">
                  {`${sydneyTime.getHours().toString().length < 2 ? '0' : ''}`}
                  {sydneyTime.getHours()}:
                  {`${sydneyTime.getMinutes().toString().length < 2 ? '0' : ''}`}
                  {sydneyTime.getMinutes()}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}

export default App;
