/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      maxWidth: {
        'avatar': '4.2%',
        'width-form-login-signup' : '50%',
        'modal-new-room': '85%',

      },
      maxHeight : {
        'navbar' : '90px',
        'height-child-list-chat-sidebar': 'calc(100% - 160px)',
        'modal-new-room' : '450px'
      },
      margin: {
        'navbar' : '90px',
        'margin-send-btn' : '30px'
      },
      padding: {
        'padding-send-btn' : '8.5px',
        'fixed-off-notice-icon': '7px'
      },

      width: {
        'chat-window-width' : 'calc(100% - (240px + 320px))',
        'chat-window-width-none-choosing-room' : 'calc(100% - 240px)',
      },

      height: {
        'height-chat-content': 'calc(100% - (80px + 90px))',
        '1/2': '50%',
        'height-parent-list-chat-sidebar': 'calc(100% - (102px + 124px))',
        
      },
      borderColor : {
        'dark-color-chat-window': '#444',
        // Light theme
        'color-chat-window': '#d5d5d5',
       
      },

      backgroundColor: {
        'color-primary' : '#0f75ff', //#0f75ff 0147ff
        'dark-color-primary': 'rgb(2 132 199 / 1)',
        'modal' : 'rgba(0,0,0,0.5)',

        // Dark Theme
        'dark-color-sidebar': '#20232b', //20232b
        'dark-color-content': '#1d1e24', //1d1e24
        'dark-color-input': '#16171b',
        'dark-color-none-seen': '#1a1e23' ,
        'dark-color-seen': '#364952' ,
        'dark-color-chat': '#b785f5',
        'dark-color-search-user': '#16171b',
        'color-modal-new-room': '#1a3250',
        'list-references' : 'rgba(0,0,0,0.1)',
        'dark-color-message': '#444',
        
        
        // Light Theme
        'color-message': '#f0f0f0',
        'color-sidebar': '#f5f7fb',
        'color-content': '#fff',
        'color-none-seen': '#fff', //#1a1e23
        'color-seen': '#dadada', //364952
        'color-search-user': '#fff',
        
      },

      textColor: {
        'primary': '#0f75ff',
        // Dark Theme:
        'dark-color-primary': 'rgb(2 132 199 / 1)',


        // Light THeme: 
        'color-title': '#000',
        'color-message': '#fff',
        'color-lastmessage': '#777',
        'color-search-icon': '#838383'
      },
      outlineColor: {
        'outline' : '#2a22ffab;'
      },

      top: {
        'search-icon': '10%',
      },
      left: {
        'loading-icon-chat-content': '48%',
        'istyping': '277px',
      },
      
      fontSize: {
        'lastmessage-sumary-sidebar': '13px'
      },
    },
  },
  plugins: [],
}


// #35aef3 #a44cdc #06d5fe #fa09e2
/**
 * background-image: linear-gradient(to left , #a44cdc  ,#35aef3 );
 */