import * as React from "react";
import UploadIcon from "../../assets/upload.svg";
import EditIcon from "../../assets/edit.svg";

import "./FormImageUploader.css";

type Props = {
    value?: string;
    onChange: (imageUrl: string) => void;
};

function readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

export function FormImageUploader({ value, onChange }: Props) {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [isDragging, setIsDragging] = React.useState(false);

    async function handleFiles(files: FileList | null) {
        const file = files?.[0];
        if (!file || !file.type.startsWith("image/")) {
            return;
        }

        onChange(await readFileAsDataUrl(file));
    }

    const classNames = [
        "form-image-uploader",
        isDragging ? "form-image-uploader--dragging" : "",
        value ? "form-image-uploader--uploaded" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div
            className={classNames}
            onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleFiles(e.dataTransfer.files);
            }}
        >
            <input
                ref={inputRef}
                type="file"
                aria-label="Upload cover image for the course"
                accept="image/*"
                className="form-image-uploader__input"
                onChange={(e) => {
                    handleFiles(e.target.files);
                    // Reset, so selecting the same file again still fires onChange.
                    e.target.value = "";
                }}
            />

            {value ? (
                <div className="form-image-uploader__preview">
                    <img src={value} alt="" className="form-image-uploader__preview-image" />
                    <div>File uploaded!</div>
                    <div className="form-image-uploader__preview-edit">
                        <img src={EditIcon} alt="" />
                    </div>
                </div>
            ) : (
                <div className="form-image-uploader__placeholder">
                    <img src={UploadIcon} alt="" />
                    <div className="form-image-uploader__title">Drag & Drop</div>
                    <div className="form-image-uploader__subtitle">
                        Drag & drop or click to browse images and videos
                    </div>
                </div>
            )}
        </div>
    );
}
