import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { SiEthereum } from 'react-icons/si'
import { TransactionContext } from '../context/TransactionContext'

const commonStyle = 'border-[0.5px] sm:px-0 px-2 min-h-[70px] sm:min-w-[120px] border-gray-400 flex justify-center items-center text-gray-400'

function Welcome() {

  const { connectWallet, currentAccount } = React.useContext(TransactionContext);

  const [ethAddrTo, setEthAddrTo] = React.useState('')
  const [amount, setAmount] = React.useState()
  const [keyword, setKeyword] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [sending, setSending] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)


  React.useEffect(() => {

    if (ethAddrTo == '' || amount == '' || keyword == '' || message == '') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }

  })


  // to handle input fields change event
  const handleChange = (e) => {

    const inputElem = e.target;

    if (inputElem.name == 'addressTo') { setEthAddrTo(inputElem.value) }
    else if (inputElem.name == 'amount') { setAmount(inputElem.value) }
    else if (inputElem.name == 'keyword') { setKeyword(inputElem.value) }
    else if (inputElem.name == 'message') { setMessage(inputElem.value) }

  }

  // to send ethereum
  const sendNow = () => {

    console.log('Sending...')

  }

  return <div className="flex justify-center items-center w-full">
    <div className="flex md:flex-row flex-col justify-between items-start md:p-20 py-12 px-10">

      <div className="flex flex-1 justify-start flex-col md:mr-10">

        <h1 className='text-3xl text-white sm:text-5xl text-gradient p-1 '>
          Send Crypto<br />accross the world
        </h1>

        <p className='text-white text-light text-base md:w-9/12 w-11/12 mt-5'>
          Explore the crypto world. Buy and Sell cryptocurrencies in NHR Krypto
        </p>

        {
          !currentAccount && (
            <button
              type='button'
              onClick={connectWallet}
              className='flex flex-row justify-center items-center rounded-full text-white bg-[#2952e3] my-5 py-2 px-3 hover:bg-[#102e99] transition duration-150'
            >
              <p className='text-base font-semibold'>Connect Wallet</p>
            </button>
          )
        }

        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">

          <div className={`rounded-tl-2xl ${commonStyle}`}>
            Reliablity
          </div>
          <div className={commonStyle}>
            Security
          </div>
          <div className={`rounded-tr-2xl ${commonStyle}`}>
            Ethereum
          </div>
          <div className={`rounded-bl-2xl ${commonStyle}`}>
            Web 3.0
          </div>
          <div className={commonStyle}>
            Low fees
          </div>
          <div className={`rounded-br-2xl ${commonStyle}`}>
            Blockchain
          </div>

        </div>

      </div>

      <div className="flex flex-1 justify-start items-center flex-col md:ml-10">

        <div className='flex flex-col justify-end items-start p-3 white-glassmorphism rounded-xl eth-card h-40 sm:w-72 w-full shadow-2xl my-5'>

          <div className='flex flex-col items-start justify-between w-full h-full p-0 m-0'>

            <div className='flex justify-between items-start w-full'>
              <div className='p-2 rounded-full border-[1px] m-0'>
                <SiEthereum fontSize={21} className='text-white' />
              </div>
              <BsInfoCircle fontSize={17} className='text-white cursor-pointer' />
            </div>

            <div className='flex flex-col items-start justify-end w-full'>
              <p className='text-white text-sm font-light' style={{fontSize: '10px'}}>
                { !currentAccount ? 'Address' : currentAccount }
              </p>
              <p className='text-white font-semibold'>Ethereum</p>
            </div>

          </div>

        </div>

        <div className='flex flex-col justify-start items-center w-full rounded-xl blue-glassmorphism p-5'>

          <input
            type="text"
            placeholder='Address To'
            name='addressTo'
            value={ethAddrTo}
            onChange={handleChange}
            className='text-white w-full px-3 py-2 white-glassmorphism rounded-xl border-none font-[15px] mb-2' />
          <input
            type="number"
            placeholder='Amount (ETH)'
            name='amount'
            step={0.0001}
            value={amount}
            onChange={handleChange}
            className='text-white w-full px-3 py-2 white-glassmorphism rounded-xl border-none font-[15px] mb-2' />
          <input
            type="text"
            placeholder='Keyword (GIF)'
            name='keyword'
            value={keyword}
            onChange={handleChange}
            className='text-white w-full px-3 py-2 white-glassmorphism rounded-xl border-none font-[15px] mb-2' />
          <input
            type="text"
            placeholder='Enter Message'
            name='message'
            value={message}
            onChange={handleChange}
            className='text-white w-full px-3 py-2 white-glassmorphism rounded-xl border-none font-[15px] mb-2' />

          <div className='flex justify-center items-center w-full border-t-[1px] border-t-[grey] py-2'>
            <button onClick={sendNow} disabled={(disabled || sending) ? true : false} className={`w-full bg-[#2952e3] hover:bg-[#343a4e] text-white font-semibold px-5 py-2 rounded-full cursor-pointer transition duration-150 ease-linear ${(disabled || sending) ? 'disabled:bg-[grey]' : ''}`}>
              Send Now
            </button>
          </div>

        </div>

      </div>

    </div>
  </div>
}

export default Welcome
