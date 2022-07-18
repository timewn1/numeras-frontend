import { Link } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-light">
      <div className="p-main pt-3 pb-3 mt-5 mb-5">
        <p className="font-22">Follow Us</p>
        <section className="mb-4">
          <Link className="btn btn-ftwhite rounded-circle m-1 w-h-40" to="#!" role="button">
            <FaFacebookF className="text-light" />
          </Link>
          <Link className="btn btn-ftwhite rounded-circle m-1 w-h-40" to="#!" role="button">
            <FaTwitter className="text-light" />
          </Link>
          <Link className="btn btn-ftwhite rounded-circle m-1 w-h-40" to="#!" role="button">
            <FaInstagram className="text-light" />
          </Link>
          <Link className="btn btn-ftwhite rounded-circle m-1 w-h-40" to="#!" role="button">
            <FaPinterestP className="text-light" />
          </Link>
          <Link className="btn btn-ftwhite rounded-circle m-1 w-h-40" to="#!" role="button">
            <FaRedditAlien className="text-light" />
          </Link>
          <Link className="btn btn-ftwhite rounded-circle m-1 w-h-40" to="#!" role="button">
            <FaLinkedinIn className="text-light" />
          </Link>
        </section>
      </div>
      <div className="text-center p-main bg-footer pt-4 pb-4">
        <p className="text-greyWhite mb-2">
          <Link className="text-greyWhite font-15 wei-500 wei-500" to="#">
            Contact Us
          </Link>
          &nbsp;|&nbsp;
          <Link className="text-greyWhite font-15 wei-500" to="#">
            Press
          </Link>
        </p>
        <p className="text-greyWhite mb-2">
          <Link className="text-greyWhite font-15 wei-500" to="#">
            Privacy Policy
          </Link>
          &nbsp;|&nbsp;
          <Link className="text-greyWhite font-15 wei-500" to="#">
            Security
          </Link>
          &nbsp;|&nbsp;
          <Link className="text-greyWhite font-15 wei-500" to="#">
            Terms&nbsp;&&nbsp;Conditions
          </Link>
        </p>
        <p className="text-greyWhite mb-2">
          <Link className="text-greyWhite font-15 wei-500" to="#">
            Partners
          </Link>
          &nbsp;|&nbsp;
          <Link className="text-greyWhite font-15 wei-500" to="#">
            Services
          </Link>
        </p>
        <p className="text-greyWhite font-15 mb-0 pb-1">2020 Numeras, Inc.</p>
      </div>
    </footer>
  );
}
