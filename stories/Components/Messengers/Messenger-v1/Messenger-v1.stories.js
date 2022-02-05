import {InitMessenger} from "./initMessenger-v1";

export default {
  title: 'Components/Messengers',
  component: 'Messenger_version_1',
  argTypes: {
    tooltipText: { control: 'text' },
    addEmail: { control: 'boolean' },
    emailText: { control: 'text' },
    emailAddress: { control: 'text' },
    addMessenger: { control: 'boolean' },
    messengerText: { control: 'text' },
    messengerID: { control: 'text' },
    addViber: { control: 'boolean' },
    viberText: { control: 'text' },
    phoneNumberViber: { control: 'text' },
    addSkype: { control: 'boolean' },
    skypeText: { control: 'text' },
    skypeUserName: { control: 'text' },
    addTelegram: { control: 'boolean' },
    telegramText: { control: 'text' },
    telegramUserName: { control: 'text' },
    addWhatsApp: { control: 'boolean' },
    whatsAppText: { control: 'text' },
    phoneNumberWhatsApp: { control: 'text' }
  },
};

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    new InitMessenger();
  }, 0)
})

const Template = ({
  tooltipText,
  addEmail,
  emailText,
  emailAddress,
  addMessenger,
  messengerText,
  messengerID,
  addViber,
  viberText,
  phoneNumberViber,
  addSkype,
  skypeText,
  skypeUserName,
  addTelegram,
  telegramText,
  telegramUserName,
  addWhatsApp,
  whatsAppText,
  phoneNumberWhatsApp
}) => {
  const email = `<a href="mailto:${emailAddress}" class="messenger-v1__messenger-item" target="_blank">
                    <svg class="messenger-v1__messenger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.073 502.073"><path d="M501.812 481.176c0 6.269-2.09 11.494-6.269 15.673-4.18 3.135-8.359 5.224-14.629 5.224H21.159c-5.224 0-10.449-2.09-14.629-5.224-4.18-4.18-6.269-9.404-6.269-15.673V175.02h501.551v306.156z" fill="#ffd15c"/><path d="M495.543 496.849c-4.18 3.135-8.359 5.224-14.629 5.224H21.159c-5.224 0-10.449-2.09-14.629-5.224l244.506-210.024 244.507 210.024z" fill="#f8b64c"/><path d="M501.812 175.02l-71.053 51.2L264.62 345.339a23.511 23.511 0 0 1-28.212 0L71.314 226.22.261 175.02l71.053-51.2L225.959 13.061l11.494-8.359a23.511 23.511 0 0 1 28.212 0l11.494 8.359 74.188 53.29 36.571 26.122 42.841 31.347 71.053 51.2z" fill="#40596b"/><path d="M430.759 77.845V226.22L264.62 345.339a23.511 23.511 0 0 1-28.212 0L71.314 226.22V33.959c0-11.494 9.404-20.898 20.898-20.898H364.93l65.829 64.784z" fill="#f2f2f2"/><path d="M365.975 61.127c0 9.404 7.314 16.718 16.718 16.718h48.065l-64.784-64.784.001 48.066z" fill="#cdd6e0"/><path d="M312.686 223.086h16.718c-5.224 11.494-13.584 19.853-25.078 26.122-12.539 7.314-28.212 10.449-47.02 10.449-17.763 0-33.437-3.135-45.976-9.404-12.539-6.269-22.988-14.629-29.257-27.167-6.269-11.494-9.404-25.078-9.404-38.661 0-15.673 3.135-29.257 10.449-42.841s16.718-22.988 29.257-29.257c12.539-6.269 27.167-9.404 42.841-9.404 13.584 0 26.122 3.135 36.571 8.359 10.449 5.224 18.808 12.539 24.033 22.988 5.224 9.404 8.359 20.898 8.359 32.392 0 13.584-4.18 26.122-12.539 37.616-10.449 14.629-24.033 20.898-40.751 20.898-4.18 0-8.359-1.045-10.449-2.09-2.09-2.09-4.18-4.18-4.18-7.314-6.269 6.269-13.584 9.404-21.943 9.404-9.404 0-16.718-3.135-21.943-9.404-6.269-6.269-9.404-14.629-9.404-25.078 0-12.539 3.135-24.033 10.449-35.527 8.359-12.539 19.853-18.808 33.437-18.808 9.404 0 16.718 4.18 21.943 11.494l2.09-9.404h21.943l-12.539 58.514c-1.045 4.18-1.045 6.269-1.045 7.314s0 2.09 1.045 3.135 1.045 1.045 2.09 1.045c2.09 0 6.269-2.09 10.449-5.224 5.224-4.18 10.449-9.404 13.584-16.718s5.224-14.629 5.224-21.943c0-13.584-5.224-25.078-14.629-33.437-9.404-9.404-22.988-13.584-40.751-13.584-14.629 0-27.167 3.135-37.616 9.404-10.449 6.269-17.763 14.629-22.988 25.078s-7.314 21.943-7.314 34.482c0 11.494 3.135 21.943 8.359 31.347 6.269 9.404 13.584 16.718 24.033 20.898 10.449 4.18 21.943 6.269 35.527 6.269 12.539 0 24.033-2.09 33.437-5.224 9.404-4.181 16.718-9.405 22.988-16.719zm-88.817-33.437c0 7.314 1.045 11.494 4.18 15.673 3.135 3.135 6.269 5.224 10.449 5.224 3.135 0 6.269-1.045 8.359-2.09s4.18-3.135 6.269-5.224c3.135-3.135 5.225-8.359 7.314-14.629 2.09-6.269 3.135-12.539 3.135-17.763 0-6.269-1.045-10.449-4.18-14.629-3.135-3.135-6.269-5.224-10.449-5.224s-9.404 2.09-12.539 5.224c-4.18 3.135-7.314 8.359-9.404 15.673-2.089 6.271-3.134 12.54-3.134 17.765z" fill="#ff7058"/></svg>
                    <span class="messenger-v1__messenger-name">${emailText}</span>
                  </a>`;

  const messenger = `<a href="http://m.me/${messengerID}" class="messenger-v1__messenger-item" target="_blank">
                      <svg class="messenger-v1__messenger-icon" enable-background="new 0 0 128 128" height="128px" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="#0084FF" height="128" width="128"/></g><path d="M64,17.531c-25.405,0-46,19.259-46,43.015c0,13.515,6.665,25.574,17.089,33.46v16.462  l15.698-8.707c4.186,1.171,8.621,1.8,13.213,1.8c25.405,0,46-19.258,46-43.015C110,36.79,89.405,17.531,64,17.531z M68.845,75.214  L56.947,62.855L34.035,75.524l25.12-26.657l11.898,12.359l22.91-12.67L68.845,75.214z" fill="#FFFFFF"/></svg>
                      <span class="messenger-v1__messenger-name">${messengerText}</span>
                    </a>`;

  const viber = `<a href="viber://chat?number=%2B${phoneNumberViber}" class="messenger-v1__messenger-item">
                  <svg class="messenger-v1__messenger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.731 455.731"><path fill="#7d3daf" d="M0 0h455.731v455.731H0z"/><path d="M371.996 146.901l-.09-.36c-7.28-29.43-40.1-61.01-70.24-67.58l-.34-.07c-48.75-9.3-98.18-9.3-146.92 0l-.35.07c-30.13 6.57-62.95 38.15-70.24 67.58l-.08.36c-9 41.1-9 82.78 0 123.88l.08.36c6.979 28.174 37.355 58.303 66.37 66.589v32.852c0 11.89 14.49 17.73 22.73 9.15l33.285-34.599c7.219.404 14.442.629 21.665.629 24.54 0 49.09-2.32 73.46-6.97l.34-.07c30.14-6.57 62.96-38.15 70.24-67.58l.09-.36c9-41.101 9-82.781 0-123.881zm-26.34 117.92c-4.86 19.2-29.78 43.07-49.58 47.48-25.921 4.929-52.047 7.036-78.147 6.313a1.851 1.851 0 0 0-1.38.559l-24.303 24.948-25.85 26.53c-1.89 1.97-5.21.63-5.21-2.09v-54.422c0-.899-.642-1.663-1.525-1.836l-.015-.003c-19.8-4.41-44.71-28.28-49.58-47.48-8.1-37.15-8.1-74.81 0-111.96 4.87-19.2 29.78-43.07 49.58-47.48 45.27-8.61 91.17-8.61 136.43 0 19.81 4.41 44.72 28.28 49.58 47.48 8.109 37.151 8.109 74.811 0 111.961z" fill="#fff"/><path d="M270.937 289.942c-3.044-.924-5.945-1.545-8.639-2.663-27.916-11.582-53.608-26.524-73.959-49.429-11.573-13.025-20.631-27.73-28.288-43.292-3.631-7.38-6.691-15.049-9.81-22.668-2.844-6.948 1.345-14.126 5.756-19.361 4.139-4.913 9.465-8.673 15.233-11.444 4.502-2.163 8.943-.916 12.231 2.9 7.108 8.25 13.637 16.922 18.924 26.485 3.251 5.882 2.359 13.072-3.533 17.075-1.432.973-2.737 2.115-4.071 3.214-1.17.963-2.271 1.936-3.073 3.24-1.466 2.386-1.536 5.2-.592 7.794 7.266 19.968 19.513 35.495 39.611 43.858 3.216 1.338 6.446 2.896 10.151 2.464 6.205-.725 8.214-7.531 12.562-11.087 4.25-3.475 9.681-3.521 14.259-.624 4.579 2.898 9.018 6.009 13.43 9.153 4.331 3.086 8.643 6.105 12.638 9.623 3.841 3.383 5.164 7.821 3.001 12.412-3.96 8.408-9.722 15.403-18.034 19.868-2.347 1.259-5.15 1.667-7.797 2.482-3.044-.925 2.647-.815 0 0zm-42.995-158.471c36.515 1.023 66.506 25.256 72.933 61.356 1.095 6.151 1.485 12.44 1.972 18.683.205 2.626-1.282 5.121-4.116 5.155-2.927.035-4.244-2.414-4.434-5.039-.376-5.196-.637-10.415-1.353-15.568-3.78-27.201-25.47-49.705-52.545-54.534-4.074-.727-8.244-.918-12.371-1.351-2.609-.274-6.026-.432-6.604-3.675-.485-2.719 1.81-4.884 4.399-5.023.704-.039 1.412-.007 2.119-.004 36.515 1.023-.707-.003 0 0z" fill="#fff"/><path d="M283.434 203.407c-.06.456-.092 1.528-.359 2.538-.969 3.666-6.527 4.125-7.807.425-.379-1.098-.436-2.347-.438-3.529-.013-7.734-1.694-15.46-5.594-22.189-4.009-6.916-10.134-12.73-17.318-16.248-4.344-2.127-9.042-3.449-13.803-4.237-2.081-.344-4.184-.553-6.275-.844-2.534-.352-3.887-1.967-3.767-4.464.112-2.34 1.822-4.023 4.372-3.879 8.38.476 16.474 2.287 23.924 6.232 15.15 8.023 23.804 20.687 26.33 37.597.114.766.298 1.525.356 2.294.143 1.899.233 3.8.379 6.304-.06.456-.146-2.504 0 0z" fill="#fff"/><path d="M260.722 202.523c-3.055.055-4.69-1.636-5.005-4.437-.219-1.953-.392-3.932-.858-5.832-.918-3.742-2.907-7.21-6.055-9.503-1.486-1.083-3.17-1.872-4.934-2.381-2.241-.647-4.568-.469-6.804-1.017-2.428-.595-3.771-2.561-3.389-4.839.347-2.073 2.364-3.691 4.629-3.527 14.157 1.022 24.275 8.341 25.719 25.007.102 1.176.222 2.419-.039 3.544-.447 1.926-1.873 2.891-3.264 2.985-3.055.055 1.391-.094 0 0z" fill="#fff"/></svg>
                  <span class="messenger-v1__messenger-name">${viberText}</span>
                </a>`;

  const skype = `<a href="skype:live:${skypeUserName}?chat" class="messenger-v1__messenger-item">
                    <svg class="messenger-v1__messenger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.731 455.731"><path fill="#15ace5" d="M0 0h455.731v455.731H0z"/><path d="M379.742 257.242a147.043 147.043 0 0 0 2.708-28.107c0-80.82-65.518-146.338-146.338-146.338-9.615 0-19.01.938-28.107 2.708a84.048 84.048 0 0 0-42.589-11.532c-46.65 0-84.467 37.817-84.467 84.467a84.051 84.051 0 0 0 11.532 42.588 147.043 147.043 0 0 0-2.708 28.107c0 80.82 65.518 146.338 146.338 146.338 9.615 0 19.01-.938 28.107-2.708a84.047 84.047 0 0 0 42.588 11.532c46.65 0 84.467-37.817 84.467-84.467a84.024 84.024 0 0 0-11.531-42.588zm-140.85 72.392c-52 0-78-19.5-86-44s9.5-31.5 15-32 17.167.833 20.5 11c3.465 10.567 15 31.5 40 34s41.5-9 46.5-21-4-28.5-42.5-34-78.5-22.5-78.5-61 44-54 86-54 63.293 23.721 68 33c5.833 11.5 3.833 30.661-10 34-14.5 3.5-22-4.5-32.5-24-10.858-20.165-49.5-15-62.5-3.5s-9.5 28 44.5 38.5 74 30 74 60.5-30.5 62.5-82.5 62.5z" fill="#fff"/></svg>
                    <span class="messenger-v1__messenger-name">${skypeText}</span>
                  </a>`;

  const telegram = `<a href="tg://resolve?domain=${telegramUserName}" class="messenger-v1__messenger-item" target="_blank" rel="noopener">
                      <svg class="messenger-v1__messenger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.731 455.731"><path fill="#61a8de" d="M0 0h455.731v455.731H0z"/><path d="M358.844 100.6L54.091 219.359c-9.871 3.847-9.273 18.012.888 21.012l77.441 22.868 28.901 91.706c3.019 9.579 15.158 12.483 22.185 5.308l40.039-40.882 78.56 57.665c9.614 7.057 23.306 1.814 25.747-9.859l52.031-248.76c2.548-12.185-9.44-22.337-21.039-17.817zm-38.208 55.206L179.08 280.984a7.603 7.603 0 0 0-2.519 4.847l-5.45 48.448c-.178 1.58-2.389 1.789-2.861.271l-22.423-72.253a7.605 7.605 0 0 1 3.255-8.717l167.163-103.676c3.844-2.386 7.78 2.906 4.391 5.902z" fill="#fff"/></svg>
                      <span class="messenger-v1__messenger-name">${telegramText}</span>
                    </a>`;

  const whatsApp = `<a href="https://wa.me/%2B${phoneNumberWhatsApp}" class="messenger-v1__messenger-item" target="_blank" rel="noopener">
                      <svg class="messenger-v1__messenger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.731 455.731"><path fill="#1bd741" d="M0 0h455.731v455.731H0z"/><path d="M68.494 387.41l22.323-79.284c-14.355-24.387-21.913-52.134-21.913-80.638 0-87.765 71.402-159.167 159.167-159.167s159.166 71.402 159.166 159.167-71.401 159.167-159.166 159.167c-27.347 0-54.125-7-77.814-20.292L68.494 387.41zm85.943-50.004l4.872 2.975c20.654 12.609 44.432 19.274 68.762 19.274 72.877 0 132.166-59.29 132.166-132.167S300.948 95.321 228.071 95.321 95.904 154.611 95.904 227.488c0 25.393 7.217 50.052 20.869 71.311l3.281 5.109-12.855 45.658 47.238-12.16z" fill="#fff"/><path d="M183.359 153.407l-10.328-.563a12.49 12.49 0 0 0-8.878 3.037c-5.007 4.348-13.013 12.754-15.472 23.708-3.667 16.333 2 36.333 16.667 56.333 14.667 20 42 52 90.333 65.667 15.575 4.404 27.827 1.435 37.28-4.612 7.487-4.789 12.648-12.476 14.508-21.166l1.649-7.702a5.35 5.35 0 0 0-2.993-5.98L271.22 246.04a5.352 5.352 0 0 0-6.477 1.591l-13.703 17.764a3.921 3.921 0 0 1-4.407 1.312c-9.384-3.298-40.818-16.463-58.066-49.687a3.96 3.96 0 0 1 .499-4.419l13.096-15.15a5.35 5.35 0 0 0 .872-5.602l-15.046-35.201a5.352 5.352 0 0 0-4.629-3.241z" fill="#fff"/></svg>
                      <span class="messenger-v1__messenger-name">${whatsAppText}</span>
                    </a>`;


  return `<div class="messenger-v1" 
            data-messenger-v1 
            data-chat-tooltip-text="${tooltipText}"
            tabindex="0"
          >
            <div class="messenger-v1__messenger">
              ${addEmail ? email : ''}
              ${addMessenger ? messenger : ''}
              ${addViber ? viber : ''}              
              ${addSkype ? skype : ''}              
              ${addTelegram ? telegram : ''}  
              ${addWhatsApp ? whatsApp : ''}  
            </div>
            <div class="messenger-v1__icon">
              <svg class="messenger-v1__icon-message" height="640" viewBox="0 -24 480 480" width="640" xmlns="http://www.w3.org/2000/svg"><path class="chat-svg" fill="#fff" d="M408 0H72C32.254.043.043 32.254 0 72v208c.043 39.746 32.254 71.957 72 72h22.238L80.16 422.398c-.605 3.028.586 6.13 3.055 7.977s5.781 2.11 8.512.672L241.977 352H408c39.746-.043 71.957-32.254 72-72V72c-.043-39.746-32.254-71.957-72-72zm56 280c-.035 30.914-25.086 55.965-56 56H240c-1.3 0-2.578.316-3.727.922L99.145 409.098l12.695-63.496A7.997 7.997 0 0 0 104 336H72c-30.914-.035-55.965-25.086-56-56V72c.035-30.914 25.086-55.965 56-56h336c30.914.035 55.965 25.086 56 56zm0 0"/></svg>
              <svg class="messenger-v1__icon-close" enable-background="new 0 0 256 256" height="256px" version="1.1" viewBox="0 0 256 256" width="256px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M137.051,128l75.475-75.475c2.5-2.5,2.5-6.551,0-9.051s-6.551-2.5-9.051,0L128,118.949L52.525,43.475  c-2.5-2.5-6.551-2.5-9.051,0s-2.5,6.551,0,9.051L118.949,128l-75.475,75.475c-2.5,2.5-2.5,6.551,0,9.051  c1.25,1.25,2.888,1.875,4.525,1.875s3.275-0.625,4.525-1.875L128,137.051l75.475,75.475c1.25,1.25,2.888,1.875,4.525,1.875  s3.275-0.625,4.525-1.875c2.5-2.5,2.5-6.551,0-9.051L137.051,128z" fill="#ffffff"/> </svg>
            </div>
          </div>`;
};

export const Messenger_version_1 = Template.bind({});
Messenger_version_1.args = {
  tooltipText: 'Задайте свой вопрос',
  addEmail: true,
  emailText: 'Написать на почту',
  emailAddress: 'vadim.yakovenko86@gmail.com',
  addMessenger: true,
  messengerText: 'Написать в Messenger',
  messengerID: 'id=100006931363781',
  addViber: true,
  viberText: 'Написать в Viber',
  phoneNumber: '380937945751',
  addSkype: true,
  skypeText: 'Написать в Skype',
  skypeUserName: 'yakovenko86',
  addTelegram: true,
  telegramText: 'Написать в Telegram',
  telegramUserName: 'vadimYakovenko',
  addWhatsApp: true,
  whatsAppText: 'Написать в WhatsApp',
  phoneNumberWhatsApp: '380937945751'
};

window.addEventListener('load', function () {
  new InitMessenger();
})