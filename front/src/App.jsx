import { About } from './componants/about/About';
import { Home } from './componants/home/Home';
import { SideBar } from './componants/sidebar/SideBar';
import { Studies } from './componants/studies/Studies';
import { primaryBackgroundColor } from './values/Values';
import './App.css'

// Niloy

const SvgDesign = ()=>{
    return(
        <svg className="svg-style" viewBox="283.787 139.221 174.761 115.8" width="174.761" height="115.8">
        <defs className="defs-svg">
            <g id="sn-main">
                <path className="S-word" d="M 349.734 159.629 L 316.995 143.641 L 286.62 161.741 L 286.957 198.653 L 319.951 219.875 L 289.531 239.198 L 326.658 251.685 L 352.821 231.14 L 352.089 200.172 L 320.078 182.836 L 349.734 159.629 Z M 351.956 230.304 L 319.456 219.739 L 326.752 251.579 M 317.007 144.136 L 320.019 182.794 L 286.746 161.982" data-bx-origin="1.265039 0.493253"></path>
                <path className="N-word" d="M 454.725 143.234 L 454.764 234.725 L 436.393 250.359 L 416.504 234.395 L 386.586 176.303 L 388.795 251.126 L 367.477 233.356 L 365.686 163.346 L 386.212 145.801 L 407.089 162.993 L 434.722 217.911 L 432.919 160.627 L 454.725 143.234 Z M 386.15 146.098 L 386.866 178.222 L 366.322 163.512 M 387.199 177.617 L 406.978 163.264 M 436.48 250.254 L 434.677 217.66 L 417.201 233.637 M 434.725 217.886 L 454.001 234.19" data-bx-origin="0.097019 0.502565"></path>
            </g>
            <g id="sn-l1">
                <path className="S-word-l1" d="M 349.734 159.629 L 316.995 143.641 L 286.62 161.741 L 286.957 198.653 L 319.951 219.875 L 289.531 239.198 L 326.658 251.685 L 352.821 231.14 L 352.089 200.172 L 320.078 182.836 L 349.734 159.629 Z M 351.956 230.304 L 319.456 219.739 L 326.752 251.579 M 317.007 144.136 L 320.019 182.794 L 286.746 161.982" data-bx-origin="1.265039 0.493253"></path>
                <path className="N-word-l1" d="M 454.725 143.234 L 454.764 234.725 L 436.393 250.359 L 416.504 234.395 L 386.586 176.303 L 388.795 251.126 L 367.477 233.356 L 365.686 163.346 L 386.212 145.801 L 407.089 162.993 L 434.722 217.911 L 432.919 160.627 L 454.725 143.234 Z M 386.15 146.098 L 386.866 178.222 L 366.322 163.512 M 387.199 177.617 L 406.978 163.264 M 436.48 250.254 L 434.677 217.66 L 417.201 233.637 M 434.725 217.886 L 454.001 234.19" data-bx-origin="0.097019 0.502565"></path>
            </g>
            <g id="sn-l2">
                <path className="S-word-l2" d="M 349.734 159.629 L 316.995 143.641 L 286.62 161.741 L 286.957 198.653 L 319.951 219.875 L 289.531 239.198 L 326.658 251.685 L 352.821 231.14 L 352.089 200.172 L 320.078 182.836 L 349.734 159.629 Z M 351.956 230.304 L 319.456 219.739 L 326.752 251.579 M 317.007 144.136 L 320.019 182.794 L 286.746 161.982" data-bx-origin="1.265039 0.493253"></path>
                <path className="N-word-l2" d="M 454.725 143.234 L 454.764 234.725 L 436.393 250.359 L 416.504 234.395 L 386.586 176.303 L 388.795 251.126 L 367.477 233.356 L 365.686 163.346 L 386.212 145.801 L 407.089 162.993 L 434.722 217.911 L 432.919 160.627 L 454.725 143.234 Z M 386.15 146.098 L 386.866 178.222 L 366.322 163.512 M 387.199 177.617 L 406.978 163.264 M 436.48 250.254 L 434.677 217.66 L 417.201 233.637 M 434.725 217.886 L 454.001 234.19" data-bx-origin="0.097019 0.502565"></path>
            </g>
                

        </defs>
        <use xlinkHref="#sn-main" className="first common" x="0" y="0"></use>
        <use xlinkHref="#sn-l1" className="second common" x="0" y="0"></use>
        <use xlinkHref="#sn-l2" className="third common" x="0" y="0"></use>

    </svg>
    )
}

function App() {
  return (
    <div id='App' style={{backgroundColor: primaryBackgroundColor}}>


        <svg className='backgound-svg' viewBox='0 0 1896 900' width="100%" height="100vh" preserveAspectRatio='none'>
        <rect className='backgound-rect' fill={primaryBackgroundColor} width='100%' height='100%' preserveAspectRatio='slice'/>
        <defs>
        <linearGradient id='a' x1='0' x2='0' y1='1' y2='0'>
        <stop  offset='0' stopColor='#641E0A'/>
        <stop  offset='1' stopColor='#505'/>
        </linearGradient>
        <linearGradient id='b' x1='0' x2='0' y1='0' y2='1'>
        <stop  offset='0' stopColor='#001723'/>
        <stop  offset='1' stopColor='#01283B'/>
        </linearGradient>
        </defs>
        <g fill='#FFF' fillOpacity='0' strokeMiterlimit='10'>
        <g  stroke='url(#a)' strokeWidth='2'>
        <path className='object-6 objects' transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/>
        <circle className='object-1 objects'  strokeWidth='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/>
        <path className='object-4 objects' transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/>
        </g>
        <g stroke='url(#b)' strokeWidth='4'>
        <path className='object-3' transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/>
        <rect className='object-5 objects' strokeWidth='8' transform='rotate(0 1089 759)' x='1339' y='709' width='100' height='100'/>
        <path className='object-2 objects' transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/>
        </g>
        </g>
        </svg>


        <SvgDesign/>
        <SideBar/>
        <Home/>
        <About/>
        <Studies/>
    </div>
  );
}

export default App;
