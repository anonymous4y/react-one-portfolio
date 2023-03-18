import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full lg:h-full '>
                
                <div className=' pb-7 sm:pt-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>Hello Visitors, My self HARSH KUMAR, I am 4th year Computer Enginnering student, The website you are looking at right now is created using ReactJs and TailwindCSS, I have also done many projects which you can find the link in below Portfolio Section .</p>

                <br />

                <p className='text-xl'>I love to create and design the websites, i also know variety of Programming languages like Python, C++, Nodejs, ExpressJS, SQL, MongoDB, Html, CSS, TailwindCSS, Bootstrap and JavaScript. A student Pursuing his dreams to become FULL STACK Developer. You can contact me By filling below contact form or by email and linkedIn</p>
            </div>
        </div>
    )
}

export default About