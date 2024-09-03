function Footer() {
  return (
    <footer className="gradient-bg-footer flex w-full flex-col items-center justify-between p-4 md:justify-center">
      <div className="mt-5 flex flex-col items-center justify-center">
        {/* <p className="text-white text-xs text-center">Come join us and hear for the unexpected miracle</p> */}
        <a
          className="mt-2 cursor-pointer text-center text-sm font-medium text-primary-text underline"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hexpertifyapp@gmail.com&su=Subject&body=Body%20Text"
        >
          hexpertifyapp@gmail.com
        </a>
      </div>

      <div className="mt-5 h-[0.25px] w-full bg-gray-400 sm:w-[90%]" />

      <div className="mt-3 flex w-full items-center justify-between sm:w-[90%]">
        <p className="text-left text-xs text-primary-text">
          HEXPERTIFY &copy; {new Date().getFullYear()}
        </p>
        <p className="text-right text-xs text-primary-text">
          All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
