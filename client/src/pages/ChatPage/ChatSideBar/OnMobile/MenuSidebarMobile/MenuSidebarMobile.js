

function MenuSidebarMobile({ closeMenu, openEffect }) {
    return (
            <div onClick={closeMenu} className={`bg-amber-200 w-72 h-full absolute ${openEffect} transition-transform`}>
                <div className="">
                    <h1>List</h1>
                    <h1>List</h1>
                    <h1>List</h1>
                    <h1>List</h1>
                    <h1>List</h1>
                    <h1>List</h1>
                    <h1>List</h1>
                    <h1>List</h1>
                    <h1>List</h1>
                </div>
            </div>
       
    );
}

export default MenuSidebarMobile;