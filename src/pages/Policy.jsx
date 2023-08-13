import React from "react";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

function Policy() {
  return (
    <section className='mx-auto'>
      <NavBar />
      <article className='px-8 md:px-[23%] py-[5%] font-lexend '>
        <div className='flex'>
          <h2 className='text-[#004BAF] text-[40px] md:text-[60px] font-[600] font-dela-gothic leading-10 md:leading-[64px] break-words'>
            Privacy <br /> Policy.
          </h2>
        </div>
        <div className='pt-8 md:pt-[3.5rem] md:self-stretch'>
          <p className='font-bold'>What Are Cookies Anyway?</p>
          <p className='text-[14px]'>
            kuda.com uses cookies, which are small pieces of data saved on your
            phone or computer, to improve your browsing experience.
            <br />
            <br />
            Please, keep reading to learn what information we collect with
            cookies, how we use that information, why we sometimes store it and
            how you can disable cookies on your browser.
          </p>
        </div>
        <div className='pt-[2.5rem] '>
          <h3 className='font-bold text-[1.5rem]'>Cookies We Set</h3>
          <div className=''>
            <p className='font-bold text-[##3C4049] text-[14px]'>
              When You Sign In
            </p>
            <p className='text-[14px] text-[##5C6370] pt-2'>
              We use cookies to save your login information so you don't have to
              sign in all over again every time you go to a new page. We
              typically clear these cookies when you sign out to prevent access
              to features that require signing in.
            </p>
          </div>
        </div>

        <div className='pt-6'>
          <p className='font-bold text-[##3C4049] text-[14px]'>
            Email Newsletters
          </p>
          <p className='text-[14px] text-[##5C6370] pt-2'>
            We use cookies to save information you give us when you subscribe to
            our emails. This helps us avoid duplicate subscriptions and controls
            the notifications you see.
          </p>
        </div>
        <div className='pt-6'>
          <p className='font-bold text-[##3C4049] text-[14px]'>Forms</p>
          <p className='text-[14px] text-[##5C6370] pt-2'>
            We set cookies to remember your user information when you fill a
            form on the website.
          </p>
        </div>
        <div className='pt-6'>
          <p className='font-bold text-[##3C4049] text-[14px]'>
            Third-Party Cookies
          </p>
          <p className='text-[14px] text-[##5C6370] pt-2'>
            Sometimes, we set cookies from trusted third parties. Please, keep
            reading to learn about third-party cookies on kuda.com.
          </p>
        </div>
        <div className='pt-6'>
          <p className='font-bold text-[##3C4049] text-[14px]'>
            Google Analytics
          </p>
          <p className='text-[14px] text-[##5C6370] pt-2'>
            We use cookies from Google Analytics to help us understand how you
            use this website and how we can improve your experience. These
            cookies collect information including how much time you spend on
            this website and the pages you visit.
          </p>
        </div>
        <div className='pt-6'>
          <p className='font-bold text-[##3C4049] text-[14px]'>For Testing</p>
          <p className='text-[14px] text-[##5C6370] pt-2'>
            We often make changes to this website and add new features, and
            while we're texting them, we may use cookies to learn the
            optimisations you prefer.
          </p>
        </div>
        <div className='pt-[2.5rem] '>
          <h3 className='font-bold text-[1.5rem]'>Disabling Cookies</h3>
          <div className=''>
            {/* <p className='font-bold text-[##3C4049] text-[14px]'>
            When You Sign In
          </p> */}
            <p className='text-[14px] text-[##5C6370] pt-2'>
              To disable cookies, please check your browser settings. Please,
              note that disabling all cookies may affect your experience on this
              website.
              <br />
              <br />
              We hope we've clarified how we use cookies to your satisfaction
              and you feel comfortable using this website. If you need more
              information, please send a message to hello@kuda.com and we'll get
              back to you as soon as possible.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </section>
  );
}

export default Policy;
