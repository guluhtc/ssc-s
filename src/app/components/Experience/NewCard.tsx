"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import Link from "next/link";

const NewCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="">
      <div id="w-node-_1261dedf-b3c9-2162-53e7-29ae1d8c7955-5ffe7f77" className="experience-wrapper "
                 style={{ perspective: '1600px' }}
              >
                <div id="w-node-c9a3eb7f-e26e-bb52-e19d-39f848eddb94-5ffe7f77" data-w-id="c9a3eb7f-e26e-bb52-e19d-39f848eddb94"
                  className="experience-card relative"
                 

                >
                  <div data-w-id="3488554c-fe1a-ba8d-8eaa-2749383949b9" className="light-wrapper-in-front">
                    <div className="w-ful h-full light-outside" id='light-outside'>
                    </div>
                  </div>
                  <div className="experience-card-content" id='experience-card-content1'>
                    <div className="experience-card-image-holder">
                      <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63af0aa87013f8781a8f8cbd_Card%20Image%202.webp" loading="lazy" alt="" className="experience-card-image" />
                      <div className="experience-gradient"></div>
                    </div>
                    <div className="experience-card-text-holder" >
                      <div className="card-title">Effortlessly tracking with Black</div>
                      <div className="experience-paragraph-holder">
                        <p className='mainTexts'>Designed for you, Black is the perfect solution for you and your teams tracking time."</p>
                      </div>
                    </div>
                  </div>
                  <div className="light-wrapper" id='light-wrapper'>
                    <div className="light">
                      <div className="light-inside"></div>
                    </div>
                  </div>
                </div>
              </div>
      </CardBody>
    </CardContainer>
  );
}


export default NewCard;