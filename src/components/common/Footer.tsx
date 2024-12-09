'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsMessenger, BsInstagram, BsGlobe } from 'react-icons/bs';
import React from 'react';

export default function Component() {
  return (
    <Footer container className="">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="PhoOcChuNam Logo"
              name="Flowbite"
            />
            <p></p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="Thông tin liên hệ" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://phoocchunam.com">
                  Website: https://phoocchunam.com
                </Footer.Link>
                <Footer.Link href="mailto:phoocchunam@gmail.com">
                  Email: phoocchunam@gmail.com
                </Footer.Link>
                <Footer.Link href="tel:0987333117">
                  Hotline: 0987333117
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Hệ thống nhà hàng" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:0949722268">
                  Phố Ốc Chú Năm 1: An Phú, Thuận An, BD
                </Footer.Link>
                <Footer.Link href="tel:0974798651">
                  Phố Ốc Chú Năm 2: Khánh Bình, Tân Uyên, BD
                </Footer.Link>
                <Footer.Link href="tel:0362596790">
                  Phố Ốc Chú Năm 3: Bình Chuẩn, Thuận An, BD
                </Footer.Link>
                <Footer.Link href="tel:0987333117">
                  Phố Ốc Chú Năm 6: 219B, Lê Thị Trung, An Phú, Thuận An, BD
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="/"
            by="PhoOcChuNam™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/phoocchunam/"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.messenger.com/t/phoocchunam"
              icon={BsMessenger}
            />
            <Footer.Icon
              href="https://www.instagram.com/phoocchunam/"
              icon={BsInstagram}
            />
            <Footer.Icon href="https://phoocchunam.com" icon={BsGlobe} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
