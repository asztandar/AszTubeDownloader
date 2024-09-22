"use client";

import { useState } from "react";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import styles from "./Form.module.css";
const Form = () => {

    const [format, setFormat] = useState<'MP4' | 'MP3'>('MP4');
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleDownload = (link: string) => {
        console.log("🚀 ~ handleDownload ~ link:", link)
        
    };

    return(
        <section className={styles.section}>
            <Input onDownload={handleDownload} openModal={openModal}/>
            <span>wybrany typ: {format}</span>
            <Modal isOpen={modalIsOpen} onClose={closeModal} setFormat={setFormat} format={format}/>
        </section>
    )
}
export default Form;