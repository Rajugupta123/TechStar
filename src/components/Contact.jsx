import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us:</h1>

            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" required placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" required placeholder='Enter Your Email' />
                </div>
                <div>
                    <label htmlFor="">Message:</label>
                    <textarea cols="30" rows="10" placeholder='Enter Message....'></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

        </main>
    </div>
  )
}

export default Contact