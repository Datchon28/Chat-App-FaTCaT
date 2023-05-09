
function Modal({ children, maxWidth, maxHeight }) {
    return (
        <div className="fixed w-full h-full bg-modal top-0 left-0 right-0 bottom-0">
            <div className={`absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 ${maxWidth} ${maxHeight} w-full h-full`}>
                {children}
            </div>
        </div>
    );
}

export default Modal;