import Tippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';

function DropMenu({ children, content }) {
    return (  
        <>
            <Tippy
                placement="right-end"
                hideOnClick={true}
                interactive
                trigger="click"
                render={attrs => (
                    <div tabIndex='-1' {...attrs}>
                        <ul className=" w-auto h-auto overflow-hidden shadow-sm dark:shadow-md border border-solid border-slate-500 
                            shadow-slate-400 dark:shadow-black dark:bg-dark-color-sidebar rounded-lg text-md">
                            {content}

                        </ul>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </>
    );
}

export default DropMenu;