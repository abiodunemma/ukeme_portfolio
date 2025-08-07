import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <div className="bg-white py-12 text-[#21243D] w-full text-center">
      <div className="flex justify-center items-center gap-6">
        <Facebook />
        <Instagram />
        <Twitter />
        <Linkedin />
      </div>
      <div className='mt-4 text-md'>Copyright ©2020 All rights reserved </div>
    </div>
  );
}

export default Footer;
