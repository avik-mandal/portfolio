import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume: React.FC = () => {
    const [wid, setWid] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = (): void => {
            setWid(window.innerWidth);
        };

        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("load", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scale = wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1;

    return (
        <div className='ResumePage'>
            <Document file={pdf} className="resumeview">
                <Page pageNumber={1} scale={scale} />
            </Document>

            <a href={pdf} target='_blank' rel="noreferrer" download="Avik's Resume">
                <button className='downloadCV' type='button'>
                    <h3><BsDownload />&nbsp; Download CV</h3>
                </button>
            </a>
        </div>
    );
};

export default Resume;