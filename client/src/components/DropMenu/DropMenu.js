import Tippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';

function DropMenu({ children, content }) {
    return (  
        <>
            <Tippy
                hideOnClick={true}
                interactive
                trigger="click"
                render={attrs => (
                    <div tabIndex='-1' {...attrs}>
                        {content}
                    </div>
                )}
            >
                {children}
            </Tippy>
        </>
    );
}

export default DropMenu;