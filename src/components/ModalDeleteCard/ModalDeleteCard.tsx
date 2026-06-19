import * as React from "react";
import CloseIcon from "../../assets/close.svg";
import { Button } from "../Button/Button.tsx";

import "./ModalDeleteCard.css";

type Props = {
    onClose: () => void;
    onConfirm: () => void;
    modalRef: React.RefObject<HTMLDialogElement | null>;
};

export function ModalDeleteCard({ onClose, modalRef, onConfirm }: Props) {
    function onKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
        if (e.key === "Enter") {
            onConfirm();
        }
    }

    return (
        <dialog
            aria-labelledby="modal-delete-card-header"
            className="modal-delete-card"
            onClose={onClose}
            ref={modalRef}
            onKeyDown={onKeyDown}
        >
            <h2 className="modal-delete-card__header" id="modal-delete-card-header">
                Delete course
            </h2>
            <div>
                <button onClick={onClose} className="modal-delete-card__close">
                    <img src={CloseIcon} alt="Close Modal" />
                </button>
            </div>
            <div className="modal-delete-card__content">
                <p>
                    Are you sure you want to delete this course? You will lose all data attached to
                    it.
                </p>
            </div>
            <div className="modal-delete-card__actions">
                <Button onClick={onClose} visualType="secondary">
                    Cancel
                </Button>
                <Button onClick={onConfirm} visualType="danger">
                    Delete
                </Button>
            </div>
        </dialog>
    );
}
