'use client'
import { useRef } from 'react'
import './style.css'

export default function Test() {
  const menuRef = useRef()
  const openClose = () => {
    menuRef.current.classList.toggle('active')
    // menuRef.current.classList.remove('active')
    // open
    //   ? document.querySelector('.phone-screen').classList.toggle('active')
    //   : document.querySelector('.phone-screen').classList.remove('active')
    console.log(menuRef.current.classList)
  }
  return (
    <div className='phone-frame'>
      <div ref={menuRef} className='phone-screen'>
        <div className='imageContainer'>
          <div className='overlay'></div>
        </div>
        {/* <!-- <div className="button-menu button-menu1"></div> --> */}
        <svg
          className='button-menu button-menu1'
          height='24'
          width='24'
          onClick={openClose}
          // ref={menuRef}
          // onclick="document.querySelector('.phone-screen').classList.toggle('active')"
        >
          <circle className='bg' r='12' cx='12' cy='12' />
          <path className='line line1' d='M 6,8 H 18' />
          <path className='line line2' d='M 6,12 H 18' />
          <path className='line line3' d='M 6,16 H 18' />
        </svg>
        <div
          className='menu'
          onClick={openClose}
          // onclick="document.querySelector('.phone-screen').classList.remove('active')"
        >
          <div className='option'>
            <svg
              className='food'
              xmlns='http://www.w3.org/2000/svg'
              height='100'
              width='100'
              viewBox='0 0 100 100'
              data-name='Camada 1'
            >
              <title>Sushi</title>
              <path d='M96.697 25.12a21.525 20.56 0 0 0 .774-3.23C99.147 10.54 88.228 2.11 76.69.53 59.07-1.9 40.142 4.1 24.773 17 9.07 30.1-.197 48.36.003 65.81.108 75.25 6.965 95.1 17.8 99.19a11.715 11.19 0 0 0 4.345.81 12.69 12.12 0 0 0 6.523-1.81l46.064-19.85a43.018 41.09 0 0 0 21.965-53.22zm-76.55 68.49c-7.832-2.95-13.78-20.08-13.873-27.87a53.393 51 0 0 1 3.643-18.57L31.61 55l2.22-5.61-21.39-7.72a69.997 66.86 0 0 1 16.47-20.2c.344-.29.7-.56 1.045-.84l26.864 9.7 2.22-5.61-23.21-8.38C46.182 9.6 57.7 6 68.9 6a48.975 46.78 0 0 1 6.9.46c7.16 1 16.75 6.17 15.453 14.59-1.047 7.33-8.02 12.15-14.73 16.81-1.3.9-2.576 1.79-3.78 2.67A152.85 146 0 0 0 48.1 63.11a106.786 102 0 0 0-9.005 13c-3.235 5.27-6.28 10.25-10.343 14.33a15.16 14.48 0 0 1-3.005 2.4l-2.094.92a5.12 4.89 0 0 1-3.507-.15zm52-20.73L39.534 86.93c1.748-2.54 3.36-5.16 4.952-7.73a98.944 94.51 0 0 1 8.438-12.29 145.825 139.29 0 0 1 23.65-21.62c1.162-.86 2.387-1.71 3.643-2.58 4.324-3 8.972-6.25 12.396-10.39a36.768 35.12 0 0 1-20.468 40.56z' />
            </svg>
            <div className='japanese'>にぎり</div>
            <div className='roman'>Nigiri</div>
          </div>
          <div className='option'>
            <svg
              className='food'
              xmlns='http://www.w3.org/2000/svg'
              height='100'
              width='100'
              viewBox='0 0 100 100'
              data-name='Camada 1'
            >
              <title>Sushi_2</title>
              <path d='M71.945 28.205L50 16.26 28.05 28.204a10.902 11.493 0 0 0-1 3.533 10.522 11.092 0 0 0 1 3.606L50 47.3l22.005-11.946a10.902 11.493 0 0 0 1-3.532 10.522 11.092 0 0 0-1.06-3.617zM34.59 31.79L50 23.355l15.424 8.435L50 40.183z' />
              <path d='M98.77 37.62a28.755 30.314 0 0 0-2.76-8.824c-2.76-5.778-7.352-10.882-13.893-15.426C72.735 6.77 61.563.095 50.06 0h-.12c-11.5.095-22.673 6.77-32.094 13.37-6.55 4.555-11.162 9.67-13.912 15.468a28.865 30.43 0 0 0-1.18 2.815 29.165 30.747 0 0 0-1.52 5.968c-2.24 14.404-1.43 26.288 2.45 35.334 4 9.385 11.87 14.636 19.743 18.906 10 5.4 18.623 8.056 26.514 8.14h.12c7.893-.084 16.564-2.74 26.516-8.14 7.87-4.218 15.712-9.49 19.743-18.906 3.87-9.046 4.69-20.93 2.45-35.333zM21.155 18.643C29.818 12.612 40 6.442 49.91 6.326h.18c9.913.116 20.095 6.327 28.756 12.326 5.69 3.965 9.642 8.32 11.922 13.202-2.28 4.83-6.2 9.13-11.852 13.074-8.66 6.032-18.853 12.21-28.765 12.316H50c-9.94-.106-20.132-6.327-28.794-12.326-5.72-3.975-9.65-8.33-11.922-13.223 2.32-4.818 6.24-9.11 11.872-13.043zm69.692 51.666c-3.27 7.613-10.112 12.136-17.003 15.89-9.06 4.913-16.833 7.38-23.734 7.38h-.18c-6.9-.084-14.67-2.52-23.733-7.38-6.91-3.754-13.752-8.277-17.003-15.89-3.25-7.613-4-17.925-2.16-30.578a43.207 45.55 0 0 0 10.922 10.44C27.306 56.737 38.46 63.443 50 63.57h.19c11.503-.126 22.655-6.832 32.007-13.37A43.447 45.803 0 0 0 93.01 39.92c1.84 12.568 1.11 22.796-2.162 30.43z' />
            </svg>
            <div className='japanese'>細巻き</div>
            <div className='roman'>Hosomaki</div>
          </div>
          <div className='option'>
            <svg
              className='food'
              xmlns='http://www.w3.org/2000/svg'
              height='100'
              width='100'
              viewBox='0 0 100 100'
              data-name='Camada 1'
            >
              <title>Tempura_1</title>
              <path d='M99.877 77.004a11.048 11.047 0 0 0-5.64-7.848l-13.566-7.588-.55-.56c-1.3-1.71-2.34-2.95-3.228-3.998-.89-1.05-1.65-1.78-2.39-2.54l-1.36-1.42a57.317 57.312 0 0 1-3.79-4.528l-.06-.08a57.217 57.213 0 0 1-4.288-6.428 59.667 59.662 0 0 0-4.79-7.138 61.986 61.98 0 0 0-5.607-6.488l-.6-.56a50.92 50.914 0 0 1-4-4.608l-.58-.75a54.048 54.043 0 0 1-4.418-6.528 61.037 61.03 0 0 0-4.79-7.128 16.656 16.655 0 0 0-6.32-4.578c-.47-.23-.93-.46-1.37-.7l-1.318-.75c-2.1-1.2-4.47-2.55-7.3-2.76-2.828-.21-5.358.84-7.587 1.74q-.72.3-1.44.57c-.47.18-1 .34-1.45.51l-.42.18a16.086 16.085 0 0 0-9.997 9.997l-.14.41c-.17.49-.33 1-.51 1.45-.18.45-.37 1-.57 1.44-.92 2.238-1.95 4.768-1.78 7.597.17 2.83 1.54 5.208 2.74 7.298.25.45.51.9.75 1.35.24.45.47.9.7 1.37a16.656 16.655 0 0 0 4.58 6.317 61.037 61.03 0 0 0 7.147 4.758 55.218 55.213 0 0 1 6.54 4.39 54.538 54.533 0 0 1 4.398 3.668l-1.36 1.45c-.74.76-1.49 1.53-2.39 2.54-.9 1.01-1.93 2.25-3.23 3.998l-.54.55-13.576 7.548A10.998 10.997 0 0 0 .15 77.004 10.578 10.577 0 0 0 10.815 89.2a10.588 10.587 0 0 0 12.197 10.677 10.998 10.997 0 0 0 7.84-5.64l7.597-13.565.55-.55a61.097 61.09 0 0 0 6.5-5.618 52.25 52.244 0 0 1 4.508-3.998 52.25 52.244 0 0 1 4.51 3.998 61.097 61.09 0 0 0 6.487 5.62l.55.548 7.598 13.566a10.998 10.997 0 0 0 7.85 5.64A10.588 10.587 0 0 0 89.198 89.2a10.588 10.587 0 0 0 10.677-12.196zm-92.51 4.868a4.56 4.56 0 0 1-1.35-3.87 4.63 4.63 0 0 1 2.33-3.408l13.357-7.477 3.48 3.48-11.28 11.275a4.62 4.62 0 0 1-6.537 0zm18.086 9.767a4.59 4.59 0 0 1-3.44 2.358 4.54 4.54 0 0 1-3.898-1.31 4.62 4.62 0 0 1 0-6.537l11.337-11.346 3.48 3.48zM41.31 70.215a50.46 50.455 0 0 1-4.2 3.79L26.013 62.907c1.58-1.94 2.66-3.06 3.78-4.21.46-.47.93-.95 1.43-1.488.998.83 2.128 1.79 3.688 3a58.987 58.982 0 0 0 7.1 4.797c.94.55 1.85 1.09 3 1.84-1.61 1.34-2.67 2.37-3.7 3.37zm17.396 0c-1-1-2.08-2-3.72-3.4-.77-.65-1.68-1.37-2.78-2.21-.81-.598-1.54-1.158-2.198-1.598a58.507 58.502 0 0 0-4.93-3.16 55.758 55.753 0 0 1-6.528-4.378c-1.48-1.13-2.57-2-3.46-2.82-.89-.82-1.72-1.638-2.49-2.358-.588-.57-1.178-1.15-1.878-1.8-1.12-1-2.53-2.22-4.62-3.82a62.376 62.37 0 0 0-7.088-4.787 54.048 54.043 0 0 1-6.528-4.39 11.787 11.786 0 0 1-2.86-4.217c-.26-.52-.51-1-.78-1.54l-.83-1.48c-1-1.69-1.91-3.24-2-4.738-.09-1.5.59-3.15 1.31-4.95.22-.518.43-1.048.63-1.578s.38-1.07.57-1.62a11.727 11.726 0 0 1 2.27-4.568 11.727 11.726 0 0 1 4.57-2.27c.55-.19 1.09-.37 1.62-.57.53-.2 1.06-.41 1.578-.63a12.607 12.606 0 0 1 5-1.31c1.45.09 3 1 4.728 2l1.48.83c.5.27 1 .52 1.54.78a11.787 11.786 0 0 1 4.22 2.86 55.298 55.293 0 0 1 4.348 6.527 59.757 59.752 0 0 0 4.79 7.13c.48.63.93 1.2 1.348 1.72a55.608 55.603 0 0 0 4 4.487l.27.28a56.648 56.643 0 0 1 5.148 5.998 55.758 55.753 0 0 1 4.38 6.528 62.376 62.37 0 0 0 4.788 7.128l.33.42c1.62 2.1 2.82 3.47 3.86 4.59.5.54 1 1 1.43 1.49A54.558 54.553 0 0 1 74 62.907L62.905 74.005a50.46 50.455 0 0 1-4.2-3.79zM81.87 92.65A4.54 4.54 0 0 1 78 93.997a4.59 4.59 0 0 1-3.408-2.32l-7.498-13.395 3.47-3.48L81.87 86.112a4.62 4.62 0 0 1 0 6.54zM92.65 81.87a4.62 4.62 0 0 1-6.538 0L74.802 70.566l3.48-3.48 13.356 7.478a4.62 4.62 0 0 1 1 7.308zM54.717 19.49a42.8 42.797 0 0 0 2.93 3.47c1.1-1.61 1.798-2.81 2.488-4a55.298 55.293 0 0 1 4.39-6.527 11.787 11.786 0 0 1 4.218-2.86c.52-.26 1-.51 1.54-.78l1.49-.768c1.68-1 3.23-1.91 4.73-2a12.607 12.606 0 0 1 4.998 1.31c.52.22 1 .43 1.58.63.58.2 1.07.38 1.62.57a11.727 11.726 0 0 1 4.57 2.27 11.727 11.726 0 0 1 2.268 4.567c.19.55.37 1.09.57 1.62.2.53.41 1.06.63 1.58.72 1.8 1.41 3.498 1.31 4.948-.1 1.45-1 3.05-2 4.738l-.83 1.48c-.27.5-.52 1-.78 1.54a11.787 11.786 0 0 1-2.86 4.218 54.048 54.043 0 0 1-6.577 4.39 62.536 62.53 0 0 0-7.118 4.777l.14.18.16.21a49.04 49.035 0 0 0 3.31 4l.24.26a52.988 52.984 0 0 1 6.348-4.3 61.037 61.03 0 0 0 7.13-4.788 16.656 16.655 0 0 0 4.577-6.318c.23-.47.46-.93.7-1.37.24-.44.5-.9.75-1.35 1.2-2.09 2.55-4.468 2.74-7.297.19-2.83-.84-5.36-1.74-7.588q-.3-.72-.57-1.44c-.18-.47-.34-1-.51-1.45l-.16-.39A16.086 16.085 0 0 0 87 3.027l-.41-.14c-.49-.17-1-.33-1.45-.51l-1.44-.57c-2.24-.92-4.77-1.95-7.598-1.78-2.83.17-5.2 1.54-7.3 2.74-.448.25-.898.51-1.348.75-.45.24-.9.47-1.37.7a16.656 16.655 0 0 0-6.32 4.578 61.037 61.03 0 0 0-4.758 7.148c-.42.71-.83 1.4-1.31 2.18.17.22.34.46.53.7z' />
            </svg>
            <div className='japanese'>天ぷら</div>
            <div className='roman'>Tempura</div>
          </div>
          <div className='option'>
            <svg
              className='food'
              xmlns='http://www.w3.org/2000/svg'
              height='100'
              width='100'
              viewBox='0 0 100 100'
              data-name='Camada 1'
            >
              <title>Soup</title>
              <path d='M85.16 38.74L92.37 0h-6.11l-7.21 38.74H65.91L67.71 0h-6L59.9 38.74H0v2.93A48.48 48.48 0 0 0 20.67 81.2V100h58.66V81.2A48.48 48.48 0 0 0 100 41.67v-2.93zm-11.83 55.4H26.67v-9.28a50.83 50.83 0 0 0 46.66 0zM50 84.66c-20.36 0-37.54-13.59-42.53-32A41.7 41.7 0 0 1 6.1 44.6h87.8C92.36 67 73.26 84.66 50 84.66z' />
            </svg>
            <div className='japanese'>そば</div>
            <div className='roman'>Soba</div>
          </div>
          <div className='option'>
            <svg
              className='food'
              xmlns='http://www.w3.org/2000/svg'
              height='100'
              width='100'
              viewBox='0 0 100 100'
              data-name='Camada 1'
            >
              <title>Dango</title>
              <path d='M100 95.76l-19-19A18.75 18.75 0 0 0 65.76 47a19.29 19.29 0 0 0-4 .43 18.75 18.75 0 0 0-5-17.21 18.75 18.75 0 0 0-17.21-5.05 19.29 19.29 0 0 0 .43-4A18.74 18.74 0 0 0 10.27 6l-6-6L0 4.24l6 6A18.75 18.75 0 0 0 21.22 40a19.29 19.29 0 0 0 4-.43A18.7 18.7 0 0 0 47.44 61.8a19.29 19.29 0 0 0-.43 4A18.74 18.74 0 0 0 76.72 81l19 19zM21.22 34a12.75 12.75 0 1 1 9-21.77 12.76 12.76 0 0 1-9 21.77zm13.25 18.51a12.75 12.75 0 0 1 18-18 12.76 12.76 0 0 1-18 18zm22.28 22.27a12.75 12.75 0 1 1 18 0 12.67 12.67 0 0 1-18 0z' />
            </svg>
            <div className='japanese'>団子</div>
            <div className='roman'>Dango</div>
          </div>
          <div className='option'>
            <svg
              className='food'
              xmlns='http://www.w3.org/2000/svg'
              height='100'
              width='100'
              viewBox='0 0 100 100'
              data-name='Camada 1'
            >
              <title>Dumpling</title>
              <path d='M99.58 53C96.26 31.92 73.69 6.1 52.08 6H47.9C26.31 6.1 3.74 31.92.42 53-1.8 67.06 4.85 79.69 18.19 86.82a58.35 58.35 0 0 0 19.21 5.87 86.738 86.74 0 0 0 25.2 0 58.35 58.35 0 0 0 19.21-5.87C95.15 79.69 101.8 67.06 99.58 53zM79 81.49a52.65 52.65 0 0 1-17.28 5.27 80.748 80.75 0 0 1-23.44 0A52.65 52.65 0 0 1 21 81.49C10 75.65 4.54 65.35 6.34 53.93c2.36-15 16.17-33.31 31.21-39.63l-6.3 12.06 5.31 2.78 8.85-17c.53-.06 1.06-.1 1.59-.13v15h6v-15c.53 0 1.06.07 1.59.13l8.85 17 5.31-2.78-6.3-12.06c15 6.33 28.85 24.63 31.21 39.63C95.46 65.35 90 75.65 79 81.49z' />
            </svg>
            <div className='japanese'>餃子</div>
            <div className='roman'>Gyoza</div>
          </div>
        </div>
      </div>
    </div>
  )
}