import './profile.css'
import { Helmet } from 'react-helmet';
export default function profile(){
return(
  <>
   <Helmet>
        <title>Profile name</title>
      </Helmet>
  <div className='loadi'>
        <img src="logo---.png" alt="" id='ldd' />
      </div>

<div class=" main max-h-[99svh] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
  <section class="min-h-[99svh] w-[99svw] snap-start"> <div class="relative flex h-[50svh] w-[100svw] items-center justify-center bg-[url('https://source.boringavatars.com/pixel/350/Walid%20Mosbahi')] bg-cover bg-center border-b-2 border-gray-500">
            <div class="absolute h-full w-full bg-white bg-opacity-25 brightness-110 backdrop-blur-lg"></div>
            <div class="z-50 rounded-full h-44 w-44 bg-[url('https://source.boringavatars.com/marble/180/Walid%20Mosbahi')] bg-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></div>
          </div>
          <div class="flex w-full flex-col items-center justify-center space-y-4 py-8">
            <h1 class="text-4xl font-semibold mt-[20svh] transform scale-150">Walid Mosbahi</h1>
            <p style={{ color: 'burlywood' }} className='transform scale-150 pt-[20px]'>Security Team, working on ensuring the digital fortresses..</p>
          </div></section>
  <section class="min-h-[99svh] w-[99svw] snap-start">Section 2</section>
  <section class="min-h-[99svh] w-[99svw] snap-start">Section 3</section>
  <section class="min-h-[99svh] w-[99svw] snap-start">Section 4</section>
  <section class="min-h-[99svh] w-[99svw] snap-start">Section 5</section>
</div>


  </>
)
}