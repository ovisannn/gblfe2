import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
// import BgHeader from '../asset/bgHeader.png'
import LogoFull from '../asset/gameLogoFull.png'
import GblLogo from '../asset/undraw_chilling_re_4iq9.svg'
import Scope from '../asset/scope.png'

const Jumbotron =()=>{
  return (
    <div className="w-full md:h-[684px] h-[600px] relative -z-10 harfishbg bg-fixed bg-clip-border bg-cover flex flex-col justify-center">
      <div className="relative w-full md:w-[775px] md:h-[349px] place-self-center">
        <Image
        alt='logo harfish'
        src={LogoFull}
        layout='responsive'
        objectFit='cover'
        />
      </div>
      <Link href='/play'>
        <div className='w-48 h-12 bg-orange2 items text-white place-self-center font-light text-center inline-block align-middle py-3 shadow-md'>PLAY NOW!</div>
      </Link>
    </div>
  )
}

const GblExplanation = () =>{
  return(
    <div className="flex flex-col md:flex-row-reverse items-center gap-8 justify-center">
      <div className='md:w-1/2'>
        <span className='text-left font-normal text-3xl'>
            Game-based <br />Learning
        </span>
        <div className="w-[210px] h-3 bg-orange1 pt-3"></div>
        <p className='font-light md:text-lg text-sm py-5'>
        GBL merupakan pengubahan konsep pembelajaran yang tekstual menjadi audio visual interaktif yang mempengaruhi pola pikir,emosional, perilaku, dan cara bersosialisasi siswa dalam belajar.
        </p>
      </div>
      <div className='relative md:w-1/2 w-3/4 md:pt-32'>
        <span>          
          <Image
          src={GblLogo}
          alt='gbl'
          />
        </span>
      </div>
    </div>
  )
}

const GblScope = () =>{
  return(
    <div className="flex flex-col items-center py-20">
      <span className='font-normal text-3xl'>
        GBL SCOPE
      </span>
      <div className="w-[160px] h-3 bg-orange1 pt-3"></div>
      <div className="relative h-full py-4">
        <Image
        src={Scope}
        alt ='scope'
        />
      </div>
    </div>
  )
}

const AboutHarfish = () =>{
  return (
    <div className="">
      tes
    </div>
  )
}

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Harfish</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
        <Jumbotron />
      </header>

      <main className='md:px-[198px] px-4 items-center py-4'>
        <GblExplanation />
        <GblScope />
        <AboutHarfish />
      </main>

      <footer className={styles.footer}>
        ini footer
      </footer>
    </div>
  )
}
