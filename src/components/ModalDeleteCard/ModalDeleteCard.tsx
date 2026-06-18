import * as React from "react";
import CloseIcon from "../../assets/close.svg";

import "./ModalDeleteCard.css";
import { Button } from "../Button/Button.tsx";

type Props = {
    onClose: () => void;
    onConfirm: () => void;
    modalRef: React.RefObject<HTMLDialogElement | null>;
};

export function ModalDeleteCard({ onClose, modalRef, onConfirm }: Props) {
    return (
        <dialog className="modal-delete-card" onClose={onClose} ref={modalRef}>
            <h2 className="modal-delete-card__header">Delete course</h2>
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
                    Close
                </Button>
                <Button onClick={onConfirm} visualType="danger">
                    Confirm
                </Button>
            </div>
        </dialog>
    );
}
