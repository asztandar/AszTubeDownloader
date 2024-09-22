import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from "./Modal.module.css";

interface IModal {
    isOpen: boolean;
    onClose: () => void;
    setFormat: Dispatch<SetStateAction<"MP4" | "MP3">>;
    format: string
}

const Modal = ({ isOpen, onClose, setFormat, format}: IModal) => {

    const handleFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormat(event.target.value as 'MP4' | 'MP3');
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h2>Ustawienia pobierania</h2>
                </div>

                <div className={styles.modal_body}>
                    <p>Typ:</p>
                    <label className={styles.label}>
                        <input
                            className={styles.radio_input}
                            type="radio"
                            value="MP4"
                            checked={format === 'MP4'}
                            onChange={handleFormatChange}
                        />
                        MP4
                    </label>
                    <label className={styles.label}>
                        <input
                            className={styles.radio_input}
                            type="radio"
                            value="MP3"
                            checked={format === 'MP3'}
                            onChange={handleFormatChange}
                        />
                        MP3
                    </label>
                </div>

                <div className={styles.modal_footer}>
                    <button className={styles.close_button} onClick={onClose}>
                        ZAMKNIJ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;