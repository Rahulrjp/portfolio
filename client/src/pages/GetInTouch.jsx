import { IoMdSend } from 'react-icons/io'
import BlurText from '../../BlurText/BlurText'
import contactBackground from '../assets/contact-page-background3.jpg'
import { useState } from 'react'
import axios from 'axios'

const GetInTouch = () => {
    const [sending, setSending] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        setSending(true)
        try {
            const res = await axios.post('http://localhost:3000/getintouch', { name, email, message });
            setError(res.data.error)
            setName('')
            setEmail('')
            setMessage('')
        } catch (err) {
            console.error("AxiosError:", err.message);
        }
        setSending(false)

    };
    return (
        <div className='w-full min-h-screen font-quicksand flex justify-center items-center px-3 pt-20' style={{ backgroundImage: `url(${contactBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='lg:p-15 p-5 rounded-lg flex items-center flex-col gap-10 border-white border' style={{ backdropFilter: "blur(20px)" }}>
                <BlurText className='text-4xl font-bold text-center text-gray-100' text='Get in Touch' />
                <div className='flex lg:flex-row flex-col gap-10'>
                    <div className='flex flex-col md:gap-4 gap-1 md:w-[500px]'>
                        <BlurText className='md:text-3xl text-2xl font-bold text-gray-100' text='Contact Info' />
                        <p className='text-lg font-normal text-gray-100'>Have a question or need support?</p>
                        <p className='text-lg font-normal text-gray-100'><strong> Address : </strong>Kalinga E-state, Santarapur, Gohiria Square, Bhubaneshwar, Odisha, pin-752054.</p>
                        <p className='text-lg font-normal text-gray-100'><strong>Phone : </strong>+91-6299915927</p>
                        <p className='text-lg font-normal text-gray-100'><strong>Email : </strong>rahulrjp16@gmail.com</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:w-[500px]'>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            value={name}
                            className='border-2 border-gray-400 rounded-md p-2 outline-blue-300 placeholder:font-semibold placeholder:text-white text-white bg-transparent font-semibold placeholder:opacity-60'
                            onChange={(e) => setName(e.target.value)} />
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your Email'
                            className='border-2 border-gray-400 rounded-md p-2 outline-blue-300 placeholder:font-semibold placeholder:text-white text-white bg-transparent font-semibold placeholder:opacity-60' />
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Message'
                            className='border-2 border-gray-400 rounded-md p-2 outline-blue-300 resize-none placeholder:font-semibold placeholder:text-white text-white bg-transparent font-semibold placeholder:opacity-60' ></textarea>
                        <div
                            className={`${error ? 'block' : 'hidden'}  border-2 border-gray-400 rounded-md p-2  outline-blue-300 resize-none text-white bg-transparent font-semibold`}>
                            {error ? <p className='text-white pl-4'>{error}</p> : <p></p>}
                        </div>
                        <button type='submit' className='bg-blue-500 hover:bg-blue-400 px-4 py-2 font-semibold text-xl flex justify-center items-center text-white rounded-md gap-5 transition-all duration-300 cursor-pointer'>{sending ? "Sending Message" : "Send Message"} <IoMdSend className='text-lg' /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch