/**
 * eslint-disable jsx-a11y/img-redundant-alt
 *
 * @format
 */

/** @format */


import Socialcons from "./Socialcons";

import Illus from "../img/illustration-1.svg";
import Illus2 from "../img/illustration-2.svg";
import icon from "../img/icon-quotes.svg";
import iconarrow from "../img/icon-arrow.svg";
import back from "../img/bg-curve-desktop.svg";
import logo2 from "../img/logo2.svg";
import phone from "../img/icon-phone.svg";
import email from "../img/icon-email.svg";
import { LiaFacebook, LiaTwitter, LiaInstagram } from "react-icons/lia";
export default function Menu() {
  return (
    <>
      <div className='container-1'>
        <div className='para-1'>
          <h1 className='h1'>
            All your files in one secure location, accessible anywhere.
          </h1>

          <p className='p1'>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <div>
            <form className='email1'>
              <input
                className='email'
                type='email'
                id='email'
                name='email'
                placeholder='Enter you email...'
                style={{ padding: "5px", paddingLeft: "10px" }}
              />
              <button className='button1'>Get Started For Free</button>
            </form>
          </div>
        </div>
        <img
          className='illus1'
          src={Illus}
          alt='image'
          height='455px'
          width='585px'
        />
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
                height='35vw'
                width='35vw'
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

        <div className='eml'>
          <form className='email2'>
            <input
              className='emaill'
              type='email'
              id='email'
              name='email'
              placeholder='  Enter you email...'
              style={{ padding: "5px", paddingLeft: "10px" }}
            />
            <button className='button2'>Get Started For Free</button>
          </form>
        </div>
      </div>

      <div className='container-4'>
        <div className='icon2'>
          <a href='#'>
            <img
              className='lg2'
              src={logo2}
              alt='Description of your SVG'
              style={{ height: "43px", width: "130px" }}
            />
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
          <Socialcons />
        </div>
        <div className='de'>
          <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
