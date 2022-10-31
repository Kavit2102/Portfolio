import React from "react";
import * as faIcon from "react-icons/fa";
import courseraImage from "../assets/coursera.png";
import udemyImage from "../assets/udemy.png";
import Web_Developement from "../assets/Web_Developement.pdf";
import Python from "../assets/Python.pdf";
import ReactJS from "../assets/ReactJS.pdf";
import LetsGrowMore from "../assets/letsgrowmore.jpg";

const Courses = () => {
  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="pt-10 text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-5xl">
        My Courses &#47; Internships
      </h2>
      <h3 className="pt-16 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-2xl">
        My Courses
      </h3>
      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block" />
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src={courseraImage}
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Aug 2021 &#45; Sept 2021
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    <a href={Web_Developement} target="_blank" rel="noreferrer">
                      HTML, CSS, and Javascript for Web Developers
                    </a>
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Learnt basic web tehnologies HTML , CSS &amp; Javascript
                      and learnt how to build dynamic websites .
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src={courseraImage}
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Feb 2022 &#45; March 2022
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    <a href={Python} target="_blank" rel="noreferrer">
                      Crash Course on Python
                    </a>
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Learnt basics of Python .
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src={udemyImage}
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    May 2022 &#45; June 2022
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    <a href={ReactJS} target="_blank" rel="noreferrer">
                      Zero to Hero React JS mastery E-degree course
                    </a>
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Learnt HTML5 , CSS3 , Javascript , Bootstrap and ReactJS
                      and how to build static websites and single page
                      applications .
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internships */}
      <h3 className="pt-24 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-2xl">
        My Internships
      </h3>
      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block" />
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img id="letsgrowmore" src={LetsGrowMore} alt="NA" />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Dec 2021 &#45; Jan 2021
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Frontend Developer
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Built dynamic website using HTML , CSS &amp; Javascript
                      and static page app using ReactJS .
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0 inline-flex items-center space-x-2">
                <faIcon.FaChartPie size={25} />
                <span className="uppercase font-semibold">oasis infobyte</span>
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    July 2022 &#45; Aug 2022
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Frontend Developer
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Built dynamic websites using HTML , CSS and Javasript &
                      single page app using ReactJS .
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
