import AboutImg from '../assets/devolop.jpg';

export default function About () {
    const config  = {
        line1: ' $   Hi, My name is Manibharathi...  I am a Full stack web developer. I Built Beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2: ' $   I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios Tailwind CSS, SaSS, Css3 and Many More...',
        line3: ' $   In backend I know Node.js, Express.js, MongoDB, Mysql, Python.'
        
    }

    return <section className='flex flex-col md:flex-row  bg-primary px-6' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white border-primary mb-5 w-[260px] '>
                <h1 className='text-3xl border-b-4 border-primary mb-3 w-[140px] font-bold'>About Me</h1>
                <p className='pb-4'>{config.line1}</p>
                <p className='pb-4'>{config.line2}</p>
                <p className='pb-4'>{config.line3}</p>
            </div>
        </div>
    </section>
}