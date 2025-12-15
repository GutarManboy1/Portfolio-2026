import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center'>
                <a href="/">👹</a>
            </div>

            <div className='socials'>
                {socialImgs.map((img) => (
                    <a className="icon" target="_blank" rel="noopener noreferrer" href={img.url} key={img.url}>
                        <img src={img.imgPath} alt="social media link" />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer