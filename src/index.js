import './styles.css'

// text
const heading = document.createElement('h1')
heading.textContent = 'We value your privacy!'

const text = document.createElement('p')
text.textContent = 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read More'

const textContainer = document.createElement('div')
textContainer.className = 'textContainer'

textContainer.append(heading)
textContainer.append(text)

// buttons

const buttonContainer = document.createElement('div')
buttonContainer.className = 'buttonContainer'

const acceptButton = document.createElement('button')
acceptButton.className = 'button'
const accept = document.createTextNode("Accept");
acceptButton.appendChild(accept);

const rejectButton = document.createElement('button')
rejectButton.className = 'button'
const reject = document.createTextNode("Reject");
rejectButton.appendChild(reject);

buttonContainer.append(acceptButton)
buttonContainer.append(rejectButton)

// main container
const container = document.createElement('div')
container.className = 'container'

//content
const content = document.createElement('div')
content.className = 'content'


content.append(textContainer)
content.append(buttonContainer)

container.append(heading)
container.append(content)

const app = document.querySelector('body')
app.append(container)