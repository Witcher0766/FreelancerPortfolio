import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4">
      {/* First Div - Info */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-white ">Info</h3>
        <ul className="space-y-2">
          <li className="text-gray-600 dark:text-gray-300">
            <strong>Address:</strong> Eash ram krishna nagar patna-27
          </li>
          <li className="text-gray-600 dark:text-gray-300">
            <strong>Phone:</strong> +91 7070761869
          </li>
          <li className="text-gray-600 dark:text-gray-300">
            <strong>Email:</strong> kumarvishwajeet076@gmail.com
          </li>
        </ul>
      </div>
  
      {/* Second Div - Terms and Conditions */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-white">Terms and Conditions</h3>
        <p className="text-gray-600 dark:text-gray-300">© 2024 Copyright</p>
      </div>
  
      {/* Third Div - Social Media Links */}
      <div className="flex space-x-4 items-center">
  <h3 className="text-lg font-semibold text-blue-600 dark:text-white">Follow Us</h3>
  <div className="flex space-x-4">
    {/* GitHub */}
    <a
      href="https://github.com/Witcher0766"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      aria-label="GitHub"
      target='_blank'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .297C5.37.297 0 5.67 0 12.3c0 5.296 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.18c-3.338.725-4.042-1.44-4.042-1.44-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.998.108-.776.418-1.305.762-1.604-2.665-.304-5.466-1.335-5.466-5.935 0-1.31.468-2.38 1.235-3.222-.124-.304-.535-1.527.118-3.18 0 0 1.007-.322 3.3 1.23.957-.266 1.98-.398 3-.404 1.02.006 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.244 2.876.12 3.18.768.842 1.232 1.912 1.232 3.222 0 4.61-2.805 5.627-5.477 5.922.429.37.812 1.096.812 2.21v3.283c0 .32.216.694.825.576C20.565 22.098 24 17.593 24 12.3 24 5.67 18.63.297 12 .297z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/vishwajeet-kumar-8080a51bb/"
      className="text-gray-500 hover:text-blue-700"
      aria-label="LinkedIn"
      target='_blank'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.06 20.452H3.548V9.186H7.06v11.266zm-1.73-12.94c-1.134 0-2.06-.926-2.06-2.06 0-1.134.926-2.06 2.06-2.06s2.06.926 2.06 2.06c0 1.134-.926 2.06-2.06 2.06zm15.223 12.94h-3.507v-5.516c0-1.313-.028-3.006-1.831-3.006-1.834 0-2.116 1.432-2.116 2.914v5.608H9.594V9.186h3.368v1.532h.048c.47-.894 1.623-1.832 3.342-1.832 3.574 0 4.237 2.352 4.237 5.41v6.156z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="#"
      className="text-gray-500 hover:text-pink-600"
      aria-label="Instagram"
      target='_blank'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="h-6 w-6"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C5.176 0 4.968.004 4.023.05 3.08.097 2.454.22 1.95.427c-.55.223-1.02.52-1.495.996-.477.476-.772.947-.996 1.495-.206.504-.33 1.13-.377 2.073C.004 4.968 0 5.176 0 8s.004 3.032.05 3.977c.047.943.17 1.57.377 2.073.223.55.52 1.02.996 1.495.476.477.947.772 1.495.996.504.206 1.13.33 2.073.377C4.968 15.996 5.176 16 8 16s3.032-.004 3.977-.05c.943-.047 1.57-.17 2.073-.377.55-.223 1.02-.52 1.495-.996.477-.476.772-.947.996-1.495.206-.504.33-1.13.377-2.073.046-.945.05-1.153.05-3.977s-.004-3.032-.05-3.977c-.047-.943-.17-1.57-.377-2.073-.223-.55-.52-1.02-.996-1.495-.476-.477-.947-.772-1.495-.996-.504-.206-1.13-.33-2.073-.377C11.032.004 10.824 0 8 0zm0 1.406c2.91 0 3.132.011 4.233.06.975.045 1.503.21 1.854.351.47.183.806.4 1.158.753.353.352.57.688.753 1.158.14.351.306.88.351 1.854.049 1.1.06 1.322.06 4.233s-.011 3.132-.06 4.233c-.045.975-.21 1.503-.351 1.854-.183.47-.4.806-.753 1.158-.352.353-.688.57-1.158.753-.351.14-.88.306-1.854.351-1.101.049-1.323.06-4.233.06s-3.132-.011-4.233-.06c-.975-.045-1.503-.21-1.854-.351-.47-.183-.806-.4-1.158-.753-.353-.352-.57-.688-.753-1.158-.14-.351-.306-.88-.351-1.854C1.417 11.132 1.406 10.91 1.406 8s.011-3.132.06-4.233c.045-.975.21-1.503.351-1.854.183-.47.4-.806.753-1.158.352-.353.688-.57 1.158-.753.351-.14.88-.306 1.854-.351C4.868 1.417 5.09 1.406 8 1.406z" />
        <path d="M8 3.937a4.063 4.063 0 1 0 0 8.126 4.063 4.063 0 0 0 0-8.126zm0 1.406a2.657 2.657 0 1 1 0 5.313 2.657 2.657 0 0 1 0-5.313zM12.274 3.486a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16z" />
      </svg>
    </a>
  </div>
</div>

    </div>
  </footer>
  
  )
}

export default Footer