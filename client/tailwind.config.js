/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      maxWidth: {
        'avatar': '4.2%',
        'width-form-login-signup' : '50%',
        'modal-new-room': '40%',

      },
      maxHeight : {
        'navbar' : '90px',
        'height-child-list-chat-sidebar': 'calc(100% - 96px)',
      },
      margin: {
        'navbar' : '90px',
        'margin-send-btn' : '30px'
      },
      padding: {
        'padding-send-btn' : '10px'
      },

      width: {
        'chat-window-width' : 'calc(100% - (240px + 320px))',
        'chat-window-width-none-choosing-room' : 'calc(100% - (240px))',
      },

      height: {
        'height-chat-content': 'calc(100% - 80px - 90px)',
        '1/2': '50%',
        'height-parent-list-chat-sidebar': 'calc(100% - (102px + 124px))',
        
      },

      backgroundColor: {
        'color-sidebar': '#20232b',
        'color-content': '#1d1e24',
        'color-input': '#16171b',
        'color-user-item-in-list': '#1a1e23' ,
        'color-chat': '#b785f5',
        'color-search-user': '#16171b',
        'color-modal-new-room': '#1a3250',
      },

      top: {
        'search-icon': '10%',
      },
      left: {
        'loading-icon-chat-content': '48%',
        'istyping': '277px',
      }
    },
  },
  plugins: [],
}