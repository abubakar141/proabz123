"use client";

import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';
const Stagethird = () => {
        
    const styles = {
        loginContainer: {
            display: 'flex',
            alignItems: 'flex-start', // Align items to the top
            marginLeft: 'auto', // Push to the right
        },
        loginText: {
            color: 'black',
            fontSize: '12px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
        },
        arrow: {
            marginLeft: '8px',
            transition: 'transform 0.2s ease',
        },
    };
  return (
    <div>
          <div className="absolute top-1 left-0 z-40 p-4">
                        <Image
                            src="/four.png"
                            alt="Logo"
                            width={16}
                            height={50}
                        />
                        
                    </div>
                    <div className='absolute top-0 right-0 mt-3 z-40 p-4'>
                    
                    <div style={styles.loginContainer}>
                            <Link href="/login">
                                <div style={styles.loginText}>
                                Skip to dashboard
                                    <span style={styles.arrow}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chevron-right">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </div>
    </div>
    <center>
        
        <h1 className='mt-36 text-2xl'  >What&apos;s your goal with Franchain?</h1>
        <p className='text-1xl mt-1'>No wrong answers here. And it doesn&apos;t matter if you change your mind later.</p>
        <br /><br /><br />
        <div className="parent-container">
  <div className="class-container">
    <Image 
      src="/image.png"
      alt='image'
      width={100}
      height={100}
    />
    <p className='text mt-4'>Reduce failed <br /> payments</p>
    <input type="checkbox" />
  </div>
  <div className="class-container">
    <Image 
      src="/image.png"
      alt='image'
      width={100}
      height={100}
    />
    <p className='text mt-4'>Reduce failed <br /> payments</p>
    <input type="checkbox" />
  </div>
  <div className="class-container">
    <Image 
      src="/image.png"
      alt='image'
      width={100}
      height={100}
    />
    <p className='text mt-4'>Reduce failed <br /> payments</p>
    <input type="checkbox" />
  </div>
  <div className="class-container">
    <Image 
      src="/image.png"
      alt='image'
      width={100}
      height={100}
    />
    <p className='text mt-4'>Reduce failed <br /> payments</p>
    <input type="checkbox" />
  </div>
  <div className="class-container">
    <Image 
      src="/image.png"
      alt='image'
      width={100}
      height={100}
    />
    <p className='text mt-4'>Reduce failed <br /> payments</p>
    <input type="checkbox" />
  </div>
  <div className="class-container">
    <Image 
      src="/image.png"
      alt='image'
      width={78}
      height={100}
    />
    <p className='text mt-4'>Reduce failed <br /> payments</p>
    <input type="checkbox" />
  </div>
</div>
<div className="mt-3">
  <button className="button text-white w-fit py-2 text-sm" type="submit">Continue</button>
</div>

  </center>
  
  
    </div>
    
  )
}

export default Stagethird
