/**
 * eslint-disable jsx-a11y/img-redundant-alt
 *
 * @format
 */

/** @format */

import Illus from "../img/illustration-1.svg";
import Illus2 from "../img/illustration-2.svg";
import icon from "../img/icon-quotes.svg";
import iconarrow from "../img/icon-arrow.svg";
import back from "../img/bg-curve-desktop.svg";
import logo from "../img/logo.svg";
import phone from "../img/icon-phone.svg";
import email from "../img/icon-email.svg";
import fb from "../img/facebook.png";
import bird from "../img/bird-circles-line-neon-social-tweet-twitter-icon-71311.png";
import ins from "../img/instagram (2).png";
export default function Menu() {
  return (
    <>
      <div className='container-1'>
        <div className='para-1'>
          <h1>All your files in one secure location, accessible anywhere.</h1>

          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <div>
            <form className='email1'>
              <label for='email'></label>
              <input
                className='email'
                type='email'
                id='email'
                name='email'
                placeholder='enter you email...'
              />
              <button className='button1'>Get Started For Free</button>
            </form>
          </div>
        </div>
        <img src={Illus} alt='image' height='455px' width='585px' />
      </div>

      <img className='back' src={back} alt='back' height='15%' width='100%' />

      <div className='container-2'>
        <div className='para-2'>
          <h1 className='h2'>Stay productive, wherever you are</h1>

          <p className='ph1'>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <br />
            <br />
            Share files and folders with friends, family and colleagues for live
            collaboration. No email attachments required!
          </p>
          <div className='arrow'>
            <p className='tex'>See how Fylo works</p>
            <div className='arr'>
              <img
                src={iconarrow}
                height='25px'
                width='25px'
                alt='icon-arrow'
              />
            </div>
          </div>

          <div className='info'>
            <img className='quotes' src={icon} />
            <p className='quote-para'>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>

            <div className='imageinfo'>
              <div className='profileimage'></div>

              <div>
                <h4 className='text'>Kyle Burton</h4>
                <p className='textp'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className='image2'
          src={Illus2}
          alt='demo-image-2'
          height='455px'
          width='585px'
        />
      </div>

      <div className='container-3'>
        <div className='text-field'>
          <h1 className='t1'>Get early access today</h1>

          <p className='text-2'>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>

        <div>
          <form className='email2'>
            <label for='email'></label>
            <input
              className='emaill'
              type='email'
              id='email'
              name='email'
              placeholder='enter you email...'
            />
            <button className='button2'>Get Started For Free</button>
          </form>
        </div>
      </div>

      <div className='container-4'>
        <div className='icon2'>
          <a href='#'>
            <img src={logo} />
          </a>
        </div>

        <div className='main2'>
          <div className='contacts'>
            <div className='phone'>
              <a href='#'>
                <img src={phone} alt='phones' />
              </a>
              <p>+1-543-123-4567</p>
            </div>

            <div className='emails'>
              <a href='#'>
                <img src={email} alt='emails' />
              </a>
              <p>example@huddle.com</p>
            </div>
          </div>
          <div className='c'>
            <p> About Us </p>
            <p>What We Do </p>
            <p>FAQ </p>
          </div>

          <div className='d'>
            <p>Career</p>
            <p> Blog</p>
            <p> Contact Us</p>
          </div>
          <div className='e'>
            <div className='fb'>
              <img src={fb} />
            </div>
            <div className='tw'>
              <img src={bird} />
            </div>
            <div className='ins'>
              <img src={ins} />
            </div>
          </div>
        </div>
        <div className='de'>
          <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </div>

        <footer>
          <p className='attribution'>
            Challenge by{" "}
            <a href='#' target='_blank'>
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href='https://www.facebook.com/tridib.chakraborty.180'>
              Tridib Chakraborty
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
